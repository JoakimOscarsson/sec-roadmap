const activeJournalEditors = new Set();

function mountJournalEditor(options) {
  const editor = mountTextareaJournalEditor(options);
  activeJournalEditors.add(editor);
  return editor;
}

function destroyJournalEditor(editor) {
  if (!editor) return;
  if (typeof editor.destroy === "function") editor.destroy();
  activeJournalEditors.delete(editor);
}

function destroyAllJournalEditors() {
  Array.from(activeJournalEditors).forEach((editor) => destroyJournalEditor(editor));
}

function getJournalEditorMarkdown(editor) {
  if (!editor || typeof editor.getMarkdown !== "function") return "";
  return editor.getMarkdown();
}

function focusJournalEditor(editor) {
  if (editor && typeof editor.focus === "function") editor.focus();
}

function resizeJournalEditor(editor) {
  if (editor && typeof editor.resize === "function") editor.resize();
}

function mountTextareaJournalEditor({
  element: host,
  markdown,
  className,
  placeholder,
  onChange,
  onKeydown
}) {
  const textarea = document.createElement("textarea");
  textarea.name = "body";
  textarea.placeholder = placeholder || "Notes";
  textarea.className = className || "journal-note-input";
  textarea.value = markdown || "";

  if (typeof onChange === "function") textarea.addEventListener("input", onChange);
  if (typeof onKeydown === "function") textarea.addEventListener("keydown", onKeydown);
  host.append(textarea);

  return {
    kind: "textarea",
    body: textarea,
    getMarkdown: () => textarea.value,
    focus: () => textarea.focus(),
    resize: () => {
      if (textarea.classList.contains("journal-inline-note")) resizeJournalInlineNote(textarea);
    },
    destroy: () => {
      textarea.remove();
    }
  };
}
