import { Separator } from "@base-ui/react/separator";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const dividerVariants = cva("shrink-0 border-none bg-border", {
  variants: {
    orientation: {
      horizontal: "h-px w-full",
      vertical: "h-full w-px self-stretch",
    },
    tone: {
      default: "bg-border",
      muted: "bg-border/60",
      strong: "bg-foreground/20",
      accent: "bg-accent",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
    tone: "default",
  },
});

function Divider({
  className,
  orientation = "horizontal",
  tone,
  ...props
}: ComponentProps<typeof Separator> & VariantProps<typeof dividerVariants>) {
  return (
    <Separator
      data-slot="divider"
      orientation={orientation ?? "horizontal"}
      className={cn(
        dividerVariants({ orientation, tone }),
        tone === "accent" &&
          orientation === "horizontal" &&
          "h-px w-12",
        tone === "accent" &&
          orientation === "vertical" &&
          "h-12 w-px",
        className,
      )}
      {...props}
    />
  );
}

export { Divider, dividerVariants };
