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
            {services.map((service) => (
              <Card
                key={service.id}
                className="group hover:border-primary/30 transition-colors"
              >
                <CardContent className="pt-6">
                  <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6 group-hover:bg-primary/20 transition-colors">
                    {icons[service.icon]}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-muted-foreground"
                      >
                        <Check className="w-5 h-5 text-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Niches Section */}
          <div className="mt-24">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">
              Niches We Specialize In
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
            <h3 className="text-2xl font-bold text-foreground mb-4">
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
