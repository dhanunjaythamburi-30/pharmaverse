"use client";

import React, { useState ...
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Pricing = () => {
  const { toast } = useToast();

  const handleSelectPlan = (plan) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const plans = [
    {
      name: 'Basic',
      price: 249,
      period: '/semester',
      description: 'Perfect for students just starting their pharmacy journey',
      popular: false,
      features: [
        'Access to core video lessons',
        'Basic study materials',
        'Community forum access',
        'Email support',
        'Mobile app access',
        'Progress tracking'
      ]
    },
    {
      name: 'Professional',
      price: 449,
      period: '/semester',
      description: 'Most popular choice for serious pharmacy students',
      popular: true,
      features: [
        'Everything in Basic, plus:',
        'Advanced clinical tools',
        'Interactive case studies',
        'Live Q&A sessions (2x/month)',
        'Priority email support',
        'Downloadable study guides',
        'Practice exam questions',
        'Drug interaction checker'
      ]
    },
    {
      name: 'Elite',
      price: 749,
      period: '/semester',
      description: 'Complete package for maximum success and NAPLEX prep',
      popular: false,
      features: [
        'Everything in Professional, plus:',
        'One-on-one mentorship sessions',
        'NAPLEX preparation course',
        'Unlimited practice exams',
        'Custom study plan creation',
        'Career counseling session',
        'Resume review service',
        'Lifetime resource access',
        '24/7 priority support'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a5f5f] mb-4">
            Choose Your Success Plan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Invest in your pharmacy education with flexible pricing designed for students
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                plan.popular ? 'ring-4 ring-orange-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-orange-500 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className="text-5xl font-bold text-[#1a5f5f]">
                    ${plan.price}
                  </span>
                  <span className="text-gray-600 ml-2">
                    {plan.period}
                  </span>
                </div>

                <Button
                  onClick={() => handleSelectPlan(plan.name)}
                  className={`w-full py-6 text-lg rounded-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl hover:scale-105'
                      : 'bg-[#1a5f5f] hover:bg-[#0d4444] text-white'
                  }`}
                >
                  Select Plan
                </Button>

                <div className="mt-8 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.popular ? 'text-orange-500' : 'text-[#1a5f5f]'
                      }`} />
                      <span className={`text-sm ${
                        feature.includes('Everything in') ? 'font-semibold text-gray-900' : 'text-gray-600'
                      }`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-[#1a5f5f] to-[#0d4444] rounded-2xl p-8 sm:p-12 text-center text-white"
        >
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/10 inline-block px-4 py-2 rounded-full mb-4">
              💰 Money-Back Guarantee
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Try Pharmaverse Risk-Free
            </h3>
            <p className="text-lg text-teal-100 mb-8">
              Not satisfied within the first 30 days? Get a full refund, no questions asked. We're confident you'll love the platform as much as our 5,000+ students do.
            </p>
            <Button
              onClick={() => handleSelectPlan('Trial')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Start Your Free Trial
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
