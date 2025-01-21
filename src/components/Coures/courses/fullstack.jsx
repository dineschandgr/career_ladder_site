import React from 'react';
import { motion } from 'framer-motion'; // Don't forget to import motion for animations
// import Nav from '../../nav/nav';
import { Footer } from '../../Footer/Footer';
import Nav2 from '../../nav2/nav2';

const FullStackDevelopmentBlog = () => {
  return (
    <div className="font-sans bg-white min-h-screen">
      <Nav2 />

      {/* Hero Section */}
      <div className="relative bg-[#F3F4F6] px-6 lg:px-16 py-24 mb-16">
        <div className="text-center text-black z-10">
          <motion.h1
            className="text-5xl lg:text-6xl font-extrabold mb-4 text-blue-600"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Become a Full Stack Developer with Our Comprehensive Course
          </motion.h1>
          <motion.h6
            className="text-xl lg:text-2xl font-medium text-gray-700"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Master both front-end and back-end development skills to build complete web applications
          </motion.h6>
        </div>
      </div>

      {/* Blog Content Section */}
      <div className="px-6 lg:px-16 py-16 max-w-screen-xl mx-auto">
        {/* Introduction */}
        <section className="mb-16">
          <motion.h2
            className="text-4xl font-extrabold text-blue-600 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
          >
            What is Full Stack Development and Why is It So Important?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            Full Stack Development is the process of building both the front-end and back-end of a web application. A **Full Stack Developer** is skilled in working with the entire web development stack, from the user interface (UI) to the server-side logic and databases.
          </motion.p>
          <motion.p
            className="text-lg mb-8 leading-relaxed text-gray-600"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            As businesses increasingly move online, the demand for versatile developers who can work on both client-side and server-side coding has skyrocketed. Full Stack Development allows you to create dynamic, interactive, and data-driven applications, making it an essential skill for modern web developers.
          </motion.p>
        </section>

        {/* Why Choose Full Stack Development? */}
        <section className="mb-16">
          <motion.h3
            className="text-3xl font-bold text-blue-600 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 1 }}
          >
            Why Choose Full Stack Development?
          </motion.h3>
          <motion.p
            className="text-lg mb-8 leading-relaxed text-gray-600"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1, duration: 1 }}
          >
            Full Stack Development offers numerous career benefits, including versatility, job security, and opportunities to work on a wide variety of projects. Below are some reasons why learning Full Stack Development can significantly enhance your career.
          </motion.p>
          <motion.ul
            className="list-disc list-inside text-xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 1 }}
          >
            <li><strong>High Demand for Full Stack Developers:</strong> Companies want developers who can handle both front-end and back-end tasks, reducing the need for multiple specialized roles.</li>
            <li><strong>Endless Career Opportunities:</strong> Full Stack Developers are in high demand across industries, from tech startups to large enterprises, offering lucrative career options.</li>
            <li><strong>Build Complete Applications:</strong> Full Stack Development allows you to work on every aspect of an application, from design to deployment, providing a sense of accomplishment and ownership.</li>
          </motion.ul>
        </section>

        {/* What Will You Learn? */}
        <section className="mb-16">
          <motion.h3
            className="text-3xl font-bold text-blue-600 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.7, duration: 1 }}
          >
            What Will You Learn in Our Full Stack Development Course?
          </motion.h3>
          <motion.p
            className="text-lg mb-8 leading-relaxed text-gray-600"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 1 }}
          >
            Our Full Stack Development course is designed to provide you with a strong foundation in both front-end and back-end technologies. Here’s a breakdown of what you will learn:
          </motion.p>
          <motion.ul
            className="list-disc list-inside text-xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.3, duration: 1 }}
          >
            <li><strong>Front-End Development:</strong> Learn HTML, CSS, JavaScript, and popular frameworks like React and Angular to create responsive, user-friendly interfaces.</li>
            <li><strong>Back-End Development:</strong> Gain expertise in server-side technologies like Node.js, Express, and Python to handle the logic, databases, and APIs.</li>
            <li><strong>Database Management:</strong> Learn how to work with databases like MongoDB, MySQL, and PostgreSQL to store and manage data effectively.</li>
            <li><strong>Version Control:</strong> Master Git and GitHub to collaborate on projects and track changes in your codebase.</li>
            <li><strong>Web Deployment:</strong> Learn how to deploy your applications to cloud platforms like AWS and Heroku, ensuring they are scalable and available to users worldwide.</li>
            <li><strong>Real-World Projects:</strong> Build real web applications, from start to finish, to develop a professional portfolio that will impress potential employers.</li>
          </motion.ul>
        </section>

        {/* Tools Used in Full Stack Development */}
        <section className="mb-16">
          <motion.h3
            className="text-3xl font-bold text-blue-600 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.6, duration: 1 }}
          >
            Tools Used in Full Stack Development
          </motion.h3>
          <motion.p
            className="text-lg mb-8 leading-relaxed text-gray-600"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.9, duration: 1 }}
          >
            Full Stack Development involves various tools and technologies that allow developers to create dynamic applications. Here’s a list of the key tools you will master:
          </motion.p>
          <div className="flex justify-around items-center mb-12">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.2, duration: 1 }}
            >
              <img src="https://cdn-icons-png.freepik.com/256/5968/5968267.png?ga=GA1.1.2056715411.1734277242&semt=ais_hybrid" alt="HTML" className="w-20 h-20 mb-4 mx-auto" />
              {/* <p className="text-lg">HTML</p> */}
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.5, duration: 1 }}
            >
              <img src="https://cdn-icons-png.freepik.com/256/5968/5968242.png?ga=GA1.1.2056715411.1734277242&semt=ais_hybrid" alt="CSS" className="w-20 h-20 mb-4 mx-auto" />
              {/* <p className="text-lg">CSS</p> */}
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.8, duration: 1 }}
            >
              <img src="https://cdn-icons-png.freepik.com/256/5968/5968292.png?ga=GA1.1.2056715411.1734277242&semt=ais_hybrid" alt="JavaScript" className="w-20 h-20 mb-4 mx-auto" />
              {/* <p className="text-lg">JavaScript</p> */}
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 5.1, duration: 1 }}
            >
              <img src="https://cdn-icons-png.freepik.com/256/753/753244.png?ga=GA1.1.2056715411.1734277242&semt=ais_hybrid" alt="Node.js" className="w-20 h-20 mb-4 mx-auto" />
              {/* <p className="text-lg">Node.js</p> */}
            </motion.div>
          </div>
        </section>

        {/* How This Course Can Change Your Career */}
        <section className="mb-16">
          <motion.h3
            className="text-3xl font-bold text-blue-600 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 5.4, duration: 1 }}
          >
            How This Course Can Change Your Career
          </motion.h3>
          <motion.p
            className="text-lg mb-8 leading-relaxed text-gray-600"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 5.7, duration: 1 }}
          >
            Completing this Full Stack Development course will make you a well-rounded developer capable of building and deploying web applications from scratch. You'll gain valuable hands-on experience with both front-end and back-end technologies, making you a highly sought-after candidate for developers' roles in various industries.
          </motion.p>
        </section>

        {/* Who Should Take This Course? */}
        <section className="mb-16">
          <motion.h3
            className="text-3xl font-bold text-blue-600 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 6, duration: 1 }}
          >
            Who Should Take This Course?
          </motion.h3>
          <motion.p
            className="text-lg mb-8 leading-relaxed text-gray-600"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 6.3, duration: 1 }}
          >
            This course is perfect for aspiring developers, web enthusiasts, and anyone looking to break into the tech industry. Whether you’re a beginner or have some prior coding knowledge, this course will help you become a Full Stack Developer.
          </motion.p>
          <motion.ul
            className="list-disc list-inside text-xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 6.6, duration: 1 }}
          >
            <li><strong>Aspiring Web Developers:</strong> If you want to build both the front-end and back-end of websites and applications, this course is for you.</li>
            <li><strong>Current Developers Looking to Expand Skills:</strong> If you're already familiar with either front-end or back-end development, this course will help you become a well-rounded Full Stack Developer.</li>
            <li><strong>Tech Enthusiasts:</strong> If you're passionate about web development and want to take your skills to the next level, this course is ideal for you.</li>
          </motion.ul>
        </section>

        {/* What's Included in the Course */}
        <section className="mb-16">
          <motion.h3
            className="text-3xl font-bold text-blue-600 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 6.9, duration: 1 }}
          >
            What’s Included in the Course?
          </motion.h3>
          <motion.p
            className="text-lg mb-8 leading-relaxed text-gray-600"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 7.2, duration: 1 }}
          >
            By enrolling in our Full Stack Development course, you'll receive a range of resources to help you succeed:
          </motion.p>
          <motion.ul
            className="list-disc list-inside text-xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 7.5, duration: 1 }}
          >
            <li><strong>Video Lessons:</strong> In-depth tutorials covering both front-end and back-end development.</li>
            <li><strong>Hands-On Projects:</strong> Real-world development projects to build your portfolio and skills.</li>
            <li><strong>Quizzes & Assessments:</strong> Regular quizzes to test your knowledge and track your progress.</li>
            <li><strong>Career Support:</strong> Resume building, job search assistance, and interview preparation to help you land your first job as a Full Stack Developer.</li>
          </motion.ul>
        </section>

        {/* Contact Us Button */}
        <div className="text-center my-12">
          <motion.a
            href="/contact"
            className="inline-block px-8 py-4 text-white bg-blue-600 rounded-lg text-2xl hover:bg-blue-700 transition duration-200 transform hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 7.8, duration: 1 }}
          >
            Contact Us
          </motion.a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FullStackDevelopmentBlog;
