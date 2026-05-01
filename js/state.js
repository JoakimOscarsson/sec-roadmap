function createDefaultState() {
  return {
    checked: {},
    favorites: {},
    dates: {},
    reviewComplete: {},
    portfolio: {},
    custom: [],
    journal: [],
    tab: "core",
    query: "",
    level: "all",
    journalLinkFilter: "",
    selected: {
      core: "",
      specializations: ""
    },
    specializationTrack: "",
    view: "overview"
  };
}

function normalizeState(saved) {
  const fallback = createDefaultState();

  try {
    const validTabs = ["core", "specializations", "favorites", "custom"];
    return {
      checked: saved?.checked && typeof saved.checked === "object" ? saved.checked : {},
      favorites: saved?.favorites && typeof saved.favorites === "object" ? saved.favorites : {},
      dates: saved?.dates && typeof saved.dates === "object" ? saved.dates : {},
      reviewComplete: saved?.reviewComplete && typeof saved.reviewComplete === "object" ? saved.reviewComplete : {},
      portfolio: saved?.portfolio && typeof saved.portfolio === "object" ? saved.portfolio : {},
      custom: Array.isArray(saved?.custom) ? saved.custom.filter(isValidCustomTopic) : [],
      journal: Array.isArray(saved?.journal) ? saved.journal.map(normalizeJournalEntry).filter(Boolean) : [],
      tab: validTabs.includes(saved?.tab) ? saved.tab : "core",
      query: typeof saved?.query === "string" ? saved.query : "",
      level: ["all", "0", "1", "2", "3"].includes(saved?.level) ? saved.level : "all",
      journalLinkFilter: typeof saved?.journalLinkFilter === "string" ? saved.journalLinkFilter : "",
      selected: {
        core: saved?.selected?.core || "",
        specializations: saved?.selected?.specializations || ""
      },
      specializationTrack: typeof saved?.specializationTrack === "string" ? saved.specializationTrack : "",
      view: ["overview", "track", "chapter", "map", "guide", "review", "journal", "portfolio", "reference", "sources"].includes(saved?.view)
        ? saved.view
        : "overview"
    };
  } catch {
    return fallback;
  }
}

async function loadState() {
  const saved = await loadPersistedState();
  return normalizeState(saved);
}

function saveState() {
  const snapshot = normalizeState(state);
  return savePersistedState(snapshot);
}
