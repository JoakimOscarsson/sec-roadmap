function renderReview() {
  dom.main.replaceChildren();

  const buckets = getReviewBuckets();
  const itemCount = buckets.reduce((sum, bucket) => sum + bucket.items.length, 0);
  const header = renderHeader(
    "Review",
    "Non-blank items sorted by the date of their current level, oldest first.",
    "Roadmap"
  );
  header.append(element("p", "path-note", `${itemCount} items ready for review.`));
  dom.main.append(header);

  if (!itemCount) {
    dom.main.append(element("p", "empty", state.query.trim() ? "No review items match the current search." : "No review items yet."));
    return;
  }

  const wrapper = element("div", "review-buckets");
  buckets.forEach((bucket) => {
    if (!bucket.items.length) return;
    const section = element("section", "review-bucket");
    section.id = `review-${bucket.id}`;
    const heading = element("div", "review-bucket-heading");
    heading.append(element("h3", "", bucket.title), element("span", "review-count", `${bucket.items.length}`));
    section.append(heading);

    const list = element("div", "review-list");
    bucket.items.forEach((item) => {
      list.append(renderReviewItem(item));
    });
    section.append(list);
    wrapper.append(section);
  });

  dom.main.append(wrapper);
}

function renderReviewItem(item) {
  const card = element("article", "review-card");
  const row = element("div", "review-row");
  const content = element("div", "review-content");
  const context = element("div", "review-context");
  const openButton = element("button", "review-open", "↗");
  openButton.type = "button";
  openButton.title = "Open chapter";
  openButton.setAttribute("aria-label", `Open ${displayChapterTitle(item.chapter)}`);
  openButton.addEventListener("click", () => openSourceChapter(item));

  const itemContext = item.sourceTab === "specializations"
    ? `${sourceLabel(item.sourceTab)} / ${specializationTrackHeading(getSpecializationTrackForChapter(item.chapter))} / ${displayChapterTitle(item.chapter)} / ${item.section.title}`
    : `${sourceLabel(item.sourceTab)} / ${displayChapterTitle(item.chapter)} / ${item.section.title}`;
  context.append(
    element("span", "", itemContext),
    openButton
  );
  content.append(inlineHtml("div", item.itemText), context);

  row.append(
    renderLevelButton(item.level, {
      label: `Set study level for ${plainText(item.itemText)}`,
      onClick: () => cycleKeyLevel(item.key)
    }),
    renderReviewCompleteControl(item),
    renderFavoriteButton(item.key, item.itemText),
    content,
    renderLevelDates(item.key, item.itemText)
  );

  card.dataset.level = String(item.level);
  card.classList.toggle("review-complete", isReviewComplete(item.key));
  card.append(row);
  return card;
}

function renderReviewCompleteControl(item) {
  const label = element("label", "review-complete-control");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = isReviewComplete(item.key);
  checkbox.setAttribute("aria-label", `Mark review complete for ${plainText(item.itemText)}`);
  checkbox.addEventListener("change", () => {
    setReviewComplete(item.key, checkbox.checked);
    render();
    if (checkbox.checked) {
      document.getElementById("review-complete")?.scrollIntoView({ block: "start" });
    }
  });
  label.append(checkbox);
  return label;
}

function renderReviewNav() {
  const buckets = getReviewBuckets().filter((bucket) => bucket.items.length);

  if (!buckets.length) {
    const item = element("li");
    item.append(element("p", "empty", state.query.trim() ? "No matching review items." : "No review items yet."));
    dom.nav.append(item);
    return;
  }

  buckets.forEach((bucket) => {
    const row = element("div", "nav-link");
    row.tabIndex = 0;
    row.setAttribute("role", "button");
    row.append(
      element("span", "review-nav-dot", ""),
      element("span", "nav-title-text", bucket.title),
      element("span", "nav-prog", `${bucket.items.length}`)
    );
    row.addEventListener("click", () => {
      document.getElementById(`review-${bucket.id}`)?.scrollIntoView({ block: "start" });
    });
    row.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      document.getElementById(`review-${bucket.id}`)?.scrollIntoView({ block: "start" });
    });

    const item = element("li");
    item.append(row);
    dom.nav.append(item);
  });
}
