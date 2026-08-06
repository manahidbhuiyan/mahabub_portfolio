"use client";

import { motion } from "framer-motion";

import type { SkillCategoryId } from "@/components/sections/skills/content";
import { skillsContent } from "@/components/sections/skills/content";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

type SkillCategoriesProps = {
  active: SkillCategoryId;
  onChange: (id: SkillCategoryId) => void;
};

export function SkillCategories({ active, onChange }: SkillCategoriesProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      role="tablist"
      aria-label="Technology categories"
      className="border-border/55 bg-surface/35 mx-auto flex w-full max-w-3xl flex-wrap items-center justify-center gap-1 rounded-2xl border p-1.5 shadow-[inset_0_1px_0_0_color-mix(in_oklch,white_5%,transparent)]"
    >
      {skillsContent.categories.map((category) => {
        const isActive = category.id === active;

        return (
          <button
            key={category.id}
            type="button"
            role="tab"
            id={`skill-tab-${category.id}`}
            aria-selected={isActive}
            aria-controls="skill-panel"
            tabIndex={isActive ? 0 : -1}
            className={cn(
              "relative rounded-xl px-3.5 py-2.5 text-sm font-medium",
              "transition-colors duration-200",
              "focus-visible:ring-ring focus-visible:ring-2 focus-visible:outline-none",
              "active:scale-[0.98]",
              isActive
                ? "text-text-primary"
                : "text-text-secondary hover:text-text-primary",
            )}
            onClick={() => onChange(category.id)}
            onKeyDown={(event) => {
              const ids = skillsContent.categories.map((item) => item.id);
              const index = ids.indexOf(active);
              if (event.key === "ArrowRight") {
                event.preventDefault();
                onChange(ids[(index + 1) % ids.length] ?? active);
              }
              if (event.key === "ArrowLeft") {
                event.preventDefault();
                onChange(ids[(index - 1 + ids.length) % ids.length] ?? active);
              }
            }}
          >
            {isActive ? (
              <motion.span
                layoutId="skill-category-pill"
                className="bg-background border-border/70 absolute inset-0 rounded-xl border shadow-sm"
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 420, damping: 34 }
                }
              />
            ) : null}
            <span className="relative z-10">{category.label}</span>
          </button>
        );
      })}
    </div>
  );
}
