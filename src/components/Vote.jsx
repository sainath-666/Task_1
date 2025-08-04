import React, { useState } from "react";
import { motion } from "framer-motion";

const Vote = () => {
  const [activeTab, setActiveTab] = useState('register');



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
    <div className="min-h-screen bg-gradient-to-br from-blue-900/50 via-indigo-900/50 to-purple-900/50 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent mb-6 sm:mb-8">
            How to Vote
          </h1>
          <p className="max-w-3xl mx-auto text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
            Updates and information on how to vote will be posted closer to election day
          </p>
        </motion.div>

        {/* Important Dates */}
        {/* <motion.div
          className="mb-12 sm:mb-16"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-300 mb-6 sm:mb-8 text-center">
            Important Dates
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {importantDates.map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 backdrop-blur-md p-4 sm:p-6 rounded-lg border border-gray-700/50 text-center"
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <p className="text-blue-400 font-semibold text-sm sm:text-base mb-2">
                  {item.date}
                </p>
                <p className="text-gray-300 text-xs sm:text-sm">
                  {item.event}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div> */}


        {/* Additional Resources */}
        {/* <motion.div
          className="text-center"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-300 mb-6 sm:mb-8">
            Additional Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <motion.a
              href="#"
              className="bg-gray-800/50 backdrop-blur-md p-4 sm:p-6 rounded-lg border border-gray-700/50 hover:bg-gray-700/50 transition-all duration-300 block"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <h3 className="text-lg font-semibold text-gray-100 mb-2">Voter ID Requirements</h3>
              <p className="text-gray-300 text-sm">Learn what identification you need to bring to vote.</p>
            </motion.a>

            <motion.a
              href="#"
              className="bg-gray-800/50 backdrop-blur-md p-4 sm:p-6 rounded-lg border border-gray-700/50 hover:bg-gray-700/50 transition-all duration-300 block"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <h3 className="text-lg font-semibold text-gray-100 mb-2">Sample Ballot</h3>
              <p className="text-gray-300 text-sm">Preview your ballot before Election Day.</p>
            </motion.a>

            <motion.a
              href="#"
              className="bg-gray-800/50 backdrop-blur-md p-4 sm:p-6 rounded-lg border border-gray-700/50 hover:bg-gray-700/50 transition-all duration-300 block"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <h3 className="text-lg font-semibold text-gray-100 mb-2">Accessibility</h3>
              <p className="text-gray-300 text-sm">Information about accessible voting options.</p>
            </motion.a>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
};

export default Vote;
