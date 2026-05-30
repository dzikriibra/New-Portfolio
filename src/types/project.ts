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

  problem?: string;
  solution?: string;
  impact?: string;
  documentationSrc?: string[];

  publisher?: string;
  issuedDate?: string;
  credentialId?: string;
  credentialSrc?: string[];
}
