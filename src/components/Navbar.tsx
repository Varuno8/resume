import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Menu, X, Download, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Coding Profiles', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  // Social links with icons
  const socialLinks = [
    { icon: <Github className="h-4 w-4" />, href: 'https://github.com/Varuno8', label: 'GitHub' },
    { icon: <Linkedin className="h-4 w-4" />, href: 'https://www.linkedin.com/in/varun-tyagi-32bb281b9/', label: 'LinkedIn' },
    { icon: <Mail className="h-4 w-4" />, href: 'mailto:varun28082001@gmail.com', label: 'Email' },
  ];

  const handleResumeClick = () => {
    window.open('https://drive.google.com/file/d/1ahrwN-oIochekflh3x5vxn8SmRPMrAMZ/view?usp=drive_link', '_blank');
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-outdoors-rust/20 ${isScrolled
        ? 'bg-texture-paper shadow-md py-2'
        : 'bg-transparent py-4'
        }`}
    >
      <nav className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo/Name */}
        {/* Logo/Name */}
        <a href="#home" className="font-display text-2xl font-bold text-outdoors-rust tracking-widest uppercase border-2 border-outdoors-rust p-1 px-3 rounded-sm rotate-1 hover:rotate-0 transition-transform bg-texture-paper">
          V. Tyagi
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                <a
                  href={link.href}
                  className="font-display text-sm tracking-wider uppercase text-foreground hover:text-outdoors-rust transition-colors flex items-center gap-1"
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-outdoors-rust">➤</span>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4 text-outdoors-rust" />
              ) : (
                <Moon className="h-4 w-4 text-outdoors-charcoal" />
              )}
            </button>

            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              >
                {link.icon}
              </a>
            ))}

            <Button
              variant="default"
              size="sm"
              className="bg-outdoors-forest hover:bg-outdoors-rust text-white font-display uppercase tracking-widest border border-outdoors-bark shadow-sm"
              onClick={handleResumeClick}
            >
              <Download className="h-4 w-4 mr-2" />
              Resume
            </Button>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5 text-outdoors-rust" />
            ) : (
              <Moon className="h-5 w-5 text-outdoors-charcoal" />
            )}
          </button>

          <button
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl w-full absolute top-full left-0 shadow-lg animate-fade-in z-50 border-b border-white/10">
          <div className="container mx-auto px-6 py-6 flex flex-col">
            <ul className="flex flex-col space-y-4 mb-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-base hover:text-premium-emerald transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center space-x-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                >
                  {link.icon}
                </a>
              ))}

              <Button
                variant="default"
                size="sm"
                className="bg-premium-emerald text-white ml-auto"
                onClick={handleResumeClick}
              >
                <Download className="h-4 w-4 mr-1" />
                Resume
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
