"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

import { useReducedMotion } from "@/hooks/use-reduced-motion";

type SmoothScrollProviderProps = {
  children: ReactNode;
};

/**
 * Lenis smooth scrolling.
 * Disabled when the user prefers reduced motion.
 */
export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    let frameId = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    frameId = requestAnimationFrame(raf);
    document.documentElement.classList.add("lenis", "lenis-smooth");

    return () => {
      cancelAnimationFrame(frameId);
      document.documentElement.classList.remove("lenis", "lenis-smooth");
      lenis.destroy();
    };
  }, [prefersReducedMotion]);

  return children;
}
