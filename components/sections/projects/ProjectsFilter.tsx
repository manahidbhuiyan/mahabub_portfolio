"use client";

import { motion } from "framer-motion";

import { projectFilters } from "@/data/projects";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import type { ProjectFilterId } from "@/types";
import { cn } from "@/lib/utils";

type ProjectsFilterProps = {
  active: ProjectFilterId;
  onChange: (id: ProjectFilterId) => void;
};

export function ProjectsFilter({ active, onChange }: ProjectsFilterProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      role="tablist"
      aria-label="Filter projects"
      className="border-border/55 bg-surface/35 mx-auto flex w-full max-w-4xl flex-wrap items-center justify-center gap-1 rounded-2xl border p-1.5"
    >
      {projectFilters.map((filter) => {
        const isActive = filter.id === active;

        return (
          <button
            key={filter.id}
            type="button"
            role="tab"
            id={`project-tab-${filter.id}`}
            aria-selected={isActive}
            aria-controls="projects-panel"
            tabIndex={isActive ? 0 : -1}
            className={cn(
              "relative rounded-xl px-3.5 py-2 text-sm font-medium transition-colors",
              "focus-visible:ring-ring focus-visible:ring-2 focus-visible:outline-none",
              "active:scale-[0.98]",
              isActive
                ? "text-text-primary"
                : "text-text-secondary hover:text-text-primary",
            )}
            onClick={() => onChange(filter.id)}
            onKeyDown={(event) => {
              const ids = projectFilters.map((item) => item.id);
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
                layoutId="project-filter-pill"
                className="bg-background border-border/70 absolute inset-0 rounded-xl border shadow-sm"
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 380, damping: 32 }
                }
              />
            ) : null}
            <span className="relative z-10">{filter.label}</span>
          </button>
        );
      })}
    </div>
  );
}
