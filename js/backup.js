const ROADMAP_BACKUP_SCHEMA = "sec-roadmap.user-state";
const ROADMAP_BACKUP_VERSION = 1;

async function exportRoadmapBackup() {
  if (typeof saveJournalInlineEditors === "function") saveJournalInlineEditors();

  const snapshot = normalizeState(state);
  await savePersistedState(snapshot);
  const payload = {
    schema: ROADMAP_BACKUP_SCHEMA,
    version: ROADMAP_BACKUP_VERSION,
    exportedAt: new Date().toISOString(),
    app: {
      name: "sec-roadmap",
      storageVersion: ROADMAP_DB_VERSION
    },
    state: snapshot
  };

  downloadJsonFile(payload, `sec-roadmap-backup-${todayDate()}.json`);
}

async function importRoadmapBackupFile(file) {
  if (!file) return false;

  let backup;
  try {
    backup = parseRoadmapBackupPayload(await file.text());
  } catch (error) {
    window.alert(`Could not import backup: ${error.message}`);
    return false;
  }

  const summary = roadmapBackupSummary(backup.state);
  const confirmed = window.confirm(
    `Import this backup and replace current local data?\n\n${summary}\n\nThis cannot be undone unless you export the current data first.`
  );
  if (!confirmed) return false;

  if (typeof saveJournalInlineEditors === "function") saveJournalInlineEditors();
  if (typeof destroyAllJournalEditors === "function") destroyAllJournalEditors();
  state = backup.state;
  await savePersistedState(state);
  initializeControls();
  render();
  window.alert("Backup imported.");
  return true;
}

function parseRoadmapBackupPayload(text) {
  let payload;
  try {
    payload = JSON.parse(text);
  } catch {
    throw new Error("the selected file is not valid JSON.");
  }

  const candidate = extractRoadmapBackupState(payload);
  if (!isRoadmapStateCandidate(candidate)) {
    throw new Error("the selected file does not look like a Security Roadmap backup.");
  }

  return {
    payload,
    state: normalizeState(candidate)
  };
}

function extractRoadmapBackupState(payload) {
  if (!payload || typeof payload !== "object") return null;
  if (payload.schema === ROADMAP_BACKUP_SCHEMA) return payload.state || null;
  if (payload.schema) return null;
  return payload;
}

function isRoadmapStateCandidate(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  return [
    "checked",
    "favorites",
    "dates",
    "reviewComplete",
    "portfolio",
    "custom",
    "journal",
    "tab",
    "query",
    "level",
    "journalTypeFilter",
    "selected",
    "view"
  ].some((key) => Object.prototype.hasOwnProperty.call(value, key));
}

function downloadJsonFile(value, filename) {
  const blob = new Blob([`${JSON.stringify(value, null, 2)}\n`], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 0);
}

function roadmapBackupSummary(snapshot) {
  const parts = [
    `${Object.keys(snapshot.checked || {}).length} progress items`,
    `${Object.keys(snapshot.favorites || {}).length} plan items`,
    `${Array.isArray(snapshot.custom) ? snapshot.custom.length : 0} custom topics`,
    `${Array.isArray(snapshot.journal) ? snapshot.journal.length : 0} journal entries`,
    `${Array.isArray(snapshot.activity) ? snapshot.activity.length : 0} activity events`,
    `${Object.keys(snapshot.portfolio || {}).length} portfolio items`
  ];
  return parts.join("\n");
}
