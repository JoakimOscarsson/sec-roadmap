function getActiveChapters() {
  if (state.tab === "favorites" || state.tab === "custom") return [];
  return state.tab === "specializations" ? roadmap.specializations : roadmap.core;
}

function getVisibleChapters() {
  const query = state.query.trim().toLowerCase();

  return getActiveChapters().filter((chapter) => {
    if (query && !chapterSearchText(chapter).includes(query)) return false;
    return chapterMatchesLevel(chapter);
  });
}

function getSpecializationTracks(chapters = roadmap.specializations) {
  const tracks = new Map();

  chapters.forEach((chapter) => {
    const parsed = parseSpecializationChapterTitle(chapter.title);
    const code = parsed?.track || "Other";
    const id = code === "Other" ? "track-other" : `track-${code.toLowerCase()}`;
    if (!tracks.has(id)) {
      tracks.set(id, {
        id,
        code,
        title: SPECIALIZATION_TRACK_NAMES[code] || "Other Specializations",
        chapters: []
      });
    }
    tracks.get(id).chapters.push(chapter);
  });

  return Array.from(tracks.values());
}

function getSpecializationTrackById(chapters, id) {
  return getSpecializationTracks(chapters).find((track) => track.id === id) || null;
}

function getSpecializationTrackForChapter(chapter) {
  return getSpecializationTracks([chapter])[0] || null;
}

function parseSpecializationChapterTitle(title) {
  const match = title.match(/^Track\s+([A-Z])\.(\d+):\s*(.+)$/i);
  if (!match) return null;
  return {
    track: match[1].toUpperCase(),
    chapter: match[2],
    shortTitle: match[3]
  };
}

function parseCoreChapterTitle(title) {
  const match = title.match(/^Phase\s+(\d+):\s*(.+)$/i);
  if (!match) return null;
  return {
    chapter: match[1],
    shortTitle: match[2]
  };
}

function specializationTrackHeading(track) {
  return track.title;
}

function specializationChapterLabel(chapter) {
  const parsed = parseSpecializationChapterTitle(chapter.title);
  return parsed ? `${parsed.chapter}. ${parsed.shortTitle}` : chapter.title;
}

function coreChapterLabel(chapter) {
  const parsed = parseCoreChapterTitle(chapter.title);
  return parsed ? `${parsed.chapter}. ${parsed.shortTitle}` : chapter.title;
}

function displayChapterTitle(chapter) {
  if (chapter?.kind === "specializations") return specializationChapterLabel(chapter);
  if (chapter?.kind === "core") return coreChapterLabel(chapter);
  return chapter?.title || "";
}

function chapterSearchText(chapter) {
  const specializationTrack = chapter.kind === "specializations" ? getSpecializationTrackForChapter(chapter) : null;
  return [
    specializationTrack ? specializationTrackHeading(specializationTrack) : "",
    displayChapterTitle(chapter),
    chapter.title,
    ...chapter.intro.map((line) => line.text),
    ...chapter.sections.flatMap((section) => [
      section.title,
      ...section.lines.map((line) => line.text)
    ])
  ]
    .join(" ")
    .toLowerCase();
}

function chapterMatchesLevel(chapter) {
  const level = selectedLevel();
  if (level === null) return true;
  return getChapterKeys(chapter).some((key) => getLevel(key) === level);
}

function selectedLevel() {
  return state.level === "all" ? null : Number(state.level);
}

function ensureSelection(visible) {
  const selected = state.selected[state.tab];
  if (!visible.length) {
    state.selected[state.tab] = "";
    if (state.tab === "specializations") state.specializationTrack = "";
    state.view = state.view === "chapter" ? "overview" : state.view;
    return;
  }

  if (!selected || !visible.some((chapter) => chapter.id === selected)) {
    state.selected[state.tab] = visible[0].id;
  }
}

function ensureSpecializationTrack(visible) {
  const tracks = getSpecializationTracks(visible);
  if (!tracks.length) {
    state.specializationTrack = "";
    state.view = state.view === "track" ? "overview" : state.view;
    return;
  }

  if (state.view === "chapter") {
    const selectedChapter = visible.find((chapter) => chapter.id === state.selected.specializations);
    const selectedTrack = selectedChapter ? getSpecializationTrackForChapter(selectedChapter) : null;
    if (selectedTrack) state.specializationTrack = selectedTrack.id;
  }

  if (!state.specializationTrack || !tracks.some((track) => track.id === state.specializationTrack)) {
    state.specializationTrack = tracks[0].id;
  }
}

function tabTitle() {
  if (state.tab === "favorites") return "Plan";
  return state.tab === "specializations" ? "Specializations" : "Core Curriculum";
}

function tabIntro() {
  if (state.tab === "favorites") {
    return "Pin roadmap, custom, or portfolio items to keep a focused personal study plan.";
  }
  if (state.tab === "custom") {
    return "Add your own learning topics and track them alongside the roadmap.";
  }
  const lines = state.tab === "specializations" ? roadmap.specializationIntro : roadmap.coreIntro;
  const description = lines.map((line) => line.text.trim()).filter(Boolean).join(" ");
  if (state.tab === "specializations") {
    const instruction = "Open a specialization track first, then choose the chapters inside it.";
    return description ? `${description} ${instruction}` : instruction;
  }
  return description;
}

function sourceLabel(tab) {
  if (tab === "custom") return "Custom";
  if (tab === "portfolio") return "Portfolio";
  return tab === "specializations" ? "Specializations" : "Core Curriculum";
}

function excerptFor(chapter) {
  const intro = chapter.intro.find((line) => line.text.trim());
  if (intro) return trimText(cleanInline(intro.text), 140);

  const sectionLine = chapter.sections
    .flatMap((item) => item.lines)
    .find((line) => line.text.trim() && !isTrackableLine(line.text));
  if (sectionLine) return trimText(cleanInline(sectionLine.text), 140);

  return `${chapter.sections.length} subchapters`;
}

function specializationTrackExcerpt(track) {
  const chapterNames = track.chapters
    .map((chapter) => specializationChapterLabel(chapter))
    .slice(0, 3);
  const suffix = track.chapters.length > chapterNames.length ? "..." : "";
  return trimText(`${chapterNames.join("; ")}${suffix}`, 180);
}
