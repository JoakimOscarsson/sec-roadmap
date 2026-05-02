function renderJournal() {
  dom.main.replaceChildren();

  const entries = getJournalEntries();
  const activity = getJournalActivityEvents();
  const timeline = getJournalTimelineItems();
  const header = renderHeader("Journal", "Capture study notes, reflections, questions, and practice logs.", "Study");
  const meta = element("div", "journal-header-meta");
  meta.append(element("p", "path-note", journalTimelineCountLabel(entries.length, activity.length)), renderJournalToolbar());
  header.append(meta);
  const filters = renderJournalFilters();
  if (filters) header.append(filters);
  dom.main.append(header);

  const form = renderJournalForm();
  if (form) dom.main.append(form);

  const groups = getJournalGroupsForRender(timeline);
  if (!groups.length) {
    dom.main.append(element("p", "empty", journalEmptyMessage()));
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
    group.items.forEach((item) => {
      list.append(item.type === "activity" ? renderJournalActivityEvent(item.event) : renderJournalEntry(item.entry));
    });
    section.append(list);
    wrapper.append(section);
  });

  dom.main.append(wrapper);
}

function journalTimelineCountLabel(noteCount, activityCount) {
  const noteLabel = `${noteCount} ${noteCount === 1 ? "note" : "notes"}`;
  const activityLabel = `${activityCount} ${activityCount === 1 ? "activity event" : "activity events"}`;
  return `${noteLabel}, ${activityLabel} shown.`;
}

function renderJournalActivityEvent(event) {
  const item = element("div", "journal-activity");
  const content = element("div", "journal-activity-content");
  const side = element("div", "journal-activity-side");
  const actions = element("div", "journal-row-actions journal-activity-actions");
  const remove = element("button", "icon-btn danger", "×");

  remove.type = "button";
  remove.title = "Delete activity event";
  remove.setAttribute("aria-label", "Delete activity event");
  remove.addEventListener("click", () => deleteJournalActivityEvent(event.id));

  content.append(element("div", "journal-activity-message", event.message));
  if (event.context) content.append(element("div", "journal-activity-context", event.context));
  actions.append(remove);
  side.append(element("time", "journal-timeline-date journal-activity-date", formatDate(event.date)), actions);
  item.append(
    element("span", "journal-activity-line", ""),
    content,
    side
  );
  return item;
}

function renderJournalFilters() {
  const filters = [
    renderJournalLinkFilter(),
    renderJournalTagFilter()
  ].filter(Boolean);
  if (!filters.length) return null;

  const wrapper = element("div", "journal-filters");
  wrapper.append(...filters);
  return wrapper;
}

function renderJournalLinkFilter() {
  const key = getActiveJournalLinkFilter();
  if (!key) return null;
  const target = getJournalTarget(key);
  const text = target
    ? trimText(plainText(target.itemText), 110)
    : trimText(key, 110);
  const context = target ? journalTargetContext(target) : "Linked item";
  return renderJournalFilter("Linked to", text, context, "Clear linked item filter", clearJournalLinkFilter);
}

function renderJournalTagFilter() {
  const tag = getActiveJournalTagFilter();
  if (!tag) return null;
  return renderJournalFilter("Tagged", `#${tag}`, "Journal tag", "Clear tag filter", clearJournalTagFilter);
}

function renderJournalFilter(kicker, title, context, clearTitle, onClear) {
  const wrapper = element("div", "journal-filter");
  const label = element("div", "journal-filter-label");
  label.append(
    element("span", "journal-filter-kicker", kicker),
    element("span", "journal-filter-title", title),
    element("span", "journal-filter-context", context)
  );

  const clear = element("button", "journal-filter-clear", "×");
  clear.type = "button";
  clear.title = clearTitle;
  clear.setAttribute("aria-label", clearTitle);
  clear.addEventListener("click", onClear);

  wrapper.append(label, clear);
  return wrapper;
}

function journalEmptyMessage() {
  if (getActiveJournalLinkFilter() && getActiveJournalTagFilter()) return "No journal entries match the current journal filters.";
  if (getActiveJournalLinkFilter()) return "No journal entries are linked to this item.";
  if (getActiveJournalTagFilter()) return "No journal entries match this tag.";
  if (getActiveJournalTypeFilter() === "notes") {
    return state.query.trim() ? "No journal notes match the current search." : "No journal notes yet.";
  }
  if (getActiveJournalTypeFilter() === "activity") {
    return state.query.trim() ? "No activity events match the current search." : "No activity events yet.";
  }
  return state.query.trim() ? "No journal entries match the current search." : "No journal entries yet.";
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
  toolbar.append(renderJournalTypeFilter(), add);
  return toolbar;
}

function renderJournalTypeFilter() {
  const active = getActiveJournalTypeFilter();
  const wrapper = element("div", "journal-type-filter");
  const options = [
    ["all", "All"],
    ["notes", "Notes"],
    ["activity", "Activity"]
  ];

  options.forEach(([value, label]) => {
    const button = element("button", active === value ? "active" : "", label);
    button.type = "button";
    button.setAttribute("aria-pressed", String(active === value));
    button.addEventListener("click", () => setJournalTypeFilter(value));
    wrapper.append(button);
  });

  return wrapper;
}

function renderJournalNav() {
  const groups = getJournalGroupsForRender(getJournalTimelineItems());
  if (!groups.length) {
    const item = element("li");
    item.append(element("p", "empty", journalEmptyMessage()));
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
  return groupJournalTimelineItems(entries).sort((left, right) => String(right.month).localeCompare(String(left.month)));
}

function journalGroupDisplayCount(group) {
  return group.items.length;
}
