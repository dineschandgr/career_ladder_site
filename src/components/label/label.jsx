import React, { useState } from 'react';

function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle the modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="   flex justify-center items-center bg-gradient-to-r to-white">
      <div className="lg:w-4/5 w-full text-center">
        {/* Floating "Software Training Institute" Button */}
        <div
          className="fixed bottom-8 left-8 p-3 bg-blue-600 rounded-full shadow-lg cursor-pointer hover:bg-red-500 transition-colors sm:left-8 md:left-10 lg:left-12 "
          onClick={toggleModal}
          title="Software Training Institute"
        >
          <span className="text-white text-xs sm:text-sm md:text-lg lg:text-3xl font-semibold">
            Software Training Institute
          </span> 
        </div>
      </div>
    </div>
  );
}

export default About;
