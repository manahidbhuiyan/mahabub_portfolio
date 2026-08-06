"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { Achievements } from "@/components/sections/experience/Achievements";
import { CareerPhilosophy } from "@/components/sections/experience/CareerPhilosophy";
import { EngineeringHighlights } from "@/components/sections/experience/EngineeringHighlights";
import { ExperienceCard } from "@/components/sections/experience/ExperienceCard";
import { ExperienceHeader } from "@/components/sections/experience/ExperienceHeader";
import { ExperienceTimeline } from "@/components/sections/experience/ExperienceTimeline";
import { experienceContent } from "@/components/sections/experience/content";
import { Container } from "@/components/ui/container";

export function Experience() {
  const [activeId, setActiveId] = useState(
    experienceContent.roles[0]?.id ?? "amana-fs",
  );
  const roleRefs = useRef<Map<string, HTMLElement>>(new Map());
  const scrollingToRef = useRef<string | null>(null);

  const setRoleRef = useCallback((id: string, node: HTMLElement | null) => {
    if (node) {
      roleRefs.current.set(id, node);
    } else {
      roleRefs.current.delete(id);
    }
  }, []);

  useEffect(() => {
    const elements = experienceContent.roles
      .map((role) => roleRefs.current.get(role.id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (scrollingToRef.current) return;

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0),
          );

        const top = visible[0];
        if (!top) return;

        const id = top.target.getAttribute("data-role-id");
        if (id) setActiveId(id);
      },
      {
        root: null,
        rootMargin: "-28% 0px -42% 0px",
        threshold: [0.15, 0.35, 0.55, 0.75],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSelect = (id: string) => {
    setActiveId(id);
    scrollingToRef.current = id;
    const node = roleRefs.current.get(id);
    node?.scrollIntoView({ behavior: "smooth", block: "center" });

    window.setTimeout(() => {
      if (scrollingToRef.current === id) {
        scrollingToRef.current = null;
      }
    }, 700);
  };

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="section-space relative scroll-mt-24"
    >
      <Container size="xl" className="space-y-12 lg:space-y-14">
        <ExperienceHeader />

        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <ExperienceTimeline activeId={activeId} onSelect={handleSelect} />
          </div>

          <div className="space-y-8 lg:col-span-8">
            {experienceContent.roles.map((role, index) => (
              <div
                key={role.id}
                ref={(node) => setRoleRef(role.id, node)}
                data-role-id={role.id}
              >
                <ExperienceCard
                  role={role}
                  active={role.id === activeId}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>

        <Achievements />
        <EngineeringHighlights />
        <CareerPhilosophy />
      </Container>
    </section>
  );
}
