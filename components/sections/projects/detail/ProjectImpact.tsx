"use client";

import { motion } from "framer-motion";

import type { PortfolioProject } from "@/types";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

type ProjectImpactProps = {
  project: PortfolioProject;
};

export function ProjectImpact({ project }: ProjectImpactProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section aria-labelledby="project-impact-heading" className="space-y-8">
      <div className="max-w-3xl">
        <p className="text-label text-accent">Outcome</p>
        <h2 id="project-impact-heading" className="text-h2 text-text-primary mt-2">
          Business impact
        </h2>
        <p className="text-body text-text-secondary mt-3">
          Practical results across experience, maintainability, scale, and value —
          without invented metrics.
        </p>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2">
        {project.caseStudy.impact.map((item, index) => (
          <motion.li
            key={item.title}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 14, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: index * 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <article
              className={cn(
                "border-border/60 h-full rounded-2xl border p-5",
                index % 2 === 0 ? "bg-accent/5" : "glass",
              )}
            >
              <h3 className="text-text-primary text-base font-semibold">
                {item.title}
              </h3>
              <p className="text-body-sm text-text-secondary mt-2 text-pretty">
                {item.description}
              </p>
            </article>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
