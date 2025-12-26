'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      isScrolled ? 'bg-white shadow-md py-1' : 'bg-white py-3'
    }`}>
      <nav className="max-w-[1440px] mx-auto flex items-center justify-between px-10 lg:px-20 h-24">
        <Link href="/" className="flex items-center space-x-3 group">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
          <div className="flex flex-col">
            <span className="font-bold text-xl text-[#022c22]">Pharmaverse</span>
            <span className="text-[8px] text-gray-400 font-bold uppercase tracking-[0.1em] hidden sm:block mt-0.5">
              Master your Pharm.D from Day 1 to Dr.
            </span>
          </div>
        </Link>
        <div className="hidden lg:flex items-center space-x-8">
          <Link href="/#solutions" className="text-[12px] font-black uppercase tracking-[0.15em] text-gray-500 hover:text-[#0f766e]">Solutions</Link>
          <Link href="/#pricing" className="text-[12px] font-black uppercase tracking-[0.15em] text-gray-500 hover:text-[#0f766e]">Pricing</Link>
          <Link href="/dashboard" className="text-[12px] font-black uppercase tracking-[0.15em] text-gray-500 hover:text-[#0f766e]">Study OS</Link>
          <div className="h-6 w-px bg-gray-100 mx-1" />
          <Link href="/dashboard" className="text-[12px] font-black uppercase tracking-[0.15em] text-gray-800 hover:opacity-70 px-4">Login</Link>
          <Link href="/dashboard" className="bg-[#ff782d] text-white text-[12px] font-black uppercase tracking-[0.15em] px-8 py-3 rounded-lg shadow-lg hover:bg-[#e66a26] transition-all transform hover:-translate-y-0.5">
            5 Day Free Trial
          </Link>
        </div>
      </nav>
    </header>
  );
};
export default Header;

