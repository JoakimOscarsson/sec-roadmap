let editingJournalId = "";
let pendingJournalFocusId = "";
const JOURNAL_AUTOSAVE_DELAY_MS = 2000;
const journalInlineEditorControls = new Map();
const journalInlineAutosaveTimers = new Map();

function openJournalCreate() {
  saveJournalInlineEditors();
  editingJournalId = "";
  const entry = createJournalEntry(journalCreateEntryData());
  if (!entry) return;
  expandedJournalIds = new Set([entry.id]);
  pendingJournalFocusId = entry.id;
  render();
  document.querySelector(`[data-journal-id="${entry.id}"]`)?.scrollIntoView({ block: "nearest" });
}

function journalCreateEntryData() {
  const linkFilter = getActiveJournalLinkFilter();
  const tagFilter = getActiveJournalTagFilter();
  const subtitle = journalCreateSubtitleFromLinkFilter(linkFilter);
  return {
    title: "Notes",
    subtitle,
    subtitleSource: subtitle ? "link" : "",
    date: todayDate(),
    type: JOURNAL_TYPES[0],
    linkedItemKeys: linkFilter ? [linkFilter] : [],
    tags: tagFilter ? [tagFilter] : [],
    body: ""
  };
}

function journalCreateSubtitleFromLinkFilter(key) {
  if (!key) return "";
  const target = getJournalTarget(key);
  const label = target ? plainText(target.itemText) : key;
  return journalSubtitleFromLinkLabel(label);
}

function closeJournalEditor() {
  destroyAllJournalEditors();
  editingJournalId = "";
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
    onChange: () => handleJournalInlineEditorChange(entry.id, controls),
    onKeydown: (event) => handleJournalAutosaveBodyKeydown(event, entry, controls)
  });
  journalInlineEditorControls.set(entry.id, controls);

  const meta = renderJournalEditorMeta(controls);
  const links = renderJournalEditorLinks(controls);
  controls.onMetadataChange = () => scheduleJournalInlineAutosave(entry.id, controls);
  wrapper.append(meta, noteWrap, links);
  setTimeout(() => {
    resizeJournalEditor(controls.editor);
    if (pendingJournalFocusId !== entry.id) return;
    pendingJournalFocusId = "";
    focusJournalEditor(controls.editor);
  }, 0);
  return wrapper;
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
  }
  render();
}

function saveJournalInlineEditors() {
  if (!journalInlineEditorControls.size) {
    clearJournalInlineAutosaves();
    return;
  }

  Array.from(journalInlineEditorControls.entries()).forEach(([entryId, controls]) => {
    saveJournalInlineEditor(entryId, controls);
  });
  journalInlineEditorControls.clear();
}

function saveJournalInlineEditor(entryId, controls = journalInlineEditorControls.get(entryId)) {
  clearJournalInlineAutosave(entryId);
  const entry = state.journal.find((item) => item.id === entryId);
  if (!entry || !controls) return;

  const data = journalFormData(entry, controls);
  if (!journalEntryDataChanged(entry, data)) return;
  updateJournalEntry(entry.id, data);
  saveState();
}

function handleJournalInlineEditorChange(entryId, controls) {
  resizeJournalEditor(controls.editor);
  scheduleJournalInlineAutosave(entryId, controls);
}

function scheduleJournalInlineAutosave(entryId, controls) {
  if (!entryId || !controls) return;

  clearJournalInlineAutosave(entryId);
  const timer = setTimeout(() => {
    journalInlineAutosaveTimers.delete(entryId);
    saveJournalInlineEditor(entryId, controls);
  }, JOURNAL_AUTOSAVE_DELAY_MS);
  journalInlineAutosaveTimers.set(entryId, timer);
}

function clearJournalInlineAutosave(entryId) {
  const timer = journalInlineAutosaveTimers.get(entryId);
  if (!timer) return;
  clearTimeout(timer);
  journalInlineAutosaveTimers.delete(entryId);
}

function clearJournalInlineAutosaves() {
  Array.from(journalInlineAutosaveTimers.keys()).forEach(clearJournalInlineAutosave);
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
  if (event.key === "Escape") {
    event.preventDefault();
    event.stopPropagation();
    closeJournalExpandedEditor(entry.id, controls);
    return;
  }

  if (isSaveShortcut(event)) {
    event.preventDefault();
    closeJournalExpandedEditor(entry.id, controls);
  }
}

function isSaveShortcut(event) {
  return event.key === "Enter" && (event.ctrlKey || event.metaKey);
}

function unescapeJournalBody(value) {
  return String(value).replace(/\\\//g, "/");
}

function closeJournalExpandedEditor(entryId, controls) {
  clearJournalInlineAutosave(entryId);
  const entry = state.journal.find((item) => item.id === entryId);
  if (!entry || !controls) return;

  const data = journalFormData(entry, controls);
  journalInlineEditorControls.delete(entryId);
  expandedJournalIds.delete(entryId);

  if (isJournalEntryEffectivelyEmpty(data)) {
    removeJournalEntry(entryId);
  } else if (journalEntryDataChanged(entry, data)) {
    updateJournalEntry(entryId, data);
  }

  render();
}

function isJournalEntryEffectivelyEmpty(data) {
  const title = String(data?.title || "").trim();
  const hasCustomTitle = title && title !== "Notes";
  return !hasCustomTitle
    && !String(data?.subtitle || "").trim()
    && !uniqueJournalTags(data?.tags || []).length
    && !uniqueJournalLinks(data?.linkedItemKeys || []).length
    && !journalBodyHasContent(data?.body || "");
}

function journalBodyHasContent(body) {
  const normalized = String(body || "")
    .replace(/\u200C/g, "")
    .replace(/<br\s*\/?>/gi, "")
    .replace(/&nbsp;/gi, "")
    .trim();
  return Boolean(normalized);
}
