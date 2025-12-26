'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Solution {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

const SolutionSection = () => {
  const [activeSolution, setActiveSolution] = useState<string>('notes');

  const solutions: Solution[] = [
  {
    id: 'notes',
    title: 'High-Yield Digital Notes',
    description: 'Comprehensive, visually-organized notes covering all 6 years of Pharm.D curriculum with annual pattern integration.',
    icon: 'DocumentTextIcon',
    features: [
    'Visual summaries with color-coded drug classes',
    'Integrated annual exam patterns and high-yield topics',
    'Searchable database with instant access',
    'Mobile-optimized for study anywhere']

  },
  {
    id: 'tools',
    title: 'Clinical Decision Tools',
    description: 'Real-time clinical calculators and drug interaction checkers for safe patient care decisions.',
    icon: 'CalculatorIcon',
    features: [
    'Drug interaction checker with severity ratings',
    'Dosage calculators for renal/hepatic adjustments',
    'Clinical guidelines and protocols',
    'Evidence-based treatment algorithms']

  },
  {
    id: 'visual',
    title: 'Visual Pharmacology',
    description: 'Animated mechanism of action diagrams and pathway visualizations for deep understanding.',
    icon: 'ChartPieIcon',
    features: [
    'Interactive MOA animations',
    'Pharmacokinetic pathway diagrams',
    'Drug class comparison charts',
    'Visual mnemonics for memorization']

  }];


  const activeSolutionData = solutions.find((s) => s.id === activeSolution) || solutions[0];

  return (
    <section id="solutions" className="py-24 bg-muted">
      <div className="mx-auto px-8 lg:px-12 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 rounded-full mb-4">
            <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-success" />
            <span className="font-sans text-sm font-medium text-success">
              Complete Digital Ecosystem
            </span>
          </div>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-primary mb-4">
            Your All-in-One Pharmacy Education Platform
          </h2>
          <p className="font-sans text-xl text-textSecondary max-w-3xl mx-auto">
            Replace scattered textbooks with one trusted platform that guarantees exam success and clinical confidence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {solutions.map((solution) =>
          <button
            key={solution.id}
            onClick={() => setActiveSolution(solution.id)}
            className={`text-left p-6 rounded-xl border-2 transition-all duration-300 ${
            activeSolution === solution.id ?
            'border-primary bg-card shadow-xl scale-105' :
            'border-border bg-card hover:border-primary/50 hover:shadow-lg'}`
            }>

              <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${
            activeSolution === solution.id ? 'bg-primary' : 'bg-muted'}`
            }>
                <Icon
                name={solution.icon as any}
                size={28}
                variant="outline"
                className={activeSolution === solution.id ? 'text-white' : 'text-textSecondary'} />

              </div>
              <h3 className="font-heading font-semibold text-xl text-textPrimary mb-2">
                {solution.title}
              </h3>
              <p className="font-sans text-sm text-textSecondary">
                {solution.description}
              </p>
            </button>
          )}
        </div>

        <div className="bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 lg:p-12">
              <h3 className="font-heading font-bold text-2xl text-primary mb-6">
                {activeSolutionData.title}
              </h3>
              <p className="font-sans text-base text-textSecondary mb-8">
                {activeSolutionData.description}
              </p>
              <ul className="space-y-4">
                {activeSolutionData.features.map((feature, index) =>
                <li key={index} className="flex items-start gap-3">
                    <Icon name="CheckCircleIcon" size={24} variant="solid" className="text-success flex-shrink-0 mt-0.5" />
                    <span className="font-sans text-base text-textPrimary">{feature}</span>
                  </li>
                )}
              </ul>
            </div>
            <div className="relative bg-gradient-to-br from-primary/5 to-secondary/5 p-8 lg:p-12 flex items-center justify-center">
              <div className="w-full max-w-md aspect-[3/4] rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_195a6e902-1764648555298.png"
                  alt="Pharmacy student using digital tablet showing organized medical notes with color-coded drug classifications and visual diagrams"
                  className="object-cover w-full h-full" />

              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-xl border border-border text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="ClockIcon" size={24} variant="solid" className="text-primary" />
            </div>
            <div className="font-heading font-bold text-3xl text-primary mb-2">100+</div>
            <p className="font-sans text-sm text-textSecondary">Hours saved per semester with organized content</p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-border text-center">
            <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="AcademicCapIcon" size={24} variant="solid" className="text-success" />
            </div>
            <div className="font-heading font-bold text-3xl text-success mb-2">95%</div>
            <p className="font-sans text-sm text-textSecondary">Students report improved exam performance</p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-border text-center">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="ShieldCheckIcon" size={24} variant="solid" className="text-accent" />
            </div>
            <div className="font-heading font-bold text-3xl text-accent mb-2">24/7</div>
            <p className="font-sans text-sm text-textSecondary">Access to clinical decision support tools</p>
          </div>
        </div>
      </div>
    </section>);

};

export default SolutionSection;