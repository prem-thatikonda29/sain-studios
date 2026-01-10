"use client";

import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PricingCard } from "@/components/pricing/PricingCard";
import { pricingTiers } from "@/data/pricing";

export function PricingPreview() {
  return (
    <section className="py-24 md:py-32 bg-card/30">
      <Container>
        <SectionHeading
          badge="Pricing"
          title="Simple, transparent pricing"
          description="Choose the plan that fits your content needs. No hidden fees, no surprises."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <PricingCard key={tier.id} tier={tier} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
