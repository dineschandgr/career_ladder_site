import React from 'react';
import Nav from '../../nav/nav';
import Nav2 from '../../nav2/nav2';
import { Footer } from '../../Footer/Footer';
import WhatsAppButton from '../../whatsapp/whatsapp';
import CCC from '../../../asset/csps/CCC.webp';
import CSC from '../../../asset/csps/CSC.webp';
import DMC from '../../../asset/csps/DMC.webp';
import DSDA from '../../../asset/csps/DSDA.webp';
import FSDC from '../../../asset/csps/FSDC.webp';
import PCB from '../../../asset/csps/PCB.webp';
import UUC from '../../../asset/csps/UUC.webp';

// Image URLs from Freepik
const courses = [
  {
    title: "Data Science",
    image: "https://assets.techrepublic.com/uploads/2023/12/tr_20231215-what-is-data-science.jpg",  // Data Science Image
    description: "Dive into Data Science and explore machine learning, big data, and predictive modeling.",
    link: "/DS"
  },
  {
    title: "Data Analytics",
    image: "https://edvancer.in/wp-content/uploads/2022/10/What-is-data-analytics-How-it-can-help-your-career-738x472.jpg", // Data Analytics Image
    description: "Learn how to analyze and interpret data to help businesses make informed decisions.",
    link: "/DA"
  },
  {
    title: "Full Stack Development",
    image: "https://codedamn-blog.s3.amazonaws.com/wp-content/uploads/2022/09/12223818/image_750x_62fbc6c65f92e-1.jpg",  // Full Stack Development Image
    description: "Master both front-end and back-end development to build full-fledged web applications.",
    link: "/FSD"
  },
  {
    title: "Cybersecurity",
    image: "https://www.raxatechnosecuritysolutions.in/assets/img/Cyber-Security_Banner.jpg", // Cybersecurity Image
    description: "Learn to protect networks and systems from cyber-attacks and data breaches.",
    link: "/CS"
  },
  {
    title: "Cloud Computing",
    image: "https://img.freepik.com/free-photo/saas-concept-collage_23-2149399281.jpg?ga=GA1.1.1943424079.1732703638&semt=ais_hybrid", // Cloud Computing Image
    description: "Explore cloud platforms, architecture, and deployment models in modern tech.",
    link: "/CC"
  },
  {
    title: "Artificial Intelligence",
    image: "https://www.zabala.eu/wp-content/uploads/2023/11/Artificial-intelligente-and-consultancy-1200x675.jpg", // AI Image
    description: "Dive deep into AI concepts such as neural networks, machine learning, and robotics.",
    link: "/AI"
  },
  {
    title: "Digital Marketing",
    image: "https://onlinegurukul.org/storage/uploads/1658492516-dm.jpeg", // Digital Marketing Image
    description: "Learn strategies for SEO, SEM, social media marketing, and analytics to grow businesses online.",
    link: "/DM"
  },
  {
    title: "UI/UX Design",
    image: "https://skipsuniversity.edu.in/wp-content/uploads/2024/05/101_ux_vs_ui_illustration_blog.png", // UI/UX Design Image
    description: "Understand user interface and experience design to create intuitive and user-friendly products.",
    link: "/UU"
  },
  {
    title: "Embedded Systems",
    image: "https://www.velvetech.com/wp-content/uploads/2023/03/types-of-embedded-systems-fb-1024x538.png", // Embedded Systems Image
    description: "Learn the foundations of embedded systems, IoT, and hardware programming.",
    link: "/ES"
  },
  {
    title: "Automation Testing",
    image: "https://axissoftwaredynamics.com/wp-content/uploads/2022/11/1_fJjQOPz-PdJjRqefaBV13Q.jpeg", // Automation Testing Image
    description: "Learn about automated testing frameworks and how to ensure quality and reliability in software development.",
    link: "/AT"
  }
];

const Courses = () => {
  return (
    <div className="font-sans bg-white min-h-screen">
      <Nav />
      <Nav2 />
      <WhatsAppButton />

      {/* 7 Images Section Above Header */}
      <div className="px-6 py-8 mb-12 bg-gray-100">
        <div className="grid lg:grid-cols-7 sm:grid-cols-2 gap-4">
          <a href="/DS">
            <img src={DSDA} className="w-full h-70 object-cover rounded-md transform transition-transform duration-300 hover:scale-105" loading="lazy" />
          </a>
          <a href="/ES">
            <img src={PCB} className="w-full h-70 object-cover rounded-md transform transition-transform duration-300 hover:scale-105" loading="lazy" />
          </a>
          <a href="/FSD">
            <img src={FSDC} className="w-full h-70 object-cover rounded-md transform transition-transform duration-300 hover:scale-105" loading="lazy" />
          </a>
          <a href="/CS">
            <img src={CSC} className="w-full h-70 object-cover rounded-md transform transition-transform duration-300 hover:scale-105" loading="lazy" />
          </a>
          <a href="/CC">
            <img src={CCC} className="w-full h-70 object-cover rounded-md transform transition-transform duration-300 hover:scale-105" loading="lazy" />
          </a>
          <a href="/UU">
            <img src={UUC} className="w-full h-70 object-cover rounded-md transform transition-transform duration-300 hover:scale-105" loading="lazy" />
          </a>
          <a href="/DM">
            <img src={DMC} className="w-full h-70 object-cover rounded-md transform transition-transform duration-300 hover:scale-105" loading="lazy" />
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-[#F3F4F6] px-6 py-16 mb-12">
        <div className="text-center text-black z-10">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">Explore Our Software Courses</h1>
          <h6 className="text-lg lg:text-xl font-medium">Boost your career with the latest technologies and courses</h6>
        </div>
      </div>

      {/* Courses Section */}
      <div className="px-6 py-16">
        <h1 className="text-3xl font-extrabold text-left mb-12">Available Courses</h1>

        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-12">
          {courses.map((course, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-300">
              <img src={course.image} alt={course.title} className="w-full max-h-[400px] object-contain transition-transform duration-300 hover:scale-105" loading="lazy" />
              <div className="p-6">
                <h2 className="text-xl font-extrabold text-blue-700 mb-4">{course.title}</h2>
                <p className="text-lg mb-6">{course.description}</p>
                <a href={course.link} className="inline-block px-6 py-3 text-white bg-blue-600 rounded-md text-lg hover:bg-red-700 transition duration-200">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Courses;
