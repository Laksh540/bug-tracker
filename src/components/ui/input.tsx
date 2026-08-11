import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const inputVariants = cva(
  "w-full min-w-0 rounded-lg border bg-clip-padding text-button text-foreground outline-none transition-all placeholder:text-muted-foreground file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
  {
    variants: {
      variant: {
        default: "border-input bg-transparent dark:bg-input/30",
        filled: "border-transparent bg-muted focus-visible:bg-background dark:bg-input/50",
      },
      size: {
        default: "h-8 px-2.5 py-1",
        sm: "h-7 px-2 py-1 text-small",
        lg: "h-9 px-3 py-1.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Input = React.forwardRef<
  HTMLInputElement,
  Omit<React.ComponentProps<"input">, "size"> & VariantProps<typeof inputVariants>
>(function Input({ className, type, variant, size, ...props }, ref) {
  return (
    <input
      ref={ref}
      type={type}
      data-slot="input"
      data-variant={variant}
      data-size={size}
      className={cn(inputVariants({ variant, size, className }))}
      {...props}
    />
  )
})

Input.displayName = "Input"

export { Input, inputVariants }
