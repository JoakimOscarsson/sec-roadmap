function renderJournal() {
  dom.main.replaceChildren();

  const entries = getJournalEntries();
  const header = renderHeader("Journal", "Capture study notes, reflections, questions, and practice logs.", "Study");
  header.append(element("p", "path-note", `${entries.length} entries shown.`));
  dom.main.append(header, renderJournalToolbar());

  const form = renderJournalForm();
  if (form) dom.main.append(form);

  const groups = getJournalGroupsForRender(entries);
  if (!groups.length) {
    dom.main.append(element("p", "empty", state.query.trim() ? "No journal entries match the current search." : "No journal entries yet."));
    return;
  }

  const wrapper = element("div", "journal-groups");
  groups.forEach((group) => {
    const section = element("section", "journal-group");
    section.id = `journal-${group.month}`;
    const heading = element("div", "journal-group-heading");
    heading.append(
      element("h3", "", group.title),
      element("span", "review-count", `${journalGroupDisplayCount(group)}`)
    );
    section.append(heading);

    const list = element("div", "journal-list");
    let createItemRendered = false;
    group.items.forEach((entry) => {
      if (shouldRenderCreateItemBeforeEntry(group, entry, createItemRendered)) {
        list.append(renderJournalCreateItem());
        createItemRendered = true;
      }
      list.append(renderJournalEntry(entry));
    });
    if (journalGroupIncludesCreateItem(group) && !createItemRendered) list.append(renderJournalCreateItem());
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
  const groups = getJournalGroupsForRender(getJournalEntries());
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
      element("span", "nav-prog", `${journalGroupDisplayCount(group)}`)
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

function getJournalGroupsForRender(entries) {
  const groups = groupJournalEntries(entries);
  if (creatingJournalEntry && !groups.some((group) => group.month === todayJournalMonth())) {
    groups.push({ month: todayJournalMonth(), title: formatJournalMonth(todayJournalMonth()), items: [] });
  }
  return groups.sort((left, right) => String(right.month).localeCompare(String(left.month)));
}

function shouldRenderCreateItemBeforeEntry(group, entry, alreadyRendered) {
  return creatingJournalEntry
    && !alreadyRendered
    && journalGroupIncludesCreateItem(group)
    && dayNumber(todayDate()) >= dayNumber(entry.date);
}

function journalGroupIncludesCreateItem(group) {
  return creatingJournalEntry && group.month === todayJournalMonth();
}

function journalGroupDisplayCount(group) {
  return group.items.length + (journalGroupIncludesCreateItem(group) ? 1 : 0);
}

function todayJournalMonth() {
  return todayDate().slice(0, 7);
}
