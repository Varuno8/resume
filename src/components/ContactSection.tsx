
import React from 'react';
import { ContactForm, SocialLinks, AvailabilitySection } from '@/components/contact';
import { useIsMobile } from '@/hooks/use-mobile';

const ContactSection: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section id="contact" className="section-padding relative bg-card transition-colors duration-300">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10"></div>

      <div className="container mx-auto">
        {/* Section title */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-outdoors-forest">
            Plan a <span className="text-outdoors-rust border-b-4 border-outdoors-rust/30">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto px-4 font-display tracking-wide">
            Ready to start a new adventure? Send a signal and let's map out the route.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-6 lg:px-0">
          {/* Contact form */}
          <ContactForm />

          {/* Connect section */}
          <div>
            <SocialLinks />
            <AvailabilitySection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
