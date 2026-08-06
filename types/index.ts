export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "twitter" | "email" | "dribbble";
};

export type {
  EngineeringDecision,
  PortfolioProject,
  ProjectCaseStudy,
  ProjectCategory,
  ProjectFilterId,
  ProjectGalleryItem,
  ProjectImpactItem,
  ProjectMeta,
  ProjectStatus,
} from "@/types/project";

export type SiteAuthor = {
  name: string;
  fullName: string;
  role: string;
  email: string;
  phone?: string;
  location?: string;
  degree?: string;
};
