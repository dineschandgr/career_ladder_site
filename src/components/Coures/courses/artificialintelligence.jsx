import React from 'react';
import { motion } from 'framer-motion';
// import Nav from '../../nav/nav';
import { Footer } from '../../Footer/Footer';
import Nav2 from '../../nav2/nav2';

const ArtificialIntelligenceBlog = () => {
  return (
    <div className="font-sans bg-white min-h-screen">
      <Nav2 />

      {/* Hero Section */}
      <motion.div
        className="relative bg-[#F3F4F6] px-6 lg:px-16 py-24 mb-16 text-center text-black z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <h1 className="text-5xl lg:text-6xl font-extrabold mb-4 text-blue-600">
          Unlock the Future with Our Artificial Intelligence Course
        </h1>
        <h6 className="text-xl lg:text-2xl font-medium text-gray-700">
          Transform your career with cutting-edge AI technology
        </h6>
      </motion.div>

      {/* Blog Content Section */}
      <div className="px-0 lg:px-16 py-16 max-w-screen-xl mx-auto">
        {/* Introduction */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <h2 className="text-4xl font-extrabold text-blue-600 mb-8">
            What is Artificial Intelligence and Why is It the Future?
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think, learn, and solve problems. It encompasses a range of technologies such as <strong>machine learning</strong>, <strong>natural language processing</strong>, and <strong>computer vision</strong>.
          </p>
          <p className="text-lg mb-8 leading-relaxed text-gray-600">
            As AI continues to transform industries like healthcare, finance, transportation, and entertainment, the demand for skilled professionals in this field is skyrocketing. AI is no longer a futuristic concept—it’s here, and it’s reshaping the way businesses operate.
          </p>
          <motion.img
            src="https://img.freepik.com/free-vector/sphere-grid-wave-with-binary-code-ai-artificial-intelligence-logo-hand-machine-learning-concept_127544-855.jpg?ga=GA1.1.1943424079.1732703638&semt=ais_hybrid" // Free image example (AI concept)
            alt="Artificial Intelligence Concept"
            className="w-full h-80 object-cover rounded-lg mb-8"
          />
        </motion.section>

        {/* Why Choose AI? */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          <h3 className="text-3xl font-bold text-blue-600 mb-8">
            Why Choose Artificial Intelligence?
          </h3>
          <p className="text-lg mb-8 leading-relaxed text-gray-600">
            AI is not just a technological trend; it’s a force that’s revolutionizing every industry. Here are a few reasons why choosing AI can be a game-changer for your career:
          </p>
          <motion.ul
            className="list-disc list-inside text-xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <li><strong>Industry Transformation:</strong> AI is automating processes, improving decision-making, and enabling innovations in various fields like healthcare, finance, and marketing.</li>
            <li><strong>High Demand for AI Experts:</strong> AI professionals are in high demand globally, and this demand is only expected to increase. LinkedIn lists AI-related roles among the fastest-growing job sectors.</li>
            <li><strong>Endless Career Opportunities:</strong> AI offers a wide range of roles including data scientist, AI engineer, machine learning engineer, and AI researcher. The possibilities are limitless.</li>
          </motion.ul>
          <motion.img
            src="https://img.freepik.com/free-photo/cyborg-hand-3d-background-technology-artificial-intelligence_53876-129787.jpg?ga=GA1.1.1943424079.1732703638&semt=ais_hybrid" // Free image example (AI job demand)
            alt="AI Career Opportunities"
            className="w-full h-80 object-cover rounded-lg mb-8"
          />
        </motion.section>

        {/* What Will You Learn? */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <h3 className="text-3xl font-bold text-blue-600 mb-8">
            What Will You Learn in Our Artificial Intelligence Course?
          </h3>
          <p className="text-lg mb-8 leading-relaxed text-gray-600">
            Our AI course is designed to give you a solid foundation in both the theory and practical applications of artificial intelligence. Here are some of the key topics you’ll explore:
          </p>
          <motion.ul
            className="list-disc list-inside text-xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 1 }}
          >
            <li><strong>Foundations of AI:</strong> Learn the basics of AI, machine learning, and deep learning algorithms.</li>
            <li><strong>Machine Learning Algorithms:</strong> Gain hands-on experience in building and training machine learning models using popular algorithms such as regression, classification, and clustering.</li>
            <li><strong>Natural Language Processing:</strong> Explore how machines understand and interpret human language, enabling applications like chatbots, voice assistants, and sentiment analysis.</li>
            <li><strong>Computer Vision:</strong> Learn the fundamentals of computer vision and how AI can be used to analyze images and videos.</li>
            <li><strong>Reinforcement Learning:</strong> Understand how machines can learn from experience and optimize decision-making through trial and error.</li>
            <li><strong>AI Ethics:</strong> Study the ethical considerations surrounding AI, such as bias, transparency, and accountability in AI systems.</li>
          </motion.ul>
          <motion.img
            src="https://img.freepik.com/free-vector/artificial-intelligence-ai-robot-server-room-digital-technology-banner-computer-equipment_39422-768.jpg?ga=GA1.1.1943424079.1732703638&semt=ais_hybrid" // Free image example (Learning AI)
            alt="Learning AI"
            className="w-full h-80 object-cover rounded-lg mb-8"
          />
        </motion.section>

        {/* Tools Used in AI */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 1 }}
        >
          <h3 className="text-3xl font-bold text-blue-600 mb-8">
            Tools Used in Artificial Intelligence
          </h3>
          <p className="text-lg mb-8 leading-relaxed text-gray-600">
            AI professionals use a range of tools to build, train, and deploy AI models. Below are some of the essential tools covered in our course:
          </p>
          <div className="flex justify-around items-center mb-12">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4, duration: 1 }}
            >
              <img src="https://cdn-icons-png.freepik.com/256/5968/5968350.png?ga=GA1.1.2056715411.1734277242&semt=ais_hybrid" alt="Python" className="w-20 h-20 mb-4 mx-auto" />
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.7, duration: 1 }}
            >
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgSo-NtGvOfs2VdCnLJTVhsQ-6UqjxlZgiVw&s" alt="TensorFlow" className="w-20 h-20 mb-4 mx-auto" />
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 1 }}
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Keras_logo.svg/1200px-Keras_logo.svg.png" alt="Keras" className="w-20 h-20 mb-4 mx-auto" />
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.3, duration: 1 }}
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d2/OpenCV_logo_black.svg" alt="OpenCV" className="w-20 h-20 mb-4 mx-auto" />
            </motion.div>
          </div>
        </motion.section>

        {/* How This Course Can Change Your Career */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.6, duration: 1 }}
        >
          <h3 className="text-3xl font-bold text-blue-600 mb-8">
            How This Course Can Change Your Career
          </h3>
          <p className="text-lg mb-8 leading-relaxed text-gray-600">
            After completing this course, you’ll be well-equipped to work in the rapidly growing field of AI. You’ll have the skills to develop AI models, implement machine learning algorithms, and contribute to AI-driven innovations across industries.
          </p>
        </motion.section>

        {/* Who Should Take This Course? */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.9, duration: 1 }}
        >
          <h3 className="text-3xl font-bold text-blue-600 mb-8">
            Who Should Take This Course?
          </h3>
          <p className="text-lg mb-8 leading-relaxed text-gray-600">
            This course is perfect for anyone eager to explore the exciting world of Artificial Intelligence and machine learning. Whether you're an aspiring AI engineer, a software developer, or a data scientist, this course will help you advance your career in AI.
          </p>
          <motion.ul
            className="list-disc list-inside text-xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.2, duration: 1 }}
          >
            <li><strong>Aspiring AI Engineers:</strong> If you want to build intelligent systems and AI models, this course is designed for you.</li>
            <li><strong>Software Developers:</strong> Learn how to integrate AI and machine learning into applications to make them smarter.</li>
            <li><strong>Data Scientists:</strong> Enhance your skills in machine learning and deep learning to take your data science career to the next level.</li>
          </motion.ul>
        </motion.section>

        {/* What's Included in the Course */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.5, duration: 1 }}
        >
          <h3 className="text-3xl font-bold text-blue-600 mb-8">
            What’s Included in the Course?
          </h3>
          <p className="text-lg mb-8 leading-relaxed text-gray-600">
            Our AI course is designed to offer an interactive learning experience. Here's what you’ll get when you enroll:
          </p>
          <motion.ul
            className="list-disc list-inside text-xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.8, duration: 1 }}
          >
            <li><strong>Video Lessons:</strong> In-depth lectures by experts in AI, covering fundamental and advanced topics.</li>
            <li><strong>Hands-On Projects:</strong> Work on real AI projects and build your portfolio.</li>
            <li><strong>Quizzes & Assessments:</strong> Test your knowledge and track your progress throughout the course.</li>
            <li><strong>Career Support:</strong> Resume building, interview prep, and career coaching to help you land a role in AI.</li>
          </motion.ul>
        </motion.section>

        {/* Contact Us Button */}
        <motion.div
          className="text-center my-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5.1, duration: 1 }}
        >
          <a
            href="/contact"
            className="inline-block px-8 py-4 text-white bg-blue-600 rounded-lg text-2xl hover:bg-blue-700 transition duration-200 transform hover:scale-105"
          >
            Contact Us
          </a>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default ArtificialIntelligenceBlog;
