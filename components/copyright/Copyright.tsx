export default function Copyright() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-4 text-white text-center">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
          <i className="fas fa-copyright"></i> Copyright &copy; {currentYear} Naeem Goraya
        </p>
      </div>
    </footer>
  );
}
