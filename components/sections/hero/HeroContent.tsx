"use client";

import { motion } from "framer-motion";

import { HeroBadge } from "@/components/sections/hero/HeroBadge";
import { HeroButtons } from "@/components/sections/hero/HeroButtons";
import { HeroRole } from "@/components/sections/hero/HeroRole";
import { HeroSocials } from "@/components/sections/hero/HeroSocials";
import { heroContent } from "@/components/sections/hero/content";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroContent() {
  const prefersReducedMotion = useReducedMotion();
  const { badge, greeting, name, roles, summary, primaryCta, secondaryCta, socials } =
    heroContent;

  return (
    <div className="flex max-w-2xl flex-col items-start 2xl:max-w-3xl">
      <HeroBadge label={badge} />

      <motion.p
        className="text-text-secondary mt-7 text-sm font-medium tracking-[0.04em] sm:mt-8 sm:text-base"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 12, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ delay: 0.08, duration: 0.5, ease }}
      >
        {greeting}
      </motion.p>

      <motion.h1
        id="hero-heading"
        className="font-display text-text-primary mt-2 text-[clamp(2.75rem,7vw,5.25rem)] leading-[0.95] font-bold tracking-[-0.04em] text-balance"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 18, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ delay: 0.14, duration: 0.6, ease }}
      >
        {name}
      </motion.h1>

      <motion.div
        className="mt-5 w-full sm:mt-6"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.24, duration: 0.45, ease }}
      >
        <HeroRole roles={roles} />
      </motion.div>

      <motion.p
        className="text-text-secondary mt-5 max-w-[32rem] text-base leading-relaxed text-pretty sm:mt-6 sm:text-lg 2xl:max-w-[34rem]"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 12, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ delay: 0.32, duration: 0.5, ease }}
      >
        {summary}
      </motion.p>

      <HeroButtons
        primary={primaryCta}
        secondary={secondaryCta}
        className="mt-8 sm:mt-10"
      />

      <HeroSocials socials={[...socials]} className="mt-7 sm:mt-8" />
    </div>
  );
}
