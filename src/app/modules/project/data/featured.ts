import { PortfolioItem } from "@/types/project";

export const featured: PortfolioItem[] = [
  {
    id: 1,

    title: "TreeHealthy – AI Health Planner",

    description:
      "An AI-driven health management platform that transforms Indonesia's national CERDIK guidelines into personalized, 7-day actionable health routines to prevent Non-Communicable Diseases (NCDs). Built on a decoupled architecture, it features dynamic ML risk scoring, RAG-backed medical explainers, and interactive gamified habit tracking.",

    coverImage: "/cover/featured/treehealthy.webp",

    tags: ["React", "Tailwind CSS", "Node.js", "Express.js", "FastAPI", "Python", "Scikit-Learn", "Google Gemini API", "ChromaDB (RAG)", "PostgreSQL", "Recharts"],

    type: "project",

    status: "live",

    link: "https://treehealthy.vercel.app/",

    problem:
      "Non-Communicable Diseases (NCDs) like hypertension and diabetes affect 53.5% of Indonesians aged 15+. While the national 'CERDIK' health campaign is widely recognized, users struggle to translate generic health advice into concrete, personalized daily habits suited to their body profile.",

    solution:
      "Engineered a full-stack platform with a decoupled Express.js & FastAPI architecture. It combines a Random Forest ML model for real-time NCD risk scoring, a ChromaDB RAG pipeline for Kemenkes-verified AI medical explanations, and a Gemini AI generator that produces structured 7-day action plans with gamified tree-growth progress tracking.",

    impact:
      "Successfully bridged the gap between medical guidelines and daily execution by converting clinical health assessments into 100% actionable weekly tasks, boosting user engagement through visual growth feedback while maintaining zero-bug core flow stability.",

    documentationSrc: [],
  },

  {
    id: 2,
    title: "Textile Operations System",

    description:
      "An operational automation system designed to digitize conventional workflows within the textile manufacturing industry. Integrates raw material management, real-time cross-division order tracking, and employee performance monitoring into a centralized dashboard to reduce miscommunication and manual bureaucracy.",

    coverImage: "/cover/featured/sublim.webp",

    tags: ["React", "Strapi", "MySQL", "Tailwind", "Ant Design", "Typescript"],

    type: "project",

    status: "private",

    link: "",

    problem: "Manufacturing operations were heavily dependent on manual spreadsheets and paper-based reports, causing delayed communication between divisions, duplicated records, and poor production visibility.",

    solution: "Built a centralized operations dashboard that integrates material inventory, production orders, employee monitoring, and reporting into a single system accessible by multiple departments.",

    impact: "Reduced operational bottlenecks, improved cross-department visibility, and minimized administrative overhead through workflow automation.",

    documentationSrc: [],
  },

  {
    id: 3,

    title: "Smart Agriculture Prediction System",

    description:
      "A web-based information system developed to predict rice harvest production using Machine Learning algorithms. Integrates complex predictive research data into an intuitive, clear, and structured dashboard interface for end users.",

    coverImage: "/cover/featured/rice-prediction.webp",

    tags: ["React", "JavaScript", "Tailwind CSS", "Framer Motion", "Machine Learning"],

    type: "project",

    status: "private",

    link: "",

    problem: "Agricultural prediction data was difficult for non-technical stakeholders to understand, making research outcomes less actionable for decision makers.",

    solution: "Designed a dashboard that transforms machine learning prediction outputs into visual insights through charts, summaries, and forecasting indicators.",

    impact: "Improved accessibility of predictive analytics and helped stakeholders interpret harvest forecasts more efficiently.",

    documentationSrc: [],
  },

  {
    id: 4,

    title: "Automated Global Signal Filtering System",

    description:
      "An AI-powered information mitigation system designed to filter global news noise through impact-based analysis. The system detects, summarizes, and delivers world events that may create domino effects on economic stability, career decisions, and personal life directly to private communication channels.",

    coverImage: "/cover/featured/global-signal.webp",

    tags: ["TypeScript", "Next.js", "Strapi", "OpenAI API", "Telegram Bot API"],

    type: "project",

    status: "maintenance",

    link: "",

    problem: "Users were overwhelmed by excessive information sources and struggled to identify events that truly impact their finances, careers, and daily decisions.",

    solution: "Developed an AI filtering engine that evaluates global events, extracts relevant signals, and delivers concise impact-based summaries directly through Telegram.",

    impact: "Significantly reduced information overload while helping users focus on high-impact developments faster.",

    documentationSrc: [],
  },
];
