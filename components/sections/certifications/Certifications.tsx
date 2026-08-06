"use client";

import { motion } from "framer-motion";

import { AchievementCard } from "@/components/sections/certifications/AchievementCard";
import { CertificationCard } from "@/components/sections/certifications/CertificationCard";
import { LearningPhilosophy } from "@/components/sections/certifications/LearningPhilosophy";
import { certificationsContent } from "@/components/sections/certifications/content";
import { Container } from "@/components/ui/container";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function Certifications() {
  const prefersReducedMotion = useReducedMotion();
  const { eyebrow, title, description, certifications, achievements } =
    certificationsContent;

  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="section-space relative scroll-mt-24"
    >
      <Container size="xl" className="space-y-10 lg:space-y-12">
        <header className="mx-auto max-w-3xl text-center">
          <motion.p
            className="text-label text-accent"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.45, ease }}
          >
            {eyebrow}
          </motion.p>
          <motion.h2
            id="certifications-heading"
            className="text-h1 text-text-primary mt-3 text-balance"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 14, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.05, duration: 0.5, ease }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-body-lg text-text-secondary mx-auto mt-4 max-w-2xl"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 0.45, ease }}
          >
            {description}
          </motion.p>
        </header>

        <ul
          className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2"
          aria-label="Certifications"
        >
          {certifications.map((certification, index) => (
            <li key={certification.id}>
              <CertificationCard
                certification={certification}
                index={index}
              />
            </li>
          ))}
        </ul>

        <div>
          <h3 className="text-h4 text-text-primary text-center">Achievements</h3>
          <ul
            className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
            aria-label="Professional achievements"
          >
            {achievements.map((achievement, index) => (
              <li key={achievement.id}>
                <AchievementCard achievement={achievement} index={index} />
              </li>
            ))}
          </ul>
        </div>

        <LearningPhilosophy />
      </Container>
    </section>
  );
}
