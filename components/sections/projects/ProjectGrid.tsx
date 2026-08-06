"use client";

import { AnimatePresence, motion } from "framer-motion";

import { ProjectCard } from "@/components/sections/projects/ProjectCard";
import type { PortfolioProject } from "@/types";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type ProjectGridProps = {
  projects: PortfolioProject[];
  filterId: string;
};

export function ProjectGrid({ projects, filterId }: ProjectGridProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      id="projects-panel"
      role="tabpanel"
      aria-labelledby={`project-tab-${filterId}`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={projects.map((project) => project.id).join("-") || "empty"}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {projects.length ? (
            <div>
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          ) : (
            <p className="text-body text-text-secondary py-16 text-center">
              No projects match this filter yet.
            </p>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
