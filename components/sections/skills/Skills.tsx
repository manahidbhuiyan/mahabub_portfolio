"use client";

import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { CurrentFocus } from "@/components/sections/skills/CurrentFocus";
import { DevelopmentPrinciples } from "@/components/sections/skills/DevelopmentPrinciples";
import { SkillCategories } from "@/components/sections/skills/SkillCategories";
import { SkillGrid } from "@/components/sections/skills/SkillGrid";
import { SkillsHeader } from "@/components/sections/skills/SkillsHeader";
import type { SkillCategoryId } from "@/components/sections/skills/content";
import { skillsContent } from "@/components/sections/skills/content";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function Skills() {
  const [category, setCategory] = useState<SkillCategoryId>("frontend");
  const [direction, setDirection] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const { cta } = skillsContent;
  const categoryIndex = useRef(
    skillsContent.categories.findIndex((item) => item.id === "frontend"),
  );

  const handleCategoryChange = (id: SkillCategoryId) => {
    const nextIndex = skillsContent.categories.findIndex(
      (item) => item.id === id,
    );
    setDirection(nextIndex >= categoryIndex.current ? 1 : -1);
    categoryIndex.current = nextIndex;
    setCategory(id);
  };

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="section-space relative scroll-mt-24"
    >
      <Container size="xl" className="space-y-12 lg:space-y-14">
        <SkillsHeader />

        <div className="space-y-7">
          <SkillCategories active={category} onChange={handleCategoryChange} />
          <SkillGrid category={category} direction={direction} />
        </div>

        <CurrentFocus />
        <DevelopmentPrinciples />

        <motion.div
          className="border-border/55 bg-surface/30 flex flex-col items-start justify-between gap-6 rounded-3xl border p-6 sm:flex-row sm:items-center sm:p-8"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="max-w-xl">
            <h3 className="text-h4 text-text-primary">{cta.title}</h3>
            <p className="text-body-sm text-text-secondary mt-2">
              {cta.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              nativeButton={false}
              render={<a href={cta.primary.href} />}
              variant="accent"
              size="lg"
            >
              {cta.primary.label}
              <ArrowUpRight data-icon="inline-end" />
            </Button>
            <Button
              nativeButton={false}
              render={<a href={cta.secondary.href} />}
              variant="outline"
              size="lg"
            >
              {cta.secondary.label}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
