"use client";

import { REDUCED_MOTION_QUERY } from "@/lib/constants";
import { useMediaQuery } from "@/hooks/use-media-query";

/** Respects the user's prefers-reduced-motion setting. */
export function useReducedMotion() {
  return useMediaQuery(REDUCED_MOTION_QUERY);
}
