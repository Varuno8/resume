
import React from 'react';
import AchievementBackground from './achievements/AchievementBackground';
import AchievementCard from './achievements/AchievementCard';
import CertificateHighlight from './achievements/CertificateHighlight';
import { achievements } from './achievements/achievementsData';

const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="section-padding relative bg-secondary/30">
      <div className="container mx-auto">
        {/* Section title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-outdoors-forest">
            Field <span className="text-outdoors-rust border-b-4 border-outdoors-rust/30">Honors</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-display tracking-wide">
            Recognition received from the wilderness.
          </p>
        </div>

        {/* 3D Achievements visualization */}
        {/* <AchievementBackground /> - Optional: Keep or remove depending on preference, but ensure it doesn't use neon colors internally if kept. */}

        {/* Achievement cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>

        {/* Certificate highlight */}
        <CertificateHighlight />
      </div>

      {/* Background elements */}
      {/* Background elements - Removed neon blobs */}
      {/* <div className="absolute -bottom-20 right-0 w-96 h-96 bg-premium-emerald/5 rounded-full filter blur-3xl"></div> */}
      {/* <div className="absolute -top-20 left-0 w-96 h-96 bg-devops-orange/5 rounded-full filter blur-3xl"></div> */}
    </section>
  );
};

export default AchievementsSection;
