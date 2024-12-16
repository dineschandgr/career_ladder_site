import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import main from '../../asset/icon/main.png';
import instagram from '../../asset/icon/insta2.png';
import facebook from '../../asset/icon/facebook2.png';
import linkedin from '../../asset/icon/icon-removebg-preview.png';
import './nav.css';
import contact from "../../asset/nav/contact.png";
import mail from "../../asset/nav/mail.png";

function DropRight({ menuList, toggleSubTopic }) {
  return (
    <div className="absolute bg-white top-full left-0 ml-0 w-[250px] z-10 flex flex-col rounded-xl shadow-lg p-2 border-2 border-gradient-to-r from-red-500 to-red-700">
      <div className="flex flex-col gap-2">
        {menuList.map((data, index) => (
          <h6
            key={index}
            className="text-sm font-bold text-black cursor-pointer text-left hover:text-red-500 py-1 px-2 hover:bg-gradient-to-r hover:from-black-200 to-red-700 rounded-md transition-colors duration-300"
            onClick={() => toggleSubTopic(index)}
          >
            {data.topic}
          </h6>
        ))}
      </div>

      {menuList.map((data, index) => (
        <div key={index}>
          {data.isActive && (
            <ul className="flex flex-col gap-0 mt-2">
              {data.subTopics.map((sub, index1) => (
                <li key={index1}>
                  <Link to={sub.path}>
                    <p className="p-3 rounded-xl text-sm font-bold text-black hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400 text-left transition duration-300">
                      {sub.name}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

function Nav() {
  const [menuDrop, setMenuDrop] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const menuList = [
    {
      topic: "Software Development",
      subTopics: [
        { name: "Java", path: "/java" },
        { name: "Full Stack Development-MEAN/MERN stack", path: "/fullstack" },
        { name: "Python", path: "" },
        { name: "Django", path: "" }
      ],
      isActive: activeIndex === 0
    },
    {
      topic: "Industrial Automation",
      subTopics: [
        { name: "PLC & SCADA", path: "" },
        { name: "Electrical Power System Analysis", path: "" }
      ],
      isActive: activeIndex === 1
    },
    {
      topic: "Electronic Design Automation",
      subTopics: [
        { name: "MATLAB", path: "" },
        { name: "Microcontroller", path: "" },
        { name: "Advanced Microcontroller", path: "" }
      ],
      isActive: activeIndex === 2
    },
    {
      topic: "ITIM",
      subTopics: [
        { name: "Network Engineering - Routing and Switching", path: "" },
        { name: "Network Security", path: "" },
        { name: "Ethical Hacking", path: "" }
      ],
      isActive: activeIndex === 3
    },
    {
      topic: "Special Programs",
      subTopics: [
        { name: "Data Science", path: "" },
        { name: "Data Science & Data Engineering using Python", path: "" },
        { name: "Data Science using R", path: "" },
        { name: "Data Analytics using Power BI", path: "" }
      ],
      isActive: activeIndex === 4
    }
  ];

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1024); // 1024px is the breakpoint for tablets and smaller
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); // Check initial window size

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdown(!dropdown); // Toggles the entire menu
  };

  const handleDropDown = () => {
    setMenuDrop(!menuDrop);  // Toggles the dropdown for courses
  };

  const toggleSubTopic = (index) => {
    setActiveIndex(activeIndex === index ? null : index);  // Toggles the subtopics
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current && !dropdownRef.current.contains(event.target) &&
      !buttonRef.current.contains(event.target)
    ) {
      setDropdown(false);  // Closes the menu if clicked outside
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="font-sans">
      {/* Header */}
      <div className="bg-gradient-to-r from-black to-violet-500 py-1 md:py-4 px-4 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 md:space-y-0">
        {/* Contact Info and Social Icons */}
        <div className="hidden sm:flex gap-6 sm:flex-row flex-col items-center sm:items-start">
          <div className="flex pt-2 ml-4" >
            <img src={contact} height={"30px"} width="40px" alt="contact-icon" />
            <h3 className="text-sm sm:text-10 text-white font-bold mt-2">+91 8807148869 / +91 8807028071</h3>
          </div>
          <div className="flex gap-1 pt-2">
            <img src={mail} height={"35px"} width="40px" alt="contact-icon" />
            <h3 className="text-sm sm:text-10 text-white font-bold mt-2" >info@careerladderedu.com</h3>
          </div>
        </div>

        {/* Add phone number and contact icon for mobile view */}
        <div className="block sm:hidden text-center flex items-center justify-center gap-2 mt-0">
          <img src={contact} height={"25px"} width="25px" alt="contact-icon " />
          <h3 className="text-xs sm:text-sm text-white font-bold mt-2">+91 8807148869 / +91 8807028071</h3>
        </div>

        {/* Social Icons */}
        <div className="hidden sm:flex items-center justify-center gap-6">
          <p className="text-white font-bold text-lg mt-3">Follow Us</p>
          <div className="flex items-center justify-center gap-2">
            <a href="https://www.instagram.com/itech_industrial_training/" className="flex justify-center items-center">
              <img className="h-6 w-6 hover:opacity-80 transition-opacity duration-300" src={instagram} alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/in/itech-industrial-training-021b52230/" className="flex justify-center items-center">
              <img className="h-6 w-6 hover:opacity-80 transition-opacity duration-300" src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://www.facebook.com/itechindustrialtraining" className="flex justify-center items-center">
              <img className="h-6 w-6 hover:opacity-80 transition-opacity duration-300" src={facebook} alt="Facebook" />
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gradient-to-r from-white to-red-500 text-white p-4 sm:px-6 flex justify-between items-center sm:space-x-8">
        <Link to="/">
          <img className="max-h-24 sm:max-h-32 md:max-h-40 w-50" src={main} alt="Logo" /> {/* Increased logo size on desktop */}
        </Link>

        {/* Desktop Navigation Menu */}
        <div className="hidden md:flex space-x-8 ml-auto">
          <Link to="/" className="px-6 py-3 rounded-md cursor-pointer text-sm sm:text-15 text-white font-bold hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400 transition duration-300">HOME</Link>
          <div className="relative">
            <span onClick={handleDropDown} className="px-6 py-3 rounded-md cursor-pointer text-sm sm:text-15 text-white font-bold hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400 transition duration-300">COURSES</span>
            {menuDrop && <DropRight menuList={menuList} toggleSubTopic={toggleSubTopic} />}
          </div>
          <Link to="/team" className="px-6 py-3 rounded-md cursor-pointer text-sm sm:text-15 text-white font-bold hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400 transition duration-300">TEAM</Link>
          <Link to="/placement" className="px-6 py-3 rounded-md cursor-pointer text-sm sm:text-15 text-white font-bold hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400 transition duration-300">PLACEMENT</Link>
          <Link to="/contact" className="px-6 py-3 rounded-md cursor-pointer text-sm sm:text-15 text-white font-bold hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400 transition duration-300">CONTACT</Link>
        </div>

        {/* Mobile Navigation (Hamburger menu) */}
        <div className="lg:hidden flex justify-center items-center ml-auto">
          <button 
            onClick={toggleDropdown} 
            className="text-white text-3xl"
            ref={buttonRef}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {dropdown && (
        <div className="lg:hidden absolute top-[110px] right-0 bg-blue-200 shadow-lg w-[250px] rounded-lg z-10">
          <Link to="/" className="block px-6 py-3 mt-0 text-sm font-bold text-black hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400">
            Home
          </Link>
          <div className="relative">
            <span onClick={handleDropDown} className="block px-6 py-3 mt-2 text-sm font-bold text-black hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400">
              Courses
            </span>
            {menuDrop && <DropRight menuList={menuList} toggleSubTopic={toggleSubTopic} />}
          </div>
          <Link to="/team" className="block px-6 py-3 mt-2 text-sm font-bold text-black hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400">
            Team
          </Link>
          <Link to="/placement" className="block px-6 py-3 mt-2 text-sm font-bold text-black hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400">
            Placement
          </Link>
          <Link to="/contact" className="block px-6 py-3 mt-2 text-sm font-bold text-black hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400">
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}

export default Nav;
