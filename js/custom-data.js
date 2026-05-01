function getVisibleCustomItems() {
  const query = state.query.trim().toLowerCase();
  const level = selectedLevel();

  return getCustomItems().filter((item) => {
    if (level !== null && getLevel(item.key) !== level) return false;
    if (!query) return true;
    return customItemSearchText(item).includes(query);
  });
}

function getCustomItems() {
  return state.custom.map(customToStudyItem);
}

function groupCustomItems(items) {
  const groups = new Map();
  items.forEach((item) => {
    const title = item.section.title;
    if (!groups.has(title)) groups.set(title, []);
    groups.get(title).push(item);
  });
  return Array.from(groups, ([title, groupItems]) => ({ title, items: groupItems }));
}

function customAreaAnchor(title) {
  return `custom-${uniqueSlug(title, 0)}`;
}

function customToStudyItem(topic) {
  const key = customTopicKey(topic.id);
  const rawArea = typeof topic.area === "string" ? topic.area : "";
  const area = rawArea.trim() || "Custom Topics";
  return {
    key,
    topic,
    chapter: {
      id: "custom",
      title: "Custom"
    },
    section: {
      id: uniqueSlug(area, 0),
      title: area
    },
    line: null,
    itemText: topic.title,
    sourceTab: "custom",
    level: getLevel(key),
    date: getLevelDates(key)[getLevel(key)] || ""
  };
}

function customItemSearchText(item) {
  return [
    sourceLabel(item.sourceTab),
    item.chapter.title,
    item.section.title,
    item.itemText,
    item.date,
    `level ${item.level}`
  ].join(" ").toLowerCase();
}

function addCustomTopic(title, area) {
  const cleanTitle = title.trim();
  if (!cleanTitle) return;
  state.custom.push({
    id: createCustomId(),
    title: cleanTitle,
    area: area.trim()
  });
}

function editCustomTopic(topic) {
  const title = window.prompt("Topic", topic.title);
  if (title === null) return;
  const cleanTitle = title.trim();
  if (!cleanTitle) return;
  const area = window.prompt("Area", topic.area || "");
  if (area === null) return;
  topic.title = cleanTitle;
  topic.area = area.trim();
  render();
}

function deleteCustomTopic(id) {
  const topic = state.custom.find((item) => item.id === id);
  if (!topic || !window.confirm(`Delete "${topic.title}"?`)) return;
  const key = customTopicKey(id);
  state.custom = state.custom.filter((item) => item.id !== id);
  delete state.checked[key];
  delete state.favorites[key];
  delete state.dates[key];
  delete state.reviewComplete[key];
  render();
}

function createCustomId() {
  return `custom-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function customTopicKey(id) {
  return `custom:${id}`;
}

function isValidCustomTopic(topic) {
  return topic && typeof topic.id === "string" && typeof topic.title === "string" && topic.title.trim();
}
