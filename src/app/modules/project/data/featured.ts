import { PortfolioItem } from "@/types/project";

export const featured: PortfolioItem[] = [
  {
    id: 1,
    title: "Centralized Textile Operations Dashboard",
    description:
      "Sistem otomatisasi operasional untuk mendigitalisasi alur kerja konvensional pada industri manufaktur tekstil. Mengintegrasikan manajemen bahan baku, pelacakan progres order antar divisi secara real-time, hingga monitoring performa karyawan dalam satu dashboard terpusat guna mengeliminasi miskomunikasi dan birokrasi manual.",
    coverImage: "/cover/featured/sublim.jpg",
    tags: ["React", "Strapi", "MySQL", "Tailwind", "Ant Design", "Typescript"],
    link: "#",
    type: "project",
  },
  {
    id: 2,
    title: "Smart Agriculture Predictive Dashboard",
    description:
      "Sistem informasi berbasis web untuk memprediksi hasil produksi panen padi menggunakan algoritma Machine Learning. Mengintegrasikan visualisasi data riset prediktif yang kompleks ke dalam dashboard interface yang intuitif, clear, dan structured bagi pengguna.",
    coverImage: "/cover/featured/rice-prediction.jpg",
    tags: ["React", "JavaScript", "Tailwind CSS", "Framer Motion", "Machine Learning"],
    link: "#",
    type: "project",
  },
  {
    id: 3,
    title: "Automated Global Signal Filtering System",
    description:
      "Sistem mitigasi informasi yang menyaring 'noise' berita global menggunakan AI layer berbasis analisa dampak. Sistem ini mendeteksi, merangkum, dan mengirimkan peristiwa dunia apa pun yang memiliki efek domino terhadap stabilitas ekonomi, keputusan karier, dan kehidupan personal langsung ke channel komunikasi privat.",
    coverImage: "/cover/featured/global-signal.jpg",
    tags: ["TypeScript", "Next.js", "Strapi", "OpenAI API", "Telegram Bot API"],
    link: "#",
    type: "project",
  },
];
