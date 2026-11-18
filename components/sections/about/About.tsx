"use client";

import { motion } from "framer-motion";

import { AboutContent } from "@/components/sections/about/AboutContent";
import { AboutImage } from "@/components/sections/about/AboutImage";
import { Container } from "@/components/ui/container";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function About() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id="about"
      aria-labelledby="about-heading"
      className="section-space relative scroll-mt-24"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <Container size="xl">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          <div className="lg:col-span-5 lg:self-stretch">
            <AboutImage />
          </div>
          <div className="lg:col-span-7">
            <AboutContent />
          </div>
        </div>
      </Container>
    </motion.section>
  );
}
