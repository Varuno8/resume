
import React, { useState, useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import TechIcon from './TechIcon';
import { Project } from './projectsData';

interface ProjectCardProps {
  project: Project;
  isHovered: boolean;
  onHover: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isHovered, onHover }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateY = ((x - centerX) / centerX) * 10;
      const rotateX = ((centerY - y) / centerY) * 10;

      cardRef.current.style.transform = `
        perspective(1000px) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg)
        ${isHovered ? 'scale(1.03)' : 'scale(1)'}
      `;
    };

    const handleMouseLeave = () => {
      if (!cardRef.current) return;
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    };

    const card = cardRef.current;
    if (card) {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (card) {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [isHovered]);

  return (
    <div
      ref={cardRef}
      className={`bg-texture-paper rounded-sm overflow-hidden transition-all duration-500 border border-outdoors-bark/30 shadow-md ${isHovered ? 'border-outdoors-rust shadow-xl z-10' : ''
        }`}
      onMouseEnter={onHover}
      onMouseLeave={() => { }}
      style={{
        transformStyle: 'preserve-3d',
        transition: 'transform 0.3s ease-out',
      }}
    >
      {/* Project image/video with 3D depth effect */}
      <div className="relative h-48 overflow-hidden group/video">
        {project.video ? (
          <div className="w-full h-full bg-black relative">
            {project.video.includes('drive.google.com') ? (
              <iframe
                id={`video-${project.id}`}
                src={project.video.replace('/view?usp=sharing', '/preview').replace('/view', '/preview')}
                className="w-full h-full object-cover pointer-events-auto"
                allow="autoplay; fullscreen"
                style={{
                  transform: isHovered ? 'scale(1.1) translateZ(20px)' : 'scale(1)',
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.7s ease-out'
                }}
              />
            ) : (
              <video
                id={`video-${project.id}`}
                src={project.video}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                style={{
                  transform: isHovered ? 'scale(1.1) translateZ(20px)' : 'scale(1)',
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.7s ease-out'
                }}
              />
            )}

            {/* Fullscreen Button */}
            <button
              className="absolute top-2 right-2 p-1.5 bg-black/60 rounded-full text-white opacity-0 group-hover/video:opacity-100 transition-opacity duration-300 z-30 hover:bg-black/80"
              onClick={(e) => {
                e.stopPropagation();
                const element = document.getElementById(`video-${project.id}`);
                if (element) {
                  if (element.requestFullscreen) {
                    element.requestFullscreen();
                  } else if ((element as any).webkitRequestFullscreen) {
                    (element as any).webkitRequestFullscreen();
                  } else if ((element as any).msRequestFullscreen) {
                    (element as any).msRequestFullscreen();
                  }
                }
              }}
              title="View Fullscreen"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            </button>

            {/* TV Screen Effects - Removed, replaced with vintage overlay */}
            <div className="absolute inset-0 bg-outdoors-bark/10 pointer-events-none z-20 mix-blend-multiply"></div>
            <div className="absolute inset-0 border-b-4 border-outdoors-rust/50 pointer-events-none z-30"></div>
          </div>
        ) : (
          <>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center transition-transform duration-700"
              style={{
                transform: isHovered ? 'scale(1.1) translateZ(20px)' : 'scale(1)',
                transformStyle: 'preserve-3d',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
          </>
        )}
      </div>

      {/* Project content with 3D layering */}
      <div className="p-6 bg-texture-paper" style={{ transform: isHovered ? 'translateZ(30px)' : 'translateZ(0)', transformStyle: 'preserve-3d' }}>
        <h3 className="text-xl font-display font-bold mb-2 text-outdoors-forest">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6" style={{ transform: isHovered ? 'translateZ(40px)' : 'translateZ(0)', transformStyle: 'preserve-3d' }}>
          {project.technologies.map((tech, index) => (
            <Badge key={index} variant="outline" className="bg-outdoors-rust/5 border-outdoors-rust/30 text-outdoors-charcoal flex items-center font-mono text-xs">
              <TechIcon tech={tech} />
              <span className="ml-1">{tech}</span>
            </Badge>
          ))}
        </div>

        {/* Project links */}
        <div className="flex justify-between items-center" style={{ transform: isHovered ? 'translateZ(50px)' : 'translateZ(0)', transformStyle: 'preserve-3d' }}>
          <div className="flex space-x-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="group text-outdoors-rust hover:text-white hover:bg-outdoors-rust font-display uppercase tracking-wider"
            style={{ transform: isHovered ? 'translateZ(60px)' : 'translateZ(0)', transformStyle: 'preserve-3d' }}
            onClick={() => window.open(project.demoUrl, '_blank')}
          >
            Details
            <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
