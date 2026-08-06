"use client";

import { motion } from "framer-motion";

import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

/**
 * Hero-scoped atmosphere — soft aurora, grid, radial light.
 * Uses design-system tokens (graphite + olive). No heavy 3D.
 */
export function HeroBackground() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Soft aurora washes */}
      <div className="absolute inset-0 bg-[radial-gradient(90%_60%_at_12%_18%,color-mix(in_oklch,var(--accent)_16%,transparent),transparent_58%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_88%_22%,color-mix(in_oklch,var(--foreground)_7%,transparent),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(50%_40%_at_50%_100%,color-mix(in_oklch,var(--accent)_10%,transparent),transparent_60%)]" />

      {/* Low-opacity grid */}
      <div
        className="absolute inset-0 opacity-[0.028] dark:opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 75% 65% at 50% 40%, black 10%, transparent 70%)",
        }}
      />

      {/* Subtle particles — GPU-friendly, skipped when reduced motion */}
      {!prefersReducedMotion
        ? Array.from({ length: 8 }).map((_, index) => (
            <motion.span
              key={index}
              className={cn(
                "bg-accent/40 absolute size-1 rounded-full",
                index % 2 === 0 ? "opacity-40" : "opacity-25",
              )}
              style={{
                left: `${12 + index * 10}%`,
                top: `${18 + ((index * 13) % 55)}%`,
              }}
              animate={{
                y: [0, -12, 0],
                opacity: [0.2, 0.45, 0.2],
              }}
              transition={{
                duration: 5 + index * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.35,
              }}
            />
          ))
        : null}
    </div>
  );
}
