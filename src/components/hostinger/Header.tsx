"use client";

import React, { useState ...
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      description: `Clicked on ${item}`,
    });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Dashboard', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  const accountLinks = [
    { name: 'My Account', href: '#' },
    { name: 'Login', href: '#' },
    { name: 'Register', href: '#' },
    { name: 'Logout', href: '#' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('Home')}>
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${
              isScrolled ? 'bg-[#1a5f5f] text-white' : 'bg-white text-[#1a5f5f]'
            }`}>
              {/* Simple caduceus-like icon representation */}
               <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-6 h-6"
              >
                <path d="M12 2a4 4 0 0 0-4 4v14a2 2 0 0 0 4 0V6a4 4 0 0 0-4-4Z"/>
                <path d="M8 8.5A2.5 2.5 0 0 0 10.5 11h3a2.5 2.5 0 0 1 2.5 2.5v0a2.5 2.5 0 0 1-2.5 2.5h-3"/>
                <path d="M16 16.5A2.5 2.5 0 0 1 13.5 19h-3a2.5 2.5 0 0 0-2.5-2.5v0a2.5 2.5 0 0 0 2.5-2.5h3"/>
                <path d="M12 2v20"/>
                <path d="M4 5h16"/>
              </svg>
            </div>
            <span className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-[#1a5f5f]' : 'text-white'
            }`}>
              Pharmaverse
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.name)}
                className={`relative group font-medium text-sm transition-colors duration-300 ${
                  isScrolled ? 'text-gray-700 hover:text-[#1a5f5f]' : 'text-teal-100 hover:text-white'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                   isScrolled ? 'bg-[#1a5f5f]' : 'bg-orange-400'
                }`} />
              </button>
            ))}

            <div className={`h-6 w-px ${isScrolled ? 'bg-gray-300' : 'bg-white/20'}`} />

            <div className="flex items-center gap-4">
               {/* My Account & Login - Text Links */}
               <button
                  onClick={() => handleNavClick('My Account')}
                  className={`font-medium text-sm transition-colors duration-300 ${
                    isScrolled ? 'text-gray-700 hover:text-[#1a5f5f]' : 'text-teal-100 hover:text-white'
                  }`}
                >
                  My Account
                </button>
                 <button
                  onClick={() => handleNavClick('Login')}
                  className={`font-medium text-sm transition-colors duration-300 ${
                    isScrolled ? 'text-gray-700 hover:text-[#1a5f5f]' : 'text-teal-100 hover:text-white'
                  }`}
                >
                  Login
                </button>

              {/* Register Button */}
              <Button
                onClick={() => handleNavClick('Register')}
                size="sm"
                className={`transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'bg-[#1a5f5f] hover:bg-[#0d4444] text-white shadow-md' 
                    : 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg'
                }`}
              >
                Register
              </Button>

               {/* Logout Icon Button for subtle placement */}
               <button
                  onClick={() => handleNavClick('Logout')}
                  className={`p-2 rounded-full transition-colors duration-300 ${
                    isScrolled ? 'hover:bg-gray-100 text-gray-500' : 'hover:bg-white/10 text-teal-100'
                  }`}
                  title="Logout"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    <polyline points="16 17 21 12 16 7" />
                    <line x1="21" x2="9" y1="12" y2="12" />
                  </svg>
                </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {[...navLinks, ...accountLinks].map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.name)}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-[#1a5f5f] rounded-lg font-medium transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
