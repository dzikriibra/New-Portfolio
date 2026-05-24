import { SkillCategory } from "@/types/skill";
import { Atom, Palette, Layers2 } from "lucide-react";

export const skillCategories: SkillCategory[] = [
  {
    id: 1,
    title: "Frontend Systems",
    description: "Building responsive and structured interfaces with scalable UI patterns and reusable component architecture.",

    principles: ["Component-based architecture", "Responsive-first development", "Reusable UI systems", "Structured frontend flow"],

    tools: ["React", "TypeScript", "TailwindCSS", "Bootstrap", "Ant Design", "HTML5", "CSS3", "JavaScript"],

    icon: Atom,
    color: "#00F2FF",
  },

  {
    id: 2,
    title: "UI/UX & Visual Thinking",
    description: "Translating ideas into clean and understandable interfaces through hierarchy, spacing, and user-focused layouts.",

    principles: ["Visual hierarchy", "Layout consistency", "Readable interfaces", "User-focused structure"],

    tools: ["Wireframing", "Responsive Design", "Design Systems", "Figma", "Prototyping"],

    icon: Palette,
    color: "#A855F7",
  },

  {
    id: 3,
    title: "Development Workflow",
    description: "Supporting development processes through collaborative workflows, organized tooling, and iterative execution.",

    principles: ["Version control workflow", "API testing & debugging", "Project organization", "Iterative development"],

    tools: ["Git & GitHub", "Postman", "Swagger", "Notion", "ClickUp", "VSCode", "Laragon"],

    icon: Layers2,
    color: "#10B981",
  },
];
