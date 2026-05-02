import { Editor, defaultValueCtx, editorViewCtx, rootCtx } from "@milkdown/core";
import { clipboard } from "@milkdown/plugin-clipboard";
import { history } from "@milkdown/plugin-history";
import { listener, listenerCtx } from "@milkdown/plugin-listener";
import { prism, prismConfig } from "@milkdown/plugin-prism";
import { commonmark } from "@milkdown/preset-commonmark";
import { TextSelection } from "@milkdown/prose/state";
import { gfm } from "@milkdown/preset-gfm";
import { getMarkdown } from "@milkdown/utils";
import bash from "refractor/bash";
import css from "refractor/css";
import javascript from "refractor/javascript";
import json from "refractor/json";
import markdown from "refractor/markdown";
import markup from "refractor/markup";
import python from "refractor/python";
import sql from "refractor/sql";
import typescript from "refractor/typescript";
import yaml from "refractor/yaml";

const activeJournalEditors = new Set();
// Milkdown serializes `\/` back to `/`; this marker keeps escaped command slashes inert after reopening.
const commandEscapeMarker = "\u200C";
const MILKDOWN_LISTENER_DEBOUNCE_MS = 220;

export function mountJournalEditor(options) {
  const editor = mountMilkdownJournalEditor(options);
  activeJournalEditors.add(editor);
  return editor;
}

export function destroyJournalEditor(editor) {
  if (!editor) return;
  if (typeof editor.destroy === "function") editor.destroy();
  activeJournalEditors.delete(editor);
}

export function destroyAllJournalEditors() {
  Array.from(activeJournalEditors).forEach((editor) => destroyJournalEditor(editor));
}

export function getJournalEditorMarkdown(editor) {
  if (!editor || typeof editor.getMarkdown !== "function") return "";
  return editor.getMarkdown();
}

export function focusJournalEditor(editor) {
  if (editor && typeof editor.focus === "function") editor.focus();
}

export function resizeJournalEditor(editor) {
  if (editor && typeof editor.resize === "function") editor.resize();
}

function mountMilkdownJournalEditor({
  element: host,
  markdown,
  placeholder,
  mode,
  metadata,
  onChange,
  onKeydown
}) {
  const root = document.createElement("div");
  root.className = `journal-milkdown-editor ${mode === "focused" ? "focused" : "inline"}`;
  root.dataset.mode = mode || "inline";
  root.dataset.placeholder = placeholder || "Notes";
  host.append(root);

  let latestMarkdown = markdown || "";
  let created = false;
  let destroyed = false;
  const state = {
    activeIndex: 0,
    commandMenu: null,
    commandOptions: [],
    commandRange: null,
    controls: metadata || null,
    dismissedCommand: ""
  };

  const editor = Editor.make()
    .config((ctx) => {
      ctx.set(rootCtx, root);
      ctx.set(defaultValueCtx, latestMarkdown);
      ctx.set(prismConfig.key, {
        configureRefractor: configureJournalPrism
      });
    })
    .use(commonmark)
    .use(gfm)
    .use(prism)
    .use(history)
    .use(clipboard)
    .use(listener);

  const keydownHandler = (event) => {
    if (handleMilkdownCommandKeydown(editorInstance, event)) return;
    if (typeof onKeydown === "function") onKeydown(event);
  };
  const updateHandler = () => {
    window.setTimeout(() => {
      if (destroyed) return;
      normalizeMilkdownEscapedCommandSlash(editorInstance);
      processCompletedMilkdownTagCommand(editorInstance);
      syncMilkdownCommandMenu(editorInstance);
      if (mode === "inline") resizeMilkdownInlineEditor(root);
    }, 0);
  };
  root.addEventListener("keydown", keydownHandler, true);
  root.addEventListener("input", updateHandler);
  root.addEventListener("keyup", updateHandler);
  root.addEventListener("mouseup", updateHandler);
  root.addEventListener("focusin", updateHandler);

  const ready = editor.create()
    .then(() => {
      if (destroyed) return;
      created = true;
      editor.action((ctx) => {
        editorInstance.view = ctx.get(editorViewCtx);
        ctx.get(listenerCtx).markdownUpdated((_ctx, value) => {
          latestMarkdown = value;
          if (typeof onChange === "function") onChange({ markdown: value });
          syncMilkdownCommandMenu(editorInstance);
        });
      });
    })
    .catch((error) => {
      console.error("Failed to mount Milkdown journal editor.", error);
    });

  const editorInstance = {
    destroyed: false,
    kind: "milkdown",
    body: null,
    controls: metadata || null,
    ready,
    root,
    state,
    view: null,
    getMarkdown: () => {
      if (!created || destroyed) return latestMarkdown;
      return editor.action(getMarkdown());
    },
    focus: () => {
      ready.then(() => {
        if (destroyed) return;
        editor.action((ctx) => ctx.get(editorViewCtx).focus());
      });
    },
    resize: () => {
      if (mode === "inline") resizeMilkdownInlineEditor(root);
    },
    destroy: () => {
      destroyed = true;
      editorInstance.destroyed = true;
      root.removeEventListener("keydown", keydownHandler, true);
      root.removeEventListener("input", updateHandler);
      root.removeEventListener("keyup", updateHandler);
      root.removeEventListener("mouseup", updateHandler);
      root.removeEventListener("focusin", updateHandler);
      closeMilkdownCommandMenu(editorInstance);
      window.setTimeout(() => {
        ready.finally(() => {
          editor.destroy(true).catch((error) => {
            console.error("Failed to destroy Milkdown journal editor.", error);
          });
        });
      }, MILKDOWN_LISTENER_DEBOUNCE_MS);
      root.remove();
    }
  };
  return editorInstance;
}

