import { Atom, Layers2, Palette } from "lucide-react";

export const skillCategories = [
  {
    id: 1,
    title: "Frontend",
    count: "10 technologies",
    label: "Core",
    icon: Atom,
    skills: ["HTML5", "CSS3", "Javascript", "Typescript", "Bootstrap", "TailwindCSS", "Ant Design", "React", "PHP", "Laragon"],
  },
  {
    id: 2,
    title: "Design Exploration",
    count: "4 Tools",
    label: "UI/UX",
    icon: Palette,
    skills: ["Prototyping", "Wireframing", "Design Systems", "Responsive Design"],
  },
  {
    id: 3,
    title: "Development Tools",
    count: "9 tools",
    label: "Support",
    icon: Layers2,
    skills: ["VSCode", "VS 2022", "Figma", "Canva", "Postman", "Swagger", "Git & Github", "Notion", "Sticky Note", "Click Up"],
  },
];
