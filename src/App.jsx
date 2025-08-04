import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Donate from "./components/Donate";
import Vote from "./components/Vote";
import News from "./components/News";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showDonateModal, setShowDonateModal] = useState(false);

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setShowScrollTop(scrollY > 400);
  }, []);

  useEffect(() => {
    let ticking = false;

    const throttledScrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScrollHandler, { passive: true });
    return () => window.removeEventListener('scroll', throttledScrollHandler);
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleDonateClick = (e) => {
    e.preventDefault();
    setShowDonateModal(true);
  };

  const closeModal = () => {
    setShowDonateModal(false);
  };

  // Enhanced animation variants
  const buttonVariants = {
    initial: { opacity: 0, scale: 0.8, x: -50 },
    animate: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94] // Custom easing
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      x: -50,
      transition: {
        duration: 0.3,
        ease: [0.55, 0.055, 0.675, 0.19]
      }
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2,
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

  const scrollTopVariants = {
    initial: { opacity: 0, scale: 0.8, y: 20 },
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
      scale: 0.8,
      y: 20,
      transition: {
        duration: 0.3,
        ease: [0.55, 0.055, 0.675, 0.19]
      }
    },
    hover: {
      scale: 1.1,
      y: -2,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    tap: {
      scale: 0.9,
      transition: {
        duration: 0.1
      }
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Navbar />

        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/howtovote" element={<Vote />} />
            <Route path="/news" element={<News />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>

        <Footer />

        {/* Donate Now Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.div
              className="fixed bottom-6 left-6 z-50"
              variants={buttonVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <motion.button
                onClick={handleDonateClick}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl font-semibold text-sm sm:text-base flex items-center space-x-2"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                <span>Donate Now</span>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

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

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              onClick={scrollToTop}
              className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
              variants={scrollTopVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              whileHover="hover"
              whileTap="tap"
              aria-label="Scroll to top"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
