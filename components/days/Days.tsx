'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const eventDate = "September 28, 2024"; // Event date

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
    <div className="max-w-5xl mx-auto grid gap-8 lg:grid-cols-3 sm:grid-cols-1 lg:gap-6 items-center">
      {/* Event Date Section */}
      <div className="flex flex-col items-center justify-center h-full p-6 bg-brown-800" data-aos="fade-up">
        <div className="event-block text-center">
          <h2 className="text-4xl sm:text-3xl font-bold mb-4">Date of Upcoming Event</h2>
          <p className="text-2xl sm:text-xl">{new Date(eventDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>
      </div>

      {/* Remaining Time Section */}
      <div className="flex flex-col items-center justify-center h-full p-6 bg-red-800" data-aos="fade-up" data-aos-delay="200">
        <h2 className="text-4xl sm:text-3xl font-bold mb-4 text-center">Remaining Time</h2>
        <div className="max-w-sm grid grid-cols-4 gap-4 items-center">
          <div className="time-block text-center bg-blue-900 p-4 rounded-lg">
            <p className="text-4xl sm:text-3xl">{days}</p>
            <p className="text-lg sm:text-base">Days</p>
          </div>
          <div className="time-block text-center bg-black p-4 rounded-lg">
            <p className="text-4xl sm:text-3xl">{hours}</p>
            <p className="text-lg sm:text-base">Hours</p>
          </div>
          <div className="time-block text-center bg-blue-900 p-4 rounded-lg">
            <p className="text-4xl sm:text-3xl">{minutes}</p>
            <p className="text-lg sm:text-base">Minutes</p>
          </div>
          <div className="time-block text-center bg-black p-4 rounded-lg">
            <p className="text-4xl sm:text-3xl">{seconds}</p>
            <p className="text-lg sm:text-base">Seconds</p>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex flex-col items-center justify-center h-full p-6 bg-brown-800" data-aos="fade-up">
        <div className="flex items-center justify-center">
          <div className="event-block">
            <Image src="/images/irfan2.jpg" alt="Dr. Shahid Chohan" width={180} height={180} className="rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Days;
