'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';


interface InteractiveDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

const InteractiveDashboardModal = ({ 
  isOpen, 
  onClose, 
  className = '' 
}: InteractiveDashboardModalProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const dashboardModules = [
    {
      id: 'drug-database',
      title: 'Drug Database',
      icon: 'BeakerIcon',
      description: 'Search 10,000+ medications with clinical details',
      preview: '/assets/images/dashboard-drug-db.png'
    },
    {
      id: 'clinical-tools',
      title: 'Clinical Tools',
      icon: 'CalculatorIcon',
      description: 'Interactive dosing calculators and clinical decision support',
      preview: '/assets/images/dashboard-clinical-tools.png'
    },
    {
      id: 'visual-pharm',
      title: 'Visual Pharmacology',
      icon: 'ChartBarIcon',
      description: 'Mechanism of action animations and pathway diagrams',
      preview: '/assets/images/dashboard-visual-pharm.png'
    },
    {
      id: 'exam-prep',
      title: 'Exam Preparation',
      icon: 'AcademicCapIcon',
      description: 'NAPLEX-style questions with detailed explanations',
      preview: '/assets/images/dashboard-exam-prep.png'
    }
  ];

  const sampleDrugs = [
    { name: 'Metformin', class: 'Antidiabetic', indication: 'Type 2 Diabetes' },
    { name: 'Lisinopril', class: 'ACE Inhibitor', indication: 'Hypertension' },
    { name: 'Atorvastatin', class: 'Statin', indication: 'Hyperlipidemia' },
  ];

  return (
    <div 
      className={`fixed inset-0 z-[200] flex items-center justify-center p-4 ${className}`}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-background" />
      
      <div 
        className="relative w-full max-w-6xl max-h-[90vh] bg-card rounded-2xl shadow-dashboard overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-surface">
          <div>
            <h2 className="font-heading font-bold text-2xl text-primary">
              Interactive Dashboard Demo
            </h2>
            <p className="font-sans text-sm text-textSecondary mt-1">
              Explore the tools that 5,000+ students use daily
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <Icon name="XMarkIcon" size={24} variant="outline" />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row h-[calc(90vh-88px)]">
          <div className="lg:w-64 border-b lg:border-b-0 lg:border-r border-border bg-surface p-4 overflow-y-auto">
            <nav className="space-y-2">
              {dashboardModules.map((module, index) => (
                <button
                  key={module.id}
                  onClick={() => setActiveTab(index)}
                  className={`w-full flex items-start gap-3 p-3 rounded-lg transition-all duration-250 ${
                    activeTab === index
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'hover:bg-muted text-textPrimary'
                  }`}
                >
                  <Icon 
                    name={module.icon as any} 
                    size={20} 
                    variant="outline"
                    className="flex-shrink-0 mt-0.5"
                  />
                  <div className="text-left">
                    <div className="font-sans font-medium text-sm">
                      {module.title}
                    </div>
                    <div className={`font-sans text-xs mt-0.5 ${
                      activeTab === index ? 'text-primary-foreground/80' : 'text-textSecondary'
                    }`}>
                      {module.description}
                    </div>
                  </div>
                </button>
              ))}
            </nav>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            <div className="mb-6">
              <div className="relative">
                <Icon 
                  name="MagnifyingGlassIcon" 
                  size={20} 
                  variant="outline"
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-textSecondary"
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search medications, conditions, or topics..."
                  className="w-full pl-10 pr-4 py-3 border border-border rounded-lg font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                />
              </div>
            </div>

            <div className="bg-muted rounded-xl p-6 mb-6">
              <h3 className="font-heading font-semibold text-lg text-primary mb-4">
                {dashboardModules[activeTab].title}
              </h3>
              
              {activeTab === 0 && (
                <div className="space-y-3">
                  {sampleDrugs.map((drug, index) => (
                    <div 
                      key={index}
                      className="bg-card p-4 rounded-lg border border-border hover:border-primary transition-colors cursor-pointer"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-sans font-semibold text-base text-textPrimary">
                            {drug.name}
                          </h4>
                          <p className="font-sans text-sm text-textSecondary mt-1">
                            {drug.class} • {drug.indication}
                          </p>
                        </div>
                        <Icon 
                          name="ChevronRightIcon" 
                          size={20} 
                          variant="outline"
                          className="text-textSecondary"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab !== 0 && (
                <div className="aspect-video bg-surface rounded-lg border-2 border-dashed border-border flex items-center justify-center">
                  <div className="text-center">
                    <Icon 
                      name={dashboardModules[activeTab].icon as any} 
                      size={48} 
                      variant="outline"
                      className="text-primary mx-auto mb-3"
                    />
                    <p className="font-sans text-sm text-textSecondary">
                      Interactive {dashboardModules[activeTab].title} preview
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between p-4 bg-success/10 rounded-lg border border-success/20">
              <div className="flex items-center gap-3">
                <Icon 
                  name="CheckCircleIcon" 
                  size={24} 
                  variant="solid"
                  className="text-success"
                />
                <div>
                  <p className="font-sans font-medium text-sm text-textPrimary">
                    Full access with Free Trial
                  </p>
                  <p className="font-sans text-xs text-textSecondary">
                    No credit card required • Cancel anytime
                  </p>
                </div>
              </div>
              <button className="font-cta font-bold text-sm px-6 py-2.5 bg-accent text-accent-foreground rounded-lg shadow-cta hover:bg-accent/90 transition-all">
                Start Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveDashboardModal;
