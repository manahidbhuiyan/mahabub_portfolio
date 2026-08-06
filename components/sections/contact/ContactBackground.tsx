"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

type ContactBackgroundProps = {
  className?: string;
};

const PARTICLE_COUNT = 14;

export function ContactBackground({ className }: ContactBackgroundProps) {
  const prefersReducedMotion = useReducedMotion();

  const particles = useMemo(
    () =>
      Array.from({ length: PARTICLE_COUNT }, (_, index) => ({
        id: index,
        left: `${8 + ((index * 17) % 84)}%`,
        top: `${12 + ((index * 23) % 76)}%`,
        size: 2 + (index % 3),
        delay: (index % 7) * 0.45,
        duration: 6 + (index % 5),
      })),
    [],
  );

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className,
      )}
      aria-hidden
    >
      <div
        className={cn(
          "absolute -top-24 left-1/4 h-[22rem] w-[22rem] rounded-full",
          "bg-[radial-gradient(circle,color-mix(in_oklch,var(--accent)_22%,transparent),transparent_70%)]",
          !prefersReducedMotion && "animate-[pulse_12s_ease-in-out_infinite]",
        )}
      />
      <div
        className={cn(
          "absolute top-[35%] -right-16 h-[18rem] w-[18rem] rounded-full",
          "bg-[radial-gradient(circle,color-mix(in_oklch,var(--accent)_14%,transparent),transparent_72%)]",
          !prefersReducedMotion &&
            "animate-[pulse_14s_ease-in-out_infinite_reverse]",
        )}
      />
      <div
        className="absolute bottom-0 left-1/2 h-[16rem] w-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,color-mix(in_oklch,var(--foreground)_5%,transparent),transparent_70%)]"
      />

      {!prefersReducedMotion
        ? particles.map((particle) => (
            <motion.span
              key={particle.id}
              className="bg-accent/40 absolute rounded-full"
              style={{
                left: particle.left,
                top: particle.top,
                width: particle.size,
                height: particle.size,
              }}
              animate={{
                opacity: [0.15, 0.55, 0.15],
                y: [0, -10, 0],
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))
        : null}
    </div>
  );
}
