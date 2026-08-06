"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

import { aboutContent } from "@/components/sections/about/content";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function AboutStrengths() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <h3 className="text-h4 text-text-primary">How I work</h3>
      <motion.ul
        className="mt-5 grid gap-3 sm:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: prefersReducedMotion ? 0 : 0.05 },
          },
        }}
        aria-label="Key strengths"
      >
        {aboutContent.strengths.map((strength) => (
          <motion.li
            key={strength}
            className="border-border/50 bg-surface/40 flex items-center gap-3 rounded-xl border px-4 py-3"
            variants={{
              hidden: prefersReducedMotion
                ? { opacity: 1 }
                : { opacity: 0, x: -8, filter: "blur(4px)" },
              visible: {
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
                transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <span
              className="bg-accent/15 text-accent flex size-6 shrink-0 items-center justify-center rounded-full"
              aria-hidden
            >
              <Check className="size-3.5 stroke-[2.5]" />
            </span>
            <span className="text-text-primary text-sm font-medium">
              {strength}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
