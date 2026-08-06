"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SocialButton } from "@/components/ui/social-button";
import { mainNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

const TAGLINE = "Crafting fast, thoughtful digital products.";

export function Footer() {
  const year = new Date().getFullYear();
  const prefersReducedMotion = useReducedMotion();
  const firstName = siteConfig.author.name.split(" ")[0];

  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }

  return (
    <footer
      className="relative z-10 mt-auto"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Site footer
      </h2>

      <div className="border-border/50 relative border-t">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          aria-hidden
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color-mix(in_oklch,var(--accent)_35%,transparent)] to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklch,var(--accent)_8%,transparent),transparent_55%)]" />
        </div>

        <Container size="xl" className="py-14 sm:py-16 lg:py-20">
          <div
            className={cn(
              "glass border-border/50 rounded-3xl border p-6 sm:p-8 lg:p-10",
              "shadow-[inset_0_1px_0_0_color-mix(in_oklch,white_6%,transparent)]",
            )}
          >
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-4">
                <Link
                  href="/#home"
                  className="font-display text-text-primary hover:text-accent focus-visible:ring-ring inline-flex rounded-md text-xl font-semibold tracking-tight transition-colors focus-visible:ring-2 focus-visible:outline-none"
                  aria-label={`${siteConfig.author.name} — home`}
                >
                  {firstName}
                  <span className="text-accent">.</span>
                </Link>
                <p className="text-body-sm text-text-secondary mt-3 max-w-xs text-pretty leading-relaxed">
                  {TAGLINE}
                </p>
              </div>

              <nav
                className="lg:col-span-5"
                aria-label="Footer"
              >
                <p className="text-label text-text-secondary mb-4">
                  Navigate
                </p>
                <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 sm:grid-cols-3">
                  {mainNavigation.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className={cn(
                          "text-text-secondary hover:text-text-primary group inline-flex items-center gap-1.5 text-sm font-medium",
                          "rounded-md transition-colors duration-200",
                          "focus-visible:ring-ring focus-visible:ring-2 focus-visible:outline-none",
                        )}
                      >
                        <span
                          className="bg-accent/0 group-hover:bg-accent size-1 rounded-full transition-colors duration-200"
                          aria-hidden
                        />
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="flex flex-col gap-6 lg:col-span-3 lg:items-end">
                <div>
                  <p className="text-label text-text-secondary mb-4 lg:text-right">
                    Connect
                  </p>
                  <div className="flex flex-wrap items-center gap-2 lg:justify-end">
                    {siteConfig.social.map((social) => (
                      <SocialButton
                        key={social.href}
                        social={social}
                        size="icon"
                        className="hover:border-accent/35 hover:-translate-y-0.5 hover:shadow-sm"
                      />
                    ))}
                  </div>
                </div>

                <motion.button
                  type="button"
                  onClick={scrollTop}
                  whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  className={cn(
                    "border-border/60 bg-background/40 text-text-secondary",
                    "hover:border-accent/35 hover:text-text-primary hover:bg-surface/60",
                    "inline-flex items-center gap-2 self-start rounded-full border px-4 py-2 text-xs font-medium",
                    "transition-[color,border-color,background-color,box-shadow] duration-300",
                    "focus-visible:ring-ring focus-visible:ring-2 focus-visible:outline-none",
                    "lg:self-end",
                  )}
                  aria-label="Back to top"
                >
                  Back to top
                  <ArrowUp className="size-3.5" aria-hidden />
                </motion.button>
              </div>
            </div>

            <div className="border-border/40 mt-10 flex flex-col gap-3 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-body-sm text-text-secondary">
                © {year} {siteConfig.author.fullName}. All rights reserved.
              </p>
              <p className="text-text-secondary/70 text-xs tracking-wide">
                Designed & built with care
              </p>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
