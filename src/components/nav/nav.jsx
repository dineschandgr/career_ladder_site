    import React, { useState, useEffect, useRef } from 'react';
    import { Link } from 'react-router-dom';
    import main from '../../asset/icon/main.png';
    import instagram from '../../asset/icon/insta2.png';
    import facebook from '../../asset/icon/facebook2.png';
    import linkedin from '../../asset/icon/icon-removebg-preview.png';
    import youtube from '../../asset/icon/youtube.png';
    import './nav.css';

    
    function DropRight({ menuList, toggleSubTopic }) {
      return (
        <div className="absolute bg-white top-full right-20 ml-25 w-[250px] z-10 flex flex-col rounded-xl shadow-lg p-4 border-2 border-gradient-to-r from-red-500 to-red-700">
          <div className="flex flex-col gap-2">
            {menuList.map((data, index) => (
              <h6
                key={index}
                className="text-lg font-bold text-white cursor-pointer text-center hover:text-red-500 py-2 px-4 bg-gradient-to-r from-black-200 to-red-700 rounded-md"
                onClick={() => toggleSubTopic(index)}
              >
                {data.topic}
              </h6>
            ))}
          </div>

          {menuList.map((data, index) => (
            <div key={index}>
              {data.isActive && (
                <ul className="flex flex-col gap-0 mt-0">
                  {data.subTopics.map((sub, index1) => (
                    <li key={index1}>
                      <Link to={sub.path}>
                        <p className="p-4 rounded-xl text-sm font-bold text-black hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400 text-center">
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
      const [dropdown, setDropdown] = useState(false);  // Controls the entire mobile menu
      const [activeIndex, setActiveIndex] = useState(null);  // Tracks active course topic
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
        if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
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
          <div className="bg-gradient-to-r from-black to-violet-500 p-3 md:p-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex gap-4 sm:flex-row flex-col items-center sm:items-start">
              <div className="flex pt-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <h3 className="text-base text-white font-bold">+91 8807148869 / 8807028071</h3>
              </div>
              <div className="flex gap-1 pt-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <h3 className="text-base text-white font-bold">gayathri.it.tce@gmail.com</h3>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center justify-center gap-4">
              <p className="text-white font-bold text-lg">Follow Us</p>
              <div className="flex items-center justify-center gap-4">
                <a href="https://www.instagram.com/itech_industrial_training/" className="flex justify-center items-center">
                  <img className="h-8 w-8" src={instagram} alt="Instagram" />
                </a>
                <a href="https://www.linkedin.com/in/itech-industrial-training-021b52230/" className="flex justify-center items-center">
                  <img className="h-8 w-8" src={linkedin} alt="LinkedIn" />
                </a>
                <a href="https://www.facebook.com/itechindustrialtraining" className="flex justify-center items-center">
                  <img className="h-9 w-8" src={facebook} alt="Facebook" />
                </a>
                <a href="https://www.youtube.com/@ItechIndustrialTraining" className="flex justify-center items-center">
                  <img className="h-10 w-8" src={youtube} alt="YouTube" />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="bg-gradient-to-r from-white to-red-500 text-white p-4 sm:px-6 flex justify-between items-center sm:space-x-8">
            <Link to="/">
              <img className="max-h-20 sm:max-h-24 md:max-h-28 lg:max-h-32 w-auto" src={main} alt="Logo" />
            </Link>

            {/* Mobile Navigation */}
            <div className="lg:hidden flex justify-center items-center">
              <button ref={buttonRef} onClick={toggleDropdown} className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h18M3 12h18M3 19h18" />
                </svg>
              </button>

              {dropdown && (
                <div ref={dropdownRef} className="absolute bg-white z-20 flex flex-col gap-2 items-center p-4 mobile-dropdown">
                  <ul className="flex flex-col gap-4 text-center sm:text-left w-full">
                    <Link to="/">
                      <li className="px-3 py-2 rounded-md cursor-pointer text-lg sm:text-base text-black font-bold hover:bg-gradient-to-r hover:from-red-600 hover:to-red-400">HOME</li>
                    </Link>
                    <Link>
                      <li className="relative cursor-pointer" onClick={handleDropDown}>
                        <span className="px-3 py-2 rounded-md cursor-pointer text-lg sm:text-base text-black font-bold hover:bg-gradient-to-r hover:from-red-600 hover:to-red-400">COURSES</span>
                        {menuDrop && <DropRight menuList={menuList} toggleSubTopic={toggleSubTopic} />}
                      </li>
                    </Link>
                    <Link to="/team">
                      <li className="px-3 py-2 rounded-md cursor-pointer text-lg sm:text-base text-black font-bold hover:bg-gradient-to-r hover:from-red-600 hover:to-red-400">TEAM</li>
                    </Link>
                    <Link to="/placement">
                      <li className="px-3 py-2 rounded-md cursor-pointer text-lg sm:text-base text-black font-bold hover:bg-gradient-to-r hover:from-red-600 hover:to-red-400">PLACEMENT</li>
                    </Link>
                    <Link to="/contact">
                      <li className="px-3 py-2 rounded-md cursor-pointer text-lg sm:text-base text-black font-bold hover:bg-gradient-to-r hover:from-red-600 hover:to-red-400">CONTACT</li>
                    </Link>
                  </ul>
                </div>
              )}
            </div>

            {/* Desktop and Tablet Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="px-3 py-2 rounded-md cursor-pointer text-lg sm:text-base text-white font-bold hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400">HOME</Link>
              <div className="relative">
                <span onClick={handleDropDown} className="px-3 py-2 rounded-md cursor-pointer text-lg sm:text-base text-white font-bold hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400">COURSES</span>
                {menuDrop && <DropRight menuList={menuList} toggleSubTopic={toggleSubTopic} />}
              </div>
              <Link to="/team" className="px-3 py-2 rounded-md cursor-pointer text-lg sm:text-base text-white font-bold hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400">TEAM</Link>
              <Link to="/placement" className="px-3 py-2 rounded-md cursor-pointer text-lg sm:text-base text-white font-bold hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400">PLACEMENT</Link>
              <Link to="/contact" className="px-3 py-2 rounded-md cursor-pointer text-lg sm:text-base text-white font-bold hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400">CONTACT</Link>
            </div>
          </nav>
        </div>
      );
    }

    export default Nav;
      