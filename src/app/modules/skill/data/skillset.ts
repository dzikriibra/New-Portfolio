import { Skill } from "@/types/skill";

export const skillset: Skill[] = [
  {
    id: 1,
    number: "1",
    title: "Frontend Tools",
    description: "Building structured, responsive, and maintainable interfaces for real-world digital products.",
    sections: [
      {
        label: "Core",
        items: ["React", "Next.js", "TypeScript"],
      },
      {
        label: "Interface",
        items: ["Tailwind CSS", "Ant Design", "Framer Motion"],
      },
      {
        label: "Foundation",
        items: ["HTML", "CSS", "JavaScript"],
      },
      {
        label: "Focus",
        items: ["Component architecture", "Responsive development", "Reusable UI", "API integration"],
      },
    ],
  },

  {
    id: 2,
    number: "2",
    title: "Design & Interfaces",
    description: "Translating visual concepts and product requirements into clear, usable interfaces.",
    sections: [
      {
        label: "Tools & Workspace",
        items: ["Figma", "FigJam"],
      },
      {
        label: "UI & Design System",
        items: ["Design tokens", "Color & typography systems", "Auto-layout components", "UI prototyping"],
      },
      {
        label: "Product Practices",
        items: ["Visual hierarchy", "Responsive layout", "Design-to-code translation", "Component consistency"],
      },
    ],
  },

  {
    id: 3,
    number: "3",
    title: "Development Practice",
    description: "Working with structured processes and reusable systems to turn requirements into reliable interfaces.",
    sections: [
      {
        label: "How I Build",
        items: ["Component-based architecture", "Reusable UI patterns", "Responsive-first development", "Structured project organization", "Consistent implementation"],
      },
      {
        label: "How I Collaborate",
        items: ["Translating requirements into interfaces", "Working with design specifications", "Communicating technical constraints", "Iterating based on feedback"],
      },
    ],
  },
];
