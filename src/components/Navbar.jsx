export const Navbar = ({ menuOpen, setMenuOpen }) => {

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4 relative">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            Portofolio <span className="text-blue-500">Rifki</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-blue-500 hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Project</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>
        </div>

        <div
          className={`md:hidden absolute top-0 right-4 h-16 flex items-center transition-opacity ${
            menuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <div className="w-7 h-5 relative cursor-pointer">
            &#9776;
          </div>
        </div>
        
      </div>
    </nav>
  );
};