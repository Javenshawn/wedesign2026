export type PackageTier = {
  id: "economy" | "business" | "private-jet";
  name: string;
  originalPrice: number;
  price: number;
  savings: string;
  badge?: string;
  delivery: string;
  features: string[];
};

export type ProjectStatus = "in progress" | "review" | "completed" | "revision";

export type Project = {
  id: string;
  client: string;
  title: string;
  style: string;
  category: string;
  status: ProjectStatus;
  progress: number;
  designer: string;
  eta: string;
  updated: string;
  description: string;
};

export type PortfolioItem = {
  title: string;
  industry: string;
  color: string;
  image: string;
};

export type BlogPost = {
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  excerpt: string;
  image: string;
};

export type LocalOrder = {
  id: string;
  packageId: PackageTier["id"];
  packageName: string;
  price: number;
  createdAt: string;
  status: "local checkout" | "paid";
};
