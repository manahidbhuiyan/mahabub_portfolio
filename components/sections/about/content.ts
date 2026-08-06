export const aboutContent = {
  eyebrow: "About Me",
  title: "Building products that feel fast, clear, and dependable.",
  introduction:
    "I'm Mahabub — a full-stack engineer who cares about real users, clean systems, and shipping work teams can trust.",
  image: {
    src: "/images/profile.jpg",
    alt: "Portrait of Mahabub Alam",
    role: "Full Stack Software Engineer",
    location: "Dhaka, Bangladesh",
    experience: "3+ Years",
  },
  story: [
    {
      id: "who",
      title: "Who I am",
      points: [
        "Full Stack Software Engineer based in Dhaka",
        "Focused on business problems, not buzzwords",
        "I care about clarity, pace, and products people trust",
      ],
    },
    {
      id: "journey",
      title: "How I got here",
      points: [
        "Started in web design and frontend craft",
        "Grew into backend systems and APIs",
        "Now ship full-stack product work end to end",
      ],
    },
    {
      id: "build",
      title: "What I build",
      points: [
        "Customer platforms and internal tools",
        "React, Next.js, Node.js, TypeScript stacks",
        "Interfaces that stay maintainable as they grow",
      ],
    },
    {
      id: "goal",
      title: "What drives me",
      points: [
        "Clean architecture and continuous learning",
        "Performance as a product requirement",
        "Software that creates lasting business value",
      ],
    },
  ],
  highlights: [
    {
      id: "experience",
      icon: "briefcase" as const,
      title: "Experience",
      value: "3+ Years",
      description: "Production delivery",
    },
    {
      id: "projects",
      icon: "layers" as const,
      title: "Projects",
      value: "9+",
      description: "Shipped products",
    },
    {
      id: "stack",
      icon: "code" as const,
      title: "Stack",
      value: "12+",
      description: "Tools in daily use",
    },
    {
      id: "role",
      icon: "sparkles" as const,
      title: "Role",
      value: "Full Stack",
      description: "Amana Group Ltd.",
    },
    {
      id: "location",
      icon: "map" as const,
      title: "Based in",
      value: "Dhaka",
      description: "Remote-friendly",
    },
  ],
  strengths: [
    "Clean Code",
    "Responsive Design",
    "Performance",
    "REST APIs",
    "Full Stack Delivery",
    "Problem Solving",
  ],
} as const;
