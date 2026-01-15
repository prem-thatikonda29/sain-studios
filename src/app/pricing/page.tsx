import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PricingContent } from "@/components/pricing/PricingContent";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for video editing services. Choose the plan that fits your content needs.",
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <PricingContent />
      </main>
      <Footer />
    </>
  );
}
