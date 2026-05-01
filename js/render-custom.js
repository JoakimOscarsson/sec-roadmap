function renderCustom() {
  dom.main.replaceChildren();

  const items = getVisibleCustomItems();
  const header = renderHeader("Custom", "Add your own topics and track them with the same levels, dates, plan, and review flow.", "Roadmap");
  dom.main.append(header, renderCustomForm());

  if (!state.custom.length) {
    dom.main.append(element("p", "empty", "No custom topics yet."));
    return;
  }

  if (!items.length) {
    dom.main.append(element("p", "empty", "No custom topics match the current filters."));
    return;
  }

  const groups = groupCustomItems(items);
  const wrapper = element("div", "custom-groups");
  groups.forEach((group) => {
    const section = element("section", "custom-group");
    section.id = customAreaAnchor(group.title);
    const heading = element("div", "custom-group-heading");
    heading.append(element("h3", "", group.title), element("span", "review-count", `${group.items.length}`));
    section.append(heading);

    const list = element("div", "custom-list");
    group.items.forEach((item) => {
      list.append(renderCustomItem(item));
    });
    section.append(list);
    wrapper.append(section);
  });
  dom.main.append(wrapper);
}

function renderCustomForm() {
  const form = element("form", "custom-form");
  const topic = document.createElement("input");
  topic.type = "text";
  topic.name = "topic";
  topic.placeholder = "Topic";
  topic.autocomplete = "off";
  topic.required = true;

  const area = document.createElement("input");
  area.type = "text";
  area.name = "area";
  area.placeholder = "Area / group";
  area.autocomplete = "off";

  const addButton = element("button", "custom-add", "+");
  addButton.type = "submit";
  addButton.setAttribute("aria-label", "Add custom topic");

  form.append(topic, area, addButton);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    addCustomTopic(topic.value, area.value);
    render();
  });
  return form;
}

function renderCustomItem(item) {
  const card = element("article", "custom-card");
  const row = element("div", "custom-row");
  const content = element("div", "custom-content");
  const context = element("div", "custom-context", item.section.title);

  content.append(inlineHtml("div", item.itemText), context);
  row.append(
    renderLevelButton(item.level, {
      label: `Set study level for ${plainText(item.itemText)}`,
      onClick: () => cycleKeyLevel(item.key)
    }),
    renderFavoriteButton(item.key, item.itemText),
    content,
    renderLevelDates(item.key, item.itemText),
    renderCustomActions(item)
  );

  card.dataset.level = String(item.level);
  card.classList.toggle("done", item.level === 3);
  card.append(row);
  return card;
}

function renderCustomActions(item) {
  const actions = element("div", "custom-actions");
  const edit = element("button", "icon-btn", "✎");
  edit.type = "button";
  edit.title = "Edit topic";
  edit.setAttribute("aria-label", `Edit ${plainText(item.itemText)}`);
  edit.addEventListener("click", () => editCustomTopic(item.topic));

  const remove = element("button", "icon-btn danger", "×");
  remove.type = "button";
  remove.title = "Delete topic";
  remove.setAttribute("aria-label", `Delete ${plainText(item.itemText)}`);
  remove.addEventListener("click", () => deleteCustomTopic(item.topic.id));

  actions.append(edit, remove);
  return actions;
}

function renderCustomNav() {
  const items = getVisibleCustomItems();
  if (!items.length) {
    const item = element("li");
    item.append(element("p", "empty", state.custom.length ? "No matching custom topics." : "No custom topics yet."));
    dom.nav.append(item);
    return;
  }

  groupCustomItems(items).forEach((group) => {
    const row = element("div", "nav-link");
    row.tabIndex = 0;
    row.setAttribute("role", "button");
    row.append(
      element("span", "custom-nav-dot", ""),
      element("span", "nav-title-text", group.title),
      element("span", "nav-prog", `${group.items.length}`)
    );
    row.addEventListener("click", () => openCustomArea(group.title));
    row.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      openCustomArea(group.title);
    });
    const item = element("li");
    item.append(row);
    dom.nav.append(item);
  });
}
