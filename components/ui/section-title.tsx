import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionTitleProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  titleClassName?: string;
  descriptionClassName?: string;
  titleId?: string;
} & Omit<ComponentProps<"div">, "title">;

function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  as: Heading = "h2",
  className,
  titleClassName,
  descriptionClassName,
  titleId,
  ...props
}: SectionTitleProps) {
  return (
    <div
      data-slot="section-title"
      className={cn(
        "flex max-w-3xl flex-col gap-3",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
      {...props}
    >
      {eyebrow ? (
        <p className="text-label text-accent">{eyebrow}</p>
      ) : null}
      <Heading
        id={titleId}
        className={cn("text-h2 text-text-primary", titleClassName)}
      >
        {title}
      </Heading>
      {description ? (
        <p
          className={cn(
            "text-body-lg text-text-secondary max-w-2xl",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export { SectionTitle };
