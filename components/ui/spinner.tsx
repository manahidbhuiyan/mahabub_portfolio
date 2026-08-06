import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const spinnerVariants = cva(
  "inline-block animate-spin rounded-full border-2 border-current border-r-transparent",
  {
    variants: {
      size: {
        sm: "size-4",
        md: "size-5",
        lg: "size-8",
        xl: "size-10",
      },
      tone: {
        default: "text-foreground",
        muted: "text-muted-foreground",
        accent: "text-accent",
        primary: "text-primary",
      },
    },
    defaultVariants: {
      size: "md",
      tone: "default",
    },
  },
);

function Spinner({
  className,
  size,
  tone,
  label = "Loading",
  ...props
}: ComponentProps<"span"> &
  VariantProps<typeof spinnerVariants> & {
    label?: string;
  }) {
  return (
    <span
      data-slot="spinner"
      role="status"
      aria-live="polite"
      className={cn("inline-flex items-center justify-center", className)}
      {...props}
    >
      <span className={cn(spinnerVariants({ size, tone }))} aria-hidden />
      <span className="sr-only">{label}</span>
    </span>
  );
}

export { Spinner, spinnerVariants };
