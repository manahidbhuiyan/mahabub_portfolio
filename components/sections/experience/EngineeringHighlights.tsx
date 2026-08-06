"use client";

import {
  Gauge,
  Layers,
  LayoutTemplate,
  Lightbulb,
  Network,
  Server,
  Smartphone,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

import { experienceContent } from "@/components/sections/experience/content";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

const iconMap: Record<
  (typeof experienceContent.highlights)[number]["icon"],
  LucideIcon
> = {
  layout: LayoutTemplate,
  server: Server,
  network: Network,
  gauge: Gauge,
  layers: Layers,
  smartphone: Smartphone,
  lightbulb: Lightbulb,
};

export function EngineeringHighlights() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div>
      <motion.h3
        className="text-h3 text-text-primary text-center"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        Engineering Highlights
      </motion.h3>

      <motion.ul
        className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: prefersReducedMotion ? 0 : 0.05 },
          },
        }}
        aria-label="Engineering highlights"
      >
        {experienceContent.highlights.map((item) => {
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
                  "glass border-border/60 h-full rounded-2xl border p-4",
                  "transition-[transform,border-color] duration-300",
                  "hover:border-accent/30 hover:-translate-y-0.5",
                )}
              >
                <span className="bg-muted text-accent mb-3 inline-flex size-9 items-center justify-center rounded-lg">
                  <Icon className="size-4" aria-hidden />
                </span>
                <h4 className="text-text-primary text-sm font-semibold">
                  {item.title}
                </h4>
                <p className="text-body-sm text-text-secondary mt-1.5">
                  {item.description}
                </p>
              </article>
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
}
