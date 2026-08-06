import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const iconWrapperVariants = cva(
  "inline-flex shrink-0 items-center justify-center [&_svg]:size-[1em]",
  {
    variants: {
      variant: {
        muted: "bg-muted text-muted-foreground",
        accent: "bg-accent/15 text-accent",
        surface: "surface border-border border text-foreground",
        glass: "glass text-foreground",
        ghost: "bg-transparent text-foreground",
      },
      size: {
        sm: "size-8 rounded-lg text-sm",
        md: "size-10 rounded-xl text-base",
        lg: "size-12 rounded-2xl text-lg",
        xl: "size-14 rounded-2xl text-xl",
      },
    },
    defaultVariants: {
      variant: "muted",
      size: "md",
    },
  },
);

function IconWrapper({
  className,
  variant,
  size,
  ...props
}: ComponentProps<"span"> & VariantProps<typeof iconWrapperVariants>) {
  return (
    <span
      data-slot="icon-wrapper"
      className={cn(iconWrapperVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { IconWrapper, iconWrapperVariants };
