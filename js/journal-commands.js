const JOURNAL_COMMANDS = [
  { id: "title", aliases: ["t"], label: "/title", detail: "Set note title" },
  { id: "subtitle", aliases: ["st", "substitle"], label: "/subtitle", detail: "Set note subtitle" },
  { id: "tag", label: "/tag", detail: "Add the next word as a tag" },
  { id: "link", label: "/link", detail: "Link a roadmap item" },
  { id: "plan", label: "/plan", detail: "Link an item from your current plan" }
];

function createJournalEditorControls(entry, title, subtitle, body) {
  return {
    title,
    subtitle,
    body,
    tags: uniqueJournalTags(entry?.tags || []),
    linkedItemKeys: uniqueJournalLinks(entry?.linkedItemKeys || []),
    commandHost: null,
    commandMenu: null,
    commandOptions: [],
    commandActiveIndex: 0,
    commandRange: null,
    meta: null
  };
}

function renderJournalEditorMeta(controls) {
  const wrapper = element("div", "journal-editor-meta");
  controls.meta = wrapper;
  refreshJournalEditorMeta(controls);
  return wrapper;
}

function refreshJournalEditorMeta(controls) {
  if (!controls.meta) return;

  controls.meta.replaceChildren();
  controls.tags.forEach((tag) => controls.meta.append(renderJournalEditorTag(controls, tag)));
  controls.linkedItemKeys.forEach((key) => {
    const target = getJournalTarget(key);
    const label = target ? plainText(target.itemText) : key;
    controls.meta.append(renderJournalEditorLink(controls, key, label));
  });
  controls.meta.hidden = !controls.tags.length && !controls.linkedItemKeys.length;
}

function renderJournalEditorTag(controls, tag) {
  const chip = element("button", "journal-editor-chip", tag);
  chip.type = "button";
  chip.title = `Remove tag ${tag}`;
  chip.setAttribute("aria-label", `Remove tag ${tag}`);
  chip.addEventListener("click", () => {
    controls.tags = controls.tags.filter((item) => item.toLowerCase() !== tag.toLowerCase());
    refreshJournalEditorMeta(controls);
  });
  return chip;
}

function renderJournalEditorLink(controls, key, label) {
  const chip = element("button", "journal-editor-chip link", trimText(label, 54));
  chip.type = "button";
  chip.title = `Remove link ${label}`;
  chip.setAttribute("aria-label", `Remove link ${label}`);
  chip.addEventListener("click", () => {
    controls.linkedItemKeys = controls.linkedItemKeys.filter((item) => item !== key);
    refreshJournalEditorMeta(controls);
  });
  return chip;
}

function handleJournalCommandInput(form, controls, options = {}) {
  controls.commandResize = Boolean(options.resize);
  processCompletedJournalTagCommand(controls);
  syncJournalCommandMenu(form, controls);
  if (options.resize) resizeJournalInlineNote(controls.body);
}

function handleJournalCommandKeydown(event, form, controls, options = {}) {
  if (!controls.commandMenu) return false;

  if (event.key === "Escape") {
    event.preventDefault();
    if (typeof event.stopPropagation === "function") event.stopPropagation();
    closeJournalCommandMenu(controls);
    form.dataset.commandActive = "false";
    return true;
  }

  if (event.key === "ArrowDown" || event.key === "ArrowUp") {
    event.preventDefault();
    const direction = event.key === "ArrowDown" ? 1 : -1;
    setJournalCommandActiveIndex(controls, controls.commandActiveIndex + direction);
    return true;
  }

  if ((event.key === "Enter" || event.key === "Tab") && controls.commandOptions.length) {
    event.preventDefault();
    selectJournalCommandOption(form, controls, controls.commandOptions[controls.commandActiveIndex], options);
    return true;
  }

  return false;
}

function syncJournalCommandMenu(form, controls) {
  const range = getJournalCommandRange(controls.body);
  controls.commandRange = range;
  form.dataset.commandActive = String(Boolean(range));
  if (!range) {
    closeJournalCommandMenu(controls);
    return;
  }

  const options = journalCommandOptions(range);
  if (!options.length) {
    closeJournalCommandMenu(controls);
    return;
  }

  controls.commandOptions = options;
  controls.commandActiveIndex = Math.min(controls.commandActiveIndex, options.length - 1);
  renderJournalCommandMenu(form, controls);
}

function getJournalCommandRange(body) {
  if (body.selectionStart !== body.selectionEnd) return null;

  const caret = body.selectionStart;
  const value = body.value;
  for (let index = caret - 1; index >= 0; index -= 1) {
    const char = value[index];
    if (char === "\n" || char === "\r") break;
    if (char !== "/") continue;
    if (index > 0 && value[index - 1] === "\\") continue;
    if (index > 0 && !/\s/.test(value[index - 1])) continue;
    return { start: index, end: caret, text: value.slice(index, caret) };
  }
  return null;
}

