import type { Metadata } from 'next';
import Header from "@/components/hostinger/Header";
import WelcomeMessage from "@/components/hostinger/WelcomeMessage";
import Hero from "@/components/hostinger/Hero";
import HeroImage from "@/components/hostinger/HeroImage";
import Stats from "@/components/hostinger/Stats";
import StudentStruggle from "@/components/hostinger/StudentStruggle";
import Platform from "@/components/hostinger/Platform";
import Testimonials from "@/components/hostinger/Testimonials";
import Pricing from "@/components/hostinger/Pricing";
import FAQ from "@/components/hostinger/FAQ";
import CallToAction from "@/components/hostinger/CallToAction";
import Footer from "@/components/hostinger/Footer";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Pharmaverse Pro - Master Your Pharm.D from Day 1 to Dr.',
  description: 'The only complete digital pharmacy education ecosystem...',
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <WelcomeMessage />
        <Hero />
        <HeroImage />
        <Stats />
        <StudentStruggle />
        <Platform />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
