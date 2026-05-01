function getFavoriteItems() {
  const query = state.query.trim().toLowerCase();
  const level = selectedLevel();
  const allChapters = [...roadmap.core, ...roadmap.specializations];
  const items = [];

  allChapters.forEach((chapter) => {
    chapter.sections.forEach((section) => {
      section.lines.forEach((line) => {
        if (!isTrackableLine(line.text)) return;
        const key = lineKey(chapter, section, line);
        if (!state.favorites[key]) return;
        if (level !== null && getLevel(key) !== level) return;
        const itemText = line.text.replace(/^\s*(?:[-*]|\d+\.)\s+/, "");
        const sourceTab = chapter.kind === "specializations" ? "specializations" : "core";
        const favorite = { key, chapter, section, line, itemText, sourceTab };
        if (query && !favoriteSearchText(favorite).includes(query)) return;
        items.push(favorite);
      });
    });
  });

  getCustomItems().forEach((item) => {
    if (!state.favorites[item.key]) return;
    if (level !== null && getLevel(item.key) !== level) return;
    if (query && !favoriteSearchText(item).includes(query)) return;
    items.push(item);
  });

  getPortfolioItems().forEach((item) => {
    if (!state.favorites[item.key]) return;
    if (level !== null && level !== 0) return;
    if (query && !favoriteSearchText(item).includes(query)) return;
    items.push(item);
  });

  return items;
}

function getPortfolioItems() {
  const support = roadmap.support.portfolio;
  if (!support) return [];

  const chapter = {
    id: "portfolio",
    title: "Portfolio"
  };
  const items = [];

  support.blocks.forEach((block) => {
    block.lines.forEach((line) => {
      const bullet = line.text.match(/^\s*[-*]\s+(.+)$/);
      if (!bullet) return;
      const key = portfolioKey(block, line);
      const itemText = cleanPortfolioText(bullet[1]);
      items.push({
        key,
        chapter,
        section: {
          id: block.id,
          title: block.title
        },
        line,
        itemText,
        references: getPortfolioReferences(bullet[1]),
        sourceTab: "portfolio",
        complete: Boolean(state.portfolio?.[key])
      });
    });
  });

  return items;
}

function favoriteSearchText(favorite) {
  const track = favorite.sourceTab === "specializations" ? getSpecializationTrackForChapter(favorite.chapter) : null;
  return [
    sourceLabel(favorite.sourceTab),
    track ? specializationTrackHeading(track) : "",
    displayChapterTitle(favorite.chapter),
    favorite.section.title,
    favorite.itemText
  ].join(" ").toLowerCase();
}

function favoriteContext(favorite) {
  if (favorite.sourceTab === "portfolio") {
    return `${sourceLabel(favorite.sourceTab)} / ${favorite.section.title}`;
  }
  if (favorite.sourceTab === "specializations") {
    const track = getSpecializationTrackForChapter(favorite.chapter);
    return `${sourceLabel(favorite.sourceTab)} / ${specializationTrackHeading(track)} / ${displayChapterTitle(favorite.chapter)} / ${favorite.section.title}`;
  }
  return `${sourceLabel(favorite.sourceTab)} / ${displayChapterTitle(favorite.chapter)} / ${favorite.section.title}`;
}

function getReviewItems() {
  const query = state.query.trim().toLowerCase();
  const items = [];

  [...roadmap.core, ...roadmap.specializations].forEach((chapter) => {
    chapter.sections.forEach((section) => {
      section.lines.forEach((line) => {
        if (!isTrackableLine(line.text)) return;
        const key = lineKey(chapter, section, line);
        const level = getLevel(key);
        if (!level) return;

        const itemText = line.text.replace(/^\s*(?:[-*]|\d+\.)\s+/, "");
        const sourceTab = chapter.kind === "specializations" ? "specializations" : "core";
        const item = {
          key,
          chapter,
          section,
          line,
          itemText,
          sourceTab,
          level,
          date: getLevelDates(key)[level] || ""
        };
        if (query && !reviewItemSearchText(item).includes(query)) return;
        items.push(item);
      });
    });
  });

  getCustomItems().forEach((item) => {
    if (!item.level) return;
    if (query && !reviewItemSearchText(item).includes(query)) return;
    items.push(item);
  });

  return items.sort(compareReviewItems);
}

function reviewItemSearchText(item) {
  const track = item.sourceTab === "specializations" ? getSpecializationTrackForChapter(item.chapter) : null;
  return [
    sourceLabel(item.sourceTab),
    track ? specializationTrackHeading(track) : "",
    displayChapterTitle(item.chapter),
    item.section.title,
    item.itemText,
    item.date,
    `level ${item.level}`
  ].join(" ").toLowerCase();
}

function compareReviewItems(left, right) {
  const leftTime = dayNumber(left.date);
  const rightTime = dayNumber(right.date);
  if (leftTime !== rightTime) return leftTime - rightTime;
  return reviewItemSearchText(left).localeCompare(reviewItemSearchText(right));
}

function getReviewBuckets() {
  const buckets = REVIEW_BUCKETS.map((bucket) => ({ ...bucket, items: [] }));
  const fallback = buckets.find((bucket) => bucket.id === "no-date");
  const complete = buckets.find((bucket) => bucket.id === "complete");

  getReviewItems().forEach((item) => {
    if (isReviewComplete(item.key)) {
      complete.items.push(item);
      return;
    }

    const age = item.date ? ageInDays(item.date) : null;
    const bucket = buckets.find((candidate) => {
      if (candidate.id === "complete") return false;
      if (candidate.id === "no-date") return !item.date;
      return item.date && age >= candidate.minDays && age <= candidate.maxDays;
    }) || fallback;
    bucket.items.push(item);
  });

  return buckets;
}
