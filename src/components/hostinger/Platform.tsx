import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, FileText, Stethoscope, CheckCircle, Activity } from 'lucide-react';

const Platform = () => {
  const services = [
    {
      icon: GraduationCap,
      title: 'Expert-Taught Video Lessons',
      description: 'Learn from experienced pharmacists and educators through comprehensive video lectures covering every topic in your curriculum.'
    },
    {
      icon: FileText,
      title: 'Clinical Decision Tools',
      description: 'Access interactive tools and calculators to help you make evidence-based clinical decisions with confidence.'
    },
    {
      icon: Stethoscope,
      title: 'Virtual Pharmacology',
      description: 'Master drug mechanisms, interactions, and patient counseling through our immersive virtual learning modules.'
    }
  ];

  const benefits = [
    'Save time with centralized studying tools',
    'Boost retention with interactive content',
    'Practice real-world clinical scenarios',
    'Track progress with detailed analytics',
    'Access community of fellow students',
    'Get answers from expert mentors'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a5f5f] mb-4">
            Your All-in-One Pharmacy Education Platform
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Replace scattered resources with one comprehensive platform designed specifically for pharmacy students and their success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-[#1a5f5f] w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Replaced external image with reliable gradient container */}
            <div className="w-full aspect-[4/3] rounded-2xl shadow-2xl bg-gradient-to-br from-[#1a5f5f] to-[#0d4444] flex flex-col items-center justify-center overflow-hidden relative border-4 border-white">
               <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>
               <div className="bg-white/10 backdrop-blur-sm p-6 rounded-full shadow-lg mb-4 z-10 border border-white/20">
                 <Activity className="w-16 h-16 text-teal-200" />
               </div>
               <h3 className="text-xl font-bold text-white z-10">Clinical Pharmacy Setting</h3>
               <p className="text-teal-200 mt-2 z-10 font-medium">Real-world Practice Scenarios</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-[#1a5f5f] mb-6">
              High-Yield Digital Notes
            </h3>
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl">
            <div className="text-4xl font-bold text-[#1a5f5f] mb-2">10+</div>
            <p className="text-gray-600">Years of Curriculum Covered</p>
          </div>
          <div className="text-center bg-gradient-to-br from-teal-50 to-white p-6 rounded-xl">
            <div className="text-4xl font-bold text-[#1a5f5f] mb-2">5k+</div>
            <p className="text-gray-600">Practice Questions</p>
          </div>
          <div className="text-center bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl">
            <div className="text-4xl font-bold text-[#1a5f5f] mb-2">24/7</div>
            <p className="text-gray-600">Expert Support Available</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Platform;
