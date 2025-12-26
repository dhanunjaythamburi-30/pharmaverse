"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
  const { toast } = useToast();

  const handleLinkClick = (section) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const footerSections = [
    {
      title: 'Product',
      links: ['Features', 'Pricing', 'Video Lessons', 'Study Tools', 'Mobile App']
    },
    {
      title: 'Resources',
      links: ['Blog', 'Student Stories', 'Help Center', 'NAPLEX Prep', 'Study Guides']
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Press', 'Partners', 'Contact']
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Refund Policy']
    }
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook' },
    { icon: Twitter, label: 'Twitter' },
    { icon: Instagram, label: 'Instagram' },
    { icon: Linkedin, label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gradient-to-br from-[#0d4444] to-[#1a5f5f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-orange-500 w-10 h-10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold">P</span>
                </div>
                <span className="text-2xl font-bold">Pharmaverse</span>
              </div>
              <p className="text-teal-100 mb-6 max-w-sm">
                Empowering pharmacy students to master their Pharm.D journey from day one to graduation and beyond.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    onClick={() => handleLinkClick(social.label)}
                    className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          {footerSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <span className="font-bold text-lg mb-4 block">{section.title}</span>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={() => handleLinkClick(link)}
                      className="text-teal-100 hover:text-orange-400 transition-colors duration-300 text-left"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-teal-100 text-sm text-center md:text-left">
              © 2025 Pharmaverse. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-teal-100 text-sm">
              <Mail className="w-4 h-4" />
              <span>support@pharmaverse.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
