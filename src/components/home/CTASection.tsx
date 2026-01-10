"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-gradient-to-br from-primary/20 via-card to-[#8A5CFF]/20 p-12 md:p-20 overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#8A5CFF]/20 rounded-full blur-[80px]" />

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-snug">
              Ready to transform your content?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Join 50+ creators who trust Sain Studios to deliver professional,
              engaging content that grows their audience. Let&apos;s create
              something amazing together.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/work">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
