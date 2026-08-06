"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useId, useState } from "react";

import type { PortfolioProject } from "@/types";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

type ProjectGalleryProps = {
  project: PortfolioProject;
};

export function ProjectGallery({ project }: ProjectGalleryProps) {
  const prefersReducedMotion = useReducedMotion();
  const titleId = useId();
  const images = project.gallery;
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active]);

  if (!images.length) return null;

  return (
    <section aria-labelledby="project-gallery-heading" className="space-y-8">
      <div className="max-w-3xl">
        <p className="text-label text-accent">Visuals</p>
        <h2 id="project-gallery-heading" className="text-h2 text-text-primary mt-2">
          Project screenshot
        </h2>
        <p className="text-body text-text-secondary mt-3">
          A product screenshot from this project. Select it to open a larger
          view.
        </p>
      </div>

      <ul className="grid gap-4 sm:grid-cols-1">
        {images.map((image, index) => (
          <motion.li
            key={`${image.src}-${index}`}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
          >
            <button
              type="button"
              onClick={() => setActive(index)}
              className={cn(
                "border-border/60 group relative w-full overflow-hidden rounded-2xl border text-left shadow-md",
                "focus-visible:ring-ring transition-[transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-accent/30 focus-visible:ring-2 focus-visible:outline-none",
              )}
              aria-label={`Open screenshot for ${project.title}`}
            >
              <div className="bg-muted/30 relative aspect-[16/10] overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 56rem"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <span className="text-text-secondary absolute top-3 left-3 rounded-full border border-white/10 bg-background/70 px-2.5 py-1 text-[0.65rem] font-medium tracking-wide uppercase backdrop-blur-md">
                {image.label}
              </span>
            </button>
          </motion.li>
        ))}
      </ul>

      <AnimatePresence>
        {active !== null && images[active] ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/85 p-4 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="border-border relative w-full max-w-5xl overflow-hidden rounded-2xl border bg-background shadow-xl"
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-3 border-b border-border/60 px-4 py-3">
                <p id={titleId} className="text-text-primary text-sm font-medium">
                  {project.title} · {images[active].label}
                </p>
                <button
                  type="button"
                  className="hover:bg-muted rounded-lg p-2 transition-colors focus-visible:ring-ring focus-visible:ring-2 focus-visible:outline-none"
                  aria-label="Close gallery lightbox"
                  onClick={() => setActive(null)}
                >
                  <X className="size-4" />
                </button>
              </div>

              <div className="relative aspect-[16/10] bg-muted/20">
                <Image
                  src={images[active].src}
                  alt={images[active].alt}
                  fill
                  sizes="(max-width: 1280px) 100vw, 64rem"
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
