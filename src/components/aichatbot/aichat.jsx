import React, { useState, useEffect, useRef } from 'react';
import { FaRobot } from 'react-icons/fa';

function ChatbotButton() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hi! How can I assist you today?', sender: 'bot' },
  ]);
  const [newMessageCount, setNewMessageCount] = useState(0);
  const [userDetails, setUserDetails] = useState({ name: '', phone: '' });
  const [userMessage, setUserMessage] = useState('');
  const [result, setResult] = useState('');
  const [activeTab, setActiveTab] = useState('chat'); // New tab state
  const chatWindowRef = useRef(null);

  // Handle open/close of the chat window
  const handleChatToggle = () => {
    setIsChatOpen(prevState => !prevState);
    if (!isChatOpen) {
      setNewMessageCount(0); // Reset new messages counter when chat is opened
    }
  };

  // Close the chat box when clicking outside of it
  const handleClickOutside = (event) => {
    if (chatWindowRef.current && !chatWindowRef.current.contains(event.target)) {
      setIsChatOpen(false);
      setNewMessageCount(0); // Reset new messages counter when chat is closed
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle user messages
  const handleUserMessage = (message) => {
    if (!message.trim()) return; // Ignore empty messages
    const newMessages = [...messages, { text: message, sender: 'user' }];
    setMessages(newMessages);
    setUserMessage('');

    setTimeout(() => {
      const botResponse = getBotResponse(message);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botResponse.text, sender: 'bot', options: botResponse.options },
      ]);
      setNewMessageCount((prevCount) => prevCount + 1);
    }, 1000);
  };

  const getBotResponse = (message) => {
    const userMessage = message.toLowerCase();
    const responses = {
      hello: { text: 'Welcome to Career Ladder Software Training Institute. How can I assist you today?', options: ['View Courses', 'Course Fee', 'ContactUs'] },
      course: { text: 'We offer the following courses:', options: ['Data Science', 'Data Analytics', 'Digital Marketing', 'Full-Stack Development (Java & Python)', 'Business Analytics', 'DevOps', 'PCB Design'] },
      'course fee': { text: 'Special Offer: Enroll now and get up to 30% OFF! Would you like to know about flexible payment plans?', options: ['Yes, tell me more!', 'No, thanks'] },
      contactus: { text: 'If you need assistance, feel free to reach out to us:', options: ['Call us at +91 8807148869', 'Email us at info@careerladderedu.com', 'Visit us at Career Ladder Software Training Institute, Monday to Saturday, 9 AM to 7 PM'] },
    };
    return responses[userMessage] || { text: 'Please provide your number.', options: [] };
  };

  const handleOptionClick = (option) => {
    handleUserMessage(option);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');

    const formData = new FormData();
    formData.append('access_key', 'f7c229ec-ae95-41c2-bc0f-16ec3b301333'); // Replace with your actual Web3Forms access key
    formData.append('name', userDetails.name);
    formData.append('phone', userDetails.phone);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setResult('Your details have been submitted successfully!');
      } else {
        setResult('Failed to send your details.');
      }
    } catch (error) {
      setResult('An error occurred while sending your details.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div>
      {/* Floating Chatbot Button */}
      <div className="fixed bottom-16 right-9 z-50 mb-12 sm:right-4 sm:bottom-16 md:right-8 md:bottom-16 lg:right-8 lg:bottom-16">
        <button
          onClick={handleChatToggle}
          className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-full shadow-lg hover:bg-gradient-to-r hover:from-blue-700 hover:to-indigo-800 transition duration-300 transform hover:scale-110"
        >
          <FaRobot size={30} className="m-auto" />
          {newMessageCount > 0 && (
            <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              {newMessageCount}
            </div>
          )}
        </button>
      </div>

      {/* Chat Window */}
      {isChatOpen && (
        <div
          ref={chatWindowRef}
          className="fixed bottom-16 right-6 w-[80] sm:w-[90%] md:w-80 lg:w-80 bg-white p-6 rounded-xl shadow-2xl z-50 mb-12 mr-20 transform transition-all duration-300 ease-in-out"
        >
          {/* Tab Navigation for Chat and Form */}
          <div className="flex space-x-4 mb-4">
            <button
              onClick={() => setActiveTab('chat')}
              className={`w-1/2 p-2 text-center rounded-t-lg ${activeTab === 'chat' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              Chat
            </button>
            <button
              onClick={() => setActiveTab('form')}
              className={`w-1/2 p-2 text-center rounded-t-lg ${activeTab === 'form' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              Submit Details
            </button>
          </div>

          {/* Display Chat or Form based on active tab */}
          {activeTab === 'chat' ? (
            <div className="h-60 sm:h-80 overflow-y-auto mb-4 space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.sender === 'bot' ? 'flex-row' : 'flex-row-reverse'} items-start space-x-2`}>
                  <div
                    className={`text-sm p-4 ${msg.sender === 'bot' ? 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-600' : 'bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800'} rounded-lg shadow-md w-max max-w-[80%] break-words`}
                  >
                    <strong>{msg.sender === 'bot' ? 'Bot' : 'You'}:</strong> {msg.text}
                  </div>
                </div>
              ))}

              {/* Display Options as part of bot messages */}
              {messages.length > 0 && messages[messages.length - 1].options && (
                <div className="flex flex-col space-y-2 mt-4">
                  {messages[messages.length - 1].options.map((option, index) => (
                    <div key={index}>
                      <button
                        onClick={() => handleOptionClick(option)}
                        className="w-full p-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-700 transition duration-300 ease-in-out"
                      >
                        {option}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              {/* User Details Form */}
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  placeholder="Enter your name"
                  value={userDetails.name}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-lg font-medium text-gray-700 mb-2">Phone Number:</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  placeholder="Enter your phone number"
                  value={userDetails.phone}
                  onChange={handleInputChange}
                />
              </div>

              <div className="flex justify-center">
                <button
                  onClick={onSubmit}
                  className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-3 sm:p-4 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-blue-700 hover:to-indigo-800 transition duration-300"
                >
                  Submit
                </button>
              </div>
            </div>
          )}

          {/* Result Message */}
          {result && <p className="mt-4 text-center">{result}</p>}

          {/* Chat Input Area */}
          {activeTab === 'chat' && (
            <div className="flex items-center space-x-2 mt-4">
              <input
                type="text"
                id="userMessage"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                placeholder="Type your message"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
              />
              <button
                onClick={() => handleUserMessage(userMessage)}
                className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-3 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-blue-700 hover:to-indigo-800 transition duration-300"
              >
                Send
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ChatbotButton;
