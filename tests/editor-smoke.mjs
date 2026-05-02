import { readFileSync } from "node:fs";
import { TextSelection } from "@milkdown/prose/state";
import { Window } from "happy-dom";

const distIndex = readFileSync(new URL("../dist/index.html", import.meta.url), "utf8");
if (distIndex.includes('type="module"') || distIndex.includes("modulepreload") || distIndex.includes("crossorigin")) {
  throw new Error("Built index should use a classic deferred script for file:// compatibility.");
}
const scriptMatch = distIndex.match(/<script defer src="(\.\/assets\/[^"]+)"><\/script>/);
if (!scriptMatch) {
  throw new Error("Built index does not reference the bundled app script with a relative file path.");
}
const distScript = readFileSync(new URL(`../dist/${scriptMatch[1].replace(/^\.\//, "")}`, import.meta.url), "utf8");
if (distScript.includes("data:text/javascript")) {
  throw new Error("Built app should not dynamically load legacy scripts as external resources.");
}
if (distScript.includes("function prettyPdfStyles")) {
  throw new Error("PDF export implementation should stay outside the initial app bundle.");
}
const distPrettyExport = readFileSync(new URL("../dist/js/pretty-export.js", import.meta.url), "utf8");
if (!distPrettyExport.includes("window.prettyExportLoaded")) {
  throw new Error("Built app should emit the lazy PDF export script.");
}
const distJournalRuntime = readFileSync(new URL("../dist/js/journal-runtime.js", import.meta.url), "utf8");
if (!distJournalRuntime.includes("journalRuntimeLoaded")) {
  throw new Error("Built app should emit the lazy journal runtime script.");
}
if (distScript.includes("mountMilkdownJournalEditor")) {
  throw new Error("Journal editor runtime should stay outside the initial app bundle.");
}
const backupSource = readFileSync(new URL("../js/backup.js", import.meta.url), "utf8");
const journalDataSource = readFileSync(new URL("../js/journal-data.js", import.meta.url), "utf8");
const prettyExportSource = readFileSync(new URL("../js/pretty-export.js", import.meta.url), "utf8");
const journalCommandsSource = readFileSync(new URL("../js/journal-commands.js", import.meta.url), "utf8");
const renderJournalFormSource = readFileSync(new URL("../js/render-journal-form.js", import.meta.url), "utf8");

const window = new Window({ url: "https://sec-roadmap.test/" });
globalThis.window = window;
globalThis.document = window.document;
Object.defineProperty(globalThis, "navigator", { value: window.navigator, configurable: true });
[
  "CustomEvent",
  "DOMParser",
  "Element",
  "Event",
  "HTMLElement",
  "KeyboardEvent",
  "MouseEvent",
  "MutationObserver",
  "Node"
].forEach((key) => {
  globalThis[key] = window[key];
});
globalThis.requestAnimationFrame = window.requestAnimationFrame.bind(window);
globalThis.cancelAnimationFrame = window.cancelAnimationFrame.bind(window);
globalThis.addEventListener = window.addEventListener.bind(window);
globalThis.removeEventListener = window.removeEventListener.bind(window);
globalThis.dispatchEvent = window.dispatchEvent.bind(window);

