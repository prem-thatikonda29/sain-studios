export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "short-form",
    title: "Short-Form Content",
    description:
      "Engaging TikToks, Reels, and YouTube Shorts that capture attention and drive growth.",
    icon: "video",
    features: [
      "Trending format optimization",
      "Hook-focused editing",
      "Platform-specific sizing",
      "Captions & text overlays",
    ],
  },
  {
    id: "long-form",
    title: "Long-Form Videos",
    description:
      "Professional YouTube videos, vlogs, and documentaries that tell your story.",
    icon: "film",
    features: [
      "Storytelling structure",
      "B-roll integration",
      "Color grading",
      "Sound design & mixing",
    ],
  },
  {
    id: "thumbnails",
    title: "Thumbnail Design",
    description:
      "Click-worthy thumbnails that stand out in the feed and boost your CTR.",
    icon: "image",
    features: [
      "A/B testing variants",
      "Brand consistency",
      "Text optimization",
      "Eye-catching visuals",
    ],
  },
  {
    id: "strategy",
    title: "Content Strategy",
    description:
      "Research-backed content planning to help you grow your audience consistently.",
    icon: "chart",
    features: [
      "Topic research",
      "Trend analysis",
      "Posting schedule",
      "Performance tracking",
    ],
  },
];

export const serviceCategories = [
  "Gaming",
  "Reaction & Vlog",
  "Cashcow & Documentary",
  "Cooking",
  "Lifestyle",
  "Education",
];
