"use client";

import { useEffect, useState } from "react";

import { useMounted } from "@/hooks/use-mounted";

export function useMediaQuery(query: string) {
  const mounted = useMounted();
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (!mounted) return;

    const mediaQuery = window.matchMedia(query);
    const onChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    setMatches(mediaQuery.matches);
    mediaQuery.addEventListener("change", onChange);

    return () => {
      mediaQuery.removeEventListener("change", onChange);
    };
  }, [mounted, query]);

  return mounted ? matches : false;
}
