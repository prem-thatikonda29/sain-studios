"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, CheckCircle, MessageCircle } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { processSteps } from "@/data/process";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export default function ProcessPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24 bg-background relative overflow-hidden">
        <Container>
          <SectionHeading
            badge="Process"
            title="How we work together"
            description="A streamlined process designed to deliver exceptional results while keeping you in control."
            align="center"
          />

          {/* Process Timeline with Tracing Beam */}
          <div className="mt-20">
            <TracingBeam className="px-2">
              <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: index < 3 ? "0px" : "-100px" }}
                    transition={{ duration: 0.5, delay: index < 3 ? index * 0.1 : 0 }}
                    className="mb-10 last:mb-0"
                  >
                    <div className="font-sans bg-neutral-900/50 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-white/10 shadow-sm relative overflow-hidden group hover:border-white/20 transition-colors duration-300">
                      <div className="absolute top-0 right-0 p-4 opacity-20 font-bold text-4xl md:text-6xl text-white pointer-events-none select-none">
                        0{step.step}
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-4 relative z-10 group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-neutral-400 leading-relaxed relative z-10 text-sm md:text-base">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TracingBeam>
          </div>

          {/* What You Get Section with Bento Grid */}
          <div className="mt-32">
            <h3 className="text-3xl font-sans font-semibold text-foreground text-center mb-12">
              What you get with every project
            </h3>
            <BentoGrid className="max-w-4xl mx-auto">
              {items.map((item, i) => (
                <BentoGridItem
                  key={i}
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  icon={item.icon}
                  className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                />
              ))}
            </BentoGrid>
          </div>

          {/* CTA */}
          <div className="mt-32 text-center">
            <div className="max-w-3xl mx-auto bg-gradient-to-br from-primary/10 to-transparent p-12 rounded-[2rem] border border-primary/20">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Ready to start your project?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto text-lg">
                Book a free discovery call and let&apos;s discuss how we can help
                you create amazing content.
              </p>
              <Button size="lg" className="rounded-full px-8" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

const items = [
  {
    title: "Fast Turnaround",
    description: "2-3 days for shorts, 5-7 days for long-form content.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-800 items-center justify-center border border-white/5">
        <Clock className="w-10 h-10 text-neutral-300" />
      </div>
    ),
    icon: <Clock className="h-4 w-4 text-neutral-300" />,
  },
  {
    title: "Revisions Included",
    description: "Every plan includes revisions to ensure you're satisfied.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-800 items-center justify-center border border-white/5">
        <CheckCircle className="w-10 h-10 text-neutral-300" />
      </div>
    ),
    icon: <CheckCircle className="h-4 w-4 text-neutral-300" />,
  },
  {
    title: "Direct Communication",
    description: "Stay connected throughout the process via Discord or email.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-800 items-center justify-center border border-white/5">
        <MessageCircle className="w-10 h-10 text-neutral-300" />
      </div>
    ),
    icon: <MessageCircle className="h-4 w-4 text-neutral-300" />,
  },
];
