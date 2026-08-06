"use client";

import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

import type { PortfolioProject } from "@/types";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type ProjectArchitectureProps = {
  project: PortfolioProject;
};

export function ProjectArchitecture({ project }: ProjectArchitectureProps) {
  const prefersReducedMotion = useReducedMotion();
  const flow = project.caseStudy.architectureFlow;
  const notes = project.caseStudy.architecture;

  return (
    <section
      aria-labelledby="project-architecture-heading"
      className="border-border/60 bg-surface/30 grid gap-10 overflow-hidden rounded-3xl border p-6 sm:p-8 lg:grid-cols-12 lg:gap-12"
    >
      <div className="lg:col-span-5">
        <p className="text-label text-accent">System shape</p>
        <h2
          id="project-architecture-heading"
          className="text-h2 text-text-primary mt-2"
        >
          Technical architecture
        </h2>
        <ul className="mt-6 space-y-3">
          {notes.map((note) => (
            <li key={note} className="text-body-sm text-text-secondary flex gap-2.5">
              <span className="bg-accent mt-2 size-1.5 shrink-0 rounded-full" aria-hidden />
              <span>{note}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:col-span-7">
        <ol
          className="mx-auto flex max-w-sm flex-col items-center gap-2"
          aria-label="Architecture flow"
        >
          {flow.map((node, index) => (
            <li key={`${node}-${index}`} className="flex w-full flex-col items-center gap-2">
              <motion.div
                className="border-accent/25 bg-background text-text-primary w-full rounded-2xl border px-5 py-4 text-center text-sm font-semibold tracking-tight shadow-sm"
                initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ delay: index * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {node}
              </motion.div>
              {index < flow.length - 1 ? (
                <motion.span
                  aria-hidden
                  className="text-accent"
                  initial={prefersReducedMotion ? false : { opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 + 0.1, duration: 0.3 }}
                >
                  <ArrowDown className="size-4" />
                </motion.span>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
