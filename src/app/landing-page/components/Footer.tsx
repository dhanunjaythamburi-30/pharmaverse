'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState<number>(2024);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const footerLinks = {
    product: [
      { label: 'Features', href: '/landing-page#solutions' },
      { label: 'Pricing', href: '/landing-page#pricing' },
      { label: 'Success Stories', href: '/landing-page#success-stories' },
      { label: 'Free Trial', href: '/landing-page#free-trial' }
    ],
    resources: [
      { label: 'Blog', href: '#' },
      { label: 'Study Guides', href: '#' },
      { label: 'NAPLEX Prep', href: '#' },
      { label: 'Clinical Tools', href: '#' }
    ],
    company: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Press Kit', href: '#' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'HIPAA Compliance', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: 'ShareIcon', href: '#' },
    { name: 'Twitter', icon: 'ChatBubbleLeftIcon', href: '#' },
    { name: 'LinkedIn', icon: 'BriefcaseIcon', href: '#' },
    { name: 'Instagram', icon: 'CameraIcon', href: '#' }
  ];

  return (
    <footer className="bg-secondary text-white">
      <div className="mx-auto px-8 lg:px-12 max-w-7xl py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link href="/landing-page" className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect width="40" height="40" rx="8" fill="white" fillOpacity="0.1"/>
                  <path d="M20 8L28 14V26L20 32L12 26V14L20 8Z" fill="white" fillOpacity="0.9"/>
                  <path d="M20 14V26M14 17L26 23M14 23L26 17" stroke="#0f766e" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="font-heading font-bold text-xl">Pharmaverse</span>
            </Link>
            <p className="font-sans text-sm text-white/80 mb-6 max-w-xs">
              The complete digital pharmacy education ecosystem trusted by 5,000+ students.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
                  aria-label={social.name}
                >
                  <Icon name={social.icon as any} size={20} variant="outline" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-base mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-sans text-sm text-white/60">
              &copy; {currentYear} Pharmaverse. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Icon name="ShieldCheckIcon" size={20} variant="solid" className="text-success" />
                <span className="font-sans text-xs text-white/80">ACPE Accredited</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="LockClosedIcon" size={20} variant="solid" className="text-success" />
                <span className="font-sans text-xs text-white/80">HIPAA Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;