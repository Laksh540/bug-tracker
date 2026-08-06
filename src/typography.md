# BugTracker typography system

Task 21 defines the text roles used throughout the application. The product
uses Geist Variable for UI text, with a system sans-serif fallback.

| Role | Tailwind utilities | Size / line height | Weight | Use |
| --- | --- | --- | --- | --- |
| Page title | `text-page-title font-bold` | 36px / 40px | 700 | Main page heading |
| Section title | `text-section-title font-semibold` | 24px / 32px | 600 | Major content sections |
| Card title | `text-card-title font-semibold` | 18px / 24px | 600 | Cards, panels, dialogs |
| Body | `text-body font-normal` | 16px / 24px | 400 | Primary readable content |
| Small/helper | `text-small font-normal` | 14px / 20px | 400 | Metadata, hints, secondary content |
| Button | `text-button font-medium` | 14px / 20px | 500 | Button labels and compact actions |

The custom `text-*` utilities are backed by CSS variables in `src/index.css`.
Use the role utilities instead of arbitrary values such as `text-[17px]` or
`leading-[23px]`. Pair a role with the semantic color utilities (`text-muted-foreground`,
`text-foreground`, etc.) as appropriate.
