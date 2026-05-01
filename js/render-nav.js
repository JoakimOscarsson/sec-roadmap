function renderNav(visible) {
  dom.nav.replaceChildren();

  const supportContext = getSupportViewContext();
  if (supportContext) {
    renderSupportNav(supportContext.support, supportContext.crumb);
    return;
  }

  if (state.view === "review") {
    renderReviewNav();
    return;
  }

  if (state.view === "journal") {
    renderJournalNav();
    return;
  }

  if (state.tab === "favorites") {
    renderFavoriteNav();
    return;
  }

  if (state.tab === "custom") {
    renderCustomNav();
    return;
  }

  if (state.tab === "specializations") {
    renderSpecializationNav(visible);
    return;
  }

  if (!visible.length) {
    const item = element("li");
    item.append(element("p", "empty", "No matching chapters."));
    dom.nav.append(item);
    return;
  }

  visible.forEach((chapter) => {
    const progress = getChapterProgress(chapter);
    const row = element("div", "nav-link");
    row.tabIndex = 0;
    row.setAttribute("role", "button");
    row.classList.toggle("active", state.view === "chapter" && chapter.id === state.selected[state.tab]);

    row.append(
      renderLevelButton(progress.level, {
        label: `Set study level for ${displayChapterTitle(chapter)}`,
        onClick: (event) => {
          event.stopPropagation();
          setKeysLevel(getChapterKeys(chapter), nextLevel(progress.level));
        }
      }),
      element("span", "nav-title-text", displayChapterTitle(chapter)),
      element("span", "nav-prog", `${progress.percent}%`)
    );

    row.addEventListener("click", () => selectChapter(chapter.id));
    row.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      selectChapter(chapter.id);
    });

    const item = element("li");
    item.append(row);
    dom.nav.append(item);
  });
}

function renderSpecializationNav(visible) {
  const tracks = getSpecializationTracks(visible);
  if (!tracks.length) {
    const item = element("li");
    item.append(element("p", "empty", "No matching tracks."));
    dom.nav.append(item);
    return;
  }

  if (state.view === "overview") {
    tracks.forEach((track) => {
      const progress = getProgressForChapters(track.chapters);
      const row = element("div", "nav-link");
      row.tabIndex = 0;
      row.setAttribute("role", "button");
      row.classList.toggle("active", track.id === state.specializationTrack);
      row.append(
        element("span", "support-nav-dot", ""),
        element("span", "nav-title-text", specializationTrackHeading(track)),
        element("span", "nav-prog", `${progress.percent}%`)
      );
      row.addEventListener("click", () => selectSpecializationTrack(track.id));
      row.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        selectSpecializationTrack(track.id);
      });

      const item = element("li");
      item.append(row);
      dom.nav.append(item);
    });
    return;
  }

  const activeTrack = getSpecializationTrackById(visible, state.specializationTrack) || tracks[0];
  activeTrack.chapters.forEach((chapter) => {
    const progress = getChapterProgress(chapter);
    const row = element("div", "nav-link");
    row.tabIndex = 0;
    row.setAttribute("role", "button");
    row.classList.toggle("active", state.view === "chapter" && chapter.id === state.selected.specializations);

    row.append(
      renderLevelButton(progress.level, {
        label: `Set study level for ${displayChapterTitle(chapter)}`,
        onClick: (event) => {
          event.stopPropagation();
          setKeysLevel(getChapterKeys(chapter), nextLevel(progress.level));
        }
      }),
      element("span", "nav-title-text", specializationChapterLabel(chapter)),
      element("span", "nav-prog", `${progress.percent}%`)
    );

    row.addEventListener("click", () => selectChapter(chapter.id));
    row.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      selectChapter(chapter.id);
    });

    const item = element("li");
    item.append(row);
    dom.nav.append(item);
  });
}

function getSupportViewContext() {
  if (state.view === "guide" || state.view === "map") {
    return { support: roadmap.support.guide, crumb: "Guide" };
  }
  if (state.view === "portfolio") {
    return { support: roadmap.support.portfolio, crumb: "Portfolio" };
  }
  if (state.view === "reference") {
    return { support: roadmap.support.reference, crumb: "Reference" };
  }
  if (state.view === "sources") {
    return { support: roadmap.support.sources, crumb: "Sources" };
  }
  return null;
}

function renderSupportNav(support, crumb) {
  if (!support?.blocks?.length) {
    const item = element("li");
    item.append(element("p", "empty", "No sections loaded."));
    dom.nav.append(item);
    return;
  }

  support.blocks.forEach((block) => {
    const row = element("div", "nav-link");
    row.tabIndex = 0;
    row.setAttribute("role", "button");
    row.append(
      element("span", "support-nav-dot", ""),
      element("span", "nav-title-text", stripSectionNumber(block.title)),
      element("span", "nav-prog", supportNavCount(block))
    );
    row.addEventListener("click", () => {
      document.getElementById(supportBlockAnchor(crumb, block))?.scrollIntoView({ block: "start" });
    });
    row.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      document.getElementById(supportBlockAnchor(crumb, block))?.scrollIntoView({ block: "start" });
    });

    const item = element("li");
    item.append(row);
    dom.nav.append(item);
  });
}

function supportNavCount(block) {
  const bulletCount = block.lines.filter((line) => /^\s*[-*]\s+/.test(line.text)).length;
  return bulletCount ? String(bulletCount) : "";
}
