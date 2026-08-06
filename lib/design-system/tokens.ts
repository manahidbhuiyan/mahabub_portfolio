/**
 * Design-system tokens (TypeScript mirror of CSS variables).
 * Prefer CSS variables in components; use these for JS/motion/layout math.
 */

export const breakpoints = {
  mobile: 0,
  tablet: 768,
  laptop: 1024,
  desktop: 1280,
  largeDesktop: 1536,
} as const;

export const breakpointQueries = {
  mobile: `(max-width: ${breakpoints.tablet - 1}px)`,
  tablet: `(min-width: ${breakpoints.tablet}px)`,
  laptop: `(min-width: ${breakpoints.laptop}px)`,
  desktop: `(min-width: ${breakpoints.desktop}px)`,
  largeDesktop: `(min-width: ${breakpoints.largeDesktop}px)`,
} as const;

/** 4px base scale */
export const spacing = {
  0: "0px",
  px: "1px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  section: "clamp(4rem, 8vw, 8rem)",
  gutter: "clamp(1rem, 4vw, 2rem)",
} as const;

export const radii = {
  none: "0",
  sm: "0.375rem",
  md: "0.5rem",
  lg: "0.75rem",
  xl: "1rem",
  "2xl": "1.25rem",
  "3xl": "1.75rem",
  full: "9999px",
} as const;

export const typography = {
  display: {
    "2xl": "clamp(2.75rem, 6vw, 4.5rem)",
    xl: "clamp(2.25rem, 4.5vw, 3.75rem)",
    lg: "clamp(1.875rem, 3.5vw, 3rem)",
  },
  heading: {
    h1: "clamp(2rem, 3.5vw, 2.75rem)",
    h2: "clamp(1.625rem, 2.8vw, 2.25rem)",
    h3: "clamp(1.375rem, 2.2vw, 1.75rem)",
    h4: "clamp(1.125rem, 1.6vw, 1.375rem)",
  },
  body: {
    xl: "1.25rem",
    lg: "1.125rem",
    md: "1rem",
    sm: "0.875rem",
    xs: "0.75rem",
  },
  label: {
    lg: "0.875rem",
    md: "0.8125rem",
    sm: "0.75rem",
  },
} as const;

export const duration = {
  instant: 0.1,
  fast: 0.2,
  normal: 0.35,
  slow: 0.5,
  slower: 0.75,
  page: 0.45,
} as const;

export const easing = {
  standard: [0.22, 1, 0.36, 1] as const,
  entrance: [0.16, 1, 0.3, 1] as const,
  exit: [0.7, 0, 0.84, 0] as const,
  emphasize: [0.2, 0, 0, 1] as const,
};

export const zIndex = {
  base: 0,
  raised: 10,
  dropdown: 30,
  sticky: 40,
  overlay: 50,
  modal: 60,
  toast: 70,
  tooltip: 80,
} as const;

export type Breakpoint = keyof typeof breakpoints;
export type SpacingToken = keyof typeof spacing;
export type RadiusToken = keyof typeof radii;
