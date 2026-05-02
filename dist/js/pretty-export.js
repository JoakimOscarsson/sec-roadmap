window.prettyExportLoaded = true;

function exportJournalPdf() {
  if (typeof saveJournalInlineEditors === "function") saveJournalInlineEditors();

  const items = getJournalExportTimelineItems();
  if (!items.length) {
    window.alert("No journal items match the current export settings.");
    return;
  }

  openPrettyPdfWindow({
    title: "Security Roadmap Journal",
    filename: `sec-roadmap-journal-${todayDate()}`,
    meta: journalExportMeta(),
    body: renderJournalPdfBody(items)
  });
}

function exportPlanPdf() {
  if (typeof saveJournalInlineEditors === "function") saveJournalInlineEditors();

  const items = getFavoriteItems();
  if (!items.length) {
    window.alert("No plan items match the current filters.");
    return;
  }

  openPrettyPdfWindow({
    title: "Security Roadmap Plan",
    filename: `sec-roadmap-plan-${todayDate()}`,
    meta: planExportMeta(items),
    body: renderPlanPdfBody(items)
  });
}

function getJournalExportTimelineItems() {
  const range = getJournalExportRange();
  const items = getJournalTimelineItems();
  if (range === "all") return items;

  const days = Number(range);
  return items.filter((item) => ageInDays(item.date) <= days);
}

function getJournalExportRange() {
  return isValidJournalExportRange(state.journalExportRange) ? state.journalExportRange : "30";
}

function journalExportRangeOptions() {
  return [
    { value: "7", label: "7 days" },
    { value: "14", label: "14 days" },
    { value: "30", label: "30 days" },
    { value: "90", label: "90 days" },
    { value: "180", label: "6 months" },
    { value: "365", label: "1 year" },
    { value: "all", label: "All time" }
  ];
}

function journalExportRangeLabel() {
  return journalExportRangeOptions().find((option) => option.value === getJournalExportRange())?.label || "30 days";
}

function journalExportMeta() {
  const meta = [
    `Generated ${todayDate()}`,
    `Range: ${journalExportRangeLabel()}`,
    `Types: ${journalTypeLabel(getActiveJournalTypeFilter())}`
  ];

  const linkFilter = getActiveJournalLinkFilter();
  const tagFilter = getActiveJournalTagFilter();
  const query = state.query.trim();
  if (linkFilter) {
    const target = getJournalTarget(linkFilter);
    meta.push(`Linked to: ${target ? plainText(target.itemText) : linkFilter}`);
  }
  if (tagFilter) meta.push(`Tagged: #${tagFilter}`);
  if (query) meta.push(`Search: ${query}`);
  return meta;
}

function planExportMeta(items) {
  const level = selectedLevel();
  const completed = items.filter((item) => planItemDone(item)).length;
  const meta = [
    `Generated ${todayDate()}`,
    `${items.length} plan ${items.length === 1 ? "item" : "items"}`,
    `${completed} complete`
  ];
  if (level !== null) meta.push(`Level filter: ${level}`);
  if (state.query.trim()) meta.push(`Search: ${state.query.trim()}`);
  return meta;
}

function renderJournalPdfBody(items) {
  const groups = groupJournalTimelineItems(items).sort((left, right) => String(right.month).localeCompare(String(left.month)));
  return groups.map((group) => `
    <section class="pdf-section">
      <h2>${escapeHtml(group.title)}</h2>
      ${group.items.map((item) => item.type === "activity"
        ? renderJournalActivityPdfItem(item.event)
        : renderJournalNotePdfItem(item.entry)).join("")}
    </section>
  `).join("");
}

function renderJournalNotePdfItem(entry) {
  const body = renderJournalMarkdownBody(entry.body).innerHTML;
  const tags = entry.tags?.length ? `Tags: ${entry.tags.map((tag) => `#${tag}`).join(", ")}` : "";
  const links = journalEntryLinkLabels(entry).join(", ");
  const details = [formatDate(entry.date), tags, links ? `Links: ${links}` : ""].filter(Boolean).join(" · ");
  return `
    <article class="pdf-card pdf-note">
      <header>
        <h3>${escapeHtml(entry.title)}</h3>
        ${entry.subtitle ? `<p class="pdf-subtitle">${escapeHtml(entry.subtitle)}</p>` : ""}
        <p class="pdf-detail">${escapeHtml(details)}</p>
      </header>
      <div class="pdf-journal-body">${body}</div>
    </article>
  `;
}

