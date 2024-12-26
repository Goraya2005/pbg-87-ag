import Navbar from '@/components/navbar/Navbar'; 
import Events from '@/components/events/Events'; 
import Copyright from '@/components/copyright/Copyright';  

export default function Event() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Add spacing for better readability on smaller screens */}
          <div className="py-8 sm:py-12">
            <Events />
          </div>
        </section>
      </main>

      <footer>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4">
            <Copyright />
          </div>
        </div>
      </footer>
    </div>
  );
}
