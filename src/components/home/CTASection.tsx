"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-20">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl md:text-section font-semibold text-white tracking-tight leading-tight">
              Ready to elevate your content?
            </h2>
            <p className="mt-8 text-sm md:text-base text-muted-foreground leading-relaxed">
              Join 50+ creators who trust Sain Studios to deliver professional,
              engaging content that grows their audience.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 shrink-0 md:pt-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/work">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
