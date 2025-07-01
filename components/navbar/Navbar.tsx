'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 fixed top-0 w-full z-20 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-2 sm:px-4">
        {/* Left side logo and company name */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => router.push('/')}
        >
          <div className="flex items-center">
            {/* Logo Image */}
            <div
              className="h-8 w-8 mr-2 bg-cover bg-center rounded-full"
              style={{ backgroundImage: "url('/logo.png')" }}
            ></div>
            {/* Company Name */}
            <span className="text-white font-bold text-lg sm:text-xl lg:text-xl whitespace-nowrap">
              87-ag-Agri - PBG - Faisalabad
            </span>
          </div>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none hover:text-gray-300 p-2 rounded"
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Right side links */}
        <div
          className={`lg:flex items-center space-x-2 sm:space-x-4 ${
            isOpen ? 'block' : 'hidden'
          } lg:block`}
        >
          <div
            onClick={() => router.push('/')}
            className="block bg-blue-200 text-black hover:bg-blue-300 py-2 px-3 sm:px-4 rounded border border-white cursor-pointer transition-colors"
          >
            Home
          </div>
          <div
            onClick={() => router.push('/about')}
            className="block bg-blue-200 text-black hover:bg-blue-300 py-2 px-3 sm:px-4 rounded border border-white cursor-pointer transition-colors"
          >
            About
          </div>
          <div
            onClick={() => router.push('/gallery')}
            className="block bg-blue-200 text-black hover:bg-blue-300 py-2 px-3 sm:px-4 rounded border border-white cursor-pointer transition-colors"
          >
            Gallery
          </div>
          <div
            onClick={() => router.push('/events')}
            className="block bg-blue-200 text-black hover:bg-blue-300 py-2 px-3 sm:px-4 rounded border border-white cursor-pointer transition-colors"
          >
            Events
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-30 flex flex-col items-end lg:hidden">
          <div className="w-3/4 sm:w-1/2 bg-gray-800 p-6 space-y-4 shadow-lg h-full">
            <div
              onClick={() => { setIsOpen(false); router.push('/'); }}
              className="block bg-blue-200 text-black py-2 px-4 hover:bg-gray-700 rounded border border-white cursor-pointer transition-colors"
            >
              Home
            </div>
            <div
              onClick={() => { setIsOpen(false); router.push('/about'); }}
              className="block bg-blue-200 text-black py-2 px-4 hover:bg-gray-700 rounded border border-white cursor-pointer transition-colors"
            >
              About
            </div>
            <div
              onClick={() => { setIsOpen(false); router.push('/gallery'); }}
              className="block bg-blue-200 text-black py-2 px-4 hover:bg-gray-700 rounded border border-white cursor-pointer transition-colors"
            >
              Gallery
            </div>
            <div
              onClick={() => { setIsOpen(false); router.push('/events'); }}
              className="block bg-blue-200 text-black py-2 px-4 hover:bg-gray-700 rounded border border-white cursor-pointer transition-colors"
            >
              Events
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
