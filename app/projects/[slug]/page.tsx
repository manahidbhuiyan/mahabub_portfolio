import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProjectCaseStudy } from "@/components/sections/projects";
import { JsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/ui/container";
import {
  getAdjacentProjects,
  getAllProjectSlugs,
  getProjectBySlug,
} from "@/data/projects";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, projectJsonLd } from "@/lib/seo/json-ld";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return buildMetadata({ title: "Project not found", noIndex: true });
  }

  return buildMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${project.slug}`,
    image: project.coverImage,
    type: "article",
  });
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const { previous, next } = getAdjacentProjects(slug);

  return (
    <main id="main-content" className="pt-24 pb-20">
      <JsonLd
        data={[
          projectJsonLd(project),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/#projects" },
            { name: project.title, path: `/projects/${project.slug}` },
          ]),
        ]}
      />

      <Container size="lg" className="space-y-10">
        <nav aria-label="Breadcrumb">
          <ol className="text-body-sm text-text-secondary flex flex-wrap items-center gap-2">
            <li>
              <Link
                href="/#projects"
                className="hover:text-text-primary focus-visible:ring-ring rounded-sm transition-colors focus-visible:ring-2 focus-visible:outline-none"
              >
                Projects
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-text-primary" aria-current="page">
              {project.title}
            </li>
          </ol>
        </nav>

        <ProjectCaseStudy
          project={project}
          previous={previous}
          next={next}
        />
      </Container>
    </main>
  );
}
