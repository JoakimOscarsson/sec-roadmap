let editingJournalId = "";
let creatingJournalEntry = false;
const journalInlineEditorControls = new Map();

function openJournalCreate() {
  editingJournalId = "";
  creatingJournalEntry = true;
  render();
  if (typeof document.querySelector === "function") {
    document.querySelector(".journal-create-card")?.scrollIntoView({ block: "nearest" });
  }
}

function closeJournalEditor() {
  destroyAllJournalEditors();
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

  const bodyHost = element("div", "journal-command-host journal-focused-note-wrap");
  const controls = createJournalEditorControls(entry, title, subtitle);
  controls.editor = mountJournalEditor({
    element: bodyHost,
    markdown: entry?.body || "",
    placeholder: "Notes",
    mode: "focused",
    metadata: controls,
    onKeydown: (event) => handleJournalBodyKeydown(event, form, entry, controls)
  });
  title.addEventListener("keydown", (event) => {
    if (isSaveShortcut(event)) {
      event.preventDefault();
      saveJournalForm(entry, controls);
      return;
    }
    if (event.key === "Enter") {
      event.preventDefault();
      focusJournalEditor(controls.editor);
    }
  });

  const header = element("div", "journal-editor-header");
  header.append(title, subtitle, renderJournalEditorMeta(controls), date);
  form.append(header, bodyHost, renderJournalFormActions(entry, controls));
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    saveJournalForm(entry, controls);
  });
  form.addEventListener("keydown", handleJournalEditorKeydown);
  overlay.append(form);

  setTimeout(() => focusJournalEditor(controls.editor), 0);
  return overlay;
}

function renderJournalCreateItem() {
  if (!creatingJournalEntry) return null;

  return renderJournalInlineEditor(null, "journal-create-card");
}

function renderJournalExpansionEditor(entry, header = {}) {
  const wrapper = element("div", "journal-expanded-editor");
  const title = document.createElement("input");
  title.value = entry?.title || "Notes";
  const subtitle = element("div", "journal-editor-subtitle", entry?.subtitle || "");
  subtitle.hidden = true;

  const controls = createJournalEditorControls(entry, title, subtitle);
  controls.headerTitle = header.title || null;
  controls.headerSubtitle = header.subtitle || null;
  controls.headerMeta = header.meta || null;
  const noteWrap = element("div", "journal-inline-note-wrap journal-expanded-note-wrap");
  controls.editor = mountJournalEditor({
    element: noteWrap,
    markdown: entry?.body || "",
    placeholder: "Notes",
    mode: "inline",
    metadata: controls,
    onChange: () => resizeJournalEditor(controls.editor),
    onKeydown: (event) => handleJournalAutosaveBodyKeydown(event, entry, controls)
  });
  journalInlineEditorControls.set(entry.id, controls);

  wrapper.append(renderJournalEditorMeta(controls), noteWrap, renderJournalEditorLinks(controls));
  setTimeout(() => resizeJournalEditor(controls.editor), 0);
  return wrapper;
}

