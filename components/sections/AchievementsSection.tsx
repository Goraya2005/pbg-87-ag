import React from 'react';
import { Card, CardContent } from '@/components/card';
import { Globe, Leaf, FlaskConical, Award } from 'lucide-react';

interface Achievement {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface AchievementsSectionProps {
  title?: string;
  achievements?: Achievement[];
}

export default function AchievementsSection({
  title = "Our Global Impact",
  achievements = [
    { icon: <Globe className="h-10 w-10 text-primary" />, title: "Global Research Leaders", description: "Members of our class are now leading vital agricultural research projects across North America, Europe, and Australia." },
    { icon: <Leaf className="h-10 w-10 text-primary" />, title: "Champions of Sustainability", description: "Pioneering sustainable farming techniques and policies that are making a tangible impact on food security and the environment." },
    { icon: <FlaskConical className="h-10 w-10 text-primary" />, title: "Innovators in Agri-Tech", description: "From biotech startups to multinational corporations, our alumni are at the forefront of agricultural technology and innovation." },
    { icon: <Award className="h-10 w-10 text-primary" />, title: "Mentors to the Next Generation", description: "Many have returned to academia, shaping the minds of future scientists and passing on the legacy of the PBG department." },
  ]
}: AchievementsSectionProps) {
  return (
    <section className="w-full py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">{title}</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item, index) => (
            <Card key={index} className="bg-background/70 shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold font-headline mb-2">{item.title}</h3>
                  <p className="text-foreground/80 font-body">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 