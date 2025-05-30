export default function Copyright() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-4 text-white text-center">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-lg sm:text-xl md:text-xl lg:text-xl leading-relaxed">
          &copy; {currentYear} Naeem Goraya | visit : https://www.goraya.org/ | whatsApp : +92 322 5562336
        </p>
      </div>
    </footer>
  );
}
