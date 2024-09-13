import React from 'react';
import Hero from '@/components/hero';
import Features from '@/components/features';
import Testimonials from '@/components/testimonials';
import Copyright from '@/components/copyright/Copyright';  
import Navbar from '@/components/navbar/Navbar';  



export const metadata = {
  title: 'Home - 87-ag-PBG',
};

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <br />
      <Features />
      <br />
      <Testimonials />
      <br />
      <Copyright />
    </div>
  );
};

export default Home;
