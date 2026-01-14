import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { PricingCard } from "@/components/pricing/PricingCard";
import { pricingTiers } from "@/data/pricing";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";

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
            <SectionHeading
              badge="FAQ"
              title="Frequently Asked Questions"
              description="Everything you need to know about working with us"
              align="center"
            />
            <div className="space-y-6 mt-12">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
