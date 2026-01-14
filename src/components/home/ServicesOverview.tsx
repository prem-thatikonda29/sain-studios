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
      layout={true}
      card={{
        src: `/services/service-${index + 1}.svg`,
        title: service.title,
        category: "Service",
        content: (
          <div>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-xl font-sans max-w-3xl text-left">
              <span className="font-bold text-muted-foreground dark:text-neutral-200">
                {service.description}
              </span>
            </p>
            <div className="mt-10 max-w-3xl text-left">
                <h4 className="font-semibold font-sans text-base mb-4 muted-foreground dark:text-neutral-200">Key Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-muted-foreground dark:text-neutral-400 text-sm">
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
    <section className="w-full h-full bg-black text-white">
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
