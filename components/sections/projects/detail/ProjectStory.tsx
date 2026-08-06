"use client";

import { motion } from "framer-motion";

import type { PortfolioProject } from "@/types";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

type ProjectStoryProps = {
  project: PortfolioProject;
};

export function ProjectStory({ project }: ProjectStoryProps) {
  const prefersReducedMotion = useReducedMotion();
  const { caseStudy } = project;

  const steps = [
    { id: "problem", label: "Problem", body: caseStudy.problem },
    { id: "difficulty", label: "Why it was difficult", body: caseStudy.difficulty },
    { id: "approach", label: "Approach", body: caseStudy.approach },
    { id: "why", label: "Why this approach", body: caseStudy.approachWhy },
    { id: "outcome", label: "Outcome", body: caseStudy.outcome },
    {
      id: "learned",
      label: "What I learned",
      body: caseStudy.lessons.join(" "),
    },
  ];

  return (
    <section aria-labelledby="project-story-heading" className="space-y-8">
      <div className="max-w-3xl">
        <p className="text-label text-accent">Case narrative</p>
        <h2 id="project-story-heading" className="text-h2 text-text-primary mt-2">
          Engineering story
        </h2>
        <p className="text-body text-text-secondary mt-3 text-pretty">
          {caseStudy.overview}
        </p>
      </div>

      <ol className="relative space-y-0">
        <div
          className="bg-border absolute top-3 bottom-3 left-[0.55rem] w-px md:left-[0.7rem]"
          aria-hidden
        />
        {steps.map((step, index) => (
          <motion.li
            key={step.id}
            className="relative grid gap-3 py-5 pl-8 md:grid-cols-12 md:gap-8 md:pl-12"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: index * 0.04, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <span
              className={cn(
                "border-background absolute top-7 left-0 size-3 rounded-full border-2 md:top-8",
                index === 0 ? "bg-accent" : "bg-muted-foreground/50",
              )}
              aria-hidden
            />
            <p className="text-label text-accent md:col-span-4">{step.label}</p>
            <p className="text-body text-text-secondary md:col-span-8 text-pretty">
              {step.body}
            </p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
