import React from "react";
import { motion } from "framer-motion";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Town Hall Meeting",
      description: "Open discussion about community development and future plans.",
      date: "August 15, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Elgin Community Center",
      type: "Meeting"
    },
    {
      id: 2,
      title: "Community Clean-up Day",
      description: "Join us for a day of community service and environmental stewardship.",
      date: "August 28, 2025",
      time: "9:00 AM - 12:00 PM",
      location: "Kane County Park",
      type: "Volunteer"
    },
    {
      id: 3,
      title: "Meet & Greet",
      description: "Come meet Penny Wegman and share your thoughts about Kane County's future.",
      date: "September 5, 2025",
      time: "5:30 PM - 7:30 PM",
      location: "Local Coffee Shop",
      type: "Social"
    },
    {
      id: 4,
      title: "Campaign Rally",
      description: "Join us for an exciting campaign rally and hear about our vision for Kane County.",
      date: "September 12, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Kane County Fairgrounds",
      type: "Rally"
    }
  ];

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

  const getEventTypeColor = (type) => {
    switch (type) {
      case 'Meeting':
        return 'bg-blue-500';
      case 'Volunteer':
        return 'bg-green-500';
      case 'Social':
        return 'bg-purple-500';
      case 'Rally':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900/50 via-indigo-900/50 to-blue-900/50 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-400 mb-6 sm:mb-8">
            Upcoming Events
          </h2>
          <p className="max-w-3xl mx-auto text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
            Join us at our upcoming events and be part of the conversation about
            Kane County's future.
          </p>
        </motion.div>

        <motion.div
          className="space-y-6 sm:space-y-8"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              className="bg-gray-800/50 backdrop-blur-md p-6 sm:p-8 rounded-lg shadow-lg border border-gray-700/50 hover:bg-gray-800/70 transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getEventTypeColor(event.type)}`}>
                      {event.type}
                    </span>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-100">
                      {event.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
                    {event.description}
                  </p>
                </div>
                <div className="text-right lg:text-left lg:min-w-[200px]">
                  <div className="space-y-2">
                    <p className="text-blue-400 font-semibold text-sm sm:text-base">
                      {event.date}
                    </p>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      {event.time}
                    </p>
                    <p className="text-gray-400 text-xs sm:text-sm flex items-center justify-end lg:justify-start space-x-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{event.location}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-700">
                <motion.button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  RSVP for Event
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-12 sm:mt-16 text-center"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <p className="text-gray-300 text-sm sm:text-base mb-4">
            Can't attend an event? Show your support with a donation!
          </p>
          <motion.button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Donate Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Events;
