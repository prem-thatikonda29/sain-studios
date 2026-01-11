import Link from "next/link";
import { Metadata } from "next";
import { Video, Film, Image, BarChart3, Check } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { services, serviceCategories } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional video editing services for creators. Short-form content, long-form videos, thumbnails, and content strategy.",
};

const icons: Record<string, React.ReactNode> = {
  video: <Video className="w-8 h-8" />,
  film: <Film className="w-8 h-8" />,
  image: <Image className="w-8 h-8" />,
  chart: <BarChart3 className="w-8 h-8" />,
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <Container>
          <SectionHeading
            badge="Services"
            title="Everything you need to grow"
            description="From short-form viral content to full production, we offer comprehensive video editing services tailored to your needs."
            align="center"
          />

          {/* Services Grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="rounded-3xl bg-neutral-900 w-full min-h-[420px] overflow-hidden flex flex-col items-start justify-start relative z-10 group"
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 z-25 pointer-events-none" />
                {/* Image background */}
                <div className="absolute inset-0 z-10">
                    <img 
                        src={`/services/service-${index + 1}.svg`} 
                        alt={service.title} 
                        className="object-cover w-full h-full opacity-50"
                    />
                </div>

                <div className="absolute h-full top-0 inset-x-0 bg-black/60 z-20 pointer-events-none" />
                <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-t from-black via-black/40 to-transparent z-20 pointer-events-none" />

                <div className="relative z-30 p-6 md:p-10 h-full flex flex-col w-full justify-end">
                  <div className="mt-auto">
                    <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-4">
                        {service.title}
                    </h3>
                    
                    <p className="text-neutral-300 text-base leading-relaxed mb-6 max-w-lg">
                        {service.description}
                    </p>

                    <div className="space-y-3">
                        <h4 className="text-[12px] font-semibold text-white/80 uppercase tracking-[0.2em]">Key Features</h4>
                        <div className="grid grid-cols-1 gap-2">
                            {service.features.map((feature) => (
                                <div key={feature} className="flex items-center gap-3">
                                    <Check className="w-4 h-4 text-white shrink-0" />
                                    <span className="text-sm text-white/80">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Niches Section */}
          <div className="mt-24">
            <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
              Niches we specialize in
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {serviceCategories.map((category) => (
                <Badge
                  key={category}
                  variant="outline"
                  className="px-6 py-3 text-base hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-24 text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Ready to get started?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Let&apos;s discuss your project and find the perfect solution for
              your content needs.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
