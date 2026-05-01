function initializeControls() {
  dom.search.value = state.query;
  dom.levelFilter.value = state.level;
  updateTabButtons();
}

function bindEvents() {
  dom.tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.tab = button.dataset.tab;
      state.view = "overview";
      render();
    });
  });

  dom.search.addEventListener("input", () => {
    state.query = dom.search.value;
    state.view = state.view === "chapter" || state.view === "track" ? "overview" : state.view;
    render();
  });

  dom.levelFilter.addEventListener("change", () => {
    state.level = dom.levelFilter.value;
    state.view = state.view === "chapter" || state.view === "track" ? "overview" : state.view;
    render();
  });

  dom.guideBtn.addEventListener("click", () => {
    state.view = "guide";
    render();
  });

  dom.reviewBtn.addEventListener("click", () => {
    state.view = "review";
    render();
  });

  dom.portfolioBtn.addEventListener("click", () => {
    state.view = "portfolio";
    render();
  });

  dom.referenceBtn.addEventListener("click", () => {
    state.view = "reference";
    render();
  });

  dom.sourcesBtn.addEventListener("click", () => {
    state.view = "sources";
    render();
  });

  dom.resetBtn.addEventListener("click", () => {
    if (!window.confirm("Reset all v3 progress and plan items?")) return;
    state.checked = {};
    state.favorites = {};
    state.dates = {};
    state.reviewComplete = {};
    state.portfolio = {};
    render();
  });
}

function updateTabButtons() {
  const tabActive = !["review", "map", "guide", "portfolio", "reference", "sources"].includes(state.view);
  dom.tabButtons.forEach((button) => {
    button.classList.toggle("active", tabActive && button.dataset.tab === state.tab);
  });
  dom.levelFilter.disabled = state.view === "review";
}

function updateViewButtons() {
  dom.guideBtn.classList.toggle("active", state.view === "guide" || state.view === "map");
  dom.reviewBtn.classList.toggle("active", state.view === "review");
  dom.portfolioBtn.classList.toggle("active", state.view === "portfolio");
  dom.referenceBtn.classList.toggle("active", state.view === "reference");
  dom.sourcesBtn.classList.toggle("active", state.view === "sources");
}
