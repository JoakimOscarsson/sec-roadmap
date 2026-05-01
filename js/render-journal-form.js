let editingJournalId = "";
let inlineEditingJournalId = "";
let creatingJournalEntry = false;

function openJournalCreate() {
  editingJournalId = "";
  inlineEditingJournalId = "";
  creatingJournalEntry = true;
  render();
  if (typeof document.querySelector === "function") {
    document.querySelector(".journal-create-card")?.scrollIntoView({ block: "nearest" });
  }
}

function closeJournalEditor() {
  destroyAllJournalEditors();
  editingJournalId = "";
  inlineEditingJournalId = "";
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
  const controls = createJournalEditorControls(entry, title, subtitle, null);
  controls.commandHost = bodyHost;
  controls.editor = mountJournalEditor({
    element: bodyHost,
    markdown: entry?.body || "",
    className: "journal-note-input",
    placeholder: "Notes",
    mode: "focused",
    metadata: controls,
    onChange: () => applyJournalLiveInput(form, controls),
    onKeydown: (event) => handleJournalBodyKeydown(event, form, entry, controls)
  });
  controls.body = controls.editor.body;
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

function renderJournalInlineEditItem(entry) {
  return renderJournalInlineEditor(entry, "journal-inline-edit-card");
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

  const controls = createJournalEditorControls(entry, title, subtitle, null);
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
  controls.commandHost = noteWrap;
  controls.editor = mountJournalEditor({
    element: noteWrap,
    markdown: entry?.body || "",
    className: "journal-note-input journal-inline-note",
    placeholder: "Notes",
    mode: "inline",
    metadata: controls,
    onChange: () => handleJournalInlineBodyInput(form, controls),
    onKeydown: (event) => handleJournalBodyKeydown(event, form, entry, controls, { resize: true })
  });
  controls.body = controls.editor.body;
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
  const data = {
    title: controls.title.value.trim() || "Notes",
    subtitle: controls.subtitle.textContent.trim(),
    date: entry?.date || todayDate(),
    type: entry?.type || JOURNAL_TYPES[0],
    linkedItemKeys: uniqueJournalLinks(controls.linkedItemKeys || []),
    tags: uniqueJournalTags(controls.tags || []),
    body: unescapeJournalBody(getJournalEditorMarkdown(controls.editor))
  };

  if (entry) {
    updateJournalEntry(entry.id, data);
    editingJournalId = "";
  } else {
    createJournalEntry(data);
    creatingJournalEntry = false;
  }
  inlineEditingJournalId = "";
  render();
}

function applyJournalLiveInput(form, controls) {
  handleJournalCommandInput(form, controls);
}

function handleJournalInlineBodyInput(form, controls) {
  handleJournalCommandInput(form, controls, { resize: true });
}

function handleJournalBodyKeydown(event, form, entry, controls, options = {}) {
  if (isSaveShortcut(event)) {
    event.preventDefault();
    closeJournalCommandMenu(controls);
    saveJournalForm(entry, controls);
    return;
  }

  if (handleJournalCommandKeydown(event, form, controls, options)) return;

  if (event.key !== "Enter") return;
  if (applyJournalLineCommandOnEnter(event, form, controls, options)) return;
  applyJournalMarkdownLineOnEnter(event, controls, options);
}

function isSaveShortcut(event) {
  return event.key === "Enter" && (event.ctrlKey || event.metaKey);
}

function unescapeJournalBody(value) {
  return String(value).replace(/\\\//g, "/");
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