window.plainText = (value) => String(value ?? "");
window.trimText = (value, max) => String(value ?? "").slice(0, max);
window.journalTargetContext = (target) => target.context;
window.state = { favorites: { "core:1": true }, journal: [], activity: [], journalTypeFilter: "all", journalExportRange: "30" };
window.isValidDate = (value) => /^\d{4}-\d{2}-\d{2}$/.test(String(value));
window.normalizedJournalExportDays = (value) => {
  const days = Number(value);
  return Number.isInteger(days) && days >= 1 && days <= 3650 ? days : null;
};
window.isValidJournalExportRange = (value) => window.normalizedJournalExportDays(value) !== null;
window.getJournalExportDays = () => window.normalizedJournalExportDays(window.state.journalExportRange) || 30;
window.todayDate = () => "2026-05-02";
window.dayNumber = (value) => {
  const match = String(value).match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return Infinity;
  return Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3])) / 86400000;
};
window.ageInDays = (value) => window.dayNumber("2026-05-02") - window.dayNumber(value);
window.getJournalLinkTargets = () => [
  { key: "core:1", itemText: "Identity and access management", context: "Core / Governance" },
  { key: "custom:1", itemText: "Custom cloud exercise: Lab notes", context: "Custom" }
];
window.normalizeState = (value) => ({
  checked: value.checked || {},
  favorites: value.favorites || {},
  dates: value.dates || {},
  reviewComplete: value.reviewComplete || {},
  portfolio: value.portfolio || {},
  custom: Array.isArray(value.custom) ? value.custom : [],
  journal: Array.isArray(value.journal) ? value.journal : [],
  activity: Array.isArray(value.activity) ? value.activity : [],
  tab: value.tab || "core",
  query: value.query || "",
  level: value.level || "all",
  journalTypeFilter: value.journalTypeFilter || "all",
  journalExportRange: value.journalExportRange || "30",
  journalLinkFilter: value.journalLinkFilter || "",
  journalTagFilter: value.journalTagFilter || "",
  selected: value.selected || { core: "", specializations: "" },
  specializationTrack: value.specializationTrack || "",
  view: value.view || "overview"
});
window.eval(backupSource);
window.eval(journalDataSource);
window.eval(prettyExportSource);
window.eval(journalCommandsSource);
window.eval(renderJournalFormSource);
window.journalTargetContext = (target) => target.context;
window.getJournalLinkTargets = () => [
  { key: "core:1", itemText: "Identity and access management", context: "Core / Governance" },
  { key: "custom:1", itemText: "Custom cloud exercise: Lab notes", context: "Custom" }
];

const parsedBackup = window.parseRoadmapBackupPayload(JSON.stringify({
  schema: "sec-roadmap.user-state",
  version: 1,
  state: {
    checked: { "core:1": 2 },
    favorites: { "core:1": true },
    journal: [{ id: "journal-1" }]
  }
}));
if (parsedBackup.state.checked["core:1"] !== 2 || parsedBackup.state.journal.length !== 1) {
  throw new Error("Roadmap backup parser should extract and normalize wrapped backup state.");
}
const parsedRawState = window.parseRoadmapBackupPayload(JSON.stringify({ checked: { "core:2": 1 } }));
if (parsedRawState.state.checked["core:2"] !== 1) {
  throw new Error("Roadmap backup parser should accept raw state JSON for migration recovery.");
}
try {
  window.parseRoadmapBackupPayload(JSON.stringify({ schema: "other", state: { checked: {} } }));
  throw new Error("Roadmap backup parser should reject unknown backup schemas.");
} catch (error) {
  if (!/Security Roadmap backup/.test(error.message)) throw error;
}

const linkTargetOptions = window.journalCommandOptions({ text: "/link" });
if (!linkTargetOptions.some((option) => option.key === "core:1") || !linkTargetOptions.some((option) => option.key === "custom:1")) {
  throw new Error("Bare /link should autocomplete link targets.");
}

const filteredLinkTargetOptions = window.journalCommandOptions({ text: "/link cloud" });
if (filteredLinkTargetOptions.length !== 1 || filteredLinkTargetOptions[0].key !== "custom:1") {
  throw new Error("Filtered /link autocomplete should search link targets.");
}

const planTargetOptions = window.journalCommandOptions({ text: "/plan" });
if (planTargetOptions.length !== 1 || planTargetOptions[0].key !== "core:1") {
  throw new Error("Bare /plan should autocomplete only current plan targets.");
}

const commandOptions = window.journalCommandOptions({ text: "/l" });
if (!commandOptions.some((option) => option.type === "command" && option.id === "link")) {
  throw new Error("Partial /l should still autocomplete the /link command.");
}
const clearCommandOptions = window.journalCommandOptions({ text: "/clear" });
if (
  !clearCommandOptions.some((option) => option.type === "command" && option.id === "clear-subtitle")
  || !clearCommandOptions.some((option) => option.type === "command" && option.id === "clear-links")
  || !clearCommandOptions.some((option) => option.type === "command" && option.id === "clear-tags")
) {
  throw new Error("Partial /clear should autocomplete all journal clear commands.");
}

window.element = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
};
window.getJournalTarget = (key) => window.getJournalLinkTargets().find((target) => target.key === key) || null;
let openedJournalTarget = "";
window.openJournalTarget = (key) => {
  openedJournalTarget = key;
};
window.JOURNAL_TYPES = ["note"];

