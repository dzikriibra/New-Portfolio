import { Atom, Layers2, Palette } from "lucide-react";

export const skillCategories = [
  {
    id: 1,
    title: "Frontend Engineer",
    count: "8 technologies",
    label: "Core",
    icon: Atom,
    color: "#00F2FF",
    colorRgb: "0, 242, 255",
    skills: ["HTML5", "CSS3", "Javascript", "Typescript", "Bootstrap", "TailwindCSS", "Ant Design", "React"],
  },
  {
    id: 2,
    title: "UI/UX & Visual Thinking",
    count: "6 Principles",
    label: "UI/UX",
    icon: Palette,
    color: "#A855F7",
    colorRgb: "168, 85, 247",
    skills: ["Prototyping", "Wireframing", "Design Systems", "Responsive Design", "Visual Hierarchy", "UX Thinking"],
  },
  {
    id: 3,
    title: "Development Workflow / Tools",
    count: "8 tools",
    label: "Support",
    icon: Layers2,
    color: "#10B981",
    colorRgb: "16, 185, 129",
    skills: ["VSCode", "Figma", "Postman", "Swagger", "Git & Github", "Notion", "Click Up", "Laragon"],
  },
];
