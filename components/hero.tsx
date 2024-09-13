import React from 'react';

export default function Hero() {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url('/images/banner.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'black',
        textShadow: '2px 2px 0px white',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            {/* Use Tailwind typography classes for h1, h2, h3 */}
            <h1 className="text-5xl font-bold mb-4" data-aos="fade-up">
              87-ag-Agri
            </h1>
            <h2 className="text-3xl font-semibold mb-4" data-aos="fade-up">
              Plant Breeding and Genetics
            </h2>
            <h2 className="text-3xl font-semibold mb-4" data-aos="fade-up">
              (FAISALABAD)
            </h2>
            <h3
              className="text-2xl font-bold mb-4"
              data-aos="fade-up"
              style={{ color: 'blue' }}
            >
              University of Agriculture, Faisalabad
            </h3>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <a
                  className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
                  href="/about"
                >
                  PBG - Faisalabad
                </a>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                <a
                  className="btn text-white bg-red-700 hover:bg-yellow-800 w-full sm:w-auto sm:ml-4"
                  href="/gallery"
                >
                  Gallery
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