window.state.activity = [];
window.state.journal = [{
  id: "journal-activity-test",
  title: "Timeline note",
  body: "A regular note",
  date: "2026-05-02",
  type: "note",
  linkedItemKeys: [],
  tags: [],
  createdAt: "2026-05-02T10:00:00.000Z",
  updatedAt: "2026-05-02T10:00:00.000Z"
}];
window.state.query = "";
window.state.journalTypeFilter = "all";
window.state.journalLinkFilter = "";
window.state.journalTagFilter = "";
window.logJournalLevelChange("core:1", 2);
if (!window.state.activity[0]?.message.includes("level 2")) {
  throw new Error("Skill level changes should create journal activity events.");
}
window.logJournalDateReset("core:1", 2);
if (!window.state.activity[1]?.message.includes("Updated level 2 date")) {
  throw new Error("Level date resets should create journal activity events.");
}
window.logJournalPortfolioComplete("custom:1");
if (!window.state.activity[2]?.message.includes("Completed portfolio item")) {
  throw new Error("Portfolio completion should create journal activity events.");
}
if (window.getJournalActivityEvents().length !== 3 || window.getJournalTimelineItems().filter((item) => item.type === "activity").length !== 3) {
  throw new Error("Journal activity events should be available in the journal timeline.");
}
window.state.journalTypeFilter = "notes";
if (window.getJournalActivityEvents().length || window.getJournalTimelineItems().some((item) => item.type === "activity")) {
  throw new Error("The journal type filter should be able to show only notes.");
}
window.state.journalTypeFilter = "activity";
if (window.getJournalEntries().length || window.getJournalTimelineItems().some((item) => item.type === "note")) {
  throw new Error("The journal type filter should be able to show only activity events.");
}
window.state.journalTypeFilter = "all";
window.state.activity.push({
  id: "activity-old",
  kind: "level-change",
  message: "Old level change",
  date: "2026-03-01",
  occurredAt: "2026-03-01T10:00:00.000Z",
  itemKey: "",
  itemKeys: [],
  context: ""
});
window.state.journalExportRange = "30";
if (window.getJournalExportTimelineItems().some((item) => item.id === "activity:activity-old")) {
  throw new Error("Journal PDF export ranges should exclude older timeline items.");
}
window.state.journalExportRange = "90";
if (!window.getJournalExportTimelineItems().some((item) => item.id === "activity:activity-old")) {
  throw new Error("Journal PDF export ranges should include items inside the chosen day count.");
}
window.state.activity = window.state.activity.filter((item) => item.id !== "activity-old");
window.state.journalExportRange = "30";
window.state.journalLinkFilter = "core:1";
if (window.getJournalActivityEvents().length !== 2) {
  throw new Error("Journal activity events should respect linked-item filters.");
}
window.state.journalLinkFilter = "";
window.state.journalTagFilter = "review";
if (window.getJournalActivityEvents().length) {
  throw new Error("Journal activity events should not appear inside tag-filtered note views.");
}
window.state.journalTagFilter = "";
window.removeJournalActivityEvent(window.state.activity[0].id);
if (window.state.activity.length !== 2 || window.getJournalTimelineItems().filter((item) => item.type === "activity").length !== 2) {
  throw new Error("Journal activity events should be removable.");
}
window.state.activity = [];
window.state.journal = [];

window.getActiveJournalLinkFilter = () => "custom:1";
window.getActiveJournalTagFilter = () => "review";
const filteredCreateData = window.journalCreateEntryData();
if (
  filteredCreateData.subtitle !== "Custom cloud exercise"
  || filteredCreateData.subtitleSource !== "link"
  || filteredCreateData.linkedItemKeys[0] !== "custom:1"
  || filteredCreateData.tags[0] !== "review"
) {
  throw new Error("New journal entries should inherit the active link and tag filters.");
}
window.getActiveJournalLinkFilter = () => "";
window.getActiveJournalTagFilter = () => "";
const unfilteredCreateData = window.journalCreateEntryData();
if (unfilteredCreateData.subtitle || unfilteredCreateData.linkedItemKeys.length || unfilteredCreateData.tags.length) {
  throw new Error("New unfiltered journal entries should not inherit link or tag metadata.");
}

