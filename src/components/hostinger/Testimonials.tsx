"use client";

import React, { useState ...
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Martinez',
      role: 'Pharm.D Student, Class of 2025',
      quote: "Pharmaverse transformed my approach to studying. I went from struggling with C's to consistently earning A's. The clinical tools are exactly what I needed to bridge the gap between theory and practice.",
      rating: 5,
      stats: { before: '2.8 GPA', after: '3.9 GPA' }
    },
    {
      name: 'Michael Chen',
      role: 'Pharm.D Graduate, Now Clinical Pharmacist',
      quote: "The comprehensive video lessons and practice questions prepared me better than any textbook could. I passed my NAPLEX on the first try with a score in the 95th percentile.",
      rating: 5,
      stats: { before: '75%', after: '95%' }
    },
    {
      name: 'Emily Rodriguez',
      role: 'P3 Student, University of California',
      quote: "Having all resources in one place saved me hundreds of hours. The 24/7 support helped me through my toughest rotations, and the community feature connected me with students nationwide.",
      rating: 5,
      stats: { before: '20 hrs/week', after: '8 hrs/week' }
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#0d4444] to-[#1a5f5f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
            ⭐ Student Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Real Results from Real Students
          </h2>
          <p className="text-lg text-teal-100 max-w-2xl mx-auto">
            Join thousands of pharmacy students who've transformed their academic journey with Pharmaverse
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 sm:p-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-1 flex flex-col items-center text-center">
                  {/* Replaced external image with reliable avatar initials */}
                  <div className="w-32 h-32 rounded-full mb-4 ring-4 ring-orange-400 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                    <span className="text-3xl font-bold text-orange-800 tracking-wider">
                      {getInitials(testimonials[currentIndex].name)}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-1">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-teal-200 text-sm mb-4">
                    {testimonials[currentIndex].role}
                  </p>
                  <div className="flex gap-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <div className="mb-6">
                    <svg className="w-12 h-12 text-orange-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-lg leading-relaxed mb-6">
                      {testimonials[currentIndex].quote}
                    </p>
                  </div>
                  
                  <div className="flex gap-6">
                    <div className="bg-white/10 px-4 py-3 rounded-lg">
                      <div className="text-sm text-teal-200">Before</div>
                      <div className="text-xl font-bold">{testimonials[currentIndex].stats.before}</div>
                    </div>
                    <div className="bg-orange-500/20 px-4 py-3 rounded-lg">
                      <div className="text-sm text-orange-200">After</div>
                      <div className="text-xl font-bold">{testimonials[currentIndex].stats.after}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="icon"
              className="bg-white/10 hover:bg-white/20 border-white/20 text-white rounded-full"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-orange-400 w-8' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="icon"
              className="bg-white/10 hover:bg-white/20 border-white/20 text-white rounded-full"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">5,000+</div>
            <p className="text-teal-100">Active Students</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">4.9/5</div>
            <p className="text-teal-100">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">50+</div>
            <p className="text-teal-100">Pharmacy Schools</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
