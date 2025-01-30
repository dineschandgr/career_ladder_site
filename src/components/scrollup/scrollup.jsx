import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Import the Font Awesome up arrow icon

const ScrollToTopOnArrowPress = () => {
  const [showButton, setShowButton] = useState(false);

  // Show button only when user scrolls down
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

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to the top when the icon is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="h-screen bg-black-100">
      <div className="h-[150vh] p-8">
        <h1 className="text-4xl font-bold text-center text-blue-600">
          Scroll Down and Press Up Arrow to Scroll to Top
        </h1>
        <p className="text-center mt-4">
          Scroll down and use the button to scroll back to the top of the page!
        </p>
      </div>

      {/* Scroll to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-110"
        >
          <FaArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopOnArrowPress;
