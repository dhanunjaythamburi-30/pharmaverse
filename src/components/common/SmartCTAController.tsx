'use client';

import { useState, useEffect } from 'react';

import Icon from '@/components/ui/AppIcon';

interface SmartCTAControllerProps {
  className?: string;
}

const SmartCTAController = ({ className = '' }: SmartCTAControllerProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ctaType, setCtaType] = useState<'trial' | 'demo'>('trial');
  const [timeOnPage, setTimeOnPage] = useState(0);

  useEffect(() => {
    const startTime = Date.now();

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      setIsVisible(scrollPosition > windowHeight * 0.3);
    };

    const timeInterval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      setTimeOnPage(elapsed);

      if (elapsed > 30 && elapsed % 20 === 0) {
        setCtaType(prev => prev === 'trial' ? 'demo' : 'trial');
      }
    }, 1000);

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timeInterval);
    };
  }, []);

  const handleCTAClick = () => {
    if (ctaType === 'trial') {
      window.location.href = '/landing-page#free-trial';
    } else {
      window.location.href = '/landing-page#schedule-demo';
    }
  };

  if (!isVisible) return null;

  return (
    <>
      <div 
        className={`fixed bottom-6 right-6 z-[150] lg:hidden ${className}`}
      >
        <button
          onClick={handleCTAClick}
          className="flex items-center gap-2 px-6 py-4 bg-accent text-accent-foreground rounded-full shadow-cta font-cta font-bold text-base hover:bg-accent/90 hover:scale-105 transition-all duration-250"
        >
          {ctaType === 'trial' ? (
            <>
              <Icon name="RocketLaunchIcon" size={20} variant="solid" />
              <span>Start Free Trial</span>
            </>
          ) : (
            <>
              <Icon name="CalendarIcon" size={20} variant="solid" />
              <span>Schedule Demo</span>
            </>
          )}
        </button>
      </div>

      <div 
        className={`hidden lg:block fixed bottom-8 right-8 z-[150] ${className}`}
      >
        <div className="bg-card rounded-2xl shadow-dashboard border border-border p-6 max-w-sm">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Icon 
                name={ctaType === 'trial' ? 'RocketLaunchIcon' : 'CalendarIcon'} 
                size={24} 
                variant="solid"
                className="text-primary"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-heading font-semibold text-base text-textPrimary mb-1">
                {ctaType === 'trial' ? 'Ready to get started?' : 'Want to see it in action?'}
              </h3>
              <p className="font-sans text-sm text-textSecondary mb-4">
                {ctaType === 'trial' ?'Join 5,000+ students mastering pharmacy with our platform.' :'Schedule a personalized demo with our pharmacy education experts.'}
              </p>
              <button
                onClick={handleCTAClick}
                className="w-full px-4 py-3 bg-accent text-accent-foreground rounded-lg shadow-cta font-cta font-bold text-sm hover:bg-accent/90 transition-all duration-250"
              >
                {ctaType === 'trial' ? 'Start Free Trial' : 'Schedule Demo'}
              </button>
              <p className="font-sans text-xs text-textSecondary text-center mt-2">
                No credit card required • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmartCTAController;