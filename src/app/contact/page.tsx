"use client";

import { useState } from "react";
import { Instagram, MessageCircle, CheckCircle } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              badge="Contact"
              title="Let's create something amazing"
              description="Ready to transform your content? Fill out the form below or reach out directly through our social channels."
              align="center"
            />

            <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-3">
                {isSubmitted ? (
                  <Card className="p-8 text-center border-[#3CCB7F]/20 bg-[#3CCB7F]/5">
                    <CardContent className="pt-0">
                      <CheckCircle className="w-12 h-12 mx-auto text-[#3CCB7F] mb-4" />
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-muted-foreground">
                        Thanks for reaching out. We&apos;ll get back to you within
                        24 hours.
                      </p>
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        variant="outline"
                        className="mt-6"
                      >
                        Send Another Message
                      </Button>
                    </CardContent>
                  </Card>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium text-foreground"
                        >
                          Name
                        </label>
                        <Input
                          id="name"
                          required
                          value={formState.name}
                          onChange={(e) =>
                            setFormState({ ...formState, name: e.target.value })
                          }
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium text-foreground"
                        >
                          Email
                        </label>
                        <Input
                          type="email"
                          id="email"
                          required
                          value={formState.email}
                          onChange={(e) =>
                            setFormState({ ...formState, email: e.target.value })
                          }
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium text-foreground"
                      >
                        Subject
                      </label>
                      <Select
                        value={formState.subject}
                        onValueChange={(value) =>
                          setFormState({ ...formState, subject: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="project">Project Discussion</SelectItem>
                          <SelectItem value="pricing">Pricing Question</SelectItem>
                          <SelectItem value="support">Support</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-foreground"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        required
                        rows={5}
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({ ...formState, message: e.target.value })
                        }
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-8">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-foreground mb-4">
                      Connect With Us
                    </h3>
                    <div className="space-y-4">
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Instagram className="w-5 h-5" />
                        Instagram
                      </a>
                      <a
                        href="https://discord.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <MessageCircle className="w-5 h-5" />
                        Discord
                      </a>
                      <a
                        href="https://wa.me/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <MessageCircle className="w-5 h-5" />
                        WhatsApp
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-foreground mb-4">
                      Response Time
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      We typically respond within 24 hours during business days.
                      For urgent inquiries, reach out via WhatsApp or Discord.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
