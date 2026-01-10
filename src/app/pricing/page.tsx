import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { PricingCard } from "@/components/pricing/PricingCard";
import { pricingTiers } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for video editing services. Choose the plan that fits your content needs.",
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <Container>
          <SectionHeading
            badge="Pricing"
            title="Simple, transparent pricing"
            description="Choose the plan that fits your content needs. No hidden fees, no surprises. All plans include dedicated support."
            align="center"
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <PricingCard key={tier.id} tier={tier} index={index} />
            ))}
          </div>

          {/* FAQ */}
          <div className="mt-24 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground text-center mb-12">
              Frequently Asked Questions
            </h3>
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-foreground">
                    What&apos;s the turnaround time?
                  </h4>
                  <p className="mt-2 text-muted-foreground">
                    Typically 2-3 business days for short-form content, 5-7 days
                    for long-form videos. Rush delivery available upon request.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-foreground">
                    Can I upgrade or downgrade my plan?
                  </h4>
                  <p className="mt-2 text-muted-foreground">
                    Yes! You can change your plan at any time. Changes take effect
                    at the start of your next billing cycle.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-foreground">
                    What video formats do you deliver?
                  </h4>
                  <p className="mt-2 text-muted-foreground">
                    We deliver in all standard formats (MP4, MOV) optimized for
                    your target platform - YouTube, TikTok, Instagram, etc.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
