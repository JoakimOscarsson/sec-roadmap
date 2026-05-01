function selectChapter(id) {
  state.selected[state.tab] = id;
  if (state.tab === "specializations") {
    const chapter = roadmap.specializations.find((item) => item.id === id);
    const track = chapter ? getSpecializationTrackForChapter(chapter) : null;
    if (track) state.specializationTrack = track.id;
  }
  state.view = "chapter";
  render();
  dom.main.scrollIntoView({ block: "start" });
}

function selectSpecializationTrack(id) {
  state.specializationTrack = id;
  const track = getSpecializationTrackById(getVisibleChapters(), id) || getSpecializationTrackById(roadmap.specializations, id);
  if (track?.chapters?.length) state.selected.specializations = track.chapters[0].id;
  state.view = "track";
  render();
  dom.main.scrollIntoView({ block: "start" });
}

function openSourceChapter(favorite) {
  if (favorite.sourceTab === "portfolio") {
    state.view = "portfolio";
    render();
    document.getElementById(supportBlockAnchor("Portfolio", favorite.section))?.scrollIntoView({ block: "start" });
    return;
  }

  if (favorite.sourceTab === "custom") {
    state.tab = "custom";
    state.view = "overview";
    render();
    dom.main.scrollIntoView({ block: "start" });
    return;
  }

  state.tab = favorite.sourceTab;
  state.selected[favorite.sourceTab] = favorite.chapter.id;
  if (favorite.sourceTab === "specializations") {
    const track = getSpecializationTrackForChapter(favorite.chapter);
    if (track) state.specializationTrack = track.id;
  }
  state.view = "chapter";
  render();
  dom.main.scrollIntoView({ block: "start" });
}

function openCustomArea(title) {
  state.tab = "custom";
  state.view = "overview";
  render();
  document.getElementById(customAreaAnchor(title))?.scrollIntoView({ block: "start" });
}
