"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";

import { Button } from "@/components/ui/button";
import { mainNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

type MobileMenuProps = {
  open: boolean;
  activeHref: string;
  onClose: () => void;
};

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export function MobileMenu({ open, activeHref, onClose }: MobileMenuProps) {
  const prefersReducedMotion = useReducedMotion();
  const panelRef = useRef<HTMLElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    previouslyFocusedRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    const panel = panelRef.current;
    if (!panel) return;

    const focusables = () =>
      Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
        (el) => !el.hasAttribute("disabled") && el.tabIndex !== -1,
      );

    const items = focusables();
    items[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const list = focusables();
      if (list.length === 0) return;

      const first = list[0];
      const last = list[list.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocusedRef.current?.focus?.();
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.button
            type="button"
            aria-label="Close menu overlay"
            className="fixed inset-0 z-50 bg-background/70 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
            onClick={onClose}
          />

          <motion.aside
            ref={panelRef}
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="border-border bg-surface fixed inset-y-0 right-0 z-50 flex w-[min(100%,20rem)] flex-col border-l shadow-xl lg:hidden"
            initial={prefersReducedMotion ? false : { x: "100%" }}
            animate={{ x: 0 }}
            exit={prefersReducedMotion ? undefined : { x: "100%" }}
            transition={{ type: "spring", stiffness: 380, damping: 36 }}
          >
            <div className="flex h-16 items-center justify-between px-5">
              <p className="font-display text-text-primary text-base font-semibold">
                Menu
              </p>
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label="Close menu"
                onClick={onClose}
              >
                <X />
              </Button>
            </div>

            <nav className="flex flex-1 flex-col gap-1 px-3 pb-6" aria-label="Mobile">
              {mainNavigation.map((item, index) => {
                const isActive = activeHref === item.href;

                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                      "focus-visible:ring-ring focus-visible:ring-2 focus-visible:outline-none",
                      isActive
                        ? "bg-accent/15 text-accent"
                        : "text-text-primary hover:bg-muted",
                    )}
                    initial={prefersReducedMotion ? false : { opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: prefersReducedMotion ? 0 : 0.04 * index }}
                  >
                    {item.label}
                  </motion.a>
                );
              })}
            </nav>

            <div className="border-border space-y-3 border-t p-5">
              <Button
                nativeButton={false}
                render={
                  <a
                    href={siteConfig.cta.cvHref}
                    download
                    onClick={onClose}
                  />
                }
                variant="outline"
                size="lg"
                className="w-full"
              >
                {siteConfig.cta.cv}
              </Button>
              <Button
                nativeButton={false}
                render={<a href="/#contact" onClick={onClose} />}
                variant="accent"
                size="lg"
                className="w-full"
              >
                {siteConfig.cta.hire}
              </Button>
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}
