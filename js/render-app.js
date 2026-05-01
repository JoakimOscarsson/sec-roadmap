function render() {
  destroyAllJournalEditors();

  if ((state.tab === "favorites" || state.tab === "custom") && (state.view === "chapter" || state.view === "track")) {
    state.view = "overview";
  }
  if (state.view === "track" && state.tab !== "specializations") {
    state.view = "overview";
  }

  const standaloneView = ["map", "guide", "review", "journal", "portfolio", "reference", "sources"].includes(state.view);
  const visible = standaloneView || state.tab === "favorites" || state.tab === "custom" ? [] : getVisibleChapters();
  if (!standaloneView && state.tab !== "favorites" && state.tab !== "custom") {
    ensureSelection(visible);
    if (state.tab === "specializations") ensureSpecializationTrack(visible);
  }
  updateTabButtons();
  updateViewButtons();
  renderOverallProgress(visible);
  renderNav(visible);

  if (state.view === "guide" || state.view === "map") {
    renderSupportView(roadmap.support.guide, "Guide", "Roadmap Guide");
  } else if (state.view === "review") {
    renderReview();
  } else if (state.view === "journal") {
    renderJournal();
  } else if (state.view === "portfolio") {
    renderSupportView(roadmap.support.portfolio, "Portfolio");
  } else if (state.view === "reference") {
    renderSupportView(roadmap.support.reference, "Reference");
  } else if (state.view === "sources") {
    renderSupportView(roadmap.support.sources, "Sources", "Official Sources");
  } else if (state.view === "chapter") {
    renderChapter(visible);
  } else if (state.view === "track") {
    renderSpecializationTrack(visible);
  } else if (state.tab === "favorites") {
    renderFavorites();
  } else if (state.tab === "custom") {
    renderCustom();
  } else if (state.tab === "specializations") {
    renderSpecializationOverview(visible);
  } else {
    renderOverview(visible);
  }

  saveState();
}

function renderOverallProgress(visible) {
  if (["map", "guide", "reference", "sources"].includes(state.view)) {
    const labels = {
      map: "Guide",
      guide: "Guide",
      reference: "Reference",
      sources: "Sources"
    };
    dom.progressScope.textContent = labels[state.view];
    dom.overallPct.textContent = "-";
    dom.overallBar.style.width = "0%";
    return;
  }

  if (state.view === "portfolio") {
    const progress = getPortfolioProgress();
    dom.progressScope.textContent = "Portfolio";
    dom.overallPct.textContent = `${progress.percent}%`;
    dom.overallBar.style.width = `${progress.percent}%`;
    return;
  }

  if (state.view === "review") {
    const reviewItems = getReviewItems();
    dom.progressScope.textContent = "Review";
    dom.overallPct.textContent = `${reviewItems.length}`;
    dom.overallBar.style.width = "0%";
    return;
  }

  if (state.view === "journal") {
    const entries = getJournalEntries();
    dom.progressScope.textContent = "Journal";
    dom.overallPct.textContent = `${entries.length}`;
    dom.overallBar.style.width = "0%";
    return;
  }

  if (state.tab === "favorites") {
    const progress = getFavoriteProgress();
    dom.progressScope.textContent = "Plan";
    dom.overallPct.textContent = `${progress.percent}%`;
    dom.overallBar.style.width = `${progress.percent}%`;
    return;
  }

  if (state.tab === "custom") {
    const progress = getCustomProgress();
    dom.progressScope.textContent = "Custom";
    dom.overallPct.textContent = `${progress.percent}%`;
    dom.overallBar.style.width = `${progress.percent}%`;
    return;
  }

  if (state.tab === "specializations" && (state.view === "track" || state.view === "chapter")) {
    const track = getSpecializationTrackById(visible, state.specializationTrack);
    if (track) {
      const progress = getProgressForChapters(track.chapters);
      dom.progressScope.textContent = track.title;
      dom.overallPct.textContent = `${progress.percent}%`;
      dom.overallBar.style.width = `${progress.percent}%`;
      return;
    }
  }

  const progress = getProgressForChapters(visible);
  const scope = state.tab === "core" ? "Core" : "Specializations";
  dom.progressScope.textContent = scope;
  dom.overallPct.textContent = `${progress.percent}%`;
  dom.overallBar.style.width = `${progress.percent}%`;
}
