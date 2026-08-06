"use client";

import { AnimatePresence, motion } from "framer-motion";

import { SkillCard } from "@/components/sections/skills/SkillCard";
import type { SkillCategoryId } from "@/components/sections/skills/content";
import { skillsContent } from "@/components/sections/skills/content";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type SkillGridProps = {
  category: SkillCategoryId;
  direction: number;
};

export function SkillGrid({ category, direction }: SkillGridProps) {
  const prefersReducedMotion = useReducedMotion();
  const skills = skillsContent.skills.filter(
    (skill) => skill.category === category,
  );
  const activeLabel =
    skillsContent.categories.find((item) => item.id === category)?.label ??
    "Skills";

  return (
    <div
      role="tabpanel"
      id="skill-panel"
      aria-labelledby={`skill-tab-${category}`}
      className="relative min-h-[12rem]"
    >
      <p className="text-label text-text-secondary mb-4 text-center sm:text-left">
        {activeLabel}
        <span className="text-text-secondary/70"> · {skills.length} tools</span>
      </p>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.ul
          key={category}
          custom={direction}
          className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
          initial="enter"
          animate="center"
          exit="exit"
          variants={{
            enter: (dir: number) =>
              prefersReducedMotion
                ? { opacity: 0 }
                : {
                    opacity: 0,
                    x: dir > 0 ? 28 : -28,
                    filter: "blur(6px)",
                  },
            center: {
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
              transition: {
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
                staggerChildren: prefersReducedMotion ? 0 : 0.045,
                delayChildren: prefersReducedMotion ? 0 : 0.04,
              },
            },
            exit: (dir: number) =>
              prefersReducedMotion
                ? { opacity: 0 }
                : {
                    opacity: 0,
                    x: dir < 0 ? 20 : -20,
                    filter: "blur(4px)",
                    transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
                  },
          }}
        >
          {skills.map((skill) => (
            <motion.li
              key={skill.id}
              variants={{
                enter: prefersReducedMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 12 },
                center: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                },
                exit: { opacity: 0 },
              }}
            >
              <SkillCard skill={skill} />
            </motion.li>
          ))}
        </motion.ul>
      </AnimatePresence>
    </div>
  );
}
