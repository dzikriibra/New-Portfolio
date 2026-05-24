import { LucideIcon } from "lucide-react";

export interface SkillCategory {
  id: number;
  title: string;
  description: string;
  principles: string[];
  tools: string[];
  icon: LucideIcon;
  color: string;
}
