"use client";

import { motion } from "framer-motion";

import { AboutHighlights } from "@/components/sections/about/AboutHighlights";
import { AboutStrengths } from "@/components/sections/about/AboutStrengths";
import { aboutContent } from "@/components/sections/about/content";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export function AboutContent() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="flex flex-col gap-12 lg:gap-14">
      <header className="max-w-2xl">
        <motion.p
          className="text-label text-accent"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 10, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.45, ease }}
        >
          {aboutContent.eyebrow}
        </motion.p>

        <motion.h2
          id="about-heading"
          className="text-h1 text-text-primary mt-3 text-balance"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 14, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.05, duration: 0.5, ease }}
        >
          {aboutContent.title}
        </motion.h2>

        <motion.p
          className="text-text-secondary mt-4 max-w-xl text-base leading-relaxed text-pretty sm:text-lg"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1, duration: 0.45, ease }}
        >
          {aboutContent.introduction}
        </motion.p>
      </header>

      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease }}
      >
        <p className="text-label text-text-secondary mb-4">At a glance</p>
        <AboutHighlights />
      </motion.div>

      <div>
        <motion.p
          className="text-label text-text-secondary mb-4"
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          A little more context
        </motion.p>

        <motion.div
          className="grid gap-4 sm:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: prefersReducedMotion ? 0 : 0.08 },
            },
          }}
        >
          {aboutContent.story.map((block, index) => (
            <motion.article
              key={block.id}
              className={cn(
                "border-border/40 border-l-2 pl-4",
                index % 2 === 1 && "border-accent/50",
              )}
              variants={{
                hidden: prefersReducedMotion
                  ? { opacity: 1 }
                  : { opacity: 0, y: 14, filter: "blur(6px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: { duration: 0.45, ease },
                },
              }}
            >
              <h3 className="text-text-primary text-sm font-semibold tracking-tight">
                {block.title}
              </h3>
              <ul className="mt-3 space-y-2.5">
                {block.points.map((point) => (
                  <li
                    key={point}
                    className="text-body-sm text-text-secondary leading-relaxed"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <AboutStrengths />
    </div>
  );
}
