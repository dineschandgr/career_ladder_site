import React from 'react';
// import Nav from '../../nav/nav';
import { Footer } from '../../Footer/Footer';
import { motion } from 'framer-motion';
import Nav2 from '../../nav2/nav2';

const AutomationTestingBlog = () => {
  return (
    <div className="font-sans bg-white min-h-screen">
      <Nav2 />

      {/* Hero Section */}
      <motion.div
        className="relative bg-[#F3F4F6] px-6 lg:px-16 py-24 mb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <div className="text-center text-black z-10">
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-4 text-blue-600">
            Master the Art of Automation Testing with Our Course
          </h1>
          <h6 className="text-xl lg:text-2xl font-medium text-gray-700">
            Supercharge your career with cutting-edge test automation skills
          </h6>
        </div>
      </motion.div>

      {/* Blog Content Section */}
      <div className="px-6 lg:px-16 py-16 max-w-screen-xl mx-auto">
        {/* Introduction */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <h2 className="text-4xl font-extrabold text-blue-600 mb-8">
            What is Automation Testing and Why is It Essential?
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Automation Testing is the process of using specialized tools to automate the execution of software tests...
          </p>
          <p className="text-lg mb-8 leading-relaxed text-gray-600">
            As software complexity increases, manual testing becomes slower and more prone to errors...
          </p>
        </motion.section>

        {/* Why Choose Automation Testing? */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          <h3 className="text-3xl font-bold text-blue-600 mb-8">
            Why Choose Automation Testing?
          </h3>
          <p className="text-lg mb-8 leading-relaxed text-gray-600">
            Automation testing is becoming an essential skill in the world of software development...
          </p>
          <ul className="list-disc list-inside text-xl mb-8">
            <li><strong>Faster Test Execution:</strong> Automated tests can run faster than manual tests...</li>
            <li><strong>Cost Efficiency:</strong> While the initial setup of automation testing can require investment...</li>
            <li><strong>Improved Accuracy:</strong> Automation eliminates human error...</li>
            <li><strong>Scalability:</strong> Automated tests can be run on multiple environments and devices simultaneously...</li>
            <li><strong>Increased Test Coverage:</strong> Automation allows for executing more tests in less time...</li>
          </ul>
        </motion.section>

        {/* What Will You Learn? */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <h3 className="text-3xl font-bold text-blue-600 mb-8">
            What Will You Learn in Our Automation Testing Course?
          </h3>
          <p className="text-lg mb-8 leading-relaxed text-gray-600">
            Our Automation Testing course is designed to give you the foundational skills needed to excel in this field...
          </p>
          <ul className="list-disc list-inside text-xl mb-8">
            <li><strong>Introduction to Automation Testing:</strong> Learn the basics of test automation...</li>
            <li><strong>Test Automation Tools:</strong> Master industry-standard tools such as Selenium...</li>
            <li><strong>Writing and Executing Test Scripts:</strong> Gain hands-on experience writing test scripts...</li>
            <li><strong>Continuous Integration (CI) and Continuous Delivery (CD):</strong> Understand how to integrate automated tests...</li>
            <li><strong>Test Design and Strategy:</strong> Learn how to design effective test cases for automation...</li>
            <li><strong>Reporting and Maintenance:</strong> Learn how to generate test reports and handle maintenance...</li>
          </ul>
        </motion.section>

        {/* Tools Used in Automation Testing */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <h3 className="text-3xl font-bold text-blue-600 mb-8">
            Tools Used in Automation Testing
          </h3>
          <p className="text-lg mb-8 leading-relaxed text-gray-600">
            To succeed in automation testing, you’ll need to master various tools and technologies...
          </p>
          <div className="flex justify-around items-center mb-12">
            <div className="text-center">
              <img src="https://cdn-icons-png.freepik.com/256/13575/13575453.png?ga=GA1.1.2056715411.1734277242&semt=ais_hybrid" alt="Selenium" className="w-20 h-20 mb-4 mx-auto" />
              {/* <p className="text-lg">Selenium</p> */}
            </div>
            <div className="text-center">
              <img src="https://howtodoinjava.com/wp-content/uploads/2014/12/TestNG.png" alt="TestNG" className="w-20 h-20 mb-4 mx-auto" />
              {/* <p className="text-lg">TestNG</p> */}
            </div>
            <div className="text-center">
              <img src="https://images.prismic.io/openjsf/1825791f-02f3-41ba-be1a-e6961fe84d9c_appium-logo-vertical-color_large_square.png?auto=compress,format" alt="Appium" className="w-20 h-20 mb-4 mx-auto" />
              {/* <p className="text-lg">Appium</p> */}
            </div>
            <div className="text-center">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVfCRuAyl1Idg7kzspN2ZwqCc075u3NXK72g&s" alt="JUnit" className="w-20 h-20 mb-4 mx-auto" />
              {/* <p className="text-lg">JUnit</p> */}
            </div>
          </div>
        </motion.section>

        {/* How This Course Can Change Your Career */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1 }}
        >
          <h3 className="text-3xl font-bold text-blue-600 mb-8">
            How This Course Can Change Your Career
          </h3>
          <p className="text-lg mb-8 leading-relaxed text-gray-600">
            Completing this course will equip you with the skills needed to become an automation testing expert...
          </p>
        </motion.section>

        {/* Who Should Take This Course? */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 1 }}
        >
          <h3 className="text-3xl font-bold text-blue-600 mb-8">
            Who Should Take This Course?
          </h3>
          <p className="text-lg mb-8 leading-relaxed text-gray-600">
            This course is perfect for anyone looking to break into the field of automation testing...
          </p>
          <ul className="list-disc list-inside text-xl mb-8">
            <li><strong>Manual Testers:</strong> If you are already testing manually...</li>
            <li><strong>Software Developers:</strong> Learn how to incorporate automated tests...</li>
            <li><strong>QA Engineers:</strong> Enhance your skills and broaden your expertise...</li>
            <li><strong>Tech Enthusiasts:</strong> If you're passionate about technology...</li>
          </ul>
        </motion.section>

        {/* What's Included in the Course */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 1 }}
        >
          <h3 className="text-3xl font-bold text-blue-600 mb-8">
            What’s Included in the Course?
          </h3>
          <p className="text-lg mb-8 leading-relaxed text-gray-600">
            Our comprehensive course ensures you gain both theoretical knowledge and practical skills...
          </p>
          <ul className="list-disc list-inside text-xl mb-8">
            <li><strong>Video Lessons:</strong> Step-by-step tutorials on all aspects of automation testing...</li>
            <li><strong>Hands-On Projects:</strong> Build real-world test automation solutions...</li>
            <li><strong>Quizzes & Assessments:</strong> Test your understanding and track your progress...</li>
            <li><strong>Career Support:</strong> Receive help with resume building...</li>
          </ul>
        </motion.section>

        {/* Contact Us Button */}
        <div className="text-center my-12">
          <a
            href="/contact"
            className="inline-block px-8 py-4 text-white bg-blue-600 rounded-lg text-2xl hover:bg-blue-700 transition duration-200 transform hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AutomationTestingBlog;
