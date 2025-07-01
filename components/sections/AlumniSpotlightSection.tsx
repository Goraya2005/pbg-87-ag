import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/card';

interface AlumniSpotlight {
  name: string;
  image: string;
  hint: string;
  story: string;
}

interface AlumniSpotlightSectionProps {
  title?: string;
  spotlights?: AlumniSpotlight[];
}

export default function AlumniSpotlightSection({
  title = "Alumni Spotlight",
  spotlights = [
    { name: "Dr. Muhammad Sarwar", image: "/images/dr-sarwar.jpeg", hint: "woman scientist", story: "Dr. Muhammad Sarwar, a highly esteemed Senior Scientist in the Wheat Department at Ayub Agriculture Research Institute (AARI), Faisalabad, stands out as an exceptional researcher whose dedication and expertise have significantly advanced Pakistan's wheat sector. Renowned for his scientific rigor and innovative approach, he has made substantial contributions to wheat improvement programs, focusing on critical areas such as developing high-yielding, disease-resistant varieties and enhancing agronomic practices tailored to local conditions. His valuable research directly translates to increased productivity and resilience for farmers, playing a vital role in national food security. Dr. Sarwar is widely recognized not only for his outstanding scientific achievements but also for his mentorship and collaborative spirit, making him a truly valuable asset to AARI and the broader agricultural scientific community." },
    { name: "Dr. Shahid Chohan", image: "/images/shahid-chohan.jpeg", hint: "male entrepreneur", story: "Dr. Shahid Chohan, a distinguished scientist within the Cotton Department at Ayub Agriculture Research Institute (AARI), Faisalabad, is widely recognized for his substantial and impactful contributions to Pakistan's cotton sector. His dedicated research focuses on critical challenges facing cotton cultivation, including the development of high-yielding varieties, enhancing fiber quality traits, improving resistance to pests and diseases, and promoting climate-resilient farming practices. Dr. Chohan's innovative work directly translates to increased productivity, profitability, and sustainability for cotton farmers across the region. Renowned for his expertise, commitment to scientific excellence, and collaborative spirit, he is a highly valued asset to AARI, playing a vital role in strengthening Pakistan's vital cotton industry and agricultural research landscape." },
  ]
}: AlumniSpotlightSectionProps) {
  return (
    <section className="w-full py-16 md:py-24 bg-red-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">{title}</h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12">
          {spotlights.map((spotlight, index) => (
            <Card key={index} className="flex flex-col md:flex-row items-center gap-6 p-6 bg-secondary shadow-lg">
              <Image src={spotlight.image} alt={spotlight.name} width={150} height={150} className="rounded-full border-4 border-primary" data-ai-hint={spotlight.hint} />
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold font-headline">{spotlight.name}</h3>
                <p className="text-foreground/80 mt-2 text-justify font-body">{spotlight.story}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 