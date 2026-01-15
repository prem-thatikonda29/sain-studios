"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PricingCard } from "@/components/pricing/PricingCard";
import { Button } from "@/components/ui/button";
import { EmailCaptureModal } from "@/components/auth/EmailCaptureModal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { pricingTiers } from "@/data/pricing";
import { faqs } from "@/data/faqs";

export function PricingContent() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const unlocked = localStorage.getItem("pricing_unlocked") === "true";
    setIsUnlocked(unlocked);
    setIsLoaded(true);
  }, []);

  const handleUnlock = () => {
    setIsUnlocked(true);
    setIsModalOpen(false);
  };

  return (
    <Container>
      <SectionHeading
        badge="Pricing"
        title="Simple, transparent pricing"
        description="Choose the plan that fits your content needs. No hidden fees, no surprises. All plans include dedicated support."
        align="center"
      />

      <div className="mt-16 relative">
        {/* Pricing Cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto transition-all duration-500 ${
            !isUnlocked && isLoaded ? "blur-md select-none pointer-events-none" : ""
          }`}
        >
          {pricingTiers.map((tier, index) => (
            <PricingCard key={tier.id} tier={tier} index={index} />
          ))}
        </div>

        {/* Overlay */}
        {isLoaded && !isUnlocked && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-center max-w-md px-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Lock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                Creator-Only Pricing
              </h3>
              <p className="text-muted-foreground mb-6">
                We don&apos;t publish our rates publicly. Drop your email to see
                exclusive pricing for serious creators.
              </p>
              <Button size="lg" onClick={() => setIsModalOpen(true)}>
                Reveal My Pricing
              </Button>
            </div>
          </motion.div>
        )}
      </div>

      {/* FAQ - always visible */}
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

      <EmailCaptureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleUnlock}
      />
    </Container>
  );
}
