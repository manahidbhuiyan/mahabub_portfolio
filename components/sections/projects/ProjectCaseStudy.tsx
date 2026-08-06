"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

import { ProjectActions } from "@/components/sections/projects/ProjectActions";
import { ProjectArchitecture } from "@/components/sections/projects/detail/ProjectArchitecture";
import { ProjectDecisionCards } from "@/components/sections/projects/detail/ProjectDecisionCards";
import { ProjectHero } from "@/components/sections/projects/detail/ProjectHero";
import { ProjectImpact } from "@/components/sections/projects/detail/ProjectImpact";
import { ProjectNav } from "@/components/sections/projects/detail/ProjectNav";
import { ProjectStory } from "@/components/sections/projects/detail/ProjectStory";
import { ProjectGallery } from "@/components/sections/projects/ProjectGallery";
import { Tag } from "@/components/ui/tag";
import type { PortfolioProject } from "@/types";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type ProjectCaseStudyProps = {
  project: PortfolioProject;
  previous: PortfolioProject | null;
  next: PortfolioProject | null;
};

export function ProjectCaseStudy({
  project,
  previous,
  next,
}: ProjectCaseStudyProps) {
  const prefersReducedMotion = useReducedMotion();
  const { caseStudy } = project;

  return (
    <div className="space-y-16 lg:space-y-20">
      <ProjectHero project={project} />
      <ProjectStory project={project} />

      <SplitChecklist
        title="Responsibilities & features"
        leftTitle="My responsibilities"
        leftItems={caseStudy.responsibilities}
        rightTitle="Key features"
        rightItems={caseStudy.features}
        prefersReducedMotion={prefersReducedMotion}
      />

      <ProjectDecisionCards project={project} />
      <ProjectArchitecture project={project} />

      <motion.section
        aria-labelledby="project-stack-heading"
        className="space-y-5"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45 }}
      >
        <h2 id="project-stack-heading" className="text-h2 text-text-primary">
          Technology stack
        </h2>
        <ul className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li key={tech}>
              <Tag variant="accent">{tech}</Tag>
            </li>
          ))}
        </ul>
        <ul className="text-body-sm text-text-secondary mt-4 max-w-3xl space-y-2">
          {caseStudy.performance.map((item) => (
            <li key={item} className="flex gap-2.5">
              <span className="bg-accent mt-2 size-1.5 shrink-0 rounded-full" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.section>

      <ProjectGallery project={project} />
      <ProjectImpact project={project} />

      <motion.div
        className="border-border/60 bg-accent/5 rounded-3xl border p-6 sm:p-8"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45 }}
      >
        <h2 className="text-h2 text-text-primary">Explore the live product</h2>
        <p className="text-body-sm text-text-secondary mt-2 max-w-xl">
          Open the deployment, or continue to another case study below.
        </p>
        <ProjectActions project={project} className="mt-5" />
      </motion.div>

      <ProjectNav previous={previous} next={next} />
    </div>
  );
}

function SplitChecklist({
  title,
  leftTitle,
  leftItems,
  rightTitle,
  rightItems,
  prefersReducedMotion,
}: {
  title: string;
  leftTitle: string;
  leftItems: string[];
  rightTitle: string;
  rightItems: string[];
  prefersReducedMotion: boolean | null;
}) {
  return (
    <motion.section
      aria-labelledby="project-responsibilities-heading"
      className="space-y-6"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2
        id="project-responsibilities-heading"
        className="text-h2 text-text-primary"
      >
        {title}
      </h2>
      <div className="grid gap-8 lg:grid-cols-2">
        <ChecklistCard title={leftTitle} items={leftItems} />
        <ChecklistCard title={rightTitle} items={rightItems} tone="accent" />
      </div>
    </motion.section>
  );
}

function ChecklistCard({
  title,
  items,
  tone = "default",
}: {
  title: string;
  items: string[];
  tone?: "default" | "accent";
}) {
  return (
    <div
      className={
        tone === "accent"
          ? "border-accent/20 bg-accent/5 rounded-3xl border p-6"
          : "glass border-border/60 rounded-3xl border p-6"
      }
    >
      <h3 className="text-h4 text-text-primary">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5">
            <span
              className="bg-accent/15 text-accent mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full"
              aria-hidden
            >
              <Check className="size-3 stroke-[2.5]" />
            </span>
            <span className="text-body-sm text-text-secondary">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