function journalCommandOptions(range) {
  const text = range.text;
  const command = text.match(/^\/([a-z]*)$/i);
  if (command) {
    const query = command[1].toLowerCase();
    const options = JOURNAL_COMMANDS
      .filter((item) => journalCommandMatches(item, query))
      .sort((left, right) => journalCommandScore(right, query) - journalCommandScore(left, query))
      .map((item) => ({ type: "command", ...item }));
    if (query && !options.length && !isReservedJournalCommand(query)) {
      options.push({ type: "tag", label: `Tag "${query}"`, detail: "Add tag", tag: query });
    }
    return options;
  }

  const link = text.match(/^\/link(?:\s+(.*))?$/i);
  if (link) return journalLinkCommandOptions(link[1] || "");

  const plan = text.match(/^\/plan(?:\s+(.*))?$/i);
  if (plan) return journalPlanCommandOptions(plan[1] || "");

  return [];
}

function journalCommandMatches(command, query) {
  if (!query) return true;
  return command.id.startsWith(query) || (command.aliases || []).some((alias) => alias.startsWith(query));
}

function journalCommandScore(command, query) {
  if (!query) return 0;
  if ((command.aliases || []).includes(query)) return 3;
  if (command.id === query) return 2;
  if (command.id.startsWith(query)) return 1;
  return 0;
}

function journalLinkCommandOptions(query) {
  return journalTargetCommandOptions(getJournalLinkTargets(), query);
}

function journalPlanCommandOptions(query) {
  return journalTargetCommandOptions(getJournalPlanLinkTargets(), query);
}

function journalTargetCommandOptions(targets, query) {
  const normalizedQuery = query.trim().toLowerCase();
  return targets
    .filter((target) => journalLinkOptionSearchText(target).includes(normalizedQuery))
    .slice(0, 8)
    .map((target) => ({
      type: "link",
      key: target.key,
      label: trimText(plainText(target.itemText), 80),
      detail: journalTargetContext(target)
    }));
}

function getJournalPlanLinkTargets() {
  return getJournalLinkTargets().filter((target) => state.favorites?.[target.key]);
}

function journalLinkOptionSearchText(target) {
  return `${plainText(target.itemText)} ${journalTargetContext(target)}`.toLowerCase();
}

function renderJournalCommandMenu(form, controls) {
  if (!controls.commandHost) return;
  controls.commandMenu?.remove();
  controls.commandMenu = null;

  const menu = element("div", "journal-command-menu");
  menu.setAttribute("role", "listbox");
  controls.commandOptions.forEach((option, index) => {
    const item = element("button", `journal-command-item${index === controls.commandActiveIndex ? " active" : ""}`);
    item.type = "button";
    item.setAttribute("role", "option");
    item.setAttribute("aria-selected", String(index === controls.commandActiveIndex));
    item.append(element("span", "journal-command-label", option.label), element("span", "journal-command-detail", option.detail));
    item.addEventListener("mousedown", (event) => event.preventDefault());
    item.addEventListener("click", () => selectJournalCommandOption(form, controls, option, { resize: controls.commandResize }));
    menu.append(item);
  });

  controls.commandMenu = menu;
  controls.commandHost.append(menu);
}

function setJournalCommandActiveIndex(controls, nextIndex) {
  if (!controls.commandOptions.length) return;
  const lastIndex = controls.commandOptions.length - 1;
  controls.commandActiveIndex = nextIndex < 0 ? lastIndex : nextIndex > lastIndex ? 0 : nextIndex;
  if (!controls.commandMenu) return;
  Array.from(controls.commandMenu.children).forEach((item, index) => {
    item.classList.toggle("active", index === controls.commandActiveIndex);
    item.setAttribute("aria-selected", String(index === controls.commandActiveIndex));
  });
}

function selectJournalCommandOption(form, controls, option, options = {}) {
  if (!option) return;
  if (option.type === "command") {
    replaceJournalCommandText(controls, `/${option.id} `);
    syncJournalCommandMenu(form, controls);
    return;
  }
  if (option.type === "tag") {
    addJournalTag(controls, option.tag);
    removeJournalCommandText(controls);
  }
  if (option.type === "link") {
    addJournalLink(controls, option.key);
    removeJournalCommandText(controls);
  }
  closeJournalCommandMenu(controls);
  form.dataset.commandActive = "false";
  refreshJournalEditorMeta(controls);
  if (options.resize) resizeJournalInlineNote(controls.body);
}

