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
      "telephone": "+91-8807148869",
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
    <div className="p-5 mt-6 mb-6 flex justify-center items-center font-sans">
      <div className="lg:w-4/5 w-full">
        {/* SEO Meta Tags and Schema.org using Helmet */}
        <Helmet>
          <meta
            name="description"
            content="Learn about CareerLadder, the best software training institute in Coimbatore. Explore our expert-led software development course, programming course, and data science courses. Start your tech career today!"
          />
          <meta
            name="keywords"
            content="CareerLadder,Data Science course, Data Analytics course, Full Stack Development course, Digital Marketing course, Cyber Security course, Automation Testing course, Job Assistance, Interview Support, Tech Career, Coimbatore, Best Data Science course, Top Data Analytics course, Best Full Stack Development course, Top Digital Marketing course, Best Cyber Security course, Top Automation Testing course, Certification course, Top Tech Career, Best Certification in Data Science, Best Full Stack Developer course, Online Data Science certification, Best Data Analytics certification, Tech courses near me, Top certification courses in Coimbatore, Industry-leading courses, Career-oriented certification, Job-ready certification, Online course with job assistance, Job support certification"
          />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="About Us - CareerLadder" />
          <meta
            property="og:description"
            content="Learn about CareerLadder, the best software training institute in Coimbatore. Explore our expert-led software development, programming, and data science courses."
          />
          <meta property="og:image" content={about1} />
          <meta property="og:image:alt" content="CareerLadder - About Us" />
          <meta property="og:url" content="https://www.careerladderedu.com/" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="CareerLadder" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:locale" content="en_IN" />

          {/* Canonical Link Tag */}
          <link rel="canonical" href="https://www.careerladderedu.com/aboutus" />

          {/* Schema.org Structured Data (JSON-LD) */}
          <script type="application/ld+json">
            {JSON.stringify(schemaOrgData)}
          </script>
        </Helmet>

        {/* Centered Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-serif text-indigo-900">
            About Us
          </h1>
        </div>

        {/* Images in a straight horizontal line with lazy loading */}
        <div className="flex justify-center mb-8 gap-6">
          <div className="w-auto">
            <img
              className="h-auto max-w-full rounded-2xl"
              src={about2}
              alt="Hands-on experience with the latest tools"
              loading="lazy"
            />
            <p className="text-center mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 font-semibold font-sans">
              Hands-on experience with the latest tools
            </p>
          </div>
          <div className="w-auto">
            <img
              className="h-auto max-w-full rounded-2xl"
              src={about1}
              alt="Real-world applications of skills"
              loading="lazy"
            />
            <p className="text-center mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 font-semibold font-sans">
              Real-world applications of skills
            </p>
          </div>
          <div className="w-auto">
            <img
              className="h-auto max-w-full rounded-2xl"
              src={about3}
              alt="Develop in-demand skills with CareerLadder"
              loading="lazy"
            />
            <p className="text-center mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 font-semibold font-sans">
              Develop In-Demand Skills
            </p>
          </div>
        </div>

        {/* Text and Description Section */}
        <div className="font-sans mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mt-2 mb-2 text-indigo-800 font-sans">
            Develop In-Demand Skills at the Best Software Training Institute in Coimbatore
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-600 leading-relaxed mb-2 font-sans ">
            CareerLadder is the top software training institute in Coimbatore, offering comprehensive courses in software development, programming, data science, machine learning, and more. Our on-demand courses in emerging technologies equip you with the practical knowledge and hands-on experience you need to succeed in today's fast-paced tech world.
            Join CareerLadder today, and start building your career with the best software development training in Coimbatore. Our training programs are designed to give you a competitive edge in the tech industry.
            <br />
            <Link to="/contact" className="text-indigo-700 underline">Contact us today</Link> to learn more about our courses!
          </p>
        </div>

        {/* Comprehensive Learning Experience Section */}
        <div className="font-sans mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 text-indigo-800 font-sans">
            Comprehensive Learning Experience at the Top Software Institute
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-600 leading-relaxed mb-2 font-sans">
            CareerLadder is dedicated to providing high-quality, industry-relevant courses that equip students with the skills they need to succeed in the evolving tech landscape. With expertise in teaching programming, data science, full-stack development, machine learning, cloud computing, and more, we prepare students to excel in their careers.
            Our flexible, affordable courses include personalized attention and hands-on learning experiences designed to ensure that you gain the expertise needed to excel in the tech world. Whether you're interested in <Link to="/courses" className="text-indigo-700 underline">software engineering</Link>, artificial intelligence, or cybersecurity, we have a course for you.
          </p>
        </div>

        {/* Courses Information Section */}
        <div className="font-sans mb-8">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-indigo-800 font-roboto">
            Our Courses - Top 10 Software Development Courses
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed mb-6 font-sans">
            {/* Course items */}
            {[{ icon: 'https://cdn-icons-png.freepik.com/256/5973/5973227.png', title: 'Full Stack Web Development' },
              { icon: 'https://cdn-icons-png.freepik.com/256/2103/2103650.png', title: 'Data Science & Machine Learning' },
              { icon: 'https://cdn-icons-png.freepik.com/256/8055/8055576.png', title: 'Artificial Intelligence (AI)' },
              { icon: 'https://cdn-icons-png.freepik.com/256/7858/7858975.png', title: 'UI/UX Designing' },
              { icon: 'https://cdn-icons-png.freepik.com/256/2920/2920349.png', title: 'Data Analytics' },
              { icon: 'https://cdn-icons-png.freepik.com/256/11643/11643012.png', title: 'Cloud Computing (AWS)' },
              { icon: 'https://cdn-icons-png.freepik.com/256/4744/4744315.png', title: 'Cybersecurity & Ethical Hacking' },
              { icon: 'https://cdn-icons-png.freepik.com/256/14528/14528628.png', title: 'Digital Marketing' },
              { icon: 'https://cdn-icons-png.freepik.com/256/6867/6867265.png', title: 'DevOps & Automation' }
            ].map((course, index) => (
              <div key={index} className="flex items-center font-bold">
                <img src={course.icon} alt={course.title} className="w-6 h-6 mr-2" />
                {course.title}
              </div>
            ))}
          </div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-600 leading-relaxed mb-8 font-sans">
            These courses are designed to keep you ahead in today’s tech landscape. Gain skills in software engineering, data science, cloud computing, artificial intelligence, and more. CareerLadder ensures all courses meet the latest industry standards.
            <br />
            <a href="https://www.careerladderedu.com/courses" className="text-indigo-700 underline" target="_blank" rel="noopener noreferrer">Explore all our courses here.</a>
          </p>
        </div>

        {/* Call to Action Button */}
        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="bg-indigo-700 text-white font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl hover:bg-indigo-800 py-3 px-6 sm:py-4 sm:px-8 lg:py-5 lg:px-10 rounded-full transition-all"
          >
            Read our latest blog posts
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
