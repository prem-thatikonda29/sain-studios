"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  portfolioCategories,
  portfolioItems,
  type PortfolioCategory,
} from "@/data/portfolio";
import { cn } from "@/lib/utils";

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("all");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <Container>
          <SectionHeading
            badge="Portfolio"
            title="Our work speaks for itself"
            description="Browse through our recent projects across different content categories. Click to play."
            align="center"
          />

          {/* Category Filter */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {portfolioCategories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "rounded-full hover:cursor-pointer",
                  activeCategory === category.id && "bg-primary"
                )}
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <motion.div
            layout
            className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedVideo(item.videoUrl)}
                >
                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-card border border-border group-hover:border-primary/50 transition-all">
                    {/* Gradient placeholder for thumbnail */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-[#8A5CFF]/20" />

                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-white fill-white ml-1" />
                      </div>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <Badge variant="secondary" className="bg-black/40 backdrop-blur-sm border-0 capitalize">
                        {item.category.replace("-", " / ")}
                      </Badge>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    {item.client && (
                      <p className="text-sm text-muted-foreground">
                        {item.client}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="mt-16 text-center py-12">
              <p className="text-muted-foreground">
                No projects found in this category.
              </p>
            </div>
          )}
        </Container>
      </main>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 text-white hover:text-primary"
              >
                <X className="w-8 h-8" />
              </Button>
              <iframe
                src={selectedVideo}
                className="w-full h-full rounded-xl"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
