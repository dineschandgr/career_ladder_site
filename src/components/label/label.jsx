import React, { useState } from 'react';

function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle the modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex justify-center items-center bg-gradient-to-r to-white">
      <div className="lg:w-4/5 w-full text-center mt-[50px]"> {/* Added margin to push content down */}

        {/* Floating Notification Bar at the top */}
        <div
          style={{
            backgroundColor: '#1D4ED8',
            color: 'white',
            padding: '8px 0',
            textAlign: 'center',
            fontWeight: 'bold',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            boxSizing: 'border-box', // Ensures padding doesn't cause overflow
          }}
        >
          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-sans">
            {/* Mobile view content */}
            <span className="block sm:hidden">
              Software & Hardware Training Institute 
            </span>
            
            {/* Desktop and larger views content */}
            <span className="hidden sm:block">
              Software & Hardware Training Institute | Up to 30% OFFER for all IT Courses! | We provide services like Digital Marketing, Web Development, Web Design.
            </span>
          </p>
        </div>

      </div>
    </div>
  );
}

export default About;
