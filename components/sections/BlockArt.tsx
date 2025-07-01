import React from 'react';

interface BlockArtProps {
  title?: string;
  subtitle?: string;
}

export default function BlockArt({ 
  title = "Plant Breeding & Genetics 1987 - Faisalabad Chapter",
  subtitle = "Decades later, our bond remains unbroken. Celebrating a lifetime of friendship, respect, and shared memories from our days at the University of Agriculture, Faisalabad."
}: BlockArtProps) {
  return (
    <section className="w-full py-10 md:py-16 bg-sky-400 text-white relative overflow-hidden">
      {/* Bubble Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Bubbles */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white/15 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white/25 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
        
        {/* Medium Bubbles */}
        <div className="absolute top-1/3 left-1/3 w-12 h-12 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-14 h-14 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4.5s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-10 h-10 bg-white/25 rounded-full animate-bounce" style={{ animationDelay: '2.5s', animationDuration: '3.2s' }}></div>
        
        {/* Small Bubbles */}
        <div className="absolute top-1/4 left-1/2 w-8 h-8 bg-white/35 rounded-full animate-bounce" style={{ animationDelay: '0.8s', animationDuration: '2.8s' }}></div>
        <div className="absolute top-3/4 left-1/6 w-6 h-6 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '1.8s', animationDuration: '3.8s' }}></div>
        <div className="absolute bottom-1/4 right-1/6 w-9 h-9 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: '0.3s', animationDuration: '4.2s' }}></div>
        <div className="absolute top-1/6 right-1/6 w-7 h-7 bg-white/25 rounded-full animate-bounce" style={{ animationDelay: '2.2s', animationDuration: '3.6s' }}></div>
        
        {/* Extra Small Bubbles */}
        <div className="absolute top-1/5 left-1/5 w-4 h-4 bg-white/45 rounded-full animate-bounce" style={{ animationDelay: '0.2s', animationDuration: '2.5s' }}></div>
        <div className="absolute top-2/3 left-2/3 w-5 h-5 bg-white/35 rounded-full animate-bounce" style={{ animationDelay: '1.2s', animationDuration: '3.3s' }}></div>
        <div className="absolute bottom-1/5 right-1/3 w-3 h-3 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '0.7s', animationDuration: '2.9s' }}></div>
        <div className="absolute top-1/3 right-1/5 w-4 h-4 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '1.7s', animationDuration: '3.1s' }}></div>
        <div className="absolute bottom-1/3 left-1/5 w-6 h-6 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: '0.4s', animationDuration: '4.1s' }}></div>
        
        {/* Floating Bubbles */}
        <div className="absolute top-1/4 right-1/2 w-11 h-11 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: '1.1s', animationDuration: '3.9s' }}></div>
        <div className="absolute top-2/5 left-3/4 w-13 h-13 bg-white/25 rounded-full animate-bounce" style={{ animationDelay: '2.1s', animationDuration: '4.3s' }}></div>
        <div className="absolute bottom-1/6 left-1/3 w-8 h-8 bg-white/35 rounded-full animate-bounce" style={{ animationDelay: '0.6s', animationDuration: '3.4s' }}></div>
        <div className="absolute top-3/5 right-1/5 w-15 h-15 bg-white/15 rounded-full animate-bounce" style={{ animationDelay: '1.6s', animationDuration: '4.7s' }}></div>
        <div className="absolute bottom-2/5 right-2/5 w-7 h-7 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0.9s', animationDuration: '3.7s' }}></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto text-center px-4 relative z-10">
        <h1 
          className="text-4xl md:text-6xl font-bold font-headline tracking-tighter mb-4 drop-shadow-lg"
          style={{
            animation: 'colorChange 6s infinite',
            WebkitAnimation: 'colorChange 6s infinite',
            animationDelay: '3s'
          }}
        >
          {title}
        </h1>
        <p 
          className="max-w-3xl mx-auto text-lg md:text-xl font-body drop-shadow-md"
          style={{
            animation: 'colorChange 6s infinite',
            WebkitAnimation: 'colorChange 6s infinite',
            animationDelay: '3s'
          }}
        >
          {subtitle}
        </p>
      </div>
      
      {/* CSS Animation for color change */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes colorChange {
            0%, 50% {
              color: #000000;
            }
            50.1%, 100% {
              color: #ffffff;
            }
          }
          @-webkit-keyframes colorChange {
            0%, 50% {
              color: #000000;
            }
            50.1%, 100% {
              color: #ffffff;
            }
          }
        `
      }} />
    </section>
  );
} 