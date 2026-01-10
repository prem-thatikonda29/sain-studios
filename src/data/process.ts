export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery Call",
    description:
      "We learn about your brand, goals, and content style through a free consultation. This helps us understand exactly what you need.",
  },
  {
    step: 2,
    title: "Content Strategy",
    description:
      "We create a tailored content plan based on your niche and target audience. Research-backed topics that resonate with your viewers.",
  },
  {
    step: 3,
    title: "Production",
    description:
      "You send raw footage, we handle editing, graphics, and post-production. Our team brings your vision to life with professional polish.",
  },
  {
    step: 4,
    title: "Review & Revisions",
    description:
      "You review the content and request any changes within your revision limit. We iterate until you're completely satisfied.",
  },
  {
    step: 5,
    title: "Delivery & Growth",
    description:
      "Receive your polished content ready to post. Track performance and iterate. Watch your channel grow with consistent, quality content.",
  },
];
