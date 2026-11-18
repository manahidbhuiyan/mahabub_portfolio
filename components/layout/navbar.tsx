"use client";

import { Download, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";

import { MobileMenu } from "@/components/layout/mobile-menu";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { mainNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { useActiveSection } from "@/hooks/use-active-section";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const activeHref = useActiveSection();
  const { direction, scrolled, y } = useScrollDirection();
  const prefersReducedMotion = useReducedMotion();

  const hidden = !open && direction === "down" && y > 120;
  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [closeMenu]);

  return (
    <>
      <motion.header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,backdrop-filter,box-shadow]",
          scrolled || open
            ? "glass border-border/50 border-b shadow-sm"
            : "border-b border-transparent bg-transparent",
        )}
        initial={false}
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      >
        <Container className="flex h-16 items-center justify-between gap-4 lg:h-[4.25rem]">
          <Link
            href="/#home"
            className="font-display text-text-primary hover:text-accent focus-visible:ring-ring inline-flex items-center gap-2.5 rounded-md text-lg font-semibold tracking-tight transition-colors focus-visible:ring-2 focus-visible:outline-none"
            aria-label={`${siteConfig.author.name} — home`}
          >
            <Image
              src="/images/mahabub-star.svg"
              alt=""
              width={56}
              height={54}
              className="size-11 object-contain sm:size-12"
              priority
            />
          </Link>

          <nav
            className="hidden items-center gap-0.5 lg:flex"
            aria-label="Primary"
          >
            {mainNavigation.map((item) => {
              const isActive = activeHref === item.href;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    "focus-visible:ring-ring focus-visible:ring-2 focus-visible:outline-none",
                    isActive
                      ? "text-text-primary"
                      : "text-text-secondary hover:text-text-primary",
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                  {isActive ? (
                    <motion.span
                      layoutId="nav-active"
                      className="bg-accent absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full"
                      transition={
                        prefersReducedMotion
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 420, damping: 32 }
                      }
                    />
                  ) : null}
                </a>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <ThemeToggle />
            <Button
              nativeButton={false}
              render={<a href={siteConfig.cta.cvHref} download />}
              variant="outline"
              size="sm"
              className="gap-1.5"
            >
              <Download className="size-3.5" />
              Resume
            </Button>
            <Button
              nativeButton={false}
              render={<Link href="/#contact" />}
              variant="accent"
              size="sm"
              className="transition-transform hover:-translate-y-0.5"
            >
              {siteConfig.cta.hire}
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <Button
              variant="outline"
              size="icon-sm"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen(true)}
            >
              <Menu />
            </Button>
          </div>
        </Container>
      </motion.header>

      <MobileMenu
        open={open}
        activeHref={activeHref}
        onClose={closeMenu}
      />
    </>
  );
}