const editorControls = window.createJournalEditorControls(
  { tags: ["review"], linkedItemKeys: ["core:1"] },
  document.createElement("input"),
  document.createElement("div")
);
const editorMeta = window.renderJournalEditorMeta(editorControls);
const editorLinks = window.renderJournalEditorLinks(editorControls);
if (!editorMeta.querySelector(".journal-editor-chip.link") || !editorLinks.querySelector(".journal-link")) {
  throw new Error("Journal linked items should render both removable chips and open-target controls.");
}
editorLinks.querySelector(".journal-link").click();
if (openedJournalTarget !== "core:1") {
  throw new Error("Journal linked-item controls should open their roadmap target.");
}
let metadataChangeCount = 0;
editorControls.onMetadataChange = () => {
  metadataChangeCount += 1;
};
editorMeta.querySelector(".journal-editor-chip.link").click();
if (editorControls.linkedItemKeys.length || !editorLinks.hidden) {
  throw new Error("Removing a journal link chip should update the linked-item controls.");
}
if (metadataChangeCount !== 1) {
  throw new Error("Journal metadata changes should notify autosave scheduling hooks.");
}

const autoSubtitle = document.createElement("div");
const autoSubtitleControls = window.createJournalEditorControls(
  { tags: [], linkedItemKeys: [] },
  document.createElement("input"),
  autoSubtitle
);
window.addJournalLink(autoSubtitleControls, "custom:1");
if (autoSubtitle.textContent !== "Custom cloud exercise" || autoSubtitle.hidden || autoSubtitleControls.subtitleSource !== "link") {
  throw new Error("A first journal link should set an automatic subtitle from the link label prefix.");
}

const manualSubtitle = document.createElement("div");
manualSubtitle.textContent = "Manual subtitle";
const manualSubtitleControls = window.createJournalEditorControls(
  { subtitle: "Manual subtitle", linkedItemKeys: [] },
  document.createElement("input"),
  manualSubtitle
);
window.addJournalLink(manualSubtitleControls, "custom:1");
if (manualSubtitle.textContent !== "Manual subtitle" || manualSubtitleControls.subtitleSource !== "manual") {
  throw new Error("A manually specified journal subtitle should not be overwritten by the first link.");
}
const manualSubtitleMeta = window.renderJournalEditorMeta(manualSubtitleControls);
const manualSubtitleChip = manualSubtitleMeta.querySelector(".journal-editor-chip.subtitle");
if (!manualSubtitleChip) {
  throw new Error("Manual journal subtitles should expose a clear control.");
}
manualSubtitleChip.click();
if (
  manualSubtitle.textContent
  || !manualSubtitle.hidden
  || manualSubtitleControls.subtitleSource
  || manualSubtitleMeta.hidden
  || !manualSubtitleMeta.querySelector(".journal-editor-chip.link")
) {
  throw new Error("Clearing a journal subtitle should remove the subtitle without removing other metadata.");
}
const subtitleOnly = document.createElement("div");
subtitleOnly.textContent = "Only subtitle";
const subtitleOnlyControls = window.createJournalEditorControls(
  { subtitle: "Only subtitle", linkedItemKeys: [], tags: [] },
  document.createElement("input"),
  subtitleOnly
);
const subtitleOnlyMeta = window.renderJournalEditorMeta(subtitleOnlyControls);
subtitleOnlyMeta.querySelector(".journal-editor-chip.subtitle").click();
if (!subtitleOnlyMeta.hidden) {
  throw new Error("Clearing the only journal metadata item should hide the editor metadata row.");
}

if (!window.isJournalEntryEffectivelyEmpty({
  title: "Notes",
  subtitle: "",
  tags: [],
  linkedItemKeys: [],
  body: "  \n\n<br />\n\n&nbsp;\n\u00a0\u200B"
})) {
  throw new Error("Whitespace and blank paragraph markers should count as an empty journal entry.");
}

if (!window.isJournalEntryEffectivelyEmpty({
  title: "Notes",
  subtitle: "Custom cloud exercise",
  subtitleSource: "link",
  tags: ["review"],
  linkedItemKeys: ["custom:1"],
  body: ""
})) {
  throw new Error("Inherited journal filter metadata alone should still count as an empty journal entry.");
}

if (window.isJournalEntryEffectivelyEmpty({
  title: "Notes",
  subtitle: "Manual subtitle",
  subtitleSource: "manual",
  tags: [],
  linkedItemKeys: [],
  body: ""
})) {
  throw new Error("A manual journal subtitle should count as journal entry content.");
}

if (window.isJournalEntryEffectivelyEmpty({
  title: "Question",
  subtitle: "",
  tags: [],
  linkedItemKeys: [],
  body: ""
})) {
  throw new Error("A custom title should count as journal entry content.");
}

