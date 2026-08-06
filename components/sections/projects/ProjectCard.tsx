"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { ProjectActions } from "@/components/sections/projects/ProjectActions";
import { Tag } from "@/components/ui/tag";
import type { PortfolioProject } from "@/types";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: PortfolioProject;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const imageLeft = index % 2 === 0;

  return (
    <motion.article
      className="border-border/60 grid items-center gap-8 border-b py-10 last:border-b-0 md:gap-10 md:py-14 lg:grid-cols-12"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={cn(
          "lg:col-span-6",
          !imageLeft && "lg:order-2",
        )}
      >
        <Link
          href={`/projects/${project.slug}`}
          className="group border-border/50 relative block overflow-hidden rounded-3xl border shadow-lg focus-visible:ring-ring focus-visible:ring-2 focus-visible:outline-none"
          aria-label={`Open case study: ${project.title}`}
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={project.coverImage}
              alt={`${project.title} cover`}
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent opacity-80"
              aria-hidden
            />
          </div>
        </Link>
      </div>

      <div className={cn("lg:col-span-6", !imageLeft && "lg:order-1")}>
        <div className="flex flex-wrap items-center gap-2">
          <Tag variant="accent">{project.category}</Tag>
          <Tag variant="muted">{project.status}</Tag>
          <span className="text-text-secondary text-xs">{project.year}</span>
        </div>

        <h3 className="text-h3 text-text-primary mt-4">
          <Link
            href={`/projects/${project.slug}`}
            className="hover:text-accent transition-colors focus-visible:ring-ring rounded-sm focus-visible:ring-2 focus-visible:outline-none"
          >
            {project.title}
          </Link>
        </h3>

        <p className="text-body text-text-secondary mt-3 max-w-xl text-pretty">
          {project.summary}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technology stack">
          {project.stack.slice(0, 6).map((tech) => (
            <li key={tech}>
              <Tag>{tech}</Tag>
            </li>
          ))}
        </ul>

        <dl className="mt-6 grid grid-cols-3 gap-3 max-w-md">
          {project.stats.map((stat) => (
            <div key={stat.label} className="border-border/50 bg-surface/40 rounded-xl border p-3">
              <dt className="text-text-secondary text-[0.65rem] tracking-wide uppercase">
                {stat.label}
              </dt>
              <dd className="text-text-primary mt-1 text-sm font-semibold">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>

        <ul className="text-text-secondary mt-5 flex flex-wrap gap-x-4 gap-y-1 text-xs">
          {project.trust.map((item) => (
            <li key={item} className="flex items-center gap-1.5">
              <span className="bg-accent size-1 rounded-full" aria-hidden />
              {item}
            </li>
          ))}
        </ul>

        <ProjectActions project={project} className="mt-7" />
      </div>
    </motion.article>
  );
}
