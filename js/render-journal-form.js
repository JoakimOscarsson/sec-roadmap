let editingJournalId = "";

function renderJournalForm() {
  const entry = editingJournalId ? state.journal.find((item) => item.id === editingJournalId) : null;
  const form = element("form", "journal-form");
  const title = document.createElement("input");
  title.name = "title";
  title.required = true;
  title.placeholder = "Entry title";
  title.value = entry?.title || "Notes";

  const body = document.createElement("textarea");
  body.name = "body";
  body.rows = 6;
  body.placeholder = "Notes";
  body.value = entry?.body || "";

  form.append(
    renderJournalField("Title", title),
    renderJournalField("Notes", body),
    renderJournalFormActions(entry, form, { title, body })
  );

  return form;
}

function renderJournalField(labelText, control) {
  const label = element("label", "journal-field");
  label.append(element("span", "", labelText), control);
  return label;
}

function renderJournalFormActions(entry, form, controls) {
  const actions = element("div", "journal-form-actions");
  const save = element("button", "journal-save", entry ? "Save" : "Add");
  save.type = "submit";
  actions.append(save);

  if (entry) {
    const cancel = element("button", "ghost-btn compact", "Cancel");
    cancel.type = "button";
    cancel.addEventListener("click", () => {
      editingJournalId = "";
      render();
    });
    actions.append(cancel);
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    saveJournalForm(entry, form, controls);
  });
  return actions;
}

function saveJournalForm(entry, form, controls) {
  const data = {
    title: controls.title.value,
    date: entry?.date || todayDate(),
    type: entry?.type || JOURNAL_TYPES[0],
    linkedItemKeys: entry?.linkedItemKeys || [],
    tags: entry?.tags || [],
    body: controls.body.value
  };

  if (entry) {
    updateJournalEntry(entry.id, data);
    editingJournalId = "";
  } else {
    createJournalEntry(data);
    form.reset();
    controls.title.value = "Notes";
  }
  render();
}
