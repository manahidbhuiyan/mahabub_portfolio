"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

import { experienceContent } from "@/components/sections/experience/content";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

export function Achievements() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div>
      <motion.div
        className="mb-8 flex items-center gap-3"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="bg-accent/15 text-accent flex size-10 items-center justify-center rounded-xl">
          <Trophy className="size-4" aria-hidden />
        </span>
        <h3 className="text-h3 text-text-primary">Key Achievements</h3>
      </motion.div>

      <motion.ul
        className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: prefersReducedMotion ? 0 : 0.06 },
          },
        }}
        aria-label="Key achievements"
      >
        {experienceContent.achievements.map((item) => (
          <motion.li
            key={item.id}
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
                "glass border-border/60 h-full rounded-2xl border p-5",
                "transition-[transform,border-color] duration-300",
                "hover:border-accent/30 hover:-translate-y-0.5",
              )}
            >
              <h4 className="text-text-primary text-sm font-semibold">
                {item.title}
              </h4>
              <p className="text-body-sm text-text-secondary mt-2">
                {item.description}
              </p>
            </article>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
