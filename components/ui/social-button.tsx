import type { ComponentProps } from "react";

import { buttonVariants } from "@/components/ui/button";
import { socialIcons } from "@/components/ui/social-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import type { SocialLink } from "@/types";

type SocialButtonProps = {
  social: SocialLink;
  size?: "icon-sm" | "icon" | "icon-lg";
  showTooltip?: boolean;
} & Omit<ComponentProps<"a">, "href">;

function SocialButton({
  social,
  size = "icon",
  showTooltip = true,
  className,
  ...props
}: SocialButtonProps) {
  const Icon = socialIcons[social.icon];
  const isExternal = social.href.startsWith("http");

  const linkClassName = cn(
    buttonVariants({ variant: "outline", size }),
    className,
  );

  const link = (
    <a
      href={social.href}
      aria-label={social.label}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={linkClassName}
      {...props}
    >
      <Icon className="size-4" />
    </a>
  );

  if (!showTooltip) {
    return link;
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger render={link} />
        <TooltipContent>{social.label}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export { SocialButton, socialIcons };
export type { SocialButtonProps };
