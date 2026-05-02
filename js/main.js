import {
  destroyAllJournalEditors,
  destroyJournalEditor,
  focusJournalEditor,
  getJournalEditorMarkdown,
  mountJournalEditor,
  resizeJournalEditor
} from "./journal-editor-adapter.js";
import { renderJournalMarkdownBody } from "./journal-markdown.js";
import contentSource from "../content.js?raw";
import configSource from "./config.js?raw";
import storageSource from "./storage.js?raw";
import domUtilsSource from "./dom-utils.js?raw";
import markdownParserSource from "./markdown-parser.js?raw";
import stateSource from "./state.js?raw";
import roadmapModelSource from "./roadmap-model.js?raw";
import trackingSource from "./tracking.js?raw";
import progressSource from "./progress.js?raw";
import customDataSource from "./custom-data.js?raw";
import collectionsSource from "./collections.js?raw";
import journalDataSource from "./journal-data.js?raw";
import backupSource from "./backup.js?raw";
import actionsSource from "./actions.js?raw";
import controlsSource from "./controls.js?raw";
import renderControlsSource from "./render-controls.js?raw";
import renderNavSource from "./render-nav.js?raw";
import renderContentSource from "./render-content.js?raw";
import renderOverviewsSource from "./render-overviews.js?raw";
import renderChapterSource from "./render-chapter.js?raw";
import renderPlanPortfolioSource from "./render-plan-portfolio.js?raw";
import renderSupportSource from "./render-support.js?raw";
import renderCustomSource from "./render-custom.js?raw";
import renderReviewSource from "./render-review.js?raw";
import journalCommandsSource from "./journal-commands.js?raw";
import renderJournalFormSource from "./render-journal-form.js?raw";
import renderJournalEntrySource from "./render-journal-entry.js?raw";
import renderJournalSource from "./render-journal.js?raw";
import renderAppSource from "./render-app.js?raw";
import appSource from "../app.js?raw";

Object.assign(window, {
  destroyAllJournalEditors,
  destroyJournalEditor,
  focusJournalEditor,
  getJournalEditorMarkdown,
  mountJournalEditor,
  resizeJournalEditor,
  renderJournalMarkdownBody
});

const legacyScripts = [
  contentSource,
  configSource,
  storageSource,
  domUtilsSource,
  markdownParserSource,
  stateSource,
  roadmapModelSource,
  trackingSource,
  progressSource,
  customDataSource,
  collectionsSource,
  journalDataSource,
  backupSource,
  actionsSource,
  controlsSource,
  renderControlsSource,
  renderNavSource,
  renderContentSource,
  renderOverviewsSource,
  renderChapterSource,
  renderPlanPortfolioSource,
  renderSupportSource,
  renderCustomSource,
  renderReviewSource,
  journalCommandsSource,
  renderJournalFormSource,
  renderJournalEntrySource,
  renderJournalSource,
  renderAppSource,
  appSource
];

loadLegacyScripts().catch((error) => {
  console.error("Failed to initialize the app.", error);
});

async function loadLegacyScripts() {
  for (const scriptSource of legacyScripts) {
    loadLegacyScript(scriptSource);
  }
}

function loadLegacyScript(source) {
  const script = document.createElement("script");
  script.textContent = source;
  document.head.append(script);
}
