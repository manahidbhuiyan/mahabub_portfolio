"use client";

import { motion } from "framer-motion";

import { ContactBackground } from "@/components/sections/contact/ContactBackground";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { ContactHeader } from "@/components/sections/contact/ContactHeader";
import { ContactInfo } from "@/components/sections/contact/ContactInfo";
import { contactContent } from "@/components/sections/contact/content";
import { Container } from "@/components/ui/container";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

export function Contact() {
  const prefersReducedMotion = useReducedMotion();
  const { form } = contactContent;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-space relative scroll-mt-24 overflow-hidden"
    >
      <ContactBackground />

      <Container size="xl" className="relative z-10 space-y-12 lg:space-y-14">
        <ContactHeader />

        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>

          <motion.div
            className="lg:col-span-7"
            initial={
              prefersReducedMotion ? false : { opacity: 0, y: 20 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className={cn(
                "glass relative overflow-hidden rounded-3xl border p-6 sm:p-8",
                "border-white/10 shadow-glow",
              )}
            >
              <div
                className="pointer-events-none absolute -top-20 -right-16 size-48 rounded-full bg-[radial-gradient(circle,color-mix(in_oklch,var(--accent)_20%,transparent),transparent_70%)]"
                aria-hidden
              />

              <div className="relative">
                <h3 id="contact-form-title" className="text-h4 text-text-primary">
                  {form.title}
                </h3>
                <p className="text-body-sm text-text-secondary mt-2 max-w-lg">
                  {form.subtitle}
                </p>
                <div className="mt-7">
                  <ContactForm />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
