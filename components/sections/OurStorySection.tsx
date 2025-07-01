import React from 'react';
import Image from 'next/image';

interface OurStorySectionProps {
  title?: string;
  imageSrc?: string;
  imageAlt?: string;
  paragraphs?: string[];
}

export default function OurStorySection({
  title = "Our Enduring Legacy",
  imageSrc = "/images/our-story.jpeg",
  imageAlt = "University Campus",
  paragraphs = [
    "Our journey began in the hallowed halls of the University of Agriculture, Faisalabad, as the Plant Breeding & Genetics (PBG) class of 1987. We were a group of ambitious students, united by our passion for science and a shared dream for the future.",
    "More than just classmates, we became a family. We supported each other through late-night study sessions, celebrated triumphs, and forged a bond of mutual respect and deep friendship that has transcended time and distance. This chapter is a testament to that unbreakable connection."
  ]
}: OurStorySectionProps) {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">{title}</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              data-ai-hint="university campus"
            />
          </div>
          <div className="space-y-4 text-justify bg-blue-800 text-white">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-lg text-foreground/80 font-body">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 