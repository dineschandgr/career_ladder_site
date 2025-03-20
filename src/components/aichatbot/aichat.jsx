import React, { useState, useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa'; // Close Icon from react-icons

function ChatbotButton() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hi! What is your name?', sender: 'bot' },
  ]);
  const [newMessageCount, setNewMessageCount] = useState(0);
  const [userDetails, setUserDetails] = useState({ name: '', phone: '' });
  const [userMessage, setUserMessage] = useState('');
  const [result, setResult] = useState('');
  const [step, setStep] = useState(0); // To track which step of contact info collection we are in
  const chatWindowRef = useRef(null);

  // Automatically open the chat window when the component is mounted
  useEffect(() => {
    setIsChatOpen(true);
  }, []);

  // Handle open/close of the chat window
  const handleChatToggle = () => {
    setIsChatOpen((prevState) => !prevState);
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
      let botResponse = '';
      let formData = {};

      if (step === 0) {
        // First step: Name input
        setUserDetails((prevDetails) => ({ ...prevDetails, name: message.trim() }));
        botResponse = 'Great! Now, please provide your phone number .';
        setStep(1); // Move to next step after collecting name
      } else if (step === 1) {
        // Second step: Phone number validation
        const phonePattern = /^[0-9+()\- ]+$/; // Only allow numbers, spaces, +, (, ), -
        if (phonePattern.test(message)) {
          setUserDetails((prevDetails) => ({ ...prevDetails, phone: message.trim() }));
          formData = { name: userDetails.name, phone: message.trim() };
          botResponse = 'Thanks! Your information has been received. Let\'s start with some questions!';
          setStep(2); // Proceed to the Q&A session
          sendFormDataToWeb3Flow(formData); // Send the data to Web3Flow after this step
        } else {
          botResponse = 'Please provide a valid phone number (only numbers and special characters like +, -, or () are allowed).';
        }
      } else if (step === 2) {
        // Q&A related to software training institute
        if (message.toLowerCase().includes('training') || message.toLowerCase().includes('course')) {
          botResponse = 'We offer courses in Web Development, Data Science, Digital Marketing, and more! Which course are you interested in?';
        } else if (message.toLowerCase().includes('web development')) {
          botResponse = 'Our Web Development course covers HTML, CSS, JavaScript, and frameworks like React. The course duration is 3 months. Would you like to know the fees?';
        } else if (message.toLowerCase().includes('data science')) {
          botResponse = 'The Data Science course includes Python, Machine Learning, and AI fundamentals. It lasts for 4 months. Would you like to know the fees?';
        } else if (message.toLowerCase().includes('digital marketing')) {
          botResponse = 'Our Digital Marketing course covers SEO, Google Ads, and Social Media Marketing. It takes 2 months to complete. Do you need more details on this course?';
        } else if (message.toLowerCase().includes('fees')) {
          botResponse = 'Our fees vary by course, but generally they range from 10000 to 40000. Would you like to know about the upcoming batches or schedules?';
        } else if (message.toLowerCase().includes('schedule') || message.toLowerCase().includes('batch')) {
          botResponse = 'We have batches starting every month for most of our courses. Would you like to register for a batch?';
        } else {
          botResponse = 'I can help you with course details, fees, schedules, and more! Please let me know which course you are interested in.';
        }
      } else {
        botResponse = 'Something went wrong. Please try again.';
      }

      // Update messages with bot response
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botResponse, sender: 'bot' },
      ]);
      setNewMessageCount((prevCount) => prevCount + 1);
    }, 1000);
  };

  // Send form data to Web3Flow API
  const sendFormDataToWeb3Flow = async (formData) => {
    setResult('Sending...');

    const form = new FormData();
    form.append('access_key', '14e6eaf5-7e0f-4f80-8a0a-75a7fc675c8a'); // Your Web3Flow access key

    Object.keys(formData).forEach((key) => {
      form.append(key, formData[key]);
    });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: form,
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

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent newline in the input field
      handleUserMessage(userMessage);
    }
  };

  // Clear chat history
  const clearChat = () => {
    setMessages([{ text: 'Hi! What is your name?', sender: 'bot' }]);
    setStep(0);
    setNewMessageCount(0);
  };

  // Exit the chat window and reset conversation
  const exitChat = () => {
    setIsChatOpen(false);
    setMessages([{ text: 'Hi! What is your name?', sender: 'bot' }]);
    setStep(0);
    setNewMessageCount(0);
  };

  return (
    <div>
      {/* Floating Chatbot Button */}
      <div className="fixed bottom-16 right-9 z-50 mb-12 sm:right-4 sm:bottom-16 md:right-8 md:bottom-16 lg:right-8 lg:bottom-16">
        <button
          onClick={handleChatToggle}
          className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-full shadow-lg hover:bg-gradient-to-r hover:from-blue-700 hover:to-indigo-800 transition duration-300 transform hover:scale-110"
        >
          <img
            src="https://cdn-icons-png.freepik.com/256/15692/15692984.png?ga=GA1.1.1190226747.1734413316&semt=ais_hybrid" // Replace this with the path to your custom woman's AI icon
            alt="AI"
            className="m-auto w-10 h-10 object-cover"
          />
          {newMessageCount > 0 && (
            <div className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              {newMessageCount}
            </div>
          )}
        </button>
      </div>

      {/* Chat Window */}
      {isChatOpen && (
        <div
          ref={chatWindowRef}
          className="fixed bottom-16 right-6 w-[60%] sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[20%] p-6 rounded-2xl shadow-lg z-50 mb-12 mr-20 transform transition-all duration-300 ease-in-out"
          style={{
            backgroundColor: "white",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Close Button */}
          <button
            onClick={exitChat}
            className="absolute top-2 right-2 text-2xl text-blue-600"
          >
            <FaTimes />
          </button>

          {/* Chat */}
          <div className="h-72 sm:h-96 overflow-y-auto mb-4 space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === 'bot' ? 'flex-row' : 'flex-row-reverse'} items-start space-x-2`}>
                <div
                  className={`text-sm p-4 ${msg.sender === 'bot' ? 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-600' : 'bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800'} rounded-lg shadow-md w-max max-w-[80%] break-words`}
                >
                  <strong>{msg.sender === 'bot' ? 'Dinesh' : 'You'}:</strong> {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input Area */}
          <div className="flex items-center space-x-2 mt-4">
            <input
              type="text"
              id="userMessage"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              placeholder="Type your message"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onKeyDown={handleKeyPress} // Detect Enter key press
            />
            <button
              onClick={() => handleUserMessage(userMessage)}
              className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-3 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-blue-700 hover:to-indigo-800 transition duration-300"
            >
              Send
            </button>
          </div>

          {/* Commands */}
          <div className="mt-4">
            <button
              onClick={clearChat}
              className="text-sm text-white mr-4"
            >
              Clear Chat
            </button>
            <button
              onClick={exitChat}
              className="text-sm text-white"
            >
              Exit Chat
            </button>
          </div>

          {/* Result Message */}
          {result && <p className="mt-4 text-center text-sm text-white-600">{result}</p>}
        </div>    
      )}
    </div>
  );
}

export default ChatbotButton;
