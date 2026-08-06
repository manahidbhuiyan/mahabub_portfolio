"use client";

import { motion } from "framer-motion";

import type { SkillItem } from "@/components/sections/skills/content";
import { SkillGlyph } from "@/components/sections/skills/skill-icons";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

type SkillCardProps = {
  skill: SkillItem;
};

export function SkillCard({ skill }: SkillCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      layout={false}
      className={cn(
        "group relative h-full overflow-hidden rounded-2xl border p-5",
        "border-border/55 bg-surface/35 backdrop-blur-sm",
        "shadow-[inset_0_1px_0_0_color-mix(in_oklch,white_6%,transparent)]",
        "transition-[transform,border-color,box-shadow,background-color] duration-300 ease-out",
        "hover:border-accent/40 hover:bg-surface/55",
        "hover:-translate-y-1 hover:shadow-md hover:shadow-glow",
        "active:translate-y-0 active:scale-[0.985]",
        "focus-within:ring-ring/60 focus-within:ring-2",
      )}
      whileHover={prefersReducedMotion ? undefined : { scale: 1.01 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
        style={{
          background:
            "radial-gradient(120% 90% at 0% 0%, color-mix(in oklch, var(--accent) 16%, transparent), transparent 58%)",
        }}
      />
      <div
        className="bg-accent/0 group-hover:bg-accent/80 absolute inset-x-5 bottom-0 h-px transition-colors duration-300"
        aria-hidden
      />

      <div className="relative flex items-center gap-4">
        <span
          className={cn(
            "text-accent border-accent/20 bg-accent/10 flex size-11 shrink-0 items-center justify-center rounded-xl border",
            "shadow-[inset_0_1px_0_0_color-mix(in_oklch,white_8%,transparent)]",
            "transition-[transform,background-color,border-color,box-shadow] duration-300",
            "group-hover:border-accent/35 group-hover:bg-accent/15",
            "group-hover:scale-105 group-hover:shadow-sm",
          )}
        >
          <SkillGlyph name={skill.icon} className="size-5 shrink-0" />
        </span>

        <div className="min-w-0 flex-1">
          <h3 className="text-text-primary text-[0.95rem] leading-none font-semibold tracking-tight">
            {skill.name}
          </h3>
          <p className="text-body-sm text-text-secondary mt-2 leading-relaxed text-pretty">
            {skill.description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}
