import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaCheck } from "react-icons/fa";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const controls = useAnimation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

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

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 1.2 + (i * 0.1),
        ease: "backOut"
      }
    }),
    hover: {
      scale: 1.2,
      y: -5,
      transition: { duration: 0.3 }
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Dhaka, Bangladesh",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "+880 1234 567890",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: FaEnvelope,
      title: "Email",
      value: "tarun@example.com",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const socialLinks = [
    { icon: FaGithub, href: "#", color: "hover:text-gray-300", label: "GitHub" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/md-tanveer-hossain-tarun-671597367", color: "hover:text-blue-400", label: "LinkedIn" },
    { icon: FaTwitter, href: "#", color: "hover:text-sky-400", label: "Twitter" }
  ];

  return (
    <motion.section
      id="contact"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-teal-400/30 to-cyan-400/30"
            style={{
              width: Math.random() * 40 + 10,
              height: Math.random() * 40 + 10,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/20 rounded-full border border-teal-500/30 mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <FaPaperPlane className="text-teal-400 text-sm" />
            <span className="text-teal-400 text-sm font-medium">Get In Touch</span>
          </motion.div>
          
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            variants={itemVariants}
          >
            Let's <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Work Together</span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together. 
            I'm always open to new opportunities and interesting challenges.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className="flex items-center gap-6 p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-teal-400/50 transition-all duration-300 group"
                variants={itemVariants}
                custom={index}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <motion.div
                  className={`p-4 rounded-2xl bg-gradient-to-r ${info.color} shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <info.icon className="text-2xl text-white" />
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                  <p className="text-gray-300">{info.value}</p>
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div
              className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700"
              variants={itemVariants}
            >
              <h3 className="text-lg font-semibold text-white mb-4 text-center">Follow Me</h3>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className={`text-2xl text-gray-400 ${social.color} transition-colors duration-300 p-3 bg-gray-700/50 rounded-2xl backdrop-blur-sm border border-gray-600/50`}
                    variants={socialVariants}
                    custom={index}
                    whileHover="hover"
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            variants={cardVariants}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 shadow-2xl">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    >
                      <FaCheck className="text-2xl text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                    <p className="text-gray-300 text-lg">
                      Thank you for reaching out. I'll get back to you soon!
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Your Name
                        </label>
                        <motion.input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-gray-700/50 border border-gray-600 rounded-2xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300 backdrop-blur-sm"
                          placeholder="Enter your name"
                          whileFocus={{ scale: 1.02 }}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Your Email
                        </label>
                        <motion.input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-gray-700/50 border border-gray-600 rounded-2xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300 backdrop-blur-sm"
                          placeholder="Enter your email"
                          whileFocus={{ scale: 1.02 }}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Subject
                      </label>
                      <motion.input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-700/50 border border-gray-600 rounded-2xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300 backdrop-blur-sm"
                        placeholder="What's this about?"
                        whileFocus={{ scale: 1.02 }}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Your Message
                      </label>
                      <motion.textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows="6"
                        className="w-full bg-gray-700/50 border border-gray-600 rounded-2xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300 resize-none backdrop-blur-sm"
                        placeholder="Tell me about your project..."
                        whileFocus={{ scale: 1.02 }}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-4 px-8 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
                      whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <FaPaperPlane className="text-sm group-hover:animate-pulse" />
                          </motion.div>
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          variants={itemVariants}
        >
          <p className="text-gray-400 text-lg mb-4">
            Prefer a more direct approach?
          </p>
          <motion.a
            href="mailto:tarun@example.com"
            className="inline-flex items-center gap-3 text-teal-400 hover:text-teal-300 transition-colors duration-300 text-lg font-semibold"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <FaEnvelope />
            <span>tarun@example.com</span>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;