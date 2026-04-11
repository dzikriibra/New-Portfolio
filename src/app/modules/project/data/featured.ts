import { PortfolioItem } from "@/types/project";

export const featured: PortfolioItem[] = [
  {
    id: 1,
    title: "Micro ERP for Textile Industry",
    description: "Sistem manajemen produksi berbasis web untuk memantau alur kerja dari order hingga pengiriman secara real-time. Membantu efisiensi produksi hingga 40% di lingkungan pabrik.",
    coverImage: "/projects/sublim.jpg",
    tags: ["React", "Strapi", "MySQL", "Tailwind", "Ant Design", "Typescript"],
    link: "#",
    type: "project",
  },
  {
    id: 2,
    title: "Omni-Channel E-Commerce",
    description: "Platform belanja dengan integrasi multi-warehouse dan real-time inventory tracking. Dilengkapi dengan dashboard analytics untuk melihat performa penjualan harian.",
    coverImage: "/projects/ecommerce.jpg",
    tags: ["React", "Node.js", "Prisma", "PostgreSQL"],
    link: "#",
    type: "project",
  },
  {
    id: 3,
    title: "AI-Powered Task Manager",
    description: "Aplikasi manajemen tugas yang menggunakan AI untuk prioritas otomatis (Smart Sorting) dan estimasi waktu pengerjaan berdasarkan riwayat user.",
    coverImage: "/projects/ai-task.jpg",
    tags: ["Next.js", "OpenAI API", "Framer Motion"],
    link: "#",
    type: "project",
  },
  {
    id: 4,
    title: "Fintech Dashboard & Crypto Tracker",
    description: "Sistem monitoring keuangan pribadi yang terintegrasi dengan harga crypto real-time. Membantu user melakukan DCA (Dollar Cost Averaging) dengan visualisasi chart yang interaktif.",
    coverImage: "/projects/fintech.jpg",
    tags: ["TypeScript", "Chart.js", "CoinGecko API", "Firebase"],
    link: "#",
    type: "project",
  },
];
