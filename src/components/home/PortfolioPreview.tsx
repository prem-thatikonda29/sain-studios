"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Play, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const previewItems = [
  {
    id: 1,
    title: "Gaming Highlights",
    category: "Gaming",
    gradient: "from-white/10 to-white/5",
  },
  {
    id: 2,
    title: "Reaction Edit",
    category: "Reaction / Vlog",
    gradient: "from-neutral-800 to-neutral-900",
  },
  {
    id: 3,
    title: "Documentary Short",
    category: "Documentary",
    gradient: "from-white/5 to-white/10",
  },
  {
    id: 4,
    title: "Recipe Video",
    category: "Cooking",
    gradient: "from-neutral-900 to-neutral-800",
  },
];

export function PortfolioPreview() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <SectionHeading
            badge="Portfolio"
            title="Our recent work"
            description="See how we've helped creators transform their content and grow their audience."
          />
          <Button variant="underline" asChild>
            <Link href="/work" className="group">
              View All Work
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {previewItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href="/work" className="group block">
                <div
                  className={`relative aspect-video rounded-2xl bg-gradient-to-br ${item.gradient} overflow-hidden border border-border group-hover:border-primary/30 transition-all duration-300`}
                >
                  {/* Placeholder for video thumbnail */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 text-white fill-white ml-1" />
                    </div>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-black/30 backdrop-blur-sm border-0">
                      {item.category}
                    </Badge>
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="text-card-title font-semibold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-body-sm text-muted-foreground">{item.category}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
