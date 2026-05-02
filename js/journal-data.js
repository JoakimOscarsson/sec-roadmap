function getJournalEntries() {
  const query = state.query.trim().toLowerCase();
  const typeFilter = getActiveJournalTypeFilter();
  const linkFilter = getActiveJournalLinkFilter();
  const tagFilter = getActiveJournalTagFilter();
  if (typeFilter === "activity") return [];
  return state.journal
    .map(normalizeJournalEntry)
    .filter(Boolean)
    .filter((entry) => !linkFilter || entry.linkedItemKeys.includes(linkFilter))
    .filter((entry) => !tagFilter || journalEntryHasTag(entry, tagFilter))
    .filter((entry) => !query || journalEntrySearchText(entry).includes(query))
    .sort(compareJournalEntries);
}

function getJournalActivityEvents() {
  const query = state.query.trim().toLowerCase();
  const typeFilter = getActiveJournalTypeFilter();
  const linkFilter = getActiveJournalLinkFilter();
  const tagFilter = getActiveJournalTagFilter();
  if (typeFilter === "notes") return [];
  return (state.activity || [])
    .map(normalizeJournalActivityEvent)
    .filter(Boolean)
    .filter((event) => !linkFilter || journalActivityEventKeys(event).includes(linkFilter))
    .filter(() => !tagFilter)
    .filter((event) => !query || journalActivitySearchText(event).includes(query))
    .sort(compareJournalActivityEvents);
}

function getJournalTimelineItems() {
  return [
    ...getJournalEntries().map((entry) => ({
      type: "note",
      id: `note:${entry.id}`,
      date: entry.date,
      sortTime: entry.createdAt,
      entry
    })),
    ...getJournalActivityEvents().map((event) => ({
      type: "activity",
      id: `activity:${event.id}`,
      date: event.date,
      sortTime: event.occurredAt,
      event
    }))
  ].sort(compareJournalTimelineItems);
}

function normalizeJournalEntry(entry) {
  if (!entry || typeof entry.id !== "string") return null;

  const title = typeof entry.title === "string" ? entry.title.trim() : "";
  if (!title) return null;

  const date = isValidDate(entry.date) ? entry.date : todayDate();
  const type = JOURNAL_TYPES.includes(entry.type) ? entry.type : JOURNAL_TYPES[0];
  const linkedItemKeys = Array.isArray(entry.linkedItemKeys)
    ? entry.linkedItemKeys.filter((key) => typeof key === "string" && key)
    : [];
  const tags = Array.isArray(entry.tags)
    ? entry.tags.map((tag) => String(tag).trim()).filter(Boolean)
    : [];

  return {
    id: entry.id,
    title,
    subtitle: typeof entry.subtitle === "string" ? entry.subtitle.trim() : "",
    subtitleSource: normalizeJournalSubtitleSource(entry),
    body: typeof entry.body === "string" ? entry.body : "",
    date,
    type,
    linkedItemKeys,
    tags,
    createdAt: typeof entry.createdAt === "string" ? entry.createdAt : new Date().toISOString(),
    updatedAt: typeof entry.updatedAt === "string" ? entry.updatedAt : new Date().toISOString()
  };
}

function normalizeJournalActivityEvent(event) {
  if (!event || typeof event !== "object" || typeof event.id !== "string") return null;

  const message = typeof event.message === "string" ? event.message.trim() : "";
  if (!message) return null;

  const occurredAt = typeof event.occurredAt === "string" ? event.occurredAt : new Date().toISOString();
  const date = isValidDate(event.date) ? event.date : todayDate();
  const itemKey = typeof event.itemKey === "string" ? event.itemKey : "";
  const itemKeys = Array.isArray(event.itemKeys)
    ? event.itemKeys.filter((key) => typeof key === "string" && key)
    : [];

  return {
    id: event.id,
    kind: typeof event.kind === "string" ? event.kind : "activity",
    message,
    date,
    occurredAt,
    itemKey,
    itemKeys,
    context: typeof event.context === "string" ? event.context.trim() : ""
  };
}

function normalizeJournalSubtitleSource(entry) {
  const subtitle = typeof entry?.subtitle === "string" ? entry.subtitle.trim() : "";
  if (!subtitle) return "";
  return entry?.subtitleSource === "link" ? "link" : "manual";
}

function createJournalEntry(data) {
  const now = new Date().toISOString();
  const entry = normalizeJournalEntry({
    id: createJournalId(),
    createdAt: now,
    updatedAt: now,
    ...data
  });
  if (!entry) return null;
  state.journal.push(entry);
  return entry;
}