function configureJournalPrism(refractor) {
  [
    javascript,
    typescript,
    json,
    bash,
    yaml,
    python,
    markup,
    css,
    markdown,
    sql
  ].forEach((language) => refractor.register(language));

  refractor.alias({
    javascript: ["js", "mjs", "cjs"],
    typescript: ["ts"],
    bash: ["sh", "shell", "zsh"],
    markup: ["html", "xml", "svg"],
    markdown: ["md", "mdown"],
    yaml: ["yml"]
  });
}

function handleMilkdownCommandKeydown(instance, event) {
  if (!instance.view) return false;
  if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) return false;

  if (event.key === "Enter" && event.shiftKey && exitMilkdownCodeBlock(instance)) {
    event.preventDefault();
    event.stopPropagation();
    return true;
  }

  if (event.key === "Escape" && instance.state.commandMenu) {
    event.preventDefault();
    event.stopPropagation();
    instance.state.dismissedCommand = milkdownCommandSignature(instance.state.commandRange);
    closeMilkdownCommandMenu(instance);
    return true;
  }

  if (event.key === "ArrowDown" || event.key === "ArrowUp") {
    if (!instance.state.commandMenu) return false;
    event.preventDefault();
    const direction = event.key === "ArrowDown" ? 1 : -1;
    setMilkdownCommandActiveIndex(instance, instance.state.activeIndex + direction);
    return true;
  }

  if ((event.key === "Enter" || event.key === "Tab") && instance.state.commandMenu && instance.state.commandOptions.length) {
    event.preventDefault();
    selectMilkdownCommandOption(instance, instance.state.commandOptions[instance.state.activeIndex]);
    return true;
  }

  if (event.key === "Enter" && applyMilkdownLineCommandOnEnter(instance, event)) {
    return true;
  }

  return false;
}

function exitMilkdownCodeBlock(instance) {
  const { view } = instance;
  if (!view || !view.state.selection.empty) return false;

  const { state } = view;
  const { $from } = state.selection;
  const codeBlock = findMilkdownParentNode($from, (node) => node.type.name === "code_block");
  if (!codeBlock) return false;

  const paragraphType = state.schema.nodes.paragraph;
  if (!paragraphType) return false;

  const insertPos = codeBlock.to;
  const $insert = state.doc.resolve(insertPos);
  const nextNode = $insert.nodeAfter;
  if (nextNode?.type === paragraphType) {
    view.dispatch(state.tr.setSelection(TextSelection.create(state.doc, insertPos + 1)));
    view.focus();
    return true;
  }

  const insertIndex = $insert.index();
  if (!$insert.parent.canReplaceWith(insertIndex, insertIndex, paragraphType)) return false;

  const paragraph = paragraphType.createAndFill();
  if (!paragraph) return false;

  const transaction = state.tr.insert(insertPos, paragraph);
  const selectionPos = insertPos + 1;
  view.dispatch(transaction.setSelection(TextSelection.create(transaction.doc, selectionPos)));
  view.focus();
  return true;
}

