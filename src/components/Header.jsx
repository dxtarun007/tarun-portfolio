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

      if (scrollY >= offset && scrollY < offset + height) {
        setActiveLink(`#${id}`);
      }
    });

    setSticky(scrollY > 100);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 bg-gray-900 transition-all ${
        sticky ? 'border-b border-gray-700' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto h-16 px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white">
          Portfolio
        </a>

        {/* Mobile menu button */}
        <button
          className="text-white z-50 md:hidden"
          onClick={toggleMenu}
        >
          <div className="relative w-7 h-6 flex flex-col justify-center">
            {/* Top line */}
            <span
              className={`absolute h-0.5 w-full bg-white transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 top-1/2' : 'top-0'
              }`}
            />

            {/* Middle line */}
            <span
              className={`absolute h-0.5 w-full bg-white transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'top-1/2'
              }`}
            />

            {/* Bottom line */}
            <span
              className={`absolute h-0.5 w-full bg-white transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 top-1/2' : 'top-full'
              }`}
            />
          </div>
        </button>

        {/* Navigation menu */}
        <nav
          className={`${
            isMenuOpen
              ? 'flex flex-col justify-center items-center space-y-8 fixed inset-0 bg-gray-900 bg-opacity-95 z-40'
              : 'hidden md:flex md:flex-row md:items-center md:space-x-6'
          }`}
        >
          {['home', 'about', 'services', 'projects', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`text-xl ${
                activeLink === `#${item}` ? 'text-teal-500' : 'text-white'
              }`}
              onClick={() => isMenuOpen && toggleMenu()}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
