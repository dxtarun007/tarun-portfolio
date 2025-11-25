import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white py-16 px-4 overflow-x-hidden">
      <h2 className="text-4xl font-bold mb-16 headings">Contact <span className="text-teal-500">Me!</span></h2>
      <div className="w-full max-w-2xl contact">
        <form action="#">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <input type="text" placeholder="Your Name" className="bg-gray-800 p-4 rounded-md outline-none" />
            <input type="email" placeholder="Your Email" className="bg-gray-800 p-4 rounded-md outline-none" />
          </div>
          <input type="text" placeholder="Your Subject" className="bg-gray-800 p-4 w-full rounded-md outline-none mb-6" />
          <textarea placeholder="Your Message" className="bg-gray-800 p-4 w-full rounded-md outline-none mb-6 h-40"></textarea>
          <button type="submit" className="bg-teal-500 text-gray-900 py-2 px-6 rounded-full font-semibold shadow-md">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
