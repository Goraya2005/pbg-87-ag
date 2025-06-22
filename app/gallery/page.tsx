import Navbar from '@/components/navbar/Navbar'; 
import Image from 'next/image';
import Album from '@/components/glimps';
import Copyright from '@/components/copyright/Copyright';  

export const metadata = {
  title: 'Home - 87-ag-PBG',
};

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Main banner image */}
      <div className="flex items-center justify-center">
        <Image
          className="w-full h-auto" // Makes the image responsive
          src="/images/uaf4.jpg"
          alt="main"
          width={1200}
          height={800}
        />
      </div>
      <br />
      <br />

      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20 border-t border-gray-800">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              {/* Responsive heading */}
              <h2 className="text-4xl font-bold mb-4 leading-tight md:text-5xl sm:text-3xl">
                A glimpse of the meetup for students of 87-ag-Agri - PBG - Faisalabad.
              </h2>
              <p className="text-xl text-gray-400 text-justify md:text-lg sm:text-base">
                Experience the vibrant exchange of ideas and camaraderie at the 87-ag-Agri - PBG meetup in Faisalabad. Engage with fellow students in insightful discussions and networking opportunities. A dynamic gathering fostering collaboration and growth within the PBG community.
              </p>
            </div>
            <br />

            {/* Responsive image grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* 1st Member */}
              <div className="flex flex-col p-6 bg-blue-300" data-aos="fade-up">
                <div className="relative">
                  <Image
                    src="/images/irfan3.jpg"
                    alt="Irfan Jafar"
                    className="object-cover w-full h-full"
                    width={400}
                    height={300}
                  />
                </div>
              </div>

              {/* 2nd Member */}
              <div className="flex flex-col p-6 bg-blue-300" data-aos="fade-up" data-aos-delay="200">
                <div className="relative">
                  <Image
                    src="/images/dr-sarwar1.jpg"
                    alt="Dr. Sarwar"
                    className="object-cover w-full h-full"
                    width={400}
                    height={300}
                  />
                </div>
              </div>

              {/* 3rd Member */}
              <div className="flex flex-col p-6 bg-blue-300" data-aos="fade-up">
                <div className="relative">
                  <Image
                    src="/images/boy1.jpg"
                    alt="Khalid Rafique"
                    className="object-cover w-full h-full"
                    width={400}
                    height={300}
                  />
                </div>
              </div>

              {/* 4th Member */}
              <div className="flex flex-col p-6 bg-blue-300" data-aos="fade-up" data-aos-delay="200">
                <div className="relative">
                  <Image
                    src="/images/shahid-chohan.jpeg"
                    alt="Shahid Chohan"
                    className="object-cover w-full h-full"
                    width={400}
                    height={300}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br />
      <hr />

      {/* Album section */}
      <Album />

      {/* Footer */}
      <footer className="mt-auto">
        <Copyright />
      </footer>
    </div>
  );
}
