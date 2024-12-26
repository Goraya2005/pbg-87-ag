import React from 'react';
import Hero from '@/components/hero';
import Testimonials from '@/components/testimonials';
import Copyright from '@/components/copyright/Copyright';  
import Navbar from '@/components/navbar/Navbar';  


const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <br />
     
      <br />
      <Testimonials />
      <br />
      <Copyright />
    </div>
  );
};

export default Home;
