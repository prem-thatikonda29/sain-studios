"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, CheckCircle, MessageCircle } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { processSteps } from "@/data/process";

export default function ProcessPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <Container>
          <SectionHeading
            badge="Process"
            title="How we work together"
            description="A streamlined process designed to deliver exceptional results while keeping you in control."
            align="center"
          />

          {/* Process Timeline */}
          <div className="mt-20 max-w-3xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-12 pb-12 last:pb-0"
              >
                {/* Timeline line */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-[18px] top-10 w-0.5 h-full bg-gradient-to-b from-primary to-[#8A5CFF]/30" />
                )}

                {/* Step number */}
                <div className="absolute left-0 top-0 w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                  {step.step}
                </div>

                {/* Content */}
                <Card className="hover:border-primary/30 transition-colors">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* What You Get Section */}
          <div className="mt-24">
            <h3 className="text-2xl font-bold text-foreground text-center mb-12">
              What you get with every project
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  Fast Turnaround
                </h4>
                <p className="text-sm text-muted-foreground">
                  2-3 days for shorts, 5-7 days for long-form content
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  Revisions Included
                </h4>
                <p className="text-sm text-muted-foreground">
                  Every plan includes revisions to ensure you&apos;re satisfied
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <MessageCircle className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  Direct Communication
                </h4>
                <p className="text-sm text-muted-foreground">
                  Stay connected throughout the process via Discord or email
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-24 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to start your project?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Book a free discovery call and let&apos;s discuss how we can help
              you create amazing content.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
