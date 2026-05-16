"use client";
import { Home, User, Briefcase, Zap, Mail, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  icon: LucideIcon;
}

const navItems: NavItem[] = [
  { name: "Home", icon: Home },
  { name: "About", icon: User },
  { name: "Project", icon: Briefcase },
  { name: "Skill", icon: Zap },
  { name: "Contact", icon: Mail },
];

export default function Navbar() {
  return (
    <nav className="fixed bottom-15 left-1/2 z-99 -translate-x-1/2">
      <div className="flex items-center gap-3 md:gap-6 rounded-full border border-white/10 bg-card-bg/60 px-6 md:px-8 py-1 md:py-2 backdrop-blur-md shadow-2xl">
        {navItems.map((item) => (
          <a key={item.name} href={`#${item.name.toLowerCase()}`} className="group relative flex items-center justify-center p-2 text-description-text transition-all hover:text-white">
            {/* Tooltip: Cuma muncul di Mobile (kecil), Desktop OFF */}
            <span className="absolute -top-10 scale-0 rounded bg-card-bg px-2 py-1 mb-10 text-[12px] font-bold text-white transition-all group-hover:scale-100 md:hidden">{item.name}</span>

            <item.icon size={20} className="relative z-10" />

            {/* Nama Teks: Muncul di samping icon hanya di Desktop */}
            <span className="ml-2 hidden text-sm font-medium lg:block">{item.name}</span>

            {/* Animated Underline: Pengganti hover bg, lebih clean */}
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full hidden md:block" />
          </a>
        ))}
      </div>
    </nav>
  );
}
