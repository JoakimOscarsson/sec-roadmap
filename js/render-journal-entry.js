let expandedJournalIds = new Set();

function renderJournalEntry(entry) {
  const card = element("article", "journal-card");
  const expanded = expandedJournalIds.has(entry.id);
  const header = {};
  card.dataset.journalId = entry.id;
  card.classList.toggle("expanded", expanded);
  card.append(renderJournalRow(entry, expanded, header), renderJournalExpansion(entry, expanded, header));
  return card;
}

function renderJournalRow(entry, expanded, header = {}) {
  const row = element("div", "journal-row");
  const toggle = element("button", "journal-row-toggle");
  toggle.type = "button";
  toggle.setAttribute("aria-expanded", String(expanded));
  toggle.setAttribute("aria-controls", journalPanelId(entry));
  toggle.addEventListener("click", (event) => {
    toggleJournalEntryExpansion(entry.id, event.metaKey || event.ctrlKey);
  });

  const content = element("div", "journal-row-content");
  const title = element("h3", "journal-card-title", entry.title);
  const subtitle = element("div", "journal-card-subtitle", entry.subtitle || "");
  subtitle.hidden = !entry.subtitle;
  const meta = renderJournalEntryMeta(entry);
  header.title = title;
  header.subtitle = subtitle;
  header.meta = meta;
  content.append(title);
  content.append(subtitle, meta);

  toggle.append(content);

  const side = element("div", "journal-row-side");
  side.append(renderJournalDate(entry), renderJournalActions(entry));
  row.append(toggle, side);
  return row;
}

function renderJournalExpansion(entry, expanded, header = {}) {
  const panel = element("div", "journal-expand");
  panel.id = journalPanelId(entry);
  panel.setAttribute("aria-hidden", String(!expanded));
  panel.inert = !expanded;

  const inner = element("div", "journal-expand-inner");
  const content = element("div", "journal-expand-content");
  if (expanded) {
    content.append(renderJournalExpansionEditor(entry, header));
  }

  inner.append(content);
  panel.append(inner);
  return panel;
}

function renderJournalEntryMeta(entry) {
  const tags = entry.tags || [];
  const linkedItemKeys = entry.linkedItemKeys || [];
  const meta = element("div", "journal-entry-meta");
  tags.forEach((tag) => meta.append(element("span", "journal-entry-tag", tag)));
  if (linkedItemKeys.length) {
    meta.append(element("span", "journal-entry-link-count", `${linkedItemKeys.length} link${linkedItemKeys.length === 1 ? "" : "s"}`));
  }
  meta.hidden = !tags.length && !linkedItemKeys.length;
  return meta;
}

function renderJournalDate(entry) {
  const wrapper = element("div", "journal-row-date");
  const chip = element("button", "date-chip journal-date-chip", formatDate(entry.date));
  chip.type = "button";
  chip.title = "Edit journal date";
  chip.setAttribute("aria-label", `Edit date for ${entry.title}`);
  chip.addEventListener("click", () => {
    wrapper.replaceChildren(renderJournalDateEditor(entry));
  });
  wrapper.append(chip);
  return wrapper;
}

function renderJournalDateEditor(entry) {
  const editor = element("div", "date-editor journal-date-editor");
  const input = document.createElement("input");
  input.type = "date";
  input.value = entry.date || todayDate();
  input.setAttribute("aria-label", `Date for ${entry.title}`);

  const save = () => {
    if (isValidDate(input.value)) updateJournalEntry(entry.id, { date: input.value });
    render();
  };

  input.addEventListener("change", save);
  input.addEventListener("blur", save);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      save();
    }
    if (event.key === "Escape") {
      event.preventDefault();
      render();
    }
  });

  setTimeout(() => {
    input.focus();
    if (typeof input.showPicker === "function") input.showPicker();
  }, 0);

  editor.append(input);
  return editor;
}

function renderJournalActions(entry) {
  const actions = element("div", "journal-row-actions");
  const edit = element("button", "icon-btn", "✎");
  edit.type = "button";
  edit.title = "Focused edit";
  edit.setAttribute("aria-label", `Open focused editor for ${entry.title}`);
  edit.addEventListener("click", () => openJournalFocusedEdit(entry.id));

  const remove = element("button", "icon-btn danger", "×");
  remove.type = "button";
  remove.title = "Delete journal entry";
  remove.setAttribute("aria-label", `Delete ${entry.title}`);
  remove.addEventListener("click", () => {
    expandedJournalIds.delete(entry.id);
    deleteJournalEntry(entry.id);
  });
  actions.append(edit, remove);
  return actions;
}

function openJournalFocusedEdit(entryId) {
  editingJournalId = entryId;
  render();
  dom.main.scrollIntoView({ block: "start" });
}

function toggleJournalEntryExpansion(entryId, keepOtherEntriesOpen) {
  saveJournalInlineEditors();

  if (keepOtherEntriesOpen) {
    const nextExpanded = !expandedJournalIds.has(entryId);
    if (nextExpanded) {
      expandedJournalIds.add(entryId);
    } else {
      expandedJournalIds.delete(entryId);
    }
    render();
    return;
  }

  const onlyExpandedEntry = expandedJournalIds.size === 1 && expandedJournalIds.has(entryId);
  expandedJournalIds = onlyExpandedEntry ? new Set() : new Set([entryId]);
  render();
}

function journalPanelId(entry) {
  return `journal-entry-${entry.id}-body`;
}
