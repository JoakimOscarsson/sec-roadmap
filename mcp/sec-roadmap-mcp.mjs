#!/usr/bin/env node
import { existsSync, readFileSync, statSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const SERVER_NAME = "sec-roadmap";
const SERVER_VERSION = "0.1.0";
const PROTOCOL_VERSION = "2025-11-25";
const SUPPORTED_PROTOCOL_VERSIONS = [PROTOCOL_VERSION, "2025-06-18", "2025-03-26", "2024-11-05"];

const SPECIALIZATION_TRACK_NAMES = {
  A: "Embedded R&D",
  B: "AI / LLM / Agentic Security",
  C: "Defence Industry",
  D: "IoT Product Security",
  E: "Automotive Cybersecurity",
  F: "Cloud / SaaS / Platform Security",
  G: "Telecom / 5G Security",
  H: "OT / ICS Security",
  I: "Public Sector Security",
  X: "Cross-Domain Intersections"
};

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const roadmap = parseRoadmap(readRoadmapMarkdown());
let state = normalizeState(loadStateCandidate());
let loadedStatePath = getStateFilePath();
let loadedStateMtimeMs = stateFileMtime(loadedStatePath);

const tools = [
  {
    name: "roadmap_overview",
    description: "Return a compact overview of roadmap structure, user progress, plan, and journal counts.",
    inputSchema: objectSchema({})
  },
  {
    name: "roadmap_list_chapters",
    description: "List core and/or specialization chapters with counts and optional section summaries.",
    inputSchema: objectSchema({
      scope: enumProperty(["all", "core", "specializations"], "all"),
      includeSections: { type: "boolean", default: false }
    })
  },
  {
    name: "roadmap_get_chapter",
    description: "Fetch one chapter by ID. Use detail=summary first, then normal/full only if needed.",
    inputSchema: objectSchema({
      chapterId: { type: "string", description: "Chapter ID from roadmap_list_chapters." },
      detail: enumProperty(["summary", "normal", "full"], "normal")
    }, ["chapterId"])
  },
  {
    name: "roadmap_search",
    description: "Search roadmap, custom, and portfolio items. Returns compact item references by default.",
    inputSchema: pagedSchema({
      query: { type: "string" },
      scope: enumProperty(["all", "core", "specializations", "custom", "portfolio"], "all"),
      detail: enumProperty(["summary", "normal"], "summary")
    }, ["query"])
  },
  {
    name: "progress_summary",
    description: "Return progress counts, level distribution, stale items, and completion summaries.",
    inputSchema: objectSchema({
      staleLimit: { type: "integer", minimum: 1, maximum: 100, default: 20 }
    })
  },
  {
    name: "plan_list",
    description: "List pinned plan items with progress and context. Supports pagination.",
    inputSchema: pagedSchema({
      detail: enumProperty(["summary", "normal", "full"], "normal")
    })
  },
  {
    name: "journal_summary",
    description: "Summarize journal notes and activity without returning full bodies.",
    inputSchema: objectSchema({
      days: { type: "integer", minimum: 1, maximum: 3650, default: 30 },
      type: enumProperty(["all", "note", "activity"], "all"),
      tag: { type: "string" },
      linkedTo: { type: "string" },
      query: { type: "string" }
    })
  },
  {
    name: "journal_list",
    description: "List journal timeline items. Use includeBody=false to avoid saturating LLM context.",
    inputSchema: pagedSchema({
      days: { type: "integer", minimum: 1, maximum: 3650, default: 30 },
      type: enumProperty(["all", "note", "activity"], "all"),
      includeBody: { type: "boolean", default: false },
      tag: { type: "string" },
      linkedTo: { type: "string" },
      query: { type: "string" }
    })
  },
  {
    name: "journal_get_entry",
    description: "Fetch one journal note or activity event by ID.",
    inputSchema: objectSchema({
      id: { type: "string", description: "Journal ID, activity ID, or timeline ID such as note:journal-123." }
    }, ["id"])
  },
  {
    name: "context_pack",
    description: "Return a curated, bounded read-only pack for a planning or review conversation.",
    inputSchema: objectSchema({
      purpose: enumProperty(["weekly-planning", "review", "gap-analysis", "journal-recap"], "weekly-planning"),
      budget: enumProperty(["small", "medium", "large"], "medium")
    })
  }
];

const resources = [
  resource("sec-roadmap://overview", "Overview", "Compact roadmap/user-data overview."),
  resource("sec-roadmap://roadmap/manifest", "Roadmap Manifest", "All chapters, sections, and item counts."),
  resource("sec-roadmap://progress/summary", "Progress Summary", "Progress counts and stale-review summary."),
  resource("sec-roadmap://plan", "Plan", "Pinned study plan items."),
  resource("sec-roadmap://journal/summary", "Journal Summary", "Recent journal note and activity summary.")
];

let inputBuffer = Buffer.alloc(0);
process.stdin.on("data", (chunk) => {
  inputBuffer = Buffer.concat([inputBuffer, chunk]);
  drainInputBuffer();
});

process.stdin.on("error", (error) => {
  console.error(error);
});

function drainInputBuffer() {
  while (true) {
    const headerEnd = inputBuffer.indexOf("\r\n\r\n");
    if (headerEnd < 0) return;

    const header = inputBuffer.slice(0, headerEnd).toString("utf8");
    const match = header.match(/content-length:\s*(\d+)/i);
    if (!match) {
      inputBuffer = inputBuffer.slice(headerEnd + 4);
      continue;
    }

    const length = Number(match[1]);
    const bodyStart = headerEnd + 4;
    const bodyEnd = bodyStart + length;
    if (inputBuffer.length < bodyEnd) return;

    const body = inputBuffer.slice(bodyStart, bodyEnd).toString("utf8");
    inputBuffer = inputBuffer.slice(bodyEnd);
    handleRawMessage(body);
  }
}

async function handleRawMessage(body) {
  let message;
  try {
    message = JSON.parse(body);
  } catch {
    sendError(null, -32700, "Parse error");
    return;
  }

  if (!Object.prototype.hasOwnProperty.call(message, "id")) {
    if (message.method === "notifications/initialized") return;
    return;
  }

  try {
    const result = await handleRequest(message.method, message.params || {});
    sendMessage({ jsonrpc: "2.0", id: message.id, result });
  } catch (error) {
    sendError(message.id, error.code || -32603, error.message || "Internal error");
  }
}

async function handleRequest(method, params) {
  refreshStateFromDisk();

  if (method === "initialize") {
    return {
      protocolVersion: negotiatedProtocolVersion(params.protocolVersion),
      capabilities: {
        resources: {},
        tools: {}
      },
      serverInfo: {
        name: SERVER_NAME,
        version: SERVER_VERSION
      }
    };
  }

  if (method === "ping") return {};
  if (method === "tools/list") return { tools };
  if (method === "tools/call") return callTool(params.name, params.arguments || {});
  if (method === "resources/list") return { resources };
  if (method === "resources/read") return readResource(params.uri);

  throw mcpError(-32601, `Unsupported method: ${method}`);
}

function refreshStateFromDisk() {
  const statePath = getStateFilePath();
  const mtimeMs = stateFileMtime(statePath);
  if (statePath === loadedStatePath && mtimeMs === loadedStateMtimeMs) return;

  loadedStatePath = statePath;
  loadedStateMtimeMs = mtimeMs;
  state = normalizeState(loadStateCandidate());
}

function stateFileMtime(statePath) {
  if (!statePath || !existsSync(statePath)) return -1;
  try {
    return statSync(statePath).mtimeMs;
  } catch {
    return -1;
  }
}

function negotiatedProtocolVersion(clientVersion) {
  return SUPPORTED_PROTOCOL_VERSIONS.includes(clientVersion) ? clientVersion : PROTOCOL_VERSION;
}

function callTool(name, args) {
  const handlers = {
    roadmap_overview: () => roadmapOverview(),
    roadmap_list_chapters: () => roadmapListChapters(args),
    roadmap_get_chapter: () => roadmapGetChapter(args),
    roadmap_search: () => roadmapSearch(args),
    progress_summary: () => progressSummary(args),
    plan_list: () => planList(args),
    journal_summary: () => journalSummary(args),
    journal_list: () => journalList(args),
    journal_get_entry: () => journalGetEntry(args),
    context_pack: () => contextPack(args)
  };

  if (!handlers[name]) throw mcpError(-32602, `Unknown tool: ${name}`);
  return toolResult(handlers[name]());
}

function readResource(uri) {
  const handlers = {
    "sec-roadmap://overview": roadmapOverview,
    "sec-roadmap://roadmap/manifest": () => roadmapListChapters({ scope: "all", includeSections: true, limit: 500 }),
    "sec-roadmap://progress/summary": () => progressSummary({ staleLimit: 20 }),
    "sec-roadmap://plan": () => planList({ limit: 100, detail: "normal" }),
    "sec-roadmap://journal/summary": () => journalSummary({ days: 30, type: "all" })
  };

  if (!handlers[uri]) throw mcpError(-32602, `Unknown resource: ${uri}`);
  const data = handlers[uri]();
  return {
    contents: [
      {
        uri,
        mimeType: "application/json",
        text: JSON.stringify(data, null, 2)
      }
    ]
  };
}

function roadmapOverview() {
  const allItems = getAllStudyItems();
  const progress = levelDistribution(allItems.filter((item) => item.sourceTab !== "portfolio"));
  const journal = getJournalTimeline({ days: 3650, type: "all", includeBody: false });
  return {
    generatedAt: new Date().toISOString(),
    stateLoaded: Boolean(getStateFilePath()),
    stateSource: getStateFilePath() || null,
    roadmap: {
      coreChapters: roadmap.core.length,
      specializationChapters: roadmap.specializations.length,
      specializationTracks: getSpecializationTracks(roadmap.specializations).length,
      portfolioItems: getPortfolioItems().length,
      trackableItems: allItems.filter((item) => item.sourceTab !== "portfolio").length
    },
    progress,
    plan: {
      items: getPlanItems().length
    },
    journal: {
      notes: state.journal.length,
      activityEvents: state.activity.length,
      latestDate: journal.items[0]?.date || null
    },
    recommendedNextCalls: [
      { tool: "progress_summary", arguments: { staleLimit: 20 } },
      { tool: "plan_list", arguments: { detail: "normal", limit: 25 } },
      { tool: "journal_summary", arguments: { days: 30, type: "all" } },
      { tool: "roadmap_list_chapters", arguments: { scope: "all", includeSections: false } }
    ]
  };
}

function roadmapListChapters(args) {
  const scope = enumValue(args.scope, ["all", "core", "specializations"], "all");
  const chapters = chaptersForScope(scope);
  const items = chapters.map((chapter) => summarizeChapter(chapter, Boolean(args.includeSections)));
  return paginate(items, args);
}

function roadmapGetChapter(args) {
  const chapter = findChapter(args.chapterId);
  if (!chapter) throw mcpError(-32602, `Unknown chapterId: ${args.chapterId}`);
  return serializeChapter(chapter, enumValue(args.detail, ["summary", "normal", "full"], "normal"));
}

function roadmapSearch(args) {
  const query = String(args.query || "").trim().toLowerCase();
  if (!query) throw mcpError(-32602, "query is required");
  const scope = enumValue(args.scope, ["all", "core", "specializations", "custom", "portfolio"], "all");
  const detail = enumValue(args.detail, ["summary", "normal"], "summary");
  const matches = getAllStudyItems()
    .filter((item) => scope === "all" || item.sourceTab === scope)
    .filter((item) => itemSearchText(item).includes(query))
    .map((item) => serializeItem(item, detail));
  return paginate(matches, args);
}

function progressSummary(args) {
  const studyItems = getAllStudyItems().filter((item) => item.sourceTab !== "portfolio");
  const staleLimit = clampInt(args.staleLimit, 20, 1, 100);
  const stale = studyItems
    .filter((item) => item.level > 0)
    .map((item) => ({ ...item, activeDate: item.date || "" }))
    .sort((left, right) => dayNumber(left.activeDate) - dayNumber(right.activeDate))
    .slice(0, staleLimit)
    .map((item) => serializeItem(item, "normal"));

  return {
    distribution: levelDistribution(studyItems),
    plan: {
      items: getPlanItems().length,
      complete: getPlanItems().filter(planItemDone).length
    },
    portfolio: {
      items: getPortfolioItems().length,
      complete: getPortfolioItems().filter((item) => item.complete).length
    },
    stale
  };
}

function planList(args) {
  const detail = enumValue(args.detail, ["summary", "normal", "full"], "normal");
  const items = getPlanItems().map((item) => serializeItem(item, detail));
  return paginate(items, args);
}

function journalSummary(args) {
  const timeline = getJournalTimeline({
    days: clampInt(args.days, 30, 1, 3650),
    type: enumValue(args.type, ["all", "note", "activity"], "all"),
    tag: args.tag,
    linkedTo: args.linkedTo,
    query: args.query,
    includeBody: false
  });

  const byType = timeline.items.reduce((acc, item) => {
    acc[item.type] = (acc[item.type] || 0) + 1;
    return acc;
  }, {});

  const byTag = new Map();
  timeline.items.forEach((item) => {
    if (item.type !== "note") return;
    item.tags.forEach((tag) => byTag.set(tag, (byTag.get(tag) || 0) + 1));
  });

  return {
    filters: timeline.filters,
    total: timeline.total,
    byType,
    latestDate: timeline.items[0]?.date || null,
    topTags: Array.from(byTag, ([tag, count]) => ({ tag, count }))
      .sort((left, right) => right.count - left.count || left.tag.localeCompare(right.tag))
      .slice(0, 20),
    recent: timeline.items.slice(0, 10)
  };
}

function journalList(args) {
  const timeline = getJournalTimeline({
    days: clampInt(args.days, 30, 1, 3650),
    type: enumValue(args.type, ["all", "note", "activity"], "all"),
    tag: args.tag,
    linkedTo: args.linkedTo,
    query: args.query,
    includeBody: Boolean(args.includeBody)
  });
  return {
    ...timeline,
    ...paginate(timeline.items, args)
  };
}

function journalGetEntry(args) {
  const id = normalizeTimelineId(args.id);
  const item = getJournalTimeline({ days: 3650, includeBody: true, type: "all" })
    .items.find((candidate) => normalizeTimelineId(candidate.id) === id || normalizeTimelineId(candidate.rawId) === id);
  if (!item) throw mcpError(-32602, `Unknown journal entry/activity id: ${args.id}`);
  return item;
}

function contextPack(args) {
  const purpose = enumValue(args.purpose, ["weekly-planning", "review", "gap-analysis", "journal-recap"], "weekly-planning");
  const budget = enumValue(args.budget, ["small", "medium", "large"], "medium");
  const sizes = {
    small: { plan: 10, journal: 8, stale: 8, search: 8 },
    medium: { plan: 25, journal: 16, stale: 20, search: 15 },
    large: { plan: 60, journal: 35, stale: 50, search: 30 }
  }[budget];

  const pack = {
    purpose,
    budget,
    overview: roadmapOverview(),
    included: [],
    omitted: [
      "Full roadmap chapter bodies",
      "Full journal note bodies",
      "Unbounded activity history"
    ],
    nextCalls: [
      { tool: "roadmap_get_chapter", arguments: { chapterId: "<chapterId>", detail: "normal" } },
      { tool: "journal_get_entry", arguments: { id: "<journal-id>" } }
    ]
  };

  if (["weekly-planning", "gap-analysis"].includes(purpose)) {
    pack.plan = planList({ detail: "normal", limit: sizes.plan });
    pack.progress = progressSummary({ staleLimit: sizes.stale });
    pack.included.push("Current plan", "Progress distribution", "Oldest active progress items");
  }

  if (["weekly-planning", "review", "journal-recap"].includes(purpose)) {
    pack.journal = journalList({ days: 30, type: "all", includeBody: false, limit: sizes.journal });
    pack.included.push("Recent journal/activity summaries");
  }

  if (purpose === "gap-analysis") {
    pack.roadmapManifest = roadmapListChapters({ scope: "all", includeSections: true, limit: 200 });
    pack.included.push("Roadmap manifest");
  }

  return pack;
}

function parseRoadmap(source) {
  const lines = source.split(/\r?\n/).map((text, index) => ({ text, index }));
  const h2Sections = parseHeadingSections(lines, 2);
  const coreSection = findHeading(h2Sections, /^2\.\s+Core Curriculum/i);
  const specializationSection = findHeading(h2Sections, /^3\.\s+Specializations/i);
  const mapSection = findHeading(h2Sections, /^1\.\s+Map And How To Use/i);
  const portfolioSection = findHeading(h2Sections, /^4\.\s+Practice Portfolio/i);
  const referenceSection = findHeading(h2Sections, /^5\.\s+Reference Library/i);
  const guideSupport = parseSupportSection(mapSection);
  if (guideSupport) guideSupport.title = "Roadmap Guide";

  return {
    core: parseStudyChapters(coreSection, "core"),
    coreIntro: parseSectionIntro(coreSection, 3),
    specializations: parseStudyChapters(specializationSection, "specializations"),
    specializationIntro: parseSectionIntro(specializationSection, 3),
    support: {
      guide: guideSupport,
      portfolio: parseSupportSection(portfolioSection),
      reference: parseSupportSection(referenceSection)
    }
  };
}

function parseHeadingSections(lines, level) {
  const marker = "#".repeat(level);
  const starts = [];
  lines.forEach((line, position) => {
    const match = line.text.match(new RegExp(`^${marker}\\s+(.+)$`));
    if (match) starts.push({ position, title: cleanInline(match[1]), index: line.index });
  });

  return starts.map((start, position) => {
    const end = starts[position + 1]?.position ?? lines.length;
    return {
      id: uniqueSlug(start.title, start.index),
      title: start.title,
      startLine: start.index + 1,
      lines: lines.slice(start.position + 1, end)
    };
  });
}

function findHeading(sections, pattern) {
  return sections.find((section) => pattern.test(section.title));
}

function parseSectionIntro(section, childLevel) {
  if (!section) return [];
  const child = new RegExp(`^#{${childLevel}}\\s+`);
  const firstChild = section.lines.findIndex((line) => child.test(line.text));
  return firstChild === -1 ? section.lines : section.lines.slice(0, firstChild);
}

function parseStudyChapters(section, kind) {
  if (!section) return [];
  const starts = [];
  section.lines.forEach((line, position) => {
    const match = line.text.match(/^###\s+(.+)$/);
    if (match) starts.push({ position, title: cleanInline(match[1]), index: line.index });
  });

  return starts.map((start, position) => {
    const end = starts[position + 1]?.position ?? section.lines.length;
    const body = section.lines.slice(start.position + 1, end);
    return {
      id: uniqueSlug(`${kind}-${start.title}`, start.index),
      kind,
      title: start.title,
      startLine: start.index + 1,
      intro: parseSectionIntro({ lines: body }, 4),
      sections: parseSubsections(body, start.title)
    };
  });
}

function parseSubsections(lines, fallbackTitle) {
  const starts = [];
  lines.forEach((line, position) => {
    const match = line.text.match(/^####\s+(.+)$/);
    if (match) starts.push({ position, title: cleanInline(match[1]), index: line.index });
  });

  if (!starts.length) {
    return [{ id: uniqueSlug(fallbackTitle, lines[0]?.index ?? 0), title: "Overview", lines }];
  }

  return starts.map((start, position) => {
    const end = starts[position + 1]?.position ?? lines.length;
    return {
      id: uniqueSlug(start.title, start.index),
      title: start.title,
      lines: lines.slice(start.position + 1, end)
    };
  });
}

function parseSupportSection(section) {
  if (!section) return null;
  const starts = [];
  section.lines.forEach((line, position) => {
    const match = line.text.match(/^###\s+(.+)$/);
    if (match) starts.push({ position, title: cleanInline(match[1]), index: line.index });
  });

  return {
    id: section.id,
    title: stripSectionNumber(section.title),
    intro: parseSectionIntro(section, 3),
    blocks: starts.map((start, position) => {
      const end = starts[position + 1]?.position ?? section.lines.length;
      return {
        id: uniqueSlug(start.title, start.index),
        title: start.title,
        lines: section.lines.slice(start.position + 1, end)
      };
    })
  };
}

function getAllStudyItems() {
  return [
    ...getRoadmapItems(),
    ...getCustomItems(),
    ...getPortfolioItems()
  ];
}

function getRoadmapItems() {
  const items = [];
  [...roadmap.core, ...roadmap.specializations].forEach((chapter) => {
    chapter.sections.forEach((section) => {
      section.lines.forEach((line) => {
        if (!isTrackableLine(line.text)) return;
        const key = lineKey(chapter, section, line);
        const level = getLevel(key);
        items.push({
          key,
          sourceTab: chapter.kind === "specializations" ? "specializations" : "core",
          chapter,
          section,
          line,
          itemText: stripListMarker(line.text),
          level,
          date: getLevelDates(key)[level] || "",
          favorite: Boolean(state.favorites[key]),
          journalLinks: getJournalLinkCount(key)
        });
      });
    });
  });
  return items;
}

function getCustomItems() {
  return state.custom.map((topic) => {
    const key = `custom:${topic.id}`;
    const level = getLevel(key);
    const area = String(topic.area || "").trim() || "Custom Topics";
    return {
      key,
      sourceTab: "custom",
      chapter: { id: "custom", title: "Custom" },
      section: { id: uniqueSlug(area, 0), title: area },
      line: null,
      itemText: topic.title,
      level,
      date: getLevelDates(key)[level] || "",
      favorite: Boolean(state.favorites[key]),
      journalLinks: getJournalLinkCount(key)
    };
  });
}

function getPortfolioItems() {
  const support = roadmap.support.portfolio;
  if (!support) return [];
  const items = [];
  support.blocks.forEach((block) => {
    block.lines.forEach((line) => {
      const bullet = line.text.match(/^\s*[-*]\s+(.+)$/);
      if (!bullet) return;
      const key = `portfolio:${block.id}:${line.index}`;
      items.push({
        key,
        sourceTab: "portfolio",
        chapter: { id: "portfolio", title: "Portfolio" },
        section: { id: block.id, title: block.title },
        line,
        itemText: cleanPortfolioText(bullet[1]),
        level: 0,
        date: "",
        favorite: Boolean(state.favorites[key]),
        complete: Boolean(state.portfolio[key]),
        journalLinks: getJournalLinkCount(key)
      });
    });
  });
  return items;
}

function getPlanItems() {
  return getAllStudyItems().filter((item) => state.favorites[item.key]);
}

function getJournalTimeline(options = {}) {
  const days = clampInt(options.days, 30, 1, 3650);
  const type = enumValue(options.type, ["all", "note", "activity"], "all");
  const tag = String(options.tag || "").trim().toLowerCase();
  const linkedTo = String(options.linkedTo || "").trim();
  const query = String(options.query || "").trim().toLowerCase();
  const includeBody = Boolean(options.includeBody);

  const notes = state.journal
    .map(normalizeJournalEntry)
    .filter(Boolean)
    .filter((entry) => type === "all" || type === "note")
    .filter((entry) => ageInDays(entry.date) <= days)
    .filter((entry) => !tag || entry.tags.some((item) => item.toLowerCase() === tag))
    .filter((entry) => !linkedTo || entry.linkedItemKeys.includes(linkedTo))
    .filter((entry) => !query || journalEntrySearchText(entry).includes(query))
    .map((entry) => serializeJournalEntry(entry, includeBody));

  const activity = state.activity
    .map(normalizeJournalActivityEvent)
    .filter(Boolean)
    .filter((event) => type === "all" || type === "activity")
    .filter((event) => ageInDays(event.date) <= days)
    .filter(() => !tag)
    .filter((event) => !linkedTo || journalActivityEventKeys(event).includes(linkedTo))
    .filter((event) => !query || journalActivitySearchText(event).includes(query))
    .map(serializeJournalActivity);

  const items = [...notes, ...activity].sort(compareTimelineItems);
  return {
    filters: { days, type, tag: tag || null, linkedTo: linkedTo || null, query: query || null, includeBody },
    total: items.length,
    items
  };
}

function normalizeJournalEntry(entry) {
  if (!entry || typeof entry.id !== "string") return null;
  const title = typeof entry.title === "string" ? entry.title.trim() : "";
  if (!title) return null;
  const date = isValidDate(entry.date) ? entry.date : todayDate();
  return {
    id: entry.id,
    title,
    subtitle: typeof entry.subtitle === "string" ? entry.subtitle.trim() : "",
    body: typeof entry.body === "string" ? entry.body : "",
    date,
    type: typeof entry.type === "string" ? entry.type : "note",
    linkedItemKeys: Array.isArray(entry.linkedItemKeys) ? entry.linkedItemKeys.filter(Boolean) : [],
    tags: Array.isArray(entry.tags) ? entry.tags.map((item) => String(item).trim()).filter(Boolean) : [],
    createdAt: typeof entry.createdAt === "string" ? entry.createdAt : "",
    updatedAt: typeof entry.updatedAt === "string" ? entry.updatedAt : ""
  };
}

function normalizeJournalActivityEvent(event) {
  if (!event || typeof event.id !== "string") return null;
  const message = typeof event.message === "string" ? event.message.trim() : "";
  if (!message) return null;
  return {
    id: event.id,
    kind: typeof event.kind === "string" ? event.kind : "activity",
    message,
    date: isValidDate(event.date) ? event.date : todayDate(),
    occurredAt: typeof event.occurredAt === "string" ? event.occurredAt : "",
    itemKey: typeof event.itemKey === "string" ? event.itemKey : "",
    itemKeys: Array.isArray(event.itemKeys) ? event.itemKeys.filter(Boolean) : [],
    context: typeof event.context === "string" ? event.context.trim() : ""
  };
}

function serializeJournalEntry(entry, includeBody) {
  return {
    id: `note:${entry.id}`,
    rawId: entry.id,
    type: "note",
    date: entry.date,
    sortTime: entry.createdAt,
    title: entry.title,
    subtitle: entry.subtitle || undefined,
    tags: entry.tags,
    linkedItemKeys: entry.linkedItemKeys,
    linkedItems: entry.linkedItemKeys.map((key) => serializeLinkedTarget(key)).filter(Boolean),
    body: includeBody ? entry.body : undefined,
    bodyPreview: includeBody ? undefined : trimText(markdownPlainText(entry.body), 240),
    updatedAt: entry.updatedAt || undefined
  };
}

function serializeJournalActivity(event) {
  return {
    id: `activity:${event.id}`,
    rawId: event.id,
    type: "activity",
    kind: event.kind,
    date: event.date,
    sortTime: event.occurredAt,
    message: event.message,
    context: event.context || undefined,
    itemKeys: journalActivityEventKeys(event),
    linkedItems: journalActivityEventKeys(event).map((key) => serializeLinkedTarget(key)).filter(Boolean)
  };
}

function serializeLinkedTarget(key) {
  const target = getAllStudyItems().find((item) => item.key === key);
  if (!target) return { key };
  return {
    key,
    text: plainText(target.itemText),
    context: itemContext(target)
  };
}

function serializeItem(item, detail = "summary") {
  const base = {
    key: item.key,
    source: item.sourceTab,
    text: detail === "summary" ? trimText(plainText(item.itemText), 180) : plainText(item.itemText),
    context: itemContext(item),
    level: item.level || 0,
    date: item.date || null,
    pinned: Boolean(item.favorite),
    complete: item.sourceTab === "portfolio" ? Boolean(item.complete) : item.level === 3,
    journalLinks: item.journalLinks || 0
  };
  if (detail === "full") {
    base.markdown = item.itemText;
    base.chapterId = item.chapter.id;
    base.sectionId = item.section.id;
    base.line = item.line?.index ?? null;
  }
  return base;
}

function summarizeChapter(chapter, includeSections = false) {
  const items = chapterItems(chapter);
  const summary = {
    id: chapter.id,
    source: chapter.kind,
    title: displayChapterTitle(chapter),
    rawTitle: chapter.title,
    startLine: chapter.startLine,
    sections: chapter.sections.length,
    trackableItems: items.length,
    progress: levelDistribution(items)
  };
  if (chapter.kind === "specializations") {
    const track = getSpecializationTrackForChapter(chapter);
    summary.track = track ? { id: track.id, code: track.code, title: track.title } : null;
  }
  if (includeSections) {
    summary.sectionSummaries = chapter.sections.map((section) => {
      const sectionItems = items.filter((item) => item.section.id === section.id);
      return {
        id: section.id,
        title: section.title,
        lineCount: section.lines.length,
        trackableItems: sectionItems.length,
        progress: levelDistribution(sectionItems)
      };
    });
  }
  return summary;
}

function serializeChapter(chapter, detail) {
  const summary = summarizeChapter(chapter, detail !== "summary");
  if (detail === "summary") return summary;
  return {
    ...summary,
    intro: chapter.intro.map((line) => line.text).filter((text) => text.trim()),
    sections: chapter.sections.map((section) => {
      const lines = section.lines
        .filter((line) => detail === "full" || line.text.trim())
        .map((line) => serializeLine(chapter, section, line, detail));
      return { id: section.id, title: section.title, lines };
    })
  };
}

function serializeLine(chapter, section, line, detail) {
  const trackable = isTrackableLine(line.text);
  const key = trackable ? lineKey(chapter, section, line) : null;
  const serialized = {
    line: line.index,
    text: detail === "full" ? line.text : cleanInline(line.text),
    trackable,
    key
  };
  if (key) {
    const level = getLevel(key);
    serialized.level = level;
    serialized.date = getLevelDates(key)[level] || null;
    serialized.pinned = Boolean(state.favorites[key]);
    serialized.journalLinks = getJournalLinkCount(key);
  }
  return serialized;
}

function chaptersForScope(scope) {
  if (scope === "core") return roadmap.core;
  if (scope === "specializations") return roadmap.specializations;
  return [...roadmap.core, ...roadmap.specializations];
}

function findChapter(id) {
  return [...roadmap.core, ...roadmap.specializations].find((chapter) => chapter.id === id);
}

function chapterItems(chapter) {
  return getRoadmapItems().filter((item) => item.chapter.id === chapter.id);
}

function getSpecializationTracks(chapters) {
  const tracks = new Map();
  chapters.forEach((chapter) => {
    const parsed = parseSpecializationChapterTitle(chapter.title);
    const code = parsed?.track || "Other";
    const id = code === "Other" ? "track-other" : `track-${code.toLowerCase()}`;
    if (!tracks.has(id)) {
      tracks.set(id, { id, code, title: SPECIALIZATION_TRACK_NAMES[code] || "Other Specializations", chapters: [] });
    }
    tracks.get(id).chapters.push(chapter);
  });
  return Array.from(tracks.values());
}

function getSpecializationTrackForChapter(chapter) {
  return getSpecializationTracks([chapter])[0] || null;
}

function parseSpecializationChapterTitle(title) {
  const match = title.match(/^Track\s+([A-Z])\.(\d+):\s*(.+)$/i);
  if (!match) return null;
  return { track: match[1].toUpperCase(), chapter: match[2], shortTitle: match[3] };
}

function parseCoreChapterTitle(title) {
  const match = title.match(/^Phase\s+(\d+):\s*(.+)$/i);
  if (!match) return null;
  return { chapter: match[1], shortTitle: match[2] };
}

function displayChapterTitle(chapter) {
  if (chapter?.kind === "specializations") {
    const parsed = parseSpecializationChapterTitle(chapter.title);
    return parsed ? `${parsed.chapter}. ${parsed.shortTitle}` : chapter.title;
  }
  if (chapter?.kind === "core") {
    const parsed = parseCoreChapterTitle(chapter.title);
    return parsed ? `${parsed.chapter}. ${parsed.shortTitle}` : chapter.title;
  }
  return chapter?.title || "";
}

function itemContext(item) {
  if (item.sourceTab === "portfolio") return `Portfolio / ${item.section.title}`;
  if (item.sourceTab === "custom") return `Custom / ${item.section.title}`;
  if (item.sourceTab === "specializations") {
    const track = getSpecializationTrackForChapter(item.chapter);
    return `Specializations / ${track?.title || "Other"} / ${displayChapterTitle(item.chapter)} / ${item.section.title}`;
  }
  return `Core / ${displayChapterTitle(item.chapter)} / ${item.section.title}`;
}

function itemSearchText(item) {
  return [item.key, item.sourceTab, itemContext(item), item.itemText, `level ${item.level}`, item.date]
    .join(" ")
    .toLowerCase();
}

function journalEntrySearchText(entry) {
  return [
    entry.title,
    entry.subtitle,
    entry.body,
    entry.date,
    entry.tags.join(" "),
    ...entry.linkedItemKeys.map((key) => itemSearchTextByKey(key))
  ].join(" ").toLowerCase();
}

function journalActivitySearchText(event) {
  return [
    event.message,
    event.context,
    event.kind,
    event.date,
    ...journalActivityEventKeys(event).map((key) => itemSearchTextByKey(key))
  ].join(" ").toLowerCase();
}

function itemSearchTextByKey(key) {
  const item = getAllStudyItems().find((candidate) => candidate.key === key);
  return item ? itemSearchText(item) : key;
}

function getJournalLinkCount(key) {
  return state.journal
    .map(normalizeJournalEntry)
    .filter(Boolean)
    .filter((entry) => entry.linkedItemKeys.includes(key))
    .length;
}

function journalActivityEventKeys(event) {
  return Array.from(new Set([event.itemKey, ...(event.itemKeys || [])].filter(Boolean)));
}

function compareTimelineItems(left, right) {
  const dateDiff = dayNumber(right.date) - dayNumber(left.date);
  if (dateDiff) return dateDiff;
  const timeDiff = String(right.sortTime || "").localeCompare(String(left.sortTime || ""));
  if (timeDiff) return timeDiff;
  return String(right.id).localeCompare(String(left.id));
}

function getLevel(key) {
  const value = state.checked[key];
  if (value === true) return 3;
  if (typeof value === "number" && value >= 1 && value <= 3) return value;
  return 0;
}

function getLevelDates(key) {
  const dates = state.dates?.[key];
  return dates && typeof dates === "object" ? dates : {};
}

function levelDistribution(items) {
  const counts = { total: items.length, blank: 0, level1: 0, level2: 0, level3: 0 };
  items.forEach((item) => {
    const level = item.level ?? getLevel(item.key);
    if (level === 1) counts.level1 += 1;
    else if (level === 2) counts.level2 += 1;
    else if (level === 3) counts.level3 += 1;
    else counts.blank += 1;
  });
  counts.started = counts.level1 + counts.level2 + counts.level3;
  counts.complete = counts.level3;
  counts.percentComplete = counts.total ? Math.round((counts.complete / counts.total) * 100) : 0;
  return counts;
}

function planItemDone(item) {
  return item.sourceTab === "portfolio" ? Boolean(item.complete) : item.level === 3;
}

function normalizeState(candidate) {
  return {
    checked: objectOrEmpty(candidate?.checked),
    favorites: objectOrEmpty(candidate?.favorites),
    dates: objectOrEmpty(candidate?.dates),
    reviewComplete: objectOrEmpty(candidate?.reviewComplete),
    portfolio: objectOrEmpty(candidate?.portfolio),
    custom: Array.isArray(candidate?.custom) ? candidate.custom.filter((item) => item?.id && item?.title) : [],
    journal: Array.isArray(candidate?.journal) ? candidate.journal : [],
    activity: Array.isArray(candidate?.activity) ? candidate.activity : []
  };
}

function loadStateCandidate() {
  const statePath = getStateFilePath();
  if (!statePath) return {};

  try {
    const payload = JSON.parse(readFileSync(statePath, "utf8"));
    if (payload?.schema === "sec-roadmap.user-state") return payload.state || {};
    return payload?.state && typeof payload.state === "object" ? payload.state : payload;
  } catch (error) {
    console.error(`Could not read state file ${statePath}: ${error.message}`);
    return {};
  }
}

function getStateFilePath() {
  const provided = process.env.SEC_ROADMAP_BACKUP || process.env.SEC_ROADMAP_STATE || cliOption("--state");
  if (!provided) return "";
  return resolve(process.cwd(), provided);
}

function readRoadmapMarkdown() {
  const provided = process.env.SEC_ROADMAP_MARKDOWN || cliOption("--roadmap");
  const file = provided ? resolve(process.cwd(), provided) : resolve(repoRoot, "security-roadmap_restructured.md");
  if (existsSync(file)) return readFileSync(file, "utf8");

  const contentJs = readFileSync(resolve(repoRoot, "content.js"), "utf8");
  const match = contentJs.match(/window\.ROADMAP_MARKDOWN\s*=\s*"([\s\S]*)";?\s*$/);
  if (!match) throw new Error("Could not locate roadmap markdown.");
  return JSON.parse(`"${match[1]}"`);
}

function cliOption(name) {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] || "" : "";
}

function paginate(items, args = {}) {
  const limit = clampInt(args.limit, 50, 1, 200);
  const offset = clampInt(args.offset, 0, 0, Math.max(0, items.length));
  return {
    total: items.length,
    limit,
    offset,
    nextOffset: offset + limit < items.length ? offset + limit : null,
    items: items.slice(offset, offset + limit)
  };
}

function objectSchema(properties, required = []) {
  return { type: "object", properties, required, additionalProperties: false };
}

function pagedSchema(properties, required = []) {
  return objectSchema({
    ...properties,
    limit: { type: "integer", minimum: 1, maximum: 200, default: 50 },
    offset: { type: "integer", minimum: 0, default: 0 }
  }, required);
}

function enumProperty(values, defaultValue) {
  return { type: "string", enum: values, default: defaultValue };
}

function resource(uri, name, description) {
  return { uri, name, description, mimeType: "application/json" };
}

function toolResult(data) {
  return {
    content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
    structuredContent: data
  };
}

function sendMessage(message) {
  const body = JSON.stringify(message);
  process.stdout.write(`Content-Length: ${Buffer.byteLength(body, "utf8")}\r\n\r\n${body}`);
}

function sendError(id, code, message) {
  sendMessage({ jsonrpc: "2.0", id, error: { code, message } });
}

function mcpError(code, message) {
  const error = new Error(message);
  error.code = code;
  return error;
}

function enumValue(value, allowed, fallback) {
  return allowed.includes(value) ? value : fallback;
}

function clampInt(value, fallback, min, max) {
  const number = Number(value);
  if (!Number.isInteger(number)) return fallback;
  return Math.min(max, Math.max(min, number));
}

function objectOrEmpty(value) {
  return value && typeof value === "object" && !Array.isArray(value) ? value : {};
}

function stripSectionNumber(title) {
  return title.replace(/^\d+(?:\.\d+)*\.?\s+/, "");
}

function uniqueSlug(text, index) {
  const slug = String(text)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 72);
  return `${slug || "section"}-${index}`;
}

function isTrackableLine(line) {
  return /^(\s*[-*]\s+|\s*\d+\.\s+)/.test(line);
}

function lineKey(chapter, section, line) {
  return `line:${chapter.id}:${section.id}:${line.index}`;
}

function stripListMarker(text) {
  return cleanInline(String(text).replace(/^\s*(?:[-*]|\d+\.)\s+/, ""));
}

function cleanPortfolioText(text) {
  return String(text).replace(/\{\{refs?:[^}]+\}\}/gi, "").trim();
}

function cleanInline(text) {
  return String(text)
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .trim();
}

function plainText(text) {
  return cleanInline(text)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function markdownPlainText(text) {
  return plainText(String(text)
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/^\s*[-*]\s+/gm, "")
    .replace(/\[[ x]\]\s+/gi, "")
    .replace(/```[\s\S]*?```/g, " code block "));
}

function trimText(text, maxLength) {
  const value = String(text || "");
  return value.length <= maxLength ? value : `${value.slice(0, maxLength - 3).trim()}...`;
}

function todayDate() {
  const date = new Date();
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function isValidDate(value) {
  return Number.isFinite(dayNumber(value));
}

function ageInDays(value) {
  const current = dayNumber(todayDate());
  const itemDate = dayNumber(value);
  if (!Number.isFinite(itemDate)) return Infinity;
  return Math.max(0, current - itemDate);
}

function dayNumber(value) {
  const match = String(value).match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return Infinity;
  return Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3])) / 86400000;
}

function normalizeTimelineId(id) {
  return String(id || "").replace(/^(note|activity):/, "");
}
