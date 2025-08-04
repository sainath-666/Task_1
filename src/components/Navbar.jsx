import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 10);
  }, []);

  // Handle scroll effect
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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('nav')) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { to: "/", text: "HOME" },
    { to: "/about", text: "ABOUT PENNY WEGMAN" },
    { to: "/donate", text: "DONATE" },
    { to: "/howtovote", text: "HOW TO VOTE" },
    { to: "/news", text: "NEWS" },
    { to: "/events", text: "EVENTS" },
    { to: "/contact", text: "CONTACT" }
  ];

  // Animation variants
  const navbarVariants = {
    initial: { y: -100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: [0.55, 0.055, 0.675, 0.19],
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const mobileLinkVariants = {
    closed: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.2,
        ease: [0.55, 0.055, 0.675, 0.19]
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const hamburgerVariants = {
    closed: {
      rotate: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    open: {
      rotate: 180,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-gradient-to-r from-slate-900/95 via-blue-900/95 to-slate-900/95 backdrop-blur-md shadow-lg border-b border-blue-600/30'
          : 'bg-gradient-to-r from-slate-900/80 via-blue-900/80 to-slate-900/80 backdrop-blur-sm'
        }`}
      variants={navbarVariants}
      initial="initial"
      animate="animate"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo/Brand Section */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="text-xs sm:text-sm font-medium text-gray-300 leading-tight">
              Penny Wegman - Candidate for Kane County Treasurer
            </div>
            <div className="text-sm sm:text-lg font-bold italic text-blue-400">Every Penny Counts!</div>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden lg:flex space-x-6 xl:space-x-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4 + (index * 0.05),
                  duration: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                <Link
                  to={link.to}
                  className="text-gray-300 hover:text-blue-400 font-medium transition-all duration-300 text-sm xl:text-base relative group"
                >
                  {link.text}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 bg-blue-400"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300 p-2"
              aria-label="Toggle mobile menu"
              variants={hamburgerVariants}
              animate={isMobileMenuOpen ? "open" : "closed"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <motion.span
                  className="block w-5 h-0.5 bg-current"
                  animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
                <motion.span
                  className="block w-5 h-0.5 bg-current mt-1"
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
                <motion.span
                  className="block w-5 h-0.5 bg-current mt-1"
                  animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden overflow-hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="py-4 space-y-2 border-t border-gray-700">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.to}
                    variants={mobileLinkVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    <Link
                      to={link.to}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 text-gray-300 hover:text-blue-400 hover:bg-gray-800/50 rounded-lg transition-all duration-300 text-sm font-medium"
                    >
                      {link.text}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar; 