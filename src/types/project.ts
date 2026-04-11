export type ItemType = "project" | "certificate";

export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  coverImage: string;
  tags: string[];
  link: string;
  type: ItemType;
  publisher?: string;
  status?: string;
  // new type
  challenge?: string;
  strategy?: string;
  documentationSrc?: string[];
  credentialSrc?: string[];
}
