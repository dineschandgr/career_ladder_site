import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import about1 from "../../asset/aboutus/about1.webp";
import about2 from "../../asset/aboutus/about2.webp";
import about3 from "../../asset/aboutus/about3.webp";

function About() {
  const schemaOrgData = {
    "@context": "https://schema.org",
    "@type": "software training institute",
    "name": "CareerLadder",
    "url": "https://www.careerladderedu.com",
    "logo": "https://www.careerladderedu.com/path-to-logo-image.jpg",

    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8870275880",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": "Tamil,English"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61552807079875/",
      "https://www.instagram.com/careerladder_coimbatore",
      "https://www.linkedin.com/company/97436723/admin/dashboard/"
    ]
  };

  return (
    <div className="p-8 mt-12 mb-12 bg-white flex justify-center items-center font-sans">
      <div className="lg:w-4/5 w-full max-w-7xl space-y-16">
        {/* SEO Meta Tags and Schema.org using Helmet */}
        <Helmet>
          <meta
            name="description"
            content="Discover CareerLadder’s unique approach to software development training. Dive deep into cutting-edge technologies like AI, ML, Cloud Computing, and more. Start your journey with us today!"
          />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="About Us - CareerLadder" />
          <meta
            property="og:description"
            content="Discover CareerLadder’s unique approach to software development training. Dive deep into cutting-edge technologies like AI, ML, Cloud Computing, and more."
          />
          <meta property="og:image" content={about1} />
          <meta property="og:image:alt" content="CareerLadder - About Us" />
          <meta property="og:url" content="https://www.careerladderedu.com/" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="CareerLadder" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:locale" content="en_IN" />
          <link rel="canonical" href="https://www.careerladderedu.com/aboutus" />
          <script type="application/ld+json">
            {JSON.stringify(schemaOrgData)}
          </script>
        </Helmet>

        {/* Section Title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-indigo-900 leading-tight">
            About Us
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            We are a premier software training institute offering cutting-edge courses in technologies like AI, ML, Cloud Computing, and more. Join us today to accelerate your career!
          </p>
        </div>

        {/* Visual Elements with Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="w-full">
            <img
              className="w-full h-auto rounded-2xl shadow-lg"
              src={about2}
              alt="Hands-on experience with the latest tools"
              loading="lazy"
            />
            <p className="mt-4 text-center text-lg text-gray-700 font-semibold">
              Hands-on experience with the latest tools
            </p>
          </div>
          <div className="w-full">
            <img
              className="w-full h-auto rounded-2xl shadow-lg"
              src={about1}
              alt="Real-world applications of skills"
              loading="lazy"
            />
            <p className="mt-4 text-center text-lg text-gray-700 font-semibold">
              Real-world applications of skills
            </p>
          </div>
          <div className="w-full">
            <img
              className="w-full h-auto rounded-2xl shadow-lg"
              src={about3}
              alt="Develop in-demand skills"
              loading="lazy"
            />
            <p className="mt-4 text-center text-lg text-gray-700 font-semibold">
              Develop In-Demand Skills
            </p>
          </div>
        </div>

        {/* Section: Core Training Features */}
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-800 mb-4">
            Core Training Features
          </h2>
          <p className="text-lg sm:text-xl text-gray-700">
            At CareerLadder, we ensure that every student receives a holistic, real-world learning experience that prepares them for the ever-changing tech industry. Here’s what we offer:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div className="p-6 bg-white rounded-xl shadow-xl">
              <h3 className="font-semibold text-xl text-indigo-800 mb-3">
                Comprehensive Curriculum
              </h3>
              <p className="text-gray-700">
                Covering topics from basic programming to advanced machine learning algorithms, ensuring a broad understanding of the technology landscape.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-xl">
              <h3 className="font-semibold text-xl text-indigo-800 mb-3">
                Hands-On Experience
              </h3>
              <p className="text-gray-700">
                Gain practical skills through real-world projects, live sessions, and assignments designed to make you job-ready.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-xl">
              <h3 className="font-semibold text-xl text-indigo-800 mb-3">
                Expert Trainers
              </h3>
              <p className="text-gray-700">
                Learn from industry veterans with extensive experience in the tech field, offering valuable insights and practical advice.
              </p>
            </div>
          </div>
        </div>

        {/* Industry-Relevant Technologies Section */}
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-800 mb-6">
            Work with Industry-Relevant Technologies
          </h2>
          <p className="text-lg sm:text-xl text-gray-700">
            We provide training in the most current and cutting-edge technologies that are transforming industries. Below are some key areas we focus on:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {[{ title: 'Blockchain Development', description: 'Understand decentralized systems and how blockchain is revolutionizing industries.', color: 'bg-green-200' },
              { title: 'IoT (Internet of Things)', description: 'Build smart, connected devices and learn the architecture of IoT systems.', color: 'bg-blue-200' },
              { title: 'AR/VR (Augmented and Virtual Reality)', description: 'Create immersive environments and experiences for various applications.', color: 'bg-purple-200' },
              { title: 'RPA (Robotic Process Automation)', description: 'Automate repetitive tasks in business processes using advanced RPA tools.', color: 'bg-yellow-200' },
              { title: 'Quantum Computing', description: 'Explore the future of computing with quantum algorithms and techniques.', color: 'bg-pink-200' }
            ].map((tech, index) => (
              <div key={index} className={`${tech.color} p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300`}>
                <h3 className="font-bold text-xl text-indigo-800 mb-4">{tech.title}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-Action Button */}
        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="bg-indigo-700 text-white text-xl sm:text-2xl font-semibold py-4 px-8 rounded-full hover:bg-indigo-800 transition-all duration-300"
          >
            Get in Touch with Us!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
