'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  cta: string;
}

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  const plans: PricingPlan[] = [
    {
      id: 'basic',
      name: 'Basic',
      price: billingCycle === 'monthly' ? 29 : 249,
      period: billingCycle === 'monthly' ? '/month' : '/year',
      description: 'Perfect for first-year students starting their Pharm.D journey',
      features: [
        'Access to high-yield digital notes',
        'Basic drug database (5,000+ medications)',
        'Mobile app access',
        'Email support',
        'Annual pattern notes for Year 1'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      id: 'pro',
      name: 'Professional',
      price: billingCycle === 'monthly' ? 49 : 449,
      period: billingCycle === 'monthly' ? '/month' : '/year',
      description: 'Most popular for students in clinical years',
      features: [
        'Everything in Basic, plus:',
        'Full drug database (10,000+ medications)',
        'Clinical decision tools & calculators',
        'Visual pharmacology animations',
        'Drug interaction checker',
        'Priority email & chat support',
        'Annual pattern notes for all years',
        'Offline access to content'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      id: 'elite',
      name: 'Elite',
      price: billingCycle === 'monthly' ? 79 : 749,
      period: billingCycle === 'monthly' ? '/month' : '/year',
      description: 'Complete package for NAPLEX prep and clinical excellence',
      features: [
        'Everything in Professional, plus:',
        'NAPLEX-style practice questions',
        'Personalized study plans',
        'Live Q&A sessions with pharmacists',
        'Clinical case studies library',
        'Advanced analytics & progress tracking',
        '24/7 priority support',
        'Exclusive webinars & workshops',
        'Career guidance resources'
      ],
      popular: false,
      cta: 'Start Free Trial'
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-muted">
      <div className="mx-auto px-8 lg:px-12 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-primary mb-4">
            Choose Your Success Plan
          </h2>
          <p className="font-sans text-xl text-textSecondary max-w-3xl mx-auto mb-8">
            All plans include 7-day free trial. No credit card required. Cancel anytime.
          </p>

          <div className="inline-flex items-center gap-4 p-2 bg-card rounded-lg border border-border">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-md font-sans font-medium text-sm transition-all ${
                billingCycle === 'monthly' ?'bg-primary text-primary-foreground' :'text-textSecondary hover:text-textPrimary'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-md font-sans font-medium text-sm transition-all flex items-center gap-2 ${
                billingCycle === 'annual' ?'bg-primary text-primary-foreground' :'text-textSecondary hover:text-textPrimary'
              }`}
            >
              Annual
              <span className="px-2 py-0.5 bg-success text-white text-xs rounded-full">
                Save 30%
              </span>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-card rounded-2xl border-2 transition-all duration-300 ${
                plan.popular
                  ? 'border-primary shadow-2xl scale-105'
                  : 'border-border shadow-lg hover:border-primary/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground rounded-full font-sans text-sm font-bold">
                  Most Popular
                </div>
              )}

              <div className="p-8">
                <h3 className="font-heading font-bold text-2xl text-textPrimary mb-2">
                  {plan.name}
                </h3>
                <p className="font-sans text-sm text-textSecondary mb-6">
                  {plan.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="font-heading font-bold text-5xl text-primary">
                      ${plan.price}
                    </span>
                    <span className="font-sans text-lg text-textSecondary">
                      {plan.period}
                    </span>
                  </div>
                  {billingCycle === 'annual' && (
                    <p className="font-sans text-xs text-success mt-2">
                      Save ${(plan.price / 12 * 12 * 0.3).toFixed(0)} compared to monthly
                    </p>
                  )}
                </div>

                <button className={`w-full py-4 rounded-lg font-cta font-bold text-base transition-all duration-250 mb-6 ${
                  plan.popular
                    ? 'bg-accent text-accent-foreground shadow-cta hover:bg-accent/90 hover:scale-105'
                    : 'bg-primary text-primary-foreground hover:bg-primary/90'
                }`}>
                  {plan.cta}
                </button>

                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Icon 
                        name="CheckCircleIcon" 
                        size={20} 
                        variant="solid" 
                        className="text-success flex-shrink-0 mt-0.5"
                      />
                      <span className="font-sans text-sm text-textPrimary">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-center text-white">
          <Icon name="ShieldCheckIcon" size={48} variant="solid" className="mx-auto mb-4" />
          <h3 className="font-heading font-bold text-2xl mb-2">
            Money-Back Guarantee
          </h3>
          <p className="font-sans text-base max-w-2xl mx-auto">
            If you don't see improvement in your exam scores within the first semester, we'll refund your entire subscription. No questions asked.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;