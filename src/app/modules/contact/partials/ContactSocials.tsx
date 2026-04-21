import React from "react";
import { LucideIcon } from "lucide-react";

interface Social {
  icon: LucideIcon;
  label: string;
  sub: string;
  href: string;
  hoverColor: string;
}

export const ContactSocials = ({ socials }: { socials: Social[] }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group flex flex-col items-center justify-center p-6 rounded-2xl bg-card-bg/20 border border-white/5 transition-all hover:bg-card-bg/30 ${social.hoverColor.split(" ")[0]}`}
        >
          <social.icon size={28} className={`text-white/40 transition-all mb-2 group-hover:scale-110 ${social.hoverColor.split(" ")[1]}`} />
          <span className="text-[11px] font-semibold text-white uppercase tracking-tighter">{social.label}</span>
          <span className={`text-[10px] text-white/20 transition-colors ${social.hoverColor.split(" ")[1]}`}>{social.sub}</span>
        </a>
      ))}
    </div>
  );
};
