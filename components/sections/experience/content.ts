export type ExperienceRole = {
  id: string;
  company: string;
  role: string;
  employmentType: string;
  location: string;
  startDate: string;
  endDate?: string;
  status: "current" | "past";
  summary: string;
  stack: string[];
  responsibilities: string[];
  contributions: string[];
  learnings: string[];
};

export const experienceContent = {
  eyebrow: "Experience",
  title: "Building real-world software through continuous growth",
  description:
    "Each role sharpened how I ship — clearer judgment, tighter collaboration, and more reliable delivery for real users and businesses.",
  roles: [
    {
      id: "amana-fs",
      company: "Amana Group Limited",
      role: "Full Stack Developer",
      employmentType: "Full-time",
      location: "Uttara, Dhaka",
      startDate: "2024-07",
      status: "current",
      summary:
        "I own full-stack delivery across e-commerce, POS, and internal platforms — turning product goals into interfaces, APIs, and tools teams rely on every day.",
      stack: [
        "React",
        "Next.js",
        "TypeScript",
        "Vue",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "Git",
      ],
      responsibilities: [
        // "Ship responsive apps for customers and internal teams",
        "Build reusable UI shared across products",
        "Design and maintain REST APIs",
        // "Integrate services into production workflows",
        // "Partner with product, design, and engineering",
        "Improve performance and reliability",
        // "Debug production issues with clear habits",
        "Keep growing codebases maintainable",
      ],
      contributions: [
        "Led a complete e-commerce platform from build to launch",
        "Kept cross-team delivery cohesive and efficient",
        "Extended POS features that streamline retail ops",
      ],
      learnings: [
        "Full-stack ownership raises quality end to end",
        "Speed matters — architecture that stays maintainable matters more",
        "Technical decisions land better in business language",
      ],
    },
    {
      id: "amana-jr",
      company: "Amana Group Limited",
      role: "Jr. Full Stack Developer",
      employmentType: "Full-time",
      location: "Uttara, Dhaka",
      startDate: "2022-05",
      endDate: "2024-06",
      status: "past",
      summary:
        "I grew from feature implementation into stronger ownership — analysis, design, development, testing, and release across the project lifecycle.",
      stack: [
        "JavaScript",
        "Vue",
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Bootstrap",
        "SCSS",
        "Git",
      ],
      responsibilities: [
        "Build and iterate production web features",
        // "Adapt interfaces for mobile screen sizes",
        // "Support backend development and troubleshooting",
        "Work with designers, engineers, and PMs",
        "Join debugging, testing, and deployment",
        "Improve UI consistency across breakpoints",
      ],
      contributions: [
        "Delivered production-ready features across products",
        "Strengthened responsive experiences for real users",
        "Helped teams move faster front-to-back",
      ],
      learnings: [
        "Small UI details compound into better UX",
        "Owning work from analysis to release builds judgment",
        "Early collaboration reduces rework later",
      ],
    },
    {
      id: "techgen",
      company: "TechGenBD Limited",
      role: "Web Designer",
      employmentType: "Full-time",
      location: "Banasree, Dhaka",
      startDate: "2022-02",
      endDate: "2022-04",
      status: "past",
      summary:
        "Client-facing design and front-end work — translating briefs into clear, responsive interfaces and learning how delivery feels from the customer side.",
      stack: ["HTML", "CSS", "JavaScript", "Bootstrap", "Responsive Design"],
      responsibilities: [
        "Create pages with modern markup and CSS",
        "Deliver responsive layouts across devices",
        "Meet clients on requirements and progress",
        "Turn design direction into usable interfaces",
      ],
      contributions: [
        "Shipped client pages that matched briefs and deadlines",
        "Built an early foundation in responsive craft",
        "Grew confidence with non-technical stakeholders",
      ],
      learnings: [
        "Careful listening turns requirements into better UI",
        "Responsive design is product quality, not polish",
        "Clear communication keeps projects moving",
      ],
    },
  ] satisfies ExperienceRole[],
  achievements: [
    {
      id: "performance",
      title: "Improved application performance",
      description:
        "Focused on smoother interfaces and leaner delivery so products feel fast in real use — not only in demos.",
    },
    {
      id: "features",
      title: "Delivered production-ready features",
      description:
        "Shipped features that moved from design through testing into live environments with clear ownership.",
    },
    {
      id: "components",
      title: "Built reusable component architecture",
      description:
        "Created shared UI patterns that reduced duplication and kept product surfaces consistent.",
    },
    {
      id: "ux",
      title: "Enhanced user experience",
      description:
        "Prioritized clarity, responsiveness, and reliable flows across customer and internal tools.",
    },
    {
      id: "velocity",
      title: "Reduced development friction",
      description:
        "Improved maintainability and collaboration so teams could iterate with less rework.",
    },
    {
      id: "collaboration",
      title: "Collaborated across teams",
      description:
        "Worked with design, product, and engineering to keep delivery aligned and practical.",
    },
  ],
  highlights: [
    {
      id: "frontend",
      icon: "layout" as const,
      title: "Frontend Engineering",
      description: "Interfaces that stay clear, responsive, and maintainable.",
    },
    {
      id: "backend",
      icon: "server" as const,
      title: "Backend Development",
      description: "APIs and services that support real product workflows.",
    },
    {
      id: "api",
      icon: "network" as const,
      title: "API Integration",
      description: "Connecting clients and services with predictable contracts.",
    },
    {
      id: "performance",
      icon: "gauge" as const,
      title: "Performance Optimization",
      description: "Treating speed as part of product quality.",
    },
    {
      id: "state",
      icon: "layers" as const,
      title: "State Management",
      description: "Predictable client state for complex product flows.",
    },
    {
      id: "responsive",
      icon: "smartphone" as const,
      title: "Responsive Design",
      description: "Experiences that feel native across screen sizes.",
    },
    {
      id: "problems",
      icon: "lightbulb" as const,
      title: "Problem Solving",
      description: "Engineering choices guided by business outcomes.",
    },
  ],
  philosophy: {
    quote:
      "Great software is rarely about one clever trick — it comes from clean architecture, thoughtful UX, continuous learning, and collaboration that keeps quality high as the product grows.",
    attribution: "Mahabub Alam",
  },
} as const;

export function formatExperienceRange(startDate: string, endDate?: string) {
  return `${formatMonthYear(startDate)} – ${endDate ? formatMonthYear(endDate) : "Present"}`;
}

function formatMonthYear(value: string) {
  if (/^\d{4}$/.test(value)) return value;
  const [year, month] = value.split("-");
  if (!year || !month) return value;
  const date = new Date(Number(year), Number(month) - 1, 1);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}
