import React from 'react';
import { Link } from 'react-router-dom';

// Image Component
const ImageComponent = ({ src, alt, className }) => {
  return (
    <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0 py-0">
      <img className={`${className} transition-transform duration-300 hover:scale-105`} src={src} alt={alt} loading="lazy" />
    </div>
  );
};

// Text Section Component
const TextSection = () => {
  return (
    <div className="lg:w-1/2 flex items-center justify-center mt-6 lg:mt-0">
      <div className=" p-6 lg:p-8 text-center lg:text-left">
        {/* Heading Tags */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-gray-800 font-bold mb-4">
          Internships for Students
        </h1>
        <h2 className="text-lg sm:text-xl lg:text-2xl text-indigo-600 font-semibold mb-4">
          Gain Hands-On Experience with CareerLadder's Internship Programs
        </h2>
        <p className="text-base sm:text-lg lg:text-base text-gray-700 mb-6">
          CareerLadder has created internship courses that cater to a variety of topics, providing students with hands-on experience
          in industry projects, in response to the current demand from colleges and enterprises.
        </p>

        {/* Enroll Button */}
        <div className="mt-4">
          <Link
            to="/contact" // Link destination
            className="bg-indigo-600 text-white font-semibold text-lg sm:text-xl lg:text-2xl hover:bg-indigo-700 py-3 px-8 rounded-full transition-all shadow-md transform hover:scale-105"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </div>
  );
};

// Intern Page Component (Main Component)
const Intern = () => {
  const internImage = require("../../asset/intern/intern.png"); // Image Import
  
  return (
    <div className="mt-8 px-4 sm:px-8 lg:px-20 py-10">
      <div className="lg:flex gap-6 lg:gap-16 flex-col lg:flex-row">
        {/* Image Section */}
        <ImageComponent 
          src={internImage}
          alt="Internship"
          className="h-[40vh] sm:h-[50vh] lg:h-[40vh] w-auto rounded-lg object-cover shadow-lg"
        />

        {/* Text Section */}
        <TextSection />
      </div>
    </div>
  );
};

export default Intern;