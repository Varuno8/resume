
import React, { useState, useEffect } from 'react';
import { Bird, TreePine, Hammer, Compass, CloudSun, Leaf } from 'lucide-react';
import TechIcon from './projects/TechIcon';
import { useIsMobile } from '@/hooks/use-mobile';

interface SkillCategory {
  name: string;
  icon: JSX.Element;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Languages", // Bird calls / Communication
    icon: <Bird className="h-6 w-6 text-outdoors-rust" />,
    skills: ["Python", "C++", "JavaScript", "TypeScript", "C"]
  },
  {
    name: "Web Ecosystem", // Forest / Structure
    icon: <TreePine className="h-6 w-6 text-outdoors-forest" />,
    skills: ["Angular", "HTML", "CSS", "Bootstrap", "Express", "Node.js"]
  },
  {
    name: "Campcraft", // Tools
    icon: <Hammer className="h-6 w-6 text-outdoors-charcoal" />,
    skills: ["Git", "Docker", "MongoDB", "PostgreSQL", "MySQL"]
  },
  {
    name: "Tracking", // AI / Intelligence / Navigation
    icon: <Compass className="h-6 w-6 text-outdoors-rust" />,
    skills: [
      "PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "SVM",
      "Random Forest", "KNN", "CNN", "VGG", "ResNet",
      "EfficientNet", "RAG", "LangChain", "FAISS", "Ollama", "Computer Vision",
      "NLP", "OpenCV", "Transformers"
    ]
  },
  {
    name: "Weather", // Cloud
    icon: <CloudSun className="h-6 w-6 text-outdoors-forest" />,
    skills: ["AWS EC2", "S3", "Boto3"]
  }
];

