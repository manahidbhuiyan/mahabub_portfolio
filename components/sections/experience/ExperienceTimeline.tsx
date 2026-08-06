"use client";

import { motion } from "framer-motion";

import { experienceContent } from "@/components/sections/experience/content";
import { TimelineItem } from "@/components/sections/experience/TimelineItem";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type ExperienceTimelineProps = {
  activeId: string;
  onSelect: (id: string) => void;
};

export function ExperienceTimeline({
  activeId,
  onSelect,
}: ExperienceTimelineProps) {
  const prefersReducedMotion = useReducedMotion();
  const activeIndex = Math.max(
    0,
    experienceContent.roles.findIndex((role) => role.id === activeId),
  );
  const progress =
    experienceContent.roles.length <= 1
      ? 1
      : activeIndex / (experienceContent.roles.length - 1);

  return (
    <div className="relative" aria-label="Career timeline">
      <div
        className="bg-border/80 absolute top-3 bottom-3 left-[0.35rem] w-px overflow-hidden"
        aria-hidden
      >
        <motion.div
          className="bg-accent origin-top w-full"
          animate={{ scaleY: progress || 0.08 }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { type: "spring", stiffness: 220, damping: 28 }
          }
          style={{ height: "100%" }}
        />
      </div>

      <ol className="space-y-3 pl-6">
        {experienceContent.roles.map((role, index) => (
          <TimelineItem
            key={role.id}
            role={role}
            index={index}
            active={role.id === activeId}
            onSelect={() => onSelect(role.id)}
          />
        ))}
      </ol>
    </div>
  );
}
