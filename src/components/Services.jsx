import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaPalette, 
  FaRocket, 
  FaMobile, 
  FaSearch, 
  FaCloud,
  FaArrowRight,
  FaStar
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      icon: FaCode,
      description: 'Building responsive and interactive websites using HTML, CSS, JavaScript, and modern frameworks like React and Next.js.',
      features: ['React & Next.js', 'Responsive Design', 'Clean Code', 'API Integration'],
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      title: 'UI/UX Design',
      icon: FaPalette,
      description: 'Designing user-friendly interfaces and engaging experiences that make websites visually appealing and easy to navigate.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design'],
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/10 to-pink-500/10'
    },
    {
      title: 'SEO & Performance',
      icon: FaRocket,
      description: 'Optimizing websites for faster load times and better search engine rankings to help businesses reach more users online.',
      features: ['Speed Optimization', 'SEO Strategy', 'Analytics', 'Core Web Vitals'],
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-500/10 to-red-500/10'
    },
    {
      title: 'Mobile Development',
      icon: FaMobile,
      description: 'Creating cross-platform mobile applications that provide seamless experiences across all devices and screen sizes.',
      features: ['React Native', 'PWA', 'Mobile First', 'App Store Deployment'],
      gradient: 'from-green-500 to-teal-500',
      bgGradient: 'from-green-500/10 to-teal-500/10'
    },
    {
      title: 'Digital Marketing',
      icon: FaSearch,
      description: 'Strategic digital marketing solutions to increase online visibility and drive targeted traffic to your business.',
      features: ['Content Strategy', 'Social Media', 'PPC Campaigns', 'Conversion Optimization'],
      gradient: 'from-yellow-500 to-amber-500',
      bgGradient: 'from-yellow-500/10 to-amber-500/10'
    },
    {
      title: 'Cloud Solutions',
      icon: FaCloud,
      description: 'Deploying and managing cloud-based solutions for scalability, reliability, and optimal performance.',
      features: ['AWS & Azure', 'DevOps', 'Serverless', 'Database Management'],
      gradient: 'from-indigo-500 to-blue-500',
      bgGradient: 'from-indigo-500/10 to-blue-500/10'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        delay: 0.2
      }
    },
    hover: {
      scale: 1.1,
      rotate: 360,
      transition: {
        duration: 0.5
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      x: 10,
      transition: {
        duration: 0.3,
        yoyo: Infinity
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <section id="services" className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10"></div>
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
            <FaStar className="text-teal-400 text-sm" />
            <span className="text-teal-400 text-sm font-medium">What I Offer</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            My <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
          </h2>
          
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Comprehensive digital solutions to bring your ideas to life. From concept to deployment, 
            I deliver high-quality services that drive results.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-transparent transition-all duration-500 overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Animated Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                <div className="absolute inset-[2px] rounded-2xl bg-gray-800/95 backdrop-blur-sm"></div>
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 mx-auto group-hover:shadow-2xl group-hover:shadow-current/30 transition-all duration-500`}
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <service.icon className="text-3xl text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-center mb-4 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 text-center mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * featureIndex }}
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.a
                  href="#"
                  className={`group/btn w-full bg-gradient-to-r ${service.gradient} text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden`}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <span>Learn More</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FaArrowRight />
                  </motion.span>
                </motion.a>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-gray-300 text-lg mb-6">
            Interested in working together?
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-4 px-8 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Start a Project</span>
            <FaRocket className="text-sm" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;