import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Info = () => {
  const [showDonateModal, setShowDonateModal] = useState(false);

  const handleDonateClick = (e) => {
    e.preventDefault();
    setShowDonateModal(true);
  };

  const closeModal = () => {
    setShowDonateModal(false);
  };

  // Enhanced animation variants
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.2
      }
    }
  };

  const imageVariants = {
    initial: { opacity: 0, x: -50, scale: 0.9 },
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const contentVariants = {
    initial: { opacity: 0, x: 50 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const buttonVariants = {
    initial: { opacity: 0, scale: 0.9, y: 20 },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.3
      }
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };

  const modalVariants = {
    backdrop: {
      initial: { opacity: 0 },
      animate: {
        opacity: 1,
        transition: {
          duration: 0.3,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      },
      exit: {
        opacity: 0,
        transition: {
          duration: 0.2,
          ease: [0.55, 0.055, 0.675, 0.19]
        }
      }
    },
    modal: {
      initial: { opacity: 0, scale: 0.9, y: 20 },
      animate: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          duration: 0.4,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      },
      exit: {
        opacity: 0,
        scale: 0.9,
        y: 20,
        transition: {
          duration: 0.3,
          ease: [0.55, 0.055, 0.675, 0.19]
        }
      }
    },
    content: {
      initial: { y: 30, opacity: 0 },
      animate: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.1
        }
      },
      exit: {
        y: 30,
        opacity: 0,
        transition: {
          duration: 0.3,
          ease: [0.55, 0.055, 0.675, 0.19]
        }
      }
    }
  };

  return (
    <motion.div
      className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left Side - Image */}
          <motion.div
            className="lg:col-span-1 order-2 lg:order-1"
            variants={imageVariants}
          >
            <div className="flex justify-center lg:justify-start">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-blue-400/30 dark:border-blue-300/30 shadow-2xl">
                  <img
                    src="../../public/penny-wegman.png"
                    alt="Penny Wegman"
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-blue-600 dark:bg-blue-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg"
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    delay: 0.5,
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  Kane County Treasurer
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Campaign Message */}
          <motion.div
            className="lg:col-span-2 text-white order-1 lg:order-2"
            variants={contentVariants}
          >
            <div className="max-w-2xl mx-auto lg:mx-0">
              <div className="space-y-6">
                <motion.p
                  className="text-xl sm:text-2xl lg:text-3xl leading-relaxed font-light opacity-95 hover:text-gray-200 transition-colors duration-300"
                  variants={textVariants}
                >
                  I have delivered innovative leadership—making government more
                  transparent, efficient, and accountable. Now I'm ready to
                  bring that same commitment to the Treasurer's Office and
                  strengthen public trust in Kane County government.
                </motion.p>
                <motion.div
                  className="pt-4"
                  variants={textVariants}
                >
                  <p className="text-lg sm:text-xl lg:text-2xl italic text-blue-300 font-medium hover:text-blue-200 transition-colors duration-300">
                    Penny Wegman - Candidate for Kane County Treasurer
                  </p>
                </motion.div>

                {/* Donation Button */}
                <motion.div
                  className="pt-6"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <motion.button
                    onClick={handleDonateClick}
                    className="inline-block bg-blue-900 border-2 border-yellow-300 text-yellow-300 text-base sm:text-lg font-semibold px-6 py-2 rounded-full shadow-lg transition-all duration-300 ease-out hover:bg-blue-800 hover:text-yellow-200 hover:shadow-xl hover:shadow-yellow-300/25 transform hover:scale-105 hover:-translate-y-1"
                  >
                    DONATE NOW
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Donate Modal */}
      <AnimatePresence>
        {showDonateModal && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              variants={modalVariants.backdrop}
              initial="initial"
              animate="animate"
              exit="exit"
              onClick={closeModal}
            />

            {/* Modal */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              variants={modalVariants.modal}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <motion.div
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 max-w-md w-full shadow-2xl border border-gray-700/50"
                variants={modalVariants.content}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {/* Success Icon */}
                <div className="text-center mb-6">
                  <motion.div
                    className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      delay: 0.2,
                      type: "spring",
                      stiffness: 200,
                      damping: 20
                    }}
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
                  transition={{ delay: 0.3, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  Thanks for Donating!
                </motion.h2>

                {/* Message */}
                <motion.p
                  className="text-gray-300 text-center mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  Your generous contribution helps support our campaign and make a difference in Kane County. Every donation counts towards our mission!
                </motion.p>

                {/* Close Button */}
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <motion.button
                    onClick={closeModal}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    Close
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Info
