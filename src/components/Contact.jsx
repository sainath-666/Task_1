import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900/50 via-purple-900/50 to-blue-900/50 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent mb-6 sm:mb-8">Contact Us</h2>
          <p className="max-w-3xl mx-auto text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
            Have questions or want to get in touch? Reach out to us directly.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {/* Contact Information */}
          <motion.div
            className="bg-gray-800/50 backdrop-blur-md p-6 sm:p-8 rounded-lg shadow-lg border border-gray-700/50"
            variants={fadeInUp}
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-100 mb-6 sm:mb-8">
              Get in Touch
            </h3>
            <div className="space-y-6 sm:space-y-8">
              <motion.div
                className="flex items-center space-x-4 group hover:bg-gray-700/30 p-3 rounded-lg transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-400">Phone</p>
                  <p className="text-sm sm:text-base lg:text-lg font-semibold text-gray-100 group-hover:text-blue-300 transition-colors duration-300">+1 (555) 123-4567</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4 group hover:bg-gray-700/30 p-3 rounded-lg transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-400">Email</p>
                  <p className="text-sm sm:text-base lg:text-lg font-semibold text-gray-100 group-hover:text-blue-300 transition-colors duration-300">penny.wegman@campaign.com</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4 group hover:bg-gray-700/30 p-3 rounded-lg transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-400">Location</p>
                  <p className="text-sm sm:text-base lg:text-lg font-semibold text-gray-100 group-hover:text-blue-300 transition-colors duration-300">Kane County, Illinois</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-gray-800/50 backdrop-blur-md p-6 sm:p-8 rounded-lg shadow-lg border border-gray-700/50"
            variants={fadeInUp}
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-100 mb-6 sm:mb-8">
              Send us a Message
            </h3>
            <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="on"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="on"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"

                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