const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Languages");
  const [animating, setAnimating] = useState<boolean>(false);
  const isMobile = useIsMobile();

  // Handle category change with animation
  const handleCategoryChange = (category: string) => {
    if (category === activeCategory || animating) return;

    setAnimating(true);
    setTimeout(() => {
      setActiveCategory(category);
      setAnimating(false);
    }, 300);
  };

  // Generate rotating skill nodes
  const generateSkillNodes = () => {
    const currentCategory = skillCategories.find(cat => cat.name === activeCategory);
    if (!currentCategory) return null;

    return currentCategory.skills.map((skill, index) => {
      const angle = (index * (360 / currentCategory.skills.length)) * (Math.PI / 180);
      // Smaller radius for mobile
      const radius = isMobile ? 90 : 130;

      // Calculate position on the circle
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      return (
        <div
          key={skill}
          className="absolute skill-node transition-all duration-1000 flex items-center space-x-1"
          style={{
            transform: `translate(${x}px, ${y}px)`,
            opacity: animating ? 0 : 1,
          }}
        >
          <div className="skill-tag whitespace-nowrap flex items-center text-xs sm:text-sm shadow-sm bg-card/80 backdrop-blur-sm border-white/10 text-foreground">
            <TechIcon tech={skill} />
            <span className="ml-1 truncate max-w-[80px] sm:max-w-full">{skill}</span>
          </div>
        </div>
      );
    });
  };

  // Improved orbit animation with full 360-degree rotation
  useEffect(() => {
    let animationFrame: number;
    let rotation = 0;

    const animate = () => {
      rotation = (rotation + 0.2) % 360; // Slower rotation (0.2 degrees per frame)

      const orbit = document.querySelector('.skill-orbit') as HTMLElement;
      const nodes = document.querySelectorAll('.skill-node') as NodeListOf<HTMLElement>;

      if (orbit) {
        orbit.style.transform = `rotate(${rotation}deg)`;

        // Counter-rotate the skill tags to keep them upright
        nodes.forEach((node) => {
          const skillTag = node.querySelector('.skill-tag') as HTMLElement;
          if (skillTag) {
            skillTag.style.transform = `rotate(-${rotation}deg)`;
          }
        });
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, [activeCategory]);

  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-card transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-outdoors-forest">
            Survival <span className="text-outdoors-rust border-b-4 border-outdoors-rust/30">Kit</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-display tracking-wide">
            Essential gear and skills for the digital wilderness.
          </p>
        </div>

        {/* Wisdom Theme Element - The Owl */}
        <div className="flex justify-center mb-8 opacity-70">
          <div className="flex items-center space-x-2 text-outdoors-forest bg-outdoors-forest/10 px-4 py-2 rounded-full border border-outdoors-forest/20 animate-pulse-slow">
            <Bird className="h-5 w-5" />
            <span className="text-sm font-mono font-bold uppercase tracking-widest">Owl's Wisdom • Knowledge Base</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 items-center">
          {/* Skills categories navigation - horizontal scrolling on mobile */}
          <div className="lg:col-span-1">
            <div className="bg-texture-paper rounded-sm p-4 sm:p-6 shadow-xl border-2 border-outdoors-bark/20">
              <h3 className="text-xl font-display font-bold mb-3 sm:mb-4 text-outdoors-charcoal uppercase tracking-widest">Field Guide</h3>
              <div className="flex lg:flex-col space-x-2 lg:space-x-0 lg:space-y-3 overflow-x-auto pb-2 lg:pb-0">
                {skillCategories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => handleCategoryChange(category.name)}
                    className={`flex-shrink-0 lg:w-full flex items-center p-2 sm:p-3 rounded-sm transition-all border-l-4 ${activeCategory === category.name
                      ? 'bg-outdoors-rust/10 border-outdoors-rust text-outdoors-charcoal font-bold'
                      : 'border-transparent hover:bg-outdoors-forest/5 text-muted-foreground hover:text-foreground'
                      }`}
                  >
                    <div className={`mr-2 sm:mr-3`}>
                      {category.icon}
                    </div>
                    <span className="font-display uppercase tracking-wider text-sm sm:text-base">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 3D Skill orbit - adjusted for better mobile view */}
          <div className="lg:col-span-4 flex justify-center items-center py-8 sm:py-12">
            <div className="relative h-[240px] sm:h-[300px] w-[240px] sm:w-[300px] perspective-1000">
              {/* Center content - Compass Center */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
                <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-texture-paper border-4 border-outdoors-charcoal flex items-center justify-center mb-2 mx-auto shadow-xl z-20">
                  {skillCategories.find(cat => cat.name === activeCategory)?.icon}
                </div>
                <h3 className="font-display font-bold text-outdoors-charcoal text-base sm:text-lg uppercase tracking-widest bg-texture-paper px-2 py-1 rounded border border-outdoors-bark/20">
                  {activeCategory}
                </h3>
              </div>

              {/* Orbit - Compass Ring */}
              <div className="skill-orbit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[180px] w-[180px] sm:h-[260px] sm:w-[260px] rounded-full border-2 border-dashed border-outdoors-rust/40 preserve-3d">
                {/* Skills */}
                {generateSkillNodes()}
              </div>

              {/* Decorative Compass Markings */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[220px] w-[220px] sm:h-[300px] sm:w-[300px] rounded-full border border-outdoors-forest/20">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-outdoors-forest font-mono text-xs">N</div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-outdoors-forest font-mono text-xs">S</div>
                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 text-outdoors-forest font-mono text-xs">W</div>
                <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 text-outdoors-forest font-mono text-xs">E</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background elements */}
      {/* Background elements */}
      {/* <div className="absolute -bottom-64 -right-64 w-64 sm:w-96 h-64 sm:h-96 bg-premium-emerald/10 rounded-full filter blur-3xl"></div> */}
      {/* <div className="absolute -top-64 -left-64 w-64 sm:w-96 h-64 sm:h-96 bg-premium-amber/5 rounded-full filter blur-3xl"></div> */}
    </section>
  );
};

export default SkillsSection;
