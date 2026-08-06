"use client";

import { BREAKPOINT_QUERIES } from "@/lib/constants";
import { useMediaQuery } from "@/hooks/use-media-query";

/**
 * Semantic breakpoint helpers aligned with the design system.
 * mobile < 768 ≤ tablet < 1024 ≤ laptop < 1280 ≤ desktop < 1536 ≤ largeDesktop
 */
export function useBreakpoint() {
  const isTabletUp = useMediaQuery(BREAKPOINT_QUERIES.tablet);
  const isLaptopUp = useMediaQuery(BREAKPOINT_QUERIES.laptop);
  const isDesktopUp = useMediaQuery(BREAKPOINT_QUERIES.desktop);
  const isLargeDesktopUp = useMediaQuery(BREAKPOINT_QUERIES.largeDesktop);

  const current = isLargeDesktopUp
    ? "largeDesktop"
    : isDesktopUp
      ? "desktop"
      : isLaptopUp
        ? "laptop"
        : isTabletUp
          ? "tablet"
          : "mobile";

  return {
    current,
    isMobile: !isTabletUp,
    isTabletUp,
    isLaptopUp,
    isDesktopUp,
    isLargeDesktopUp,
  } as const;
}
