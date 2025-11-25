import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import aboutImage from '../assets/tarun_port.png'; // Add the correct path to your image

const About = () => {
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
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 2, delay: 0.1 } }
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
    <motion.section id="about" className="max-w-7xl min-h-96 mx-auto flex flex-col md:flex-row items-center justify-center overflow-x-hidden bg-gray-800 text-white py-16 px-4">
      <div className="flex-1 mb-8 md:mb-0 w-full md:w-[45%] max-w-md">
        <motion.img
          ref={(element) => setRef(element)}
          src={aboutImage}
          alt="About"
          className="w-full h-auto object-cover"
          initial="hidden"
          animate={controls}
          variants={imgVariants}
        />
      </div>
      <motion.div
        className="flex-1 md:w-[55%] flex flex-col items-center md:items-start text-center md:text-left px-4 md:px-0"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.h2 className="text-4xl font-bold mb-4" variants={itemLeftVariants}>
          About <span className="text-teal-500">Me</span>
        </motion.h2>
        <motion.h3 className="text-2xl mb-2" variants={itemRightVariants}>
          Frontend Developer
        </motion.h3>
        <motion.p className="text-base mb-6" variants={itemLeftVariants}>
        Coding clean, interactive, and responsive websites is my superpower. Let’s build something amazing.
        </motion.p>
        <motion.a
          href="#"
          className="bg-teal-500 text-gray-900 py-2 px-6 rounded-full font-semibold shadow-md"
          variants={itemRightVariants}
        >
          Read More
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default About;
