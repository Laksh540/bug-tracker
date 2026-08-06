# BugTracker spacing system

Task 20 establishes a shared spacing scale for all UI work. The scale is based
on a 4px unit and is available as CSS custom properties in `src/index.css`.

| Token | Size | Recommended use |
| --- | ---: | --- |
| `--space-0` | 0px | Reset or flush layouts |
| `--space-1` | 2px | Tiny visual adjustments |
| `--space-2` | 4px | Icon/text alignment and compact controls |
| `--space-3` | 8px | Inline gaps, button icon gaps, dense table cells |
| `--space-4` | 12px | Form fields and compact card padding |
| `--space-5` | 16px | Default control padding and content gaps |
| `--space-6` | 24px | Card padding and section spacing |
| `--space-7` | 32px | Page padding and major content groups |
| `--space-8` | 48px | Large section separation |
| `--space-9` | 64px | Page-level or hero-level separation |

## Tailwind conventions

Use the mapped utilities in new components: `p-4` for 16px, `gap-6` for 24px,
`space-y-4` for 16px vertical rhythm, and `p-8` for 32px page padding. For
the 2px and 4px steps, use `p-0.5` and `p-1` respectively.

Avoid arbitrary values such as `p-[13px]` or `gap-[22px]`. If a layout needs a
new recurring value, update the scale and this guide first so the change is
available consistently across the application.
