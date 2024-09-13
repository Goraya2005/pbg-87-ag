import Image from 'next/image';

const Album = () => {
  return (
    <section className="py-8">
      {/* Main heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Monthly Meeting Albums: 87-ag-PBG-FAISALABAD</h1>
        <br />
        <br />
        <h2 className="text-2xl text-gray-500">Date of Meeting: August 24, 2024</h2>
      </div>

      {/* First Row of Images - Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div>
          <Image
            src="/images/24-08-2024/1.jpg"
            alt="Meeting Image 1"
            width={300}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <Image
            src="/images/24-08-2024/2.jpg"
            alt="Meeting Image 2"
            width={300}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <Image
            src="/images/24-08-2024/3.jpg"
            alt="Meeting Image 3"
            width={300}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <Image
            src="/images/24-08-2024/4.jpg"
            alt="Meeting Image 4"
            width={300}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Second Row of Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div>
          <Image
            src="/images/24-08-2024/5.jpg"
            alt="Meeting Image 5"
            width={300}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <Image
            src="/images/24-08-2024/6.jpg"
            alt="Meeting Image 6"
            width={300}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <Image
            src="/images/24-08-2024/7.jpg"
            alt="Meeting Image 7"
            width={300}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <Image
            src="/images/24-08-2024/8.jpg"
            alt="Meeting Image 8"
            width={300}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Third Row of Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div>
          <Image
            src="/images/24-08-2024/9.jpg"
            alt="Meeting Image 9"
            width={300}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <Image
            src="/images/24-08-2024/10.jpg"
            alt="Meeting Image 10"
            width={300}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <Image
            src="/images/24-08-2024/11.jpg"
            alt="Meeting Image 11"
            width={300}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <Image
            src="/images/24-08-2024/12.jpg"
            alt="Meeting Image 12"
            width={300}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Section for July 20, 2024 Meeting */}
      <div className="text-center mb-12">
        <h2 className="text-2xl text-gray-500">Date of Meeting: July 20, 2024</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div>
          <Image
            src="/images/20-07-2024/1.jpg"
            alt="Meeting Image 1"
            width={300}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <Image
            src="/images/20-07-2024/2.jpg"
            alt="Meeting Image 2"
            width={300}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <Image
            src="/images/20-07-2024/3.jpg"
            alt="Meeting Image 3"
            width={300}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <Image
            src="/images/20-07-2024/4.jpg"
            alt="Meeting Image 4"
            width={300}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Section for May 25, 2024 Meeting */}
      <div className="text-center mb-12">
        <h2 className="text-2xl text-gray-500">Date of Meeting: May 25, 2024</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div>
          <Image
            src="/images/25-05-2024/1.jpg"
            alt="Meeting Image 1"
            width={300}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <Image
            src="/images/25-05-2024/2.jpg"
            alt="Meeting Image 2"
            width={300}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <Image
            src="/images/25-05-2024/3.jpg"
            alt="Meeting Image 3"
            width={300}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <Image
            src="/images/25-05-2024/4.jpg"
            alt="Meeting Image 4"
            width={300}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Section for April 20, 2024 Meeting */}
      <div className="text-center mb-12">
        <h2 className="text-2xl text-gray-500">Date of Meeting: April 20, 2024</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div>
          <Image
            src="/images/20-04-2024/1a.jpeg"
            alt="Meeting Image 1"
            width={300}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <Image
            src="/images/20-04-2024/1b.jpeg"
            alt="Meeting Image 2"
            width={300}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <Image
            src="/images/20-04-2024/1c.jpeg"
            alt="Meeting Image 3"
            width={300}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <Image
            src="/images/20-04-2024/1d.jpeg"
            alt="Meeting Image 4"
            width={300}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div>
          <Image
            src="/images/20-04-2024/1e.jpeg"
            alt="Meeting Image 5"
            width={300}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <Image
            src="/images/20-04-2024/1f.jpeg"
            alt="Meeting Image 6"
            width={300}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <Image
            src="/images/20-04-2024/1g.jpeg"
            alt="Meeting Image 7"
            width={300}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <Image
            src="/images/20-04-2024/1h.jpeg"
            alt="Meeting Image 8"
            width={300}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div>
          <Image
            src="/images/20-04-2024/1a.jpeg"
            alt="Meeting Image 9"
            width={300}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <Image
            src="/images/20-04-2024/1j.jpeg"
            alt="Meeting Image 10"
            width={300}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <Image
            src="/images/20-04-2024/1m.jpeg"
            alt="Meeting Image 11"
            width={300}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <Image
            src="/images/20-04-2024/1l.jpeg"
            alt="Meeting Image 12"
            width={300}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Album;
