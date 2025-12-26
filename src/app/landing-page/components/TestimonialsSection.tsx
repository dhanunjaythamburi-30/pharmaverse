'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Testimonial {
  id: number;
  name: string;
  year: string;
  university: string;
  image: string;
  alt: string;
  quote: string;
  improvement: string;
  verified: boolean;
}

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Chen',
    year: '4th Year Pharm.D',
    university: 'University of California, San Francisco',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15751363f-1763296851612.png",
    alt: 'Asian woman with long black hair in white lab coat smiling confidently in pharmacy setting',
    quote: 'Pharmaverse transformed my study routine completely. I went from spending 20+ hours weekly searching through textbooks to having everything I need in one place. My exam scores improved by 15%, and I finally feel confident during clinical rotations.',
    improvement: '+15% exam scores',
    verified: true
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    year: '2nd Year Pharm.D',
    university: 'University of Michigan',
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d",
    alt: 'African American man in navy blue scrubs with stethoscope smiling in clinical environment',
    quote: 'The visual pharmacology section is a game-changer. I\'m a visual learner, and the animated MOA diagrams helped me understand complex drug mechanisms that textbooks couldn\'t explain. Saved me countless hours of confusion.',
    improvement: '100+ hours saved',
    verified: true
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    year: '6th Year Pharm.D',
    university: 'University of North Carolina',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_10f282a64-1763295534405.png",
    alt: 'Hispanic woman with brown hair in white medical coat holding clipboard in hospital corridor',
    quote: 'During my clinical rotations, the drug interaction checker became my lifeline. Having instant access to evidence-based clinical tools gave me confidence to make safe patient care decisions. It\'s like having a clinical mentor in your pocket.',
    improvement: '24/7 clinical support',
    verified: true
  },
  {
    id: 4,
    name: 'David Kim',
    year: '3rd Year Pharm.D',
    university: 'Johns Hopkins University',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c03540c2-1763301653480.png",
    alt: 'Asian man with short black hair in white lab coat reviewing medical documents in pharmacy',
    quote: 'The annual pattern notes integration is brilliant. Instead of guessing what to focus on, I know exactly which topics are high-yield for exams. My study efficiency doubled, and I actually have time for clinical practice now.',
    improvement: '2x study efficiency',
    verified: true
  }];


  const currentTestimonial = testimonials[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prev) => prev === 0 ? testimonials.length - 1 : prev - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev === testimonials.length - 1 ? 0 : prev + 1);
  };

  return (
    <section id="success-stories" className="py-24 bg-background">
      <div className="mx-auto px-8 lg:px-12 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 rounded-full mb-4">
            <Icon name="StarIcon" size={20} variant="solid" className="text-success" />
            <span className="font-sans text-sm font-medium text-success">
              Student Success Stories
            </span>
          </div>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-primary mb-4">
            Real Results from Real Students
          </h2>
          <p className="font-sans text-xl text-textSecondary max-w-3xl mx-auto">
            Join 5,000+ pharmacy students who transformed their education with Pharmaverse.
          </p>
        </div>

        <div className="relative bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative aspect-[4/5] lg:aspect-auto">
              <AppImage
                src={currentTestimonial.image}
                alt={currentTestimonial.alt}
                className="object-cover w-full h-full" />

              <div className="absolute top-6 right-6 bg-card px-4 py-2 rounded-full shadow-lg border border-border flex items-center gap-2">
                <Icon name="CheckBadgeIcon" size={20} variant="solid" className="text-primary" />
                <span className="font-sans text-xs font-medium text-textPrimary">Verified Student</span>
              </div>
            </div>

            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <Icon name="ChatBubbleLeftIcon" size={48} variant="solid" className="text-primary/20" />
              </div>

              <blockquote className="font-sans text-lg text-textPrimary mb-8 leading-relaxed">
                "{currentTestimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1">
                  <h4 className="font-heading font-semibold text-xl text-textPrimary">
                    {currentTestimonial.name}
                  </h4>
                  <p className="font-sans text-sm text-textSecondary">
                    {currentTestimonial.year}
                  </p>
                  <p className="font-sans text-xs text-textSecondary mt-1">
                    {currentTestimonial.university}
                  </p>
                </div>
                <div className="px-4 py-2 bg-success/10 rounded-lg">
                  <p className="font-sans text-xs font-medium text-success">
                    {currentTestimonial.improvement}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={handlePrevious}
                  className="w-12 h-12 rounded-full border-2 border-border hover:border-primary hover:bg-primary/5 transition-all flex items-center justify-center"
                  aria-label="Previous testimonial">

                  <Icon name="ChevronLeftIcon" size={24} variant="outline" />
                </button>
                <div className="flex-1 flex gap-2">
                  {testimonials.map((_, index) =>
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary w-8' : 'bg-border w-2'}`
                    }
                    aria-label={`Go to testimonial ${index + 1}`} />

                  )}
                </div>
                <button
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full border-2 border-border hover:border-primary hover:bg-primary/5 transition-all flex items-center justify-center"
                  aria-label="Next testimonial">

                  <Icon name="ChevronRightIcon" size={24} variant="outline" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-4 gap-6">
          <div className="bg-card p-6 rounded-xl border border-border text-center">
            <div className="font-heading font-bold text-3xl text-primary mb-2">5,000+</div>
            <p className="font-sans text-sm text-textSecondary">Active Students</p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-border text-center">
            <div className="font-heading font-bold text-3xl text-success mb-2">4.9/5</div>
            <p className="font-sans text-sm text-textSecondary">Average Rating</p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-border text-center">
            <div className="font-heading font-bold text-3xl text-accent mb-2">95%</div>
            <p className="font-sans text-sm text-textSecondary">Pass Rate</p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-border text-center">
            <div className="font-heading font-bold text-3xl text-primary mb-2">50+</div>
            <p className="font-sans text-sm text-textSecondary">Partner Universities</p>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;