"use client";

import {
  BriefcaseBusiness,
  Code2,
  Layers3,
  MapPin,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

import { aboutContent } from "@/components/sections/about/content";
import { IconWrapper } from "@/components/ui/icon-wrapper";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

const iconMap: Record<
  (typeof aboutContent.highlights)[number]["icon"],
  LucideIcon
> = {
  briefcase: BriefcaseBusiness,
  layers: Layers3,
  code: Code2,
  sparkles: Sparkles,
  map: MapPin,
};

export function AboutHighlights() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.ul
      className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: prefersReducedMotion ? 0 : 0.06 },
        },
      }}
      aria-label="Career highlights"
    >
      {aboutContent.highlights.map((item) => {
        const Icon = iconMap[item.icon];

        return (
          <motion.li
            key={item.id}
            variants={{
              hidden: prefersReducedMotion
                ? { opacity: 1 }
                : { opacity: 0, y: 14, filter: "blur(6px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <article
              className={cn(
                "glass border-border/60 group flex h-full flex-col gap-3 rounded-2xl border p-5",
                "transition-[transform,border-color,box-shadow] duration-300",
                "hover:border-accent/30 hover:-translate-y-0.5 hover:shadow-md",
              )}
            >
              <IconWrapper variant="accent" size="sm">
                <Icon aria-hidden />
              </IconWrapper>
              <div>
                <p className="text-label text-text-secondary">{item.title}</p>
                <p className="font-display text-text-primary mt-1 text-2xl font-semibold tracking-tight">
                  {item.value}
                </p>
                <p className="text-body-sm text-text-secondary mt-1">
                  {item.description}
                </p>
              </div>
            </article>
          </motion.li>
        );
      })}
    </motion.ul>
  );
}