function findMilkdownParentNode($pos, predicate) {
  for (let depth = $pos.depth; depth > 0; depth -= 1) {
    const node = $pos.node(depth);
    if (!predicate(node)) continue;
    return {
      node,
      from: $pos.before(depth),
      to: $pos.after(depth)
    };
  }
  return null;
}

function syncMilkdownCommandMenu(instance) {
  if (instance.destroyed) return;
  if (!instance.view || !instance.controls) return;

  const range = getMilkdownCommandRange(instance.view);
  instance.state.commandRange = range;
  if (!range || instance.state.dismissedCommand === milkdownCommandSignature(range)) {
    closeMilkdownCommandMenu(instance);
    return;
  }

  const options = typeof window.journalCommandOptions === "function"
    ? window.journalCommandOptions(range)
    : [];
  if (!options.length) {
    closeMilkdownCommandMenu(instance);
    return;
  }

  instance.state.commandOptions = options;
  instance.state.activeIndex = Math.min(instance.state.activeIndex, options.length - 1);
  renderMilkdownCommandMenu(instance);
}

function getMilkdownCommandRange(view) {
  const { state } = view;
  const { selection } = state;
  if (!selection.empty) return null;

  const { $from } = selection;
  const parentText = $from.parent.textBetween(0, $from.parentOffset, undefined, "\uFFFC");
  for (let index = parentText.length - 1; index >= 0; index -= 1) {
    const char = parentText[index];
    if (char === "\n" || char === "\r") break;
    if (char !== "/") continue;
    if (index > 0 && parentText[index - 1] === "\\") continue;
    if (index > 0 && !/\s/.test(parentText[index - 1])) continue;
    const from = $from.start() + index;
    const to = $from.pos;
    return { start: from, end: to, from, to, text: parentText.slice(index) };
  }
  return null;
}

function renderMilkdownCommandMenu(instance) {
  closeMilkdownCommandMenu(instance, { keepOptions: true });

  const menu = document.createElement("div");
  menu.className = "journal-command-menu";
  menu.setAttribute("role", "listbox");
  instance.state.commandOptions.forEach((option, index) => {
    const item = document.createElement("button");
    item.className = `journal-command-item${index === instance.state.activeIndex ? " active" : ""}`;
    item.type = "button";
    item.setAttribute("role", "option");
    item.setAttribute("aria-selected", String(index === instance.state.activeIndex));

    const label = document.createElement("span");
    label.className = "journal-command-label";
    label.textContent = option.label;
    const detail = document.createElement("span");
    detail.className = "journal-command-detail";
    detail.textContent = option.detail;
    item.append(label, detail);

    item.addEventListener("mousedown", (event) => event.preventDefault());
    item.addEventListener("click", () => selectMilkdownCommandOption(instance, option));
    menu.append(item);
  });

  instance.state.commandMenu = menu;
  instance.root.append(menu);
  positionMilkdownCommandMenu(instance, menu);
}

function positionMilkdownCommandMenu(instance, menu) {
  const { view } = instance;
  const range = instance.state.commandRange;
  if (!view || !range) return;

  let caret;
  try {
    caret = view.coordsAtPos(range.to);
  } catch {
    return;
  }

  if (!caret || !Number.isFinite(caret.top) || !Number.isFinite(caret.bottom)) return;

  const gap = 7;
  const edgePadding = 6;
  const rootRect = instance.root.getBoundingClientRect();
  const rootScrollTop = instance.root.scrollTop || 0;
  const menuHeight = menu.offsetHeight || Math.min(menu.scrollHeight || 230, 230);
  const visibleHeight = instance.root.clientHeight || rootRect.height || 0;
  const lineTop = caret.top - rootRect.top + rootScrollTop;
  const lineBottom = caret.bottom - rootRect.top + rootScrollTop;
  const belowTop = lineBottom + gap;

  if (!visibleHeight || !menuHeight) {
    menu.style.top = `${Math.max(edgePadding, belowTop)}px`;
    menu.style.bottom = "auto";
    return;
  }

  const visibleTop = rootScrollTop + edgePadding;
  const visibleBottom = rootScrollTop + visibleHeight - edgePadding;
  const availableBelow = visibleBottom - belowTop;
  const availableAbove = lineTop - gap - visibleTop;
  const placeBelow = availableBelow >= menuHeight || availableBelow >= availableAbove;
  const sideSpace = placeBelow ? availableBelow : availableAbove;
  const constrainedHeight = sideSpace > 0 ? Math.min(menuHeight, sideSpace) : menuHeight;
  const top = placeBelow ? belowTop : lineTop - constrainedHeight - gap;

  menu.style.top = `${Math.round(top)}px`;
  menu.style.bottom = "auto";
  if (sideSpace > 0) {
    menu.style.maxHeight = `${Math.max(72, Math.min(230, sideSpace))}px`;
  }
}

