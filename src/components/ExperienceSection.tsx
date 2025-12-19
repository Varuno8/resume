
import React, { useEffect, useRef } from 'react';
import { Mountain, Tent, TreePine, ArrowRight, MapPin } from 'lucide-react';

interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  highlights: string[];
  color: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    company: "Eigengram",
    position: "Software Engineer Intern",
    period: "Nov 2024 – April 2025",
    highlights: [
      "Built a full-stack healthcare AI marketplace platform using React (TypeScript) frontend and Django backend",
      "Created secure subscription systems, analytics dashboards, and an AI model catalog",
      "Implemented JWT-based authentication with Google OAuth, Tailwind UI, and Recharts visualizations"
    ],
    color: "#2C5F2D" // forest
  },
  {
    id: 2,
    company: "Rovisor Research",
    position: "Software Development Intern",
    period: "June 2024 - August 2024",
    highlights: [
      "Enhanced frontend UX using Angular, integrated APIs, and optimized load times by 20%",
      "Developed responsive UI components and implemented state management patterns",
      "Collaborated with UX team to create intuitive user flows and interactions"
    ],
    color: "#B7410E" // rust
  },
  {
    id: 3,
    company: "Business Web Solutions",
    position: "Web Developer Intern",
    period: "May 2024 - June 2024",
    highlights: [
      "Designed modern, responsive interfaces with HTML/CSS/JS, focusing on usability and performance",
      "Optimized web assets and implemented best practices for performance improvements",
      "Created cross-browser compatible solutions for client websites"
    ],
    color: "#4A3728" // bark
  }
];

const ExperienceSection: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  // Add scroll animation to experience cards
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    const experienceCards = document.querySelectorAll('.experience-card');
    experienceCards.forEach((card) => {
      card.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700', 'ease-out');
      observer.observe(card);
    });

    return () => {
      if (experienceCards) {
        experienceCards.forEach((card) => observer.unobserve(card));
      }
    };
  }, []);

  return (
    <section id="experience" className="section-padding relative bg-background transition-colors duration-300">
      <div className="container mx-auto">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-outdoors-forest">
            Act IV: The Bridge of <span className="text-outdoors-rust border-b-4 border-outdoors-rust/30">Fossilization</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-display tracking-wide italic">
            "The Burgess Shale of Technology: where extinct stacks fossilize into modern AI."
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="max-w-4xl mx-auto relative">
          {/* Timeline line as a River */}
          {/* Timeline Nodes - River Bends */}
          <div className="absolute left-0 top-0 bottom-0 w-full flex justify-center overflow-visible pointer-events-none z-0">
            {/* Wavy River SVG */}
            <svg className="h-full w-20 md:w-32" preserveAspectRatio="none" viewBox="0 0 100 800">
              <path
                d="M50,0 C80,200 20,400 50,800"
                fill="none"
                stroke="#60A5FA"
                strokeWidth="8"
                strokeOpacity="0.4"
                strokeLinecap="round"
                className="animate-pulse-slow"
              />
              <path
                d="M50,0 C80,200 20,400 50,800"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="3"
                strokeOpacity="0.6"
                strokeDasharray="20,10"
              />
            </svg>


            {/* Visual Bridge crossing the river */}
          </div>

          {/* FOSSIL BRIDGE visualization - Amber Layers */}
          <div className="absolute top-[28%] left-0 w-full flex justify-center z-10 opacity-90 pointer-events-none">
            <div className="relative w-[300px] h-[100px]">
              {/* Layer 1: jQuery Ammonite (Bottom) */}
              <div className="absolute bottom-0 w-full h-8 bg-amber-700/40 rounded-b-lg border-b-2 border-amber-900/50 backdrop-blur-sm"></div>
              {/* Layer 2: REST API Vertebrae (Middle) */}
              <div className="absolute bottom-6 w-[280px] left-[10px] h-8 bg-amber-600/40 border-b-2 border-amber-800/50 backdrop-blur-sm"></div>
              {/* Layer 3: React Fern (Top) */}
              <div className="absolute bottom-12 w-[260px] left-[20px] h-8 bg-amber-500/40 rounded-t-lg border-t-2 border-amber-400/30 backdrop-blur-sm"></div>

              {/* Narrative Text */}
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-texture-paper p-4 rounded-sm border border-outdoors-rust/60 shadow-2xl skew-x-[-5deg] w-64 text-center">
                <p className="text-xs font-serif text-outdoors-charcoal italic leading-relaxed">
                  "I didn't abandon the forge; I learned that every hammer strike was just pre-training for the weights I'd later tune."
                </p>
              </div>
            </div>
          </div>

          {/* Experience cards */}
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className="experience-card mb-12 md:mb-24 relative grid grid-cols-1 md:grid-cols-2 gap-8"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Timeline dot with glow effect */}
              <div
                className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full z-10"
                style={{
                  backgroundColor: experience.color,
                  boxShadow: `0 0 15px ${experience.color}`,
                }}
              ></div>

              {/* Content with 3D hover effect */}
              <div
                className={`glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-lg ${index % 2 === 0
                  ? 'md:col-start-1 md:text-right'
                  : 'md:col-start-2'
                  }`}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'perspective(1000px)',
                  borderColor: `${experience.color}55`
                }}
                onMouseMove={(e) => {
                  const card = e.currentTarget;
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const rotateX = ((y - centerY) / centerY) * -2;
                  const rotateY = ((x - centerX) / centerX) * 2;
                  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
                }}
              >
                <div className={`flex items-center mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''
                  }`}>
                  <Mountain
                    className={`h-6 w-6 mr-2 md:order-1 text-outdoors-forest`}
                  />
                  <h3 className="font-display text-xl font-bold bg-outdoors-rust/10 px-2 py-1 rounded inline-block text-outdoors-charcoal">{experience.position}</h3>
                </div>

                <h4
                  className="font-medium mb-2"
                  style={{ color: experience.color }}
                >
                  {experience.company}
                </h4>

                <div className={`flex items-center text-sm font-mono text-muted-foreground mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''
                  }`}>
                  <MapPin className="h-4 w-4 mr-1 text-outdoors-rust" />
                  <span>{experience.period}</span>
                </div>

                <ul className={`space-y-2 text-muted-foreground ${index % 2 === 0 ? 'md:ml-auto' : ''
                  }`}>
                  {experiences[index].highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start">
                      <TreePine
                        className="h-4 w-4 mr-2 mt-1 shrink-0 text-outdoors-forest"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Empty column for alternating layout */}
              <div className={index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'}></div>
            </div>
          ))}
        </div>

        {/* Add more experiences prompt */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            More experience to be added as career progresses...
          </p>
          <a
            href="#skills"
            className="inline-flex items-center text-outdoors-forest hover:text-outdoors-rust hover:underline transition-colors"
          >
            Check out my survival kit
            <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </div>
        {/* Background elements */}
        {/* <div className="absolute top-1/4 left-0 w-96 h-96 bg-premium-emerald/5 rounded-full filter blur-3xl"></div> */}
        {/* <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-premium-amber/5 rounded-full filter blur-3xl"></div> */}
      </div>
    </section>
  );
};

export default ExperienceSection;
