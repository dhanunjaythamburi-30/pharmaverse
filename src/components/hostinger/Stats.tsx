import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { value: '100+', label: 'Expert-Led Courses' },
    { value: '99%', label: 'Student Success Rate' },
    { value: '24/7', label: 'Learning Support' }
  ];

  return (
    <section className="bg-gradient-to-b from-[#1a5f5f] to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-teal-100 text-lg">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
