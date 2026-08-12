import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const textareaVariants = cva(
  "flex field-sizing-content w-full min-w-0 resize-y rounded-lg border bg-clip-padding text-button text-foreground outline-none transition-all placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
  {
    variants: {
      variant: {
        default: "border-input bg-transparent dark:bg-input/30",
        filled: "border-transparent bg-muted focus-visible:bg-background dark:bg-input/50",
      },
      size: {
        default: "min-h-16 px-2.5 py-2",
        sm: "min-h-14 px-2 py-1.5 text-small",
        lg: "min-h-24 px-3 py-2.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea"> & VariantProps<typeof textareaVariants>
>(function Textarea({ className, variant, size, ...props }, ref) {
  return (
    <textarea
      ref={ref}
      data-slot="textarea"
      data-variant={variant}
      data-size={size}
      className={cn(textareaVariants({ variant, size, className }))}
      {...props}
    />
  )
})

Textarea.displayName = "Textarea"

export { Textarea, textareaVariants }