if (window.isJournalEntryEffectivelyEmpty({
  title: "Notes",
  subtitle: "",
  tags: [],
  linkedItemKeys: [],
  body: "Real notes"
})) {
  throw new Error("A non-empty body should count as journal entry content.");
}

const adapter = await import("../js/journal-editor-adapter.js");
const markdown = await import("../js/journal-markdown.js");

function wait(ms = 0) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

async function flushEditorUpdates() {
  await wait();
  await wait();
}

function insertEditorText(editor, text) {
  editor.view.dispatch(editor.view.state.tr.insertText(text));
}

function dispatchEditorKey(editor, type, key, options = {}) {
  const event = new KeyboardEvent(type, {
    bubbles: true,
    cancelable: true,
    key,
    ...options
  });
  editor.root.querySelector(".ProseMirror").dispatchEvent(event);
  return event;
}

function setEditorCursorToEnd(editor) {
  const { state } = editor.view;
  editor.view.dispatch(state.tr.setSelection(TextSelection.atEnd(state.doc)));
}

function setEditorCursorInsideFirstCodeBlock(editor) {
  const { doc } = editor.view.state;
  let codePosition = null;
  doc.descendants((node, position) => {
    if (codePosition !== null || node.type.name !== "code_block") return;
    codePosition = position + node.nodeSize - 1;
  });
  if (codePosition === null) throw new Error("Test editor did not contain a code block.");
  editor.view.dispatch(editor.view.state.tr.setSelection(TextSelection.create(doc, codePosition)));
}

const host = document.createElement("div");
document.body.append(host);

const editorMarkdown = [
  "# Heading",
  "A **bold** paragraph.",
  "- [ ] Task",
  "```js",
  'const message = "hello";',
  "console.log(message);",
  "```"
].join("\n\n");
const editor = adapter.mountJournalEditor({
  element: host,
  markdown: editorMarkdown,
  mode: "focused"
});
await editor.ready;
await flushEditorUpdates();

if (!host.querySelector(".ProseMirror")) {
  throw new Error("Milkdown editor did not mount.");
}

const serialized = adapter.getJournalEditorMarkdown(editor);
if (!serialized.includes("# Heading") || !serialized.includes("**bold**") || !serialized.includes("[ ] Task") || !serialized.includes("```js")) {
  throw new Error(`Unexpected serialized markdown: ${serialized}`);
}
if (!host.querySelector(".ProseMirror pre .token.keyword") || !host.querySelector(".ProseMirror pre .token.string")) {
  throw new Error("Milkdown code blocks should render Prism syntax highlighting while editing.");
}
setEditorCursorInsideFirstCodeBlock(editor);
dispatchEditorKey(editor, "keydown", "Enter", { shiftKey: true });
await flushEditorUpdates();
const afterCodeBlockMarkdown = adapter.getJournalEditorMarkdown(editor);
if (!afterCodeBlockMarkdown.endsWith("```\n\n")) {
  throw new Error("Shift+Enter inside a terminal code block should create a paragraph after the code block.");
}
if (editor.view.state.selection.$from.parent.type.name !== "paragraph") {
  throw new Error("Shift+Enter inside a code block should move the cursor into the new paragraph.");
}
const childCountAfterCodeExit = editor.view.state.doc.childCount;
setEditorCursorInsideFirstCodeBlock(editor);
dispatchEditorKey(editor, "keydown", "Enter", { shiftKey: true });
await flushEditorUpdates();
if (editor.view.state.doc.childCount !== childCountAfterCodeExit) {
  throw new Error("Shift+Enter should reuse an existing paragraph after a code block.");
}
if (editor.view.state.selection.$from.parent.type.name !== "paragraph") {
  throw new Error("Shift+Enter should move the cursor to the existing paragraph after a code block.");
}

adapter.destroyJournalEditor(editor);

const inlineHost = document.createElement("div");
document.body.append(inlineHost);
const inlineEditor = adapter.mountJournalEditor({
  element: inlineHost,
  markdown: Array.from({ length: 40 }, (_, index) => `Line ${index + 1}`).join("\n\n"),
  mode: "inline"
});
await inlineEditor.ready;
adapter.resizeJournalEditor(inlineEditor);
const inlineRoot = inlineHost.querySelector(".journal-milkdown-editor.inline");
if (inlineRoot.style.maxHeight !== "none" || inlineRoot.style.overflowY !== "visible") {
  throw new Error("Inline journal editors should grow with content instead of creating a nested scroll area.");
}
adapter.destroyJournalEditor(inlineEditor);

