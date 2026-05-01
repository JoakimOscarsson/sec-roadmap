function renderSupportView(support, crumb, title = support?.title) {
  dom.main.replaceChildren();
  if (!support) {
    dom.main.append(element("p", "empty", "No content loaded."));
    return;
  }

  dom.main.append(renderHeader(title, support.description, crumb));

  const intro = renderIntro(support.intro);
  if (intro) dom.main.append(intro);

  support.blocks.forEach((block) => {
    const section = element("section", "support-block");
    section.id = supportBlockAnchor(crumb, block);
    section.append(element("h3", "", block.title));
    if (crumb === "Portfolio") {
      renderPortfolioBlocks(block, section);
    } else {
      renderBlocks(block.lines, null, null, section, false);
    }
    dom.main.append(section);
  });
}
