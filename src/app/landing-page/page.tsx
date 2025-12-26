import type { Metadata } from 'next';
import LandingPageInteractive from './components/LandingPageInteractive';

export const metadata: Metadata = {
  title: 'Pharmaverse Pro - Master Your Pharm.D from Day 1 to Dr.',
  description: 'The only complete digital pharmacy education ecosystem that guarantees exam success and clinical confidence through high-yield notes, visual summaries, and clinical tools. Join 5,000+ pharmacy students who transformed their education.',
};

export default function LandingPage() {
  return <LandingPageInteractive />;
}
