import React from 'react';
import { Card } from '@/components/card';
import { CalendarClock } from 'lucide-react';

interface Event {
  title: string;
  date: string;
  location: string;
}

interface EventsSectionProps {
  title?: string;
  events?: Event[];
}

export default function EventsSection({
  title = "Upcoming Events",
  events = [
    { title: "Monthly Reunion Dinner", date: "July 27, 2025", location: "Serena Hotel, Faisalabad" },
    { title: "Virtual Meet & Greet", date: "Every First Sunday", location: "Online via Zoom" },
    { title: "Campus Visit", date: "Once in a week", location: "UAF Campus" },
  ]
}: EventsSectionProps) {
  return (
    <section className="w-full py-16 md:py-24 bg-gree-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card key={index} className="p-6 text-center border-primary/30">
              <CalendarClock className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold font-headline">{event.title}</h3>
              <p className="text-foreground/80 font-body mt-2">{event.date}</p>
              <p className="text-muted-foreground font-body">{event.location}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 