function renderJournalActivityPdfItem(event) {
  return `
    <article class="pdf-activity">
      <div class="pdf-activity-line"></div>
      <div>
        <p class="pdf-activity-message">${escapeHtml(event.message)}</p>
        ${event.context ? `<p class="pdf-detail">${escapeHtml(event.context)}</p>` : ""}
        <p class="pdf-detail">${escapeHtml(formatDate(event.date))}</p>
      </div>
    </article>
  `;
}

function journalEntryLinkLabels(entry) {
  return (entry.linkedItemKeys || []).map((key) => {
    const target = getJournalTarget(key);
    return target ? plainText(target.itemText) : key;
  }).filter(Boolean);
}

function renderPlanPdfBody(items) {
  const groups = groupPlanExportItems(items);
  return groups.map((group) => `
    <section class="pdf-section">
      <h2>${escapeHtml(group.title)}</h2>
      ${group.items.map(renderPlanPdfItem).join("")}
    </section>
  `).join("");
}

function renderPlanPdfItem(item) {
  const done = planItemDone(item);
  const status = item.sourceTab === "portfolio"
    ? (done ? "Complete" : "Not complete")
    : planLevelStatus(item);
  return `
    <article class="pdf-card pdf-plan-item${done ? " done" : ""}">
      <p class="pdf-context">${escapeHtml(favoriteContext(item))}</p>
      <div class="pdf-plan-row">
        <span class="pdf-status">${escapeHtml(status)}</span>
        <div class="pdf-plan-text">${inlineHtml("span", item.itemText).innerHTML}</div>
      </div>
    </article>
  `;
}

function planLevelStatus(item) {
  const level = getLevel(item.key);
  if (!level) return "No level";
  const date = getLevelDates(item.key)[level];
  return date ? `Level ${level} · ${formatDate(date)}` : `Level ${level}`;
}

function planItemDone(item) {
  return item.sourceTab === "portfolio"
    ? Boolean(state.portfolio?.[item.key])
    : getLevel(item.key) === 3;
}

function groupPlanExportItems(items) {
  const groups = new Map();
  items.forEach((item) => {
    const title = planExportGroupTitle(item);
    if (!groups.has(title)) groups.set(title, []);
    groups.get(title).push(item);
  });
  return Array.from(groups, ([title, groupItems]) => ({ title, items: groupItems }));
}

function planExportGroupTitle(item) {
  if (item.sourceTab === "portfolio") return `Portfolio / ${item.section.title}`;
  if (item.sourceTab === "custom") return "Custom";
  if (item.sourceTab === "specializations") {
    const track = getSpecializationTrackForChapter(item.chapter);
    return `Specializations / ${specializationTrackHeading(track)}`;
  }
  return "Core";
}

function journalTypeLabel(value) {
  if (value === "notes") return "Notes";
  if (value === "activity") return "Activity";
  return "All";
}

function openPrettyPdfWindow({ title, filename, meta, body }) {
  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    window.alert("Could not open the PDF export window. Check your popup blocker.");
    return;
  }

  printWindow.document.open();
  printWindow.document.write(renderPrettyPdfDocument({ title, filename, meta, body }));
  printWindow.document.close();
  printWindow.focus();
  printWindow.setTimeout(() => {
    printWindow.print();
  }, 250);
}