function updateJournalEntry(id, data) {
  const index = state.journal.findIndex((entry) => entry.id === id);
  if (index < 0) return;

  const updated = normalizeJournalEntry({
    ...state.journal[index],
    ...data,
    id,
    updatedAt: new Date().toISOString()
  });
  if (!updated) return;
  state.journal[index] = updated;
}

function deleteJournalEntry(id) {
  const entry = state.journal.find((item) => item.id === id);
  if (!entry || !window.confirm(`Delete "${entry.title}"?`)) return;
  removeJournalEntry(id);
  render();
}

function removeJournalEntry(id) {
  state.journal = state.journal.filter((item) => item.id !== id);
}

function deleteJournalActivityEvent(id) {
  const event = (state.activity || []).find((item) => item?.id === id);
  if (!event || !window.confirm("Delete this activity event?")) return;
  removeJournalActivityEvent(id);
  render();
}

function removeJournalActivityEvent(id) {
  state.activity = (state.activity || []).filter((item) => item?.id !== id);
}

function createJournalId() {
  return `journal-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function parseJournalTags(value) {
  return String(value)
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function compareJournalEntries(left, right) {
  const dateDiff = dayNumber(right.date) - dayNumber(left.date);
  if (dateDiff) return dateDiff;
  const createdDiff = String(right.createdAt).localeCompare(String(left.createdAt));
  if (createdDiff) return createdDiff;
  return String(right.id).localeCompare(String(left.id));
}

function compareJournalActivityEvents(left, right) {
  const dateDiff = dayNumber(right.date) - dayNumber(left.date);
  if (dateDiff) return dateDiff;
  const timeDiff = String(right.occurredAt).localeCompare(String(left.occurredAt));
  if (timeDiff) return timeDiff;
  return String(right.id).localeCompare(String(left.id));
}

function compareJournalTimelineItems(left, right) {
  const dateDiff = dayNumber(right.date) - dayNumber(left.date);
  if (dateDiff) return dateDiff;
  const timeDiff = String(right.sortTime || "").localeCompare(String(left.sortTime || ""));
  if (timeDiff) return timeDiff;
  return String(right.id).localeCompare(String(left.id));
}

function journalEntrySearchText(entry) {
  return [
    entry.title,
    entry.subtitle,
    entry.body,
    entry.type,
    entry.date,
    entry.tags.join(" "),
    ...entry.linkedItemKeys.map((key) => journalTargetSearchText(key))
  ].join(" ").toLowerCase();
}

function journalActivitySearchText(event) {
  return [
    event.message,
    event.context,
    event.kind,
    event.date,
    ...journalActivityEventKeys(event).map((key) => journalTargetSearchText(key))
  ].join(" ").toLowerCase();
}

function journalActivityEventKeys(event) {
  return Array.from(new Set([
    event.itemKey,
    ...(event.itemKeys || [])
  ].filter(Boolean)));
}

function createJournalActivityEvent(data) {
  if (!state.activity || !Array.isArray(state.activity)) state.activity = [];
  const event = normalizeJournalActivityEvent({
    id: createJournalActivityId(),
    occurredAt: new Date().toISOString(),
    date: todayDate(),
    ...data
  });
  if (!event) return null;
  state.activity.push(event);
  return event;
}

function createJournalActivityId() {
  return `activity-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function journalActivityTarget(key, fallbackLabel = "") {
  const target = getJournalTarget(key);
  if (!target) {
    return {
      label: String(fallbackLabel || key).trim(),
      context: ""
    };
  }
  return {
    label: plainText(target.itemText).trim(),
    context: journalTargetContext(target)
  };
}

function logJournalLevelChange(key, level, options = {}) {
  const target = journalActivityTarget(key, options.label);
  const message = level
    ? `Set ${target.label} to level ${level}`
    : `Cleared level for ${target.label}`;
  return createJournalActivityEvent({
    kind: "level-change",
    itemKey: key,
    message,
    context: target.context
  });
}

function logJournalLevelBatchChange(keys, level, options = {}) {
  const normalizedKeys = Array.from(new Set((keys || []).filter(Boolean)));
  if (!normalizedKeys.length) return null;
  const label = String(options.label || "selected items").trim();
  const count = normalizedKeys.length;
  const message = level
    ? `Set ${count} ${count === 1 ? "item" : "items"} in ${label} to level ${level}`
    : `Cleared level for ${count} ${count === 1 ? "item" : "items"} in ${label}`;
  return createJournalActivityEvent({
    kind: "level-batch",
    itemKeys: normalizedKeys,
    message
  });
}

function logJournalDateReset(key, level, options = {}) {
  const target = journalActivityTarget(key, options.label);
  return createJournalActivityEvent({
    kind: "level-date-reset",
    itemKey: key,
    message: `Updated level ${level} date for ${target.label} to today`,
    context: target.context
  });
}

function logJournalPortfolioComplete(key, options = {}) {
  const target = journalActivityTarget(key, options.label);
  return createJournalActivityEvent({
    kind: "portfolio-complete",
    itemKey: key,
    message: `Completed portfolio item: ${target.label}`,
    context: target.context
  });
}

function getJournalLinkTargets() {
  const targets = [];
  [...roadmap.core, ...roadmap.specializations].forEach((chapter) => {
    chapter.sections.forEach((section) => {
      section.lines.forEach((line) => {
        if (!isTrackableLine(line.text)) return;
        const sourceTab = chapter.kind === "specializations" ? "specializations" : "core";
        targets.push({
          key: lineKey(chapter, section, line),
          sourceTab,
          chapter,
          section,
          itemText: line.text.replace(/^\s*(?:[-*]|\d+\.)\s+/, "")
        });
      });
    });
  });

  getCustomItems().forEach((item) => targets.push(item));
  getPortfolioItems().forEach((item) => targets.push(item));
  return targets;
}

function getJournalTarget(key) {
  return getJournalLinkTargets().find((target) => target.key === key) || null;
}

function getActiveJournalLinkFilter() {
  return typeof state.journalLinkFilter === "string" ? state.journalLinkFilter : "";
}

function getActiveJournalTypeFilter() {
  return ["all", "notes", "activity"].includes(state.journalTypeFilter) ? state.journalTypeFilter : "all";
}

function setJournalTypeFilter(value) {
  state.journalTypeFilter = ["all", "notes", "activity"].includes(value) ? value : "all";
  render();
}

function getActiveJournalTagFilter() {
  return typeof state.journalTagFilter === "string" ? state.journalTagFilter.trim() : "";
}

function journalEntryHasTag(entry, tag) {
  const normalized = normalizeJournalTagKey(tag);
  return Boolean(normalized) && (entry.tags || []).some((item) => normalizeJournalTagKey(item) === normalized);
}

function normalizeJournalTagKey(tag) {
  return String(tag || "").trim().toLowerCase();
}

function getJournalLinkCount(key) {
  if (!key) return 0;
  return state.journal
    .map(normalizeJournalEntry)
    .filter(Boolean)
    .filter((entry) => entry.linkedItemKeys.includes(key))
    .length;
}

function openJournalLinkFilter(key) {
  if (!key) return;
  state.view = "journal";
  state.journalLinkFilter = key;
  state.query = "";
  if (dom.search) dom.search.value = "";
  render();
}

function clearJournalLinkFilter() {
  state.journalLinkFilter = "";
  render();
}

function openJournalTagFilter(tag) {
  const normalized = String(tag || "").trim();
  if (!normalized) return;
  state.view = "journal";
  state.journalTagFilter = normalized;
  state.query = "";
  if (dom.search) dom.search.value = "";
  render();
}

function clearJournalTagFilter() {
  state.journalTagFilter = "";
  render();
}

function journalTargetSearchText(key) {
  const target = getJournalTarget(key);
  if (!target) return key;
  return `${journalTargetContext(target)} ${target.itemText}`;
}

function journalTargetContext(target) {
  if (target.sourceTab === "portfolio") return `Portfolio / ${target.section.title}`;
  if (target.sourceTab === "custom") return `Custom / ${target.section.title}`;
  if (target.sourceTab === "specializations") {
    const track = getSpecializationTrackForChapter(target.chapter);
    return `Specializations / ${specializationTrackHeading(track)} / ${displayChapterTitle(target.chapter)} / ${target.section.title}`;
  }
  return `Core / ${displayChapterTitle(target.chapter)} / ${target.section.title}`;
}

function openJournalTarget(key) {
  const target = getJournalTarget(key);
  if (!target) return;
  openSourceChapter(target);
}

function groupJournalEntries(entries) {
  const groups = new Map();
  entries.forEach((entry) => {
    const month = entry.date.slice(0, 7);
    if (!groups.has(month)) groups.set(month, []);
    groups.get(month).push(entry);
  });
  return Array.from(groups, ([month, items]) => ({ month, title: formatJournalMonth(month), items }));
}

function groupJournalTimelineItems(items) {
  const groups = new Map();
  items.forEach((item) => {
    const month = item.date.slice(0, 7);
    if (!groups.has(month)) groups.set(month, []);
    groups.get(month).push(item);
  });
  return Array.from(groups, ([month, groupItems]) => ({ month, title: formatJournalMonth(month), items: groupItems }));
}

function formatJournalMonth(month) {
  const match = String(month).match(/^(\d{4})-(\d{2})$/);
  if (!match) return month;
  const names = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${names[Number(match[2]) - 1]} ${match[1]}`;
}
