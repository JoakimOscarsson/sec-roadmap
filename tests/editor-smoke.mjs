import { readFileSync } from "node:fs";
import { Window } from "happy-dom";

const distIndex = readFileSync(new URL("../dist/index.html", import.meta.url), "utf8");
if (distIndex.includes('type="module"') || distIndex.includes("modulepreload")) {
  throw new Error("Built index should use a classic deferred script for file:// compatibility.");
}
if (!distIndex.includes('<script defer src="./assets/')) {
  throw new Error("Built index does not reference the bundled app script with a relative file path.");
}

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

const commandHost = document.createElement("div");
document.body.append(commandHost);
const title = document.createElement("input");
const subtitle = document.createElement("div");
const controls = {
  title,
  subtitle,
  tags: [],
  linkedItemKeys: [],
  meta: document.createElement("div")
};

window.unquoteJournalCommandValue = (value) => {
  const trimmed = String(value).trim();
  const quoted = trimmed.match(/^"([^"]+)"$/);
  return quoted ? quoted[1] : trimmed;
};
window.isReservedJournalCommand = (value) => ["tag", "link", "plan", "title", "t", "subtitle", "st"].includes(String(value).toLowerCase());
window.addJournalTag = (targetControls, tag) => targetControls.tags.push(tag);
window.addJournalLink = (targetControls, key) => targetControls.linkedItemKeys.push(key);
window.refreshJournalEditorMeta = () => {};
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

insertEditorText(commandEditor, "/st Review queue");
dispatchEditorKey(commandEditor, "keydown", "Enter");
await flushEditorUpdates();
if (subtitle.textContent !== "Review queue" || subtitle.hidden) {
  throw new Error("Subtitle slash command did not update metadata cleanly.");
}

insertEditorText(commandEditor, '/"multi word tag"');
dispatchEditorKey(commandEditor, "keyup", '"');
await flushEditorUpdates();
if (!controls.tags.includes("multi word tag")) {
  throw new Error("Quoted tag slash command did not update metadata.");
}

insertEditorText(commandEditor, "/link core");
dispatchEditorKey(commandEditor, "keyup", "e");
await flushEditorUpdates();
if (!commandHost.querySelector(".journal-command-menu")) {
  throw new Error("Slash command menu did not appear.");
}
dispatchEditorKey(commandEditor, "keydown", "Enter");
await flushEditorUpdates();
if (!controls.linkedItemKeys.includes("core:1")) {
  throw new Error("Link slash command did not update linked item metadata.");
}

dispatchEditorKey(commandEditor, "keydown", "Enter", { ctrlKey: true });
if (saveShortcutCount !== 1) {
  throw new Error("Ctrl+Enter was not passed through to the journal form handler.");
}

adapter.destroyJournalEditor(commandEditor);
window.happyDOM.cancelAsync();
console.log("editor smoke ok");
