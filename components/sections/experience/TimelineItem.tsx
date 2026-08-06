"use client";

import { motion } from "framer-motion";

import type { ExperienceRole } from "@/components/sections/experience/content";
import { formatExperienceRange } from "@/components/sections/experience/content";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

type TimelineItemProps = {
  role: ExperienceRole;
  active: boolean;
  index: number;
  onSelect: () => void;
};

export function TimelineItem({
  role,
  active,
  index,
  onSelect,
}: TimelineItemProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.li
      initial={
        prefersReducedMotion ? false : { opacity: 0, x: -14, filter: "blur(6px)" }
      }
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        delay: index * 0.05,
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <button
        type="button"
        onClick={onSelect}
        aria-current={active ? "true" : undefined}
        aria-controls={`experience-role-${role.id}`}
        className={cn(
          "group relative w-full rounded-2xl border p-4 text-left",
          "transition-[transform,border-color,background-color,box-shadow] duration-300",
          "focus-visible:ring-ring focus-visible:ring-2 focus-visible:outline-none",
          "active:scale-[0.985]",
          active
            ? "border-accent/40 bg-accent/10 shadow-glow"
            : "border-border/55 bg-surface/25 hover:border-border hover:bg-surface/45",
        )}
      >
        <span
          className={cn(
            "absolute top-5 -left-[1.4rem] size-3 rounded-full border-2 transition-all duration-300",
            active
              ? "border-accent bg-accent scale-110 shadow-[0_0_0_4px_color-mix(in_oklch,var(--accent)_28%,transparent)]"
              : "border-border bg-background group-hover:border-accent/55",
          )}
          aria-hidden
        />

        {active ? (
          <motion.span
            layoutId="experience-active-glow"
            className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(120%_80%_at_0%_0%,color-mix(in_oklch,var(--accent)_14%,transparent),transparent_60%)]"
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
            aria-hidden
          />
        ) : null}

        <div className="relative">
          <div className="flex flex-wrap items-center gap-2">
            <p
              className={cn(
                "text-sm font-semibold tracking-tight transition-colors",
                active ? "text-text-primary" : "text-text-primary/90",
              )}
            >
              {role.company}
            </p>
            <span
              className={cn(
                "rounded-full px-2 py-0.5 text-[0.65rem] font-medium tracking-wide uppercase",
                role.status === "current"
                  ? "bg-accent/15 text-accent"
                  : "bg-muted text-muted-foreground",
              )}
            >
              {role.status === "current" ? "Current" : "Past"}
            </span>
          </div>

          <p className="text-text-secondary mt-1 text-sm">{role.role}</p>
          <p className="text-text-secondary/80 mt-2 text-xs">
            {formatExperienceRange(role.startDate, role.endDate)} ·{" "}
            {role.employmentType}
          </p>
          <p className="text-text-secondary/70 mt-1 text-xs">{role.location}</p>
        </div>
      </button>
    </motion.li>
  );
}
