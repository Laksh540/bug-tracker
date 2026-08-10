import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const statuses = [
    [
      "Resolved",
      "bg-status-success-bg text-status-success-text border-status-success-border",
    ],
    [
      "Needs attention",
      "bg-status-warning-bg text-status-warning-text border-status-warning-border",
    ],
    [
      "Blocked",
      "bg-status-error-bg text-status-error-text border-status-error-border",
    ],
    [
      "Information",
      "bg-status-info-bg text-status-info-text border-status-info-border",
    ],
    [
      "Open",
      "bg-status-open-bg text-status-open-text border-status-open-border",
    ],
    [
      "In progress",
      "bg-status-in-progress-bg text-status-in-progress-text border-status-in-progress-border",
    ],
    [
      "Closed",
      "bg-status-closed-bg text-status-closed-text border-status-closed-border",
    ],
  ] as const;

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8">
      <header className="flex flex-col gap-2">
        <p className="text-small font-medium text-app-text-secondary">
          Design system preview
        </p>
        <h1 className="text-page-title font-bold text-app-text-primary">
          Dashboard
        </h1>
        <p className="text-body text-app-text-secondary">
          A quick visual check for spacing, typography, semantic colors, and
          status utilities.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          ["Total issues", "128", "text-app-text-primary"],
          ["Open", "42", "text-status-open-text"],
          ["In progress", "31", "text-status-in-progress-text"],
          ["Resolved", "55", "text-status-success-text"],
        ].map(([label, value, valueClass]) => (
          <article
            key={label}
            className="flex flex-col gap-3 rounded-lg border border-app-border-secondary bg-app-surface p-6 shadow-sm"
          >
            <p className="text-small text-app-text-secondary">{label}</p>
            <p className={`text-section-title font-semibold ${valueClass}`}>
              {value}
            </p>
          </article>
        ))}
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-app-border-secondary bg-app-surface p-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-section-title font-semibold text-app-text-primary">
            Status colors
          </h2>
          <p className="text-small text-app-text-secondary">
            Each badge combines a status background, text, and border token.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {statuses.map(([label, statusClasses]) => (
            <span
              key={label}
              className={`rounded-full border px-3 py-1 text-button font-medium ${statusClasses}`}
            >
              {label}
            </span>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="flex flex-col gap-4 rounded-lg border border-app-border-primary bg-app-secondary p-6">
          <h2 className="text-card-title font-semibold text-app-text-primary">
            Spacing scale
          </h2>
          <div className="flex flex-col gap-2 text-small text-app-text-secondary">
            <p className="rounded bg-app-surface p-1">p-1 · 4px</p>
            <p className="rounded bg-app-surface p-2">p-2 · 8px</p>
            <p className="rounded bg-app-surface p-3">p-3 · 12px</p>
            <p className="rounded bg-app-surface p-4">p-4 · 16px</p>
            <p className="rounded bg-app-surface p-6">p-6 · 24px</p>
          </div>
        </article>

        <article className="flex flex-col gap-4 rounded-lg border border-app-border-tertiary bg-app-surface p-6">
          <h2 className="text-card-title font-semibold text-app-text-primary">
            Typography roles
          </h2>
          <div className="flex flex-col gap-2 text-app-text-primary">
            <p className="text-page-title font-bold">Page title</p>
            <p className="text-section-title font-semibold">Section title</p>
            <p className="text-card-title font-semibold">Card title</p>
            <p className="text-body">Body text</p>
            <p className="text-small text-app-text-secondary">Helper text</p>
            <Button className="w-fit">
              Button text
            </Button>
          </div>
        </article>
      </section>
    </div>
  );
}
