"use client";

import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

type BackgroundEffectsProps = {
  className?: string;
};

/**
 * Atmospheric background layer — graphite field + soft olive wash.
 * Decorative only; hidden from assistive tech.
 */
export function BackgroundEffects({ className }: BackgroundEffectsProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
        className,
      )}
      aria-hidden
    >
      <div className="bg-hero-gradient absolute inset-0" />

      <div
        className={cn(
          "absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full",
          "bg-[radial-gradient(circle,color-mix(in_oklch,var(--accent)_18%,transparent),transparent_68%)]",
          !prefersReducedMotion && "animate-[pulse_10s_ease-in-out_infinite]",
        )}
      />

      <div
        className={cn(
          "absolute top-[40%] -right-24 h-[22rem] w-[22rem] rounded-full",
          "bg-[radial-gradient(circle,color-mix(in_oklch,var(--foreground)_6%,transparent),transparent_70%)]",
        )}
      />

      <div
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse at center, black 20%, transparent 75%)",
        }}
      />
    </div>
  );
}
