"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import type { PortfolioProject } from "@/types";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type ProjectNavProps = {
  previous: PortfolioProject | null;
  next: PortfolioProject | null;
};

export function ProjectNav({ previous, next }: ProjectNavProps) {
  const prefersReducedMotion = useReducedMotion();

  if (!previous && !next) return null;

  return (
    <nav aria-label="Adjacent projects" className="border-border/60 border-t pt-10">
      <motion.div
        className="grid gap-4 md:grid-cols-2"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        {previous ? (
          <Link
            href={`/projects/${previous.slug}`}
            className="border-border/60 hover:border-accent/30 focus-visible:ring-ring group flex items-start gap-3 rounded-2xl border p-5 transition-colors focus-visible:ring-2 focus-visible:outline-none"
          >
            <ArrowLeft className="text-text-secondary group-hover:text-accent mt-1 size-4 shrink-0 transition-colors" />
            <span>
              <span className="text-label text-text-secondary block">Previous</span>
              <span className="text-text-primary mt-1 block text-sm font-semibold">
                {previous.title}
              </span>
            </span>
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            href={`/projects/${next.slug}`}
            className="border-border/60 hover:border-accent/30 focus-visible:ring-ring group flex items-start justify-end gap-3 rounded-2xl border p-5 text-right transition-colors focus-visible:ring-2 focus-visible:outline-none"
          >
            <span>
              <span className="text-label text-text-secondary block">Next</span>
              <span className="text-text-primary mt-1 block text-sm font-semibold">
                {next.title}
              </span>
            </span>
            <ArrowRight className="text-text-secondary group-hover:text-accent mt-1 size-4 shrink-0 transition-colors" />
          </Link>
        ) : null}
      </motion.div>
    </nav>
  );
}
