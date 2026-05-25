export type ItemType = "project" | "certificate";
export type ProjectStatus = "live" | "maintenance" | "private";

export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  coverImage: string;
  tags: string[];
  type: ItemType;
  link?: string;
  status?: ProjectStatus;
  publisher?: string;
  credentialSrc?: string[];
  problem?: string;
  solution?: string;
  impact?: string;
  documentationSrc?: string[];
}
