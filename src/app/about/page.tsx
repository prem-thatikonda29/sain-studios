import Link from "next/link";
import { Metadata } from "next";
import { Sparkles, Users, Zap } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CallToAction } from "@/components/layout/CallToAction";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Sain Studios - a premium video content creation agency helping creators transform their content.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <Container>
          {/* Hero */}
          <div className="max-w-3xl">
            <SectionHeading
              badge="About Us"
              title="We help creators turn content into communities"
              description="Sain Studios is a premium video editing agency dedicated to helping creators produce professional, engaging content that grows their audience."
            />
          </div>

          {/* Story Section */}
          <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Our Story
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We started Sain Studios with a simple belief: every creator
                  deserves access to professional video editing that matches
                  their vision.
                </p>
                <p>
                  Too many talented creators spend hours editing when they
                  should be creating. We built Sain Studios to change that.
                </p>
                <p>
                  Today, we work with creators across gaming, vlogs,
                  documentaries, and more - helping them produce content that
                  stands out and grows their audience.
                </p>
              </div>
            </div>
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/20 to-[#8A5CFF]/20 border border-border flex items-center justify-center">
              <span className="text-muted-foreground">Studio Image</span>
            </div>
          </div>

          {/* Values */}
          <div className="mt-24">
            <h3 className="text-2xl font-bold text-foreground text-center mb-12">
              What We Stand For
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">
                    Quality First
                  </h4>
                  <p className="text-muted-foreground">
                    We never compromise on quality. Every video we deliver is
                    crafted to the highest standards.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">
                    Creator Focused
                  </h4>
                  <p className="text-muted-foreground">
                    Your success is our success. We&apos;re invested in helping
                    you grow your audience and achieve your goals.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">
                    Fast & Reliable
                  </h4>
                  <p className="text-muted-foreground">
                    Consistent delivery you can count on. We meet deadlines so you
                    can maintain your posting schedule.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA */}
          <CallToAction
            title="Let's work together"
            description="Ready to take your content to the next level? We'd love to hear from you."
            buttonText="Get in Touch"
          />
        </Container>
      </main>
      <Footer />
    </>
  );
}
