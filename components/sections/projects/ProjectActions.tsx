"use client";

import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { socialIcons } from "@/components/ui/social-icons";
import type { PortfolioProject } from "@/types";
import { cn } from "@/lib/utils";

type ProjectActionsProps = {
  project: PortfolioProject;
  className?: string;
  size?: "sm" | "default" | "lg";
};

export function ProjectActions({
  project,
  className,
  size = "default",
}: ProjectActionsProps) {
  const GitHubIcon = socialIcons.github;

  return (
    <div className={cn("flex flex-wrap gap-2.5", className)}>
      <Button
        nativeButton={false}
        render={<Link href={`/projects/${project.slug}`} />}
        variant="accent"
        size={size}
        className="transition-transform duration-300 hover:-translate-y-0.5"
      >
        Case Study
        <ArrowUpRight data-icon="inline-end" />
      </Button>

      {project.liveUrl ? (
        <Button
          nativeButton={false}
          render={
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            />
          }
          variant="outline"
          size={size}
          className="transition-transform duration-300 hover:-translate-y-0.5"
        >
          Live Demo
          <ExternalLink data-icon="inline-end" className="size-3.5" />
        </Button>
      ) : null}

      {project.repoUrl ? (
        <Button
          nativeButton={false}
          render={
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
            />
          }
          variant="ghost"
          size={size}
          className="transition-transform duration-300 hover:-translate-y-0.5"
        >
          GitHub
          <GitHubIcon data-icon="inline-end" className="size-3.5" />
        </Button>
      ) : null}
    </div>
  );
}
