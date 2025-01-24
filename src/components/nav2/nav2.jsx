import React, { useState, useRef } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import Main from "../../asset/icon/main.png"; // Logo

function Nav2() {
  const [dropdown, setDropdown] = useState(false);
  const buttonRef = useRef();

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div>
      {/* Full-Page Hero Section with a Single Background Image and Custom Height */}
      <div
        className="relative w-full h-[15vh] sm:h-[15vh] md:h-[60vh] lg:h-[15vh] bg-cover bg-center bg-gray-100 shadow-md"
        
      >
        {/* Navigation */}
        <nav className="text-black p-4 sm:px-6 flex justify-between items-center sm:space-x-8 absolute top-0 left-0 right-0 z-10">
          {/* Logo */}
          <Link to="/">
            <img className="h-[8vh] sm:h-[10vh] md:h-[10vh] rounded-2xl mb-0" src={Main} alt="Logo" />
          </Link>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex space-x-8 ml-auto">
            <Link
              to="/"
              className="px-6 py-3 rounded-md cursor-pointer text-sm sm:text-lg text-black font-bold hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400 transition duration-300"
            >
              HOME
            </Link>
            <Link
              to="/courses"
              className="px-6 py-3 rounded-md cursor-pointer text-sm sm:text-lg text-black font-bold hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400 transition duration-300"
            >
              COURSES
            </Link>
            <Link
              to="/blog"
              className="px-6 py-3 rounded-md cursor-pointer text-sm sm:text-lg text-black font-bold hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400 transition duration-300"
            >
              BLOG
            </Link>
            <Link
              to="/team"
              className="px-6 py-3 rounded-md cursor-pointer text-sm sm:text-lg text-black font-bold hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400 transition duration-300"
            >
              TEAM
            </Link>
            <Link
              to="/placement"
              className="px-6 py-3 rounded-md cursor-pointer text-sm sm:text-lg text-black font-bold hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400 transition duration-300"
            >
              PLACEMENT
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-md cursor-pointer text-sm sm:text-lg text-black font-bold hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400 transition duration-300"
            >
              CONTACT
            </Link>
          </div>

          {/* Mobile Navigation (Hamburger menu) */}
          <div className="lg:hidden flex justify-center items-center ml-auto">
            <button
              onClick={toggleDropdown}
              className="text-black text-3xl"
              ref={buttonRef}
            >
              ☰
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {dropdown && (
          <div className="lg:hidden absolute top-[80px] right-0 bg-gray-200 shadow-lg w-[250px] rounded-lg z-10 ">
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
      </div>
    </div>
  );
}

export default Nav2;