"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { PricingTier } from "@/data/pricing";

interface PricingCardProps {
  tier: PricingTier;
  index?: number;
}

export function PricingCard({ tier, index = 0 }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card
        className={cn(
          "h-full flex flex-col relative",
          tier.popular
            ? "border-2 border-primary/50"
            : "border-border"
        )}
      >
        {tier.popular && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <Badge className="bg-gradient-to-r from-white to-neutral-400 text-black border-0">
              #bestdeal
            </Badge>
          </div>
        )}

        <CardHeader className="pb-4">
          <CardTitle className="text-card-title font-semibold">{tier.name}</CardTitle>
          <div className="mt-4 flex items-baseline gap-1">
            <span className="text-4xl font-bold text-foreground">
              ${tier.price}
            </span>
            <span className="text-muted-foreground">{tier.period}</span>
          </div>
        </CardHeader>

        <CardContent className="flex-1">
          <ul className="space-y-4">
            {tier.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>

        <CardFooter>
          <Button
            className="w-full"
            variant={tier.popular ? "default" : "outline"}
            asChild
          >
            <Link href="/contact">{tier.cta}</Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
