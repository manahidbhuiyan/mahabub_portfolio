"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { heroContent } from "@/components/sections/hero/content";
import { Tag } from "@/components/ui/tag";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

export function HeroVisual() {
  const prefersReducedMotion = useReducedMotion();
  const { visual } = heroContent;

  return (
    <motion.div
      className="relative mx-auto w-full max-w-md lg:mx-0 lg:ml-auto lg:max-w-lg 2xl:max-w-xl"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 22, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.26, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="group/visual relative"
        animate={prefersReducedMotion ? undefined : { y: [0, -6, 0] }}
        transition={
          prefersReducedMotion
            ? undefined
            : { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }
      >
        {/* Premium layered lighting around portrait */}
        <div
          className="pointer-events-none absolute -inset-8 -z-10 rounded-[2.5rem] opacity-90 transition-opacity duration-500 group-hover/visual:opacity-100"
          aria-hidden
        >
          <div className="bg-accent/25 absolute inset-4 rounded-[2rem] blur-3xl" />
          <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_30%_20%,color-mix(in_oklch,var(--accent)_30%,transparent),transparent_55%)] blur-2xl" />
          <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_80%_70%,color-mix(in_oklch,var(--foreground)_10%,transparent),transparent_50%)] blur-2xl" />
        </div>

        <div
          className={cn(
            "glass relative overflow-hidden rounded-[1.75rem] p-3 sm:p-4",
            "border border-white/10 shadow-glow",
            "transition-[transform,box-shadow,border-color] duration-500",
            "group-hover/visual:-translate-y-1 group-hover/visual:border-accent/30 group-hover/visual:shadow-lg",
          )}
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem]">
            <Image
              src={visual.image}
              alt={visual.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, (max-width: 1536px) 28rem, 32rem"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover/visual:scale-[1.03]"
            />

            <div
              className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/25 to-transparent"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,color-mix(in_oklch,var(--accent)_18%,transparent),transparent_45%)] opacity-70 mix-blend-soft-light"
              aria-hidden
            />

            <div className="absolute inset-x-0 bottom-0 space-y-3 p-5 sm:p-6">
              <div>
                <p className="font-display text-text-primary text-xl font-semibold tracking-tight">
                  {visual.name}
                </p>
                <p className="text-text-secondary mt-1 text-sm">{visual.role}</p>
                <p className="text-text-secondary/80 mt-0.5 text-xs">
                  {visual.location}
                </p>
              </div>

              <ul
                className="flex flex-wrap gap-1.5"
                aria-label="Core technologies"
              >
                {visual.technologies.map((tech) => (
                  <li key={tech}>
                    <Tag
                      variant="accent"
                      className="bg-accent/15 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-0.5"
                    >
                      {tech}
                    </Tag>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
