import React, { useState, useEffect, useRef } from 'react';

import instagram from '../../asset/icon/insta2.png';
import facebook from '../../asset/icon/facebook2.png';
import linkedin from '../../asset/icon/icon-removebg-preview.png';
import './nav.css';
import contact from "../../asset/nav/contact.png";
import youtube from "../../asset/icon/youtube.png";
import contactWebP from '../../asset/nav/contact.webp';  
import mailWebP from '../../asset/nav/mail.webp';        

function Nav() {
  const [menuDrop, setMenuDrop] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  return (
    <div className="font-sans">
      {/* Header */}
      <div className="bg-gradient-to-r from-white to-white py-2 px-3 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 md:space-y-0">
        {/* Contact Info and Social Icons */}
        <div className="hidden sm:flex gap-6 sm:flex-row flex-col items-center sm:items-start">
          {/* Contact Info */}
          <div className="flex pt-2 ml-4 items-center gap-2">
            <img src={contactWebP} height={"40px"} width="40px" alt="contact-icon" />
            <h3 className="text-sm sm:text-lg md:text-xl text-black font-bold mt-2 font-sans">+91 8807148869 / +91 8807028071</h3>
          </div>
          {/* Email Info */}
          <div className="flex gap-1 pt-2 items-center">
            <img src={mailWebP} height={"40px"} width="40px" alt="contact-icon" />
            <h3 className="text-sm sm:text-lg md:text-xl text-black font-bold font-sans mt-2">info@careerladderedu.com</h3>
          </div>
        </div>

        {/* For mobile view - Contact Number */}
        <div className="block sm:hidden text-center flex items-center justify-center gap-2 mt-0">
          <img src={contact} height={"40px"} width="40px" alt="contact-icon " />
          <h3 className="text-lg sm:text-md md:text-sm text-black font-bold font-sans mt-2">+91 8807148869 / +91 8807028071</h3>
        </div>

        {/* Social Icons */}
        <div className="hidden sm:flex items-center justify-center gap-4">
          <p className="text-black font-bold text-sm sm:text-lg md:text-xl font-sans mt-4">Follow Us :</p>
          <div className="flex items-center justify-center gap-4">
            <a href="https://www.instagram.com/careerladder_coimbatore/" className="flex justify-center items-center">
              <img className="h-6 w-6 hover:opacity-80 transition-opacity duration-300" src={instagram} alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/company/97436723/admin/dashboard/" className="flex justify-center items-center">
              <img className="h-6 w-6 hover:opacity-80 transition-opacity duration-300" src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61552807079875/" className="flex justify-center items-center">
              <img className="h-6 w-6 hover:opacity-80 transition-opacity duration-300" src={facebook} alt="Facebook" />
            </a>
            <a href="https://www.youtube.com/@CareerLadder-CL" className="flex justify-center items-center">
              <img className="h-6 w-6 hover:opacity-80 transition-opacity duration-300" src={youtube} alt="Youtube" />
            </a>
          </div>
        </div>
      </div>

      {/* For smaller screen sizes, add a responsive header with a hamburger menu if needed */}
    </div>
  );
}

export default Nav;
