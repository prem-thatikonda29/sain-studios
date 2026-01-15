export type PortfolioCategory =
  | "all"
  | "gaming"
  | "reaction-vlog"
  | "documentary"
  | "cooking";

export type VideoSource = "youtube" | "drive";

export interface PortfolioItem {
  id: string;
  title: string;
  category: Exclude<PortfolioCategory, "all">;
  thumbnail: string;
  videoId: string;
  source: VideoSource;
}

export const portfolioCategories: { id: PortfolioCategory; label: string }[] = [
  { id: "all", label: "All Work" },
  { id: "gaming", label: "Gaming" },
  { id: "reaction-vlog", label: "Reaction / Vlog" },
  { id: "documentary", label: "Documentary" },
  { id: "cooking", label: "Cooking" },
];

// Helper to generate embed URLs
export function getEmbedUrl(item: PortfolioItem): string {
  if (item.source === "youtube") {
    return `https://www.youtube-nocookie.com/embed/${item.videoId}?autoplay=1`;
  }
  return `https://drive.google.com/file/d/${item.videoId}/preview`;
}

// Helper to generate YouTube thumbnails
export function getThumbnail(item: PortfolioItem): string {
  if (item.source === "youtube") {
    return `https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`;
  }
  // Drive videos use provided thumbnails
  return item.thumbnail;
}

