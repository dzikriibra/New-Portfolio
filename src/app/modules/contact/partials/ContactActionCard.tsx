"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, LucideIcon } from "lucide-react";

interface ActionCardProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  href: string;
  variant?: "primary" | "outline";
}

export const ContactActionCard = ({ title, subtitle, icon: Icon, href, variant = "outline" }: ActionCardProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      whileHover={{ y: -5 }}
      className={`group relative flex items-center justify-between w-full p-6 rounded-2xl border transition-all duration-300 ${
        variant === "primary" ? "bg-accent border-accent text-white shadow-[0_0_20px_rgba(99,102,241,0.3)]" : "bg-card-bg/20 border-white/5 hover:border-accent/40"
      }`}
    >
      <div className="flex items-center gap-5">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${variant === "primary" ? "bg-white/20" : "bg-white/5 group-hover:bg-accent/10"}`}>
          <Icon size={24} className={variant === "primary" ? "text-white" : "text-white/40 group-hover:text-accent"} />
        </div>
        <div>
          <h4 className="font-bold text-lg leading-tight">{title}</h4>
          <p className={`text-sm ${variant === "primary" ? "text-white/70" : "text-description-text"}`}>{subtitle}</p>
        </div>
      </div>
      <ArrowUpRight className={`transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 ${variant === "primary" ? "text-white" : "text-white/20"}`} />
    </motion.a>
  );
};
