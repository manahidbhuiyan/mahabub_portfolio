"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { ProjectActions } from "@/components/sections/projects/ProjectActions";
import { Tag } from "@/components/ui/tag";
import type { PortfolioProject } from "@/types";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type ProjectHeroProps = {
  project: PortfolioProject;
};

export function ProjectHero({ project }: ProjectHeroProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <header className="space-y-8">
      <motion.div
        className="border-border/60 relative aspect-[16/9] overflow-hidden rounded-3xl border shadow-lg"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 18, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={project.coverImage}
          alt={`${project.title} cover`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 56rem"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent"
          aria-hidden
        />
      </motion.div>

      <motion.div
        className="space-y-5"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex flex-wrap gap-2">
          <Tag variant="accent">{project.category}</Tag>
          <Tag variant="muted">{project.status}</Tag>
          <Tag>{project.year}</Tag>
        </div>

        <h1 className="text-display-lg text-text-primary max-w-4xl text-balance">
          {project.title}
        </h1>

        <p className="text-body-lg text-text-secondary max-w-3xl text-pretty">
          {project.description}
        </p>

        <ProjectActions project={project} size="lg" />
      </motion.div>

      <motion.dl
        className="border-border/60 bg-surface/40 grid gap-px overflow-hidden rounded-2xl border sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
        aria-label="Project information"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.16, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {[
          { label: "Role", value: project.meta.role },
          { label: "Industry", value: project.meta.industry },
          { label: "Team Size", value: project.meta.teamSize },
          { label: "Duration", value: project.meta.duration },
          { label: "Platform", value: project.meta.platform },
          { label: "Status", value: project.status },
        ].map((item) => (
          <div key={item.label} className="bg-background/80 px-4 py-4 sm:px-5">
            <dt className="text-label text-text-secondary">{item.label}</dt>
            <dd className="text-text-primary mt-2 text-sm font-medium text-pretty">
              {item.value}
            </dd>
          </div>
        ))}
      </motion.dl>
    </header>
  );
}
