import { PortfolioItem } from "@/types/project";

export const projects: PortfolioItem[] = [
  {
    id: 1,
    title: "Mountain Climbing Guide v1",
    description: "Comprehensive climbing management module: from preparation risk management, standard equipment checklists, to weight distribution techniques on the transport equipment to ensure stability and ergonomics.",
    coverImage: "/cover/projects/hiking-v1.jpg",
    tags: ["HTML", "CSS"],
    link: "https://hiking-guide-v1.vercel.app/",
    type: "project",
    documentationSrc: ["/docs/projects/hiking/guide1.png", "/docs/projects/hiking/guide2.png"],
    status: "maintenance",
  },
  {
    id: 2,
    title: "Legacy Portfolio v1",
    description: "My initial professional portfolio project developed during an intensive web development course. Focused on applying core web fundamentals and understanding the end-to-end deployment process",
    coverImage: "/cover/projects/oldportfolio.png",
    tags: ["HTML", "CSS", "Javascript", "Bootstrap"],
    link: "https://dzikriibra-oldporto.vercel.app/",
    type: "project",
  },
  {
    id: 3,
    title: "Sport Apparel Logo Design",
    description: "A professional logo design project for a sports apparel brand. Focuses on rapid visual exploration, creating 10+ iterations within 4 hours to find the perfect balance between brand identity and modern aesthetics.",
    coverImage: "/cover/projects/logo-jersey.png",
    tags: ["Logo Design", "Figma", "Apparel System", "Rapid Prototyping"],
    link: "",
    type: "project",
    status: "maintenance",
  },
  {
    id: 4,
    title: "Halcyon Batch Identity",
    description: "A digital archive and community profile for my high school batch. Designed to preserve memories and showcase member directories through a modern interface, bridging high school nostalgia with professional web standards.",
    coverImage: "/cover/projects/halcyon.png",
    tags: ["React", "Tailwind CSS", "TypeScript", "Framer Motion"],
    link: "",
    type: "project",
    status: "maintenance",
  },
];
