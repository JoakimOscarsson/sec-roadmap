let editingJournalId = "";

function renderJournalForm() {
  const entry = editingJournalId ? state.journal.find((item) => item.id === editingJournalId) : null;
  const form = element("form", "journal-form");
  const title = document.createElement("input");
  title.name = "title";
  title.required = true;
  title.placeholder = "Entry title";
  title.value = entry?.title || "";

  const date = document.createElement("input");
  date.name = "date";
  date.type = "date";
  date.required = true;
  date.value = entry?.date || todayDate();

  const type = document.createElement("select");
  type.name = "type";
  JOURNAL_TYPES.forEach((name) => {
    const option = element("option", "", name);
    option.value = name;
    option.selected = (entry?.type || JOURNAL_TYPES[0]) === name;
    type.append(option);
  });

  const target = document.createElement("select");
  target.name = "target";
  const emptyTarget = element("option", "", "No linked topic");
  emptyTarget.value = "";
  target.append(emptyTarget);
  const selectedTarget = entry?.linkedItemKeys?.[0] || "";
  getJournalLinkTargets().forEach((item) => {
    const option = element("option", "", `${journalTargetContext(item)} / ${plainText(item.itemText)}`);
    option.value = item.key;
    option.selected = selectedTarget === item.key;
    target.append(option);
  });

  const tags = document.createElement("input");
  tags.name = "tags";
  tags.placeholder = "Tags, comma-separated";
  tags.value = entry?.tags?.join(", ") || "";

  const body = document.createElement("textarea");
  body.name = "body";
  body.rows = 5;
  body.placeholder = "Notes";
  body.value = entry?.body || "";

  form.append(
    renderJournalField("Title", title),
    renderJournalField("Date", date),
    renderJournalField("Type", type),
    renderJournalField("Linked topic", target),
    renderJournalField("Tags", tags),
    renderJournalField("Notes", body),
    renderJournalFormActions(entry, form, { title, date, type, target, tags, body })
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
    date: controls.date.value,
    type: controls.type.value,
    linkedItemKeys: controls.target.value ? [controls.target.value] : [],
    tags: parseJournalTags(controls.tags.value),
    body: controls.body.value
  };

  if (entry) {
    updateJournalEntry(entry.id, data);
    editingJournalId = "";
  } else {
    createJournalEntry(data);
    form.reset();
    controls.date.value = todayDate();
  }
  render();
}
