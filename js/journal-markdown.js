const JOURNAL_MARKDOWN_HEADINGS = [
  { level: 1, tag: "h4", className: "journal-heading-1" },
  { level: 2, tag: "h5", className: "journal-heading-2" },
  { level: 3, tag: "h6", className: "journal-heading-3" }
];

function renderJournalMarkdownBody(markdown) {
  const wrapper = element("div", "journal-body journal-body-edit");
  const lines = String(markdown || "").split(/\r?\n/);
  let paragraphLines = [];

  const flushParagraph = () => {
    if (!paragraphLines.length) return;
    const paragraph = element("p", "journal-body-paragraph", paragraphLines.join("\n"));
    wrapper.append(paragraph);
    paragraphLines = [];
  };

  lines.forEach((line) => {
    const heading = parseJournalHeadingLine(line);
    if (heading) {
      flushParagraph();
      const config = JOURNAL_MARKDOWN_HEADINGS[heading.level - 1];
      wrapper.append(element(config.tag, `journal-heading ${config.className}`, heading.text));
      return;
    }

    if (!line.trim()) {
      flushParagraph();
      return;
    }

    paragraphLines.push(line);
  });
  flushParagraph();

  if (!wrapper.children.length) {
    wrapper.append(element("p", "journal-body-paragraph journal-body-empty", "No notes."));
  }

  return wrapper;
}

function applyJournalMarkdownLineOnEnter(event, controls, options = {}) {
  if (controls.body.selectionStart !== controls.body.selectionEnd) return false;

  const range = getJournalCurrentLineRange(controls.body);
  if (controls.body.value.slice(controls.body.selectionStart, range.end).trim()) return false;
  const heading = parseJournalHeadingLine(range.text);
  if (!heading) return false;

  event.preventDefault();
  const marker = "#".repeat(heading.level);
  const replacement = `${marker} ${heading.text}\n`;
  const body = controls.body;
  body.value = body.value.slice(0, range.start) + replacement + body.value.slice(range.end);
  setJournalBodySelection(body, range.start + replacement.length);
  if (options.resize) resizeJournalInlineNote(body);
  return true;
}

function getJournalCurrentLineRange(body) {
  const caret = body.selectionStart;
  const value = body.value;
  const lineStart = value.lastIndexOf("\n", caret - 1) + 1;
  const lineEndIndex = value.indexOf("\n", caret);
  const lineEnd = lineEndIndex === -1 ? value.length : lineEndIndex;
  return {
    start: lineStart,
    end: lineEnd,
    text: value.slice(lineStart, lineEnd)
  };
}

function parseJournalHeadingLine(line) {
  const match = String(line).match(/^\s{0,3}(#{1,3})(?!#)\s+(.+?)\s*$/);
  if (!match) return null;

  const text = match[2].trim();
  if (!text) return null;
  return {
    level: match[1].length,
    text
  };
}
