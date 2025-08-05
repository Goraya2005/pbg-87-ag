'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const eventDate = "August 23, 2025"; // Event date

function Days() {
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const eventDateTime = new Date(eventDate).getTime();
      const now = new Date().getTime();
      const difference = eventDateTime - now;

      setRemainingTime(difference);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-8 lg:grid-cols-3 sm:grid-cols-1 items-center">
      {/* Event Date Section */}
      <div className="flex flex-col items-center justify-center h-full p-6 bg-brown-800 rounded-lg shadow-md" data-aos="fade-up">
        <div className="event-block text-center">
          <h2 className="text-3xl sm:text-2xl font-bold mb-4">Date of Upcoming Event</h2>
          <p className="text-xl sm:text-lg">{new Date(eventDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>
      </div>

      {/* Remaining Time Section */}
      <div className="flex flex-col items-center justify-center h-full p-6 text-white bg-red-800 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="200">
        <h2 className="text-3xl sm:text-2xl font-bold mb-4 text-center">Remaining Time</h2>
        <div className="grid grid-cols-4 gap-4">
          <div className="time-block text-center bg-blue-900 p-4 rounded-lg">
            <p className="text-3xl sm:text-2xl">{days}</p>
            <p className="text-sm sm:text-xs">Days</p>
          </div>
          <div className="time-block text-center bg-black p-4 rounded-lg">
            <p className="text-3xl sm:text-2xl">{hours}</p>
            <p className="text-sm sm:text-xs">Hours</p>
          </div>
          <div className="time-block text-center bg-blue-900 p-4 rounded-lg">
            <p className="text-3xl sm:text-2xl">{minutes}</p>
            <p className="text-sm sm:text-xs">Minutes</p>
          </div>
          <div className="time-block text-center bg-black p-4 rounded-lg">
            <p className="text-3xl sm:text-2xl">{seconds}</p>
            <p className="text-sm sm:text-xs">Seconds</p>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex flex-col items-center justify-center h-full p-6 bg-brown-800 rounded-lg shadow-md" data-aos="fade-up">
        <div className="flex items-center justify-center">
          <div className="event-block">
            <Image src="/images/zahoor-gill.jpg" alt="Boy" width={200} height={200} className="rounded-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Days;
