import type { PortfolioProject } from "@/types";
import { SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/constants";
import { siteConfig } from "@/data/site";

function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: siteConfig.author.fullName,
    alternateName: SITE_NAME,
    url: SITE_URL,
    image: absoluteUrl("/images/profile.jpg"),
    email: siteConfig.author.email,
    telephone: siteConfig.author.phone,
    jobTitle: "Full Stack Software Engineer",
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
    sameAs: siteConfig.social
      .filter((item) => item.href.startsWith("http"))
      .map((item) => item.href),
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Vue",
      "Full Stack Development",
      "Web Performance",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_TITLE,
    url: SITE_URL,
    description: siteConfig.description,
    publisher: { "@id": `${SITE_URL}/#person` },
    inLanguage: "en-US",
  };
}

export function softwareDeveloperJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE_URL}/#profile`,
    url: SITE_URL,
    name: SITE_TITLE,
    mainEntity: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: siteConfig.author.fullName,
      jobTitle: "Software Developer",
      url: SITE_URL,
    },
  };
}

export function projectJsonLd(project: PortfolioProject) {
  const url = absoluteUrl(`/projects/${project.slug}`);
  const image = absoluteUrl(project.coverImage);

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${url}#project`,
    name: project.title,
    description: project.summary,
    url,
    image,
    creator: { "@id": `${SITE_URL}/#person` },
    dateCreated: String(project.year),
    keywords: project.stack.join(", "),
    about: project.category,
  };
}

export function breadcrumbJsonLd(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
