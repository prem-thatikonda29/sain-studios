"use client";

import Link from "next/link";
import { Play, Instagram, MessageCircle } from "lucide-react";
import { Container } from "./Container";
import { Button } from "@/components/ui/button";

const footerLinks = {
  pages: [
    { href: "/work", label: "Work" },
    { href: "/services", label: "Services" },
    { href: "/process", label: "Process" },
    { href: "/pricing", label: "Pricing" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 text-foreground font-semibold text-xl tracking-tight mb-4"
            >
              <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center">
                <Play className="w-3.5 h-3.5 text-primary fill-primary" />
              </div>
              <span>SAIN STUDIOS</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Premium video content creation for creators who want to stand out.
              Transform your content with professional editing.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-foreground font-semibold text-sm mb-4">
              Pages
            </h3>
            <ul className="space-y-3">
              {footerLinks.pages.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-foreground font-semibold text-sm mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-foreground font-semibold text-sm mb-4">
              Connect
            </h3>
            <div className="flex gap-3">
              {/* Instagram */}
              <Button
                variant="outline"
                size="icon"
                asChild
              >
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </Button>

              {/* Discord */}
              <Button
                variant="outline"
                size="icon"
                asChild
              >
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Discord"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </Button>

              {/* WhatsApp */}
              <Button
                variant="outline"
                size="icon"
                asChild
              >
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Sain Studios. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
