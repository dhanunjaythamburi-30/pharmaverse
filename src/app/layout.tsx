import React from 'react';
import '../styles/index.css';

export const metadata = {
  title: 'Pharmaverse',
  description: 'Master your Pharm.D from Day 1 to Dr.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased font-sans bg-[#F8FAFC]">
        {/* We REMOVED the Header from here to fix the dashboard overlap */}
        {children}
      </body>
    </html>
  );
}
