function parseRoadmap(source) {
  const lines = source.split(/\r?\n/).map((text, index) => ({ text, index }));
  const h2Sections = parseH2Sections(lines);
  const coreSection = findH2(h2Sections, /^2\.\s+Core Curriculum/i);
  const specializationSection = findH2(h2Sections, /^3\.\s+Specializations/i);
  const mapSection = findH2(h2Sections, /^1\.\s+Map And How To Use/i);
  const portfolioSection = findH2(h2Sections, /^4\.\s+Practice Portfolio/i);
  const referenceSection = findH2(h2Sections, /^5\.\s+Reference Library/i);
  const guideSupport = parseSupportSection(mapSection);
  if (guideSupport) guideSupport.title = "Roadmap Guide";
  const referenceSupport = splitReferenceSupport(parseSupportSection(referenceSection));

  return {
    core: parseStudyChapters(coreSection, "core"),
    coreIntro: parseSectionIntro(coreSection, 3),
    specializations: parseStudyChapters(specializationSection, "specializations"),
    specializationIntro: parseSectionIntro(specializationSection, 3),
    support: {
      guide: guideSupport,
      map: guideSupport,
      portfolio: parseSupportSection(portfolioSection),
      reference: referenceSupport.reference,
      sources: referenceSupport.sources
    }
  };
}

function splitReferenceSupport(support) {
  if (!support) return { reference: null, sources: null };

  const isSourcesBlock = (block) => /official sources/i.test(block.title);
  const referenceBlocks = support.blocks.filter((block) => !isSourcesBlock(block));
  const sourceBlocks = support.blocks.filter(isSourcesBlock).map((block) => ({
    ...block,
    title: stripSectionNumber(block.title)
  }));

  return {
    reference: {
      ...support,
      title: "Reference",
      blocks: referenceBlocks
    },
    sources: {
      ...support,
      id: `${support.id}-sources`,
      title: "Official Sources",
      intro: support.intro,
      blocks: sourceBlocks
    }
  };
}

function parseH2Sections(lines) {
  const starts = [];
  lines.forEach((line, position) => {
    const match = line.text.match(/^##\s+(.+)$/);
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

function findH2(sections, pattern) {
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
    const sections = parseSubsections(body, start.title);
    return {
      id: uniqueSlug(`${kind}-${start.title}`, start.index),
      kind,
      title: start.title,
      startLine: start.index + 1,
      intro: parseSectionIntro({ lines: body }, 4),
      sections
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
    return [
      {
        id: uniqueSlug(fallbackTitle, lines[0]?.index ?? 0),
        title: "Overview",
        lines
      }
    ];
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

  const intro = parseSectionIntro(section, 3);
  const starts = [];
  section.lines.forEach((line, position) => {
    const match = line.text.match(/^###\s+(.+)$/);
    if (match) starts.push({ position, title: cleanInline(match[1]), index: line.index });
  });

  const blocks = starts.map((start, position) => {
    const end = starts[position + 1]?.position ?? section.lines.length;
    return {
      id: uniqueSlug(start.title, start.index),
      title: start.title,
      lines: section.lines.slice(start.position + 1, end)
    };
  });

  return {
    id: section.id,
    title: stripSectionNumber(section.title),
    description: "",
    intro,
    blocks
  };
}

function stripSectionNumber(title) {
  return title.replace(/^\d+(?:\.\d+)*\.?\s+/, "");
}

function uniqueSlug(text, index) {
  const slug = text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 72);
  return `${slug || "section"}-${index}`;
}
