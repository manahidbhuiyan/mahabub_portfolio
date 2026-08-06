export type SkillCategoryId =
  | "frontend"
  | "backend"
  | "database"
  | "tools"
  | "learning";

export type SkillItem = {
  id: string;
  name: string;
  description: string;
  category: SkillCategoryId;
  icon: string;
};

export const skillsContent = {
  eyebrow: "Tech Stack",
  title: "Technologies I use to build modern software",
  description:
    "A focused stack for designing, shipping, and maintaining scalable web products — chosen for clarity and long-term maintainability.",
  categories: [
    { id: "frontend" as const, label: "Frontend" },
    { id: "backend" as const, label: "Backend" },
    { id: "database" as const, label: "Database" },
    { id: "tools" as const, label: "Tools" },
    { id: "learning" as const, label: "Currently Learning" },
  ],
  skills: [
    {
      id: "react",
      name: "React",
      description: "Building modern interactive interfaces.",
      category: "frontend",
      icon: "react",
    },
    {
      id: "nextjs",
      name: "Next.js",
      description: "Production-ready React framework.",
      category: "frontend",
      icon: "nextjs",
    },
    {
      id: "typescript",
      name: "TypeScript",
      description: "Type-safe scalable development.",
      category: "frontend",
      icon: "typescript",
    },
    {
      id: "tailwind",
      name: "Tailwind CSS",
      description: "Utility-first responsive UI.",
      category: "frontend",
      icon: "tailwind",
    },
    {
      id: "redux",
      name: "Redux Toolkit",
      description: "Predictable client state management.",
      category: "frontend",
      icon: "redux",
    },
    {
      id: "rtk-query",
      name: "RTK Query",
      description: "Efficient API state management.",
      category: "frontend",
      icon: "rtk",
    },
    {
      id: "responsive",
      name: "Responsive Design",
      description: "Cross-device layout optimization.",
      category: "frontend",
      icon: "responsive",
    },
    {
      id: "nodejs",
      name: "Node.js",
      description: "Backend APIs and server-side apps.",
      category: "backend",
      icon: "nodejs",
    },
    {
      id: "express",
      name: "Express.js",
      description: "RESTful backend architecture.",
      category: "backend",
      icon: "express",
    },
    {
      id: "rest",
      name: "REST API",
      description: "Clear client–server communication.",
      category: "backend",
      icon: "api",
    },
    {
      id: "jwt",
      name: "JWT",
      description: "Secure authentication flows.",
      category: "backend",
      icon: "jwt",
    },
    {
      id: "mongodb",
      name: "MongoDB",
      description: "Flexible NoSQL data modeling.",
      category: "database",
      icon: "mongodb",
    },
    {
      id: "git",
      name: "Git",
      description: "Version control and collaboration.",
      category: "tools",
      icon: "git",
    },
    {
      id: "vscode",
      name: "VS Code",
      description: "Daily editor for focused delivery.",
      category: "tools",
      icon: "code",
    },
    {
      id: "postman",
      name: "Postman",
      description: "API design, testing, and debugging.",
      category: "tools",
      icon: "postman",
    },
    {
      id: "system-design",
      name: "System Design",
      description: "Structuring scalable product architecture.",
      category: "learning",
      icon: "architecture",
    },
    {
      id: "perf",
      name: "Performance",
      description: "Measuring and improving web vitals.",
      category: "learning",
      icon: "gauge",
    },
    {
      id: "a11y",
      name: "Accessibility",
      description: "Inclusive interfaces for every user.",
      category: "learning",
      icon: "accessibility",
    },
  ] satisfies SkillItem[],
  focus: {
    title: "Currently Exploring",
    description:
      "Deepening the craft beyond frameworks — architecture, speed, and inclusive UX.",
    items: [
      "Next.js",
      "System Design",
      "Performance Optimization",
      "Clean Architecture",
      "Accessibility",
      "Modern UI Engineering",
    ],
  },
  principles: [
    {
      id: "clean-code",
      icon: "code" as const,
      title: "Clean Code",
      description: "Readable, intentional code that teams can trust.",
    },
    {
      id: "reusable",
      icon: "blocks" as const,
      title: "Reusable Components",
      description: "Composable UI that scales across products.",
    },
    {
      id: "scalable",
      icon: "architecture" as const,
      title: "Scalable Architecture",
      description: "Structures that grow without becoming fragile.",
    },
    {
      id: "performance",
      icon: "gauge" as const,
      title: "Performance First",
      description: "Fast experiences as a product requirement.",
    },
    {
      id: "accessibility",
      icon: "accessibility" as const,
      title: "Accessibility",
      description: "Interfaces that work for more people.",
    },
    {
      id: "responsive",
      icon: "responsive" as const,
      title: "Responsive Design",
      description: "Layouts that feel native on every screen.",
    },
    {
      id: "maintainability",
      icon: "wrench" as const,
      title: "Maintainability",
      description: "Systems that stay clear months later.",
    },
    {
      id: "problem-solving",
      icon: "lightbulb" as const,
      title: "Problem Solving",
      description: "Business outcomes over shiny abstractions.",
    },
  ],
  cta: {
    title: "Need these skills on your team?",
    description:
      "I build production software with a clear stack and strong engineering habits.",
    primary: { label: "View Projects", href: "/#projects" },
    secondary: { label: "Contact Me", href: "/#contact" },
  },
} as const;
