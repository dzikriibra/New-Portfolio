import { PortfolioItem } from "@/types/project";

export const projects: PortfolioItem[] = [
  {
    id: 1,
    title: "Mountain Climbing Guide v1",

    description: "Comprehensive climbing management module: from preparation risk management, standard equipment checklists, to weight distribution techniques on the transport equipment to ensure stability and ergonomics.",

    coverImage: "/cover/projects/hiking-v1.jpg",

    tags: ["HTML5", "CSS3"],

    link: "https://hikingguide.vercel.app/",

    type: "project",

    status: "live",

    problem: `
Many beginner climbers struggle to find reliable and structured information before starting their hiking journey. Most learning resources are scattered across blog posts, social media content, online forums, and personal experiences, making it difficult to distinguish accurate guidance from misinformation.

Critical knowledge such as physical preparation, route planning, weather assessment, equipment selection, emergency procedures, and backpack load management is often fragmented and inconsistent. As a result, beginners frequently underestimate the importance of proper preparation and focus only on reaching the summit rather than understanding the risks involved during the expedition.

Another challenge is the lack of beginner-oriented educational platforms that present hiking knowledge in a simple, sequential, and easy-to-understand format. Many available resources assume prior experience and use technical terminology without sufficient explanation, creating barriers for newcomers entering the outdoor community.

These issues can contribute to poor decision-making, unnecessary equipment purchases, physical exhaustion due to improper load distribution, and increased exposure to preventable safety risks during hiking activities.
  `,

    solution: `
Mountain Climbing Guide v1 was developed as a centralized educational platform specifically designed for beginner hikers. The website consolidates essential hiking knowledge into a structured learning experience that guides users from the earliest planning stages to post-expedition evaluation.

The platform provides dedicated sections covering expedition preparation, standard hiking equipment recommendations, risk management principles, safety considerations, and practical backpack organization techniques. Information is arranged in a logical progression to ensure users can gradually build understanding without feeling overwhelmed.

To improve accessibility, complex concepts are simplified into concise explanations supported by organized layouts and beginner-friendly language. The guide emphasizes practical decision-making rather than theoretical discussion, helping users understand not only what actions should be taken but also why those actions are important.

Special attention is given to load distribution strategies because improper packing is one of the most common issues experienced by novice climbers. The platform explains how equipment weight affects balance, endurance, and comfort throughout an expedition, enabling users to prepare more efficiently and reduce unnecessary physical strain.

By centralizing key preparation materials into a single web-based resource, the project aims to reduce information fragmentation and create a more accessible entry point for individuals interested in outdoor exploration.
  `,

    impact: `
The project successfully provides a structured reference point for individuals who are new to hiking and outdoor activities. Instead of searching through multiple sources with varying levels of credibility, users can access essential preparation materials within a single platform.

The guide improves awareness of hiking safety fundamentals by introducing concepts such as risk identification, equipment readiness, emergency preparedness, and physical conditioning before expeditions. This encourages a preparation-first mindset rather than a summit-first mindset, which is critical for long-term safety in outdoor environments.

Users are also able to develop a better understanding of backpack load management and equipment prioritization. This knowledge can contribute to improved comfort during hikes, reduced fatigue, and more efficient packing strategies, particularly for multi-day trips.

From a technical perspective, the project serves as an early demonstration of frontend development skills, including semantic HTML structure, responsive layout implementation, content organization, and user-focused information architecture. It also established foundational experience in deploying static web applications and translating real-world problems into digital solutions.

Overall, the platform contributes both educational value for beginner hikers and practical development experience through the creation of a purpose-driven web project.
  `,

    documentationSrc: ["/docs/projects/hiking/guide1.png", "/docs/projects/hiking/guide2.png"],
  },

  {
    id: 2,

    title: "Legacy Portfolio v1",

    description: "My initial professional portfolio project developed during an intensive web development course. Focused on applying core web fundamentals and understanding the end-to-end deployment process.",

    coverImage: "/cover/projects/oldportfolio.png",

    tags: ["HTML5", "CSS3", "Javascript", "Bootstrap"],

    link: "https://dzikriibra-oldporto.vercel.app/",

    type: "project",

    status: "live",

    problem: "As a beginner developer, I needed a professional platform to showcase projects while learning responsive design, deployment workflows, and frontend fundamentals.",

    solution: "Built a portfolio website from scratch using core web technologies and deployed it publicly to gain hands-on experience with real-world development workflows.",

    impact: "Established an online professional presence and became the foundation for future portfolio iterations and personal branding efforts.",

    documentationSrc: ["/cover/projects/oldportfolio.png"],
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

    problem: "The client required a strong and recognizable visual identity for a sports apparel brand but had not yet established a clear brand direction.",

    solution: "Conducted rapid design exploration, generating multiple logo concepts and visual directions before refining the strongest candidate into a final identity system.",

    impact: "Accelerated the branding process and provided the client with several validated design directions for future marketing materials.",

    documentationSrc: ["/cover/projects/logo-jersey.png"],
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

    problem: "Important memories, achievements, and member information from the batch were scattered across social media platforms and private chats without a centralized archive.",

    solution: "Created a dedicated digital platform that combines batch history, member profiles, and community identity into a single accessible experience.",

    impact: "Strengthened community engagement and preserved collective memories through a modern digital archive.",

    documentationSrc: ["/cover/projects/halcyon.png"],
  },

  {
    id: 5,

    title: "Personal GeoMemo v1 (WMaps)",

    description:
      "A personal interactive map designed to record, save, and revisit memorable travel experiences. Features location search, destination history markers, and smart navigation to preserve every meaningful place you've visited.",

    coverImage: "/cover/projects/geomemo.jpg",

    tags: ["JavaScript", "Leaflet.js", "Bootstrap 5", "HTML5", "CSS3"],

    link: "https://wheatstone-maps.vercel.app/",

    type: "project",

    status: "live",

    problem: "Travel memories are often stored in disconnected formats such as photo galleries, notes, or social media posts, making them difficult to revisit geographically.",

    solution: "Developed an interactive mapping platform that allows users to store, visualize, and revisit meaningful locations through location markers and map-based navigation.",

    impact: "Transforms travel memories into an organized geographical timeline, improving personal documentation and trip recollection.",

    documentationSrc: ["/cover/projects/geomemo.jpg"],
  },
];
