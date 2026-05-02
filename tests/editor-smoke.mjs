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
const journalCommandsSource = readFileSync(new URL("../js/journal-commands.js", import.meta.url), "utf8");

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
window.state = { favorites: { "core:1": true } };
window.getJournalLinkTargets = () => [
  { key: "core:1", itemText: "Identity and access management", context: "Core / Governance" },
  { key: "custom:1", itemText: "Custom cloud exercise: Lab notes", context: "Custom" }
];
window.eval(journalCommandsSource);

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

const host = document.createElement("div");
document.body.append(host);

const editor = adapter.mountJournalEditor({
  element: host,
  markdown: "# Heading\n\nA **bold** paragraph.\n\n- [ ] Task",
  mode: "focused"
});
await editor.ready;

if (!host.querySelector(".ProseMirror")) {
  throw new Error("Milkdown editor did not mount.");
}

const serialized = adapter.getJournalEditorMarkdown(editor);
if (!serialized.includes("# Heading") || !serialized.includes("**bold**") || !serialized.includes("[ ] Task")) {
  throw new Error(`Unexpected serialized markdown: ${serialized}`);
}

adapter.destroyJournalEditor(editor);

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

insertEditorText(commandEditor, '/"multi word tag"');
dispatchEditorKey(commandEditor, "keyup", '"');
await flushEditorUpdates();
if (!controls.tags.includes("multi word tag")) {
  throw new Error("Quoted tag slash command did not update metadata.");
}
if (!headerMeta.querySelector(".journal-entry-tag") || !headerMeta.textContent.includes("multi word tag")) {
  throw new Error("Tag slash command should update the journal row header immediately.");
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
