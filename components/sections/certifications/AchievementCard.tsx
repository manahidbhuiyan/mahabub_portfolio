"use client";

import {
  BookOpen,
  BriefcaseBusiness,
  Layers3,
  Lightbulb,
  Rocket,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

import type { certificationsContent } from "@/components/sections/certifications/content";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

const iconMap: Record<
  (typeof certificationsContent.achievements)[number]["icon"],
  LucideIcon
> = {
  briefcase: BriefcaseBusiness,
  layers: Layers3,
  rocket: Rocket,
  book: BookOpen,
  lightbulb: Lightbulb,
};

type AchievementCardProps = {
  achievement: (typeof certificationsContent.achievements)[number];
  index: number;
};

export function AchievementCard({ achievement, index }: AchievementCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const Icon = iconMap[achievement.icon];

  return (
    <motion.article
      className={cn(
        "glass border-border/60 h-full rounded-2xl border p-4",
        "transition-[transform,border-color] duration-300",
        "hover:border-accent/30 hover:-translate-y-0.5",
      )}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 14, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="bg-muted text-accent mb-3 inline-flex size-9 items-center justify-center rounded-lg">
        <Icon className="size-4" aria-hidden />
      </span>
      <h3 className="text-text-primary text-sm font-semibold">
        {achievement.title}
      </h3>
      <p className="text-body-sm text-text-secondary mt-1.5">
        {achievement.description}
      </p>
    </motion.article>
  );
}
