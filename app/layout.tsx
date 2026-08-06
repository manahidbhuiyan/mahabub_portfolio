import type { Metadata, Viewport } from "next";

import { SiteShell } from "@/components/layout";
import { AppProviders } from "@/components/providers";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/data/site";
import { fontDisplay, fontMono, fontSans } from "@/lib/fonts";
import { buildMetadata } from "@/lib/metadata";
import {
  personJsonLd,
  softwareDeveloperJsonLd,
  websiteJsonLd,
} from "@/lib/seo/json-ld";

import "./globals.css";

export const metadata: Metadata = {
  ...buildMetadata({
    description: siteConfig.description,
  }),
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf7" },
    { media: "(prefers-color-scheme: dark)", color: "#141820" },
  ],
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontDisplay.variable} ${fontMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground min-h-dvh font-sans antialiased">
        <JsonLd data={[personJsonLd(), websiteJsonLd(), softwareDeveloperJsonLd()]} />
        <AppProviders>
          <a
            href="#main-content"
            className="bg-primary text-primary-foreground focus-visible:ring-ring sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:top-4 focus-visible:left-4 focus-visible:z-50 focus-visible:rounded-md focus-visible:px-4 focus-visible:py-2 focus-visible:ring-2"
          >
            Skip to content
          </a>
          <SiteShell>{children}</SiteShell>
        </AppProviders>
      </body>
    </html>
  );
}
