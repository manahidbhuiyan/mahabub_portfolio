"use client";

import { Compass } from "lucide-react";
import { motion } from "framer-motion";

import { skillsContent } from "@/components/sections/skills/content";
import { Pill } from "@/components/ui/pill";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

export function CurrentFocus() {
  const prefersReducedMotion = useReducedMotion();
  const { focus } = skillsContent;

  return (
    <motion.article
      className={cn(
        "relative overflow-hidden rounded-3xl border p-6 sm:p-8",
        "border-accent/25 bg-accent/5 shadow-glow",
      )}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="pointer-events-none absolute -top-16 -right-10 size-48 rounded-full bg-[radial-gradient(circle,color-mix(in_oklch,var(--accent)_28%,transparent),transparent_70%)]"
        aria-hidden
      />

      <div className="relative flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <p className="text-label text-accent mb-3 inline-flex items-center gap-2">
            <span className="bg-accent/15 flex size-9 items-center justify-center rounded-xl">
              <Compass className="size-4" aria-hidden />
            </span>
            Featured
          </p>
          <h3 className="text-h3 text-text-primary">{focus.title}</h3>
          <p className="text-body text-text-secondary mt-2">{focus.description}</p>
        </div>

        <ul className="flex flex-wrap gap-2" aria-label="Current focus topics">
          {focus.items.map((item) => (
            <li key={item}>
              <Pill variant="outline" className="border-accent/30 bg-background/40">
                {item}
              </Pill>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
