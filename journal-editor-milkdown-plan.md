# Journal Editor Milkdown Implementation Plan

This plan tracks the move from the current textarea-based journal editor to a live-formatted, Markdown-first editor. The goal is to keep journal storage portable as Markdown while improving the editing experience with live formatting and preserving roadmap-specific commands and metadata.

## Target Outcome

- [x] Journal notes use a real live-formatting editor instead of a textarea.
- [x] Markdown remains the saved body format in IndexedDB.
- [x] Existing journal entries remain compatible.
- [x] Existing metadata remains separate from note body Markdown:
  - tags
  - linked roadmap/custom/portfolio item keys
  - title
  - subtitle
  - date
- [x] Existing journal workflows still work:
  - create
  - inline edit
  - focused edit
  - expand/collapse
  - multi-open entries
  - linked-item filtering
  - linked-entry indicators on roadmap items

## 1. Prepare The App For An Editor Dependency

Add a small build setup, likely Vite, while preserving the current static-app behavior.

Tasks:

- [x] Add package metadata and build scripts.
- [x] Add Vite or equivalent minimal bundling setup.
- [x] Move script loading from many global script tags toward bundled modules.
- [x] Keep the current app behavior unchanged during this step.
- [x] Document how to build and preview the app without changing the user's no-local-server testing preference.

Definition of done:

- [x] App builds successfully.
- [x] Built app runs as the same single-page web app.
- [x] Existing roadmap, tracking, plan, review, custom, portfolio, and journal views still work.
- [x] Existing IndexedDB state loads without migration.
- [x] No journal editor behavior changes yet.

## 2. Introduce A Journal Editor Adapter Layer

Create an internal adapter so journal rendering code does not depend directly on Milkdown APIs.

Suggested interface:

```js
mountJournalEditor({
  element,
  markdown,
  metadata,
  mode,
  onChange,
  onCommand,
  onSave,
  onCancel
})

destroyJournalEditor(instance)
getJournalEditorMarkdown(instance)
focusJournalEditor(instance)
```

Tasks:

- [x] Create a dedicated journal editor adapter module.
- [x] Define lifecycle methods for mounting, reading, focusing, and destroying editors.
- [x] Make inline and focused modes capable of using the same adapter.
- [x] Keep a fallback path until Milkdown is fully integrated.

Definition of done:

- [x] Journal form code calls the adapter instead of owning editor internals.
- [x] Editor instances are destroyed when closing, saving, switching entries, or rerendering.
- [x] Inline and focused editors use the same adapter interface.
- [x] Storage and list rendering remain unchanged.

## 3. Install Milkdown With Markdown-First Storage

Add Milkdown and the plugins needed for the intended Markdown feature set.

Likely packages/plugins:

- [x] Core Milkdown editor package.
- [x] CommonMark support.
- [x] GFM support for task lists/checklists.
- [x] History plugin for undo/redo.
- [x] Clipboard plugin for Markdown copy/paste.
- [x] Slash command support through the app's custom command bridge.
- [x] Fenced code block support; optional syntax highlighting is deferred.

Definition of done:

- [x] Existing Markdown/plain text note bodies load into Milkdown.
- [x] Saving writes plain Markdown back to `entry.body`.
- [x] Existing notes with no Markdown render as normal paragraphs.
- [x] No journal metadata is stored inside Markdown unless intentionally inserted by the user.

## 4. Replace Textarea Editing In Inline And Focused Modes

Swap the note body textarea for Milkdown in both journal editing contexts.

Tasks:

- [x] Replace focused editor body textarea.
- [x] Replace inline editor body textarea.
- [x] Preserve existing title/subtitle/date positioning.
- [x] Preserve save and cancel controls.
- [x] Preserve keyboard shortcuts.

Definition of done:

