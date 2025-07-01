import React from 'react';
import { Card } from '@/components/card';
import { Users, BookOpen, HeartHandshake, Milestone } from 'lucide-react';

interface Value {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ValuesSectionProps {
  title?: string;
  values?: Value[];
}

export default function ValuesSection({
  title = "Our Guiding Principles",
  values = [
    { icon: <Users className="h-10 w-10 text-primary" />, title: "Friendship", description: "A bond forged in youth, strengthened over time. We are more than colleagues; we are family." },
    { icon: <HeartHandshake className="h-10 w-10 text-primary" />, title: "Respect", description: "We cherish each other's journeys, celebrate successes, and offer support in times of need." },
    { icon: <BookOpen className="h-10 w-10 text-primary" />, title: "Shared History", description: "Our roots at UAF's PBG department are a common thread that weaves through all our lives." },
    { icon: <Milestone className="h-10 w-10 text-primary" />, title: "Future Together", description: "Continuing to build our legacy, support the next generation, and create new memories." },
  ]
}: ValuesSectionProps) {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-center p-6 bg-secondary hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold font-headline mb-2">{value.title}</h3>
              <p className="text-foreground/70 font-body">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 