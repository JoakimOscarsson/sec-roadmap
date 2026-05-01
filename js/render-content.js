function renderHeader(title, description, crumb) {
  const header = element("header", "part-header");
  header.append(element("div", "crumb", crumb), element("h1", "", title));
  if (description) header.append(inlineHtml("p", description));
  return header;
}

function renderIntro(lines) {
  const useful = lines.filter((line) => line.text.trim());
  if (!useful.length) return null;

  const wrapper = element("div", "notes");
  renderBlocks(useful, null, null, wrapper, false);
  return wrapper;
}

function renderBlocks(lines, chapter, section, parent, trackItems) {
  let list = null;
  let listType = "";
  const levelFilter = selectedLevel();

  const flushList = () => {
    list = null;
    listType = "";
  };

  lines.forEach((line) => {
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
    const number = text.match(/^\s*\d+\.\s+(.+)$/);

    if (bullet || number) {
      const type = bullet ? "ul" : "ol";
      if (!list || listType !== type) {
        list = element(type, trackItems ? "items" : "");
        listType = type;
        parent.append(list);
      }

      const item = element("li", trackItems ? "item" : "");
      const itemText = bullet ? bullet[1] : number[1];

      if (trackItems && chapter && section) {
        const key = lineKey(chapter, section, line);
        if (levelFilter !== null && getLevel(key) !== levelFilter) return;
        const row = element("div", "item-row");
        const level = getLevel(key);
        item.dataset.level = String(level);
        item.classList.toggle("done", level === 3);
        row.append(
          renderLevelButton(level, {
            label: `Set study level for ${plainText(itemText)}`,
            onClick: () => cycleKeyLevel(key)
          }),
          renderFavoriteButton(key, itemText),
          inlineHtml("span", itemText),
          renderLevelDates(key, itemText)
        );
        item.append(row);
      } else {
        item.append(inlineHtml("span", itemText));
      }

      list.append(item);
      return;
    }

    flushList();
    parent.append(inlineHtml("p", text));
  });
}
