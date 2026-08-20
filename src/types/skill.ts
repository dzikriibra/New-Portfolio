export interface SkillSection {
  label: string;
  items: string[];
}

export interface Skill {
  id: number;
  number: string;
  title: string;
  description: string;
  sections: SkillSection[];
}