function processCompletedJournalTagCommand(controls) {
  const tag = completedJournalTagCommand(controls.body);
  if (!tag) return false;

  controls.body.value = controls.body.value.slice(0, tag.start) + controls.body.value.slice(tag.end);
  setJournalBodySelection(controls.body, tag.start);
  addJournalTag(controls, tag.value);
  refreshJournalEditorMeta(controls);
  closeJournalCommandMenu(controls);
  return true;
}

function completedJournalTagCommand(body) {
  if (body.selectionStart !== body.selectionEnd) return null;

  const caret = body.selectionStart;
  const before = body.value.slice(0, caret);
  const patterns = [
    /(^|\s)\/tag\s+"([^"]+)"$/i,
    /(^|\s)\/"([^"]+)"$/,
    /(^|\s)\/tag\s+([^\s"]+)\s$/i,
    /(^|\s)\/([^\s"/][^\s]*)\s$/i
  ];

  for (const pattern of patterns) {
    const match = pattern.exec(before);
    if (!match) continue;
    const value = match[2].trim();
    if (!value) continue;
    if (pattern === patterns[3] && isReservedJournalCommand(value)) continue;
    return {
      value,
      start: match.index + match[1].length,
      end: caret
    };
  }
  return null;
}

function applyJournalLineCommandOnEnter(event, form, controls, options = {}) {
  if (controls.body.selectionStart !== controls.body.selectionEnd) return false;

  const range = getJournalCommandRange(controls.body);
  if (!range) return false;

  const title = range.text.match(/^\/(?:t|title)\s+(.+)$/i);
  if (title) {
    return applyJournalTextCommand(event, form, controls, range, "title", title[1], options);
  }

  const subtitle = range.text.match(/^\/(?:st|subtitle|substitle)\s+(.+)$/i);
  if (subtitle) {
    return applyJournalTextCommand(event, form, controls, range, "subtitle", subtitle[1], options);
  }

  return false;
}

function applyJournalTextCommand(event, form, controls, range, target, rawValue, options = {}) {
  const value = unquoteJournalCommandValue(rawValue).trim();
  if (!value) return false;

  event.preventDefault();
  if (target === "title") {
    controls.title.value = value;
  } else {
    controls.subtitle.textContent = value;
    controls.subtitle.hidden = false;
  }

  controls.commandRange = range;
  removeJournalCommandText(controls);
  closeJournalCommandMenu(controls);
  form.dataset.commandActive = "false";
  if (options.resize) resizeJournalInlineNote(controls.body);
  return true;
}

function unquoteJournalCommandValue(value) {
  const trimmed = String(value).trim();
  const quoted = trimmed.match(/^"([^"]+)"$/);
  return quoted ? quoted[1] : trimmed;
}

function replaceJournalCommandText(controls, value) {
  const range = controls.commandRange;
  if (!range) return;

  const body = controls.body;
  body.value = body.value.slice(0, range.start) + value + body.value.slice(range.end);
  setJournalBodySelection(body, range.start + value.length);
}

function removeJournalCommandText(controls) {
  const range = controls.commandRange;
  if (!range) return;

  const body = controls.body;
  body.value = body.value.slice(0, range.start) + body.value.slice(range.end);
  setJournalBodySelection(body, range.start);
}

function addJournalTag(controls, tag) {
  const normalized = tag.trim();
  if (!normalized) return;
  if (controls.tags.some((item) => item.toLowerCase() === normalized.toLowerCase())) return;
  controls.tags.push(normalized);
}

function addJournalLink(controls, key) {
  if (!key || controls.linkedItemKeys.includes(key)) return;
  controls.linkedItemKeys.push(key);
}

function isReservedJournalCommand(value) {
  const normalized = String(value).toLowerCase();
  return JOURNAL_COMMANDS.some((command) => command.id === normalized || (command.aliases || []).includes(normalized));
}

function closeJournalCommandMenu(controls) {
  controls.commandMenu?.remove();
  controls.commandMenu = null;
  controls.commandOptions = [];
  controls.commandActiveIndex = 0;
  controls.commandRange = null;
}

function setJournalBodySelection(body, position) {
  if (typeof body.setSelectionRange === "function") body.setSelectionRange(position, position);
  body.selectionStart = position;
  body.selectionEnd = position;
  body.focus();
}

function uniqueJournalTags(tags) {
  const seen = new Set();
  return tags
    .map((tag) => String(tag).trim())
    .filter(Boolean)
    .filter((tag) => {
      const key = tag.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
}

function uniqueJournalLinks(keys) {
  return Array.from(new Set(keys.filter((key) => typeof key === "string" && key)));
}
