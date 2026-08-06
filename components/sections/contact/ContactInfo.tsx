"use client";

import {
  Clock3,
  Download,
  Globe2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { contactContent } from "@/components/sections/contact/content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IconWrapper } from "@/components/ui/icon-wrapper";
import { SocialButton } from "@/components/ui/social-button";
import { siteConfig } from "@/data/site";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export function ContactInfo() {
  const prefersReducedMotion = useReducedMotion();
  const { author, social, cta } = siteConfig;
  const { availability, info } = contactContent;
  const phoneHref = author.phone.replace(/\s+/g, "");

  return (
    <motion.div
      className="flex flex-col gap-8"
      initial={
        prefersReducedMotion ? false : { opacity: 0, y: 18, filter: "blur(6px)" }
      }
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease }}
    >
      <div>
        <h3 className="font-display text-text-primary text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
          Ready when you are.
        </h3>
        <p className="text-body text-text-secondary mt-3 max-w-md text-pretty">
          {availability.detail}
        </p>

        <Badge
          variant="success"
          className="mt-5 gap-2 rounded-full px-3 py-1.5 text-xs"
        >
          <span
            className="bg-success size-1.5 animate-pulse rounded-full"
            aria-hidden
          />
          {availability.label}
        </Badge>
      </div>

      <ul className="space-y-3" aria-label="Contact details">
        <InfoRow
          icon={<MapPin aria-hidden />}
          label={info.location.label}
          value={info.location.value}
        />
        <InfoRow
          icon={<Mail aria-hidden />}
          label="Email"
          value={author.email}
          href={`mailto:${author.email}`}
        />
        {author.phone ? (
          <InfoRow
            icon={<Phone aria-hidden />}
            label="Phone"
            value={author.phone}
            href={`tel:${phoneHref}`}
          />
        ) : null}
        <InfoRow
          icon={<Globe2 aria-hidden />}
          label={info.timezone.label}
          value={info.timezone.value}
        />
        <InfoRow
          icon={<Clock3 aria-hidden />}
          label={info.response.label}
          value={info.response.value}
        />
      </ul>

      <div>
        <p className="text-label text-text-secondary mb-3">Connect</p>
        <div className="flex flex-wrap items-center gap-2">
          {social.map((item) => (
            <SocialButton key={item.href} social={item} size="icon-lg" />
          ))}
        </div>
      </div>

      <div>
        <Button
          nativeButton={false}
          render={
            <a
              href={cta.cvHref}
              download
              target="_blank"
              rel="noopener noreferrer"
            />
          }
          variant="outline"
          size="lg"
          className="group"
        >
          <Download data-icon="inline-start" />
          {cta.cv}
        </Button>
      </div>
    </motion.div>
  );
}

function InfoRow({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <IconWrapper variant="accent" size="sm" className="mt-0.5">
        {icon}
      </IconWrapper>
      <span className="min-w-0">
        <span className="text-label text-text-secondary block">{label}</span>
        <span className="text-text-primary mt-0.5 block text-sm font-medium break-all">
          {value}
        </span>
      </span>
    </>
  );

  if (href) {
    return (
      <li>
        <a
          href={href}
          className={cn(
            "border-border/50 bg-surface/30 flex items-start gap-3 rounded-2xl border px-3.5 py-3",
            "transition-[border-color,background-color,transform] duration-300",
            "hover:border-accent/30 hover:bg-surface/50",
            "focus-visible:ring-ring focus-visible:ring-2 focus-visible:outline-none",
          )}
        >
          {content}
        </a>
      </li>
    );
  }

  return (
    <li
      className={cn(
        "border-border/50 bg-surface/30 flex items-start gap-3 rounded-2xl border px-3.5 py-3",
      )}
    >
      {content}
    </li>
  );
}
