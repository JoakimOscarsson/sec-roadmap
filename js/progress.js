function getFavoriteProgress() {
  const favorites = getFavoriteItems();
  const counts = favorites.reduce(
    (acc, favorite) => {
      if (favorite.sourceTab === "portfolio") {
        acc.done += state.portfolio?.[favorite.key] ? 1 : 0;
        acc.total += 1;
      } else {
        acc.done += getLevel(favorite.key);
        acc.total += 3;
      }
      return acc;
    },
    { done: 0, total: 0 }
  );
  return progressFromCounts(counts.done, counts.total);
}

function getPortfolioProgress() {
  const keys = [];
  roadmap.support.portfolio?.blocks.forEach((block) => {
    block.lines.forEach((line) => {
      if (/^\s*[-*]\s+/.test(line.text)) keys.push(portfolioKey(block, line));
    });
  });
  const done = keys.reduce((sum, key) => sum + (state.portfolio?.[key] ? 1 : 0), 0);
  return progressFromCounts(done, keys.length);
}

function getCustomProgress() {
  const items = getVisibleCustomItems();
  const done = items.reduce((sum, item) => sum + getLevel(item.key), 0);
  return progressFromCounts(done, items.length * 3);
}

function getProgressForChapters(chapters) {
  const keys = chapters.flatMap(getChapterKeys);
  const done = keys.reduce((sum, key) => sum + getLevel(key), 0);
  return progressFromCounts(done, keys.length * 3);
}

function getChapterProgress(chapter) {
  const keys = getChapterKeys(chapter);
  const done = keys.reduce((sum, key) => sum + getLevel(key), 0);
  return progressFromCounts(done, keys.length * 3);
}

function getSectionProgress(chapter, section) {
  const keys = getSectionKeys(chapter, section);
  const done = keys.reduce((sum, key) => sum + getLevel(key), 0);
  return progressFromCounts(done, keys.length * 3);
}

function progressFromCounts(done, total) {
  return {
    done,
    total,
    percent: total ? Math.round((done / total) * 100) : 0,
    level: averageLevel(done, total)
  };
}

function averageLevel(done, total) {
  if (!total) return 0;
  return Math.round((done / total) * 3);
}

function getChapterKeys(chapter) {
  const keys = chapter.sections.flatMap((section) => getSectionKeys(chapter, section));
  return keys.length ? keys : [chapterKey(chapter)];
}

function getSectionKeys(chapter, section) {
  const keys = [sectionKey(chapter, section)];
  section.lines.forEach((line) => {
    if (isTrackableLine(line.text)) keys.push(lineKey(chapter, section, line));
  });
  return keys;
}

function getVisibleSectionKeys(chapter, section) {
  const level = selectedLevel();
  const keys = getSectionKeys(chapter, section);
  if (level === null) return keys;
  return keys.filter((key) => getLevel(key) === level);
}
