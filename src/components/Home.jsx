import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaDownload } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import homeImage from '../assets/tarun_port.png';

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const mainControls = useAnimation();
  const textControls = useAnimation();
  const imageControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
      textControls.start('visible');
      imageControls.start('visible');
    }
  }, [isInView, mainControls, textControls, imageControls]);

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.1,
        ease: "easeOut"
      }
    })
  };

  // Image animation variants
  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotate: -5 
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  // Background shapes animation
  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5
      }
    }
  };

  const shapeVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  // Floating animation for image
  const floatAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <motion.section
      id="home"
      ref={ref}
      className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden"
      initial="hidden"
      animate={mainControls}
      variants={backgroundVariants}
    >
      {/* Animated Background Shapes */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        variants={backgroundVariants}
      >
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          variants={shapeVariants}
        />
        <motion.div
          className="absolute top-40 right-20 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          variants={shapeVariants}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          variants={shapeVariants}
        />
        <motion.div
          className="absolute bottom-40 right-1/4 w-16 h-16 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          variants={shapeVariants}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left z-10"
            initial="hidden"
            animate={textControls}
          >
            <motion.div
              className="inline-block mb-4 px-4 py-2 bg-teal-500/20 rounded-full border border-teal-500/30"
              variants={textVariants}
              custom={0}
            >
              <span className="text-teal-400 text-sm font-medium">Welcome to my portfolio</span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
              variants={textVariants}
              custom={1}
            >
              <span className="block">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Tanveer Tarun
              </span>
            </motion.h1>

            <motion.div
              className="text-xl sm:text-2xl lg:text-3xl mb-6 font-light"
              variants={textVariants}
              custom={2}
            >
              <span className="text-gray-300">I'm a </span>
              <span className="text-teal-400 font-semibold">Frontend Developer</span>
            </motion.div>

            <motion.p
              className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed"
              variants={textVariants}
              custom={3}
            >
              I create stunning, responsive web experiences with modern technologies. 
              Passionate about clean code, intuitive design, and bringing ideas to life 
              through interactive user interfaces.
            </motion.p>

            {/* Social Links */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-4 mb-8"
              variants={textVariants}
              custom={4}
            >
              {[
                { icon: FaGithub, href: "#", color: "hover:text-gray-400" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/md-tanveer-hossain-tarun-671597367", color: "hover:text-blue-400" },
                { icon: FaTwitter, href: "#", color: "hover:text-sky-400" },
                { icon: SiLeetcode, href: "#", color: "hover:text-orange-400" },
                { icon: FaEnvelope, href: "#", color: "hover:text-red-400" }
              ].map((SocialIcon, index) => (
                <motion.a
                  key={index}
                  href={SocialIcon.href}
                  className={`text-2xl text-gray-400 ${SocialIcon.color} transition-colors duration-300`}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <SocialIcon.icon />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={textVariants}
              custom={5}
            >
              <motion.a
                href="#contact"
                className="group relative bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>

              <motion.a
                href="#"
                className="group border-2 border-teal-500 text-teal-400 px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-teal-500 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload className="group-hover:animate-bounce" />
                <span>Download CV</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end relative z-10"
            initial="hidden"
            animate={imageControls}
            variants={imageVariants}
          >
            <div className="relative">
              {/* Main Image Container */}
              <motion.div
                className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br from-teal-400/20 to-cyan-400/20 p-2"
                animate={floatAnimation}
              >
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-teal-500/30 relative">
                  <img
                    src={homeImage}
                    alt="Tanveer Tarun"
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-teal-500/20 rounded-full border border-teal-500/30 flex items-center justify-center"
                animate={{
                  y: [-15, 15, -15],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="text-teal-400 text-sm font-bold">React</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-cyan-500/20 rounded-full border border-cyan-500/30 flex items-center justify-center"
                animate={{
                  y: [15, -15, 15],
                  rotate: [0, -15, 15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <span className="text-cyan-400 text-xs font-bold">JS</span>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -left-8 w-12 h-12 bg-purple-500/20 rounded-full border border-purple-500/30 flex items-center justify-center"
                animate={{
                  x: [-10, 10, -10],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              >
                <span className="text-purple-400 text-xs font-bold">CSS</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-teal-400 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-teal-400 rounded-full mt-2"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Home;