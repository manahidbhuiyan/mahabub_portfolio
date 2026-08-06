"use client";

import dynamic from "next/dynamic";
import type { ReactNode } from "react";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { PageTransition } from "@/components/layout/page-transition";

const BackgroundEffects = dynamic(
  () =>
    import("@/components/layout/background-effects").then(
      (mod) => mod.BackgroundEffects,
    ),
  { ssr: false },
);

const ScrollProgress = dynamic(
  () =>
    import("@/components/layout/scroll-progress").then(
      (mod) => mod.ScrollProgress,
    ),
  { ssr: false },
);

const ScrollToTop = dynamic(
  () =>
    import("@/components/layout/scroll-to-top").then((mod) => mod.ScrollToTop),
  { ssr: false },
);

type SiteShellProps = {
  children: ReactNode;
};

/**
 * Global application chrome: nav, footer, scroll UX, atmosphere.
 */
export function SiteShell({ children }: SiteShellProps) {
  return (
    <>
      <BackgroundEffects />
      <ScrollProgress />
      <Navbar />
      <PageTransition>
        <div className="relative z-10 flex min-h-dvh flex-col">
          {children}
          <Footer />
        </div>
      </PageTransition>
      <ScrollToTop />
    </>
  );
}
