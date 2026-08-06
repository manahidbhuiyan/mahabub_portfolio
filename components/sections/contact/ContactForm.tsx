"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Send, TriangleAlert } from "lucide-react";
import {
  forwardRef,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useForm } from "react-hook-form";

import { contactContent } from "@/components/sections/contact/content";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { duration, easing } from "@/lib/design-system";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/validations/contact";
import { cn } from "@/lib/utils";

const fieldClass = cn(
  "border-border/60 bg-background/40 text-text-primary placeholder:text-text-secondary/55",
  "w-full rounded-xl border px-4 py-3 text-sm outline-none",
  "shadow-[inset_0_1px_0_0_color-mix(in_oklch,white_5%,transparent)]",
  "transition-[border-color,box-shadow,background-color,transform] duration-200",
  "hover:border-border hover:bg-background/55",
  "focus-visible:border-accent/45 focus-visible:bg-background/70",
  "focus-visible:ring-accent/25 focus-visible:ring-3",
  "aria-invalid:border-error/50 aria-invalid:ring-error/20 aria-invalid:ring-3",
);

type FormStatus = "idle" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const prefersReducedMotion = useReducedMotion();
  const { form, fields } = contactContent;
  const statusRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  useEffect(() => {
    if (status === "success" || status === "error") {
      statusRef.current?.focus();
    }
  }, [status]);

  async function onSubmit(values: ContactFormValues) {
    setStatus("idle");

    try {
      const body = [
        `Name: ${values.name}`,
        `Email: ${values.email}`,
        "",
        values.message,
      ].join("\n");

      const mailto = new URL(`mailto:${siteConfig.author.email}`);
      mailto.searchParams.set("subject", values.subject);
      mailto.searchParams.set("body", body);

      window.location.href = mailto.toString();
      reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <StatusPanel
            key="success"
            ref={statusRef}
            tone="success"
            icon={<CheckCircle2 className="size-7" aria-hidden />}
            title={form.successTitle}
            body={form.successBody}
            actionLabel={form.reset}
            onAction={() => setStatus("idle")}
            prefersReducedMotion={prefersReducedMotion}
          />
        ) : status === "error" ? (
          <StatusPanel
            key="error"
            ref={statusRef}
            tone="error"
            icon={<TriangleAlert className="size-7" aria-hidden />}
            title={form.errorTitle}
            body={form.errorBody}
            actionLabel="Try again"
            onAction={() => setStatus("idle")}
            prefersReducedMotion={prefersReducedMotion}
            secondaryHref={`mailto:${siteConfig.author.email}`}
            secondaryLabel="Email directly"
          />
        ) : (
          <motion.form
            key="form"
            className="space-y-5"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            aria-labelledby="contact-form-title"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
            transition={{ duration: duration.normal, ease: easing.standard }}
            aria-busy={isSubmitting}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label={fields.name.label}
                error={errors.name?.message}
                id="contact-name"
              >
                <input
                  id="contact-name"
                  autoComplete="name"
                  required
                  aria-required="true"
                  className={fieldClass}
                  placeholder={fields.name.placeholder}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={
                    errors.name ? "contact-name-error" : undefined
                  }
                  disabled={isSubmitting}
                  {...register("name")}
                />
              </Field>

              <Field
                label={fields.email.label}
                error={errors.email?.message}
                id="contact-email"
              >
                <input
                  id="contact-email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  required
                  aria-required="true"
                  className={fieldClass}
                  placeholder={fields.email.placeholder}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={
                    errors.email ? "contact-email-error" : undefined
                  }
                  disabled={isSubmitting}
                  {...register("email")}
                />
              </Field>
            </div>

            <Field
              label={fields.subject.label}
              error={errors.subject?.message}
              id="contact-subject"
            >
              <input
                id="contact-subject"
                required
                aria-required="true"
                className={fieldClass}
                placeholder={fields.subject.placeholder}
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={
                  errors.subject ? "contact-subject-error" : undefined
                }
                disabled={isSubmitting}
                {...register("subject")}
              />
            </Field>

            <Field
              label={fields.message.label}
              error={errors.message?.message}
              id="contact-message"
            >
              <textarea
                id="contact-message"
                rows={5}
                required
                aria-required="true"
                className={cn(fieldClass, "min-h-32 resize-y leading-relaxed")}
                placeholder={fields.message.placeholder}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={
                  errors.message ? "contact-message-error" : undefined
                }
                disabled={isSubmitting}
                {...register("message")}
              />
            </Field>

            <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
              <Button
                type="submit"
                variant="accent"
                size="lg"
                disabled={isSubmitting}
                className="min-w-44"
              >
                {form.submit}
                <Send data-icon="inline-end" aria-hidden />
              </Button>

              <p className="text-body-sm text-text-secondary/80 max-w-xs">
                Opens your email app — nothing is uploaded to a server.
              </p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-label text-text-secondary block">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="text-error text-xs" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

const StatusPanel = forwardRef<
  HTMLDivElement,
  {
    tone: "success" | "error";
    icon: ReactNode;
    title: string;
    body: string;
    actionLabel: string;
    onAction: () => void;
    prefersReducedMotion: boolean;
    secondaryHref?: string;
    secondaryLabel?: string;
  }
>(function StatusPanel(
  {
    tone,
    icon,
    title,
    body,
    actionLabel,
    onAction,
    prefersReducedMotion,
    secondaryHref,
    secondaryLabel,
  },
  ref,
) {
  return (
    <motion.div
      ref={ref}
      tabIndex={-1}
      role={tone === "error" ? "alert" : "status"}
      aria-live="polite"
      className={cn(
        "flex min-h-[22rem] flex-col items-center justify-center rounded-2xl border px-6 py-10 text-center outline-none",
        tone === "success"
          ? "border-success/25 bg-success/5"
          : "border-error/25 bg-error/5",
      )}
      initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
      transition={{ duration: duration.normal, ease: easing.standard }}
    >
      <span
        className={cn(
          "mb-4 flex size-14 items-center justify-center rounded-2xl",
          tone === "success"
            ? "bg-success/15 text-success"
            : "bg-error/15 text-error",
        )}
      >
        {icon}
      </span>
      <h4 className="text-text-primary text-lg font-semibold tracking-tight">
        {title}
      </h4>
      <p className="text-body-sm text-text-secondary mt-2 max-w-sm text-pretty">
        {body}
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <Button type="button" variant="outline" onClick={onAction}>
          {actionLabel}
        </Button>
        {secondaryHref && secondaryLabel ? (
          <Button
            nativeButton={false}
            render={<a href={secondaryHref} />}
            variant="ghost"
          >
            {secondaryLabel}
          </Button>
        ) : null}
      </div>
    </motion.div>
  );
});
