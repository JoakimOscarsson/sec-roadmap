const ROADMAP_MIRROR_CONFIG_KEY = "securityRoadmap.localMirror";
const ROADMAP_MIRROR_DEFAULT_ENDPOINT = "http://127.0.0.1:3333";
const ROADMAP_MIRROR_SYNC_DELAY_MS = 700;
const ROADMAP_MIRROR_TIMEOUT_MS = 2200;

let mirrorConfig = loadMirrorConfig();
let mirrorSyncTimer = null;
let mirrorSyncInFlight = false;
let mirrorSyncQueued = false;
let mirrorStatus = {
  state: mirrorConfig.enabled ? "idle" : "disabled",
  message: mirrorConfig.enabled ? "Mirror enabled." : "Mirror disabled.",
  lastOkAt: "",
  lastErrorAt: "",
  lastError: "",
  lastMirroredAt: ""
};

function initializeMirrorSync() {
  mirrorConfig = loadMirrorConfig();
  mirrorStatus.state = mirrorConfig.enabled ? "idle" : "disabled";
  mirrorStatus.message = mirrorConfig.enabled ? "Mirror enabled." : "Mirror disabled.";
  if (mirrorConfig.enabled) scheduleMirrorSync("startup", { delay: 1200 });
}

function loadMirrorConfig() {
  try {
    const saved = JSON.parse(localStorage.getItem(ROADMAP_MIRROR_CONFIG_KEY) || "{}");
    return normalizeMirrorConfig(saved);
  } catch {
    return normalizeMirrorConfig({});
  }
}

function normalizeMirrorConfig(value) {
  return {
    enabled: Boolean(value?.enabled),
    endpoint: normalizeMirrorEndpoint(value?.endpoint || ROADMAP_MIRROR_DEFAULT_ENDPOINT),
    token: typeof value?.token === "string" ? value.token.trim() : ""
  };
}

function normalizeMirrorEndpoint(value) {
  const trimmed = String(value || "").trim() || ROADMAP_MIRROR_DEFAULT_ENDPOINT;
  return trimmed.replace(/\/+$/, "");
}

function saveMirrorConfig(config, options = {}) {
  mirrorConfig = normalizeMirrorConfig(config);
  try {
    localStorage.setItem(ROADMAP_MIRROR_CONFIG_KEY, JSON.stringify(mirrorConfig));
  } catch {
    // Mirror settings are local-only; sync can still run for this session.
  }
  mirrorStatus.state = mirrorConfig.enabled ? "idle" : "disabled";
  mirrorStatus.message = mirrorConfig.enabled ? "Mirror enabled." : "Mirror disabled.";
  if (!mirrorConfig.enabled) window.clearTimeout(mirrorSyncTimer);
  renderMirrorStatus();
  if (mirrorConfig.enabled && options.sync !== false) scheduleMirrorSync("settings-save", { delay: 0 });
  return mirrorConfig;
}

function getMirrorConfig() {
  return { ...mirrorConfig };
}

function getMirrorStatus() {
  return { ...mirrorStatus };
}

function scheduleMirrorSync(reason = "state-change", options = {}) {
  if (!mirrorConfig.enabled || typeof fetch !== "function") return Promise.resolve(false);
  const delay = Number.isFinite(options.delay) ? Math.max(0, options.delay) : ROADMAP_MIRROR_SYNC_DELAY_MS;
  mirrorStatus.state = "pending";
  mirrorStatus.message = "Sync pending.";
  mirrorStatus.reason = reason;
  renderMirrorStatus();
  window.clearTimeout(mirrorSyncTimer);
  mirrorSyncTimer = window.setTimeout(() => {
    flushMirrorSync(reason).catch(() => {});
  }, delay);
  return Promise.resolve(true);
}

async function flushMirrorSync(reason = "manual") {
  if (!mirrorConfig.enabled || typeof fetch !== "function") return false;
  if (mirrorSyncInFlight) {
    mirrorSyncQueued = true;
    return false;
  }

  mirrorSyncInFlight = true;
  mirrorStatus.state = "syncing";
  mirrorStatus.message = "Syncing.";
  mirrorStatus.reason = reason;
  renderMirrorStatus();

  const controller = typeof AbortController !== "undefined" ? new AbortController() : null;
  const timeout = controller
    ? window.setTimeout(() => controller.abort(), ROADMAP_MIRROR_TIMEOUT_MS)
    : null;

  try {
    const response = await fetch(mirrorUrl("/api/mirror/state"), {
      method: "PUT",
      mode: "cors",
      cache: "no-store",
      headers: mirrorRequestHeaders(),
      body: JSON.stringify(createMirrorPayload()),
      signal: controller?.signal
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      throw new Error(`Mirror sync failed (${response.status})${detail ? `: ${trimText(detail, 180)}` : ""}`);
    }

    const result = await response.json().catch(() => ({}));
    mirrorStatus.state = "ok";
    mirrorStatus.message = "Synced.";
    mirrorStatus.lastOkAt = new Date().toISOString();
    mirrorStatus.lastError = "";
    mirrorStatus.lastMirroredAt = result.mirroredAt || mirrorStatus.lastOkAt;
    return true;
  } catch (error) {
    mirrorStatus.state = "error";
    mirrorStatus.message = "Sync failed.";
    mirrorStatus.lastErrorAt = new Date().toISOString();
    mirrorStatus.lastError = error.name === "AbortError" ? "Mirror sync timed out." : error.message || "Mirror sync failed.";
    return false;
  } finally {
    if (timeout) window.clearTimeout(timeout);
    mirrorSyncInFlight = false;
    renderMirrorStatus();
    if (mirrorSyncQueued) {
      mirrorSyncQueued = false;
      scheduleMirrorSync("queued", { delay: 250 });
    }
  }
}

function createMirrorPayload() {
  return {
    schema: "sec-roadmap.live-state",
    version: 1,
    mirroredAt: new Date().toISOString(),
    app: {
      name: "sec-roadmap",
      storageVersion: ROADMAP_DB_VERSION
    },
    source: {
      href: window.location.href,
      title: document.title
    },
    state: normalizeState(state)
  };
}

function mirrorRequestHeaders() {
  const headers = { "content-type": "application/json" };
  if (mirrorConfig.token) headers.authorization = `Bearer ${mirrorConfig.token}`;
  return headers;
}

function mirrorUrl(path) {
  return new URL(path, `${mirrorConfig.endpoint}/`).href;
}

function renderMirrorStatus() {
  const node = document.getElementById("mirrorStatus");
  if (!node) return;

  const status = getMirrorStatus();
  node.className = `mirror-status mirror-status-${status.state}`;
  node.replaceChildren();

  const title = element("div", "mirror-status-title", status.message);
  const detail = element("div", "mirror-status-detail", mirrorStatusDetail(status));
  node.append(title, detail);

  if (status.lastError) {
    node.append(element("div", "mirror-status-error", status.lastError));
  }
}

function mirrorStatusDetail(status) {
  if (status.state === "disabled") return "Enable the local companion mirror to sync app state.";
  if (status.state === "pending") return "Waiting for recent changes to settle.";
  if (status.state === "syncing") return "Pushing the latest IndexedDB state to the local companion.";
  if (status.lastMirroredAt) return `Last mirror update: ${formatMirrorDateTime(status.lastMirroredAt)}`;
  return "No successful mirror sync yet.";
}

function formatMirrorDateTime(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}
