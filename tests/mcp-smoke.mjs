import { spawn } from "node:child_process";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const root = new URL("..", import.meta.url);
const tempDir = mkdtempSync(join(tmpdir(), "sec-roadmap-mcp-"));
const statePath = join(tempDir, "backup.json");

writeState({
  schema: "sec-roadmap.user-state",
  version: 1,
  state: {
    checked: { "custom:topic-1": 2 },
    favorites: { "custom:topic-1": true },
    dates: { "custom:topic-1": { 2: "2026-04-01" } },
    custom: [{ id: "topic-1", title: "Custom AI planning lab", area: "AI Security" }],
    journal: [{
      id: "journal-1",
      title: "Planning note",
      subtitle: "Custom AI planning lab",
      body: "Worked through the custom AI planning topic.",
      date: "2026-05-01",
      type: "note",
      linkedItemKeys: ["custom:topic-1"],
      tags: ["planning"],
      createdAt: "2026-05-01T09:00:00.000Z",
      updatedAt: "2026-05-01T09:30:00.000Z"
    }],
    activity: [{
      id: "activity-1",
      kind: "level-change",
      message: "Set Custom AI planning lab to level 2",
      date: "2026-05-01",
      occurredAt: "2026-05-01T09:45:00.000Z",
      itemKey: "custom:topic-1",
      itemKeys: ["custom:topic-1"],
      context: "Custom / AI Security"
    }]
  }
});

const child = spawn(process.execPath, ["mcp/sec-roadmap-mcp.mjs", "--state", statePath], {
  cwd: root,
  stdio: ["pipe", "pipe", "pipe"]
});

let stdout = Buffer.alloc(0);
let stderr = "";
let nextId = 1;
const pending = new Map();

child.stderr.on("data", (chunk) => {
  stderr += chunk.toString("utf8");
});

child.stdout.on("data", (chunk) => {
  stdout = Buffer.concat([stdout, chunk]);
  drainMessages();
});

child.on("exit", (code, signal) => {
  const error = new Error(`MCP server exited unexpectedly: code=${code} signal=${signal}\n${stderr}`);
  for (const { reject } of pending.values()) reject(error);
  pending.clear();
});

try {
  const initialized = await request("initialize", {
    protocolVersion: "2024-11-05",
    capabilities: {},
    clientInfo: { name: "sec-roadmap-smoke", version: "0.1.0" }
  });
  if (initialized.protocolVersion !== "2024-11-05") {
    throw new Error("MCP server should negotiate a requested supported protocol version.");
  }

  notify("notifications/initialized");

  const listedTools = await request("tools/list");
  const toolNames = new Set(listedTools.tools.map((tool) => tool.name));
  ["roadmap_overview", "roadmap_search", "plan_list", "journal_list", "context_pack"].forEach((name) => {
    if (!toolNames.has(name)) throw new Error(`MCP tool missing from tools/list: ${name}`);
  });

  const overview = await callTool("roadmap_overview");
  if (!overview.stateLoaded || overview.plan.items !== 1 || overview.journal.notes !== 1) {
    throw new Error("MCP overview should include loaded backup state counts.");
  }

  const plan = await callTool("plan_list", { detail: "normal" });
  if (plan.total !== 1 || plan.items[0].key !== "custom:topic-1" || plan.items[0].level !== 2) {
    throw new Error("MCP plan_list should expose pinned custom topics with progress.");
  }

  await new Promise((resolve) => setTimeout(resolve, 25));
  writeState({
    schema: "sec-roadmap.live-state",
    version: 1,
    state: {
      checked: { "custom:topic-1": 3 },
      favorites: { "custom:topic-1": true },
      dates: { "custom:topic-1": { 3: "2026-05-03" } },
      custom: [{ id: "topic-1", title: "Custom AI planning lab", area: "AI Security" }],
      journal: [{
        id: "journal-1",
        title: "Planning note",
        subtitle: "Custom AI planning lab",
        body: "Worked through the custom AI planning topic.",
        date: "2026-05-01",
        type: "note",
        linkedItemKeys: ["custom:topic-1"],
        tags: ["planning"]
      }]
    }
  });

  const updatedPlan = await callTool("plan_list", { detail: "normal" });
  if (updatedPlan.items[0].level !== 3 || updatedPlan.items[0].date !== "2026-05-03") {
    throw new Error("MCP plan_list should reload a changed live mirror state file between calls.");
  }

  const journal = await callTool("journal_list", {
    days: 30,
    type: "note",
    linkedTo: "custom:topic-1",
    includeBody: false
  });
  if (journal.total !== 1 || journal.items[0].body || journal.items[0].linkedItems[0].key !== "custom:topic-1") {
    throw new Error("MCP journal_list should filter by linked target and omit bodies by default.");
  }

  const note = await callTool("journal_get_entry", { id: "note:journal-1" });
  if (note.body !== "Worked through the custom AI planning topic.") {
    throw new Error("MCP journal_get_entry should return the full note body.");
  }

  const search = await callTool("roadmap_search", { query: "planning lab", scope: "custom" });
  if (search.total !== 1 || search.items[0].key !== "custom:topic-1") {
    throw new Error("MCP roadmap_search should include custom topics from backup state.");
  }

  const contextPack = await callTool("context_pack", { purpose: "weekly-planning", budget: "small" });
  if (!contextPack.plan?.items?.length || !contextPack.journal?.items?.length) {
    throw new Error("MCP context_pack should include bounded plan and recent journal sections.");
  }
} finally {
  child.kill();
  rmSync(tempDir, { recursive: true, force: true });
}

function request(method, params = {}) {
  const id = nextId++;
  const payload = { jsonrpc: "2.0", id, method, params };
  child.stdin.write(frame(payload));
  return new Promise((resolve, reject) => {
    pending.set(id, { resolve, reject });
    setTimeout(() => {
      if (!pending.has(id)) return;
      pending.delete(id);
      reject(new Error(`Timed out waiting for MCP response to ${method}\n${stderr}`));
    }, 5000).unref();
  });
}

function notify(method, params = {}) {
  child.stdin.write(frame({ jsonrpc: "2.0", method, params }));
}

function writeState(value) {
  writeFileSync(statePath, `${JSON.stringify(value, null, 2)}\n`);
}

async function callTool(name, args = {}) {
  const result = await request("tools/call", { name, arguments: args });
  if (result.structuredContent) return result.structuredContent;
  return JSON.parse(result.content[0].text);
}

function frame(value) {
  const body = JSON.stringify(value);
  return `Content-Length: ${Buffer.byteLength(body, "utf8")}\r\n\r\n${body}`;
}

function drainMessages() {
  while (true) {
    const headerEnd = stdout.indexOf("\r\n\r\n");
    if (headerEnd < 0) return;
    const header = stdout.slice(0, headerEnd).toString("utf8");
    const match = header.match(/content-length:\s*(\d+)/i);
    if (!match) throw new Error(`Invalid MCP frame header: ${header}`);
    const length = Number(match[1]);
    const bodyStart = headerEnd + 4;
    const bodyEnd = bodyStart + length;
    if (stdout.length < bodyEnd) return;
    const body = stdout.slice(bodyStart, bodyEnd).toString("utf8");
    stdout = stdout.slice(bodyEnd);
    const message = JSON.parse(body);
    if (!pending.has(message.id)) continue;
    const { resolve, reject } = pending.get(message.id);
    pending.delete(message.id);
    if (message.error) reject(new Error(`${message.error.message}\n${stderr}`));
    else resolve(message.result);
  }
}
