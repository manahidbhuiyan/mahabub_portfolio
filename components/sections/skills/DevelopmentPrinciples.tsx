"use client";

import { motion } from "framer-motion";

import { skillsContent } from "@/components/sections/skills/content";
import { SkillGlyph } from "@/components/sections/skills/skill-icons";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

export function DevelopmentPrinciples() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div>
      <motion.h3
        className="text-h3 text-text-primary text-center"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        Development Principles
      </motion.h3>

      <motion.ul
        className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: prefersReducedMotion ? 0 : 0.06 },
          },
        }}
        aria-label="Development principles"
      >
        {skillsContent.principles.map((principle) => (
          <motion.li
            key={principle.id}
            variants={{
              hidden: prefersReducedMotion
                ? { opacity: 1 }
                : { opacity: 0, y: 16, filter: "blur(6px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <article
              className={cn(
                "border-border/55 bg-surface/30 group h-full rounded-2xl border p-4",
                "transition-[transform,border-color,background-color] duration-300",
                "hover:border-accent/30 hover:bg-surface/50 hover:-translate-y-0.5",
              )}
            >
              <span className="bg-muted text-accent mb-3 inline-flex size-9 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-105">
                <SkillGlyph name={principle.icon} className="size-4 shrink-0" />
              </span>
              <h4 className="text-text-primary text-sm font-semibold tracking-tight">
                {principle.title}
              </h4>
              <p className="text-body-sm text-text-secondary mt-1.5 leading-relaxed">
                {principle.description}
              </p>
            </article>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
