'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const pastEventDate = new Date("September 28, 2024");

function calculateTimeDifference() {
  const now = new Date();

  const totalMilliseconds = now.getTime() - pastEventDate.getTime();

  const totalSeconds = Math.floor(totalMilliseconds / 1000);
  const secondsPassed = totalSeconds % 60;

  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutesPassed = totalMinutes % 60;

  const totalHours = Math.floor(totalMinutes / 60);
  const hoursPassed = totalHours % 24;

  const totalDays = Math.floor(totalHours / 24);
  const daysPassed = totalDays % 30;

  const totalMonths = Math.floor(totalDays / 30);
  const monthsPassed = totalMonths % 12;

  const yearsPassed = Math.floor(totalMonths / 12);

  return { yearsPassed, monthsPassed, daysPassed, hoursPassed, minutesPassed, secondsPassed };
}

function PastEventDays() {
  const [timePassed, setTimePassed] = useState(calculateTimeDifference());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimePassed(calculateTimeDifference());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-center">
      {/* Event Date Block */}
      <div className="flex flex-col h-full p-6 bg-brown-800 text-center justify-center rounded-lg shadow-md" data-aos="fade-up">
        <h5 className="text-2xl sm:text-xl font-bold mb-4 text-black">Date of Past Event</h5>
        <p className="text-xl sm:text-lg text-black">
          {pastEventDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>
      </div>

      {/* Centered Image */}
      <div className="flex flex-col h-full items-center justify-center p-6" data-aos="fade-up">
        <div className="event-block">
          <Image
            src="/images/zahoor-gill.jpg"
            alt="Dr. Shahid Chohan"
            width={150}
            height={150}
            className="object-cover rounded-full shadow-lg"
          />
        </div>
      </div>

      {/* Time Passed Block */}
      <div className="flex flex-col h-full p-6 bg-red-800 text-center justify-center rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="200">
        <h3 className="text-2xl sm:text-xl font-bold mb-4 text-white">Time Since Event</h3>
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-6 gap-4 justify-items-center">
          <div className="time-block">
            <p className="text-3xl sm:text-2xl font-bold text-white">{timePassed.yearsPassed}</p>
            <p className="text-sm sm:text-xs text-white">Years</p>
          </div>
          <div className="time-block">
            <p className="text-3xl sm:text-2xl font-bold text-white">{timePassed.monthsPassed}</p>
            <p className="text-sm sm:text-xs text-white">Months</p>
          </div>
          <div className="time-block">
            <p className="text-3xl sm:text-2xl font-bold text-white">{timePassed.daysPassed}</p>
            <p className="text-sm sm:text-xs text-white">Days</p>
          </div>
          <div className="time-block">
            <p className="text-3xl sm:text-2xl font-bold text-white">{timePassed.hoursPassed}</p>
            <p className="text-sm sm:text-xs text-white">Hours</p>
          </div>
          <div className="time-block">
            <p className="text-3xl sm:text-2xl font-bold text-white">{timePassed.minutesPassed}</p>
            <p className="text-sm sm:text-xs text-white">Minutes</p>
          </div>
          <div className="time-block">
            <p className="text-3xl sm:text-2xl font-bold text-white">{timePassed.secondsPassed}</p>
            <p className="text-sm sm:text-xs text-white">Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PastEventDays;
