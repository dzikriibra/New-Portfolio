import { Code2, Globe, GraduationCap } from "lucide-react";

export const ABOUT_DATA = {
  typeWriterItems: [" Clarity", " Structure", " Precision", " Consistency"],
  profileImage: "/BDD.jpg",
  stats: [
    {
      label: "Years of Experience",
      value: "1+",
      icon: Globe,
      color: "text-accent",
      hoverBorder: "hover:border-accent",
    },
    {
      label: "Project Completed",
      value: "12+",
      icon: Code2,
      color: "text-green-600",
      hoverBorder: "hover:border-green-700",
    },
    {
      label: "Certificate",
      value: "8+",
      icon: GraduationCap,
      color: "text-amber-400",
      hoverBorder: "hover:border-amber-400",
    },
  ],
};
