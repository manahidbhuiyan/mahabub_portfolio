import { breakpoints, breakpointQueries } from "@/lib/design-system/tokens";

export const SITE_NAME = "Mahabub Alam";
export const SITE_TITLE = "Mahabub Alam — Full Stack Developer";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/** Semantic responsive breakpoints — mobile → large desktop */
export const BREAKPOINTS = breakpoints;

export const BREAKPOINT_QUERIES = breakpointQueries;

/** Tailwind-aligned pixel map (legacy alias) */
export const TAILWIND_BREAKPOINTS = {
  sm: 640,
  md: breakpoints.tablet,
  lg: breakpoints.laptop,
  xl: breakpoints.desktop,
  "2xl": breakpoints.largeDesktop,
} as const;

export const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export const THEME_STORAGE_KEY = "portfolio-theme";
