# Security Roadmap MCP

This folder contains a read-only MCP stdio server for the Security Roadmap app plus an optional local companion mirror. The app keeps IndexedDB as the source of truth. When mirror sync is enabled in the UI, the browser asynchronously pushes a full normalized state snapshot to the local companion, and the MCP server can read that mirrored state file.

## Run

Static roadmap only:

```sh
npm run mcp:stdio
```

Local companion mirror:

```sh
npm run companion
```

The companion prints a token. In the app, open `Settings -> Mirror`, keep the endpoint as `http://127.0.0.1:3333`, paste the token, enable mirror sync, and save. The app then pushes state after IndexedDB saves, using a short debounce so UI actions are not blocked.

MCP against the live mirror file:

```sh
npm run mcp:mirror
```

Static roadmap plus an exported backup snapshot:

```sh
SEC_ROADMAP_BACKUP=/path/to/sec-roadmap-backup.json npm run mcp:stdio
```

Equivalent direct Node form:

```sh
node /workspaces/pdp/mcp/sec-roadmap-mcp.mjs --state /path/to/sec-roadmap-backup.json
```

The MCP server accepts live mirror payloads, app backup files with `schema: "sec-roadmap.user-state"`, and raw state JSON. It never writes to the mirror, backup, IndexedDB, or curriculum.

## Companion API

- `GET /health`: unauthenticated health check.
- `GET /api/mirror/status`: authenticated mirror status and counts.
- `GET /api/mirror/state`: authenticated current mirror payload.
- `PUT /api/mirror/state`: authenticated full-state mirror update from the browser.

The companion binds to `127.0.0.1` by default, writes `.sec-roadmap/mirror-state.json`, and requires `Authorization: Bearer <token>` for mirror endpoints.

## MCP Client Config Example

```json
{
  "mcpServers": {
    "sec-roadmap": {
      "command": "npm",
      "args": ["run", "mcp:mirror"],
      "cwd": "/workspaces/pdp",
      "env": {}
    }
  }
}
```

## Tools

- `roadmap_overview`: compact structure, progress, plan, and journal counts.
- `roadmap_list_chapters`: chapter/track manifest with optional section summaries.
- `roadmap_get_chapter`: one chapter by ID, with `summary`, `normal`, or `full` detail.
- `roadmap_search`: search curriculum, custom topics, and portfolio items.
- `progress_summary`: level distribution, stale items, and completion summaries.
- `plan_list`: pinned plan items with progress and context.
- `journal_summary`: recent journal/activity counts without full note bodies.
- `journal_list`: filtered timeline; keep `includeBody: false` until details are needed.
- `journal_get_entry`: one journal note or activity event by ID.
- `context_pack`: bounded packs for weekly planning, review, gap analysis, or journal recap.

## Resources

- `sec-roadmap://overview`
- `sec-roadmap://roadmap/manifest`
- `sec-roadmap://progress/summary`
- `sec-roadmap://plan`
- `sec-roadmap://journal/summary`

## Context-Budget Pattern

Use `roadmap_overview` first, then list chapters or search with summary detail. Fetch individual chapters, plan entries, or journal bodies only when the conversation needs that specific context.
