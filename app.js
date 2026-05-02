const markdown = window.ROADMAP_MARKDOWN || "";

const dom = {
  tabButtons: Array.from(document.querySelectorAll("[data-tab]")),
  search: document.getElementById("searchInput"),
  levelFilter: document.getElementById("levelFilter"),
  progressScope: document.getElementById("progressScope"),
  overallPct: document.getElementById("overallPct"),
  overallBar: document.getElementById("overallBar"),
  nav: document.getElementById("nav"),
  main: document.getElementById("main"),
  guideBtn: document.getElementById("guideBtn"),
  reviewBtn: document.getElementById("reviewBtn"),
  journalBtn: document.getElementById("journalBtn"),
  portfolioBtn: document.getElementById("portfolioBtn"),
  referenceBtn: document.getElementById("referenceBtn"),
  sourcesBtn: document.getElementById("sourcesBtn"),
  exportBackupBtn: document.getElementById("exportBackupBtn"),
  importBackupBtn: document.getElementById("importBackupBtn"),
  importBackupInput: document.getElementById("importBackupInput"),
  resetBtn: document.getElementById("resetBtn")
};

const roadmap = parseRoadmap(markdown);
let state = createDefaultState();

window.roadmapReady = initializeApp();

async function initializeApp() {
  state = await loadState();
  initializeControls();
  bindEvents();
  render();
}
