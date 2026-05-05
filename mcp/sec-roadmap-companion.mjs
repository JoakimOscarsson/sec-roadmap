#!/usr/bin/env node
import { createHash, randomBytes, timingSafeEqual } from "node:crypto";
import { createServer } from "node:http";
import { existsSync, mkdirSync, readFileSync, renameSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const SERVER_NAME = "sec-roadmap-companion";
const SERVER_VERSION = "0.1.0";
const MIRROR_SCHEMA = "sec-roadmap.live-state";
const MAX_BODY_BYTES = 8 * 1024 * 1024;
const DEFAULT_ALLOWED_ORIGINS = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "http://localhost:4173",
  "http://127.0.0.1:4173",
  "http://localhost:8080",
  "http://127.0.0.1:8080",
  "http://localhost:3333",
  "http://127.0.0.1:3333",
  "null"
];

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const host = process.env.SEC_ROADMAP_COMPANION_HOST || cliOption("--host") || "127.0.0.1";
const port = Number(process.env.SEC_ROADMAP_COMPANION_PORT || cliOption("--port") || 3333);
const statePath = resolve(repoRoot, process.env.SEC_ROADMAP_MIRROR_STATE || cliOption("--state") || ".sec-roadmap/mirror-state.json");
const tokenPath = resolve(repoRoot, process.env.SEC_ROADMAP_COMPANION_TOKEN_FILE || ".sec-roadmap/companion-token");
const token = process.env.SEC_ROADMAP_COMPANION_TOKEN || readOrCreateToken(tokenPath);
const allowedOrigins = parseAllowedOrigins(process.env.SEC_ROADMAP_COMPANION_ORIGINS);

const server = createServer((request, response) => {
  handleRequest(request, response).catch((error) => {
    sendJson(request, response, error.statusCode || 500, {
      error: error.code || "internal_error",
      message: error.message || "Internal server error."
    });
  });
});

server.listen(port, host, () => {
  const address = server.address();
  const resolvedPort = typeof address === "object" && address ? address.port : port;
  console.log(`${SERVER_NAME} listening on http://${host}:${resolvedPort}`);
  console.log(`Mirror state: ${statePath}`);
  console.log(`Token file: ${tokenPath}`);
  console.log(`Token: ${token}`);
});

async function handleRequest(request, response) {
  if (request.method === "OPTIONS") {
    sendEmpty(request, response, 204);
    return;
  }

  const url = new URL(request.url || "/", `http://${request.headers.host || `${host}:${port}`}`);

  if (request.method === "GET" && url.pathname === "/health") {
    sendJson(request, response, 200, {
      ok: true,
      name: SERVER_NAME,
      version: SERVER_VERSION
    });
    return;
  }

  if (!isAuthorized(request)) {
    sendJson(request, response, 401, {
      error: "unauthorized",
      message: "Missing or invalid companion token."
    });
    return;
  }

  if (request.method === "GET" && url.pathname === "/api/mirror/status") {
    sendJson(request, response, 200, mirrorStatus());
    return;
  }

  if (request.method === "GET" && url.pathname === "/api/mirror/state") {
    const payload = readMirroredPayload();
    if (!payload) {
      sendJson(request, response, 404, {
        error: "not_found",
        message: "No mirrored state has been written yet."
      });
      return;
    }
    sendJson(request, response, 200, payload);
    return;
  }

  if (request.method === "PUT" && url.pathname === "/api/mirror/state") {
    const payload = await readJsonBody(request);
    const mirrored = normalizeMirrorPayload(payload);
    writeMirroredPayload(mirrored);
    sendJson(request, response, 200, mirrorStatus(mirrored));
    return;
  }

  sendJson(request, response, 404, {
    error: "not_found",
    message: `Unknown endpoint: ${request.method} ${url.pathname}`
  });
}

function normalizeMirrorPayload(payload) {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    throw httpError(400, "invalid_payload", "Mirror payload must be a JSON object.");
  }

  const state = payload.state && typeof payload.state === "object" && !Array.isArray(payload.state)
    ? payload.state
    : payload;

  return {
    schema: MIRROR_SCHEMA,
    version: 1,
    mirroredAt: new Date().toISOString(),
    source: sanitizeObject(payload.source),
    app: sanitizeObject(payload.app),
    state
  };
}

