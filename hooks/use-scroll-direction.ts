"use client";

import { useEffect, useRef, useState } from "react";

type ScrollDirection = "up" | "down" | null;

/**
 * Scroll direction + scrolled state for navbar hide/show + glass treatment.
 */
export function useScrollDirection(threshold = 8) {
  const [direction, setDirection] = useState<ScrollDirection>(null);
  const [scrolled, setScrolled] = useState(false);
  const [y, setY] = useState(0);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setY(current);
      setScrolled(current > 12);

      if (Math.abs(current - lastY.current) < threshold) return;

      setDirection(current > lastY.current ? "down" : "up");
      lastY.current = current;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return { direction, scrolled, y };
}
