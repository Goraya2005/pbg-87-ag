import React from 'react';
import Image from 'next/image';

type Testimonial = {
  src: string;
  alt: string;
  name: string;
  description: string;
  animationDelay?: number;
};

const testimonials: Testimonial[] = [
  {
    src: '/images/irfan-jafar.jpeg',
    alt: 'Irfan Jafar',
    name: 'Mr. Irfan Jafar',
    description:
      'A seasoned banker, brings years of expertise and leadership to his role. Currently based in Faisalabad, he plays a pivotal role in shaping the financial landscape of the region. With his astute insights and strategic acumen, Irfan Jafar continues to drive innovation and growth in the banking sector.',
  },
  {
    src: '/images/shahid-chohan.jpeg',
    alt: 'Dr. Shahid Chohan',
    name: 'Dr. Shahid Chohan',
    description:
      'A distinguished senior scientist, spearheads research initiatives in the field of cotton. Based in Faisalabad, his dedication to advancing cotton research techniques has garnered widespread acclaim. With his profound knowledge and expertise, Dr. Shahid Chohan continues to make significant contributions to the agricultural landscape.',
    animationDelay: 200,
  },
  {
    src: '/images/dr-sarwar.jpeg',
    alt: 'Dr. Muhammad Sarwar',
    name: 'Dr. Muhammad Sarwar',
    description:
      'A seasoned senior scientist, plays a pivotal role in wheat research, shaping agricultural practices in Faisalabad. His extensive expertise and dedication to wheat research have led to groundbreaking innovations in crop yield and quality. Dr. Sarwar\'s contributions continue to drive advancements in wheat farming, ensuring food security and sustainability in the region.',
  },
  {
    src: '/images/rasheed2.jpg',
    alt: 'Abdul Rasheed',
    name: 'Mr. Abdul Rasheed',
    description:
      'With a wealth of experience, he stands as a pillar of wisdom and leadership in the banking realm. Rooted in Faisalabad, his guidance shapes the course of the region’s financial landscape. Through insightful judgment and strategic foresight, he kindles a spirit of innovation, steering the banking sector toward a future of enduring progress.',
  },
  {
    src: '/images/mujahid2.jpg',
    alt: 'Rana Mujahid',
    name: 'Rana Mujahid',
    description:
      'A venerable figure in banking, wields a wealth of experience and distinguished leadership in his esteemed vocation. Stationed in Faisalabad, he occupies a consequential role in sculpting the financial realm of the province. With keen discernment and sagacious strategy, he steadfastly propels progress and refinement within the noble sphere of banking.',
  },
  {
    src: '/images/khalid.jpg',
    alt: 'Khalid Rafique',
    name: 'Khalid Rafique',
    description:
      'A distinguished Advocate of the High Court based in Faisalabad, specializing in civil, land, and revenue matters. Renowned for his legal expertise and unwavering dedication, he adeptly navigates complex cases, providing insightful counsel and robust representation. His commitment to justice and deep understanding of the law make him a respected figure in the legal community.',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-blue-800 text-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="text-4xl font-bold mb-4">
              We are 87-ag-Agri @ Plant Breeding and Genetics
            </h2>
            <p className="text-xl text-gray-400 text-justify">
              87-ag-Agri Major PBG focuses on advanced plant breeding and genetics techniques,
              aiming to develop resilient and high-yielding crop varieties. Students engage in rigorous
              academic training and practical experiences, equipping them with the skills to address
              real-world agricultural challenges. Graduates contribute to global food security through
              careers in plant breeding, genetics research, and agricultural consulting.
            </p>
          </div>

          {/* Testimonials grid */}
          <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-start">
            {testimonials.map(({ src, alt, name, description, animationDelay }, idx) => (
              <article
                key={idx}
                className="flex flex-col h-full p-6 bg-blue-300 rounded-lg shadow-md"
                data-aos="fade-up"
                {...(animationDelay ? { 'data-aos-delay': animationDelay } : {})}
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden">
                    <Image
                      src={src}
                      alt={alt}
                      layout="fill"
                      objectFit="cover"
                      priority={idx === 0}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-black text-center mb-3">{name}</h3>
                <blockquote className="text-lg text-black grow text-justify">{description}</blockquote>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
