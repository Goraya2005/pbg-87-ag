export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The majority of our class fellows do understand our contributions.
            </h2>
            <p className="text-lg md:text-xl text-gray-400 text-justify">
              In our diverse array of fields spanning agriculture, banking and finance, and legal services, we are proud to note that a significant majority of our class fellows comprehends and appreciates the depth and breadth of our contributions. Through our unwavering commitment to excellence and our tailored solutions, we consistently strive to empower our customers across various sectors, fostering mutual trust, understanding, and lasting partnerships.
            </p>
          </div>

          {/* Items */}
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start" data-aos-id-blocks>
            
            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-12 h-12 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <path className="stroke-current text-purple-100" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-300" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
              </svg>
              <h4 className="text-xl md:text-2xl text-center font-semibold mb-2">Mutual Respect and Understanding</h4>
              <p className="text-base md:text-lg text-gray-400 text-justify">
                Despite our divergent paths in various fields, our friendship is grounded in a profound respect for each other's expertise and experiences. We understand and appreciate the significance of each other's contributions to our respective domains.
              </p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-12 h-12 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <circle className="fill-current text-purple-600" cx="32" cy="32" r="32" />
                <path className="stroke-current text-purple-100" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-300" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
              </svg>
              <h4 className="text-xl md:text-2xl text-center font-semibold mb-2">Shared Values and Goals</h4>
              <p className="text-base md:text-lg text-gray-400 text-justify">
                While pursuing distinct academic and professional trajectories, we remain aligned in our core values and overarching objectives. Our shared commitment to excellence, innovation, and societal impact binds us together, fostering a sense of unity amidst diversity.
              </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-12 h-12 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <g transform="translate(21 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <ellipse className="stroke-current text-purple-300" cx="11" cy="11" rx="5.5" ry="11" />
                  <path className="stroke-current text-purple-100" d="M11 0v22M0 11h22" />
                  <circle className="stroke-current text-purple-100" cx="11" cy="11" r="11" />
                </g>
              </svg>
              <h4 className="text-xl md:text-2xl text-center font-semibold mb-2">Collaborative Spirit</h4>
              <p className="text-base md:text-lg text-gray-400 text-justify">
                The spirit of collaboration defines our friendship, as we actively seek opportunities to collaborate across disciplines. By leveraging our diverse skill sets and perspectives, we enhance the quality and scope of our work, leading to impactful outcomes.
              </p>
            </div>

            {/* Additional items */}
          </div>

        </div>
      </div>
    </section>
  );
}
