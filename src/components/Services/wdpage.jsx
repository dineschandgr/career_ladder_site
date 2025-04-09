import React from 'react';
import { Footer } from '../Footer/Footer';  // Corrected import path for Footer
import Nav2 from '../nav2/nav2';
import { Helmet } from 'react-helmet'; // Import React Helmet
import { FaReact, FaWordpress, FaShopify, FaGoogle, FaGit, FaAd } from 'react-icons/fa';

const WebDesignDevServices = () => {
  return (
    <div className="font-sans bg-white min-h-screen">
      <Nav2 />

      {/* Meta Tags for SEO */}
      <Helmet>
        <title>Web Design and Development Services - Creating Modern Websites for Your Business</title>
        <meta
          name="description"
          content="Looking for professional web design and development services? We help you build visually appealing, responsive, and user-friendly websites for your business."
        />
        <meta
          name="keywords"
          content="web design, web development, website development, UI/UX design, responsive design, eCommerce, WordPress development, web development"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:description"
          content="Looking for professional web design and development services? We help you build visually appealing, responsive, and user-friendly websites for your business."
        />
        <meta property="og:image" content="path-to-your-image.jpg" />
        <meta property="og:url" content="your-site-url" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-[#F3F4F6] px-6 lg:px-16 py-16 mb-16">
        <div className="text-center text-black z-10">
          <h1 className="text-2xl lg:text-4xl font-extrabold mb-4 text-blue-600">
            Professional Web Design and Development Services for Your Business
          </h1>
          <h6 className="text-xl lg:text-2xl font-medium text-gray-700">
            Build a strong online presence with custom websites designed for your business growth.
          </h6>
        </div>
      </div>

      {/* Blog Content Section */}
      <div className="px-6 lg:px-16 py-16 max-w-full mx-auto">

        {/* Introduction */}
        <section className="mb-16 flex items-center flex-row-reverse">
          <div className="flex-1">
            <h2 className="text-4xl font-extrabold text-blue-600 mb-8">
              Why Web Design and Development Services Are Crucial for Your Business?
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              A website is often the first interaction potential customers have with your business. Professional web design and development services are essential to creating a website that is visually appealing, functional, and easy to navigate. In today’s digital-first world, your website is your storefront, and it needs to effectively communicate your brand and services to your audience.
            </p>
            <p className="text-lg mb-8 leading-relaxed text-gray-600">
              Whether you're looking to build an eCommerce platform, a business portfolio, or a simple informational website, our web development services cater to businesses of all sizes and industries. We focus on building responsive, user-friendly websites that help you achieve your goals.
            </p>
          </div>
          <div className="flex-1">
            <img src="https://img.freepik.com/free-vector/ui-ux-designers-isometric-composition-with-small-people-creating-custom-design-web-site-3d-vector-illustration_1284-68939.jpg?uid=R184367681&ga=GA1.1.2056715411.1734277242&semt=ais_hybrid" alt="Web Design Importance" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </section>

        {/* Why Choose Our Web Design and Development Services? */}
        <section className="mb-16 flex items-center">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-blue-600 mb-8">
              Why Choose Our Web Design and Development Services?
            </h3>
            <p className="text-lg mb-8 leading-relaxed text-gray-600">
              Here are the key reasons to choose our web design and development services:
            </p>
            <ul className="list-disc list-inside text-xl mb-8">
              <li><strong>Custom Web Solutions:</strong> We offer tailored web design and development solutions based on your specific business needs.</li>
              <li><strong>Responsive Design:</strong> We create websites that look great on all devices, ensuring a seamless experience for your users.</li>
              <li><strong>Expert Team:</strong> Our team consists of experienced web designers and developers skilled in the latest technologies to deliver high-quality websites.</li>
              <li><strong>SEO Optimized:</strong> We design websites with SEO best practices to help improve your search engine rankings and visibility.</li>
              <li><strong>On-time Delivery:</strong> We are committed to delivering your website on time and within budget, ensuring that your business goals are met promptly.</li>
            </ul>
          </div>
          <div className="flex-1">
            <img src="https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg?uid=R184367681&ga=GA1.1.2056715411.1734277242&semt=ais_hybrid" alt="Why Choose Us" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </section>

        {/* What Will You Gain from Our Web Design and Development Services? */}
        <section className="mb-16 flex items-center flex-row-reverse">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-blue-600 mb-8">
              What Will You Gain from Our Web Design and Development Services?
            </h3>
            <p className="text-lg mb-8 leading-relaxed text-gray-600">
              Our web design and development services are not just about creating a beautiful website; we focus on making sure your website drives results for your business. Here’s what you can expect:
            </p>
            <ul className="list-disc list-inside text-xl mb-8">
              <li><strong>Visually Stunning Designs:</strong> Our creative team ensures your website is visually appealing and aligned with your brand identity.</li>
              <li><strong>Optimized Performance:</strong> We ensure that your website is fast, secure, and optimized for performance, providing a smooth user experience.</li>
              <li><strong>User-Centered UX/UI:</strong> We create intuitive and easy-to-use interfaces that enhance the user experience and improve conversion rates.</li>
              <li><strong>Scalable Solutions:</strong> We build websites with scalability in mind, allowing your site to grow as your business expands.</li>
              <li><strong>Ongoing Support:</strong> We provide ongoing maintenance and support to ensure your website remains up-to-date and fully functional.</li>
            </ul>
          </div>
          <div className="flex-1">
            <img src="https://img.freepik.com/free-photo/happy-diverse-people-holding-wed-design-board_53876-65667.jpg?uid=R184367681&ga=GA1.1.2056715411.1734277242&semt=ais_hybrid" alt="Gain from our services" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </section>

        {/* Web Design & Development Services Across Industries */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-blue-600 mb-8">
            Web Design and Development Services for Different Industries
          </h3>
          <p className="text-lg mb-8 leading-relaxed text-gray-600">
            We specialize in providing web design and development services for a wide range of industries. No matter what your business does, we can help you create a website that enhances your online presence and meets your objectives.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="text-center">
              <h4 className="text-xl font-semibold text-blue-600 mb-4">eCommerce</h4>
              <p className="text-lg text-gray-600">
                We build robust eCommerce platforms that provide secure, easy-to-use shopping experiences for your customers.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold text-blue-600 mb-4">Corporate Websites</h4>
              <p className="text-lg text-gray-600">
                We create professional, modern websites for businesses that help communicate your brand story and services effectively.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold text-blue-600 mb-4">Portfolio Websites</h4>
              <p className="text-lg text-gray-600">
                Showcase your work with a beautifully designed portfolio website that highlights your projects and achievements.
              </p>
            </div>
          </div>
        </section>

        {/* How Our Web Design and Development Services Can Help Your Business */}
        <section className="mb-16 flex items-center">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-blue-600 mb-8">
              How Our Web Design and Development Services Can Help Your Business
            </h3>
            <p className="text-lg mb-8 leading-relaxed text-gray-600">
              A website designed and developed by professionals can set your business apart from the competition. Our web design and development services ensure that you have a strong online presence that attracts more visitors, keeps them engaged, and ultimately converts them into customers.
            </p>
          </div>
          <div className="flex-1">
            <img src="https://img.freepik.com/free-photo/programming-background-collage_23-2149901770.jpg?uid=R184367681&ga=GA1.1.2056715411.1734277242&semt=ais_hybrid" alt="Business Success" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </section>

        {/* Tools for Efficient Web Design and Development */}
        <section className="mb-16">
      <h3 className="text-3xl font-bold text-blue-600 mb-8">
        Tools for Efficient Web Design and Development
      </h3>
      <p className="text-lg mb-8 leading-relaxed text-gray-600">
        We use the latest tools and technologies to ensure that your website is built efficiently, with the highest standards of quality:
      </p>
      
      <ul className="list-none space-y-6">
        <li className="flex items-center text-xl text-gray-700">
          <FaAd className="mr-4 text-blue-600" size={30} />  {/* Updated Icon */}
          <div>
            <strong>Adobe XD & Figma:</strong> For designing user interfaces and creating wireframes that align with your brand’s visual identity.
          </div>
        </li>
        <li className="flex items-center text-xl text-gray-700">
          <FaReact className="mr-4 text-blue-600" size={30} />
          <div>
            <strong>React & Angular:</strong> For building fast, responsive web applications that deliver a smooth user experience.
          </div>
        </li>
        <li className="flex items-center text-xl text-gray-700">
          <FaWordpress className="mr-4 text-blue-600" size={30} />
          <div>
            <strong>WordPress:</strong> For building dynamic, content-driven websites with customizable themes and plugins.
          </div>
        </li>
        <li className="flex items-center text-xl text-gray-700">
          <FaShopify className="mr-4 text-blue-600" size={30} />
          <div>
            <strong>Shopify:</strong> For creating user-friendly and secure eCommerce websites that are easy to manage.
          </div>
        </li>
        <li className="flex items-center text-xl text-gray-700">
          <FaGoogle className="mr-4 text-blue-600" size={30} />
          <div>
            <strong>Google Analytics:</strong> For tracking website performance and optimizing user engagement through data insights.
          </div>
        </li>
        <li className="flex items-center text-xl text-gray-700">
          <FaGit className="mr-4 text-blue-600" size={30} />
          <div>
            <strong>Git & GitHub:</strong> For version control and collaborative development to ensure your project progresses smoothly and efficiently.
          </div>
        </li>
      </ul>
    </section>

        {/* Contact Us Button */}
        <div className="text-center my-12">
          <a
            href="/contact"
            className="inline-block px-8 py-4 text-white bg-blue-600 rounded-lg text-2xl hover:bg-blue-700 transition duration-200 transform hover:scale-105"
          >
            Get in Touch
          </a>


          {/*blog */}
          <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
      <div
        className="bg-cover bg-center text-center overflow-hidden"
        style={{
          minHeight: '500px',
          backgroundImage: "url('https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040433.jpg?uid=R184367681&ga=GA1.1.2056715411.1734277242&semt=ais_hybrid')"
        }}
        title="Web Development and Design"
      >
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="mt-3 bg-black rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <div className="bg-white relative top-0 -mt-10 p-5 sm:p-10">
            <h1 className="text-gray-900 font-bold text-3xl mb-2">
              The Future of Web Development and Design
            </h1>
            <p className="text-gray-700 text-xs mt-2">
              Written By:
              <a
                href="#"
                className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
              >
                Jane Doe
              </a>{' '}
              In{' '}
              <a
                href="#"
                className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
              >
                Web Development
              </a>
              ,{' '}
              <a
                href="#"
                className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
              >
                Web Design
              </a>
            </p>

            <p className="text-base leading-8 my-5">
              Web development is the process of creating websites and applications for the internet. It involves both the front-end (the parts of the website that users see and interact with) and the back-end (the server-side components that handle business logic, databases, etc.). As technology evolves, so does the way we develop and design websites, ensuring more efficient, user-friendly, and aesthetically pleasing solutions.
            </p>

            <h3 className="text-2xl font-bold my-5">#1. The Importance of Responsive Web Design</h3>

            <p className="text-base leading-8 my-5">
              Responsive design is a crucial aspect of web development today. It ensures that your website looks great and functions properly across a wide variety of devices and screen sizes. Whether on mobile, tablet, or desktop, users should have a seamless experience. With a responsive design, you’re enhancing usability and making sure your site reaches a broader audience.
            </p>

            <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-indigo-600">
              "Responsive web design is about creating web pages that look good on all devices!"
            </blockquote>

            <p className="text-base leading-8 my-5">
              Web development trends are shifting towards a more mobile-first approach. With more users browsing on their phones, ensuring your site is optimized for mobile devices has become a key factor in website success. Along with this, using frameworks like React or Vue.js allows developers to create dynamic, responsive websites that can adapt to user preferences.
            </p>

            <h3 className="text-2xl font-bold my-5">#2. The Role of User Experience in Web Design</h3>

            <p className="text-base leading-8 my-5">
              User experience (UX) design plays a significant role in web development and design. The ultimate goal of UX design is to ensure that a website is not only functional but also provides a positive and engaging experience for users. This includes intuitive navigation, clear calls to action, and smooth transitions.
            </p>

            <p className="text-base leading-8 my-5">
              A well-designed user interface (UI) can significantly impact a website’s success by encouraging users to spend more time interacting with your site. UX and UI go hand-in-hand in making sure that users are satisfied with their journey on your website.
            </p>

            <a
              href="#"
              className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
            >
              #WebDesign
            </a>
            ,
            <a
              href="#"
              className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
            >
              #UXDesign
            </a>
            ,
            <a
              href="#"
              className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
            >
              #WebDevelopment
            </a>
            ,
            <a
              href="#"
              className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
            >
              #ResponsiveDesign
            </a>
          </div>
        </div>
      </div>
    </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WebDesignDevServices;
