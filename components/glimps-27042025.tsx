// app/components/Album27042025.tsx

import Image from 'next/image';

type Section = {
  date: string;
  folder: string;
  images: number[];
};

const sections: Section[] = [
  {
    date: 'April 27, 2025',
    folder: '/images/27-04-2025',
    images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 26, 27, 28], // add or remove numbers here
  },
  
];

const Album27042025 = () => (
  <section aria-labelledby="album-title" className="py-8 px-4">
    <div className="max-w-7xl mx-auto">
      <h1
        id="album-title"
        className="text-4xl font-bold text-center mb-12"
      >
        Monthly Meeting Album: 87-ag-PBG-FAISALABAD
      </h1>

      {sections.map(({ date, folder, images }, idx) => (
        <div key={idx} className="mb-12">
          <h2 className="text-2xl text-gray-500 text-center mb-6">
            Date of Meeting: {date}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((num) => (
              <div
                key={num}
                className="relative w-full h-48 sm:h-56 md:h-64 rounded overflow-hidden"
              >
                <Image
                  src={`${folder}/${num}.jpg`}
                  alt={`Meeting Image ${num}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                  priority={false}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Album27042025;