export const portfolioItems: PortfolioItem[] = [
  // Gaming (7 videos - all Drive)
  {
    id: "gaming-1",
    title: "Gaming Edit #1",
    category: "gaming",
    thumbnail: "/thumbnails/gaming-1.jpg",
    videoId: "1IsgSYBoQGWb9mT9Da0wPlhGXA8je5dCV",
    source: "drive",
  },
  {
    id: "gaming-2",
    title: "Gaming Edit #2",
    category: "gaming",
    thumbnail: "/thumbnails/gaming-2.jpg",
    videoId: "1k-1ZeYoTuXizbFXiR_fPk7DWD9WCRyVx",
    source: "drive",
  },
  {
    id: "gaming-3",
    title: "Gaming Edit #3",
    category: "gaming",
    thumbnail: "/thumbnails/gaming-3.jpg",
    videoId: "1zi3dZMQOCzsYZu69WG-APmeijCl2uZpt",
    source: "drive",
  },
  {
    id: "gaming-4",
    title: "Gaming Edit #4",
    category: "gaming",
    thumbnail: "/thumbnails/gaming-4.jpg",
    videoId: "1PkvW4KRM3-TJ-TYsE33BEVDB-kd4rx64",
    source: "drive",
  },
  {
    id: "gaming-5",
    title: "Gaming Edit #5",
    category: "gaming",
    thumbnail: "/thumbnails/gaming-5.jpg",
    videoId: "1DVhI6zr2U3Tk9zqJSX7eu9xEeCuyKDHW",
    source: "drive",
  },
  {
    id: "gaming-6",
    title: "Gaming Edit #6",
    category: "gaming",
    thumbnail: "/thumbnails/gaming-6.jpg",
    videoId: "1VutkZf0FNflbnan9a3JsGKRJ5AOd7KKI",
    source: "drive",
  },
  {
    id: "gaming-7",
    title: "Gaming Edit #7",
    category: "gaming",
    thumbnail: "/thumbnails/gaming-7.jpg",
    videoId: "1vI2a3kIsaDzWa4caBoUA9BwUivDN6ive",
    source: "drive",
  },

  // Reaction & Vlog (5 videos - all Drive)
  {
    id: "vlog-1",
    title: "Vlog Edit #1",
    category: "reaction-vlog",
    thumbnail: "/thumbnails/vlog-1.jpg",
    videoId: "1N_-744JubrXsrODez7HvIlDnf2orbE0_",
    source: "drive",
  },
  {
    id: "vlog-2",
    title: "Vlog Edit #2",
    category: "reaction-vlog",
    thumbnail: "/thumbnails/vlog-2.jpg",
    videoId: "1bUqyeeSBdvCzvQdv5FqVNRTBWoME4sGe",
    source: "drive",
  },
  {
    id: "vlog-3",
    title: "Vlog Edit #3",
    category: "reaction-vlog",
    thumbnail: "/thumbnails/vlog-3.jpg",
    videoId: "1dpU_w4ZfysjMDiwWcjJWrvN3atnOWdZT",
    source: "drive",
  },
  {
    id: "vlog-4",
    title: "Vlog Edit #4",
    category: "reaction-vlog",
    thumbnail: "/thumbnails/vlog-4.jpg",
    videoId: "1d_XU4QstMUBfrLkJi5QBHJqPWpIydw-f",
    source: "drive",
  },
  {
    id: "vlog-5",
    title: "Vlog Edit #5",
    category: "reaction-vlog",
    thumbnail: "/thumbnails/vlog-5.jpg",
    videoId: "1V_SrywL_UrVPzeodjBrVtFTRKik88lP-",
    source: "drive",
  },

  // Documentary (7 videos - 3 YouTube + 4 Drive)
  {
    id: "doc-1",
    title: "Documentary #1",
    category: "documentary",
    thumbnail: "", // Will use YouTube thumbnail
    videoId: "plLlgt4dKpA",
    source: "youtube",
  },
  {
    id: "doc-2",
    title: "Documentary #2",
    category: "documentary",
    thumbnail: "", // Will use YouTube thumbnail
    videoId: "RsBnUZi0oCE",
    source: "youtube",
  },
  {
    id: "doc-3",
    title: "Documentary #3",
    category: "documentary",
    thumbnail: "", // Will use YouTube thumbnail
    videoId: "ejgfyszGu8k",
    source: "youtube",
  },
  {
    id: "doc-4",
    title: "Documentary #4",
    category: "documentary",
    thumbnail: "/thumbnails/doc-4.jpg",
    videoId: "1syPYmjlttNis5UcsZ7AjL1FP_Z_e1PQN",
    source: "drive",
  },
  {
    id: "doc-5",
    title: "Documentary #5",
    category: "documentary",
    thumbnail: "/thumbnails/doc-5.jpg",
    videoId: "1kLt5FES6S8KWKQ39B5cZrvkTcRdjrbez",
    source: "drive",
  },
  {
    id: "doc-6",
    title: "Documentary #6",
    category: "documentary",
    thumbnail: "/thumbnails/doc-6.jpg",
    videoId: "1dAkiTklrxLOux_eCf2ImbfVXZebftooL",
    source: "drive",
  },
  {
    id: "doc-7",
    title: "Documentary #7",
    category: "documentary",
    thumbnail: "/thumbnails/doc-7.jpg",
    videoId: "1Ermj_nkImW8cvpO45ZLLpkrFMzND19wu",
    source: "drive",
  },

  // Cooking (5 videos - all Drive)
  {
    id: "cooking-1",
    title: "Cooking Edit #1",
    category: "cooking",
    thumbnail: "/thumbnails/cooking-1.jpg",
    videoId: "1iabNYqeFaXdPOQEgojybPpRPhyjH7YGD",
    source: "drive",
  },
  {
    id: "cooking-2",
    title: "Cooking Edit #2",
    category: "cooking",
    thumbnail: "/thumbnails/cooking-2.jpg",
    videoId: "1Mo_LHLrSTSIu0ovq1ru31PJ1uaEH18MN",
    source: "drive",
  },
  {
    id: "cooking-3",
    title: "Cooking Edit #3",
    category: "cooking",
    thumbnail: "/thumbnails/cooking-3.jpg",
    videoId: "1W2vpWz1_oW1ABSF1uO0qzm2vrRaxImjz",
    source: "drive",
  },
  {
    id: "cooking-4",
    title: "Cooking Edit #4",
    category: "cooking",
    thumbnail: "/thumbnails/cooking-4.jpg",
    videoId: "1PIa8ycFu6gA3TgkYYOc-BsOxX4rCtPmy",
    source: "drive",
  },
  {
    id: "cooking-5",
    title: "Cooking Edit #5",
    category: "cooking",
    thumbnail: "/thumbnails/cooking-5.jpg",
    videoId: "1zYx5OPY61uk6BHqpTqqD3P4fAP6SAQTq",
    source: "drive",
  },
];
