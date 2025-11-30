import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaSearch, FaTimes, FaCode, FaPalette, FaMobile } from 'react-icons/fa';
import image1 from '../assets/portfolio/portfolio1.jpg';
import image2 from '../assets/portfolio/portfolio2.jpg';
import image3 from '../assets/portfolio/portfolio3.jpg';
import image4 from '../assets/portfolio/portfolio4.jpg';
import image5 from '../assets/portfolio/portfolio5.jpg';
import image6 from '../assets/portfolio/portfolio6.jpg';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', name: 'All Projects', icon: FaCode },
    { id: 'web', name: 'Web Development', icon: FaCode },
    { id: 'design', name: 'UI/UX Design', icon: FaPalette },
    { id: 'mobile', name: 'Mobile', icon: FaMobile }
  ];

  const portfolioItems = [
    {
      image: image1,
      title: 'E-commerce Website',
      category: 'web',
      description: 'A fully responsive e-commerce website built with React and Tailwind CSS. Features shopping cart, product filtering, and smooth animations.',
      technologies: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
      liveLink: '#',
      githubLink: '#',
      featured: true
    },
    {
      image: image2,
      title: 'Portfolio Website',
      category: 'design',
      description: 'A personal portfolio website designed to showcase projects and skills with interactive UI elements and modern layouts.',
      technologies: ['Framer Motion', 'CSS3', 'JavaScript'],
      liveLink: '#',
      githubLink: '#',
      featured: false
    },
    {
      image: image3,
      title: 'Startup Landing Page',
      category: 'web',
      description: 'A landing page for a startup company. Designed with user experience in mind and optimized for conversions.',
      technologies: ['React', 'GSAP', 'SASS'],
      liveLink: '#',
      githubLink: '#',
      featured: true
    },
    {
      image: image4,
      title: 'Blog Platform',
      category: 'web',
      description: 'A blogging platform built with React and Markdown support. Features responsive design, dark mode, and comment section.',
      technologies: ['Next.js', 'Markdown', 'Firebase'],
      liveLink: '#',
      githubLink: '#',
      featured: false
    },
    {
      image: image5,
      title: 'Dashboard UI',
      category: 'design',
      description: 'A clean and modern admin dashboard template. Includes charts, tables, and interactive components for data visualization.',
      technologies: ['React', 'Chart.js', 'Material-UI'],
      liveLink: '#',
      githubLink: '#',
      featured: false
    },
    {
      image: image6,
      title: 'Mobile App Landing',
      category: 'mobile',
      description: 'Landing page for a mobile app with animations, feature highlights, and call-to-action sections to increase user engagement.',
      technologies: ['React Native', 'Expo', 'TypeScript'],
      liveLink: '#',
      githubLink: '#',
      featured: true
    },
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -50,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="projects" className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, threshold: 0.1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/20 rounded-full border border-teal-500/30 mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <FaCode className="text-teal-400 text-sm" />
            <span className="text-teal-400 text-sm font-medium">My Work</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Featured <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Here are some of my recent projects that showcase my skills in frontend development, 
            UI/UX design, and creating amazing user experiences.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className="text-sm" />
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.1 }}
        >
          <AnimatePresence>
            {filteredItems.map((project, index) => (
              <motion.div
                key={`${project.title}-${index}`}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-teal-400/50 transition-all duration-500"
                variants={itemVariants}
                layout
                whileHover={{ y: -10 }}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                      Featured
                    </span>
                  </div>
                )}

                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-xs font-medium border border-teal-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <motion.button
                      onClick={() => setSelectedProject(project)}
                      className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaSearch className="text-sm" />
                    </motion.button>
                    <motion.a
                      href={project.liveLink}
                      className="bg-teal-500 text-white p-2 rounded-full hover:bg-teal-600 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaExternalLinkAlt className="text-sm" />
                    </motion.a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-teal-400 text-sm font-medium uppercase tracking-wider">
                    {project.category === 'web' ? 'Web Development' : 
                     project.category === 'design' ? 'UI/UX Design' : 'Mobile Development'}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2 mb-3 group-hover:text-teal-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Project Links */}
                  <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-700">
                    <motion.a
                      href={project.liveLink}
                      className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors duration-300 text-sm font-medium"
                      whileHover={{ x: 5 }}
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubLink}
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium"
                      whileHover={{ x: 5 }}
                    >
                      <FaGithub className="text-xs" />
                      Source Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-4 px-8 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View All Projects</span>
            <FaExternalLinkAlt className="text-sm" />
          </motion.a>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-300 z-10"
                >
                  <FaTimes />
                </button>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-4 mb-4">
                  <span className="bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-sm font-medium border border-teal-500/30">
                    {selectedProject.category === 'web' ? 'Web Development' : 
                     selectedProject.category === 'design' ? 'UI/UX Design' : 'Mobile Development'}
                  </span>
                  {selectedProject.featured && (
                    <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm font-medium border border-orange-500/30">
                      Featured
                    </span>
                  )}
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">{selectedProject.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <motion.a
                    href={selectedProject.liveLink}
                    className="flex-1 bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-3 px-6 rounded-xl font-semibold text-center flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={selectedProject.githubLink}
                    className="flex-1 bg-gray-700 text-white py-3 px-6 rounded-xl font-semibold text-center flex items-center justify-center gap-2 border border-gray-600"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaGithub />
                    Source Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;