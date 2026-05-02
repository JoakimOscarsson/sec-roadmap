function renderFavoriteButton(key, text) {
  const button = element("button", "favorite-btn");
  button.type = "button";
  button.append(renderPinIcon("pin-icon"));
  button.setAttribute(
    "aria-label",
    `${state.favorites[key] ? "Remove from" : "Add to"} plan: ${plainText(text)}`
  );
  button.title = state.favorites[key] ? "Remove from plan" : "Add to plan";
  button.classList.toggle("active", Boolean(state.favorites[key]));
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    if (state.favorites[key]) {
      delete state.favorites[key];
    } else {
      state.favorites[key] = true;
    }
    render();
  });
  return button;
}

function renderLevelButton(level, options) {
  const button = element("button", "level-btn");
  button.type = "button";
  button.textContent = level ? String(level) : "";
  button.dataset.level = String(level);
  button.setAttribute("aria-label", `${options.label}. Current level ${level || "blank"}.`);
  button.addEventListener("click", (event) => {
    options.onClick(event);
    render();
  });
  return button;
}

function renderLevelDates(key, text) {
  const level = getLevel(key);
  const dates = getLevelDates(key);
  const wrapper = element("div", "level-dates");
  const activeDate = level ? dates[level] : "";
  const chipText = level ? (activeDate ? formatDate(activeDate) : "No date") : "";
  const chip = element("button", `date-chip${activeDate ? "" : " empty"}`, chipText);
  chip.type = "button";
  chip.disabled = level === 0;
  chip.title = level ? `Edit level ${level} date` : "";
  chip.setAttribute("aria-label", level ? `Edit level ${level} date for ${plainText(text)}` : "No active level date");
  chip.classList.toggle("today", activeDate === todayDate());
  chip.addEventListener("click", () => {
    if (!level) return;
    wrapper.replaceChildren(renderDateEditor(key, level, text));
  });
  wrapper.append(chip);

  const updateButton = element("button", "date-update", "↻");
  updateButton.type = "button";
  updateButton.disabled = level === 0;
  updateButton.title = level ? `Update level ${level} date` : "Choose a level before updating the date";
  updateButton.setAttribute(
    "aria-label",
    level
      ? `Update level ${level} date for ${plainText(text)}`
      : `Choose a level before updating the date for ${plainText(text)}`
  );
  updateButton.addEventListener("click", () => {
    if (!level) return;
    updateLevelDate(key, level, { log: true, label: plainText(text) });
    render();
  });

  wrapper.classList.toggle("empty", !level);
  wrapper.append(updateButton);
  return wrapper;
}

function renderJournalLinkIndicator(key, text) {
  const count = getJournalLinkCount(key);
  if (!count) {
    const spacer = element("span", "journal-link-indicator-spacer");
    spacer.setAttribute("aria-hidden", "true");
    return spacer;
  }

  const button = element("button", "journal-link-indicator", count > 9 ? "9+" : String(count));
  button.type = "button";
  const entryLabel = count === 1 ? "entry" : "entries";
  button.title = `${count} linked journal ${entryLabel}`;
  button.setAttribute("aria-label", `Show ${count} journal ${entryLabel} linked to ${plainText(text)}`);
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    openJournalLinkFilter(key);
  });
  return button;
}

function renderDateEditor(key, level, text) {
  const editor = element("div", "date-editor");
  const input = document.createElement("input");
  input.type = "date";
  input.value = getLevelDates(key)[level] || todayDate();
  input.setAttribute("aria-label", `Date for level ${level} ${plainText(text)}`);

  const save = () => {
    setLevelDate(key, level, input.value);
    render();
  };

  input.addEventListener("change", save);
  input.addEventListener("blur", save);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      save();
    }
    if (event.key === "Escape") {
      event.preventDefault();
      render();
    }
  });

  setTimeout(() => {
    input.focus();
    if (typeof input.showPicker === "function") input.showPicker();
  }, 0);

  editor.append(input);
  return editor;
}

function renderPinIcon(className) {
  const icon = element("span", className);
  icon.setAttribute("aria-hidden", "true");
  icon.innerHTML = `
    <svg viewBox="-1 -2 26 28" focusable="false">
      <g class="pin-shape" transform="rotate(35 12 12)">
        <path d="M6.5 3.5c0 4.2 2.1 4.2 2.1 7.4s-2.1 3.2-2.1 4.3h11c0-1.1-2.1-1.1-2.1-4.3s2.1-3.2 2.1-7.4z"/>
        <path d="M11.1 15.2h1.8L12 22z"/>
        <circle cx="12" cy="22" r="1.9"/>
      </g>
    </svg>
  `;
  return icon;
}