function setMilkdownCommandActiveIndex(instance, nextIndex) {
  const options = instance.state.commandOptions;
  if (!options.length) return;
  const lastIndex = options.length - 1;
  instance.state.activeIndex = nextIndex < 0 ? lastIndex : nextIndex > lastIndex ? 0 : nextIndex;
  if (!instance.state.commandMenu) return;

  Array.from(instance.state.commandMenu.children).forEach((item, index) => {
    item.classList.toggle("active", index === instance.state.activeIndex);
    item.setAttribute("aria-selected", String(index === instance.state.activeIndex));
  });
}

function selectMilkdownCommandOption(instance, option) {
  if (!option) return;

  if (option.type === "command") {
    if (applyMilkdownClearCommand(instance, option.id, instance.state.commandRange)) {
      return;
    }
    replaceMilkdownCommandText(instance, `/${option.id} `);
    instance.state.dismissedCommand = "";
    window.setTimeout(() => syncMilkdownCommandMenu(instance), 0);
    return;
  }

  if (option.type === "tag") {
    addMilkdownJournalTag(instance, option.tag);
    removeMilkdownCommandText(instance);
  }

  if (option.type === "link") {
    addMilkdownJournalLink(instance, option.key);
    removeMilkdownCommandText(instance);
  }

  instance.state.dismissedCommand = "";
  closeMilkdownCommandMenu(instance);
  refreshMilkdownJournalMeta(instance);
}

function applyMilkdownLineCommandOnEnter(instance, event) {
  const range = getMilkdownCommandRange(instance.view);
  if (!range) return false;

  const title = range.text.match(/^\/(?:t|title)\s+(.+)$/i);
  if (title) return applyMilkdownTextCommand(event, instance, range, "title", title[1]);

  const subtitle = range.text.match(/^\/(?:st|subtitle|substitle)\s+(.+)$/i);
  if (subtitle) return applyMilkdownTextCommand(event, instance, range, "subtitle", subtitle[1]);

  const tag = range.text.match(/^\/tag\s+(.+)$/i);
  if (tag) return applyMilkdownTagCommand(event, instance, range, tag[1]);

  const clear = range.text.match(/^\/(clear-subtitle|clear-links|clear-tags)\s*$/i);
  if (clear) {
    event.preventDefault();
    return applyMilkdownClearCommand(instance, clear[1], range);
  }

  return false;
}

function applyMilkdownTextCommand(event, instance, range, target, rawValue) {
  const value = typeof window.unquoteJournalCommandValue === "function"
    ? window.unquoteJournalCommandValue(rawValue).trim()
    : String(rawValue).trim();
  if (!value || !instance.controls) return false;

  event.preventDefault();
  if (target === "title") {
    instance.controls.title.value = value;
  } else {
    instance.controls.subtitle.textContent = value;
    instance.controls.subtitle.hidden = false;
    instance.controls.subtitleSource = "manual";
  }

  removeMilkdownCommandText(instance, range);
  closeMilkdownCommandMenu(instance);
  refreshMilkdownJournalMeta(instance);
  return true;
}

function applyMilkdownTagCommand(event, instance, range, rawValue) {
  const value = typeof window.unquoteJournalCommandValue === "function"
    ? window.unquoteJournalCommandValue(rawValue).trim()
    : String(rawValue).trim();
  if (!value || !instance.controls) return false;

  event.preventDefault();
  addMilkdownJournalTag(instance, value);
  removeMilkdownCommandText(instance, range);
  closeMilkdownCommandMenu(instance);
  refreshMilkdownJournalMeta(instance);
  return true;
}

function applyMilkdownClearCommand(instance, rawCommand, range) {
  if (!instance.controls) return false;

  const command = String(rawCommand || "").toLowerCase();
  if (command === "clear-subtitle" && typeof window.clearJournalSubtitle === "function") {
    window.clearJournalSubtitle(instance.controls);
  } else if (command === "clear-links" && typeof window.clearJournalLinks === "function") {
    window.clearJournalLinks(instance.controls);
  } else if (command === "clear-tags" && typeof window.clearJournalTags === "function") {
    window.clearJournalTags(instance.controls);
  } else {
    return false;
  }

  removeMilkdownCommandText(instance, range);
  closeMilkdownCommandMenu(instance);
  refreshMilkdownJournalMeta(instance);
  return true;
}

