import { Atom, Layers2, Palette } from "lucide-react";

export const skillCategories = [
  {
    id: 1,
    title: "Frontend",
    count: "10 technologies",
    label: "Core",
    icon: Atom,
    color: "#00F2FF",
    colorRgb: "0, 242, 255",
    skills: ["HTML5", "CSS3", "Javascript", "Typescript", "Bootstrap", "TailwindCSS", "Ant Design", "React", "PHP", "Laragon"],
  },
  {
    id: 2,
    title: "Design Exploration",
    count: "4 Tools",
    label: "UI/UX",
    icon: Palette,
    color: "#A855F7",
    colorRgb: "168, 85, 247",
    skills: ["Prototyping", "Wireframing", "Design Systems", "Responsive Design"],
  },
  {
    id: 3,
    title: "Development Tools",
    count: "9 tools",
    label: "Support",
    icon: Layers2,
    color: "#10B981",
    colorRgb: "16, 185, 129",
    skills: ["VSCode", "VS 2022", "Figma", "Canva", "Postman", "Swagger", "Git & Github", "Notion", "Sticky Note", "Click Up"],
  },
];
