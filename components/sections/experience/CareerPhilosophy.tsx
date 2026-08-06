"use client";

import { motion } from "framer-motion";

import { experienceContent } from "@/components/sections/experience/content";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

export function CareerPhilosophy() {
  const prefersReducedMotion = useReducedMotion();
  const { philosophy } = experienceContent;

  return (
    <motion.blockquote
      className={cn(
        "relative overflow-hidden rounded-3xl border px-6 py-10 text-center sm:px-10",
        "border-accent/20 bg-accent/5 shadow-glow",
      )}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="pointer-events-none absolute -top-20 left-1/2 size-56 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_oklch,var(--accent)_22%,transparent),transparent_70%)]"
        aria-hidden
      />

      <p className="text-label text-accent relative">Career Philosophy</p>
      <p className="font-display text-text-primary relative mx-auto mt-4 max-w-3xl text-xl leading-relaxed font-medium tracking-tight text-balance sm:text-2xl">
        “{philosophy.quote}”
      </p>
      <footer className="text-text-secondary relative mt-6 text-sm">
        — {philosophy.attribution}
      </footer>
    </motion.blockquote>
  );
}