function renderJournalInlineEditor(entry, cardClass) {
  const card = element("article", `journal-card ${cardClass} expanded`);
  if (entry) card.dataset.journalId = entry.id;
  const form = element("form", "journal-inline-editor");
  const title = document.createElement("input");
  title.name = "title";
  title.required = true;
  title.placeholder = "Entry title";
  title.className = "journal-title-input journal-inline-title";
  title.value = entry?.title || "Notes";

  const subtitle = element("div", "journal-editor-subtitle", entry?.subtitle || "");
  subtitle.hidden = !subtitle.textContent;
  const date = element("div", "journal-inline-date", formatDate(entry?.date || todayDate()));

  const controls = createJournalEditorControls(entry, title, subtitle);
  title.addEventListener("keydown", (event) => {
    if (isSaveShortcut(event)) {
      event.preventDefault();
      saveJournalForm(entry, controls);
      return;
    }
    if (event.key === "Enter") {
      event.preventDefault();
      focusJournalEditor(controls.editor);
    }
  });

  const content = element("div", "journal-inline-content");
  content.append(title, subtitle, renderJournalEditorMeta(controls));
  const side = element("div", "journal-row-side journal-inline-side");
  side.append(date);

  const row = element("div", "journal-row journal-inline-row");
  row.append(content, side);
  const noteWrap = element("div", "journal-inline-note-wrap");
  controls.editor = mountJournalEditor({
    element: noteWrap,
    markdown: entry?.body || "",
    placeholder: "Notes",
    mode: "inline",
    metadata: controls,
    onChange: () => resizeJournalEditor(controls.editor),
    onKeydown: (event) => handleJournalBodyKeydown(event, form, entry, controls)
  });
  noteWrap.append(renderJournalFormActions(entry, controls));
  form.append(row, noteWrap);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    saveJournalForm(entry, controls);
  });
  form.addEventListener("keydown", handleJournalEditorKeydown);
  card.append(form);

  setTimeout(() => {
    focusJournalEditor(controls.editor);
    resizeJournalEditor(controls.editor);
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
  const data = journalFormData(entry, controls);

  if (entry) {
    updateJournalEntry(entry.id, data);
    editingJournalId = "";
  } else {
    createJournalEntry(data);
    creatingJournalEntry = false;
  }
  render();
}

function saveJournalInlineEditors() {
  if (!journalInlineEditorControls.size) return;

  Array.from(journalInlineEditorControls.entries()).forEach(([entryId, controls]) => {
    saveJournalInlineEditor(entryId, controls);
  });
  journalInlineEditorControls.clear();
}

function saveJournalInlineEditor(entryId, controls = journalInlineEditorControls.get(entryId)) {
  const entry = state.journal.find((item) => item.id === entryId);
  if (!entry || !controls) return;

  const data = journalFormData(entry, controls);
  if (!journalEntryDataChanged(entry, data)) return;
  updateJournalEntry(entry.id, data);
  saveState();
}

function journalFormData(entry, controls) {
  const subtitle = controls.subtitle.textContent.trim();
  return {
    title: controls.title.value.trim() || "Notes",
    subtitle,
    subtitleSource: subtitle ? controls.subtitleSource || "" : "",
    date: entry?.date || todayDate(),
    type: entry?.type || JOURNAL_TYPES[0],
    linkedItemKeys: uniqueJournalLinks(controls.linkedItemKeys || []),
    tags: uniqueJournalTags(controls.tags || []),
    body: unescapeJournalBody(getJournalEditorMarkdown(controls.editor))
  };
}

function journalEntryDataChanged(entry, data) {
  const tags = Array.isArray(entry.tags) ? entry.tags : [];
  const linkedItemKeys = Array.isArray(entry.linkedItemKeys) ? entry.linkedItemKeys : [];
  if ((entry.title || "") !== data.title) return true;
  if ((entry.subtitle || "") !== data.subtitle) return true;
  if ((entry.subtitleSource || "") !== data.subtitleSource) return true;
  if ((entry.body || "") !== data.body) return true;
  if ((entry.date || "") !== data.date) return true;
  if ((entry.type || "") !== data.type) return true;
  if (tags.join("\n") !== data.tags.join("\n")) return true;
  if (linkedItemKeys.join("\n") !== data.linkedItemKeys.join("\n")) return true;
  return false;
}

function handleJournalBodyKeydown(event, form, entry, controls) {
  if (isSaveShortcut(event)) {
    event.preventDefault();
    saveJournalForm(entry, controls);
  }
}

function handleJournalAutosaveBodyKeydown(event, entry, controls) {
  if (!isSaveShortcut(event)) return;
  event.preventDefault();
  saveJournalInlineEditor(entry.id, controls);
}

function isSaveShortcut(event) {
  return event.key === "Enter" && (event.ctrlKey || event.metaKey);
}

function unescapeJournalBody(value) {
  return String(value).replace(/\\\//g, "/");
}
