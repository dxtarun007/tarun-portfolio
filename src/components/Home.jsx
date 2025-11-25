import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import homeImage from '../assets/tarun_port.png'; // Ensure the correct path to your image

const Home = () => {
  const controls = useAnimation();
  const [ref, setRef] = useState(null);
  const [inView, setInView] = useState(false);

  // Variants for different elements
  const containerVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { duration: 2, delay: 0.1 } }
  };

  const itemLeftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 2, delay: 0.1 } }
  };

  const itemRightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 2, delay: 0.1 } }
  };

  const imgVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 2, delay: 0.1 } }
  };

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          controls.start('visible');
        } else {
          setInView(false);
          controls.start('hidden');
        }
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [ref, controls]);

  return (
    <motion.section
      id="home"
      ref={setRef}
      className="min-h-screen max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center bg-gray-900 text-white py-16 px-4"
    >
      <motion.div
        className="home-content md:w-[55%] flex-1 flex flex-col items-center md:items-start text-center md:text-left"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.h3 className="heading text-2xl md:text-3xl mb-2" variants={containerVariants}>
          Hello, It's Me
        </motion.h3>
        <motion.h1 className="text-5xl md:text-7xl font-bold mb-4" variants={itemLeftVariants}>
          Md. Tanveer Hossian Tarun
        </motion.h1>
        <motion.h3 className="text-2xl md:text-3xl mb-4" variants={containerVariants}>
          And I'm a <span className="text-teal-500">Frontend Developer</span>
        </motion.h3>
        <motion.p className="text-base mb-6" variants={itemRightVariants}>
Frontend development is my passion. I craft clean, efficient, and interactive websites that users love to explore.        </motion.p>
        <motion.div className="flex space-x-4 mb-6" variants={itemLeftVariants}>
          <motion.a href="#" className="text-teal-500 text-2xl"><FaFacebook /></motion.a>
          <motion.a href="#" className="text-teal-500 text-2xl"><FaTwitter /></motion.a>
          <motion.a href="#" className="text-teal-500 text-2xl"><FaInstagram /></motion.a>
          <motion.a href="#" className="text-teal-500 text-2xl"><FaLinkedin /></motion.a>
        </motion.div>
        <motion.a
          href="#"
          className="bg-teal-500 text-gray-900 py-2 px-6 rounded-full font-semibold shadow-md"
          variants={containerVariants}
        >
          Download CV
        </motion.a>
      </motion.div>
      <motion.div
        className="home-img md:w-[45%] flex-1 flex justify-center md:justify-end mt-8 md:mt-0"
        initial="hidden"
        animate={controls}
        variants={imgVariants}
      >
        <motion.img src={homeImage} alt="Home" className="w-full max-w-xs md:max-w-md animate-float" />
      </motion.div>
    </motion.section>
  );
};

export default Home;
