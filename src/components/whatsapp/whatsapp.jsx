import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon from react-icons

// WhatsAppButton Component
function WhatsAppButton() {
  return (
    <div className="fixed bottom-10 right-9 z-50">
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/+918870275880"  // Replace with your WhatsApp phone number
        target="_blank"  // Opens in a new tab
        rel="noopener noreferrer"  // Security best practice
        className="flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      >
        <FaWhatsapp size={120} className="sm:size-100 md:size-100 lg:size-100" /> {/* WhatsApp Icon */}
      </a>
    </div>
  );
}

export default WhatsAppButton;
