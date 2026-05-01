let editingJournalId = "";
let creatingJournalEntry = false;

function openJournalCreate() {
  editingJournalId = "";
  creatingJournalEntry = true;
  render();
  if (typeof document.querySelector === "function") {
    document.querySelector(".journal-create-card")?.scrollIntoView({ block: "nearest" });
  }
}

function closeJournalEditor() {
  editingJournalId = "";
  creatingJournalEntry = false;
  render();
}

function renderJournalForm() {
  const entry = editingJournalId ? state.journal.find((item) => item.id === editingJournalId) : null;
  if (!entry) return null;

  const overlay = element("div", "journal-overlay");
  const form = element("form", "journal-editor");
  const title = document.createElement("input");
  title.name = "title";
  title.required = true;
  title.placeholder = "Entry title";
  title.className = "journal-title-input";
  title.value = entry?.title || "Notes";

  const subtitle = element("div", "journal-editor-subtitle", entry?.subtitle || "");
  subtitle.hidden = !subtitle.textContent;
  const date = element("div", "journal-editor-date", formatDate(entry?.date || todayDate()));

  const body = document.createElement("textarea");
  body.name = "body";
  body.placeholder = "Notes";
  body.className = "journal-note-input";
  body.value = entry?.body || "";
  body.addEventListener("input", () => applyJournalLiveInput(form, { title, subtitle, body }));
  body.addEventListener("keydown", (event) => {
    if (!isSaveShortcut(event)) return;
    event.preventDefault();
    saveJournalForm(entry, { title, subtitle, body });
  });

  const controls = { title, subtitle, body };
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
  header.append(title, subtitle, date);
  form.append(header, body, renderJournalFormActions(entry, controls));
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    saveJournalForm(entry, controls);
  });
  form.addEventListener("keydown", handleJournalEditorKeydown);
  overlay.append(form);

  setTimeout(() => body.focus(), 0);
  return overlay;
}

function renderJournalCreateItem() {
  if (!creatingJournalEntry) return null;

  const card = element("article", "journal-card journal-create-card expanded");
  const form = element("form", "journal-inline-editor");
  const title = document.createElement("input");
  title.name = "title";
  title.required = true;
  title.placeholder = "Entry title";
  title.className = "journal-title-input journal-inline-title";
  title.value = "Notes";

  const subtitle = element("div", "journal-editor-subtitle", "");
  subtitle.hidden = true;
  const date = element("div", "journal-inline-date", formatDate(todayDate()));

  const body = document.createElement("textarea");
  body.name = "body";
  body.placeholder = "Notes";
  body.className = "journal-note-input journal-inline-note";
  body.value = "";
  body.addEventListener("input", () => handleJournalInlineBodyInput(form, { title, subtitle, body }));
  body.addEventListener("keydown", (event) => {
    if (!isSaveShortcut(event)) return;
    event.preventDefault();
    saveJournalForm(null, { title, subtitle, body });
  });

  const controls = { title, subtitle, body };
  title.addEventListener("keydown", (event) => {
    if (isSaveShortcut(event)) {
      event.preventDefault();
      saveJournalForm(null, controls);
      return;
    }
    if (event.key === "Enter") {
      event.preventDefault();
      body.focus();
    }
  });

  const content = element("div", "journal-inline-content");
  content.append(title, subtitle);
  const side = element("div", "journal-row-side journal-inline-side");
  side.append(date);

  const row = element("div", "journal-row journal-inline-row");
  row.append(content, side);
  const noteWrap = element("div", "journal-inline-note-wrap");
  noteWrap.append(body, renderJournalFormActions(null, controls));
  form.append(row, noteWrap);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    saveJournalForm(null, controls);
  });
  form.addEventListener("keydown", handleJournalEditorKeydown);
  card.append(form);

  setTimeout(() => {
    body.focus();
    resizeJournalInlineNote(body);
  }, 0);
  return card;
}

function handleJournalEditorKeydown(event) {
  if (event.key !== "Escape") return;
  event.preventDefault();
  event.stopPropagation();
  closeJournalEditor();
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
    subtitle: controls.subtitle.textContent.trim(),
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
  applyJournalHeadingShortcuts(controls);
  form.dataset.commandActive = String(controls.body.value.includes("/"));
}

function handleJournalInlineBodyInput(form, controls) {
  applyJournalLiveInput(form, controls);
  resizeJournalInlineNote(controls.body);
}

function applyJournalHeadingShortcuts(controls) {
  while (true) {
    const match = controls.body.value.match(/^(#{2}|#)\s*([^\r\n]+)\r?\n/);
    if (!match) break;

    const heading = match[2].trim();
    if (heading && match[1] === "#") {
      controls.title.value = heading;
    } else if (heading && match[1] === "##") {
      controls.subtitle.textContent = heading;
      controls.subtitle.hidden = false;
    }
    controls.body.value = controls.body.value.slice(match[0].length);
  }
}

function isSaveShortcut(event) {
  return event.key === "Enter" && (event.ctrlKey || event.metaKey);
}

function resizeJournalInlineNote(body) {
  const viewportBottomPadding = 28;
  const minHeight = 180;
  const rect = body.getBoundingClientRect();
  const maxHeight = Math.max(minHeight, window.innerHeight - rect.top - viewportBottomPadding);

  body.style.height = "auto";
  const nextHeight = Math.min(Math.max(body.scrollHeight, minHeight), maxHeight);
  body.style.height = `${nextHeight}px`;
  body.style.overflowY = body.scrollHeight > maxHeight ? "auto" : "hidden";
}