const rendered = markdown.renderJournalMarkdownBody(serialized);
if (!rendered.querySelector("h1") || !rendered.querySelector("strong") || !rendered.querySelector("input[type='checkbox']")) {
  throw new Error("Read-only markdown renderer did not render expected elements.");
}

const unsafe = markdown.renderJournalMarkdownBody('<img src=x onerror="alert(1)">');
if (unsafe.querySelector("img") || !unsafe.textContent.includes("<img")) {
  throw new Error("Read-only markdown renderer did not escape unsafe HTML.");
}

const blankLine = markdown.renderJournalMarkdownBody("First\n\n<br />\n\nSecond");
if (blankLine.textContent.includes("<br") || blankLine.querySelectorAll("p").length !== 3) {
  throw new Error("Milkdown blank paragraph markers should render as blank lines, not visible HTML text.");
}

const inlineBreakText = markdown.renderJournalMarkdownBody("Literal <br /> tag");
if (!inlineBreakText.textContent.includes("<br />")) {
  throw new Error("Inline literal HTML should still be escaped as text.");
}

const commandHost = document.createElement("div");
document.body.append(commandHost);
const title = document.createElement("input");
const subtitle = document.createElement("div");
const headerTitle = document.createElement("h3");
const headerSubtitle = document.createElement("div");
const headerMeta = document.createElement("div");
const controls = {
  headerTitle,
  headerSubtitle,
  headerMeta,
  title,
  subtitle,
  tags: [],
  linkedItemKeys: [],
  links: null,
  meta: document.createElement("div")
};

window.unquoteJournalCommandValue = (value) => {
  const trimmed = String(value).trim();
  const quoted = trimmed.match(/^"([^"]+)"$/);
  return quoted ? quoted[1] : trimmed;
};
window.isReservedJournalCommand = (value) => ["tag", "link", "plan", "title", "t", "subtitle", "st"].includes(String(value).toLowerCase());
window.journalCommandOptions = (range) => {
  if (/^\/link/i.test(range.text)) {
    return [{ type: "link", key: "core:1", label: "Core item", detail: "Core" }];
  }
  if (/^\/plan/i.test(range.text)) {
    return [{ type: "link", key: "plan:1", label: "Plan item", detail: "Plan" }];
  }
  return [{ type: "command", id: "link", label: "/link", detail: "Link item" }];
};

let saveShortcutCount = 0;
const commandEditor = adapter.mountJournalEditor({
  element: commandHost,
  markdown: "",
  mode: "focused",
  metadata: controls,
  onKeydown: (event) => {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) saveShortcutCount += 1;
  }
});
await commandEditor.ready;

insertEditorText(commandEditor, "/title Weekly focus");
dispatchEditorKey(commandEditor, "keydown", "Enter");
await flushEditorUpdates();
if (title.value !== "Weekly focus" || adapter.getJournalEditorMarkdown(commandEditor).includes("/title")) {
  throw new Error("Title slash command did not update metadata cleanly.");
}
if (headerTitle.textContent !== "Weekly focus") {
  throw new Error("Title slash command should update the journal row header immediately.");
}

insertEditorText(commandEditor, "/st Review queue");
dispatchEditorKey(commandEditor, "keydown", "Enter");
await flushEditorUpdates();
if (subtitle.textContent !== "Review queue" || subtitle.hidden) {
  throw new Error("Subtitle slash command did not update metadata cleanly.");
}
if (headerSubtitle.textContent !== "Review queue" || headerSubtitle.hidden) {
  throw new Error("Subtitle slash command should update the journal row header immediately.");
}
if (!controls.meta.querySelector(".journal-editor-chip.subtitle")) {
  throw new Error("Subtitle slash command should expose a clear control.");
}
insertEditorText(commandEditor, "/clear-subtitle");
dispatchEditorKey(commandEditor, "keydown", "Enter");
await flushEditorUpdates();
if (subtitle.textContent || !subtitle.hidden || headerSubtitle.textContent || !headerSubtitle.hidden) {
  throw new Error("/clear-subtitle should update the editor and row header immediately.");
}

