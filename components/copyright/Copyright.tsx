export default function Copyright() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-4 text-white text-center">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-base">
          &copy; {currentYear} Naeem Goraya | visit :{' '}
          <a 
            href="https://www.goraya.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200"
          >
            https://www.goraya.org/
          </a>{' '}
          | whatsApp : +92 322 5562336
        </p>
      </div>
    </footer>
  );
}