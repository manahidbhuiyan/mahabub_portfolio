"use client";

import { useEffect, useState } from "react";

import { mainNavigation } from "@/data/navigation";

function sectionIdFromHref(href: string) {
  const hashIndex = href.indexOf("#");
  return hashIndex >= 0 ? href.slice(hashIndex + 1) : href.replace(/^\//, "");
}

function hrefForSectionId(id: string) {
  return `/#${id}`;
}

/**
 * Tracks which nav section is in view for active link highlighting.
 */
export function useActiveSection(offset = 120) {
  const [activeHref, setActiveHref] = useState(
    mainNavigation[0]?.href ?? "/#home",
  );

  useEffect(() => {
    const ids = mainNavigation
      .map((item) => sectionIdFromHref(item.href))
      .filter(Boolean);

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const top = visible[0]?.target;
        if (top?.id) {
          setActiveHref(hrefForSectionId(top.id));
        }
      },
      {
        rootMargin: `-${offset}px 0px -45% 0px`,
        threshold: [0.15, 0.35, 0.55],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [offset]);

  return activeHref;
}
