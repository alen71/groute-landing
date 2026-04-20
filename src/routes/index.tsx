import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/landing/Hero";
import { Pain } from "@/components/landing/Pain";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Features } from "@/components/landing/Features";
import { Fines } from "@/components/landing/Fines";
import { Pricing } from "@/components/landing/Pricing";
import { CTA } from "@/components/landing/CTA";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

function LandingPage() {
  useRevealOnScroll();
  return (
    <main>
      <Hero />
      <Pain />
      <HowItWorks />
      <Features />
      <Fines />
      <Pricing />
      <CTA />
    </main>
  );
}

export const Route = createFileRoute("/")({
  component: LandingPage,
});
