import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';
import { 
  FaCode, 
  FaPalette, 
  FaRocket, 
  FaDownload, 
  FaGithub, 
  FaLinkedin,
  FaHeart,
  FaCoffee,
  FaLightbulb
} from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer } from 'react-icons/si';
import aboutImage from '../assets/tarun_port.png';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const mainControls = useAnimation();
  const textControls = useAnimation();
  const imageControls = useAnimation();
  const statsControls = useAnimation();
  const [hoveredSkill, setHoveredSkill] = React.useState(null);

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
      textControls.start('visible');
      imageControls.start('visible');
      statsControls.start('visible');
    }
  }, [isInView, mainControls, textControls, imageControls, statsControls]);

  // Container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren"
      }
    }
  };

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  };

  // Image animation variants
  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.85,
      rotateY: -15 
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.4
      }
    }
  };

  // Stats animation variants
  const statsVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 1 + (i * 0.2),
        ease: "backOut"
      }
    })
  };

  // Floating animation for image
  const floatAnimation = {
    y: [-12, 12, -12],
    rotateZ: [0, 1, -1, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const stats = [
    { number: "50+", label: "Projects Completed", icon: FaCode, color: "from-blue-500 to-cyan-500" },
    { number: "3+", label: "Years Experience", icon: FaRocket, color: "from-purple-500 to-pink-500" },
    { number: "99%", label: "Client Satisfaction", icon: FaHeart, color: "from-red-500 to-orange-500" },
    { number: "100+", label: "Cups of Coffee", icon: FaCoffee, color: "from-amber-500 to-yellow-500" }
  ];

  const skills = [
    { name: "React", icon: SiReact, level: 95, color: "text-cyan-400" },
    { name: "JavaScript", icon: SiJavascript, level: 90, color: "text-yellow-400" },
    { name: "TypeScript", icon: SiTypescript, level: 85, color: "text-blue-400" },
    { name: "Next.js", icon: SiNextdotjs, level: 88, color: "text-white" },
    { name: "Tailwind CSS", icon: SiTailwindcss, level: 92, color: "text-teal-400" },
    { name: "Framer Motion", icon: SiFramer, level: 87, color: "text-pink-400" }
  ];

  const passions = [
    { icon: FaCode, text: "Clean Code Architecture" },
    { icon: FaPalette, text: "Pixel Perfect Design" },
    { icon: FaRocket, text: "Performance Optimization" },
    { icon: FaLightbulb, text: "Innovative Solutions" }
  ];

  return (
    <motion.section
      id="about"
      ref={ref}
      className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900/80 to-purple-900/80 text-white overflow-hidden"
      initial="hidden"
      animate={mainControls}
      variants={containerVariants}
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-teal-400/20 to-cyan-400/20"
            style={{
              width: Math.random() * 60 + 20,
              height: Math.random() * 60 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 -left-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          
          {/* Image Section - Enhanced */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-start relative"
            initial="hidden"
            animate={imageControls}
            variants={imageVariants}
          >
            <div className="relative">
              {/* Main Image with Enhanced Container */}
              <motion.div
                className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-[2.5rem] bg-gradient-to-br from-teal-400/30 via-cyan-400/20 to-blue-400/30 p-6 backdrop-blur-lg shadow-2xl"
                animate={floatAnimation}
                style={{
                  background: 'linear-gradient(145deg, rgba(20, 184, 166, 0.2), rgba(6, 182, 212, 0.15), rgba(59, 130, 246, 0.25))'
                }}
              >
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 opacity-70">
                  <div className="absolute inset-[3px] rounded-[2.2rem] bg-gray-900"></div>
                </div>
                
                <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-teal-400/30">
                  <img
                    src={aboutImage}
                    alt="Tanveer Tarun"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  {/* Enhanced Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-gray-900/20" />
                </div>
              </motion.div>

              {/* Enhanced Floating Tech Badges */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-5 py-3 rounded-2xl shadow-2xl backdrop-blur-sm border border-cyan-400/30"
                animate={{
                  y: [-15, 15, -15],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <div className="flex items-center gap-2">
                  <SiReact className="text-xl" />
                  <span className="text-sm font-bold">React Expert</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-3 rounded-2xl shadow-2xl backdrop-blur-sm border border-purple-400/30"
                animate={{
                  y: [15, -15, 15],
                  rotate: [0, -8, 8, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                whileHover={{ scale: 1.1, rotate: -10 }}
              >
                <div className="flex items-center gap-2">
                  <FaPalette className="text-lg" />
                  <span className="text-sm font-bold">UI/UX Design</span>
                </div>
              </motion.div>

              {/* Skill Orb */}
              <motion.div
                className="absolute top-8 -left-6 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-2 rounded-full shadow-lg"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <span className="text-xs font-bold">Animation</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content - Enhanced */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial="hidden"
            animate={textControls}
          >
            <motion.div
              className="inline-flex items-center gap-3 px-5 py-2.5 bg-teal-500/15 rounded-2xl border border-teal-500/30 mb-8 backdrop-blur-sm"
              variants={textVariants}
              custom={0}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(20, 184, 166, 0.2)" }}
            >
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
              <span className="text-teal-400 text-sm font-semibold tracking-wide">ABOUT ME</span>
            </motion.div>

            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight"
              variants={textVariants}
              custom={1}
            >
              Crafting{" "}
              <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Digital
              </span>{" "}
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Excellence
              </span>
            </motion.h2>

            <motion.p
              className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl font-light"
              variants={textVariants}
              custom={2}
            >
              I'm a passionate <span className="text-teal-400 font-semibold">Frontend Architect</span> with over 3 years of experience crafting immersive digital experiences. I specialize in transforming complex challenges into elegant, user-centric solutions that drive engagement and deliver results.
            </motion.p>

            <motion.p
              className="text-lg text-gray-300 mb-10 leading-relaxed max-w-2xl font-light"
              variants={textVariants}
              custom={3}
            >
              My philosophy is simple: create interfaces that don't just function flawlessly, but evoke emotion and create memorable experiences through thoughtful design, smooth interactions, and cutting-edge technology.
            </motion.p>

            {/* Passions Grid */}
            <motion.div
              className="grid grid-cols-2 gap-4 mb-10 max-w-md mx-auto lg:mx-0"
              variants={textVariants}
              custom={4}
            >
              {passions.map((passion, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-gray-800/40 rounded-xl border border-gray-700/50 backdrop-blur-sm"
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "rgba(45, 212, 191, 0.1)",
                    borderColor: "rgba(45, 212, 191, 0.3)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <passion.icon className="text-teal-400 text-lg" />
                  <span className="text-sm text-gray-300 font-medium">{passion.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Skills with Progress Bars */}
            <motion.div
              className="mb-10 max-w-2xl"
              variants={textVariants}
              custom={5}
            >
              <h3 className="text-xl font-semibold text-white mb-6 text-center lg:text-left">Technical Expertise</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center gap-4 group"
                    onHoverStart={() => setHoveredSkill(skill.name)}
                    onHoverEnd={() => setHoveredSkill(null)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + (index * 0.1) }}
                  >
                    <motion.div
                      className={`text-2xl ${skill.color} transition-all duration-300`}
                      animate={hoveredSkill === skill.name ? { scale: 1.3, rotate: 360 } : { scale: 1, rotate: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <skill.icon />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-teal-400 font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2.5">
                        <motion.div
                          className="h-2.5 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: 1.5 + (index * 0.1) }}
                          whileHover={{ scaleY: 1.5 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10 max-w-2xl mx-auto lg:mx-0"
              initial="hidden"
              animate={statsControls}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center lg:text-left p-4 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50"
                  variants={statsVariants}
                  custom={index}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(30, 41, 59, 0.5)",
                    borderColor: "rgba(45, 212, 191, 0.3)"
                  }}
                >
                  <div className={`inline-flex items-center justify-center lg:justify-start gap-2 mb-2 p-2 rounded-xl bg-gradient-to-r ${stat.color} bg-opacity-10`}>
                    <stat.icon className="text-xl" />
                    <div className="text-2xl font-bold text-white">{stat.number}</div>
                  </div>
                  <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              variants={textVariants}
              custom={6}
            >
              <motion.a
                href="#projects"
                className="group relative bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-10 py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">Explore My Work</span>
                <FaCode className="relative z-10 group-hover:animate-bounce" />
              </motion.a>

              <motion.a
                href="#"
                className="group border-2 border-teal-500 text-teal-400 px-10 py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 hover:bg-teal-500 hover:text-white transition-all duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload className="group-hover:animate-bounce" />
                <span>Download CV</span>
              </motion.a>
            </motion.div>

            {/* Enhanced Social Links */}
            <motion.div
              className="flex justify-center lg:justify-start gap-6"
              variants={textVariants}
              custom={7}
            >
              <motion.a
                href="https://github.com"
                className="text-2xl text-gray-400 hover:text-white transition-colors duration-300 p-3 bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-gray-700/50"
                whileHover={{ scale: 1.2, y: -2, backgroundColor: "rgba(30, 41, 59, 0.8)" }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/md-tanveer-hossain-tarun-671597367"
                className="text-2xl text-gray-400 hover:text-blue-400 transition-colors duration-300 p-3 bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-gray-700/50"
                whileHover={{ scale: 1.2, y: -2, backgroundColor: "rgba(30, 41, 59, 0.8)" }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;