import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/card';

interface Member {
  name: string;
  role: string;
  image: string;
  hint: string;
}

interface MembersSectionProps {
  title?: string;
  members?: Member[];
}

export default function MembersSection({
  title = "Meet Our Pillars",
  members = [
    { name: "Dr. Shahid Chohan", role: "Lead Scientist", image: "/images/shahid-chohan.jpeg", hint: "portrait man" },
    { name: "Dr. Muhammad Sarwar", role: "Lead Scientist", image: "/images/dr-sarwar.jpeg", hint: "portrait man" },
    { name: "Abdul Rasheed", role: "Manager - CAD", image: "/images/rasheed3.jpg", hint: "male portrait" },
    { name: "Khalid Rafique", role: "Advocate High Court", image: "/images/17.jpg", hint: "male portrait" },
    { name: "Dr. Nazar Hussain", role: "Professor", image: "/images/nazar.jpg", hint: "man portrait" },
    { name: "Rana Mujahid", role: "Seasoned Banker", image: "/images/mujahid2.jpg", hint: "man portrait" },
    { name: "Irfan Jafar", role: "AVP / Branch Bank Manager", image: "/images/irfan3.jpg", hint: "portrait professional man" },
    { name: "Dr. SHahid Chohan", role: "Crop Scientist", image: "/images/shahid-chohan.jpeg", hint: "portrait professional man" },
  ]
}: MembersSectionProps) {
  return (
    <section className="w-full py-16 md:py-24 bg-brown-500">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white font-headline text-center mb-12">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary bg-background">
                  <Image src={member.image} alt={member.name} width={128} height={128} className="object-cover w-full h-full" data-ai-hint={member.hint} />
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-bold font-headline">{member.name}</h3>
                <p className="text-primary font-body">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 