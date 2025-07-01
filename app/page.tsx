import React from 'react';
import Hero from '@/components/hero';
import LandingPage from '@/components/LandingPage';
import Copyright from '@/components/copyright/Copyright';  
import Navbar from '@/components/navbar/Navbar';  


const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <Hero />
      <div className="my-4 sm:my-8" />
      <LandingPage />
      <div className="my-4 sm:my-8" />
      <Copyright />
    </div>
  );
};

export default Home;
