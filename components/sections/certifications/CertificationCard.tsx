"use client";

import { Award, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

type CertificationCardProps = {
  certification: {
    id: string;
    name: string;
    organization: string;
    issued: string;
    credentialId?: string;
    verifyUrl?: string;
    tags: readonly string[];
    monogram: string;
  };
  index: number;
};

export function CertificationCard({
  certification,
  index,
}: CertificationCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      className={cn(
        "glass border-border/60 group relative overflow-hidden rounded-2xl border p-5",
        "transition-[transform,border-color,box-shadow] duration-300",
        "hover:border-accent/30 hover:-translate-y-0.5 hover:shadow-md",
      )}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 16, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      whileHover={prefersReducedMotion ? undefined : { scale: 1.01 }}
    >
      <div
        className="pointer-events-none absolute -top-10 -right-8 size-28 rounded-full bg-[radial-gradient(circle,color-mix(in_oklch,var(--accent)_18%,transparent),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />

      <div className="relative flex items-start gap-4">
        <div
          className="bg-accent/12 text-accent border-accent/20 flex size-12 shrink-0 items-center justify-center rounded-xl border"
          aria-hidden
        >
          <span className="font-display text-sm font-semibold tracking-tight">
            {certification.monogram}
          </span>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-text-primary text-base font-semibold tracking-tight text-balance">
              {certification.name}
            </h3>
            <Award className="text-accent/70 size-4 shrink-0" aria-hidden />
          </div>

          <p className="text-body-sm text-text-secondary mt-1">
            {certification.organization}
          </p>
          <p className="text-text-secondary/80 mt-1 text-xs">
            Issued {certification.issued}
            {certification.credentialId
              ? ` · ID ${certification.credentialId}`
              : ""}
          </p>

          <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Topics covered">
            {certification.tags.map((tag) => (
              <li key={tag}>
                <Tag variant="muted">{tag}</Tag>
              </li>
            ))}
          </ul>

          {certification.verifyUrl ? (
            <Button
              nativeButton={false}
              render={
                <a
                  href={certification.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              variant="outline"
              size="sm"
              className="mt-5"
            >
              Verify Credential
              <ExternalLink data-icon="inline-end" className="size-3.5" />
            </Button>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
