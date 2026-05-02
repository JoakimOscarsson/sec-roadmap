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

function renderJournalExportRangeControl() {
  const select = document.createElement("select");
  select.className = "journal-export-range";
  select.title = "Journal PDF range";
  select.setAttribute("aria-label", "Journal PDF range");

  journalExportRangeOptions().forEach((option) => {
    const item = document.createElement("option");
    item.value = option.value;
    item.textContent = option.label;
    item.selected = getJournalExportRange() === option.value;
    select.append(item);
  });

  select.addEventListener("change", () => {
    state.journalExportRange = isValidJournalExportRange(select.value) ? select.value : "30";
    saveState();
  });

  return select;
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
  loadPrettyExportScript()
    .then(() => {
      if (window.exportJournalPdf === prettyExportProxy.exportJournalPdf) {
        throw new Error("The PDF exporter did not initialize.");
      }
      window.exportJournalPdf();
    })
    .catch((error) => window.alert(error.message));
};

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
