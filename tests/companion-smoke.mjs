import { spawn } from "node:child_process";
import { existsSync, mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createServer } from "node:net";

const root = new URL("..", import.meta.url);
const tempDir = mkdtempSync(join(tmpdir(), "sec-roadmap-companion-"));
const statePath = join(tempDir, "mirror-state.json");
const port = await freePort();
const token = "companion-smoke-token";

const child = spawn(process.execPath, ["mcp/sec-roadmap-companion.mjs"], {
  cwd: root,
  env: {
    ...process.env,
    SEC_ROADMAP_COMPANION_PORT: String(port),
    SEC_ROADMAP_COMPANION_TOKEN: token,
    SEC_ROADMAP_MIRROR_STATE: statePath
  },
  stdio: ["ignore", "pipe", "pipe"]
});

let stderr = "";
child.stderr.on("data", (chunk) => {
  stderr += chunk.toString("utf8");
});

try {
  await waitForHealth(port);

  const unauthorized = await fetch(`http://127.0.0.1:${port}/api/mirror/status`);
  if (unauthorized.status !== 401) {
    throw new Error("Companion mirror status should require a token.");
  }

  const payload = {
    schema: "sec-roadmap.live-state",
    version: 1,
    state: {
      checked: { "custom:topic-1": 2 },
      favorites: { "custom:topic-1": true },
      custom: [{ id: "topic-1", title: "Local mirror topic", area: "MCP" }],
      journal: [{ id: "journal-1", title: "Mirror note", date: "2026-05-03", body: "Synced note." }],
      activity: [{ id: "activity-1", message: "Changed level", date: "2026-05-03" }],
      portfolio: { "portfolio:item-1": true }
    }
  };

  const update = await fetch(`http://127.0.0.1:${port}/api/mirror/state`, {
    method: "PUT",
    headers: {
      authorization: `Bearer ${token}`,
      "content-type": "application/json"
    },
    body: JSON.stringify(payload)
  });
  if (!update.ok) {
    throw new Error(`Companion state update failed: ${update.status} ${await update.text()}`);
  }

  if (!existsSync(statePath)) {
    throw new Error("Companion should write the mirrored state file.");
  }

  const written = JSON.parse(readFileSync(statePath, "utf8"));
  if (written.schema !== "sec-roadmap.live-state" || written.state.custom[0].title !== "Local mirror topic") {
    throw new Error("Companion should persist a live-state payload with the supplied app state.");
  }

  const status = await fetchJson(`http://127.0.0.1:${port}/api/mirror/status`, token);
  if (
    status.counts.progressItems !== 1
    || status.counts.planItems !== 1
    || status.counts.customTopics !== 1
    || status.counts.journalEntries !== 1
    || status.counts.activityEvents !== 1
    || status.counts.portfolioItems !== 1
  ) {
    throw new Error("Companion status should summarize mirrored state counts.");
  }
} finally {
  child.kill();
  rmSync(tempDir, { recursive: true, force: true });
}

async function fetchJson(url, bearerToken) {
  const response = await fetch(url, {
    headers: { authorization: `Bearer ${bearerToken}` }
  });
  if (!response.ok) throw new Error(`GET ${url} failed: ${response.status}`);
  return response.json();
}

async function waitForHealth(serverPort) {
  const deadline = Date.now() + 5000;
  while (Date.now() < deadline) {
    try {
      const response = await fetch(`http://127.0.0.1:${serverPort}/health`);
      if (response.ok) return;
    } catch {
      // Retry until the process has started listening.
    }
    await new Promise((resolve) => setTimeout(resolve, 50));
  }
  throw new Error(`Companion did not start in time.\n${stderr}`);
}

function freePort() {
  return new Promise((resolve, reject) => {
    const server = createServer();
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      const port = typeof address === "object" && address ? address.port : 0;
      server.close(() => resolve(port));
    });
    server.on("error", reject);
  });
}
