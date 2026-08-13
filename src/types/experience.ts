export interface Approach {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  type: string;
  description: string;
  approaches: Approach[];
}
