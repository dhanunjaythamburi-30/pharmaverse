'use client';

import { useState, useEffect } from 'react';

interface ConversionProgressTrackerProps {
  className?: string;
}

const ConversionProgressTracker = ({ className = '' }: ConversionProgressTrackerProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      
      setScrollProgress(Math.min(progress, 100));

      const sections = [
        { id: 'hero', label: 'Introduction' },
        { id: 'solutions', label: 'Solutions' },
        { id: 'success-stories', label: 'Success Stories' },
        { id: 'pricing', label: 'Pricing' },
        { id: 'free-trial', label: 'Sign Up' }
      ];

      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setCurrentSection(section.label);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-[95] ${className}`}>
      <div className="relative h-1 bg-muted">
        <div 
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      {currentSection && scrollProgress > 5 && (
        <div className="absolute top-2 right-4 lg:right-8">
          <div className="bg-card px-3 py-1.5 rounded-full shadow-md border border-border">
            <span className="font-sans text-xs font-medium text-textSecondary">
              {currentSection}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConversionProgressTracker;
