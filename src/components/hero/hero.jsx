import React, { useState, useRef, Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Assets
import data from "../../asset/hero/data.webp"; // Hero Image
import live from "../../asset/Footer/lw.png"; // Logo Image

const HeroOptimized = () => {
  const [dropdown, setDropdown] = useState(false);
  const buttonRef = useRef();

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div>
      {/* SEO Meta Tags using Helmet */}
      <Helmet>
        <meta
          name="keywords"
          content="CareerLadder, Data Science course, Data Analytics course, Full Stack Development course, Digital Marketing course, Cyber Security course, Automation Testing course, Job Assistance, Interview Support, Tech Career, Coimbatore, Best Data Science course, Top Data Analytics course, Best Full Stack Development course, Top Digital Marketing course, Best Cyber Security course, Top Automation Testing course, Certification course, Top Tech Career, Best Certification in Data Science, Best Full Stack Developer course, Online Data Science certification, Best Data Analytics certification, Tech courses near me, Top certification courses in Coimbatore, Industry-leading courses, Career-oriented certification, Job-ready certification, Online course with job assistance, Job support certification"
        />
        <meta property="og:title" content="Unlock Flexible Learning with CareerLadder" />
        <meta
          property="og:description"
          content="Start your learning journey with CareerLadder. Join our online and offline courses and get 100% placement assistance!"
        />
        <meta property="og:image" content={data} />
        <meta property="og:url" content="https://www.careerladderedu.com" />
        
        {/* Preload Hero Image and Web Font */}
        <link rel="preload" href={data} as="image" type="image/webp" />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          as="font"
          type="font/woff2"
          crossorigin="anonymous"
        />
      </Helmet>

      {/* Full-Page Hero Section with a Single Background Image */}
      <div
        className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${data})` }}
      >
        {/* Navigation */}
        <nav className="text-black p-4 sm:px-6 flex justify-between items-center sm:space-x-8 absolute top-0 left-0 right-0 z-10">
          {/* Logo */}
          <Link to="/">
            <img
              className="h-[6vh] sm:h-[8vh] md:h-[8vh] bg-white rounded-2xl mb-0"
              src={live}
              alt="CareerLadder Logo"
              loading="lazy" // Lazy load the logo
            />
          </Link>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex space-x-8 ml-auto">
            <Link
              to="/"
              className="px-6 py-3 rounded-md cursor-pointer text-sm sm:text-sm text-white font-bold hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400 transition duration-300"
            >
              HOME
            </Link>
            <Link
              to="/courses"
              className="px-6 py-3 rounded-md cursor-pointer text-sm sm:text-sm text-white font-bold hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400 transition duration-300"
            >
              COURSES
            </Link>
            <Link
              to="/blog"
              className="px-6 py-3 rounded-md cursor-pointer text-sm sm:text-sm text-white font-bold hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400 transition duration-300"
            >
              BLOG
            </Link>
            <Link
              to="/team"
              className="px-6 py-3 rounded-md cursor-pointer text-sm sm:text-sm text-white font-bold hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400 transition duration-300"
            >
              TEAM
            </Link>
            <Link
              to="/placement"
              className="px-6 py-3 rounded-md cursor-pointer text-sm sm:text-sm text-white font-bold hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400 transition duration-300"
            >
              PLACEMENT
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-md cursor-pointer text-sm sm:text-sm text-white font-bold hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400 transition duration-300"
            >
              CONTACT
            </Link>
          </div>

          {/* Mobile Navigation (Hamburger menu) */}
          <div className="lg:hidden flex justify-center items-center ml-auto">
            <button onClick={toggleDropdown} className="text-white text-3xl" ref={buttonRef}>
              ☰
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {dropdown && (
          <div className="lg:hidden absolute top-[80px] right-0 bg-gray-200 shadow-lg w-[250px] rounded-lg z-10">
            <Link
              to="/"
              className="block px-6 py-3 mt-0 text-sm font-bold text-black hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400"
            >
              Home
            </Link>
            <Link
              to="/courses"
              className="block px-6 py-3 mt-2 text-sm font-bold text-black hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400"
            >
              Courses
            </Link>
            <Link
              to="/Blog"
              className="block px-6 py-3 mt-2 text-sm font-bold text-black hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400"
            >
              Blog
            </Link>
            <Link
              to="/team"
              className="block px-6 py-3 mt-2 text-sm font-bold text-black hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400"
            >
              Team
            </Link>
            <Link
              to="/placement"
              className="block px-6 py-3 mt-2 text-sm font-bold text-black hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400"
            >
              Placement
            </Link>
            <Link
              to="/contact"
              className="block px-6 py-3 mt-2 text-sm font-bold text-black hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400"
            >
              Contact
            </Link>
          </div>
        )}

        {/* Hero Text and Button */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 mt-14">
          {/* Main Heading */}
          <h1 className="font-serif text-white font-extrabold text-lg sm:text-xl md:text-2xl lg:text-6xl mb-4">
            Unlock Your Flexible Learning with Career Ladder
          </h1>

          {/* Sub-Heading 1 */}
          <h2 className="font-sans text-white font-semibold text-sm sm:text-lg md:text-xl lg:text-2xl mb-4">
            Offline and Online Classes. Learn at your place, from anywhere. Start your learning journey today.
          </h2>

          {/* Sub-Heading 2 */}
          <p className="font-sans text-white font-medium text-sm sm:text-lg md:text-xl lg:text-2xl mb-4">
            100% Placement Assistance with Every Program!
          </p>

          {/* Call to Action Button */}
          <Link to="/contact">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-full text-sm sm:text-lg md:text-2xl lg:text-3xl font-serif font-semibold transform hover:scale-110 transition-all duration-300 ease-in-out mt-2 sm:mt-4 lg:mt-8 shadow-md">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const HeroPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeroOptimized />
    </Suspense>
  );
};

export default HeroPage;
