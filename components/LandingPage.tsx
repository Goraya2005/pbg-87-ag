import React from 'react';
// Import BlockArt directly from its file location
import BlockArt from './sections/BlockArt'; 
import {
  OurStorySection,
  ValuesSection,
  MembersSection,
  AlumniSpotlightSection,
  AchievementsSection,
  GallerySection,
  ContactSection,
  EventsSection
} from './sections';

export default function LandingPage() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-700 font-body">
      <BlockArt />

      <OurStorySection />
      <ValuesSection />
      <MembersSection />
      <AlumniSpotlightSection />
      <AchievementsSection />
      
      <GallerySection />
      <EventsSection />
      <ContactSection />
    </main>
  );
}