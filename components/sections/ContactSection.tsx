import React from 'react';

interface ContactSectionProps {
  title?: string;
  description?: string;
  email?: string;
  phone?: string;
}

export default function ContactSection({
  title = "Get In Touch",
  description = "For inquiries about events, memberships, or to share your own stories and updates, please reach out to the organizing committee.",
  
}: ContactSectionProps) {
  return (
    <section className="w-full h-[25vh] py-4 md:py-6 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-8">{title}</h2>
        <p className="max-w-2xl mx-auto font-body mb-8">
          {description}
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        </div>
      </div>
    </section>
  );
} 