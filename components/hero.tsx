'use client';

import React from 'react';

export default function Hero() {
  return (
    <section
      className="relative w-full flex items-center justify-end bg-no-repeat bg-center"
      style={{
        backgroundImage: `url('/images/uaf-banner.jpg')`,
        backgroundSize: 'contain',
        height: '60vh', // Adjust height as needed
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      
      {/* Text content positioned at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 md:p-8">
        <div className="container mx-auto">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-headline">
            PBG Class of &apos;87
          </h1>
        </div>
      </div>
    </section>
  );
}
