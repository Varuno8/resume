
import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import TechIcon from './projects/TechIcon';

const Footer: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    { icon: <Github className="h-4 w-4" />, href: 'https://github.com/Varuno8', label: 'GitHub' },
    { icon: <Linkedin className="h-4 w-4" />, href: 'https://www.linkedin.com/in/varun-tyagi-32bb281b9/', label: 'LinkedIn' },
    { icon: <Mail className="h-4 w-4" />, href: 'mailto:varun28082001@gmail.com', label: 'Email' },
  ];

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Coding Profiles', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="pt-24 pb-8 bg-outdoors-charcoal text-outdoors-canvas relative mt-16">

      {/* Mountain Silhouette Top Border */}
      <div className="absolute top-0 left-0 w-full h-16 -mt-16 overflow-hidden leading-none rotate-180">
        <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-outdoors-charcoal"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        {/* Back to top button */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <button
            onClick={handleScrollToTop}
            className="p-3 rounded-full bg-outdoors-rust text-white hover:bg-outdoors-bark transition-all hover:scale-110 shadow-lg border-2 border-outdoors-canvas/20"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Logo/Brand */}
          <div>
            <h2 className="font-display text-2xl font-bold text-white mb-4 uppercase tracking-widest">Varun Tyagi</h2>
            <p className="text-outdoors-canvas/70 mb-6 font-serif italic">
              Exploring the frontiers of code and creativity.
              Let's chart the unknown.
            </p>

            {/* Social links - Updated with better visibility */}
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-2 rounded-full bg-white/10 text-outdoors-rust hover:bg-white/20 transition-colors border border-white/10"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links - Display in 2 columns on mobile */}
          <div className="md:col-span-1">
            <h3 className="font-display text-lg font-medium mb-4">Quick Links</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-outdoors-rust transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Varun Tyagi. All rights reserved.</p>
          <p className="mt-1">
            Designed & Developed with
            <span className="text-red-500 mx-1">❤</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
