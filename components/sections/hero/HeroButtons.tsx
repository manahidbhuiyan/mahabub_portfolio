"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

type HeroButtonsProps = {
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
  className?: string;
};

export function HeroButtons({ primary, secondary, className }: HeroButtonsProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("flex flex-wrap items-center gap-3", className)}
      role="group"
      aria-label="Primary actions"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <Button
        nativeButton={false}
        render={<a href={primary.href} />}
        variant="accent"
        size="xl"
        className={cn(
          "shadow-glow min-w-[10.5rem] px-7 text-[0.95rem]",
          "transition-[transform,box-shadow,filter] duration-300",
          "hover:-translate-y-1 hover:brightness-110 hover:shadow-[0_0_0_1px_color-mix(in_oklch,var(--accent)_45%,transparent),0_18px_40px_color-mix(in_oklch,var(--accent)_22%,transparent)]",
          "focus-visible:ring-accent/50",
        )}
      >
        {primary.label}
        <ArrowUpRight
          data-icon="inline-end"
          className="size-4 transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
          aria-hidden
        />
      </Button>

      <Button
        nativeButton={false}
        render={<a href={secondary.href} />}
        variant="outline"
        size="lg"
        className="transition-[transform,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-accent/35"
      >
        {secondary.label}
      </Button>
    </motion.div>
  );
}
