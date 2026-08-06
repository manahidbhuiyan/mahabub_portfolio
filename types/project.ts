export type ProjectCategory =
  | "Full Stack"
  | "Frontend"
  | "Backend"
  | "UI/UX"
  | "Dashboard"
  | "E-Commerce";

export type ProjectStatus = "Live" | "Case Study" | "Internal";

export type ProjectFilterId =
  | "all"
  | "full-stack"
  | "frontend"
  | "backend"
  | "react"
  | "nextjs"
  | "nodejs"
  | "uiux"
  | "dashboard";

export type ProjectGalleryItem = {
  src: string;
  label: "Screenshot";
  alt: string;
};

export type EngineeringDecision = {
  decision: string;
  reason: string;
  tradeoff: string;
};

export type ProjectMeta = {
  role: string;
  industry: string;
  teamSize: string;
  duration: string;
  platform: string;
};

export type ProjectImpactItem = {
  title: string;
  description: string;
};

export type ProjectCaseStudy = {
  overview: string;
  problem: string;
  difficulty: string;
  approach: string;
  approachWhy: string;
  outcome: string;
  responsibilities: string[];
  features: string[];
  challenges: string[];
  decisions: EngineeringDecision[];
  architecture: string[];
  architectureFlow: string[];
  performance: string[];
  lessons: string[];
  impact: ProjectImpactItem[];
};

export type PortfolioProject = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  category: ProjectCategory;
  status: ProjectStatus;
  year: number;
  featured: boolean;
  coverImage: string;
  gallery: ProjectGalleryItem[];
  liveUrl?: string;
  repoUrl?: string;
  stack: string[];
  filters: ProjectFilterId[];
  trust: string[];
  stats: { label: string; value: string }[];
  meta: ProjectMeta;
  caseStudy: ProjectCaseStudy;
};
