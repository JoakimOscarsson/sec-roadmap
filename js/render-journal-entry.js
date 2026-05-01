let expandedJournalId = "";

function renderJournalEntry(entry) {
  const card = element("article", "journal-card");
  const expanded = expandedJournalId === entry.id;
  card.dataset.journalId = entry.id;
  card.classList.toggle("expanded", expanded);
  card.append(renderJournalRow(entry, expanded), renderJournalExpansion(entry, expanded));
  return card;
}

function renderJournalRow(entry, expanded) {
  const row = element("div", "journal-row");
  const toggle = element("button", "journal-row-toggle");
  toggle.type = "button";
  toggle.setAttribute("aria-expanded", String(expanded));
  toggle.setAttribute("aria-controls", journalPanelId(entry));
  toggle.addEventListener("click", () => toggleJournalEntryExpansion(entry.id));

  const content = element("div", "journal-row-content");
  const title = element("h3", "journal-card-title", entry.title);
  const subtitle = entry.subtitle ? element("div", "journal-card-subtitle", entry.subtitle) : null;
  content.append(title);
  if (subtitle) content.append(subtitle);

  toggle.append(content);

  const side = element("div", "journal-row-side");
  side.append(renderJournalDate(entry), renderJournalActions(entry));
  row.append(toggle, side);
  return row;
}

function renderJournalExpansion(entry, expanded) {
  const panel = element("div", "journal-expand");
  panel.id = journalPanelId(entry);
  panel.setAttribute("aria-hidden", String(!expanded));
  panel.inert = !expanded;

  const inner = element("div", "journal-expand-inner");
  const content = element("div", "journal-expand-content");
  content.append(element("p", "journal-body", entry.body || "No notes."));

  const links = renderJournalLinks(entry);
  if (links) content.append(links);

  inner.append(content);
  panel.append(inner);
  return panel;
}

function renderJournalLinks(entry) {
  const links = entry.linkedItemKeys
    .map((key) => getJournalTarget(key))
    .filter(Boolean);
  if (!links.length) return null;

  const wrapper = element("div", "journal-links");
  links.forEach((target) => {
    const button = element("button", "journal-link", trimText(`${journalTargetContext(target)} / ${plainText(target.itemText)}`, 120));
    button.type = "button";
    button.addEventListener("click", () => openJournalTarget(target.key));
    wrapper.append(button);
  });
  return wrapper;
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
  edit.title = "Edit journal entry";
  edit.setAttribute("aria-label", `Edit ${entry.title}`);
  edit.addEventListener("click", () => {
    editingJournalId = entry.id;
    creatingJournalEntry = false;
    render();
    dom.main.scrollIntoView({ block: "start" });
  });

  const remove = element("button", "icon-btn danger", "×");
  remove.type = "button";
  remove.title = "Delete journal entry";
  remove.setAttribute("aria-label", `Delete ${entry.title}`);
  remove.addEventListener("click", () => {
    if (expandedJournalId === entry.id) expandedJournalId = "";
    deleteJournalEntry(entry.id);
  });
  actions.append(edit, remove);
  return actions;
}

function toggleJournalEntryExpansion(entryId) {
  const nextExpanded = expandedJournalId !== entryId;
  const previousCard = findJournalCard(expandedJournalId);
  if (previousCard) setJournalEntryExpanded(previousCard, false);

  expandedJournalId = nextExpanded ? entryId : "";
  const currentCard = findJournalCard(entryId);
  if (currentCard) setJournalEntryExpanded(currentCard, nextExpanded);
}

function setJournalEntryExpanded(card, expanded) {
  card.classList.toggle("expanded", expanded);
  const toggle = card.querySelector(".journal-row-toggle");
  const panel = card.querySelector(".journal-expand");
  if (toggle) toggle.setAttribute("aria-expanded", String(expanded));
  if (panel) {
    panel.setAttribute("aria-hidden", String(!expanded));
    panel.inert = !expanded;
  }
}

function findJournalCard(entryId) {
  if (!entryId) return null;
  return Array.from(document.querySelectorAll(".journal-card"))
    .find((card) => card.dataset.journalId === entryId) || null;
}

function journalPanelId(entry) {
  return `journal-entry-${entry.id}-body`;
}
