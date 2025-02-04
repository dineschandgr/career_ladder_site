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
            Software & Hardware Training Institute | Up to 30% OFFER for all IT Courses!
          </p>
        </div>

      

        {/* Modal for email and phone number */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80 sm:w-96">
              <h2 className="text-xl font-bold mb-4">Contact Us</h2>
              <p className="mb-2">
                <strong>Email:</strong> example@email.com
              </p>
              <p>
                <strong>Phone:</strong> +123-456-7890
              </p>
              <button
                className="mt-4 text-white bg-blue-600 px-4 py-2 rounded-lg"
                onClick={toggleModal}
              >
                Close
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default About;
