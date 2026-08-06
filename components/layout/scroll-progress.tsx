"use client";

import { motion, useScroll, useSpring } from "framer-motion";

import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function ScrollProgress() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: prefersReducedMotion ? 1000 : 140,
    damping: prefersReducedMotion ? 100 : 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="bg-accent fixed inset-x-0 top-0 z-50 h-[2px] origin-left"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
