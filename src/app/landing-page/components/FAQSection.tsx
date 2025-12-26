'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(1);

  const faqs: FAQ[] = [
    {
      id: 1,
      question: 'How is Pharmaverse different from traditional textbooks?',
      answer: 'Unlike static textbooks that become outdated and require hours of searching, Pharmaversevides continuously updated, searchable digital content with visual summaries, interactive tools, and annual exam patterns. Students save 100+ hours per semester by having everything organized in one platform instead of juggling multiple resources.'
    },
    {
      id: 2,
      question: 'Will this work for all 6 years of my Pharm.D program?',
      answer: 'Absolutely! Pharmaverse covers the complete Pharm.D curriculum from Year 1 fundamentals through Year 6 clinical rotations. Our content is organized by year and topic, with annual pattern notes integrated throughout. As you progress, you unlock more advanced clinical tools and NAPLEX preparation resources.'
    },
    {
      id: 3,
      question: 'Can I access Pharmaverse during clinical rotations?',
      answer: 'Yes! Our mobile app works offline, so you can access drug information, clinical calculators, and decision support tools even without internet. The drug interaction checker and dosage calculators are specifically designed for quick reference during patient care, with evidence-based guidelines at your fingertips.'
    },
    {
      id: 4,
      question: 'How accurate is the clinical information?',
      answer: 'All content is reviewed by licensed pharmacists and updated quarterly based on latest clinical guidelines. We maintain partnerships with major pharmacy schools and follow ACPE accreditation standards. Every drug monograph includes primary literature citations, and our clinical tools use validated algorithms from peer-reviewed sources.'
    },
    {
      id: 5,
      question: 'What if I don\'t see improvement in my grades?',
      answer: 'We offer a money-back guarantee if you don\'t see exam score improvement within your first semester of use. Additionally, our analytics track your progress and identify weak areas, with personalized study recommendations. 95% of students report improved performance within 3 months.'
    },
    {
      id: 6,
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel anytime with no penalties or hidden fees. Your access continues until the end of your billing period. We also offer a 7-day free trial with no credit card required, so you can explore the full platform risk-free before committing.'
    },
    {
      id: 7,
      question: 'Do you offer student discounts or scholarships?',
      answer: 'Yes! We offer 30% savings on annual plans, plus additional discounts for students demonstrating financial need. We also have scholarship programs for underrepresented students in pharmacy. Contact our support team with your student ID for eligibility verification.'
    },
    {
      id: 8,
      question: 'How does Pharmaverse help with NAPLEX preparation?',
      answer: 'Our Elite plan includes NAPLEX-style practice questions with detailed explanations, personalized study plans based on your weak areas, and live Q&A sessions with pharmacists who recently passed. We track your progress across all NAPLEX competency areas and provide targeted review materials.'
    }
  ];

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-24 bg-background">
      <div className="mx-auto px-8 lg:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-xl text-textSecondary">
            Everything you need to know about Pharmaverse
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-card rounded-xl border border-border overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="font-heading font-semibold text-lg text-textPrimary pr-4">
                  {faq.question}
                </h3>
                <Icon
                  name={openFAQ === faq.id ? 'ChevronUpIcon' : 'ChevronDownIcon'}
                  size={24}
                  variant="outline"
                  className="text-primary flex-shrink-0"
                />
              </button>
              {openFAQ === faq.id && (
                <div className="px-6 pb-6">
                  <p className="font-sans text-base text-textSecondary leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20 text-center">
          <Icon name="QuestionMarkCircleIcon" size={48} variant="outline" className="text-primary mx-auto mb-4" />
          <h3 className="font-heading font-bold text-2xl text-textPrimary mb-2">
            Still have questions?
          </h3>
          <p className="font-sans text-base text-textSecondary mb-6">
            Our academic support team is here to help you succeed.
          </p>
          <button className="font-cta font-bold text-base px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;