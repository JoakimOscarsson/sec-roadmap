const JOURNAL_RUNTIME_SCRIPT_SRC = "./js/journal-runtime.js";
const JOURNAL_RUNTIME_MODULE_SRC = "./js/journal-runtime-entry.js";
const pendingLazyJournalEditors = new Set();
let journalRuntimeLoadPromise = null;

function loadJournalRuntime() {
  if (window.journalRuntimeLoaded && window.__journalRuntime) return Promise.resolve(window.__journalRuntime);
  if (journalRuntimeLoadPromise) return journalRuntimeLoadPromise;

  journalRuntimeLoadPromise = new Promise((resolve, reject) => {
    const finish = () => {
      if (window.__journalRuntime) {
        resolve(window.__journalRuntime);
      } else {
        reject(new Error("The journal editor runtime did not initialize."));
      }
    };

    const script = document.createElement("script");
    script.src = JOURNAL_RUNTIME_SCRIPT_SRC;
    script.onload = finish;
    script.onerror = () => {
      script.remove();
      if (window.location.protocol === "file:") {
        reject(new Error("Could not load the journal editor runtime."));
        return;
      }

      import(JOURNAL_RUNTIME_MODULE_SRC).then(finish).catch(() => {
        reject(new Error("Could not load the journal editor runtime."));
      });
    };
    document.head.append(script);
  });

  return journalRuntimeLoadPromise;
}

function journalRuntimeFunction(name) {
  return window.__journalRuntime?.[name] || null;
}

function mountJournalEditor(options) {
  const handle = createLazyJournalEditorHandle(options);
  pendingLazyJournalEditors.add(handle);
  options.element.replaceChildren(element("div", "journal-editor-loading", "Loading editor..."));

  loadJournalRuntime()
    .then((runtime) => {
      if (handle.destroyed) return;
      options.element.replaceChildren();
      handle.editor = runtime.mountJournalEditor(options);
      pendingLazyJournalEditors.delete(handle);
      Promise.resolve(handle.editor.ready).then(handle.resolveReady).catch(handle.rejectReady);
    })
    .catch((error) => {
      if (handle.destroyed) return;
      pendingLazyJournalEditors.delete(handle);
      options.element.replaceChildren(element("div", "journal-editor-loading error", error.message));
      handle.rejectReady(error);
    });

  return handle;
}

function createLazyJournalEditorHandle(options) {
  const handle = {
    destroyed: false,
    editor: null,
    initialMarkdown: options.markdown || "",
    ready: null,
    resolveReady: null,
    rejectReady: null
  };

  handle.ready = new Promise((resolve, reject) => {
    handle.resolveReady = resolve;
    handle.rejectReady = reject;
  });

  return handle;
}

function destroyJournalEditor(editor) {
  if (!editor) return;
  editor.destroyed = true;
  pendingLazyJournalEditors.delete(editor);
  const destroy = journalRuntimeFunction("destroyJournalEditor");
  if (destroy && editor.editor) destroy(editor.editor);
}

function destroyAllJournalEditors() {
  pendingLazyJournalEditors.forEach((editor) => {
    editor.destroyed = true;
  });
  pendingLazyJournalEditors.clear();
  const destroyAll = journalRuntimeFunction("destroyAllJournalEditors");
  if (destroyAll) destroyAll();
}

function getJournalEditorMarkdown(editor) {
  const getMarkdown = journalRuntimeFunction("getJournalEditorMarkdown");
  if (getMarkdown && editor?.editor) return getMarkdown(editor.editor);
  return editor?.initialMarkdown || "";
}

function focusJournalEditor(editor) {
  const focus = journalRuntimeFunction("focusJournalEditor");
  if (focus && editor?.editor) {
    focus(editor.editor);
    return;
  }
  if (editor?.ready) {
    editor.ready.then(() => focusJournalEditor(editor)).catch(() => {});
  }
}

function resizeJournalEditor(editor) {
  const resize = journalRuntimeFunction("resizeJournalEditor");
  if (resize && editor?.editor) {
    resize(editor.editor);
    return;
  }
  if (editor?.ready) {
    editor.ready.then(() => resizeJournalEditor(editor)).catch(() => {});
  }
}

function renderJournalMarkdownBody(markdown) {
  const renderMarkdown = journalRuntimeFunction("renderJournalMarkdownBody");
  if (renderMarkdown) return renderMarkdown(markdown);

  const wrapper = element("div", "journal-body journal-body-edit");
  if (!String(markdown || "").trim()) {
    wrapper.append(element("p", "journal-body-paragraph journal-body-empty", "No notes."));
    return wrapper;
  }
  wrapper.append(element("p", "journal-body-paragraph", String(markdown)));
  return wrapper;
}
