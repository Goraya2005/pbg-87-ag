'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();

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

      {/* Content Wrapper on the Right */}
      <div className="relative z-10 text-white text-right max-w-md px-4 sm:px-6 lg:px-8 mr-20 mt-24">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6">
          87-ag-Agri
        </h1>
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
          Plant Breeding and Genetics
        </h2>
        <h3 className="text-2xl sm:text-3xl font-medium mb-6">
          (FAISALABAD)
        </h3>
        <p className="text-xl sm:text-2xl mb-8">
          University of Agriculture, Faisalabad
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-end gap-4">
          <button
            className="px-6 py-3 text-lg font-medium bg-purple-600 hover:bg-purple-700 rounded shadow-md"
            onClick={() => router.push('/about')}
          >
            PBG - Faisalabad
          </button>
          <button
            className="px-6 py-3 text-lg font-medium bg-red-600 hover:bg-red-700 rounded shadow-md"
            onClick={() => router.push('/gallery')}
          >
            Gallery
          </button>
        </div>
      </div>
    </section>
  );
}
