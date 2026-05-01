const JOURNAL_COMMANDS = [
  { id: "title", aliases: ["t"], label: "/title", detail: "Set note title" },
  { id: "subtitle", aliases: ["st", "substitle"], label: "/subtitle", detail: "Set note subtitle" },
  { id: "tag", label: "/tag", detail: "Add the next word as a tag" },
  { id: "link", label: "/link", detail: "Link a roadmap item" },
  { id: "plan", label: "/plan", detail: "Link an item from your current plan" }
];

function createJournalEditorControls(entry, title, subtitle) {
  return {
    title,
    subtitle,
    tags: uniqueJournalTags(entry?.tags || []),
    linkedItemKeys: uniqueJournalLinks(entry?.linkedItemKeys || []),
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

function unquoteJournalCommandValue(value) {
  const trimmed = String(value).trim();
  const quoted = trimmed.match(/^"([^"]+)"$/);
  return quoted ? quoted[1] : trimmed;
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
