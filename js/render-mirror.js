function renderMirror() {
  dom.main.replaceChildren();
  dom.main.append(renderHeader("Mirror", "Local companion sync for MCP clients.", "Settings"));

  const config = getMirrorConfig();
  const section = element("section", "mirror-panel");
  const form = element("form", "mirror-form");
  form.id = "mirrorForm";

  const enabledLabel = element("label", "mirror-checkbox-row");
  const enabled = document.createElement("input");
  enabled.type = "checkbox";
  enabled.name = "enabled";
  enabled.checked = config.enabled;
  enabledLabel.append(enabled, element("span", "", "Enable local mirror sync"));

  const endpointLabel = element("label", "mirror-field");
  endpointLabel.append(element("span", "mirror-field-label", "Endpoint"));
  const endpoint = document.createElement("input");
  endpoint.type = "url";
  endpoint.name = "endpoint";
  endpoint.autocomplete = "off";
  endpoint.spellcheck = false;
  endpoint.value = config.endpoint;
  endpointLabel.append(endpoint);

  const tokenLabel = element("label", "mirror-field");
  tokenLabel.append(element("span", "mirror-field-label", "Token"));
  const token = document.createElement("input");
  token.type = "password";
  token.name = "token";
  token.autocomplete = "off";
  token.spellcheck = false;
  token.value = config.token;
  tokenLabel.append(token);

  const actions = element("div", "mirror-actions");
  const save = element("button", "ghost-btn", "Save");
  save.type = "submit";
  const sync = element("button", "ghost-btn", "Sync now");
  sync.type = "button";
  actions.append(save, sync);

  const status = element("div", "mirror-status", "");
  status.id = "mirrorStatus";

  form.append(enabledLabel, endpointLabel, tokenLabel, actions, status);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    saveMirrorConfig({
      enabled: enabled.checked,
      endpoint: endpoint.value,
      token: token.value
    });
  });

  sync.addEventListener("click", () => {
    saveMirrorConfig({
      enabled: enabled.checked,
      endpoint: endpoint.value,
      token: token.value
    }, { sync: false });
    flushMirrorSync("manual").catch(() => {});
  });

  section.append(form);
  dom.main.append(section);
  renderMirrorStatus();
}
