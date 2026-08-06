"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { pageTransitionVariants, reducedMotionVariants } from "@/components/animations/variants";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

type PageTransitionProps = {
  children: ReactNode;
  className?: string;
};

export function PageTransition({ children, className }: PageTransitionProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("w-full", className)}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={
        prefersReducedMotion ? reducedMotionVariants : pageTransitionVariants
      }
    >
      {children}
    </motion.div>
  );
}
