import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Assets
import data from "../../asset/hero/bg.webp"; // Hero Image
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
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        {/* Meta Tags with Keywords */}
        <meta
          name="description"
          content="Unlock your tech career with CareerLadder. Offering Data Science, Full Stack Development, Digital Marketing, Cyber Security, Automation Testing courses, and more with 100% job assistance. Start learning online and offline today!"
        />
        <meta
          name="keywords"
          content="CareerLadder, Data Science course, Data Analytics course, Full Stack Development course, Digital Marketing course, Cyber Security course, Automation Testing course, Job Assistance, Interview Support, Tech Career, Coimbatore, Best Data Science course, Top Data Analytics course, Best Full Stack Development course, Top Digital Marketing course, Best Cyber Security course, Top Automation Testing course, Certification course, Top Tech Career, Best Certification in Data Science, Best Full Stack Developer course, Online Data Science certification, Best Data Analytics certification, Tech courses near me, Top certification courses in Coimbatore, Industry-leading courses, Career-oriented certification, Job-ready certification, Online course with job assistance, Job support certification"
        />
        <meta name="robots" content="index, follow" />
        {/* Title for the page */}
        <title>CareerLadder - Flexible Learning, Industry-leading Courses & Job Assistance</title>

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Unlock Flexible Learning with CareerLadder" />
        <meta
          property="og:description"
          content="Start your learning journey with CareerLadder. Join our online and offline courses and get 100% placement assistance!"
        />
        <meta property="og:image" content={data} />
        <meta property="og:url" content="https://www.careerladderedu.com" />
        <meta property="og:type" content="website" />

        {/* Preload Resources */}
        <link rel="preload" href={data} as="image" type="image/webp" />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          as="font"
          type="font/woff2"
          crossorigin="anonymous"
        />

        {/* Structured Data (JSON-LD) for better search engine visibility */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "CareerLadder",
              "url": "https://www.careerladderedu.com",
              "logo": live,
              "sameAs": [
                "https://www.facebook.com/careerladder",
                "https://www.linkedin.com/company/careerladder"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91 8807148869/+91 8807028071",
                "contactType": "Customer Service"
              }
            })
          }}
        />
      </Helmet>

      {/* Full-Page Hero Section with a Single Background Image */}
      <div
        className="relative w-full h-[80vh] flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${data})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
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

          {/* Desktop Navigation Menu with background rectangle */}
          <div className="hidden md:flex bg-gray-800 rounded-2xl p-3">
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
              to="/services"
              className="px-6 py-3 rounded-md cursor-pointer text-sm sm:text-sm text-white font-bold hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400 transition duration-300"
            >
              SERVICES
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
              to="/services"
              className="block px-6 py-3 mt-2 text-sm font-bold text-black hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400"
            >
              Services
            </Link>
            <Link
              to="/blog"
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

        {/* Hero Section Content */}
        <div className="relative w-full h-[80vh] flex flex-col justify-center items-center">
          {/* Desktop View: Horizontal Contact Us Button */}
          <div className="hidden md:flex items-center justify-center absolute bottom-10 w-full">
            <Link
              to="/contact"
              className="bg-blue-500 text-white px-10 py-4 rounded-full font-semibold hover:bg-blue-700 transition duration-300 mx-4"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile View Content */}
          <div className="block md:hidden w-full py-16 px-6 absolute top-14 left-1/2 transform -translate-x-1/2">
            {/* Content for Career Ladder */}
            <div className="w-full bg-white p-10 rounded-lg opacity-90 mb-4">
              <h1 className="font-serif text-black font-extrabold text-sm sm:text-lg mb-2">
                Unlock Your Learning
              </h1>
              <h2 className="font-sans text-black font-semibold text-xs sm:text-sm mb-2">
                Learn online or offline, anytime, anywhere.
              </h2>
              <p className="font-sans text-black font-medium text-xs sm:text-sm">
                100% Placement Assistance with Every Program!
              </p>
            </div>

            {/* Content for Services */}
            <div className="w-full bg-white p-10 rounded-lg opacity-90 mb-4">
              <h1 className="font-serif text-black font-extrabold text-sm sm:text-lg mb-2">
                Business Services
              </h1>
              <h2 className="font-sans text-black font-semibold text-xs sm:text-sm mb-2">
                Digital Marketing, Web Design, and More.
              </h2>
              <p className="font-sans text-black font-medium text-xs sm:text-sm">
                <Link to="/services" className="text-blue-500 hover:underline">Learn more about our services.</Link>
              </p>
            </div>

            {/* Placement Assistance */}
            <div className="w-full bg-purple-200 p-10 rounded-lg opacity-90">
              <h1 className="font-serif text-black font-extrabold text-sm sm:text-lg mb-2">
                100% Placement Support
              </h1>
              <h2 className="font-sans text-black font-semibold text-xs sm:text-sm mb-2">
                Secure Your Future with Our Expert Placement Support!
              </h2>
              <p className="font-sans text-black font-medium text-xs sm:text-sm">
                <Link to="/placement" className="text-blue-500 hover:underline">Explore Placement Assistance</Link>
              </p>
            </div>
          </div>
        </div>
           {/* Desktop View Content */}
           <div className="hidden md:flex md:justify-center md:items-center md:space-x-8 md:absolute md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 w-full">
            {/* Content Block 1: Flexible Learning */}
            <div className="flex-1 max-w-md h-[400px] bg-blue-200 p-4 rounded-lg opacity-90">
              <div className="flex items-center mb-4">
                <i className="fas fa-laptop-house text-3xl mr-3 text-blue-600"></i>
                <h1 className="font-serif text-black font-extrabold text-lg sm:text-xl md:text-2xl lg:text-4xl">
                  Unlock Your Flexible Learning
                </h1>
              </div>
              <h2 className="font-sans text-black font-semibold text-sm sm:text-lg md:text-xl lg:text-2xl mb-4">
                Offline and Online Classes. Learn at your place, from anywhere. Start your learning journey today.
              </h2>
              <p className="font-sans text-black font-medium text-sm sm:text-lg md:text-xl lg:text-2xl mb-4">
                100% Placement Assistance with Every Program!
              </p>
            </div>

            {/* Content Block 2: Elevate Your Business */}
            <div className="flex-1 max-w-md h-[400px] bg-white p-4 rounded-lg opacity-90">
              <div className="flex items-center mb-4">
                <i className="fas fa-chart-line text-3xl mr-3 text-blue-600"></i>
                <h1 className="font-serif text-black font-extrabold text-lg sm:text-xl md:text-2xl lg:text-4xl">
                   Our Services
                </h1>
              </div>
              <h2 className="font-sans text-black font-semibold text-sm sm:text-lg md:text-xl lg:text-2xl mb-4">
                Offering Expert Services in Digital Marketing, Web Design, Web Development & E-commerce Solutions.
              </h2>
              <p className="font-sans text-black font-medium text-sm sm:text-lg md:text-xl lg:text-2xl mb-4">
                Let's Build Your Online Presence with Customized Solutions!
              </p>
            </div>

            {/* Content Block 3: Placement Support */}
            <div className="flex-1 max-w-md h-[400px] bg-purple-200 p-4 rounded-lg opacity-90">
              <div className="flex items-center mb-4">
                <i className="fas fa-briefcase text-3xl mr-3 text-blue-600"></i>
                <h1 className="font-serif text-black font-extrabold text-lg sm:text-xl md:text-2xl lg:text-4xl">
                  Get 100% Placement Support
                </h1>
              </div>
              <h2 className="font-sans text-black font-semibold text-sm sm:text-lg md:text-xl lg:text-2xl mb-4">
                We Provide Interview Training, Resume Building, and Job Assistance.
              </h2>
              <p className="font-sans text-black font-medium text-sm sm:text-lg md:text-xl lg:text-2xl mb-4">
                Secure Your Future with Our Expert Placement Support!
              </p>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default HeroOptimized;
