'use client';

import { useState, useEffect } from 'react';
import Header from '../../../../components/common/Header';
import HeroSection from './HeroSection';
import ProblemSection from './ProblemSection';
import SolutionSection from './SolutionSection';
import TestimonialsSection from './TestimonialsSection';
import PricingSection from './PricingSection';
import FAQSection from './FAQSection';
import Footer from './Footer';

const LandingPageInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  return (
    <div className="flex flex-col min-h-screen bg-[#022c22]">
       <Header />
       <main className="flex-grow">
         <HeroSection />
         <ProblemSection />
         <SolutionSection />
         <TestimonialsSection />
         <PricingSection />
         <FAQSection />
       </main>
       <Footer />
    </div>
  );
};

export default LandingPageInteractive;
