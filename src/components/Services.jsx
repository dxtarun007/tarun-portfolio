import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      icon: 'bx bx-code-alt',
      description:
        'Building responsive and interactive websites using HTML, CSS, JavaScript, and modern frameworks like React and Next.js.',
    },
    {
      title: 'UI/UX Design',
      icon: 'bx bx-brush',
      description:
        'Designing user-friendly interfaces and engaging experiences that make websites visually appealing and easy to navigate.',
    },
    {
      title: 'SEO & Performance',
      icon: 'bx bx-line-chart',
      description:
        'Optimizing websites for faster load times and better search engine rankings to help businesses reach more users online.',
    },
  ];

  return (
    <section id="services" className="bg-gray-900 text-white py-16 px-4 overflow-x-hidden">
      <h2 className="text-4xl font-bold text-center mb-12 headings">
        Our <span className="text-teal-500">Services</span>
      </h2>
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 services-container">
        {services.map((service, index) => (
          <div
            key={index}
            className="services-box flex-1 max-w-sm rounded-xl bg-gray-800 p-6 text-center border-2 border-gray-700 transition-all duration-300 ease-in-out hover:border-teal-400 hover:scale-110"
          >
            <i className={`${service.icon} text-6xl text-teal-500 mb-4`}></i>
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-lg mb-6">{service.description}</p>
            <a
              href="#"
              className="bg-teal-500 text-gray-900 py-2 px-6 rounded-full font-semibold shadow-md hover:bg-teal-600 transition-all duration-300"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
