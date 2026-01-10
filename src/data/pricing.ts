export interface PricingTier {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter Package",
    price: 399,
    period: "/MONTH",
    description: "Perfect for creators just getting started",
    features: [
      "8 short-form videos per month (Reels/TikTok/Shorts)",
      "Basic editing (cuts, captions, stock assets)",
      "1 thumbnail per video",
      "2 revisions per video",
      "Client provides script ideas and raw clips",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    id: "growth",
    name: "Growth Package",
    price: 699,
    period: "/month",
    description: "For creators ready to scale",
    features: [
      "16 short-form videos per month",
      "Thumbnails with A/B testing options",
      "Script guidance and topic research",
      "4 revisions per video",
      "Enhanced editing (captions, transitions, b-roll, sound design)",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    id: "authority",
    name: "Authority Package",
    price: 1199,
    period: "/month",
    description: "Full-service content management",
    features: [
      "Full workflow management",
      "Up to 30 short-form videos per month",
      "Unlimited revisions",
      "Client just records raw footage and sends it",
      "We handle everything: scripting, research, hooks, editing, posting, analytics",
    ],
    cta: "Get Started",
    popular: false,
  },
];
