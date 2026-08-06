"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BriefcaseBusiness, MapPin } from "lucide-react";

import { aboutContent } from "@/components/sections/about/content";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

export function AboutImage() {
  const prefersReducedMotion = useReducedMotion();
  const { image } = aboutContent;

  return (
    <motion.div
      className="relative mx-auto w-full max-w-md lg:mx-0 lg:sticky lg:top-28"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="bg-accent/15 absolute -inset-5 -z-10 rounded-[2rem] blur-3xl"
        aria-hidden
      />

      <motion.div
        className={cn(
          "glass group relative overflow-hidden rounded-[1.75rem] p-3",
          "border border-white/10 shadow-glow",
          "transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-lg",
        )}
        whileHover={prefersReducedMotion ? undefined : { scale: 1.01 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            loading="lazy"
            sizes="(max-width: 1024px) 90vw, 24rem"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          />

          <div
            className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/25 to-transparent"
            aria-hidden
          />

          <div className="absolute inset-x-0 bottom-0 space-y-2.5 p-5">
            <span className="bg-accent/20 text-accent border-accent/30 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium backdrop-blur-md">
              <BriefcaseBusiness className="size-3.5" aria-hidden />
              {image.role}
            </span>
            <div className="flex flex-wrap gap-2">
              <span className="border-border/80 bg-background/50 text-text-secondary inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs backdrop-blur-md">
                <MapPin className="size-3.5" aria-hidden />
                {image.location}
              </span>
              <span className="border-border/80 bg-background/50 text-text-secondary inline-flex items-center rounded-full border px-2.5 py-1 text-xs backdrop-blur-md">
                {image.experience}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
