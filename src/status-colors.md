# BugTracker status colors

Task 23 defines the shared visual language for application states. Every state
has a background, text, and border color so it can be used consistently in
badges, alerts, issue tables, cards, and filters.

| Status | Background | Text | Border | Meaning |
| --- | --- | --- | --- | --- |
| Success / Resolved | `bg-status-success-bg` | `text-status-success-text` | `border-status-success-border` | Completed successfully |
| Warning | `bg-status-warning-bg` | `text-status-warning-text` | `border-status-warning-border` | Needs attention |
| Error | `bg-status-error-bg` | `text-status-error-text` | `border-status-error-border` | Failed or blocked |
| Info | `bg-status-info-bg` | `text-status-info-text` | `border-status-info-border` | Neutral information |
| Open issue | `bg-status-open-bg` | `text-status-open-text` | `border-status-open-border` | New and not started |
| In progress | `bg-status-in-progress-bg` | `text-status-in-progress-text` | `border-status-in-progress-border` | Currently being worked on |
| Closed | `bg-status-closed-bg` | `text-status-closed-text` | `border-status-closed-border` | No further work expected |

Example badge:

```tsx
<span className="border border-status-success-border bg-status-success-bg px-2 py-1 text-status-success-text">
  Resolved
</span>
```

Use the status tokens instead of hard-coded colors. This keeps status meaning
consistent and lets light/dark adjustments live in the `.dark` block of
`src/index.css` without changing component markup.
