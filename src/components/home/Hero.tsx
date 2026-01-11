"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px]" />

      <Container className="relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/10">
              Premium Video Content Creation
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-hero font-[480] tracking-tight leading-[1.1]"
          >
            Transform your content into{" "}
            <span className="text-gradient">viral moments</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-hero-body text-muted-foreground max-w-2xl leading-relaxed"
          >
            Professional video editing for creators who want to stand out.
            Gaming, vlogs, documentaries, and more. We handle the editing, you
            focus on creating.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" asChild>
              <Link href="/work">View Our Work</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 pt-16 border-t border-border grid grid-cols-3 gap-8"
          >
            <div>
              <div className="text-3xl md:text-4xl font-bold text-foreground">
                500+
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                Videos Delivered
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-foreground">
                50+
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                Happy Creators
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-foreground">
                10M+
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                Views Generated
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
