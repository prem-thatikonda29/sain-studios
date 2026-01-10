import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import { PricingPreview } from "@/components/home/PricingPreview";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesOverview />
        <PortfolioPreview />
        <PricingPreview />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
