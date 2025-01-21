import React, { useState, useEffect, useRef } from 'react';
import { FaRobot } from 'react-icons/fa'; // AI chatbot icon

// ChatbotButton Component
function ChatbotButton() {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: 'Hi! How can I assist you today?', sender: 'bot' },
    ]);
    const chatWindowRef = useRef(null);

    const handleChatToggle = () => {
        setIsChatOpen(!isChatOpen);
    };

    // Close the chat box when clicking outside of it
    const handleClickOutside = (event) => {
        if (chatWindowRef.current && !chatWindowRef.current.contains(event.target)) {
            setIsChatOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleUserMessage = (message) => {
        const newMessages = [...messages, { text: message, sender: 'user' }];
        setMessages(newMessages);

        // Simulate an AI response after a delay
        setTimeout(() => {
            const botResponse = getBotResponse(message);
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: botResponse.text, sender: 'bot', options: botResponse.options },
            ]);
        }, 1000);
    };

    const getBotResponse = (message) => {
        // Convert user input to lowercase to handle case insensitivity
        const userMessage = message.toLowerCase();

        // Simulate bot responses based on user input
        const responses = {
            'hello': { text: 'Welcome to Career Ladder Software Training Institute. How can I assist you today?', options: ['View Courses', 'Course Fee', 'Contact Us'] },
            'view courses': { 
                text: 'We offer the following courses:', 
                options: [
                    'Data Science',
                    'Data Analytics',
                    'Digital Marketing',
                    'Full-Stack Development (Java & Python)',
                    'Business Analytics',
                    'DevOps',
                    'PCB Design'
                ] 
            },
            'course fee': { text: 'Special Offer: Enroll now and get up to 30% OFF! Would you like to know about flexible payment plans?', options: ['Yes, tell me more!', 'No, thanks'] },
            'contact us': { text: 'If you need assistance, feel free to reach out to us:', options: ['Call us at +91 8807148869', 'Email us at info@careerladderedu.com', 'Visit us at Career Ladder Software Training Institute, Monday to Saturday, 9 AM to 7 PM'] },
        };

        // Return the response or fallback message if no match
        return responses[userMessage] || { text: 'please provide your number.', options: [] };
    };

    const handleOptionClick = (option) => {
        // When an option is clicked, treat it as a new message and trigger a bot response
        handleUserMessage(option);
    };

    return (
        <div>
            {/* Floating Chatbot Button */}
            <div className="fixed bottom-20 right-10 z-50 mb-12">
                <button
                    onClick={handleChatToggle}
                    className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full shadow-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-700 transition duration-300"
                >
                    <FaRobot size={40} />
                </button>
            </div>

            {/* Chat Window (Show or hide based on state) */}
            {isChatOpen && (
                <div
                    ref={chatWindowRef}
                    className="fixed bottom-20 right-5 w-96 bg-white p-6 rounded-lg shadow-2xl z-50 mb-12 mr-20"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                    <div className="h-72 overflow-y-scroll mb-4 space-y-3">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex ${msg.sender === 'bot' ? 'flex-row' : 'flex-row-reverse'} items-start`}
                            >
                                <div
                                    className={`text-sm p-4 ${msg.sender === 'bot' ? 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-600' : 'bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800'} rounded-lg shadow-md w-max`}
                                    style={{ maxWidth: '80%', wordWrap: 'break-word' }}
                                >
                                    <strong>{msg.sender === 'bot' ? 'Bot' : 'You'}:</strong> {msg.text}
                                </div>
                            </div>
                        ))}

                        {/* Display Options as part of bot messages */}
                        {messages.length > 0 && messages[messages.length - 1].options && (
                            <div className="flex flex-col space-y-2 mt-2">
                                {messages[messages.length - 1].options.map((option, index) => (
                                    <div key={index} className="flex flex-row space-x-2">
                                        <div className="w-full">
                                            <button
                                                onClick={() => handleOptionClick(option)}
                                                className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                                            >
                                                {option}
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="flex">
                        <input
                            type="text"
                            className="flex-1 p-4 border border-gray-300 rounded-l-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Type a message..."
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && e.target.value.trim()) {
                                    handleUserMessage(e.target.value);
                                    e.target.value = ''; // Clear input
                                }
                            }}
                        />
                        <button
                            onClick={() => handleUserMessage(document.querySelector('input').value)}
                            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 rounded-r-lg shadow-md hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-700 transition duration-300"
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ChatbotButton;
