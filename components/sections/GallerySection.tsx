import React from 'react';
import Image from 'next/image';

interface GalleryImage {
  src: string;
  alt: string;
  hint: string;
}

interface GallerySectionProps {
  title?: string;
  images?: GalleryImage[];
}

export default function GallerySection({
  title = "A Walk Down Memory Lane",
  images = [
    { src: "/images/20-07-2024/1.jpg", alt: "Vintage group photo from university days", hint: "vintage group photo" },
    { src: "/images/20-07-2024/3.jpg", alt: "Alumni at a recent reunion dinner", hint: "friends reunion" },
    { src: "/images/20-07-2024/3.jpg", alt: "A speaker at a university event", hint: "university event" },
    { src: "/images/20-10-2024/6.jpg", alt: "A group of friends laughing together outdoors", hint: "friends laughing" },
    { src: "/images/20-10-2024/7.jpg", alt: "Candid moment of friends in conversation", hint: "candid friends" },
    { src: "/images/20-10-2024/8.jpg", alt: "An old photograph of the university campus", hint: "old university" },
    { src: "/images/25-05-2025/1.jpg", alt: "Classmates on a trip to a scenic location", hint: "friends trip" },
    { src: "/images/25-05-2025/2.jpg", alt: "Students working together in a science lab", hint: "science lab" },
    { src: "/images/25-05-2025/3.jpg", alt: "Happy graduates during a convocation ceremony", hint: "graduation ceremony" },
  ]
}: GallerySectionProps) {
  return (
    <section className="w-full py-16 md:py-24 bg-yellow600">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">{title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <Image 
                src={image.src} 
                alt={image.alt} 
                width={600} 
                height={400} 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                data-ai-hint={image.hint} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 