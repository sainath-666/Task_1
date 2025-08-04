import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Donate = () => {
  const [showDonateModal, setShowDonateModal] = useState(false);

  const handleDonateClick = () => {
    setShowDonateModal(true);
  };

  const closeModal = () => {
    setShowDonateModal(false);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900/50 via-blue-900/50 to-indigo-900/50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 text-center">
        <motion.div
          className="space-y-6 sm:space-y-8 lg:space-y-12"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {/* Main Heading */}
          <motion.div
            className="space-y-4 sm:space-y-6"
            variants={fadeInUp}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent mb-6 sm:mb-8">
              Please show your support for Penny
            </h2>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent mb-6 sm:mb-8">
              Wegman!
            </h3>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-blue-300 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Can't attend an event? Show your support with a donation!
          </motion.p>

          {/* Donate Button */}
          <motion.div
            className="pt-8 sm:pt-12"
            variants={fadeInUp}
          >
            <motion.button
              onClick={handleDonateClick}
              className="bg-blue-600 border-4 border-yellow-400 text-yellow-400 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold px-8 sm:px-12 py-4 sm:py-6 rounded-lg shadow-lg hover:bg-blue-700 hover:text-yellow-300 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              DONATE
            </motion.button>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            className="pt-8 sm:pt-12 text-sm sm:text-base text-gray-400 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            <p className="leading-relaxed">
              Contributions are not tax deductible. Paid for by Friends of Penny Wegman.
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="pt-8 sm:pt-12 space-y-4"
            variants={fadeInUp}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-blue-300">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-sm sm:text-base">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-sm sm:text-base">penny.wegman@campaign.com</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Donate Modal */}
      <AnimatePresence>
        {showDonateModal && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            />

            {/* Modal */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.div
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 max-w-md w-full shadow-2xl border border-gray-700/50"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* Success Icon */}
                <div className="text-center mb-6">
                  <motion.div
                    className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                </div>

                {/* Title */}
                <motion.h2
                  className="text-2xl font-bold text-center text-gray-100 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Thanks for Donating!
                </motion.h2>

                {/* Message */}
                <motion.p
                  className="text-gray-300 text-center mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Your generous contribution helps support our campaign and make a difference in Kane County. Every donation counts towards our mission!
                </motion.p>

                {/* Close Button */}
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.button
                    onClick={closeModal}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Close
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Donate;
