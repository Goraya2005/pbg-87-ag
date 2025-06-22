// app/components/Album.tsx

'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Section = {
  description: string;
  date: string;
  folder: string;
  images: string[];
};

const sections: Section[] = [
  {
    description: 'Walima Ceremony of son of Mr. Zahoor Gill - Golden Palm Marque',
    date: 'June 21, 2025',
    folder: '/images/21-06-2025',
    images: [
      '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg',
      '11.jpg', '12.jpg', '13.jpg', '14.jpg',
    ],
  },
  {
    description: 'Venue - AlHaram Restaurant, D-Ground, Faisalabad',
    date: 'May 25, 2025',
    folder: '/images/25-05-2025',
    images: [
      '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg',
      '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg',
    ],
  },
  {
    description: 'Host - Muhammad Sarwar',
    date: 'April 27, 2025',
    folder: '/images/27-04-2025',
    images: [
      '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg',
      '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg',
      '21.jpg', '22.jpg', '23.jpg', '24.jpg', '25.jpg', '26.jpg', '27.jpg', '28.jpg', '29.jpg', '30.jpg',
    ],
  },
  {
    description: 'Host - Shahid Chohan',
    date: 'November 24, 2024',
    folder: '/images/24-11-2024',
    images: ['1.jpg', '3.jpg', '5.jpg', '7.jpg'],
  },
  {
    description: 'Host - Zahoor Gill',
    date: 'October 20, 2024',
    folder: '/images/20-10-2024',
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '6.jpg', '8.jpg', '10.jpg', '12.jpg'],
  },
  {
    description: 'Host - Khalid Rafique',
    date: 'September 28, 2024',
    folder: '/images/28-09-2024',
    images: [
      '12.jpg', '11.jpg', '10.jpg', '9.jpg', '8.jpg', '7.jpg', '6.jpg', '5.jpg', '4.jpg', '3.jpg',
      '2.jpg', '1.jpg',
    ],
  },
  {
    description: 'Host - Abdul Rasheed',
    date: 'August 24, 2024',
    folder: '/images/24-08-2024',
    images: Array.from({ length: 12 }, (_, i) => `${i + 1}.jpg`),
  },
  {
    description: 'Nazar Hussain',
    date: 'July 20, 2024',
    folder: '/images/20-07-2024',
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
  },
  {
    description: 'Host - Irfan Jaffar',
    date: 'May 25, 2024',
    folder: '/images/25-05-2024',
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
  },
  {
    description: 'Host - Shahid Chohan',
    date: 'April 20, 2024',
    folder: '/images/20-04-2024',
    images: [
      '1a.jpeg', '1b.jpeg', '1c.jpeg', '1d.jpeg', '1e.jpeg', '1f.jpeg', '1g.jpeg', '1h.jpeg',
      '1j.jpeg', '1m.jpeg', '1l.jpeg',
    ],
  },
];

const Album: React.FC = () => (
  <section aria-labelledby="album-heading" className="py-8 px-4">
    <div className="max-w-7xl mx-auto">
      <h1 id="album-heading" className="text-4xl font-bold text-center mb-12">
        Monthly Meeting Album: 87-​ag-​PBG-​FAISALABAD
      </h1>

      {sections.map(({ description, date, folder, images }, idx) => (
        <div key={idx} className="mb-16">
          {/* Display Description above Date */}
          <h3 className="text-xl font-semibold text-center mb-2 text-gray-700">{description}</h3>
          <h2 className="text-2xl text-gray-500 text-center mb-8">Date of Event: {date}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((filename) => {
              const imagePath = `${folder}/${filename}`;
              return (
                <Link
                  href={imagePath}
                  key={filename}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative w-full h-48 sm:h-56 md:h-64 rounded-md overflow-hidden">
                    <Image
                      src={imagePath}
                      alt={`Meeting image ${filename}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Album;
