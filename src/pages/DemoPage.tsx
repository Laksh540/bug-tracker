import { ArrowRight, Check, LoaderCircle, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function DemoPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8">
      <header className="flex flex-col gap-2">
        <p className="text-small font-medium text-app-text-secondary">
          Component preview
        </p>
        <h1 className="text-page-title font-bold text-app-text-primary">
          Button demo
        </h1>
        <p className="text-body text-app-text-secondary">
          A selection of button variants, sizes, states, and icon combinations.
        </p>
      </header>

      <section className="flex flex-col gap-4 rounded-lg border border-app-border-secondary bg-app-surface p-6">
        <h2 className="text-card-title font-semibold text-app-text-primary">
          Variants
        </h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-app-border-secondary bg-app-surface p-6">
        <h2 className="text-card-title font-semibold text-app-text-primary">
          Sizes
        </h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="xs">Extra small</Button>
          <Button size="sm">Small</Button>
          <Button>Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon" aria-label="Add item">
            <Plus />
          </Button>
        </div>
      </section>

      <section className="flex flex-col gap-4 rounded-lg border border-app-border-secondary bg-app-surface p-6">
        <h2 className="text-card-title font-semibold text-app-text-primary">
          States and icons
        </h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button disabled>Disabled</Button>
          <Button loading>Loading</Button>
          <Button>
            <Check />
            Saved
          </Button>
          <Button variant="outline">
            Continue
            <ArrowRight />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Loading action">
            <LoaderCircle className="animate-spin" />
          </Button>
        </div>
      </section>
    </div>
  );
}
