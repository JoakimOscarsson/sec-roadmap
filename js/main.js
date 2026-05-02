import {
  destroyAllJournalEditors,
  destroyJournalEditor,
  focusJournalEditor,
  getJournalEditorMarkdown,
  mountJournalEditor,
  resizeJournalEditor
} from "./journal-editor-adapter.js";
import { renderJournalMarkdownBody } from "./journal-markdown.js";
import contentUrl from "../content.js?url";
import configUrl from "./config.js?url";
import storageUrl from "./storage.js?url";
import domUtilsUrl from "./dom-utils.js?url";
import markdownParserUrl from "./markdown-parser.js?url";
import stateUrl from "./state.js?url";
import roadmapModelUrl from "./roadmap-model.js?url";
import trackingUrl from "./tracking.js?url";
import progressUrl from "./progress.js?url";
import customDataUrl from "./custom-data.js?url";
import collectionsUrl from "./collections.js?url";
import journalDataUrl from "./journal-data.js?url";
import actionsUrl from "./actions.js?url";
import controlsUrl from "./controls.js?url";
import renderControlsUrl from "./render-controls.js?url";
import renderNavUrl from "./render-nav.js?url";
import renderContentUrl from "./render-content.js?url";
import renderOverviewsUrl from "./render-overviews.js?url";
import renderChapterUrl from "./render-chapter.js?url";
import renderPlanPortfolioUrl from "./render-plan-portfolio.js?url";
import renderSupportUrl from "./render-support.js?url";
import renderCustomUrl from "./render-custom.js?url";
import renderReviewUrl from "./render-review.js?url";
import journalCommandsUrl from "./journal-commands.js?url";
import renderJournalFormUrl from "./render-journal-form.js?url";
import renderJournalEntryUrl from "./render-journal-entry.js?url";
import renderJournalUrl from "./render-journal.js?url";
import renderAppUrl from "./render-app.js?url";
import appUrl from "../app.js?url";

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
  contentUrl,
  configUrl,
  storageUrl,
  domUtilsUrl,
  markdownParserUrl,
  stateUrl,
  roadmapModelUrl,
  trackingUrl,
  progressUrl,
  customDataUrl,
  collectionsUrl,
  journalDataUrl,
  actionsUrl,
  controlsUrl,
  renderControlsUrl,
  renderNavUrl,
  renderContentUrl,
  renderOverviewsUrl,
  renderChapterUrl,
  renderPlanPortfolioUrl,
  renderSupportUrl,
  renderCustomUrl,
  renderReviewUrl,
  journalCommandsUrl,
  renderJournalFormUrl,
  renderJournalEntryUrl,
  renderJournalUrl,
  renderAppUrl,
  appUrl
];

loadLegacyScripts().catch((error) => {
  console.error("Failed to initialize the app.", error);
});

async function loadLegacyScripts() {
  for (const scriptUrl of legacyScripts) {
    await loadLegacyScript(scriptUrl);
  }
}

function loadLegacyScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.onload = resolve;
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.append(script);
  });
}
