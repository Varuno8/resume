
import React from 'react';
import { Award } from 'lucide-react';
import TechIcon from '../projects/TechIcon';

const CertificateHighlight: React.FC = () => {
  return (
    <div className="mt-16 max-w-3xl mx-auto bg-texture-paper border-2 border-outdoors-rust rounded-sm p-8 shadow-xl relative">
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-outdoors-charcoal"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-outdoors-charcoal"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-outdoors-charcoal"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-outdoors-charcoal"></div>

      <div className="flex flex-col md:flex-row items-center">
        <div className="mb-6 md:mb-0 md:mr-6 relative">
          <div className="h-20 w-20 rounded-full bg-outdoors-rust/10 flex items-center justify-center relative overflow-hidden border-2 border-outdoors-rust">
            <Award className="h-10 w-10 text-outdoors-rust relative z-10" />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-display font-bold mb-2 text-outdoors-charcoal uppercase tracking-wider">Survival Skills & Training</h3>
          <p className="text-muted-foreground mb-4 font-serif italic">
            Constantly honing bushcraft and navigation techniques for the digital frontier.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="skill-tag flex items-center border border-outdoors-rust/20 text-outdoors-charcoal"><TechIcon tech="Python" /> Python</span>
            <span className="skill-tag flex items-center border border-outdoors-rust/20 text-outdoors-charcoal"><TechIcon tech="TypeScript" /> TypeScript</span>
            <span className="skill-tag flex items-center border border-outdoors-rust/20 text-outdoors-charcoal"><TechIcon tech="Angular" /> Angular</span>
            <span className="skill-tag flex items-center border border-outdoors-rust/20 text-outdoors-charcoal"><TechIcon tech="TensorFlow" /> ML Dev</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateHighlight;
