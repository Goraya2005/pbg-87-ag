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
    <nav className="bg-gray-800 p-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
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
            <span className="text-white font-bold text-xl lg:text-2xl">
              87-ag-Agri @ PBG - Faisalabad
            </span>
          </div>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none hover:text-gray-300"
          >
            <svg
              className="w-6 h-6"
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
          className={`lg:flex items-center space-x-4 ${
            isOpen ? 'block' : 'hidden'
          } lg:block`}
        >
          <div
            onClick={() => router.push('/')}
            className="block bg-blue-200 text-black hover:bg-blue-300 py-2 px-4 rounded border border-white cursor-pointer"
          >
            Home
          </div>
          <div
            onClick={() => router.push('/about')}
            className="block bg-blue-200 text-black hover:bg-blue-300 py-2 px-4 rounded border border-white cursor-pointer"
          >
            About
          </div>
          <div
            onClick={() => router.push('/gallery')}
            className="block bg-blue-200 text-black hover:bg-blue-300 py-2 px-4 rounded border border-white cursor-pointer"
          >
            Gallery
          </div>
          <div
            onClick={() => router.push('/events')}
            className="block bg-blue-200 text-black hover:bg-blue-300 py-2 px-4 rounded border border-white cursor-pointer"
          >
            Events
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div
            onClick={() => router.push('/')}
            className="block bg-blue-200 text-black py-2 px-4 hover:bg-gray-700 rounded border border-white cursor-pointer"
          >
            Home
          </div>
          <div
            onClick={() => router.push('/about')}
            className="block bg-blue-200 text-black py-2 px-4 hover:bg-gray-700 rounded border border-white cursor-pointer"
          >
            About
          </div>
          <div
            onClick={() => router.push('/gallery')}
            className="block bg-blue-200 text-black py-2 px-4 hover:bg-gray-700 rounded border border-white cursor-pointer"
          >
            Gallery
          </div>
          <div
            onClick={() => router.push('/events')}
            className="block bg-blue-200 text-black py-2 px-4 hover:bg-gray-700 rounded border border-white cursor-pointer"
          >
            Events
          </div>
        </div>
      )}
    </nav>
  );
}
