"use client";

import { useState } from "react";

import { EngineeringHighlights } from "@/components/sections/projects/EngineeringHighlights";
import { ProjectGrid } from "@/components/sections/projects/ProjectGrid";
import { ProjectsFilter } from "@/components/sections/projects/ProjectsFilter";
import { ProjectsHeader } from "@/components/sections/projects/ProjectsHeader";
import { Container } from "@/components/ui/container";
import { filterProjects, getFeaturedProjects } from "@/data/projects";
import type { ProjectFilterId } from "@/types";

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilterId>("all");
  const visible = filterProjects(getFeaturedProjects(), filter);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="section-space relative scroll-mt-24"
    >
      <Container size="xl" className="space-y-12 lg:space-y-14">
        <ProjectsHeader />
        <ProjectsFilter active={filter} onChange={setFilter} />
        <ProjectGrid projects={visible} filterId={filter} />
        <EngineeringHighlights />
      </Container>
    </section>
  );
}
