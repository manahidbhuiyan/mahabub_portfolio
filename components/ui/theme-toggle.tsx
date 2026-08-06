"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useMounted } from "@/hooks/use-mounted";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
  /** Cycle dark → light → system */
  cycleSystem?: boolean;
};

const order = ["dark", "light", "system"] as const;

function ThemeToggle({ className, cycleSystem = true }: ThemeToggleProps) {
  const mounted = useMounted();
  const { theme, setTheme, resolvedTheme } = useTheme();

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon-sm"
        className={cn(className)}
        aria-label="Toggle theme"
        disabled
      >
        <Sun className="size-4 opacity-0" />
      </Button>
    );
  }

  const current = (theme ?? "dark") as (typeof order)[number];
  const Icon =
    current === "system" ? Monitor : resolvedTheme === "dark" ? Moon : Sun;

  const label =
    current === "system"
      ? "System theme"
      : current === "dark"
        ? "Dark theme"
        : "Light theme";

  function handleToggle() {
    if (!cycleSystem) {
      setTheme(resolvedTheme === "dark" ? "light" : "dark");
      return;
    }

    const index = order.indexOf(current);
    const next = order[(index + 1) % order.length] ?? "dark";
    setTheme(next);
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          render={
            <Button
              variant="outline"
              size="icon-sm"
              className={cn(className)}
              onClick={handleToggle}
              aria-label={`Theme: ${label}. Click to change.`}
            />
          }
        >
          <Icon className="size-4" />
        </TooltipTrigger>
        <TooltipContent>{label}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export { ThemeToggle };
