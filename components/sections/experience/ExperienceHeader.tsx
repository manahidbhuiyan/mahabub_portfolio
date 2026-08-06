"use client";

import { motion } from "framer-motion";

import { experienceContent } from "@/components/sections/experience/content";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function ExperienceHeader() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <header className="mx-auto max-w-3xl text-center">
      <motion.p
        className="text-label text-accent"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 12, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, ease }}
      >
        {experienceContent.eyebrow}
      </motion.p>

      <motion.h2
        id="experience-heading"
        className="text-h1 text-text-primary mt-3 text-balance"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 16, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.06, duration: 0.55, ease }}
      >
        {experienceContent.title}
      </motion.h2>

      <motion.p
        className="text-body-lg text-text-secondary mx-auto mt-4 max-w-2xl"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.12, duration: 0.5, ease }}
      >
        {experienceContent.description}
      </motion.p>
    </header>
  );
}
