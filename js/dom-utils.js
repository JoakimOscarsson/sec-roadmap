function plainText(text) {
  return cleanInline(text)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function trimText(text, maxLength) {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 3).trim()}...`;
}

function cleanInline(text) {
  return text
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .trim();
}

function inlineHtml(tag, markdownText) {
  const el = document.createElement(tag);
  const renderedLinks = [];
  let html = escapeHtml(markdownText)
    .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, (_match, label, url) => {
      const token = `%%ROADMAP_LINK_${renderedLinks.length}%%`;
      renderedLinks.push(`<a href="${url}" target="_blank" rel="noreferrer">${label}</a>`);
      return token;
    })
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(
      /(https?:\/\/[^\s<)"]+)(?=[\s)]|$)/g,
      '<a href="$1" target="_blank" rel="noreferrer">$1</a>'
    )
    .replace(/%%ROADMAP_LINK_(\d+)%%/g, (_match, index) => renderedLinks[Number(index)] || "");

  el.innerHTML = html;
  return el;
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function element(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text !== undefined) el.textContent = text;
  return el;
}
