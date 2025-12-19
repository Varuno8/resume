import React, { useRef, useEffect } from 'react';
import TechIcon from '../projects/TechIcon';
import { Achievement } from './types';
import * as LucideIcons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ achievement, index }) => {
  const counterRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const animateCounter = (element: HTMLElement, target: number) => {
      const duration = 2000;
      const frameRate = 60;
      const frameDuration = 1000 / frameRate;
      const totalFrames = Math.round(duration / frameDuration);
      let frame = 0;

      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentCount = Math.floor(progress * target);

        if (frame === totalFrames) {
          clearInterval(counter);
          element.textContent = target.toString();
        } else {
          element.textContent = currentCount.toString();
        }
      }, frameDuration);
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counterElement = entry.target as HTMLElement;
          const target = parseInt(counterElement.dataset.target || '0', 10);

          animateCounter(counterElement, target);
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    if (counterRef.current && !isNaN(parseInt(counterRef.current.dataset.target || '0', 10))) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Dynamically render the appropriate Lucide icon
  const renderIcon = () => {
    if (achievement.tech) {
      return <TechIcon tech={achievement.tech} />;
    } else {
      // Fixed: Using type assertion with proper typing
      const icons = LucideIcons as unknown as Record<string, LucideIcon>;
      const IconComponent = icons[achievement.iconName];
      return IconComponent ? <IconComponent size={24} /> : null;
    }
  };

  return (
    <div
      className="bg-texture-paper rounded-full h-auto aspect-square flex flex-col items-center justify-center p-6 text-center transition-all duration-300 hover:scale-105 shadow-md border-4 border-dashed border-outdoors-rust/40 relative overflow-hidden"
      style={{
        transformStyle: 'preserve-3d',
        transform: 'perspective(1000px)',
      }}
      onMouseMove={(e) => {
        // Reduced movement for better UX
      }}
    >
      {/* Fabric texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/canvas-orange.png')]"></div>
      <a
        href={achievement.url}
        target="_blank"
        rel="noopener noreferrer"
        className={achievement.url ? "block group" : "group"}
      >
        <div
          className={`h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-outdoors-forest/10 text-outdoors-forest border-2 border-outdoors-forest ring-4 ring-outdoors-forest/20`}
        >
          {renderIcon()}
        </div>

        <div className="mb-2 relative z-10">
          <span
            ref={counterRef}
            className={`text-2xl font-display font-bold text-outdoors-charcoal`}
            data-target={achievement.numericValue}
          >
            0
          </span>
          <span className={`text-2xl font-display font-bold text-outdoors-charcoal`}>
            {achievement.value.includes('+') ? '+' : achievement.value.includes('%') ? '%' : ''}
          </span>
          {achievement.id === 4 &&
            <span className={`text-xl font-display font-medium text-outdoors-rust block`}>
              {' percentile'}
            </span>
          }
        </div>

        <h3 className="text-sm font-bold uppercase tracking-widest text-outdoors-rust group-hover:underline">{achievement.title}</h3>
      </a>
    </div>
  );
};

export default AchievementCard;
