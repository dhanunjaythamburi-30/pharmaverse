'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  university: string;
  year: string;
}

const FreeTrialSection = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    university: '',
    year: ''
  });

  const [currentStep, setCurrentStep] = useState(1);

  const universities = [
    'University of California, San Francisco',
    'Johns Hopkins University',
    'University of Michigan',
    'University of North Carolina',
    'University of Southern California',
    'Purdue University',
    'University of Texas at Austin',
    'Other'
  ];

  const years = [
    '1st Year Pharm.D',
    '2nd Year Pharm.D',
    '3rd Year Pharm.D',
    '4th Year Pharm.D',
    '5th Year Pharm.D',
    '6th Year Pharm.D'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for signing up! Check your email for access instructions.');
  };

  const canProceedToStep2 = formData.fullName && formData.email;
  const canProceedToStep3 = canProceedToStep2 && formData.phone;
  const canSubmit = canProceedToStep3 && formData.university && formData.year;

  return (
    <section id="free-trial" className="py-24 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 animate-float">
          <Icon name="AcademicCapIcon" size={64} variant="outline" className="text-white" />
        </div>
        <div className="absolute bottom-20 right-20 animate-float-delayed">
          <Icon name="RocketLaunchIcon" size={56} variant="outline" className="text-white" />
        </div>
      </div>

      <div className="relative z-10 mx-auto px-8 lg:px-12 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
            <Icon name="SparklesIcon" size={20} variant="solid" className="text-accent" />
            <span className="font-sans text-sm font-medium text-white">
              Limited Time Offer
            </span>
          </div>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-white mb-4">
            Start Your Free 7-Day Trial
          </h2>
          <p className="font-sans text-xl text-white/90 max-w-2xl mx-auto">
            No credit card required. Full access to all features. Cancel anytime.
          </p>
        </div>

        <div className="bg-card rounded-2xl shadow-2xl p-8 lg:p-12">
          <div className="flex items-center justify-between mb-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center flex-1">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full font-heading font-bold text-sm ${
                  currentStep >= step
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-textSecondary'
                }`}>
                  {step}
                </div>
                {step < 3 && (
                  <div className={`flex-1 h-1 mx-2 ${
                    currentStep > step ? 'bg-primary' : 'bg-muted'
                  }`} />
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block font-sans font-medium text-sm text-textPrimary mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg font-sans text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-sans font-medium text-sm text-textPrimary mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg font-sans text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    placeholder="your.email@university.edu"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  disabled={!canProceedToStep2}
                  className="w-full py-4 bg-primary text-primary-foreground rounded-lg font-cta font-bold text-base hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue
                </button>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <label htmlFor="phone" className="block font-sans font-medium text-sm text-textPrimary mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg font-sans text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    placeholder="(555) 123-4567"
                  />
                  <p className="font-sans text-xs text-textSecondary mt-2">
                    We'll send you SMS updates about your trial
                  </p>
                </div>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="flex-1 py-4 border-2 border-border rounded-lg font-sans font-medium text-base hover:border-primary transition-all"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    disabled={!canProceedToStep3}
                    className="flex-1 py-4 bg-primary text-primary-foreground rounded-lg font-cta font-bold text-base hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <label htmlFor="university" className="block font-sans font-medium text-sm text-textPrimary mb-2">
                    University *
                  </label>
                  <select
                    id="university"
                    name="university"
                    value={formData.university}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg font-sans text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  >
                    <option value="">Select your university</option>
                    {universities.map((uni) => (
                      <option key={uni} value={uni}>{uni}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="year" className="block font-sans font-medium text-sm text-textPrimary mb-2">
                    Current Year *
                  </label>
                  <select
                    id="year"
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg font-sans text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  >
                    <option value="">Select your year</option>
                    {years.map((year) => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="flex-1 py-4 border-2 border-border rounded-lg font-sans font-medium text-base hover:border-primary transition-all"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className="flex-1 py-4 bg-accent text-accent-foreground rounded-lg font-cta font-bold text-base shadow-cta hover:bg-accent/90 hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <Icon name="RocketLaunchIcon" size={20} variant="solid" />
                    Start Free Trial
                  </button>
                </div>
              </div>
            )}
          </form>

          <div className="mt-8 pt-8 border-t border-border">
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div className="flex items-center gap-2">
                <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-success" />
                <span className="font-sans text-sm text-textSecondary">No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-success" />
                <span className="font-sans text-sm text-textSecondary">Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-success" />
                <span className="font-sans text-sm text-textSecondary">Full access for 7 days</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="font-sans text-sm text-white/80">
            By signing up, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default FreeTrialSection;