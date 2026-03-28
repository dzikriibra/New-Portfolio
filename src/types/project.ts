export type ItemType = "project" | "certificate";

export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  type: ItemType;
  imageTone?: "light" | "dark";
}
