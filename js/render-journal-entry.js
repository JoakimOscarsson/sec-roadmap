const expandedJournalIds = new Set();

function renderJournalEntry(entry) {
  const card = element("article", "journal-card");
  const expanded = expandedJournalIds.has(entry.id);
  const body = expanded ? entry.body : trimText(entry.body, 260);
  const meta = element("div", "journal-meta");
  meta.append(
    element("span", "", formatDate(entry.date)),
    element("span", "", entry.type)
  );
  entry.tags.forEach((tag) => meta.append(element("span", "journal-tag", tag)));

  const title = element("h3", "", entry.title);
  const text = element("p", "journal-body", body || "No notes.");
  const links = renderJournalLinks(entry);
  const actions = renderJournalActions(entry, expanded);
  card.append(meta, title, text);
  if (links) card.append(links);
  card.append(actions);
  return card;
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

function renderJournalActions(entry, expanded) {
  const actions = element("div", "journal-actions");
  if (entry.body.length > 260) {
    const toggle = element("button", "ghost-btn compact", expanded ? "Close" : "Open");
    toggle.type = "button";
    toggle.addEventListener("click", () => {
      if (expanded) {
        expandedJournalIds.delete(entry.id);
      } else {
        expandedJournalIds.add(entry.id);
      }
      render();
    });
    actions.append(toggle);
  }

  const edit = element("button", "ghost-btn compact", "Edit");
  edit.type = "button";
  edit.addEventListener("click", () => {
    editingJournalId = entry.id;
    render();
    dom.main.scrollIntoView({ block: "start" });
  });

  const remove = element("button", "ghost-btn compact danger", "Delete");
  remove.type = "button";
  remove.addEventListener("click", () => deleteJournalEntry(entry.id));
  actions.append(edit, remove);
  return actions;
}
