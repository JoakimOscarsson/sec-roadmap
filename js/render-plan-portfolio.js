function renderPortfolioBlocks(block, parent) {
  let list = null;

  const flushList = () => {
    list = null;
  };

  block.lines.forEach((line) => {
    const text = line.text;
    if (!text.trim()) {
      flushList();
      return;
    }

    const heading = text.match(/^(#{4,6})\s+(.+)$/);
    if (heading) {
      flushList();
      parent.append(inlineHtml("h4", cleanInline(heading[2])));
      return;
    }

    const bullet = text.match(/^\s*[-*]\s+(.+)$/);
    if (bullet) {
      if (!list) {
        list = element("ul", "portfolio-items");
        parent.append(list);
      }
      list.append(renderPortfolioItem(block, line, bullet[1]));
      return;
    }

    flushList();
    parent.append(inlineHtml("p", text));
  });
}

function renderPortfolioItem(block, line, text) {
  const key = portfolioKey(block, line);
  const itemText = cleanPortfolioText(text);
  const references = getPortfolioReferences(text);
  const item = element("li", "portfolio-item");
  const row = element("div", "portfolio-row");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = portfolioInputId(key);
  checkbox.checked = Boolean(state.portfolio?.[key]);
  checkbox.setAttribute("aria-label", `Mark portfolio item complete: ${plainText(itemText)}`);
  checkbox.addEventListener("change", () => {
    setPortfolioComplete(key, checkbox.checked, references);
    render();
  });
  const label = element("label", "portfolio-text");
  label.setAttribute("for", checkbox.id);
  label.append(inlineHtml("span", itemText));
  row.append(checkbox, renderFavoriteButton(key, itemText), label);
  row.append(renderJournalLinkIndicator(key, itemText));
  item.classList.toggle("done", checkbox.checked);
  item.append(row);
  return item;
}

function renderFavorites() {
  dom.main.replaceChildren();

  const favorites = getFavoriteItems();
  const header = renderHeader("Plan", "Pin roadmap, custom, or portfolio items to build your current study plan.", "Study");
  dom.main.append(header);

  if (!favorites.length) {
    const message = state.query.trim()
      ? "No plan items match the current search."
      : "No plan items yet.";
    dom.main.append(element("p", "empty", message));
    return;
  }

  const list = element("div", "favorites-list");
  favorites.forEach((favorite) => {
    const card = element("article", "favorite-card");
    const context = element(
      "div",
      "favorite-context",
      favoriteContext(favorite)
    );

    const row = favorite.sourceTab === "portfolio"
      ? renderPortfolioPlanRow(favorite)
      : renderStudyPlanRow(favorite);

    const actions = element("div", "favorite-actions");
    const openButton = element(
      "button",
      "ghost-btn compact",
      favorite.sourceTab === "portfolio" ? "Open portfolio" : "Open chapter"
    );
    openButton.type = "button";
    openButton.addEventListener("click", () => openSourceChapter(favorite));
    actions.append(openButton);

    const done = favorite.sourceTab === "portfolio"
      ? Boolean(state.portfolio?.[favorite.key])
      : getLevel(favorite.key) === 3;
    card.dataset.level = String(favorite.sourceTab === "portfolio" ? 0 : getLevel(favorite.key));
    card.classList.toggle("done", done);
    card.append(context, row, actions);
    list.append(card);
  });

  dom.main.append(list);
}

function renderStudyPlanRow(favorite) {
  const row = element("div", "favorite-row");
  const level = getLevel(favorite.key);
  row.append(
    renderLevelButton(level, {
      label: `Set study level for ${plainText(favorite.itemText)}`,
      onClick: () => cycleKeyLevel(favorite.key)
    }),
    renderFavoriteButton(favorite.key, favorite.itemText),
    inlineHtml("div", favorite.itemText),
    renderJournalLinkIndicator(favorite.key, favorite.itemText),
    renderLevelDates(favorite.key, favorite.itemText)
  );
  return row;
}

function renderPortfolioPlanRow(favorite) {
  const row = element("div", "favorite-row portfolio-plan-row");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = Boolean(state.portfolio?.[favorite.key]);
  checkbox.setAttribute("aria-label", `Mark portfolio item complete: ${plainText(favorite.itemText)}`);
  checkbox.addEventListener("change", () => {
    setPortfolioComplete(favorite.key, checkbox.checked, favorite.references);
    render();
  });
  const text = inlineHtml("div", favorite.itemText);
  text.classList.add("plan-text");
  row.append(
    checkbox,
    renderFavoriteButton(favorite.key, favorite.itemText),
    text,
    renderJournalLinkIndicator(favorite.key, favorite.itemText)
  );
  return row;
}

function renderFavoriteNav() {
  const favorites = getFavoriteItems();

  if (!favorites.length) {
    const item = element("li");
    item.append(element("p", "empty", state.query.trim() ? "No matching plan items." : "No plan items yet."));
    dom.nav.append(item);
    return;
  }

  const groups = new Map();
  favorites.forEach((favorite) => {
    const key = `${favorite.sourceTab}:${favorite.chapter.id}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(favorite);
  });

  groups.forEach((items) => {
    const first = items[0];
    const row = element("div", "nav-link");
    row.tabIndex = 0;
    row.setAttribute("role", "button");
    const chapterTitle = displayChapterTitle(first.chapter);
    row.append(
      renderPinIcon("favorite-nav-pin pin-icon"),
      element("span", "nav-title-text", chapterTitle),
      element("span", "nav-prog", `${items.length}`)
    );
    row.addEventListener("click", () => openSourceChapter(first));
    row.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      openSourceChapter(first);
    });

    const item = element("li");
    item.append(row);
    dom.nav.append(item);
  });
}
