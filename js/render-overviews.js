function renderOverview(visible) {
  dom.main.replaceChildren();

  const header = renderHeader(tabTitle(), tabIntro(), "Roadmap");
  dom.main.append(header);

  if (!visible.length) {
    dom.main.append(element("p", "empty", "No content matches the current filter."));
    return;
  }

  const grid = element("div", "overview-grid");
  visible.forEach((chapter) => {
    const progress = getChapterProgress(chapter);
    const card = element("button", "overview-card");
    card.type = "button";
    card.classList.toggle("active", chapter.id === state.selected[state.tab]);

    card.append(
      element("div", "t", displayChapterTitle(chapter)),
      element("div", "s", `${progress.done} of ${progress.total} progress points`),
      inlineHtml("p", excerptFor(chapter))
    );

    const bar = element("div", "bar");
    const fill = document.createElement("span");
    fill.style.width = `${progress.percent}%`;
    bar.append(fill);
    card.append(bar);

    card.addEventListener("click", () => selectChapter(chapter.id));
    grid.append(card);
  });

  dom.main.append(grid);
}

function renderSpecializationOverview(visible) {
  dom.main.replaceChildren();

  const tracks = getSpecializationTracks(visible);
  const header = renderHeader("Specializations", tabIntro(), "Roadmap");
  dom.main.append(header);

  if (!tracks.length) {
    dom.main.append(element("p", "empty", "No specialization tracks match the current filter."));
    return;
  }

  const grid = element("div", "overview-grid track-grid");
  tracks.forEach((track) => {
    const progress = getProgressForChapters(track.chapters);
    const card = element("button", "overview-card track-card");
    card.type = "button";
    card.classList.toggle("active", track.id === state.specializationTrack);

    card.append(
      element("div", "t", specializationTrackHeading(track)),
      element("div", "s", `${track.chapters.length} chapters / ${progress.done} of ${progress.total} progress points`),
      inlineHtml("p", specializationTrackExcerpt(track))
    );

    const bar = element("div", "bar");
    const fill = document.createElement("span");
    fill.style.width = `${progress.percent}%`;
    bar.append(fill);
    card.append(bar);

    card.addEventListener("click", () => selectSpecializationTrack(track.id));
    grid.append(card);
  });

  dom.main.append(grid);
}

function renderSpecializationTrack(visible) {
  const track = getSpecializationTrackById(visible, state.specializationTrack) || getSpecializationTracks(visible)[0];
  dom.main.replaceChildren();

  if (!track) {
    dom.main.append(element("p", "empty", "No specialization tracks match the current filter."));
    return;
  }

  const progress = getProgressForChapters(track.chapters);
  const header = renderHeader(specializationTrackHeading(track), specializationTrackExcerpt(track), "Specializations");
  const backButton = element("button", "back-btn", "Back to Specializations");
  backButton.type = "button";
  backButton.addEventListener("click", () => {
    state.view = "overview";
    render();
  });
  header.prepend(backButton);

  const meta = element("div", "meta");
  const stat = element("span", "stat", `${track.chapters.length} chapters / ${progress.done} of ${progress.total} points`);
  const bar = element("div", "bar");
  const fill = document.createElement("span");
  fill.style.width = `${progress.percent}%`;
  bar.append(fill);
  meta.append(stat, bar);
  header.append(meta);
  dom.main.append(header);

  const grid = element("div", "overview-grid chapter-grid");
  track.chapters.forEach((chapter) => {
    const chapterProgress = getChapterProgress(chapter);
    const card = element("button", "overview-card");
    card.type = "button";
    card.classList.toggle("active", chapter.id === state.selected.specializations);

    card.append(
      element("div", "t", specializationChapterLabel(chapter)),
      element("div", "s", `${chapterProgress.done} of ${chapterProgress.total} progress points`),
      inlineHtml("p", excerptFor(chapter))
    );

    const chapterBar = element("div", "bar");
    const chapterFill = document.createElement("span");
    chapterFill.style.width = `${chapterProgress.percent}%`;
    chapterBar.append(chapterFill);
    card.append(chapterBar);

    card.addEventListener("click", () => selectChapter(chapter.id));
    grid.append(card);
  });

  dom.main.append(grid);
}
