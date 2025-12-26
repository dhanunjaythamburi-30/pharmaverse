"use client";
import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center bg-[#022c22] text-white pt-24 pb-16 overflow-hidden selection:bg-teal-500/30 font-sans">
      
      {/* --- REFINED MEDICAL WATERMARKS (Smaller & Balanced) --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        {/* Balanced Crosses (Left Side) */}
        <div className="absolute top-[20%] left-[10%] text-[#34d399] -rotate-12">
           <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M12 2v20M2 12h20" /></svg>
        </div>
        <div className="absolute bottom-[25%] left-[12%] text-white opacity-[0.08]">
           <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 10l-10-5-10 5 10 5 10-5zM6 12v5c0 2 2.7 3 6 3s6-1 6-3v-5" /></svg>
        </div>

        {/* Right Side Elements */}
        <div className="absolute top-[22%] right-[12%] rotate-45 text-[#fb923c] opacity-50">
           <svg width="65" height="65" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="10" rx="5" /><line x1="12" y1="7" x2="12" y2="17" /></svg>
        </div>
        <div className="absolute bottom-[20%] right-[10%] text-emerald-400 opacity-40">
           <svg width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="6"><path d="M12 2v20M2 12h20" /></svg>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        {/* Proportions reduced to 60px/1.25rem for an Institutional Premium Look */}
        <h1 className="text-5xl md:text-6xl font-bold mb-8 tracking-tighter leading-[1.05] drop-shadow-2xl">
          Master your Pharm.D <br />
          <span className="text-[#34d399] opacity-95">from Day 1 to Dr.</span>
        </h1>

        <p className="max-w-xl mx-auto text-base md:text-lg text-white/60 mb-14 font-normal leading-relaxed tracking-wide">
          The ultimate digital platform built to guarantee exam success and clinical confidence for modern pharmacy practice.
        </p>

        {/* Interaction Boxes: START LEARNING now goes directly to /dashboard */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
          <Link href="/dashboard" className="w-full sm:w-[240px] bg-[#ff782d] hover:bg-[#ff8a47] text-white text-[14px] font-black py-4.5 rounded-xl shadow-lg transition-all transform hover:-translate-y-1 text-center uppercase tracking-widest">
            Start Learning
          </Link>
          <Link href="/dashboard" className="w-full sm:w-[240px] bg-white/5 hover:bg-white/10 border border-white/20 backdrop-blur-xl text-white text-[14px] font-black py-4.5 rounded-xl transition-all transform hover:-translate-y-1 text-center uppercase tracking-widest">
            Explore Content
          </Link>
        </div>

        {/* Scaled-down Statistics Divider */}
        <div className="grid grid-cols-3 gap-0 max-w-2xl w-full border-t border-white/5 pt-12 opacity-60">
          <div className="flex flex-col border-r border-white/5">
            <span className="text-2xl md:text-3xl font-bold">100+</span>
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] mt-2 text-emerald-400">Hours Saved</span>
          </div>
          <div className="flex flex-col border-r border-white/5">
            <span className="text-2xl md:text-3xl font-bold">95%</span>
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] mt-2 text-emerald-400">Pass Rate</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl md:text-3xl font-bold">24/7</span>
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] mt-2 text-emerald-400">Clin-Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
