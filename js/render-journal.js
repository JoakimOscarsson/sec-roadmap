function renderJournal() {
  dom.main.replaceChildren();

  const entries = getJournalEntries();
  const header = renderHeader("Journal", "Capture study notes, reflections, questions, and practice logs.", "Study");
  header.append(element("p", "path-note", `${entries.length} entries shown.`));
  dom.main.append(header, renderJournalToolbar());

  const form = renderJournalForm();
  if (form) dom.main.append(form);

  if (!entries.length) {
    dom.main.append(element("p", "empty", state.query.trim() ? "No journal entries match the current search." : "No journal entries yet."));
    return;
  }

  const wrapper = element("div", "journal-groups");
  groupJournalEntries(entries).forEach((group) => {
    const section = element("section", "journal-group");
    section.id = `journal-${group.month}`;
    const heading = element("div", "journal-group-heading");
    heading.append(element("h3", "", group.title), element("span", "review-count", `${group.items.length}`));
    section.append(heading);

    const list = element("div", "journal-list");
    group.items.forEach((entry) => list.append(renderJournalEntry(entry)));
    section.append(list);
    wrapper.append(section);
  });

  dom.main.append(wrapper);
}

function renderJournalToolbar() {
  const toolbar = element("div", "journal-toolbar");
  const add = element("button", "journal-add", "+");
  add.type = "button";
  add.title = "Add journal entry";
  add.setAttribute("aria-label", "Add journal entry");
  add.addEventListener("click", openJournalCreate);
  add.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    openJournalCreate();
  });
  toolbar.append(add);
  return toolbar;
}

function renderJournalNav() {
  const groups = groupJournalEntries(getJournalEntries());
  if (!groups.length) {
    const item = element("li");
    item.append(element("p", "empty", state.query.trim() ? "No matching journal entries." : "No journal entries yet."));
    dom.nav.append(item);
    return;
  }

  groups.forEach((group) => {
    const row = element("div", "nav-link");
    row.tabIndex = 0;
    row.setAttribute("role", "button");
    row.append(
      element("span", "journal-nav-dot", ""),
      element("span", "nav-title-text", group.title),
      element("span", "nav-prog", `${group.items.length}`)
    );
    row.addEventListener("click", () => {
      document.getElementById(`journal-${group.month}`)?.scrollIntoView({ block: "start" });
    });
    row.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      document.getElementById(`journal-${group.month}`)?.scrollIntoView({ block: "start" });
    });

    const item = element("li");
    item.append(row);
    dom.nav.append(item);
  });
}
