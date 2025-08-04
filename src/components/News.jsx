import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const News = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const newsArticles = [
    {
      id: 1,
      title: "Daily Herald endorses Penny Wegman",
      content: `In the Nov. 5 election, Republican Gretchen Butler of St. Charles is challenging incumbent Democrat Penny Wegman of Elgin in the race for Candidate for Kane County Treasurer.

In seeking a second term, Wegman cites her experience as county auditor since 2020 and having earned a master's degree in business administration in 2016.

Butler points to her 25 years of business experience — some of that owning a hardware store and running all the financials.

Both agree on the importance of the auditor remaining independent of other county officials and offices in order to provide objective oversight.

If elected, Butler intends to implement strategies to streamline operations and reduce expenses within the office.

"My goal is to optimize resource allocation, which will ultimately result in cost savings and put more money back into the pockets of the citizens of Kane County," Butler said.

During Wegman's term, her office increased access to the Online County Checkbook, developed an internship program, identified and helped the county board close policy gaps and created a Purchase Card Audit process that increased transparency and revenue. The office also received an International Association of Governmental Officials Innovator Award.

Wegman points to her accomplishments during her term, as well as prior experience on the Kane County Board, and wants to increase transparency on how tax dollars are spent. During her term, the office received an International Association of Governmental Officials Innovator Award.

Butler is qualified, but Wegman's experience and accomplishments during her term give her the edge. Wegman is endorsed.`,

      image: "../../public/penny-wegman.png",
      sourceImage: "../../public/daily-herald.png",
      link: "https://archive.ph/2024.10.17-134933/https://www.dailyherald.com/20241017/endorsements/endorsement-penny-wegman-for-kane-auditor/",
    },
    {
      id: 2,
      title: "Candidate for Kane County Treasurer Penny Wegman receives international award",
      content: `Candidate for Kane County Treasurer Penny Wegman recently received the Innovator Award from the International Association of Government Officials at the annual conference in New Orleans.

The award recognized Wegman's work for the Kane County Procurement Card Program.

Procurement cards – known as p-cards – are credit cards issued to department heads and office holders for purchasing goods and services. The program helps streamline the purchasing process while maintaining proper oversight and accountability.

Wegman's innovative approach to auditing and oversight has been recognized nationally, highlighting her commitment to transparency and fiscal responsibility in Kane County government.`,
      image: "../../public/pw.png",
      sourceImage: "../../public/shawlocal.png",
      link: "https://www.shawlocal.com/kane-county-chronicle/2024/07/30/kane-auditor-penny-wegman-receives-national-award/?utm_campaign=snd-autopilot&utm_medium=social&utm_source=facebook_KaneCountyChronicle",
    },
  ];

  const slideshowImages = [
    "../../public/1.png",
    "../../public/2.png",
    "../../public/3.png",
    "../../public/4.png",
  ];

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slideshowImages.length]);

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900/80 via-blue-900/80 to-indigo-900/80 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent mb-6 sm:mb-8">
            Latest News
          </h1>
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-300 leading-relaxed">
            Stay updated with the latest news and updates from our campaign.
            Get the latest information about events, policy announcements, and campaign progress.
          </p>
        </motion.div>

        {/* News Articles Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {newsArticles.map((article) => (
            <motion.article
              key={article.id}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 group"
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Article Image */}
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              <div className="p-8">
                {/* Date */}
                <div className="flex items-center justify-between mb-4">

                  <div className="flex items-center space-x-2">
                    <img
                      src={article.sourceImage}
                      alt="Source"
                      className="w-auto h-10 object-contain rounded"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-100 mb-4 leading-tight group-hover:text-blue-300 transition-colors duration-300">
                  {article.title}
                </h3>

                {/* Content */}
                <p className="text-gray-300 text-base leading-relaxed mb-6 line-clamp-4">
                  {article.content}
                </p>

                {/* Read More Link */}
                <motion.a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors duration-300 group/link"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read Full Article
                  <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Campaign Highlights Slideshow */}
        <motion.div
          className="mb-16"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-blue-300 mb-8 text-center">Endorsements</h2>
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div className="relative h-80 sm:h-96 lg:h-200">
              {slideshowImages.map((image, index) => (
                <motion.img
                  key={index}
                  src={image}
                  alt={`Campaign highlight ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                />
              ))}

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

              {/* Navigation Dots */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {slideshowImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${index === currentSlide
                      ? 'bg-blue-400 shadow-lg shadow-blue-400/50'
                      : 'bg-gray-400/50 hover:bg-gray-300/70'
                      }`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length)}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slideshowImages.length)}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default News;
