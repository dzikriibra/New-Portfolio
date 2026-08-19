import { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Frontend Developer & Assistant Project Manager",
    company: "Independent Client Project",
    period: "Nov 2025 – Jul 2026",
    type: "Freelance — Hybrid",
    description:
      "Engineered an end-to-end production monitoring system (ERP) for fabric and clothing manufacturing. Built responsive dashboard interfaces—covering pre-order workflows, raw material management, PO summaries, and multi-role performance tracking—while bridging client requirements into actionable flowcharts and contract agreements.",
    approaches: [
      {
        id: "app-1",
        number: "01",
        title: "Translating Business to Technical Logic",
        description: "Bridged human requirements into structured technical flowcharts and actionable tasks, ensuring clear alignment between client operational needs and development execution.",
      },
      {
        id: "app-2",
        number: "02",
        title: "Complex API Integration & Debugging",
        description: "Navigated steep learning curves by mastering asynchronous data fetching, state caching with React Query, and backend API contract debugging using Swagger and Strapi.",
      },
      {
        id: "app-3",
        number: "03",
        title: "Cross-Role & Team Dynamics",
        description: "Fostered effective cross-role communication, emotional management, and field observations to optimize team velocity and deliver production-ready features on schedule.",
      },
    ],
  },
  {
    id: "exp-2",
    role: "Brand Identity & Visual Designer",
    company: "Independent Client Project",
    period: "Oct 2025",
    type: "Freelance — Remote",
    description: "Conceptualized and delivered a custom brand identity and logo system for athletic apparel. Translated client vision into scalable vector assets optimized for high-resolution sublimation and textile production.",
    approaches: [
      {
        id: "app-4",
        number: "01",
        title: "Visual Identity & Concepting",
        description: "Transformed abstract ideas into a distinctive logo design that reflects the team's character, focus, and visual aesthetic.",
      },
      {
        id: "app-5",
        number: "02",
        title: "Production-Ready Execution",
        description: "Ensured precision vector output, color calibration, and format compatibility tailored specifically for jersey print manufacturing.",
      },
      {
        id: "app-6",
        number: "03",
        title: "Client-Centric Refinement",
        description: "Facilitated active feedback loops and iterative design adjustments to perfectly align the visual result with the client's expectations.",
      },
    ],
  },
];
