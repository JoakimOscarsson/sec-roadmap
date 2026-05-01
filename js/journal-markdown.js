import MarkdownIt from "markdown-it";
import taskLists from "markdown-it-task-lists";

const journalMarkdown = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: false
}).use(taskLists, {
  enabled: true,
  label: true,
  labelAfter: true
});

export function renderJournalMarkdownBody(markdown) {
  const wrapper = document.createElement("div");
  wrapper.className = "journal-body journal-body-edit";

  if (!String(markdown || "").trim()) {
    const empty = document.createElement("p");
    empty.className = "journal-body-paragraph journal-body-empty";
    empty.textContent = "No notes.";
    wrapper.append(empty);
    return wrapper;
  }

  wrapper.innerHTML = journalMarkdown.render(markdown);
  wrapper.querySelectorAll("a[href]").forEach((link) => {
    link.target = "_blank";
    link.rel = "noreferrer";
  });
  return wrapper;
}
