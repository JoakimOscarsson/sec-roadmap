const PRETTY_EXPORT_SCRIPT_SRC = "./js/pretty-export.js";
const prettyExportProxy = {};
let prettyExportLoadPromise = null;

function renderPdfExportButton(label, onClick) {
  const button = element("button", "pdf-export-btn", "PDF");
  button.type = "button";
  button.title = label;
  button.setAttribute("aria-label", label);
  button.addEventListener("click", () => {
    onClick();
  });
  return button;
}

function loadPrettyExportScript() {
  if (window.prettyExportLoaded) return Promise.resolve();
  if (prettyExportLoadPromise) return prettyExportLoadPromise;

  prettyExportLoadPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = PRETTY_EXPORT_SCRIPT_SRC;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Could not load the PDF exporter."));
    document.head.append(script);
  });

  return prettyExportLoadPromise;
}

prettyExportProxy.exportJournalPdf = function exportJournalPdfProxy() {
  openJournalPdfExportDialog();
};

function runJournalPdfExport(days) {
  loadPrettyExportScript()
    .then(() => {
      if (window.exportJournalPdf === prettyExportProxy.exportJournalPdf) {
        throw new Error("The PDF exporter did not initialize.");
      }
      window.exportJournalPdf(days);
    })
    .catch((error) => window.alert(error.message));
}

prettyExportProxy.exportPlanPdf = function exportPlanPdfProxy() {
  loadPrettyExportScript()
    .then(() => {
      if (window.exportPlanPdf === prettyExportProxy.exportPlanPdf) {
        throw new Error("The PDF exporter did not initialize.");
      }
      window.exportPlanPdf();
    })
    .catch((error) => window.alert(error.message));
};

window.exportJournalPdf = prettyExportProxy.exportJournalPdf;
window.exportPlanPdf = prettyExportProxy.exportPlanPdf;

function openJournalPdfExportDialog() {
  closeJournalPdfExportDialog();

  const overlay = element("div", "pdf-export-overlay");
  const form = element("form", "pdf-export-dialog");
  const title = element("h2", "", "Export journal");
  const hint = element("p", "", "Number of days to include.");
  const label = element("label", "pdf-export-label", "Days");
  const input = document.createElement("input");
  input.type = "number";
  input.min = "1";
  input.max = String(MAX_JOURNAL_EXPORT_DAYS);
  input.step = "1";
  input.value = String(DEFAULT_JOURNAL_EXPORT_DAYS);
  input.required = true;
  input.setAttribute("aria-label", "Number of days to include in the journal PDF");
  label.append(input);

  const actions = element("div", "pdf-export-actions");
  const cancel = element("button", "pdf-export-secondary", "Cancel");
  const submit = element("button", "pdf-export-primary", "Export PDF");
  cancel.type = "button";
  submit.type = "submit";
  cancel.addEventListener("click", closeJournalPdfExportDialog);
  actions.append(cancel, submit);

  form.append(title, hint, label, actions);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const days = normalizedJournalExportDays(input.value);
    if (!days) {
      input.focus();
      return;
    }
    closeJournalPdfExportDialog();
    runJournalPdfExport(days);
  });
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeJournalPdfExportDialog();
  });
  overlay.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    event.preventDefault();
    closeJournalPdfExportDialog();
  });

  overlay.append(form);
  document.body.append(overlay);
  setTimeout(() => {
    input.focus();
    input.select();
  }, 0);
}

function closeJournalPdfExportDialog() {
  document.querySelector(".pdf-export-overlay")?.remove();
}
