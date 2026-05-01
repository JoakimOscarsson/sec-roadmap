# Journal Editor Milkdown Implementation Plan

This plan tracks the move from the current textarea-based journal editor to a live-formatted, Markdown-first editor. The goal is to keep journal storage portable as Markdown while improving the editing experience with live formatting and preserving roadmap-specific commands and metadata.

## Target Outcome

- [ ] Journal notes use a real live-formatting editor instead of a textarea.
- [ ] Markdown remains the saved body format in IndexedDB.
- [ ] Existing journal entries remain compatible.
- [ ] Existing metadata remains separate from note body Markdown:
  - tags
  - linked roadmap/custom/portfolio item keys
  - title
  - subtitle
  - date
- [ ] Existing journal workflows still work:
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

- [ ] Core Milkdown editor package.
- [ ] CommonMark support.
- [ ] GFM support for task lists/checklists.
- [ ] History plugin for undo/redo.
- [ ] Clipboard plugin for Markdown copy/paste.
- [ ] Slash command support or custom slash-command plugin.
- [ ] Optional code highlighting plugin for fenced code blocks.

Definition of done:

- [ ] Existing Markdown/plain text note bodies load into Milkdown.
- [ ] Saving writes plain Markdown back to `entry.body`.
- [ ] Existing notes with no Markdown render as normal paragraphs.
- [ ] No journal metadata is stored inside Markdown unless intentionally inserted by the user.

## 4. Replace Textarea Editing In Inline And Focused Modes

Swap the note body textarea for Milkdown in both journal editing contexts.

Tasks:

- [ ] Replace focused editor body textarea.
- [ ] Replace inline editor body textarea.
- [ ] Preserve existing title/subtitle/date positioning.
- [ ] Preserve save and cancel controls.
- [ ] Preserve keyboard shortcuts.

Definition of done:

- [ ] New entry uses Milkdown.
- [ ] Inline edit uses Milkdown.
- [ ] Focused edit uses Milkdown.
- [ ] `Ctrl+Enter` / `Cmd+Enter` saves.
- [ ] `Esc` cancels edit mode.
- [ ] Save/cancel buttons still work.
- [ ] Inline editor grows and scrolls cleanly.
- [ ] Focused editor remains aligned with the main app width.

## 5. Rebuild Existing Slash Commands

Reimplement the current journal commands as editor-level slash commands.

Commands to preserve:

- [ ] `/tag <word>`
- [ ] `/"multi word tag"`
- [ ] `/link <query>`
- [ ] `/plan <query>`
- [ ] `/title <text>`
- [ ] `/t <text>`
- [ ] `/subtitle <text>`
- [ ] `/st <text>`

Definition of done:

- [ ] Slash menu appears while typing `/`.
- [ ] Arrow keys move through suggestions.
- [ ] Enter selects the active suggestion.
- [ ] Escape closes the menu.
- [ ] `/tag` updates journal metadata, not body Markdown.
- [ ] `/link` updates `linkedItemKeys`, not body Markdown.
- [ ] `/plan` suggests only current plan items.
- [ ] `/title` and `/t` update the journal title field.
- [ ] `/subtitle` and `/st` update the subtitle field.
- [ ] Metadata chips update immediately while editing.
- [ ] Literal slash input remains possible.

## 6. Support Markdown Formatting Behavior

Configure live formatting for the desired note-taking syntax.

Required Markdown behavior:

- [ ] `# ` creates heading level 1.
- [ ] `## ` creates heading level 2.
- [ ] `### ` creates heading level 3.
- [ ] `*italic*` creates italic.
- [ ] `**bold**` creates bold.
- [ ] `***bold italic***` creates bold italic.
- [ ] `` `inline code` `` creates inline code.
- [ ] `> ` creates a blockquote.
- [ ] Triple backticks create fenced code blocks.
- [ ] `- ` creates bullet lists.
- [ ] `* ` creates bullet lists.
- [ ] `1. ` creates numbered lists.
- [ ] `- [ ]` creates unchecked checklist items.
- [ ] `- [x]` creates checked checklist items.
- [ ] Tab and Shift+Tab support nested lists where supported.

