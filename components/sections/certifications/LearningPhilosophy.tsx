"use client";

import { motion } from "framer-motion";

import { certificationsContent } from "@/components/sections/certifications/content";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

export function LearningPhilosophy() {
  const prefersReducedMotion = useReducedMotion();
  const { philosophy } = certificationsContent;

  return (
    <motion.blockquote
      className={cn(
        "relative overflow-hidden rounded-3xl border px-6 py-8 text-center sm:px-10 sm:py-10",
        "border-accent/20 bg-accent/5",
      )}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="pointer-events-none absolute -top-16 left-1/2 size-40 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_oklch,var(--accent)_20%,transparent),transparent_70%)]"
        aria-hidden
      />
      <p className="text-label text-accent relative">Learning Philosophy</p>
      <p className="font-display text-text-primary relative mx-auto mt-3 max-w-2xl text-lg leading-relaxed font-medium tracking-tight text-balance sm:text-xl">
        “{philosophy.quote}”
      </p>
      <footer className="text-text-secondary relative mt-5 text-sm">
        — {philosophy.attribution}
      </footer>
    </motion.blockquote>
  );
}
