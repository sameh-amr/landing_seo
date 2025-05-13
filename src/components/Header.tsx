import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <span className={`ml-2 font-display font-bold text-xl ${isScrolled ? 'text-primary-600' : 'text-white'}`}>
              StackVibes
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#services" 
              className={`font-medium transition-colors hover:text-primary-500 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              Services
            </a>
            <a 
              href="#demos" 
              className={`font-medium transition-colors hover:text-primary-500 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              Demos
            </a>
            <a 
              href="#mobile" 
              className={`font-medium transition-colors hover:text-primary-500 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              Mobile Apps
            </a>
            <a 
              href="#contact" 
              className="px-4 py-2 bg-primary-500 text-white rounded-md font-medium hover:bg-primary-600 transition-colors"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className={isScrolled ? 'text-gray-800' : 'text-white'} size={24} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-800' : 'text-white'} size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <a 
              href="#services" 
              className="block font-medium text-gray-800 hover:text-primary-500"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a 
              href="#demos" 
              className="block font-medium text-gray-800 hover:text-primary-500"
              onClick={() => setIsOpen(false)}
            >
              Demos
            </a>
            <a 
              href="#mobile" 
              className="block font-medium text-gray-800 hover:text-primary-500"
              onClick={() => setIsOpen(false)}
            >
              Mobile Apps
            </a>
            <a 
              href="#contact" 
              className="block px-4 py-2 bg-primary-500 text-white rounded-md font-medium hover:bg-primary-600 transition-colors w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;