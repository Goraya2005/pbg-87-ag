import Navbar from '@/components/navbar/Navbar';
import Image from 'next/image';
import Testimonials from '@/components/testimonials';
import Copyright from '@/components/copyright/Copyright';  


export const metadata = {
  title: 'Home - 87-ag-PBG',
};

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Responsive Image Section */}
      <div className="flex justify-center items-center">
        <Image
          className="w-full h-auto object-cover"
          src="/images/uaf3.jpg"
          alt="main"
          width={1200}
          height={600}
          priority
        />
      </div>

      <div className="flex flex-col items-center p-4 sm:p-6 md:p-8 lg:p-10">
        {/* Testimonials Section */}
        <Testimonials />
      </div>
<Copyright />

    </div>
  );
}
