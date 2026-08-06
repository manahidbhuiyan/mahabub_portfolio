"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

type HeroRoleProps = {
  roles: readonly string[];
  className?: string;
  intervalMs?: number;
};

export function HeroRole({
  roles,
  className,
  intervalMs = 2800,
}: HeroRoleProps) {
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion || roles.length <= 1) return;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % roles.length);
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [intervalMs, prefersReducedMotion, roles.length]);

  const active = roles[index] ?? roles[0] ?? "";

  if (prefersReducedMotion) {
    return (
      <p
        className={cn(
          "text-accent text-xl font-semibold tracking-tight sm:text-2xl",
          className,
        )}
      >
        {roles[0]}
      </p>
    );
  }

  return (
    <div
      className={cn(
        "relative h-[1.85em] overflow-hidden sm:h-[1.95em]",
        className,
      )}
      aria-live="polite"
      aria-atomic="true"
    >
      <AnimatePresence mode="wait">
        <motion.p
          key={active}
          className="text-accent absolute inset-x-0 top-0 text-xl font-semibold tracking-tight sm:text-2xl"
          initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -8, filter: "blur(8px)" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {active}
        </motion.p>
      </AnimatePresence>
      <span className="sr-only">Current role: {active}</span>
    </div>
  );
}
