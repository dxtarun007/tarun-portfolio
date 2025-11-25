import React from 'react';
import image1 from '../assets/portfolio/portfolio1.jpg';
import image2 from '../assets/portfolio/portfolio2.jpg';
import image3 from '../assets/portfolio/portfolio3.jpg';
import image4 from '../assets/portfolio/portfolio4.jpg';
import image5 from '../assets/portfolio/portfolio5.jpg';
import image6 from '../assets/portfolio/portfolio6.jpg';

const Portfolio = () => {
  // Array of portfolio items
  const portfolioItems = [
    {
      image: image1,
      title: 'E-commerce Website',
      category: 'Web Development',
      description:
        'A fully responsive e-commerce website built with React and Tailwind CSS. Features shopping cart, product filtering, and smooth animations.',
    },
    {
      image: image2,
      title: 'Portfolio Website',
      category: 'UI/UX Design',
      description:
        'A personal portfolio website designed to showcase projects and skills with interactive UI elements and modern layouts.',
    },
    {
      image: image3,
      title: 'Landing Page',
      category: 'Web Design',
      description:
        'A landing page for a startup company. Designed with user experience in mind and optimized for conversions.',
    },
    {
      image: image4,
      title: 'Blog Platform',
      category: 'Frontend Development',
      description:
        'A blogging platform built with React and Markdown support. Features responsive design, dark mode, and comment section.',
    },
    {
      image: image5,
      title: 'Dashboard UI',
      category: 'UI/UX Design',
      description:
        'A clean and modern admin dashboard template. Includes charts, tables, and interactive components for data visualization.',
    },
    {
      image: image6,
      title: 'Mobile App Landing',
      category: 'Web Design',
      description:
        'Landing page for a mobile app with animations, feature highlights, and call-to-action sections to increase user engagement.',
    },
  ];

  return (
    <section id="projects" className="portfolio max-w-7xl mx-auto bg-gray-800 py-16 overflow-x-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16 headings">
          Latest <span className="text-teal-500">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Map over portfolioItems array */}
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="portfolio-box relative overflow-hidden rounded-xl shadow-lg bg-gray-800"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto transition-transform duration-500 transform hover:scale-110"
              />
              <div className="portfolio-layer absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-t from-gray-900 to-teal-500 text-center p-8 opacity-0 hover:opacity-100 transition-all duration-500 transform translate-y-full hover:translate-y-0">
                <h4 className="text-3xl font-bold text-white mb-4">{item.title}</h4>
                <p className="text-lg text-gray-300 mb-4">{item.description}</p>
                <a
                  href="#"
                  className="bg-teal-500 text-gray-900 py-2 px-4 rounded-full inline-block hover:bg-teal-600 transition-colors duration-300"
                >
                  <i className="bx bx-link-external text-2xl"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