Definition of done:

- [ ] Markdown shortcuts convert to live formatting while editing.
- [ ] Saved Markdown remains clean and portable.
- [ ] Formatting survives reload.
- [ ] Formatting survives switching between inline and focused edit.

## 7. Render Read-Only Notes Consistently

Align expanded journal entry rendering with the Milkdown Markdown pipeline.

Tasks:

- [ ] Replace or retire the temporary custom `journal-markdown.js` renderer.
- [ ] Use a safe Markdown renderer compatible with Milkdown output.
- [ ] Keep expanded body clickable to enter inline edit.
- [ ] Preserve multi-open journal entries.

Definition of done:

- [ ] Headings look the same in editor and read-only view.
- [ ] Paragraphs, lists, checklists, quotes, code blocks, and inline code render correctly.
- [ ] Read-only rendering does not execute unsafe HTML/script content.
- [ ] Clicking expanded note body still opens inline edit mode.

## 8. Integrate Metadata Chips Cleanly

Keep tags and linked roadmap items outside the Markdown body.

Tasks:

- [ ] Show current tags near the editor.
- [ ] Show current linked items near the editor.
- [ ] Allow removing tags and links while editing.
- [ ] Update metadata from slash commands.

Definition of done:

- [ ] Tags persist in `entry.tags`.
- [ ] Links persist in `entry.linkedItemKeys`.
- [ ] Linked item indicators update after saving.
- [ ] Journal linked-item filter still works.
- [ ] Metadata remains available to future export/LLM workflows.

## 9. Polish Typography And Visual Design

Style Milkdown to match the current app: calm, clean, minimal, and professional.

Tasks:

- [ ] Match editor typography to the app's serif/sans system.
- [ ] Tune heading sizes to avoid a document-editor feel that is too large.
- [ ] Tune paragraph spacing for note-taking.
- [ ] Style inline code and code blocks.
- [ ] Style blockquotes.
- [ ] Style lists and nested lists.
- [ ] Style checklists.
- [ ] Remove unnecessary editor chrome.

Definition of done:

- [ ] Editor feels native to the app.
- [ ] No heavy toolbar or visual clutter unless explicitly needed.
- [ ] Mobile layout remains clean.
- [ ] Text does not overflow containers.
- [ ] Focused editor and inline editor both look intentional.

## 10. Persistence And Migration Safety

Keep IndexedDB data stable.

Tasks:

- [ ] Confirm existing journal entries require no migration.
- [ ] Confirm `body` remains Markdown text.
- [ ] Confirm existing metadata shape remains unchanged.
- [ ] Add defensive parsing for bad/empty Markdown.

Definition of done:

- [ ] Existing notes open after the editor migration.
- [ ] Empty notes do not break the editor or renderer.
- [ ] Malformed Markdown does not break the journal list.
- [ ] IndexedDB schema does not need destructive changes.

## 11. Testing Pass

Run focused verification for editor integration and existing journal behavior.

Manual test checklist:

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

- [ ] Build/static checks pass.
- [ ] No console errors during normal workflows.
- [ ] Existing roadmap tracking behavior is unchanged.
- [ ] Journal behavior matches the checklist above.

## 12. Cleanup

Remove temporary textarea-era code and keep clear module boundaries.

Tasks:

- [ ] Remove obsolete textarea-specific command handling.
- [ ] Remove obsolete textarea-specific Markdown rendering.
- [ ] Remove duplicate command systems.
- [ ] Keep editor adapter, journal metadata, journal rendering, and storage concerns separate.

Definition of done:

- [ ] No dead journal editor code remains.
- [ ] No duplicate slash command implementations remain.
- [ ] File boundaries remain easy to understand.
- [ ] App builds cleanly.

## Execution Notes

- Start with build setup and adapter layer before touching journal behavior.
- Integrate Milkdown without custom commands first.
- Then replace the editor UI.
- Then port slash commands.
- Then polish typography and read-only rendering.
- The riskiest part is preserving roadmap-specific metadata commands cleanly while moving from textarea events to a Milkdown/ProseMirror editor model.
