"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

import type { ExperienceRole } from "@/components/sections/experience/content";
import { formatExperienceRange } from "@/components/sections/experience/content";
import { Tag } from "@/components/ui/tag";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

type ExperienceCardProps = {
  role: ExperienceRole;
  active: boolean;
  index: number;
};

export function ExperienceCard({ role, active, index }: ExperienceCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      id={`experience-role-${role.id}`}
      role="region"
      aria-label={`${role.role} at ${role.company}`}
      initial={
        prefersReducedMotion ? false : { opacity: 0, y: 18, filter: "blur(6px)" }
      }
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        delay: prefersReducedMotion ? 0 : index * 0.04,
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        "relative overflow-hidden rounded-3xl border p-6 sm:p-8",
        "transition-[border-color,box-shadow,background-color] duration-400",
        active
          ? "border-accent/35 bg-surface/50 shadow-glow"
          : "border-border/55 bg-surface/25",
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 transition-opacity duration-500",
          active ? "opacity-100" : "opacity-0",
        )}
        aria-hidden
        style={{
          background:
            "radial-gradient(90% 70% at 100% 0%, color-mix(in oklch, var(--accent) 12%, transparent), transparent 55%)",
        }}
      />

      <div className="relative space-y-8">
        <header className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-label text-accent">{role.company}</p>
            {role.status === "current" ? (
              <span className="bg-accent/15 text-accent rounded-full px-2 py-0.5 text-[0.65rem] font-medium tracking-wide uppercase">
                Now
              </span>
            ) : null}
          </div>
          <h3 className="text-h3 text-text-primary text-balance">{role.role}</h3>
          <p className="text-body-sm text-text-secondary">
            {formatExperienceRange(role.startDate, role.endDate)} ·{" "}
            {role.employmentType} · {role.location}
          </p>
          <p className="text-body text-text-secondary max-w-2xl text-pretty leading-relaxed">
            {role.summary}
          </p>
        </header>

        <section aria-labelledby={`${role.id}-impact`}>
          <div className="mb-4 flex items-center gap-2">
            <span className="bg-accent/15 text-accent flex size-8 items-center justify-center rounded-lg">
              <Sparkles className="size-3.5" aria-hidden />
            </span>
            <h4
              id={`${role.id}-impact`}
              className="text-text-primary text-sm font-semibold tracking-tight"
            >
              Impact
            </h4>
          </div>
          <ul className="grid gap-3 sm:grid-cols-3">
            {role.contributions.map((item, i) => (
              <li
                key={item}
                className={cn(
                  "rounded-2xl border p-4",
                  "border-accent/20 bg-accent/5",
                )}
              >
                <span className="text-accent font-mono text-xs font-medium">
                  0{i + 1}
                </span>
                <p className="text-text-primary mt-2 text-sm leading-snug font-medium text-pretty">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <div className="grid gap-8 lg:grid-cols-5">
          <section className="lg:col-span-3" aria-labelledby={`${role.id}-scope`}>
            <h4
              id={`${role.id}-scope`}
              className="text-text-secondary text-xs font-medium tracking-wide uppercase"
            >
              Day-to-day scope
            </h4>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {role.responsibilities.map((item) => (
                <li
                  key={item}
                  className="border-border/45 bg-background/25 text-body-sm text-text-secondary flex items-start gap-2.5 rounded-xl border px-3 py-2.5 leading-snug"
                >
                  <span
                    className="bg-text-secondary/40 mt-1.5 size-1 shrink-0 rounded-full"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="lg:col-span-2" aria-labelledby={`${role.id}-learned`}>
            <h4
              id={`${role.id}-learned`}
              className="text-text-secondary text-xs font-medium tracking-wide uppercase"
            >
              What this chapter taught me
            </h4>
            <ul className="mt-4 space-y-3">
              {role.learnings.map((item) => (
                <li
                  key={item}
                  className="border-border/50 border-l-2 pl-3.5"
                >
                  <p className="text-body-sm text-text-secondary leading-relaxed text-pretty italic">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section aria-labelledby={`${role.id}-stack`}>
          <div className="mb-3 flex items-center justify-between gap-3">
            <h4
              id={`${role.id}-stack`}
              className="text-text-secondary text-xs font-medium tracking-wide uppercase"
            >
              Stack
            </h4>
            <span className="text-text-secondary/70 inline-flex items-center gap-1 text-xs">
              {role.stack.length} tools
              <ArrowUpRight className="size-3" aria-hidden />
            </span>
          </div>
          <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
            {role.stack.map((tech) => (
              <li key={tech}>
                <Tag variant="accent">{tech}</Tag>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </motion.article>
  );
}
