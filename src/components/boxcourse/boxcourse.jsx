import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./boxcourse.css"; // Include CSS file for styles

// Example course data
const courses = [
  { id: 1, title: "Master in Data Science", originalPrice: "80,000", discountPrice: "45,000", label: "Top Choice" },
  { id: 2, title: "Full Stack Development", originalPrice: "90,000", discountPrice: "35,000" },
  { id: 3, title: "Data Analytics", originalPrice: "70,000", discountPrice: "35,000", label: "Trending" },
  { id: 4, title: "Digital marketing", originalPrice: "60,000", discountPrice: "35,000" },
  { id: 5, title: "Cloud Computing", originalPrice: "90,000", discountPrice: "35,000", label: "Trending" },
  { id: 6, title: "UI/UX", originalPrice: "60,000", discountPrice: "35,000" },
  { id: 7, title: "Automation Testing", originalPrice: "70,000", discountPrice: "35,000" },
  { id: 8, title: "Cybersecurity", originalPrice: "80,000", discountPrice: "35,000", label: "Hot Topic" },
  { id: 9, title: "AI&ML", originalPrice: "70,000", discountPrice: "35,000", label: "Trending" },
  { id: 10, title: "Embedded System", originalPrice: "60,000", discountPrice: "35,000" },
];

function Top() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 4 + courses.length) % courses.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 4) % courses.length);
  };

  const displayedCourses = courses.slice(currentIndex, currentIndex + 4); // Show 4 courses at a time

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 4) % courses.length); // Ensure it loops back to the start
    }, 10000); // 10 seconds delay

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 mt-8 mb-12">
      {/* Updated Heading with New Text Styles */}
      <h1 className="text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-10 tracking-wide">
        Trending <span className="text-indigo-600">Courses</span>
      </h1>

      {/* Scrolling Container */}
      <div className="relative flex justify-center items-center">
        <motion.div
          className="flex justify-center space-x-8 flex-wrap md:flex-nowrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {displayedCourses.map((course) => (
            <motion.div
              key={course.id}
              className="bg-white rounded-2xl shadow-lg p-6 w-full md:w-80 flex-shrink-0 mb-4 md:mb-0 course-card-shadow relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * course.id, duration: 0.5 }}
            >
              {/* Add labels if present */}
              {course.label && (
                <motion.div
                  className="absolute top-4 left-4 bg-orange-600 text-white text-sm font-semibold py-1 px-3 rounded-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 * course.id, type: "spring", stiffness: 200 }}
                >
                  {course.label}
                </motion.div>
              )}

              {/* Card Content */}
              <div className="bg-white rounded-xl p-4 mb-6">
                <h2 className="font-semibold text-xl mb-4 text-blue-800 font-serif">
                  {course.title}
                </h2>

                {/* Bullet-point text with checkmark */}
                <ul className="checkmark-list list-inside">
                  <li className="text-md mb-2 text-gray-700 font-serif">
                    Online & Offline class available
                  </li>
                  <li className="text-md mb-2 text-gray-700 font-serif">
                    365 Days Flexi Pass
                  </li>
                  <li className="text-md mb-2 text-gray-700 font-serif">
                    Internship + Job Assistance
                  </li>
                  <li className="text-md mb-4 text-gray-700 font-serif">
                    25 Capstone & 1 Client Project
                  </li>
                </ul>

                {/* Price Section */}
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold line-through text-red-500">
                    ₹{course.originalPrice}
                  </h3>
                  <h3 className="text-lg font-semibold text-green-500">
                    ₹{course.discountPrice}
                  </h3>
                </div>
              </div>

              {/* Button - Redirect to Contact page */}
              <Link to="/contact">
                <motion.button
                  className="w-full py-2 bg-blue-800 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-blue-600 hover:scale-105 course-button"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Know More
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Arrow Navigation with Circle Background */}
      <div className="flex justify-center mt-6 space-x-6">
        {/* Left Arrow Button */}
        <motion.div
          className="cursor-pointer flex items-center justify-center w-12 h-12 rounded-full bg-blue-800 text-white text-2xl"
          onClick={handlePrevClick}
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          &#8592; {/* Left Arrow */}
        </motion.div>
        
        {/* Right Arrow Button */}
        <motion.div
          className="cursor-pointer flex items-center justify-center w-12 h-12 rounded-full bg-blue-800 text-white text-2xl"
          onClick={handleNextClick}
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          &#8594; {/* Right Arrow */}
        </motion.div>
      </div>
    </div>
  );
}

export default Top;
  