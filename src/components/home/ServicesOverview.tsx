"use client";

import { Check } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";
import { CarouselCard, Carousel } from "@/components/ui/apple-cards-carousel";

export function ServicesOverview() {
  const cards = services.map((service, index) => (
    <CarouselCard
      key={service.id}
      card={{
        src: "", // Placeholder or we can add images to data/services.ts later
        title: service.title,
        category: "Service",
        content: (
          <div>
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                {service.description}
              </span>
            </p>
            <div className="mt-10 max-w-3xl mx-auto">
                <h4 className="font-semibold text-lg mb-4 text-neutral-700 dark:text-neutral-200">Key Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                             <Check className="w-5 h-5 text-primary shrink-0" />
                             <span>{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        ),
      }}
      index={index}
    />
  ));

  return (
    <section className="w-full h-full overflow-hidden bg-black text-white">
      <div className="py-10 md:py-20">
        <Container>
            <SectionHeading
            badge="Services"
            title="Everything you need to grow your channel"
            description="From short-form content to full production, we've got you covered with professional video editing services."
            />
        </Container>
      </div>
      
      <Carousel items={cards} />
    </section>
  );
}
