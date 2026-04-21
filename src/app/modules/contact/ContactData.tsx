import { Github, Instagram, Linkedin, Mail, MessageSquare } from "lucide-react";

export const CONTACT_DATA = {
  info: {
    title: "Let's Start a Conversation",
    description: "Whether you have a project in mind, a leadership role to fill, or just want to discuss the future of digital solutions — I'm ready to connect.",
    location: "Karawang, West Java",
    email: "workwithdzikri@gmail.com",
    cvUrl: "./public/curriculum-vitae/Dzikri Ibrahim Wahhab CV.pdf",
    responseTime: "LESS THAN 24 HOURS",
    availability: "PART-TIME & FREELANCE",
  },
  socials: [
    { icon: Github, label: "Github", sub: "Repositories", href: "https://github.com/dzikriibra", hoverColor: "group-hover:border-white group-hover:text-white" },
    { icon: Instagram, label: "Instagram", sub: "Life & Works", href: "https://www.instagram.com/dzikriibr_?igsh=aW5tZHUyeThtYjIx", hoverColor: "group-hover:border-pink-500 group-hover:text-pink-500" },
    { icon: Linkedin, label: "LinkedIn", sub: "Professional", href: "https://www.linkedin.com/in/dzikri-ibrahim-wahhab", hoverColor: "group-hover:border-blue-500 group-hover:text-blue-500" },
  ],
  actions: [
    {
      title: "Consult Your Project",
      subtitle: "Chat via WhatsApp — fastest response",
      icon: MessageSquare,
      href: "https://wa.me/6282319083042",
      variant: "primary" as const,
    },
    {
      title: "Book a Discovery Call",
      subtitle: "Send email — for detailed briefs",
      icon: Mail,
      href: "mailto:workwithdzikri@gmail.com",
      variant: "outline" as const,
    },
  ],
};
