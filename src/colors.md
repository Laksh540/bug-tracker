# BugTracker color system

Task 22 defines the semantic palette for the application. Components should
use semantic roles rather than introducing one-off hex values.

| Role | Token | Value | Usage |
| --- | --- | --- | --- |
| Primary | `--color-app-primary` / `bg-app-brand` | `#6d28d9` | Main actions, links, selected controls |
| Primary hover | `--color-app-primary-hover` / `bg-app-brand-hover` | `#5b21b6` | Hover and pressed primary controls |
| Secondary | `--color-app-secondary` | `#f5f3ff` | Secondary actions and subtle emphasis |
| Background | `--color-app-background` | `#fafafa` | Application/page background |
| Surface/Card | `--color-app-surface` | `#ffffff` | Cards, panels, dialogs, inputs |
| Border primary | `--color-app-border-primary` / `border-app-border-primary` | `#d1d5db` | Strong dividers and prominent card borders |
| Border secondary | `--color-app-border-secondary` / `border-app-border-secondary` | `#e5e7eb` | Default card and input borders |
| Border tertiary | `--color-app-border-tertiary` / `border-app-border-tertiary` | `#f3f4f6` | Subtle separators and low-emphasis boundaries |
| Text primary | `--color-app-text-primary` / `text-app-text-primary` | `#111827` | Headings and main content |
| Text secondary | `--color-app-text-secondary` / `text-app-text-secondary` | `#6b7280` | Metadata, helper text, muted content |

The tokens are declared in `src/index.css` and exposed through Tailwind's
theme. Prefer `bg-app-brand`, `bg-app-surface`, `text-app-text-primary`, and
`text-app-text-secondary` in new components. Dark-mode values override the same
semantic tokens in the `.dark` block, so no component markup changes are needed.
