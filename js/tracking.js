function getLevel(key) {
  const value = state.checked[key];
  if (value === true) return 3;
  if (typeof value === "number" && value >= 1 && value <= 3) return value;
  return 0;
}

function nextLevel(level) {
  return level >= 3 ? 0 : level + 1;
}

function cycleKeyLevel(key) {
  setKeyLevel(key, nextLevel(getLevel(key)));
}

function setKeyLevel(key, level) {
  if (level > 0) {
    state.checked[key] = level;
    updateLevelDate(key, level);
  } else {
    delete state.checked[key];
  }
}

function setKeysLevel(keys, level) {
  keys.forEach((key) => {
    setKeyLevel(key, level);
  });
}

function isReviewComplete(key) {
  return Boolean(state.reviewComplete?.[key]);
}

function setReviewComplete(key, complete) {
  if (!state.reviewComplete || typeof state.reviewComplete !== "object") state.reviewComplete = {};
  if (complete) {
    state.reviewComplete[key] = true;
  } else {
    delete state.reviewComplete[key];
  }
}

function portfolioKey(block, line) {
  return `portfolio:${block.id}:${line.index}`;
}

function portfolioInputId(key) {
  return `input-${key.replace(/[^\w-]/g, "-")}`;
}

function cleanPortfolioText(text) {
  return text.replace(/\{\{refs?:[^}]+\}\}/gi, "").trim();
}

function getPortfolioReferences(text) {
  const labels = [cleanPortfolioText(text)];
  const explicitLabels = Array.from(text.matchAll(/\{\{refs?:([^}]+)\}\}/gi))
    .flatMap((match) => match[1].split(";"))
    .map((item) => item.trim())
    .filter(Boolean);
  const aliases = getPortfolioReferenceAliases(cleanPortfolioText(text));
  labels.push(...explicitLabels, ...aliases);

  const index = getRoadmapDeliverableIndex();
  const references = new Map();
  labels.forEach((label) => {
    const matches = index.get(normalizeReferenceLabel(label)) || [];
    matches.forEach((match) => references.set(match.key, match));
  });
  return Array.from(references.values());
}

function getPortfolioReferenceAliases(text) {
  const normalized = normalizeReferenceLabel(text);
  for (const [source, aliases] of Object.entries(PORTFOLIO_REFERENCE_ALIASES)) {
    if (normalizeReferenceLabel(source) === normalized) return aliases;
  }
  return [];
}

function getRoadmapDeliverableIndex() {
  const index = new Map();
  [...roadmap.core, ...roadmap.specializations].forEach((chapter) => {
    chapter.sections.forEach((section) => {
      if (!/deliverables/i.test(section.title)) return;
      section.lines.forEach((line) => {
        if (!isTrackableLine(line.text)) return;
        const itemText = line.text.replace(/^\s*(?:[-*]|\d+\.)\s+/, "");
        const key = lineKey(chapter, section, line);
        const reference = {
          key,
          chapter,
          section,
          line,
          itemText,
          sourceTab: chapter.kind === "specializations" ? "specializations" : "core"
        };
        const normalized = normalizeReferenceLabel(itemText);
        if (!index.has(normalized)) index.set(normalized, []);
        index.get(normalized).push(reference);
      });
    });
  });
  return index;
}

function normalizeReferenceLabel(text) {
  return plainText(cleanPortfolioText(text))
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9åäöéü]+/gi, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function supportBlockAnchor(crumb, block) {
  return `${crumb.toLowerCase()}-${block.id}`;
}

function setPortfolioComplete(key, complete, references = []) {
  if (!state.portfolio || typeof state.portfolio !== "object") state.portfolio = {};
  if (complete) {
    state.portfolio[key] = true;
    references.forEach((reference) => setKeyLevel(reference.key, 3));
  } else {
    delete state.portfolio[key];
  }
}

function getLevelDates(key) {
  const dates = state.dates?.[key];
  if (!dates || typeof dates !== "object") return {};
  return dates;
}

function updateLevelDate(key, level) {
  if (level < 1 || level > 3) return;
  setLevelDate(key, level, todayDate());
}

function setLevelDate(key, level, value) {
  if (level < 1 || level > 3 || !isValidDate(value)) return;
  if (!state.dates || typeof state.dates !== "object") state.dates = {};
  state.dates[key] = {
    ...getLevelDates(key),
    [level]: value
  };
}

function isValidDate(value) {
  return Number.isFinite(dayNumber(value));
}

function todayDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function ageInDays(value) {
  const current = dayNumber(todayDate());
  const itemDate = dayNumber(value);
  if (!Number.isFinite(itemDate)) return Infinity;
  return Math.max(0, current - itemDate);
}

function dayNumber(value) {
  const match = String(value).match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return Infinity;
  return Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3])) / 86400000;
}

function formatDate(value) {
  const match = String(value).match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return value;
  return `${match[1]}-${match[2]}-${match[3]}`;
}

function chapterKey(chapter) {
  return `chapter:${chapter.id}`;
}

function sectionKey(chapter, section) {
  return `section:${chapter.id}:${section.id}`;
}

function lineKey(chapter, section, line) {
  return `line:${chapter.id}:${section.id}:${line.index}`;
}

function isTrackableLine(line) {
  return /^(\s*[-*]\s+|\s*\d+\.\s+)/.test(line);
}