function readJsonBody(request) {
  return new Promise((resolve, reject) => {
    const contentType = String(request.headers["content-type"] || "");
    if (!contentType.toLowerCase().includes("application/json")) {
      reject(httpError(415, "unsupported_media_type", "Mirror sync requires application/json."));
      request.resume();
      return;
    }

    let size = 0;
    const chunks = [];
    request.on("data", (chunk) => {
      size += chunk.byteLength;
      if (size > MAX_BODY_BYTES) {
        reject(httpError(413, "payload_too_large", "Mirror payload is too large."));
        request.destroy();
        return;
      }
      chunks.push(chunk);
    });
    request.on("end", () => {
      try {
        resolve(JSON.parse(Buffer.concat(chunks).toString("utf8")));
      } catch {
        reject(httpError(400, "invalid_json", "Request body is not valid JSON."));
      }
    });
    request.on("error", reject);
  });
}

function writeMirroredPayload(payload) {
  mkdirSync(dirname(statePath), { recursive: true });
  const tempPath = `${statePath}.${process.pid}.tmp`;
  writeFileSync(tempPath, `${JSON.stringify(payload, null, 2)}\n`, { mode: 0o600 });
  renameSync(tempPath, statePath);
}

function readMirroredPayload() {
  if (!existsSync(statePath)) return null;
  try {
    return JSON.parse(readFileSync(statePath, "utf8"));
  } catch {
    return null;
  }
}

function mirrorStatus(payload = readMirroredPayload()) {
  const state = payload?.state && typeof payload.state === "object" ? payload.state : {};
  return {
    ok: true,
    name: SERVER_NAME,
    version: SERVER_VERSION,
    schema: payload?.schema || null,
    statePath,
    mirroredAt: payload?.mirroredAt || null,
    counts: {
      progressItems: objectSize(state.checked),
      planItems: objectSize(state.favorites),
      customTopics: Array.isArray(state.custom) ? state.custom.length : 0,
      journalEntries: Array.isArray(state.journal) ? state.journal.length : 0,
      activityEvents: Array.isArray(state.activity) ? state.activity.length : 0,
      portfolioItems: objectSize(state.portfolio)
    }
  };
}

function isAuthorized(request) {
  const header = String(request.headers.authorization || "");
  const expected = `Bearer ${token}`;
  return safeEqual(header, expected);
}

function safeEqual(left, right) {
  const leftHash = createHash("sha256").update(String(left)).digest();
  const rightHash = createHash("sha256").update(String(right)).digest();
  return timingSafeEqual(leftHash, rightHash);
}

function sendJson(request, response, statusCode, payload) {
  setCorsHeaders(request, response);
  response.writeHead(statusCode, {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store"
  });
  response.end(`${JSON.stringify(payload, null, 2)}\n`);
}

function sendEmpty(request, response, statusCode) {
  setCorsHeaders(request, response);
  response.writeHead(statusCode, { "cache-control": "no-store" });
  response.end();
}

function setCorsHeaders(request, response) {
  const origin = request.headers.origin;
  if (origin && allowedOrigins.includes(origin)) {
    response.setHeader("access-control-allow-origin", origin);
    response.setHeader("vary", "origin");
  }
  response.setHeader("access-control-allow-methods", "GET, PUT, OPTIONS");
  response.setHeader("access-control-allow-headers", "authorization, content-type");
  response.setHeader("access-control-max-age", "600");
}

function readOrCreateToken(path) {
  if (existsSync(path)) {
    const saved = readFileSync(path, "utf8").trim();
    if (saved) return saved;
  }

  const generated = randomBytes(24).toString("base64url");
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, `${generated}\n`, { mode: 0o600 });
  return generated;
}

function parseAllowedOrigins(value) {
  const configured = String(value || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
  return configured.length ? configured : DEFAULT_ALLOWED_ORIGINS;
}

function sanitizeObject(value) {
  return value && typeof value === "object" && !Array.isArray(value) ? value : {};
}

function objectSize(value) {
  return value && typeof value === "object" && !Array.isArray(value) ? Object.keys(value).length : 0;
}

function httpError(statusCode, code, message) {
  const error = new Error(message);
  error.statusCode = statusCode;
  error.code = code;
  return error;
}

function cliOption(name) {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] || "" : "";
}
