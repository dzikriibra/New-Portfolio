import { LucideIcon } from "lucide-react";

interface StatsDataProps {
  label: string;
  value: string;
  icon: LucideIcon;
  color: string;
  hoverBorder: string;
}

export const AboutStats = ({ label, value, icon: Icon, color, hoverBorder }: StatsDataProps) => (
  <div className={`group flex items-center justify-between px-5 py-5 bg-card-bg/40 rounded-2xl border border-white/5 backdrop-blur-sm transition-all duration-300 ${hoverBorder}`}>
    <div className="flex flex-col">
      <div className="text-xl font-bold text-white leading-none">{value}</div>
      <div className="text-sm text-description-text mt-2 tracking-wider">{label}</div>
    </div>
    <Icon className={`${color} group-hover:scale-110 transition-transform duration-300`} size={28} />
  </div>
);
