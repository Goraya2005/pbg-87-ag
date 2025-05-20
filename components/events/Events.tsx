import Days from '@/components/days/ComingDays';
import PastEventDays from '@/components/days/PastDays1';
import PastEventDays2 from '@/components/days/PastDays2';
import PastEventDays3 from '@/components/days/PastDays3';
import PastEventDays4 from '@/components/days/PastDays4';
import PastEventDays5 from '@/components/days/PastDays5';
import PastEventDays6 from '@/components/days/PastDays6';
import PastEventDays7 from '@/components/days/PastDays7';
import PastEventDays8 from '@/components/days/PastDays8';



export default function Events() {
  return (
    <div className="min-h-screen">
      <div>
        <section className="bg-blue-800 text-white">
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
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

        <div>
          <section className="bg-blue-800 text-white">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
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

          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <PastEventDays8 />
            <PastEventDays7 />
            <div className="my-8" />
            <PastEventDays6 />
            <div className="my-8" />
            <PastEventDays5 />
            <div className="my-8" />
            <PastEventDays4 />
            <div className="my-8" />
            <PastEventDays3 />

            <div className="flex flex-col items-center justify-center h-full p-6 bg-brown-800 rounded-lg shadow-md my-8" data-aos="fade-up">
              <div className="event-block text-center">
                <h2 className="text-4xl sm:text-3xl font-bold mb-4">June - 2024</h2>
                <p className="text-2xl sm:text-xl">Due to the absence of some members who went to perform Hajj, the meeting has been canceled.</p>
              </div>
            </div>

            <div className="my-8" />
            <PastEventDays2 />
            <div className="my-8" />
            <PastEventDays />
          </div>
        </div>
      </div>
    </div>
  );
}
