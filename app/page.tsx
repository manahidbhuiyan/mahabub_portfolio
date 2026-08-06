import dynamic from "next/dynamic";

import { Hero } from "@/components/sections/hero";

const About = dynamic(() =>
  import("@/components/sections/about").then((mod) => mod.About),
);
const Skills = dynamic(() =>
  import("@/components/sections/skills").then((mod) => mod.Skills),
);
const Experience = dynamic(() =>
  import("@/components/sections/experience").then((mod) => mod.Experience),
);
const Projects = dynamic(() =>
  import("@/components/sections/projects").then((mod) => mod.Projects),
);
const Certifications = dynamic(() =>
  import("@/components/sections/certifications").then(
    (mod) => mod.Certifications,
  ),
);
const Contact = dynamic(() =>
  import("@/components/sections/contact").then((mod) => mod.Contact),
);

/**
 * Home — Hero eager; below-fold sections code-split.
 */
export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  );
}
