import React from 'react';
// import Nav from '../../nav/nav';
import { Footer } from '../../Footer/Footer';
import { motion } from 'framer-motion'; // Import for animation
import Nav2 from '../../nav2/nav2';

const DataScienceBlog = () => {
  return (
    <div className="font-sans bg-white min-h-screen">
      <Nav2 />

      {/* Hero Section */}
      <div className="relative bg-[#F3F4F6] px-6 lg:px-16 py-32 mb-16">
        <motion.div
          className="text-center text-black z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-4 text-blue-600">
            Unlock the Power of Data with Our Data Science Course
          </h1>
          <h6 className="text-xl lg:text-2xl font-medium text-gray-700">
            Transform your career with cutting-edge data analytics skills
          </h6>
        </motion.div>
      </div>

      {/* Blog Content Section */}
      <div className="px-6 lg:px-16 py-16 max-w-screen-xl mx-auto">
        {/* Introduction */}
        <section className="mb-16">
          <motion.h2
            className="text-4xl font-extrabold text-blue-600 mb-8"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            What is Data Science and Why is It the Future?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            Data Science is a rapidly growing field that uses scientific methods, algorithms, and systems to extract valuable insights from data.
            It’s a discipline that combines <strong>statistics</strong>, <strong>machine learning</strong>, and <strong>data analysis</strong> to solve problems, predict future trends, and support decision-making.
          </motion.p>
          <motion.p
            className="text-lg mb-8 leading-relaxed text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            As businesses increasingly rely on data to drive decisions, the demand for skilled professionals in this field is growing exponentially. This makes Data Science not just a trend but a core part of future technological advancements.
          </motion.p>
        </section>

        {/* Why Choose Data Science */}
        <section className="mb-16">
          <motion.h3
            className="text-3xl font-bold text-blue-600 mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 1 }}
          >
            Why Choose Data Science?
          </motion.h3>
          <motion.p
            className="text-lg mb-8 leading-relaxed text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            Data Science is a transformative field that can unlock new insights, improve decision-making, and drive business innovation. Below are some key reasons why Data Science is a smart choice for career growth.
          </motion.p>
          <motion.ul
            className="list-disc list-inside text-xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
          >
            <li><strong>Industry Transformation:</strong> Data Science is changing how businesses operate, improve customer experiences, and predict future trends.</li>
            <li><strong>High Demand for Professionals:</strong> Data Science roles are among the top fastest-growing jobs globally.</li>
            <li><strong>Endless Career Opportunities:</strong> From predictive analytics to machine learning and AI, the possibilities in Data Science are limitless.</li>
          </motion.ul>
        </section>

        {/* What Will You Learn */}
        <section className="mb-16">
          <motion.h3
            className="text-3xl font-bold text-blue-600 mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
          >
            What Will You Learn in Our Data Science Course?
          </motion.h3>
          <motion.p
            className="text-lg mb-8 leading-relaxed text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.3, duration: 1 }}
          >
            Our course is designed to provide both theoretical and practical knowledge, preparing you for real-world challenges in Data Science. Here's a sneak peek at some of the key concepts you will master:
          </motion.p>
          <motion.ul
            className="list-disc list-inside text-xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            <li><strong>Foundations of Data Science:</strong> Learn about statistics, data wrangling, and programming languages like Python and R.</li>
            <li><strong>Data Visualization:</strong> Master tools like Tableau and Matplotlib to present data insights in clear and compelling ways.</li>
            <li><strong>Machine Learning & AI:</strong> Gain hands-on experience in building machine learning models and understand the fundamentals of AI.</li>
            <li><strong>Big Data Technologies:</strong> Understand how to work with large datasets using tools like Hadoop and Spark.</li>
            <li><strong>Data Ethics:</strong> Learn about the ethical considerations of using data, including privacy, security, and fairness.</li>
            <li><strong>Real-World Projects:</strong> Work on real datasets to build your own portfolio of data-driven solutions.</li>
          </motion.ul>
        </section>

        {/* Tools Used in Data Science */}
        <section className="mb-16">
          <motion.h3
            className="text-3xl font-bold text-blue-600 mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8, duration: 1 }}
          >
            Tools Used in Data Science
          </motion.h3>
          <motion.p
            className="text-lg mb-8 leading-relaxed text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
          >
            To excel in Data Science, you'll need to be proficient in a variety of tools and technologies. Here's a list of essential tools that we cover in our course:
          </motion.p>
          <div className="flex justify-around items-center mb-12">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.3, duration: 1 }}
            >
              <img src="https://cdn-icons-png.freepik.com/256/5968/5968350.png" alt="Python" className="w-20 h-20 mb-4 mx-auto" />
              {/* <p className="text-lg">Python</p> */}
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.5, duration: 1 }}
            >
              <img src="https://cdn-icons-png.freepik.com/256/10483/10483939.png" alt="R" className="w-20 h-20 mb-4 mx-auto" />
              {/* <p className="text-lg">R</p> */}
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.7, duration: 1 }}
            >
              <img src="https://cdn-icons-png.freepik.com/256/5616/5616371.png" alt="Tableau" className="w-20 h-20 mb-4 mx-auto" />
              {/* <p className="text-lg">Tableau</p> */}
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.9, duration: 1 }}
            >
              <img src="https://cdn-icons-png.freepik.com/256/4492/4492311.png" alt="SQL" className="w-20 h-20 mb-4 mx-auto" />
              {/* <p className="text-lg">SQL</p> */}
            </motion.div>
          </div>
        </section>

        {/* How This Course Can Change Your Career */}
        <section className="mb-16">
          <motion.h3
            className="text-3xl font-bold text-blue-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1 }}
          >
            How This Course Can Change Your Career
          </motion.h3>
          <motion.p
            className="text-lg mb-8 leading-relaxed text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.3, duration: 1 }}
          >
            By completing this course, you will gain the skills needed to work on diverse data-driven projects. Whether you're analyzing customer behavior or predicting future trends, you will have the tools to unlock actionable insights and make informed decisions.
          </motion.p>
        </section>

        {/* Who Should Take This Course */}
        <section className="mb-16">
          <motion.h3
            className="text-3xl font-bold text-blue-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.6, duration: 1 }}
          >
            Who Should Take This Course?
          </motion.h3>
          <motion.p
            className="text-lg mb-8 leading-relaxed text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.8, duration: 1 }}
          >
            This course is ideal for anyone looking to break into Data Science or enhance their existing skills. Whether you’re a beginner or already working with data, our course is designed to help you succeed.
          </motion.p>
          <motion.ul
            className="list-disc list-inside text-xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 5, duration: 1 }}
          >
            <li><strong>Aspiring Data Scientists:</strong> If you’re looking to start your career in data science, this course will give you all the foundational skills you need.</li>
            <li><strong>Data Analysts:</strong> If you’re already working with data and want to deepen your knowledge and expand your skillset, this course is a perfect fit.</li>
            <li><strong>Professionals Looking for Career Growth:</strong> Whether you're in marketing, finance, or business, Data Science skills can complement your existing expertise and help you stand out in your field.</li>
          </motion.ul>
        </section>

        {/* What's Included in the Course */}
        <section className="mb-16">
          <motion.h3
            className="text-3xl font-bold text-blue-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 5.3, duration: 1 }}
          >
            What’s Included in the Course?
          </motion.h3>
          <motion.p
            className="text-lg mb-8 leading-relaxed text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 5.5, duration: 1 }}
          >
            Our course is designed to ensure you get a comprehensive learning experience with various resources. Here’s what you’ll get when you enroll:
          </motion.p>
          <motion.ul
            className="list-disc list-inside text-xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 5.8, duration: 1 }}
          >
            <li><strong>Video Lessons:</strong> Detailed lectures covering key topics, taught by industry experts.</li>
            <li><strong>Hands-On Projects:</strong> Real-world datasets and problems to help you gain practical experience.</li>
            <li><strong>Quizzes & Assessments:</strong> Test your understanding and track your progress as you go through the course.</li>
            <li><strong>Career Support:</strong> Resume building, interview prep, and career coaching to help you land your first Data Science role.</li>
          </motion.ul>
        </section>

        {/* Contact Us Button */}
        <div className="text-center my-12">
          <motion.a
            href="/contact"
            className="inline-block px-8 py-4 text-white bg-blue-600 rounded-lg text-2xl hover:bg-blue-700 transition duration-200 transform hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 6, duration: 1 }}
          >
            Contact Us
          </motion.a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DataScienceBlog;
