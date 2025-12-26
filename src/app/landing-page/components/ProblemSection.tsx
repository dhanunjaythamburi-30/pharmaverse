'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface PainPoint {
  id: string;
  title: string;
  description: string;
  icon: string;
  stats: string;
}

const ProblemSection = () => {
  const [selectedPainPoint, setSelectedPainPoint] = useState<string>('scattered');

  const painPoints: PainPoint[] = [
  {
    id: 'scattered',
    title: 'Scattered Resources',
    description: 'Students waste 15+ hours weekly searching through multiple textbooks, online resources, and handwritten notes trying to find reliable information.',
    icon: 'DocumentDuplicateIcon',
    stats: '15 hrs/week wasted'
  },
  {
    id: 'time',
    title: 'Time Pressure',
    description: 'With 6 years of dense material and clinical rotations, students struggle to balance comprehensive learning with efficient study methods.',
    icon: 'ClockIcon',
    stats: '78% feel overwhelmed'
  },
  {
    id: 'clinical',
    title: 'Clinical Uncertainty',
    description: 'During rotations, students lack immediate access to reliable clinical decision support, risking patient safety and confidence.',
    icon: 'ExclamationTriangleIcon',
    stats: '62% report anxiety'
  }];


  const selectedPoint = painPoints.find((p) => p.id === selectedPainPoint) || painPoints[0];

  return (
    <section className="py-24 bg-background">
      <div className="mx-auto px-8 lg:px-12 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-primary mb-4">
            The Pharmacy Student Struggle
          </h2>
          <p className="font-sans text-xl text-textSecondary max-w-3xl mx-auto">
            Traditional pharmacy education leaves students overwhelmed, anxious, and unprepared for clinical practice.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-4">
            {painPoints.map((point) =>
            <button
              key={point.id}
              onClick={() => setSelectedPainPoint(point.id)}
              className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-300 ${
              selectedPainPoint === point.id ?
              'border-primary bg-primary/5 shadow-lg' :
              'border-border bg-card hover:border-primary/50'}`
              }>

                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                selectedPainPoint === point.id ? 'bg-primary' : 'bg-muted'}`
                }>
                    <Icon
                    name={point.icon as any}
                    size={24}
                    variant="outline"
                    className={selectedPainPoint === point.id ? 'text-white' : 'text-textSecondary'} />

                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-xl text-textPrimary mb-2">
                      {point.title}
                    </h3>
                    <p className="font-sans text-sm text-textSecondary mb-2">
                      {point.description}
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-destructive/10 rounded-full">
                      <Icon name="ChartBarIcon" size={16} variant="solid" className="text-destructive" />
                      <span className="font-sans text-xs font-medium text-destructive">
                        {point.stats}
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            )}
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-border">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1a3c3b3c0-1765162678258.png"
                alt="Stressed pharmacy student surrounded by scattered textbooks and notes on desk with laptop showing multiple browser tabs"
                className="object-cover w-full h-full" />

            </div>
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-xl border border-border max-w-xs">
              <div className="flex items-start gap-3">
                <Icon name="ExclamationCircleIcon" size={24} variant="solid" className="text-warning flex-shrink-0" />
                <div>
                  <p className="font-sans font-semibold text-sm text-textPrimary mb-1">
                    Traditional Method Impact
                  </p>
                  <p className="font-sans text-xs text-textSecondary">
                    Students spend 40% of study time just organizing information instead of learning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-destructive/10 to-warning/10 rounded-2xl p-8 border border-destructive/20">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="font-heading font-bold text-4xl text-destructive mb-2">85%</div>
              <p className="font-sans text-sm text-textSecondary">Report exam anxiety from scattered resources</p>
            </div>
            <div>
              <div className="font-heading font-bold text-4xl text-warning mb-2">$2,000+</div>
              <p className="font-sans text-sm text-textSecondary">Spent on textbooks that become outdated</p>
            </div>
            <div>
              <div className="font-heading font-bold text-4xl text-destructive mb-2">300+</div>
              <p className="font-sans text-sm text-textSecondary">Hours wasted per year on inefficient studying</p>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default ProblemSection;