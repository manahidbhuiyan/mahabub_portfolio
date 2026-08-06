import type { Metadata } from "next";

import { SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/constants";

type BuildMetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  type?: "website" | "article";
};

export function buildMetadata({
  title,
  description = "Full Stack Developer specializing in React, Next.js, Vue, and Node.js. Building polished, high-performance web products.",
  path = "/",
  image = "/opengraph-image",
  noIndex = false,
  type = "website",
}: BuildMetadataOptions = {}): Metadata {
  const socialTitle = title ? `${title} | ${SITE_NAME}` : SITE_TITLE;
  const url = new URL(path, SITE_URL).toString();
  const ogImage = image.startsWith("http")
    ? image
    : new URL(image, SITE_URL).toString();

  return {
    metadataBase: new URL(SITE_URL),
    title: title
      ? title
      : {
          default: SITE_TITLE,
          template: `%s | ${SITE_NAME}`,
        },
    description,
    applicationName: SITE_NAME,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    keywords: [
      "Mahabub Alam",
      "Mahabub Alam Bhuiyan",
      "Full Stack Developer",
      "Software Engineer",
      "React",
      "Next.js",
      "Vue",
      "Node.js",
      "TypeScript",
      "portfolio",
      "Dhaka",
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type,
      locale: "en_US",
      url,
      siteName: SITE_NAME,
      title: socialTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: socialTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    category: "technology",
  };
}
