import type { SocialLink } from "@/types";

import { SITE_URL } from "@/lib/constants";

export const siteConfig = {
  name: "Mahabub Alam",
  url: SITE_URL,
  title: "Mahabub Alam — Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Next.js, Vue, and Node.js. Building polished, high-performance web products.",
  locale: "en_US",
  author: {
    name: "Mahabub Alam",
    fullName: "Mahabub Alam Bhuiyan",
    role: "Full Stack Developer",
    email: "ma.nahid960@gmail.com",
    phone: "+88 01834960466",
    location: "Uttara, Dhaka",
    degree: "BSc in Computer Science",
  },
  hero: {
    greeting: "Hello, my name is",
    headline: "I craft fast, thoughtful digital experiences.",
    bio: "Full-stack developer with 4+ years building polished web products — from storefronts and booking platforms to internal tools — with a front-end focus and end-to-end delivery.",
  },
  about: {
    eyebrow: "About",
    title: "Building products that feel clear, fast, and considered.",
    bio: "I'm Mahabub Alam Bhuiyan — dedicated to learning new technologies and solving real-world challenges. Strong analytical skills and attention to detail help me deliver high-quality work, both independently and in teams. I focus on visually engaging, user-friendly experiences that feel seamless.",
  },
  skillsIntro:
    "I build robust web applications with HTML, CSS, JavaScript, React, Next.js, Vue, Node.js, Express, Bootstrap, and Tailwind.",
  contact: {
    eyebrow: "Contact",
    title: "Have a project in mind?",
    subtitle:
      "I'm available for full-time roles, freelance work, and thoughtful collaborations.",
    formTitle: "Send a message",
  },
  cta: {
    hire: "Hire me",
    work: "View work",
    cv: "Download CV",
    cvHref: "/files/mahabub-cv.pdf",
  },
  social: [
    {
      label: "GitHub",
      href: "https://github.com/manahidbhuiyan",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/manahidbhuiyan/",
      icon: "linkedin",
    },
    {
      label: "Email",
      href: "mailto:ma.nahid960@gmail.com",
      icon: "email",
    },
  ] satisfies SocialLink[],
} as const;