insertEditorText(commandEditor, '/"multi word tag"');
dispatchEditorKey(commandEditor, "keyup", '"');
await flushEditorUpdates();
if (!controls.tags.includes("multi word tag")) {
  throw new Error("Quoted tag slash command did not update metadata.");
}
if (!headerMeta.querySelector(".journal-entry-tag") || !headerMeta.textContent.includes("multi word tag")) {
  throw new Error("Tag slash command should update the journal row header immediately.");
}
insertEditorText(commandEditor, "/clear-tags");
dispatchEditorKey(commandEditor, "keydown", "Enter");
await flushEditorUpdates();
if (controls.tags.length || headerMeta.textContent.includes("multi word tag")) {
  throw new Error("/clear-tags should remove all tags and update the journal row header immediately.");
}

insertEditorText(commandEditor, "/tag TODO");
dispatchEditorKey(commandEditor, "keydown", "Enter");
await flushEditorUpdates();
if (!controls.tags.includes("TODO")) {
  throw new Error("/tag followed by a word should add that word as a tag on Enter.");
}
if (adapter.getJournalEditorMarkdown(commandEditor).includes("/tag TODO")) {
  throw new Error("/tag followed by a word should remove the command text after applying.");
}
insertEditorText(commandEditor, '/tag "deep review"');
dispatchEditorKey(commandEditor, "keydown", "Enter");
await flushEditorUpdates();
if (!controls.tags.includes("deep review")) {
  throw new Error("/tag followed by a quoted value should add a multi-word tag on Enter.");
}
insertEditorText(commandEditor, "/clear-tags");
dispatchEditorKey(commandEditor, "keydown", "Enter");
await flushEditorUpdates();
if (controls.tags.length) {
  throw new Error("/clear-tags should remove tags created through explicit /tag commands.");
}

insertEditorText(commandEditor, "/link core");
dispatchEditorKey(commandEditor, "keyup", "e");
await flushEditorUpdates();
if (!commandHost.querySelector(".journal-command-menu")) {
  throw new Error("Slash command menu did not appear.");
}
const commandMenu = commandHost.querySelector(".journal-command-menu");
if (commandMenu.style.bottom !== "auto") {
  throw new Error("Slash command menu should be positioned relative to the active line, not anchored to the editor bottom.");
}
dispatchEditorKey(commandEditor, "keydown", "Enter");
await flushEditorUpdates();
if (!controls.linkedItemKeys.includes("core:1")) {
  throw new Error("Link slash command did not update linked item metadata.");
}
if (!headerMeta.textContent.includes("1 link")) {
  throw new Error("Link slash command should update the journal row header immediately.");
}
insertEditorText(commandEditor, "/clear-links");
dispatchEditorKey(commandEditor, "keydown", "Enter");
await flushEditorUpdates();
if (controls.linkedItemKeys.length || headerMeta.textContent.includes("1 link")) {
  throw new Error("/clear-links should remove all linked items and update the journal row header immediately.");
}

insertEditorText(commandEditor, "\\/Escape");
dispatchEditorKey(commandEditor, "keyup", "/");
await flushEditorUpdates();
const escapedMarkdown = adapter.getJournalEditorMarkdown(commandEditor);
if (escapedMarkdown.includes("\\/Escape") || !escapedMarkdown.includes("\u200C/Escape")) {
  throw new Error("Escaped slash commands should be persisted with an inert slash marker.");
}
if (commandHost.querySelector(".journal-command-menu")) {
  throw new Error("Escaped slash commands should not open autocomplete.");
}

const reopenedHost = document.createElement("div");
document.body.append(reopenedHost);
const reopenedEditor = adapter.mountJournalEditor({
  element: reopenedHost,
  markdown: escapedMarkdown,
  mode: "focused",
  metadata: controls
});
await reopenedEditor.ready;
setEditorCursorToEnd(reopenedEditor);
dispatchEditorKey(reopenedEditor, "keyup", "e");
await flushEditorUpdates();
if (reopenedHost.querySelector(".journal-command-menu")) {
  throw new Error("Persisted escaped slash commands should stay inert after reopening the editor.");
}
adapter.destroyJournalEditor(reopenedEditor);

dispatchEditorKey(commandEditor, "keydown", "Enter", { ctrlKey: true });
if (saveShortcutCount !== 1) {
  throw new Error("Ctrl+Enter was not passed through to the journal form handler.");
}

adapter.destroyJournalEditor(commandEditor);
window.happyDOM.cancelAsync();
console.log("editor smoke ok");
