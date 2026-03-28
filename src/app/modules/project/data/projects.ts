import { PortfolioItem } from "@/types/project";

export const projects: PortfolioItem[] = [
  {
    id: 1,
    title: "Halcyon Profile",
    description: "Personal portfolio website built with high-performance optimization and sleek dark-themed design.",
    image: "/hlcn.png",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "https://github.com",
    type: "project",
    imageTone: "light",
  },
  {
    id: 2,
    title: "Counting Zakat",
    description: "A digital solution to calculate various types of Zakat with precision and easy-to-use interface.",
    image: "/projects/count.jpg",
    tags: ["React", "TypeScript", "Lucide"],
    link: "https://github.com",
    type: "project",
    imageTone: "light",
  },
  {
    id: 3,
    title: "Simple Calculator",
    description: "Feature-rich calculator app with calculation history and interactive glassmorphism UI.",
    image: "/projects/calc.jpg",
    tags: ["JavaScript", "CSS Modules"],
    link: "https://github.com",
    type: "project",
    imageTone: "dark",
  },
  {
    id: 4,
    title: "Dashboard SaaS",
    description: "Administrative dashboard for managing user data and real-time analytics integration.",
    image: "/projects/saas.jpg",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    link: "https://github.com",
    type: "project",
    imageTone: "dark",
  },
];
