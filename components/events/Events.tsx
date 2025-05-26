import Days from '@/components/days/ComingDays';
import PastEvent from '@/components/days/PastEvent';

export default function Events() {
  return (
    <div className="min-h-screen">
      {/* UPCOMING EVENTS SECTION */}
      <section className="bg-blue-800 text-white">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12 md:py-20 border-t border-gray-800">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="text-4xl font-bold mb-4">UPCOMING EVENTS</h2>
              <p className="text-xl text-gray-400 mb-4">
                We are planning to organize a get-together.
              </p>
              <p className="text-lg">
                Students of 87-ag-Agri with a Major in Plant Breeding and Genetics and residents of Faisalabad are
                required to arrive on time. The time and venue details have been shared in the WhatsApp group
                &quot;87-ag-PBG-Fsd&quot;.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Days />

      {/* PREVIOUS EVENTS SECTION */}
      <section className="bg-blue-800 text-white">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12 md:py-20 border-t border-gray-800">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="text-4xl font-bold mb-4">PREVIOUS EVENTS</h2>
              <p className="text-xl text-gray-400 mb-4">
                We have successfully organized a get-together.
              </p>
              <p className="text-lg">
                Students of 87-ag-Agri with a Major in Plant Breeding and Genetics and residents of Faisalabad attended
                the meeting. The complete album has been shared in the WhatsApp group &quot;87-ag-PBG-Fsd&quot;.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 my-8">
        <PastEvent />
      </div>
    </div>
  );
}
