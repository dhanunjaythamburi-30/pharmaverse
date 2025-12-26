import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Brain, Library } from 'lucide-react';

const StudentStruggle = () => {
  const struggles = [
    {
      icon: BookOpen,
      title: 'Scattered Resources',
      description: 'Traditional pharmacy education leaves students hunting through multiple textbooks, websites, and notes to find what they need.'
    },
    {
      icon: Clock,
      title: 'Time Pressure',
      description: 'Between lectures, labs, rotations, and exams, pharmacy students struggle to manage their heavy course load effectively.'
    },
    {
      icon: Brain,
      title: 'Clinical Overwhelm',
      description: 'Transitioning from classroom theory to real-world clinical practice can feel overwhelming without proper guidance and support.'
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
            The Pharmacy Student Struggle
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Traditional pharmacy education leaves students overwhelmed with scattered resources and limited support
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {struggles.map((struggle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <struggle.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {struggle.title}
                    </h3>
                    <p className="text-gray-600">
                      {struggle.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Replaced external image with reliable gradient container */}
            <div className="w-full aspect-[4/3] rounded-2xl shadow-2xl bg-gradient-to-br from-orange-50 to-orange-100 flex flex-col items-center justify-center border-4 border-white overflow-hidden relative">
               <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:20px_20px]"></div>
               <div className="bg-white p-6 rounded-full shadow-lg mb-4 z-10">
                 <Library className="w-16 h-16 text-orange-500" />
               </div>
               <h3 className="text-xl font-bold text-orange-900 z-10">Student Library Session</h3>
               <p className="text-orange-700/80 mt-2 z-10 font-medium">Pharmacology & Therapeutics</p>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-xl shadow-xl z-20">
              <div className="text-3xl font-bold">89%</div>
              <div className="text-sm">Students feel overwhelmed</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">85%</div>
            <p className="text-gray-600">Report information overload</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">$2,000+</div>
            <p className="text-gray-600">Average spent on extra study materials</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">300+</div>
            <p className="text-gray-600">Hours searching for resources annually</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StudentStruggle;
