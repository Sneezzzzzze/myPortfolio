import { useState, useEffect } from "react";
import { Link } from "@remix-run/react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cream/80 backdrop-blur-sm text-gray-800"
          : "bg-cream text-gray-800"
      }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <Link to="/" className="text-4xl font-extrabold text-gradient hover:text-primary">
              Laughing_egg
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#about" className="hover:text-primary rounded-md transition-colors font-bold">About</a>
            <a href="#projects" className="hover:text-primary transition-colors font-bold">Projects</a>
            <a href="#skills" className="hover:text-primary transition-colors font-bold">Skills</a>
            <a href="#contact" className="hover:text-primary transition-colors font-bold">Contact</a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-gray-200 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden pb-4">
          <div className="flex flex-col space-y-2 px-2 pt-2 pb-3 sm:px-3">
            <a href="#about" className="block px-3 py-2 hover:text-primary transition-colors">About</a>
            <a href="#projects" className="block px-3 py-2 hover:text-primary transition-colors">Projects</a>
            <a href="#skills" className="block px-3 py-2 hover:text-primary transition-colors">Skills</a>
            <a href="#contact" className="block px-3 py-2 hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}
