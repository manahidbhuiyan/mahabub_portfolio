import type { Transition, Variants } from "framer-motion";

import { duration, easing } from "@/lib/design-system";

const standardTransition: Transition = {
  duration: duration.normal,
  ease: easing.standard,
};

const entranceTransition: Transition = {
  duration: duration.slow,
  ease: easing.entrance,
};

const pageTransition: Transition = {
  duration: duration.page,
  ease: easing.standard,
};

/** Instant variants when prefers-reduced-motion is on */
export const reducedMotionVariants: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
  exit: { opacity: 1 },
};

export const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: standardTransition,
  },
  exit: {
    opacity: 0,
    transition: { duration: duration.fast, ease: easing.exit },
  },
};

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: entranceTransition,
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: duration.fast, ease: easing.exit },
  },
};

export const fadeDownVariants: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: entranceTransition,
  },
  exit: {
    opacity: 0,
    y: 12,
    transition: { duration: duration.fast, ease: easing.exit },
  },
};

export const slideInLeftVariants: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: entranceTransition,
  },
  exit: {
    opacity: 0,
    x: -16,
    transition: { duration: duration.fast, ease: easing.exit },
  },
};

export const slideInRightVariants: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: entranceTransition,
  },
  exit: {
    opacity: 0,
    x: 16,
    transition: { duration: duration.fast, ease: easing.exit },
  },
};

export const scaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: entranceTransition,
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: { duration: duration.fast, ease: easing.exit },
  },
};

export const pageTransitionVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: pageTransition,
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: duration.fast, ease: easing.exit },
  },
};

export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: entranceTransition,
  },
};

/** Shared cubic for section reveals — prefer this over local literals */
export const MOTION_EASE = easing.standard;

export const hoverLift = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -4,
    scale: 1.01,
    transition: { duration: duration.fast, ease: easing.standard },
  },
  tap: { scale: 0.985 },
} as const;

export const hoverScale = {
  rest: { scale: 1 },
  hover: {
    scale: 1.03,
    transition: { duration: duration.fast, ease: easing.standard },
  },
  tap: { scale: 0.97 },
} as const;

export const hoverGlow = {
  rest: { opacity: 0.85 },
  hover: {
    opacity: 1,
    transition: { duration: duration.fast, ease: easing.standard },
  },
} as const;

export const motionTransitions = {
  standard: standardTransition,
  entrance: entranceTransition,
  page: pageTransition,
} as const;
