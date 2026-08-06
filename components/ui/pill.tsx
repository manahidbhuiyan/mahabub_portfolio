import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const pillVariants = cva(
  "inline-flex items-center justify-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium tracking-wide whitespace-nowrap transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent bg-secondary text-secondary-foreground",
        accent: "border-transparent bg-accent text-accent-foreground",
        outline: "border-border bg-transparent text-foreground",
        ghost: "border-transparent bg-muted/70 text-muted-foreground",
        success: "border-transparent bg-success/15 text-success",
      },
      interactive: {
        true: "hover:bg-muted cursor-pointer",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      interactive: false,
    },
  },
);

function Pill({
  className,
  variant,
  interactive,
  ...props
}: ComponentProps<"span"> & VariantProps<typeof pillVariants>) {
  return (
    <span
      data-slot="pill"
      className={cn(pillVariants({ variant, interactive }), className)}
      {...props}
    />
  );
}

export { Pill, pillVariants };
