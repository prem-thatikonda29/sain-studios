export type PortfolioCategory =
  | "all"
  | "gaming"
  | "reaction-vlog"
  | "documentary"
  | "cooking";

export interface PortfolioItem {
  id: string;
  title: string;
  category: Exclude<PortfolioCategory, "all">;
  thumbnail: string;
  videoUrl: string;
  client?: string;
}

export const portfolioCategories: { id: PortfolioCategory; label: string }[] = [
  { id: "all", label: "All Work" },
  { id: "gaming", label: "Gaming" },
  { id: "reaction-vlog", label: "Reaction / Vlog" },
  { id: "documentary", label: "Documentary" },
  { id: "cooking", label: "Cooking" },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Gaming Highlights Reel",
    category: "gaming",
    thumbnail: "/images/portfolio/gaming-1.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "2",
    title: "Epic Gaming Montage",
    category: "gaming",
    thumbnail: "/images/portfolio/gaming-2.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "3",
    title: "Reaction Video Edit",
    category: "reaction-vlog",
    thumbnail: "/images/portfolio/reaction-1.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "4",
    title: "Daily Vlog",
    category: "reaction-vlog",
    thumbnail: "/images/portfolio/vlog-1.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "5",
    title: "Documentary Short",
    category: "documentary",
    thumbnail: "/images/portfolio/doc-1.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "6",
    title: "Cashcow Video",
    category: "documentary",
    thumbnail: "/images/portfolio/doc-2.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "7",
    title: "Recipe Short",
    category: "cooking",
    thumbnail: "/images/portfolio/cooking-1.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "8",
    title: "Cooking Tutorial",
    category: "cooking",
    thumbnail: "/images/portfolio/cooking-2.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];
