import Info from './Info'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Hero = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const badgeVariants = {
    initial: { opacity: 0, scale: 0.8, y: 20 },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const contentVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.3
      }
    }
  };

  const donateButtonVariants = {
    initial: { opacity: 0, scale: 0.9, y: 20 },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.5
      }
    },
    hover: {
      scale: 1.02,
      y: -2,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1
      }
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center bg-gradient-to-br from-blue-900/50 via-indigo-900/50 to-purple-900/50 relative overflow-x-hidden pt-16">
      <Info />

      {/* Campaign Banner Section */}
      <motion.div
        className="w-full flex flex-col items-center py-8 sm:py-12 lg:py-16 xl:py-20 bg-gradient-to-r from-slate-800/80 via-blue-800/80 to-slate-800/80 border-t border-blue-600/30"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        {/* Main Heading */}
        <motion.div
          className="text-center mb-6 sm:mb-8 lg:mb-10 px-4 sm:px-6"
          variants={fadeInUp}
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.1
            }}
          >
            Penny Wegman
          </motion.h1>
          <motion.h2
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-blue-200 drop-shadow-md leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.3
            }}
          >
            Candidate for Kane County Treasurer
          </motion.h2>
        </motion.div>

        {/* Attribute Badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 lg:mb-12 px-4"
          variants={staggerContainer}
        >
          {[
            { text: "Experienced Leader", icon: "🏛️" },
            { text: "Community Focused", icon: "🤝" },
            { text: "Transparent Government", icon: "📋" },
            { text: "Kane County Native", icon: "🏠" }
          ].map((badge, index) => (
            <motion.div
              key={index}
              className="bg-blue-900/50 backdrop-blur-sm border border-blue-400/30 rounded-full px-3 py-2 sm:px-4 sm:py-2 text-blue-200 text-xs sm:text-sm md:text-base font-medium"
              variants={badgeVariants}
              whileHover={{
                scale: 1.05,
                y: -3,
                transition: {
                  duration: 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }
              }}
              whileTap={{
                scale: 0.95,
                transition: { duration: 0.1 }
              }}
            >
              <span className="mr-1 sm:mr-2">{badge.icon}</span>
              {badge.text}
            </motion.div>
          ))}
        </motion.div>

        {/* Content Paragraphs */}
        <motion.div
          className="max-w-4xl text-gray-100 text-sm sm:text-base md:text-lg lg:text-xl space-y-4 sm:space-y-6 lg:space-y-8 px-4 sm:px-6 lg:px-8 text-center"
          variants={contentVariants}
        >
          <motion.p
            className="leading-relaxed hover:text-gray-200 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.4
            }}
          >
            I provide the necessary services as expeditiously and economically as can be done while providing the same services on an equal basis to all people.
          </motion.p>
          <motion.p
            className="leading-relaxed hover:text-gray-200 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.5
            }}
          >
            My experience includes serving on the Kane County Board, serving as the Treasurer of the Kane County Forest Preserve, and Vice Co-Chair of the Kane County Democratic Women organization. I have also served as a Gail Borden Public Library Trustee and President of the Kane County Regional School Board. I have lived in Elgin since 1980. I graduated from Elgin High School, attended Elgin Community College, received a Bachelor of Science Degree in Political Science from Southwest Missouri in Springfield, Missouri and I received my MBA from Keller Graduate School in 2017, with honors. I am also a Certified Illinois Assessment Officer through the Illinois Department of Revenue.
          </motion.p>
          <motion.p
            className="font-semibold text-blue-200 text-base sm:text-lg md:text-xl hover:text-blue-100 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.6
            }}
          >
            I am your Candidate for Kane County Treasurer and I ask for your continued support.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Donate Section */}
      <motion.div
        className="w-full flex flex-col items-center py-8 sm:py-12 lg:py-16 bg-gradient-to-r from-slate-900/90 via-blue-900/90 to-slate-900/90 border-t border-blue-600/30"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-center text-blue-200 mb-6 sm:mb-8 lg:mb-10 drop-shadow-lg leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.2
            }}
          >
            Click here to support Penny Wegman as your Kane County Auditor!
          </motion.h2>
          <motion.div
            variants={donateButtonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link
              to="/donate"
              className="block w-full max-w-4xl mx-auto border-4 border-yellow-300 bg-blue-900 text-yellow-300 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-center py-4 sm:py-6 lg:py-8 rounded-md shadow-xl transition-all duration-500 ease-out hover:bg-blue-800 hover:text-yellow-200 hover:shadow-2xl hover:shadow-yellow-300/25 transform hover:-translate-y-1"
            >
              DONATE
            </Link>
          </motion.div>
        </div>

        {/* Contact Information */}
        <motion.div
          className="pt-6 space-y-2 sm:space-y-3 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.7
          }}
        >
          <motion.div
            className="flex items-center justify-center space-x-2 sm:space-x-3 text-blue-300 hover:text-blue-200 transition-colors duration-300"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span className="text-sm sm:text-base md:text-lg">+1 (555) 123-4567</span>
          </motion.div>
          <motion.div
            className="flex items-center justify-center space-x-2 sm:space-x-3 text-blue-300 hover:text-blue-200 transition-colors duration-300"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span className="text-sm sm:text-base md:text-lg">penny.wegman@campaign.com</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero 