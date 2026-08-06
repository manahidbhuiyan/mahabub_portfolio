"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { HeroBackground } from "@/components/sections/hero/HeroBackground";
import { HeroContent } from "@/components/sections/hero/HeroContent";
import { HeroVisual } from "@/components/sections/hero/HeroVisual";
import { Container } from "@/components/ui/container";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative flex min-h-dvh items-center overflow-hidden pt-20 pb-20 sm:pt-24 sm:pb-24 2xl:pt-28"
    >
      <HeroBackground />

      <Container
        size="xl"
        className="relative z-10 w-full 2xl:max-w-[90rem] 2xl:px-10"
      >
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-12 xl:gap-16 2xl:gap-20">
          <div className="lg:col-span-6 xl:col-span-7">
            <HeroContent />
          </div>

          <div className="lg:col-span-6 xl:col-span-5">
            <HeroVisual />
          </div>
        </div>
      </Container>

      <motion.a
        href="/#about"
        className="text-text-secondary hover:text-text-primary focus-visible:ring-ring absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 rounded-md text-xs tracking-[0.18em] uppercase transition-colors focus-visible:ring-2 focus-visible:outline-none"
        aria-label="Scroll down to the About section"
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.85, duration: 0.45 }}
      >
        <span className="hidden tracking-[0.18em] uppercase sm:inline">
          Scroll
        </span>
        <motion.span
          aria-hidden
          animate={prefersReducedMotion ? undefined : { y: [0, 5, 0] }}
          transition={
            prefersReducedMotion
              ? undefined
              : { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <ChevronDown className="size-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
