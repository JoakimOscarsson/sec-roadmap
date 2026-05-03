# Security Roadmap MCP

This folder contains a read-only MCP stdio server for the Security Roadmap app. It exposes the static curriculum plus an optional exported user-state backup so an LLM can inspect the roadmap, progress, plan, and journal without needing direct browser storage access.

## Run

Static roadmap only:

```sh
npm run mcp:stdio
```

Static roadmap plus your exported backup:

```sh
SEC_ROADMAP_BACKUP=/path/to/sec-roadmap-backup.json npm run mcp:stdio
```

Equivalent direct Node form:

```sh
node /workspaces/pdp/mcp/sec-roadmap-mcp.mjs --state /path/to/sec-roadmap-backup.json
```

The server accepts both app backup files with `schema: "sec-roadmap.user-state"` and raw state JSON. It never writes to the backup, IndexedDB, or the curriculum.

## MCP Client Config Example

```json
{
  "mcpServers": {
    "sec-roadmap": {
      "command": "npm",
      "args": ["run", "mcp:stdio"],
      "cwd": "/workspaces/pdp",
      "env": {
        "SEC_ROADMAP_BACKUP": "/path/to/sec-roadmap-backup.json"
      }
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