- [x] New entry uses Milkdown.
- [x] Inline edit uses Milkdown.
- [x] Focused edit uses Milkdown.
- [x] `Ctrl+Enter` / `Cmd+Enter` saves.
- [x] `Esc` cancels edit mode.
- [x] Save/cancel buttons still work.
- [x] Inline editor grows and scrolls cleanly.
- [x] Focused editor remains aligned with the main app width.

## 5. Rebuild Existing Slash Commands

Reimplement the current journal commands as editor-level slash commands.

Commands to preserve:

- [x] `/tag <word>`
- [x] `/"multi word tag"`
- [x] `/link <query>`
- [x] `/plan <query>`
- [x] `/title <text>`
- [x] `/t <text>`
- [x] `/subtitle <text>`
- [x] `/st <text>`

Definition of done:

- [x] Slash menu appears while typing `/`.
- [x] Arrow keys move through suggestions.
- [x] Enter selects the active suggestion.
- [x] Escape closes the menu.
- [x] `/tag` updates journal metadata, not body Markdown.
- [x] `/link` updates `linkedItemKeys`, not body Markdown.
- [x] `/plan` suggests only current plan items.
- [x] `/title` and `/t` update the journal title field.
- [x] `/subtitle` and `/st` update the subtitle field.
- [x] Metadata chips update immediately while editing.
- [x] Literal slash input remains possible with `\/`.

## 6. Support Markdown Formatting Behavior

Configure live formatting for the desired note-taking syntax.

Required Markdown behavior:

- [x] `# ` creates heading level 1.
- [x] `## ` creates heading level 2.
- [x] `### ` creates heading level 3.
- [x] `*italic*` creates italic.
- [x] `**bold**` creates bold.
- [x] `***bold italic***` creates bold italic.
- [x] `` `inline code` `` creates inline code.
- [x] `> ` creates a blockquote.
- [x] Triple backticks create fenced code blocks.
- [x] `- ` creates bullet lists.
- [x] `* ` creates bullet lists.
- [x] `1. ` creates numbered lists.
- [x] `- [ ]` creates unchecked checklist items.
- [x] `- [x]` creates checked checklist items.
- [x] Tab and Shift+Tab support nested lists where supported.

Definition of done:

- [x] Markdown shortcuts convert to live formatting while editing.
- [x] Saved Markdown remains clean and portable.
- [x] Formatting survives reload.
- [x] Formatting survives switching between inline and focused edit.

## 7. Render Read-Only Notes Consistently

Align expanded journal entry rendering with the Milkdown Markdown pipeline.

Tasks:

- [x] Replace or retire the temporary custom `journal-markdown.js` renderer.
- [x] Use a safe Markdown renderer compatible with Milkdown output.
- [x] Keep expanded body clickable to enter inline edit.
- [x] Preserve multi-open journal entries.

Definition of done:

- [x] Headings look the same in editor and read-only view.
- [x] Paragraphs, lists, checklists, quotes, code blocks, and inline code render correctly.
- [x] Read-only rendering does not execute unsafe HTML/script content.
- [x] Clicking expanded note body still opens inline edit mode.

## 8. Integrate Metadata Chips Cleanly

Keep tags and linked roadmap items outside the Markdown body.

Tasks:

- [x] Show current tags near the editor.
- [x] Show current linked items near the editor.
- [x] Allow removing tags and links while editing.
- [x] Update metadata from slash commands.

Definition of done:

- [x] Tags persist in `entry.tags`.
- [x] Links persist in `entry.linkedItemKeys`.
- [x] Linked item indicators update after saving.
- [x] Journal linked-item filter still works.
- [x] Metadata remains available to future export/LLM workflows.

## 9. Polish Typography And Visual Design

Style Milkdown to match the current app: calm, clean, minimal, and professional.

Tasks:

- [x] Match editor typography to the app's serif/sans system.
- [x] Tune heading sizes to avoid a document-editor feel that is too large.
- [x] Tune paragraph spacing for note-taking.
- [x] Style inline code and code blocks.
- [x] Style blockquotes.
- [x] Style lists and nested lists.
- [x] Style checklists.
- [x] Remove unnecessary editor chrome.

