"use client";

import { motion } from "framer-motion";
import { Video, Film, Image, BarChart3, Check } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/data/services";

const icons: Record<string, React.ReactNode> = {
  video: <Video className="w-6 h-6" />,
  film: <Film className="w-6 h-6" />,
  image: <Image className="w-6 h-6" />,
  chart: <BarChart3 className="w-6 h-6" />,
};

export function ServicesOverview() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeading
          badge="Services"
          title="Everything you need to grow your channel"
          description="From short-form content to full production, we've got you covered with professional video editing services."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border hover:border-primary/30 transition-colors">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                      {icons[service.icon]}
                    </div>
                    <div>
                      <h3 className="text-card-title font-semibold text-foreground">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-body text-muted-foreground">
                        {service.description}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <Check className="w-4 h-4 text-primary shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
