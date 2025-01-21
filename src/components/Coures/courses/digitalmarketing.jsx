import React from 'react';
// import Nav from '../../nav/nav';
import { Footer } from '../../Footer/Footer';
import { motion } from 'framer-motion';
import Nav2 from '../../nav2/nav2';

const DigitalMarketingBlog = () => {
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
            Unlock the Power of Digital Marketing with Our Course
          </h1>
          <h6 className="text-xl lg:text-2xl font-medium text-gray-700">
            Transform your career with cutting-edge digital marketing strategies
          </h6>
        </div>
      </motion.div>

      {/* Blog Content Section */}
      <motion.div
        className="px-6 lg:px-16 py-16 max-w-screen-xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {/* Introduction */}
        <section className="mb-16">
          <motion.h2
            className="text-4xl font-extrabold text-blue-600 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            What is Digital Marketing and Why is It the Future?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Digital Marketing refers to the use of digital channels, platforms, and technologies to promote and advertise products or services.
            It includes strategies like <strong>SEO</strong>, <strong>content marketing</strong>, <strong>social media marketing</strong>, <strong>email marketing</strong>, and <strong>online advertising</strong>.
            As businesses continue to shift towards online platforms, digital marketing is becoming a core component of successful business strategies.
          </motion.p>
          <motion.p
            className="text-lg mb-8 leading-relaxed text-gray-600"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 1 }}
          >
            With the rise of social media, mobile apps, and search engines, digital marketing is now essential for companies to reach, engage, and retain customers. This has led to an exponential increase in demand for skilled digital marketers.
          </motion.p>
        </section>

        {/* Why Choose Digital Marketing? */}
        <section className="mb-16">
          <motion.h3
            className="text-3xl font-bold text-blue-600 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            Why Choose Digital Marketing?
          </motion.h3>
          <motion.p
            className="text-lg mb-8 leading-relaxed text-gray-600"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 1 }}
          >
            Digital marketing offers endless opportunities for innovation, career growth, and business transformation. Below are key reasons why Digital Marketing is one of the most in-demand fields today:
          </motion.p>
          <motion.ul
            className="list-disc list-inside text-xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 1 }}
          >
            <li><strong>Industry Growth:</strong> Digital marketing is growing rapidly as more businesses invest in online advertising, SEO, and social media marketing.</li>
            <li><strong>High Demand for Digital Marketers:</strong> With businesses embracing online platforms, the demand for skilled digital marketers is skyrocketing. Digital marketing roles are among the fastest-growing jobs in the market.</li>
            <li><strong>Flexibility and Creativity:</strong> Digital marketing allows for creative campaigns and strategies. You can work in a variety of industries such as tech, fashion, e-commerce, entertainment, and more.</li>
          </motion.ul>
        </section>

        {/* What Will You Learn? */}
        <section className="mb-16">
          <motion.h3
            className="text-3xl font-bold text-blue-600 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
          >
            What Will You Learn in Our Digital Marketing Course?
          </motion.h3>
          <motion.p
            className="text-lg mb-8 leading-relaxed text-gray-600"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 1 }}
          >
            Our course is designed to equip you with both foundational and advanced skills required for a successful career in digital marketing. Here are some of the key topics you’ll master:
          </motion.p>
          <motion.ul
            className="list-disc list-inside text-xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            <li><strong>SEO (Search Engine Optimization):</strong> Learn how to optimize websites and content to rank higher on search engines like Google.</li>
            <li><strong>Content Marketing:</strong> Understand the power of content in digital marketing and how to create compelling content that resonates with audiences.</li>
            <li><strong>Social Media Marketing:</strong> Master social media platforms like Facebook, Instagram, LinkedIn, and Twitter to grow brand awareness and drive engagement.</li>
            <li><strong>Email Marketing:</strong> Learn how to create and execute email campaigns that nurture leads and drive conversions.</li>
            <li><strong>Google Ads and Online Advertising:</strong> Gain hands-on experience with paid search advertising, display ads, and paid social media campaigns.</li>
            <li><strong>Analytics and Data-Driven Decision Making:</strong> Learn how to analyze data from Google Analytics, social media, and other platforms to make informed marketing decisions.</li>
          </motion.ul>
        </section>

        {/* Tools Used in Digital Marketing */}
        <section className="mb-16">
          <motion.h3
            className="text-3xl font-bold text-blue-600 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.7, duration: 1 }}
          >
            Tools Used in Digital Marketing
          </motion.h3>
          <motion.p
            className="text-lg mb-8 leading-relaxed text-gray-600"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.9, duration: 1 }}
          >
            Successful digital marketers use a variety of tools to optimize campaigns, track performance, and engage with customers. Here are some of the essential tools that we cover in our course:
          </motion.p>
          <div className="flex justify-around items-center mb-12">
            <div className="text-center">
              <motion.img
                src="https://cdn-icons-png.freepik.com/256/2875/2875421.png?ga=GA1.1.2056715411.1734277242&semt=ais_hybrid"
                alt="Google Ads"
                className="w-20 h-20 mb-4 mx-auto"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3, duration: 1 }}
              />
              {/* <p className="text-lg">Google Ads</p> */}
            </div>
            <div className="text-center">
              <motion.img
                src="https://cdn-icons-png.freepik.com/256/6033/6033716.png?ga=GA1.1.2056715411.1734277242&semt=ais_hybrid"
                alt="Meta Ads"
                className="w-20 h-20 mb-4 mx-auto"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.3, duration: 1 }}
              />
              {/* <p className="text-lg">Facebook Ads</p> */}
            </div>
            <div className="text-center">
              <motion.img
                src="https://cdn-icons-png.freepik.com/256/2977/2977823.png?ga=GA1.1.2056715411.1734277242&semt=ais_hybrid"
                alt="SEO"
                className="w-20 h-20 mb-4 mx-auto"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.5, duration: 1 }}
              />
              {/* <p className="text-lg">Instagram</p> */}
            </div>
            <div className="text-center">
              <motion.img
                src="https://cdn-icons-png.freepik.com/256/15047/15047316.png?ga=GA1.1.2056715411.1734277242&semt=ais_hybrid"
                alt="Linkedin"
                className="w-20 h-20 mb-4 mx-auto"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.7, duration: 1 }}
              />
              {/* <p className="text-lg">Linke</p> */}
            </div>
          </div>
        </section>

        {/* How This Course Can Change Your Career */}
        <section className="mb-16">
          <motion.h3
            className="text-3xl font-bold text-blue-600 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.9, duration: 1 }}
          >
            How This Course Can Change Your Career
          </motion.h3>
          <motion.p
            className="text-lg mb-8 leading-relaxed text-gray-600"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4, duration: 1 }}
          >
            After completing this course, you'll be equipped with the skills to create effective digital marketing campaigns, optimize websites, and analyze performance. Whether you want to work for a company or start your own digital marketing agency, the knowledge you gain will open up new career opportunities.
          </motion.p>
        </section>

        {/* Who Should Take This Course? */}
        <section className="mb-16">
          <motion.h3
            className="text-3xl font-bold text-blue-600 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.3, duration: 1 }}
          >
            Who Should Take This Course?
          </motion.h3>
          <motion.p
            className="text-lg mb-8 leading-relaxed text-gray-600"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.5, duration: 1 }}
          >
            This course is ideal for anyone eager to dive into the world of digital marketing or enhance their existing marketing skills. Whether you're a beginner or looking to specialize further, our course is designed for you.
          </motion.p>
          <motion.ul
            className="list-disc list-inside text-xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.7, duration: 1 }}
          >
            <li><strong>Aspiring Digital Marketers:</strong> If you're looking to start a career in digital marketing, this course will teach you everything you need to know.</li>
            <li><strong>Business Owners:</strong> Learn how to market your own business effectively online and grow your customer base.</li>
            <li><strong>Marketing Professionals:</strong> If you're already in the marketing field and want to expand your knowledge of digital channels, this course is a perfect fit.</li>
          </motion.ul>
        </section>

        {/* What's Included in the Course */}
        <section className="mb-16">
          <motion.h3
            className="text-3xl font-bold text-blue-600 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.9, duration: 1 }}
          >
            What’s Included in the Course?
          </motion.h3>
          <motion.p
            className="text-lg mb-8 leading-relaxed text-gray-600"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 5, duration: 1 }}
          >
            Our course is packed with resources to ensure you get a hands-on and comprehensive learning experience. Here's what you’ll get when you enroll:
          </motion.p>
          <motion.ul
            className="list-disc list-inside text-xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 5.3, duration: 1 }}
          >
            <li><strong>Video Lessons:</strong> Detailed tutorials on all major aspects of digital marketing.</li>
            <li><strong>Hands-On Projects:</strong> Real-world case studies and campaigns to build your portfolio.</li>
            <li><strong>Quizzes & Assessments:</strong> Track your progress with regular tests and quizzes.</li>
            <li><strong>Career Support:</strong> Get help with resume building, interview preparation, and more to land your first digital marketing role.</li>
          </motion.ul>
        </section>

        {/* Contact Us Button */}
        <div className="text-center my-12">
          <a
            href="/contact"
            className="inline-block px-8 py-4 text-white bg-blue-600 rounded-lg text-2xl hover:bg-blue-700 transition duration-200 transform hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default DigitalMarketingBlog;
