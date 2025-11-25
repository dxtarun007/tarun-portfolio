import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-4 text-center overflow-x-hidden">
      <p>&copy; {currentYear} by Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