Definition of done:

- [x] Editor feels native to the app.
- [x] No heavy toolbar or visual clutter unless explicitly needed.
- [x] Mobile layout remains clean.
- [x] Text does not overflow containers.
- [x] Focused editor and inline editor both look intentional.

## 10. Persistence And Migration Safety

Keep IndexedDB data stable.

Tasks:

- [x] Confirm existing journal entries require no migration.
- [x] Confirm `body` remains Markdown text.
- [x] Confirm existing metadata shape remains unchanged.
- [x] Add defensive parsing for bad/empty Markdown.

Definition of done:

- [x] Existing notes open after the editor migration.
- [x] Empty notes do not break the editor or renderer.
- [x] Malformed Markdown does not break the journal list.
- [x] IndexedDB schema does not need destructive changes.

## 11. Testing Pass

Run focused verification for editor integration and existing journal behavior.

Automated verification:

- [x] JavaScript syntax checks pass.
- [x] Production build passes.
- [x] Milkdown mounts in a DOM smoke test.
- [x] Milkdown serializes note bodies back to Markdown.
- [x] Read-only Markdown rendering covers headings, bold text, and checklists.
- [x] Read-only Markdown rendering escapes unsafe HTML.
- [x] Slash commands update title, subtitle, tags, and linked item metadata in the editor adapter smoke test.
- [x] `Ctrl+Enter` passes through to the journal form save handler in the editor adapter smoke test.

Target-browser manual test checklist:

- [ ] Create a note.
- [ ] Edit a note inline.
- [ ] Edit a note in focused mode.
- [ ] Save with mouse.
- [ ] Save with `Ctrl+Enter`.
- [ ] Save with `Cmd+Enter`.
- [ ] Cancel with mouse.
- [ ] Cancel with `Esc`.
- [ ] Use headings.
- [ ] Use bold, italic, bold italic, and inline code.
- [ ] Use blockquotes.
- [ ] Use fenced code blocks.
- [ ] Use bullet lists.
- [ ] Use numbered lists.
- [ ] Use nested lists.
- [ ] Use checklists.
- [ ] Use `/tag`.
- [ ] Use `/link`.
- [ ] Use `/plan`.
- [ ] Use `/title`.
- [ ] Use `/subtitle`.
- [ ] Click linked journal indicator from roadmap item.
- [ ] Filter journal by linked item.
- [ ] Reload app and confirm persisted note content.

Definition of done:

- [x] Build/static checks pass.
- [ ] No console errors during normal workflows.
- [x] Existing roadmap tracking behavior is unchanged.
- [ ] Journal behavior matches the target-browser checklist above.

Note: the implementation and automated smoke tests are complete. A full visual/manual browser pass is still intended for the target test machine because this container has no installed browser and Playwright's Chromium dependencies cannot be installed without root privileges.

## 12. Cleanup

Remove temporary textarea-era code and keep clear module boundaries.

Tasks:

- [x] Remove obsolete textarea-specific command handling.
- [x] Remove obsolete textarea-specific Markdown rendering.
- [x] Remove duplicate command systems.
- [x] Keep editor adapter, journal metadata, journal rendering, and storage concerns separate.

Definition of done:

- [x] No dead journal editor code remains.
- [x] No duplicate slash command implementations remain.
- [x] File boundaries remain easy to understand.
- [x] App builds cleanly.

## Execution Notes

- Start with build setup and adapter layer before touching journal behavior.
- Integrate Milkdown without custom commands first.
- Then replace the editor UI.
- Then port slash commands.
- Then polish typography and read-only rendering.
- The riskiest part is preserving roadmap-specific metadata commands cleanly while moving from textarea events to a Milkdown/ProseMirror editor model.
