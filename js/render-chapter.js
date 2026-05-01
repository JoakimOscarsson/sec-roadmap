function renderChapter(visible) {
  const chapter = visible.find((item) => item.id === state.selected[state.tab]) || visible[0];
  dom.main.replaceChildren();

  if (!chapter) {
    dom.main.append(element("p", "empty", "No content matches the current filter."));
    return;
  }

  const progress = getChapterProgress(chapter);
  const header = renderHeader(displayChapterTitle(chapter), "", tabTitle());
  const backLabel = state.tab === "specializations" ? "Back to Specialization" : `Back to ${tabTitle()}`;
  const backButton = element("button", "back-btn", backLabel);
  backButton.type = "button";
  backButton.addEventListener("click", () => {
    state.view = state.tab === "specializations" ? "track" : "overview";
    render();
  });
  header.prepend(backButton);

  const meta = element("div", "meta");
  const chapterToggle = element("div", "chapter-toggle");
  chapterToggle.append(
    renderLevelButton(progress.level, {
      label: `Set study level for ${displayChapterTitle(chapter)}`,
      onClick: () => setKeysLevel(getChapterKeys(chapter), nextLevel(progress.level))
    }),
    element("span", "", "Chapter level")
  );

  const stat = element("span", "stat", `${progress.done} of ${progress.total} points`);
  const bar = element("div", "bar");
  const fill = document.createElement("span");
  fill.style.width = `${progress.percent}%`;
  bar.append(fill);
  meta.append(chapterToggle, stat, bar);
  header.append(meta);

  dom.main.append(header);

  const intro = renderIntro(chapter.intro);
  if (intro) dom.main.append(intro);

  chapter.sections.forEach((section) => {
    dom.main.append(renderStudySection(chapter, section));
  });
}

function renderStudySection(chapter, section) {
  const progress = getSectionProgress(chapter, section);
  const wrapper = element("section", "section");
  const heading = element("h3");
  const label = element("div", "section-heading");
  const visibleKeys = getVisibleSectionKeys(chapter, section);
  label.append(
    renderLevelButton(progress.level, {
      label: `Set study level for ${section.title}`,
      onClick: () => setKeysLevel(visibleKeys, nextLevel(progress.level))
    }),
    element("span", "", section.title)
  );
  heading.append(label, element("span", "sec-prog", `${progress.done}/${progress.total}`));
  wrapper.append(heading);
  renderBlocks(section.lines, chapter, section, wrapper, true);
  return wrapper;
}
