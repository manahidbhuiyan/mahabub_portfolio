"use client";

import { motion } from "framer-motion";

import { SocialButton } from "@/components/ui/social-button";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";
import type { SocialLink } from "@/types";

type HeroSocialsProps = {
  socials: readonly SocialLink[];
  className?: string;
};

export function HeroSocials({ socials, className }: HeroSocialsProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("flex items-center gap-2", className)}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.52, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Social links"
    >
      {socials.map((social) => (
        <SocialButton
          key={social.href}
          social={social}
          size="icon-sm"
          showTooltip
        />
      ))}
    </motion.div>
  );
}
