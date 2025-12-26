'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/common/Header';
import TrustIndicatorBar from '@/components/common/TrustIndicatorBar';
import InteractiveDashboardModal from '@/components/common/InteractiveDashboardModal';
import ConversionProgressTracker from '@/components/common/ConversionProgressTracker';
import SmartCTAController from '@/components/common/SmartCTAController';
import HeroSection from './HeroSection';
import ProblemSection from './ProblemSection';
import SolutionSection from './SolutionSection';
import TestimonialsSection from './TestimonialsSection';
import PricingSection from './PricingSection';
import FAQSection from './FAQSection';
import FreeTrialSection from './FreeTrialSection';
import Footer from './Footer';

const LandingPageInteractive = () => {
  const [isDashboardModalOpen, setIsDashboardModalOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleDemoClick = () => {
    setIsDashboardModalOpen(true);
  };

  const handleModalClose = () => {
    setIsDashboardModalOpen(false);
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="animate-pulse">
          <div className="h-20 bg-muted" />
          <div className="h-screen bg-gradient-to-br from-secondary to-primary" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <ConversionProgressTracker />
      <Header />
      <TrustIndicatorBar />
      
      <main>
        <HeroSection onDemoClick={handleDemoClick} />
        <ProblemSection />
        <SolutionSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <FreeTrialSection />
      </main>

      <Footer />

      <InteractiveDashboardModal 
        isOpen={isDashboardModalOpen} 
        onClose={handleModalClose} 
      />

      <SmartCTAController />
    </div>
  );
};

export default LandingPageInteractive;