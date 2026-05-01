let editingJournalId = "";
let creatingJournalEntry = false;

function openJournalCreate() {
  editingJournalId = "";
  creatingJournalEntry = true;
  render();
  dom.main.scrollIntoView({ block: "start" });
}

function closeJournalEditor() {
  editingJournalId = "";
  creatingJournalEntry = false;
  render();
}

function renderJournalForm() {
  const entry = editingJournalId ? state.journal.find((item) => item.id === editingJournalId) : null;
  if (!entry && !creatingJournalEntry) return null;

  const overlay = element("div", "journal-overlay");
  const form = element("form", "journal-editor");
  const title = document.createElement("input");
  title.name = "title";
  title.required = true;
  title.placeholder = "Entry title";
  title.className = "journal-title-input";
  title.value = entry?.title || "Notes";

  const date = element("div", "journal-editor-date", formatDate(entry?.date || todayDate()));

  const body = document.createElement("textarea");
  body.name = "body";
  body.placeholder = "Notes";
  body.className = "journal-note-input";
  body.value = entry?.body || "";
  body.addEventListener("input", () => applyJournalLiveInput(form, { title, body }));
  body.addEventListener("keydown", (event) => {
    if (!isSaveShortcut(event)) return;
    event.preventDefault();
    saveJournalForm(entry, { title, body });
  });

  const controls = { title, body };
  title.addEventListener("keydown", (event) => {
    if (isSaveShortcut(event)) {
      event.preventDefault();
      saveJournalForm(entry, controls);
      return;
    }
    if (event.key === "Enter") {
      event.preventDefault();
      body.focus();
    }
  });

  const header = element("div", "journal-editor-header");
  header.append(title, date);
  form.append(header, body, renderJournalFormActions(entry, controls));
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    saveJournalForm(entry, controls);
  });
  overlay.append(form);

  setTimeout(() => body.focus(), 0);
  return overlay;
}

function renderJournalFormActions(entry, controls) {
  const actions = element("div", "journal-form-actions");
  const close = element("button", "journal-icon-btn", "×");
  close.type = "button";
  close.title = "Close editor";
  close.setAttribute("aria-label", "Close journal editor");
  close.addEventListener("click", closeJournalEditor);

  const save = element("button", "journal-icon-btn primary", "✓");
  save.type = "submit";
  save.title = entry ? "Save journal entry" : "Post journal entry";
  save.setAttribute("aria-label", entry ? "Save journal entry" : "Post journal entry");
  actions.append(close, save);

  return actions;
}

function saveJournalForm(entry, controls) {
  const data = {
    title: controls.title.value.trim() || "Notes",
    date: entry?.date || todayDate(),
    type: entry?.type || JOURNAL_TYPES[0],
    linkedItemKeys: entry?.linkedItemKeys || [],
    tags: entry?.tags || [],
    body: controls.body.value
  };

  if (entry) {
    updateJournalEntry(entry.id, data);
    editingJournalId = "";
  } else {
    createJournalEntry(data);
    creatingJournalEntry = false;
  }
  render();
}

function applyJournalLiveInput(form, controls) {
  applyJournalHeadingShortcut(controls);
  form.dataset.commandActive = String(controls.body.value.includes("/"));
}

function applyJournalHeadingShortcut(controls) {
  const match = controls.body.value.match(/^#\s*([^\r\n]+)\r?\n/);
  if (!match) return;

  const heading = match[1].trim();
  if (heading) controls.title.value = heading;
  controls.body.value = controls.body.value.slice(match[0].length);
}

function isSaveShortcut(event) {
  return event.key === "Enter" && (event.ctrlKey || event.metaKey);
}
