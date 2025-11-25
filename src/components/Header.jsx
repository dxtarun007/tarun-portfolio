import React, { useState, useEffect } from 'react';

const Header = () => {
  const [activeLink, setActiveLink] = useState('#home');
  const [sticky, setSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollY = window.scrollY;

    sections.forEach((sec) => {
      const offset = sec.offsetTop - 150;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      console.log(id)

      if (scrollY >= offset && scrollY < offset + height) {
        setActiveLink(`#${id}`);
      }
    });

    setSticky(window.scrollY > 100);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 h-16 bg-gray-900 overflow-x-hidden ${sticky ? 'border-b border-gray-700' : ''}`}>
        <div className="max-w-7xl mx-auto h-16 p-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-white">Portfolio</a>

          {/* Responsive menu button */}
          <button className="text-white z-50 md:hidden" onClick={toggleMenu}>
            <div className="relative w-6 h-6 flex flex-col justify-between items-center">
              <div
                className={`absolute w-full h-0.5 bg-white transition-transform duration-300 ${
                  isMenuOpen ? "transform rotate-45 top-1/2 left-0" : "top-0"
                }`}
              />
              <div
                className={`absolute w-full h-0.5 bg-white transition-opacity duration-300 ${
                  isMenuOpen ? "opacity-0 top-1/2" : "opacity-100 top-1/2"
                }`}
              />
              <div
                className={`absolute w-full h-0.5 bg-white transition-transform duration-300 ${
                  isMenuOpen ? "transform -rotate-45 top-1/2 left-0" : "top-full"
                }`}
              />
            </div>
          </button>

          {/* Navigation links */}
          <nav className={`md:flex md:flex-row md:items-center md:space-x-4 md:ml-auto ${isMenuOpen ? 'flex flex-col justify-center items-center space-y-6 fixed inset-0 bg-gray-900 bg-opacity-90 z-40' : 'hidden md:flex'}`}>
            <a href="#home" className={`m-4 text-xl ${activeLink === '#home' ? 'text-teal-500' : 'text-white'}`} onClick={() => isMenuOpen && toggleMenu()}>Home</a>
            <a href="#about" className={`m-4 text-xl ${activeLink === '#about' ? 'text-teal-500' : 'text-white'}`} onClick={() => isMenuOpen && toggleMenu()}>About</a>
            <a href="#services" className={`m-4 text-xl ${activeLink === '#services' ? 'text-teal-500' : 'text-white'}`} onClick={() => isMenuOpen && toggleMenu()}>Services</a>
            <a href="#projects" className={`m-4 text-xl ${activeLink === '#projects' ? 'text-teal-500' : 'text-white'}`} onClick={() => isMenuOpen && toggleMenu()}>Portfolio</a>
            <a href="#contact" className={`m-4 text-xl ${activeLink === '#contact' ? 'text-teal-500' : 'text-white'}`} onClick={() => isMenuOpen && toggleMenu()}>Contact</a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
