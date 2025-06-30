import Navbar from '@/components/navbar/Navbar';
import Image from 'next/image';
import Album from '@/components/glimps';
import Copyright from '@/components/copyright/Copyright';
import React from 'react';

export const metadata = {
  title: 'Home - 87-ag-PBG',
};

type Member = {
  src: string;
  alt: string;
  delay?: number; // animation delay in ms (optional)
};

const members: Member[] = [
  { src: '/images/irfan3.jpg', alt: 'Irfan Jafar' },
  { src: '/images/dr-sarwar1.jpg', alt: 'Dr. Sarwar', delay: 200 },
  { src: '/images/shahid-chohan.jpeg', alt: 'Shahid Chohan', delay: 200 },
  { src: '/images/rasheed1.jpg', alt: 'Rasheed', delay: 200 },
  { src: '/images/mujahid.jpg', alt: 'Rana Mujahid', delay: 200 },
  { src: '/images/17.jpg', alt: 'Khalid Rafique' },
  { src: '/images/nazar.jpg', alt: 'nazar' },
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Main banner image */}
      <div className="flex items-center justify-center">
        <Image
          className="w-full h-auto" // Makes the image responsive
          src="/images/uaf4.jpg"
          alt="main"
          width={1200}
          height={800}
        />
      </div>
      <br />
      <br />

      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20 border-t border-gray-800">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              {/* Responsive heading */}
              <h2 className="text-4xl font-bold mb-4 leading-tight md:text-5xl sm:text-3xl">
                A glimpse of the meetup for students of 87-ag-Agri - PBG - Faisalabad.
              </h2>
              <p className="text-xl text-gray-400 text-justify md:text-lg sm:text-base">
                Experience the vibrant exchange of ideas and camaraderie at the 87-ag-Agri - PBG meetup in Faisalabad. Engage with fellow students in insightful discussions and networking opportunities. A dynamic gathering fostering collaboration and growth within the PBG community.
              </p>
            </div>
            <br />

            {/* Responsive image grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {members.map(({ src, alt, delay }, idx) => (
                <div
                  key={idx}
                  className="flex flex-col p-6 bg-blue-300"
                  data-aos="fade-up"
                  {...(delay ? { 'data-aos-delay': delay } : {})}
                >
                  <div className="relative w-full h-72 sm:h-80 md:h-96 rounded-md overflow-hidden">
                    <Image
                      src={src}
                      alt={alt}
                      className="object-cover w-full h-full"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                      priority={idx === 0} // priority only first image
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <br />
      <hr />

      {/* Album section */}
      <Album />

      {/* Footer */}
      <footer className="mt-auto">
        <Copyright />
      </footer>
    </div>
  );
}
