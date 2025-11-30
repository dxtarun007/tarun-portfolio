import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart, FaCode } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      href: "#",
      color: "hover:text-gray-400",
      name: "GitHub"
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/md-tanveer-hossain-tarun-671597367",
      color: "hover:text-blue-400",
      name: "LinkedIn"
    },
    {
      icon: FaTwitter,
      href: "#",
      color: "hover:text-sky-400",
      name: "Twitter"
    },
    {
      icon: SiLeetcode,
      href: "#",
      color: "hover:text-orange-400",
      name: "LeetCode"
    },
    {
      icon: FaEnvelope,
      href: "#",
      color: "hover:text-red-400",
      name: "Email"
    }
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        ease: "easeOut"
      }
    })
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.footer
      className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, threshold: 0.1 }}
      variants={footerVariants}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            className="text-center md:text-left"
            custom={0}
            variants={itemVariants}
          >
            <motion.h3 
              className="text-2xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Tanveer Tarun
            </motion.h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Frontend Developer passionate about creating beautiful, functional, 
              and user-friendly web experiences.
            </p>
            <motion.div
              className="flex items-center justify-center md:justify-start gap-2 text-teal-400"
              variants={pulseVariants}
              animate="pulse"
            >
              <FaCode className="text-sm" />
              <span className="text-sm font-medium">Coding with passion</span>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="text-center"
            custom={1}
            variants={itemVariants}
          >
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link, index) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-300 hover:text-teal-400 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                  custom={index}
                  variants={itemVariants}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            className="text-center md:text-right"
            custom={2}
            variants={itemVariants}
          >
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Let's Connect</h4>
            <p className="text-gray-300 mb-4">
              Ready to bring your ideas to life? Let's work together!
            </p>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className={`text-xl text-gray-400 ${social.color} transition-colors duration-300 relative group`}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  custom={index}
                  variants={itemVariants}
                >
                  <social.icon />
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {social.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="border-t border-gray-700 my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <motion.p
            className="text-gray-300 text-sm flex items-center gap-1"
            custom={3}
            variants={itemVariants}
          >
            © {currentYear} Made with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FaHeart className="text-red-500 mx-1" />
            </motion.span>
            by Tanveer Tarun
          </motion.p>

          <motion.div
            className="flex items-center space-x-6 text-sm text-gray-300"
            custom={4}
            variants={itemVariants}
          >
            <motion.a
              href="#privacy"
              className="hover:text-teal-400 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#terms"
              className="hover:text-teal-400 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Terms of Service
            </motion.a>
            <motion.span className="flex items-center gap-1">
              <FaCode className="text-teal-400" />
              <span>Built with React & Tailwind</span>
            </motion.span>
          </motion.div>
        </div>

        {/* Back to Top Button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-teal-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute bottom-4 left-10 w-3 h-3 bg-teal-400 rounded-full opacity-60"
        animate={{
          y: [0, -20, 0],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-4 right-20 w-2 h-2 bg-cyan-400 rounded-full opacity-60"
        animate={{
          y: [0, -15, 0],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </motion.footer>
  );
};

export default Footer;