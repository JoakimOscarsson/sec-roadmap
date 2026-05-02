function getJournalEntries() {
  const query = state.query.trim().toLowerCase();
  const linkFilter = getActiveJournalLinkFilter();
  return state.journal
    .map(normalizeJournalEntry)
    .filter(Boolean)
    .filter((entry) => !linkFilter || entry.linkedItemKeys.includes(linkFilter))
    .filter((entry) => !query || journalEntrySearchText(entry).includes(query))
    .sort(compareJournalEntries);
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

function formatJournalMonth(month) {
  const match = String(month).match(/^(\d{4})-(\d{2})$/);
  if (!match) return month;
  const names = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${names[Number(match[2]) - 1]} ${match[1]}`;
}
