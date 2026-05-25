import { PortfolioItem } from "@/types/project";

export const featured: PortfolioItem[] = [
  {
    id: 1,
    title: "Centralized Manufacturing Operations System",
    description:
      "An operational automation system designed to digitize conventional workflows within the textile manufacturing industry. Integrates raw material management, real-time cross-division order tracking, and employee performance monitoring into a centralized dashboard to reduce miscommunication and manual bureaucracy.",
    coverImage: "/cover/featured/sublim.jpg",
    tags: ["React", "Strapi", "MySQL", "Tailwind", "Ant Design", "Typescript"],
    link: "#",
    type: "project",
  },
  {
    id: 2,
    title: "Smart Agriculture Predictive Dashboard",
    description:
      "A web-based information system developed to predict rice harvest production using Machine Learning algorithms. Integrates complex predictive research data into an intuitive, clear, and structured dashboard interface for end users.",
    coverImage: "/cover/featured/rice-prediction.jpg",
    tags: ["React", "JavaScript", "Tailwind CSS", "Framer Motion", "Machine Learning"],
    link: "#",
    type: "project",
  },
  {
    id: 3,
    title: "Automated Global Signal Filtering System",
    description:
      "An AI-powered information mitigation system designed to filter global news 'noise' through impact-based analysis. The system detects, summarizes, and delivers world events that may create domino effects on economic stability, career decisions, and personal life directly to private communication channels.",
    coverImage: "/cover/featured/global-signal.jpg",
    tags: ["TypeScript", "Next.js", "Strapi", "OpenAI API", "Telegram Bot API"],
    link: "#",
    type: "project",
  },
];
