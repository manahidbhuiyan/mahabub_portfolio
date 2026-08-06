export const certificationsContent = {
  eyebrow: "Certifications",
  title: "Continuous Learning & Professional Development",
  description:
    "Certifications, courses, and milestones that reflect ongoing learning and a commitment to software engineering excellence.",
  certifications: [
    {
      id: "tailwind-ostad",
      name: "Complete Mastering Tailwind CSS",
      organization: "Ostad Platform",
      issued: "2024",
      credentialId: undefined,
      verifyUrl: undefined,
      tags: ["Tailwind CSS", "Responsive UI", "Frontend"],
      monogram: "OS",
    },
    {
      id: "fullstack-shikhbe",
      name: "Complete Full Stack Web Development",
      organization: "Shikhbe Shobai Platform",
      issued: "2019",
      credentialId: undefined,
      verifyUrl: undefined,
      tags: ["HTML", "CSS", "JavaScript", "Full Stack"],
      monogram: "SS",
    },
  ],
  achievements: [
    {
      id: "engineer",
      title: "Software Engineer",
      description:
        "Growing through real production roles — from web design into full-stack delivery.",
      icon: "briefcase" as const,
    },
    {
      id: "fullstack",
      title: "Full Stack Development",
      description:
        "Shipping interfaces, APIs, and data flows as one connected product experience.",
      icon: "layers" as const,
    },
    {
      id: "production",
      title: "Production Applications",
      description:
        "Building and maintaining software used in real business operations.",
      icon: "rocket" as const,
    },
    {
      id: "learning",
      title: "Continuous Learning",
      description:
        "Investing in courses and craft to keep skills current and practical.",
      icon: "book" as const,
    },
    {
      id: "problems",
      title: "Technical Problem Solving",
      description:
        "Debugging, iterating, and improving systems with clear engineering judgment.",
      icon: "lightbulb" as const,
    },
  ],
  philosophy: {
    quote:
      "The best engineers never stop learning. Every project, challenge, and technology is another chance to build software with more clarity, care, and craft.",
    attribution: "Mahabub Alam",
  },
} as const;