function renderPrettyPdfDocument({ title, filename, meta, body }) {
  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>${escapeHtml(filename)}</title>
  <style>${prettyPdfStyles()}</style>
</head>
<body>
  <div class="pdf-actions">
    <button type="button" onclick="window.print()">Save as PDF</button>
  </div>
  <main class="pdf-document">
    <header class="pdf-header">
      <p class="pdf-kicker">Security Roadmap</p>
      <h1>${escapeHtml(title)}</h1>
      <div class="pdf-meta">${meta.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>
    </header>
    ${body}
  </main>
</body>
</html>`;
}

function prettyPdfStyles() {
  return `
@page { margin: 18mm; }
* { box-sizing: border-box; }
body {
  margin: 0;
  background: #f4efe6;
  color: #2f2a23;
  font-family: -apple-system, BlinkMacSystemFont, "Inter", "Helvetica Neue", Arial, sans-serif;
  font-size: 12px;
  line-height: 1.55;
}
.pdf-actions {
  position: sticky;
  top: 0;
  z-index: 2;
  display: flex;
  justify-content: flex-end;
  padding: 10px 16px;
  background: #f4efe6;
  border-bottom: 1px solid #d4c8ae;
}
.pdf-actions button {
  border: 1px solid #d4c8ae;
  border-radius: 4px;
  background: transparent;
  color: #5a5142;
  padding: 5px 10px;
  cursor: pointer;
}
.pdf-document {
  max-width: 760px;
  margin: 0 auto;
  padding: 32px 28px 56px;
  background: #f4efe6;
}
.pdf-header {
  margin-bottom: 28px;
  padding-bottom: 16px;
  border-bottom: 1px solid #d4c8ae;
}
.pdf-kicker {
  margin: 0 0 4px;
  color: #877c66;
  font-size: 11px;
  letter-spacing: 0;
}
h1, h2, h3 {
  font-family: "Iowan Old Style", "Charter", Georgia, serif;
  font-weight: 600;
  letter-spacing: 0;
}
h1 { margin: 0 0 10px; font-size: 28px; line-height: 1.18; }
h2 {
  margin: 28px 0 10px;
  padding-bottom: 6px;
  border-bottom: 1px dashed #d4c8ae;
  font-size: 18px;
  line-height: 1.25;
}
h3 { margin: 0; font-size: 15px; line-height: 1.3; }
.pdf-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 6px 12px;
  color: #5a5142;
  font-size: 11px;
}
.pdf-card,
.pdf-activity {
  break-inside: avoid;
}
.pdf-card {
  margin: 0 0 10px;
  border: 1px solid #e0d6c0;
  border-radius: 5px;
  padding: 12px 14px;
  background: rgba(235, 228, 212, 0.45);
}
.pdf-subtitle,
.pdf-detail,
.pdf-context {
  margin: 2px 0 0;
  color: #877c66;
  font-size: 11px;
}
.pdf-journal-body {
  margin-top: 10px;
}
.pdf-journal-body p { margin: 0 0 7px; }
.pdf-journal-body h1 { margin: 10px 0 5px; font-size: 18px; }
.pdf-journal-body h2 { margin: 10px 0 5px; font-size: 16px; }
.pdf-journal-body h3 { margin: 9px 0 4px; font-size: 14px; }
.pdf-journal-body ul,
.pdf-journal-body ol { margin: 4px 0 8px; padding-left: 22px; }
.pdf-journal-body blockquote {
  margin: 8px 0;
  border-left: 2px solid #d4c8ae;
  padding-left: 10px;
  color: #5a5142;
}
.pdf-journal-body pre {
  overflow: hidden;
  white-space: pre-wrap;
  border: 1px solid #e0d6c0;
  border-radius: 4px;
  background: #ebe4d4;
  padding: 8px 9px;
}
.pdf-journal-body code {
  font-family: "JetBrains Mono", "SF Mono", ui-monospace, Menlo, monospace;
  font-size: 0.88em;
}
.pdf-journal-body input[type="checkbox"] {
  vertical-align: -2px;
}
.pdf-activity {
  display: grid;
  grid-template-columns: 14px minmax(0, 1fr);
  gap: 8px;
  margin: 0 0 8px;
  padding: 4px 2px;
}
.pdf-activity-line {
  width: 1px;
  min-height: 34px;
  background: #d4c8ae;
  justify-self: center;
}
.pdf-activity-message {
  margin: 0;
  color: #5a5142;
}
.pdf-plan-row {
  display: grid;
  grid-template-columns: 96px minmax(0, 1fr);
  gap: 12px;
  align-items: start;
  margin-top: 5px;
}
.pdf-status {
  color: #877c66;
  font-size: 11px;
  font-variant-numeric: tabular-nums;
}
.pdf-plan-text {
  overflow-wrap: anywhere;
}
.pdf-plan-item.done .pdf-plan-text {
  color: #877c66;
  text-decoration: line-through;
  text-decoration-color: #d4c8ae;
}
a { color: #6b5b3f; text-decoration: none; border-bottom: 1px solid #d4c8ae; }
@media print {
  body, .pdf-document { background: #fff; }
  .pdf-actions { display: none; }
  .pdf-document { max-width: none; padding: 0; }
}
`;
}
