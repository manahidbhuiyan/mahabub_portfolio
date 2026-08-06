"use client";

import { motion } from "framer-motion";

import type { PortfolioProject } from "@/types";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

type ProjectDecisionCardsProps = {
  project: PortfolioProject;
};

export function ProjectDecisionCards({ project }: ProjectDecisionCardsProps) {
  const prefersReducedMotion = useReducedMotion();
  const decisions = project.caseStudy.decisions;

  return (
    <section aria-labelledby="project-decisions-heading" className="space-y-8">
      <div className="max-w-3xl">
        <p className="text-label text-accent">Trade-offs</p>
        <h2
          id="project-decisions-heading"
          className="text-h2 text-text-primary mt-2"
        >
          Engineering decisions
        </h2>
        <p className="text-body text-text-secondary mt-3">
          Choices that shaped the architecture — including what we accepted in
          return.
        </p>
      </div>

      <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {decisions.map((item, index) => (
          <motion.li
            key={item.decision}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <article
              className={cn(
                "glass border-border/60 flex h-full flex-col gap-4 rounded-2xl border p-5",
                "transition-[transform,border-color] duration-300 hover:border-accent/30 hover:-translate-y-0.5",
              )}
            >
              <div>
                <p className="text-label text-accent">Decision</p>
                <h3 className="text-text-primary mt-2 text-base font-semibold tracking-tight">
                  {item.decision}
                </h3>
              </div>
              <div>
                <p className="text-label text-text-secondary">Reason</p>
                <p className="text-body-sm text-text-secondary mt-1.5 text-pretty">
                  {item.reason}
                </p>
              </div>
              <div className="border-border/50 mt-auto border-t pt-4">
                <p className="text-label text-text-secondary">Trade-off</p>
                <p className="text-body-sm text-text-secondary mt-1.5 text-pretty">
                  {item.tradeoff}
                </p>
              </div>
            </article>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