function processCompletedMilkdownTagCommand(instance) {
  if (!instance.view || !instance.controls) return false;

  const tag = completedMilkdownTagCommand(instance.view);
  if (!tag) return false;

  removeMilkdownText(instance, tag.from, tag.to);
  addMilkdownJournalTag(instance, tag.value);
  refreshMilkdownJournalMeta(instance);
  closeMilkdownCommandMenu(instance);
  return true;
}

function completedMilkdownTagCommand(view) {
  const { state } = view;
  const { selection } = state;
  if (!selection.empty) return null;

  const { $from } = selection;
  const before = $from.parent.textBetween(0, $from.parentOffset, undefined, "\uFFFC");
  const patterns = [
    /(^|\s)\/tag\s+"([^"]+)"$/i,
    /(^|\s)\/"([^"]+)"$/,
    /(^|\s)\/tag\s+([^\s"]+)\s$/i,
    /(^|\s)\/([^\s"/][^\s]*)\s$/i
  ];

  for (const [patternIndex, pattern] of patterns.entries()) {
    const match = pattern.exec(before);
    if (!match) continue;
    const value = match[2].trim();
    if (!value) continue;
    if (patternIndex === 3 && typeof window.isReservedJournalCommand === "function" && window.isReservedJournalCommand(value)) continue;
    return {
      value,
      from: $from.start() + match.index + match[1].length,
      to: $from.pos
    };
  }
  return null;
}

function normalizeMilkdownEscapedCommandSlash(instance) {
  const { view } = instance;
  if (!view || !view.state.selection.empty) return false;

  const { state } = view;
  const { $from } = state.selection;
  const parentText = $from.parent.textBetween(0, $from.parentOffset, undefined, "\uFFFC");
  const replacements = [];

  for (let index = 0; index < parentText.length - 1; index += 1) {
    if (parentText[index] !== "\\" || parentText[index + 1] !== "/") continue;
    if (index > 0 && !/\s/.test(parentText[index - 1])) continue;
    replacements.push($from.start() + index);
  }

  if (!replacements.length) return false;

  let transaction = state.tr;
  replacements.reverse().forEach((position) => {
    transaction = transaction.insertText(commandEscapeMarker, position, position + 1);
  });
  view.dispatch(transaction);
  view.focus();
  return true;
}

function replaceMilkdownCommandText(instance, value) {
  const range = instance.state.commandRange;
  if (!range) return;
  replaceMilkdownText(instance, range.from, range.to, value);
}

function removeMilkdownCommandText(instance, range = instance.state.commandRange) {
  if (!range) return;
  removeMilkdownText(instance, range.from, range.to);
}

function replaceMilkdownText(instance, from, to, value) {
  const { view } = instance;
  if (!view) return;
  view.dispatch(view.state.tr.insertText(value, from, to));
  view.focus();
}

function removeMilkdownText(instance, from, to) {
  replaceMilkdownText(instance, from, to, "");
}

function addMilkdownJournalTag(instance, tag) {
  if (typeof window.addJournalTag === "function") {
    window.addJournalTag(instance.controls, tag);
  }
}

function addMilkdownJournalLink(instance, key) {
  if (typeof window.addJournalLink === "function") {
    window.addJournalLink(instance.controls, key);
  }
}

function refreshMilkdownJournalMeta(instance) {
  if (typeof window.refreshJournalEditorMeta === "function") {
    window.refreshJournalEditorMeta(instance.controls);
  }
}

function closeMilkdownCommandMenu(instance, options = {}) {
  instance.state.commandMenu?.remove();
  instance.state.commandMenu = null;
  if (options.keepOptions) return;
  instance.state.commandOptions = [];
  instance.state.activeIndex = 0;
  instance.state.commandRange = null;
}

function milkdownCommandSignature(range) {
  return range ? `${range.from}:${range.to}:${range.text}` : "";
}

function resizeMilkdownInlineEditor(root) {
  const editorBody = root.querySelector(".ProseMirror");
  if (!editorBody) return;

  const minHeight = 180;
  root.style.maxHeight = "none";
  root.style.overflowY = "visible";
  editorBody.style.minHeight = `${minHeight}px`;
}
