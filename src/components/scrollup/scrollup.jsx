import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Import the Font Awesome up arrow icon

const ScrollUpButton = () => {
  const [showButton, setShowButton] = useState(false);

  // Show the button when the user scrolls down a certain distance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true); // Show the button after scrolling down 300px
      } else {
        setShowButton(false); // Hide the button if the user is at the top
      }
    };

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling effect
    });
  };

  return (
    <div className=" bg-gray-100">
      {/* Scroll to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-12 w-12 h-12 left-8 flex items-center justify-center bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition duration-300 transform hover:scale-110"
        >
          <FaArrowUp size={24} color="white" />
        </button>
      )}
    </div>
  );
};

export default ScrollUpButton;
