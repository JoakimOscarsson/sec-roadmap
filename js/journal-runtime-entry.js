import {
  destroyAllJournalEditors,
  destroyJournalEditor,
  focusJournalEditor,
  getJournalEditorMarkdown,
  mountJournalEditor,
  resizeJournalEditor
} from "./journal-editor-adapter.js";
import { renderJournalMarkdownBody } from "./journal-markdown.js";

window.__journalRuntime = {
  destroyAllJournalEditors,
  destroyJournalEditor,
  focusJournalEditor,
  getJournalEditorMarkdown,
  mountJournalEditor,
  resizeJournalEditor,
  renderJournalMarkdownBody
};

window.journalRuntimeLoaded = true;
window.dispatchEvent(new CustomEvent("journal-runtime-loaded"));
