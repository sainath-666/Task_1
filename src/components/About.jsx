import React from "react";
import { motion } from "framer-motion";

const About = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-900/50 via-blue-900/50 to-purple-900/50 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Basic About Section */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent mb-6 sm:mb-8">About Me</h2>
          <p className="max-w-4xl mx-auto text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
            I provide the necessary services as expeditiously and economically as
            can be done while providing the same services on an equal basis to all
            people. My experience includes serving on the Kane County Board,
            serving as the Treasurer of the Kane County Forest Preserve, and
            Vice-Chair of the Kane County Democratic Women organization. I
            formerly served as a Gail Borden Public Library Trustee and President
            of the Kane County Regional School Board. I have lived in Elgin since
            1980. I graduated from Elgin High School, attended Elgin Community
            College, received a Bachelor of Science Degree in Political Science
            from Southwest Missouri in Springfield, Missouri, and received my MBA
            from Keller Graduate School in 2017, with honors. I am also a
            Certified Illinois Assessment Officer through the Illinois Department of Revenue.
          </p>
        </motion.div>

        {/* Experience and Education Columns */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {/* Experience Column */}
          <motion.div
            className="bg-gray-800/50 backdrop-blur-md p-6 sm:p-8 rounded-lg shadow-lg border border-gray-700/50"
            variants={fadeInUp}
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-100 mb-6 pb-3 border-b-2 border-blue-500">
              Experience
            </h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="group hover:bg-gray-700/30 p-3 rounded-lg transition-all duration-300">
                <h4 className="text-lg sm:text-xl font-semibold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  Kane County Board
                </h4>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  Commissioner (Jobs, Agriculture; Former Finance, Executive and
                  Chair of Energy and Environment Committees)
                </p>
              </div>
              <div className="group hover:bg-gray-700/30 p-3 rounded-lg transition-all duration-300">
                <h4 className="text-lg sm:text-xl font-semibold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  Kane County Forest Preserve
                </h4>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  Treasurer & Commissioner (Finance and Executive Committees)
                </p>
              </div>
              <div className="group hover:bg-gray-700/30 p-3 rounded-lg transition-all duration-300">
                <h4 className="text-lg sm:text-xl font-semibold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  Kane County Democratic Women
                </h4>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">Vice-Chair</p>
              </div>
              <div className="group hover:bg-gray-700/30 p-3 rounded-lg transition-all duration-300">
                <h4 className="text-lg sm:text-xl font-semibold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  Gail Borden Library Board
                </h4>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">Former Trustee</p>
              </div>
              <div className="group hover:bg-gray-700/30 p-3 rounded-lg transition-all duration-300">
                <h4 className="text-lg sm:text-xl font-semibold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  Kane County Regional School Board
                </h4>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">Former President of Trustees</p>
              </div>
              <div className="group hover:bg-gray-700/30 p-3 rounded-lg transition-all duration-300">
                <h4 className="text-lg sm:text-xl font-semibold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  Habitat for Humanity Restore
                </h4>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">Volunteer</p>
              </div>
            </div>
          </motion.div>

          {/* Education Column */}
          <motion.div
            className="bg-gray-800/50 backdrop-blur-md p-6 sm:p-8 rounded-lg shadow-lg border border-gray-700/50"
            variants={fadeInUp}
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-100 mb-6 pb-3 border-b-2 border-blue-500">
              Education
            </h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="group hover:bg-gray-700/30 p-3 rounded-lg transition-all duration-300">
                <h4 className="text-lg sm:text-xl font-semibold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  Elgin High School
                </h4>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">Class of 1995</p>
              </div>
              <div className="group hover:bg-gray-700/30 p-3 rounded-lg transition-all duration-300">
                <h4 className="text-lg sm:text-xl font-semibold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  Southwest Missouri University
                </h4>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">Bachelors in Political Science</p>
              </div>
              <div className="group hover:bg-gray-700/30 p-3 rounded-lg transition-all duration-300">
                <h4 className="text-lg sm:text-xl font-semibold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  Keller Graduate School
                </h4>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">Masters in Business Administration</p>
              </div>
              <div className="group hover:bg-gray-700/30 p-3 rounded-lg transition-all duration-300">
                <h4 className="text-lg sm:text-xl font-semibold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  Certified Illinois Assessing Officer
                </h4>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">Through the Illinois Department of Revenue</p>
              </div>
              <div className="group hover:bg-gray-700/30 p-3 rounded-lg transition-all duration-300">
                <h4 className="text-lg sm:text-xl font-semibold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  Licensed Real Estate Broker
                </h4>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">Professional Real Estate License</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
