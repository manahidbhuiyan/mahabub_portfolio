"use client";

import { motion } from "framer-motion";

import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

type HeroBadgeProps = {
  label: string;
  className?: string;
};

export function HeroBadge({ label, className }: HeroBadgeProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(
        "border-border/70 bg-surface/50 inline-flex items-center gap-2.5 rounded-full border px-3.5 py-1.5 backdrop-blur-md",
        "transition-[border-color,transform,background-color] duration-300",
        "hover:border-accent/35 hover:bg-accent/5",
        className,
      )}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 10, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      role="status"
      aria-label={label}
    >
      <span className="relative flex size-2" aria-hidden>
        <span
          className={cn(
            "bg-accent absolute inset-0 rounded-full opacity-60",
            !prefersReducedMotion && "animate-ping",
          )}
        />
        <span className="bg-accent relative size-2 rounded-full" />
      </span>
      <span className="text-text-secondary text-xs font-medium tracking-wide sm:text-[0.8125rem]">
        {label}
      </span>
    </motion.div>
  );
}
