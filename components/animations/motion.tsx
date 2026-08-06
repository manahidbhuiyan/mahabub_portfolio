"use client";

import {
  motion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import type { ReactNode } from "react";

import {
  fadeUpVariants,
  fadeVariants,
  pageTransitionVariants,
  reducedMotionVariants,
  scaleVariants,
  slideInLeftVariants,
  slideInRightVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from "@/components/animations/variants";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

type MotionBaseProps = {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  once?: boolean;
  amount?: number;
} & Omit<HTMLMotionProps<"div">, "children" | "variants">;

function useSafeVariants(variants: Variants) {
  const prefersReducedMotion = useReducedMotion();
  return prefersReducedMotion ? reducedMotionVariants : variants;
}

function Reveal({
  children,
  className,
  variants = fadeUpVariants,
  delay = 0,
  once = true,
  amount = 0.25,
  ...props
}: MotionBaseProps) {
  const safeVariants = useSafeVariants(variants);

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once, amount }}
      variants={safeVariants}
      transition={delay ? { delay } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn(props: MotionBaseProps) {
  return <Reveal variants={fadeVariants} {...props} />;
}

export function FadeUp(props: MotionBaseProps) {
  return <Reveal variants={fadeUpVariants} {...props} />;
}

export function SlideIn({
  direction = "left",
  ...props
}: MotionBaseProps & { direction?: "left" | "right" }) {
  return (
    <Reveal
      variants={direction === "left" ? slideInLeftVariants : slideInRightVariants}
      {...props}
    />
  );
}

export function ScaleIn(props: MotionBaseProps) {
  return <Reveal variants={scaleVariants} {...props} />;
}

export function Stagger({
  children,
  className,
  once = true,
  amount = 0.2,
  ...props
}: MotionBaseProps) {
  const safeVariants = useSafeVariants(staggerContainerVariants);

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={safeVariants}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  ...props
}: MotionBaseProps) {
  const safeVariants = useSafeVariants(staggerItemVariants);

  return (
    <motion.div className={className} variants={safeVariants} {...props}>
      {children}
    </motion.div>
  );
}

export function PageTransition({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const safeVariants = useSafeVariants(pageTransitionVariants);

  return (
    <motion.div
      className={cn("w-full", className)}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={safeVariants}
    >
      {children}
    </motion.div>
  );
}

export function HoverLift({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      variants={{
        rest: { y: 0, scale: 1 },
        hover: { y: -4, scale: 1.01 },
        tap: { scale: 0.985 },
      }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
