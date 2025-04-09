import React from 'react';
import { Footer } from '../Footer/Footer';  // Corrected import path for Footer
import Nav2 from '../nav2/nav2';   
import { Helmet } from 'react-helmet'; // Import React Helmet

const DigitalMarketingBlog = () => {
  return (
    <div className="font-sans bg-white min-h-screen">
      <Nav2 />

      {/* Meta Tags for SEO */}
      <Helmet>
        <title>Digital Marketing Services - Elevate Your Business Online</title>
        <meta
          name="description"
          content="Grow your business with our expert digital marketing services. Learn strategies for SEO, social media, PPC, and more to boost your brand."
        />
        <meta
          name="keywords"
          content="digital marketing, SEO, PPC, social media marketing, online advertising, search engine optimization, digital strategy"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:description"
          content="Grow your business with our expert digital marketing services. Learn strategies for SEO, social media, PPC, and more to boost your brand."
        />
        <meta property="og:image" content="path-to-your-image.jpg" />
        <meta property="og:url" content="your-site-url" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-[#F3F4F6] px-6 lg:px-16 py-16 mb-16">
        <div className="text-center text-black z-10">
          <h1 className="text-2xl lg:text-4xl font-extrabold mb-4 text-blue-600">
            Supercharge Your Brand with Our Digital Marketing Services
          </h1>
          <h6 className="text-xl lg:text-2xl font-medium text-gray-700">
            Drive online growth and customer engagement with targeted digital marketing strategies.
          </h6>
        </div>
      </div>

      {/* Blog Content Section */}
      <div className="px-6 lg:px-16 py-16 max-w-full mx-auto">
        {/* Introduction */}
        <section className="mb-16 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <img src="https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150061967.jpg?uid=R184367681&ga=GA1.1.2056715411.1734277242&semt=ais_hybrid" alt="Digital Marketing" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-extrabold text-blue-600 mb-8">
              What is Digital Marketing and Why is It Essential for Your Business?
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Digital marketing refers to the use of digital channels, platforms, and technologies to promote products or services and engage with potential customers. In today’s digital-first world, it's crucial to have a robust online presence to remain competitive and reach a broader audience.
            </p>
            <p className="text-lg mb-8 leading-relaxed text-gray-600">
              Digital marketing helps businesses target specific demographics, track performance through data, and adjust strategies in real time for maximum ROI. From SEO to social media campaigns, digital marketing offers diverse tools to expand your reach and grow your brand.
            </p>
          </div>
        </section>

        {/* Why Choose Digital Marketing? */}
        <section className="mb-16 flex flex-col lg:flex-row-reverse items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <img src="https://img.freepik.com/free-photo/social-media-marketing-concept-marketing-with-applications_23-2150063163.jpg?uid=R184367681&ga=GA1.1.2056715411.1734277242&semt=ais_hybrid" alt="Why Digital Marketing" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-bold text-blue-600 mb-8">
              Why Choose Digital Marketing?
            </h3>
            <p className="text-lg mb-8 leading-relaxed text-gray-600">
              Digital marketing offers numerous advantages for businesses looking to enhance their online presence. Here are a few reasons why it's a must-have for your business:
            </p>
            <ul className="list-disc list-inside text-xl mb-8">
              <li><strong>Brand Awareness:</strong> Digital marketing increases visibility and helps your brand stay top-of-mind for potential customers.</li>
              <li><strong>Targeted Reach:</strong> With precise targeting options, digital marketing allows you to reach the right audience with the right message.</li>
              <li><strong>Measurable Results:</strong> Track and measure the performance of campaigns in real-time to make data-driven decisions.</li>
            </ul>
          </div>
        </section>

        {/* What Will You Learn in Our Digital Marketing Service? */}
        <section className="mb-16 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <img src="https://img.freepik.com/free-photo/social-media-marketing-concept-marketing-with-applications_23-2150063164.jpg?uid=R184367681&ga=GA1.1.2056715411.1734277242&semt=ais_hybrid" alt="Digital Marketing Services" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-bold text-blue-600 mb-8">
              What Will You Gain from Our Digital Marketing Services?
            </h3>
            <p className="text-lg mb-8 leading-relaxed text-gray-600">
              Our digital marketing services are designed to help your business achieve measurable growth and online success. Here’s what you can expect from our services:
            </p>
            <ul className="list-disc list-inside text-xl mb-8">
              <li><strong>SEO Optimization:</strong> We improve your website’s visibility on search engines, driving organic traffic and boosting search rankings.</li>
              <li><strong>Pay-Per-Click Advertising:</strong> We create effective PPC campaigns that target the right audience and generate leads at a low cost.</li>
              <li><strong>Social Media Marketing:</strong> We craft tailored social media campaigns to boost engagement, brand awareness, and conversions.</li>
              <li><strong>Email Marketing:</strong> Our email marketing campaigns drive customer loyalty and increase sales through personalized communication.</li>
              <li><strong>Content Marketing:</strong> We help you develop and distribute high-quality content that resonates with your target audience.</li>
              <li><strong>Analytics and Reporting:</strong> We provide actionable insights from your digital campaigns, helping you refine your strategies over time.</li>
            </ul>
          </div>
        </section>

        {/* Tools Used in Digital Marketing */}
<section className="mb-16 flex flex-col lg:flex-row-reverse items-center">
  <div className="lg:w-1/2 mb-8 lg:mb-0">
    <img 
      src="https://img.freepik.com/free-photo/marketing-strategy-connting-digital-devices-concept_53876-23053.jpg?uid=R184367681&ga=GA1.1.2056715411.1734277242&semt=ais_hybrid" 
      alt="Digital Tools" 
      className="w-full h-auto rounded-lg shadow-lg" 
    />
  </div>
  <div className="lg:w-1/2">
    <h3 className="text-3xl font-bold text-blue-600 mb-8">
      Tools Used in Digital Marketing
    </h3>
    <p className="text-lg mb-8 leading-relaxed text-gray-600">
      Successful digital marketing requires the right tools to track, optimize, and measure performance. Some of the essential tools we use include:
    </p>
    <div className="flex justify-around items-center mb-12">
      {/* SEO Tool Icon */}
      <div className="text-center">
        <img 
          src="https://cdn-icons-png.freepik.com/256/2977/2977823.png?uid=R184367681&ga=GA1.1.2056715411.1734277242&semt=ais_hybrid" 
          alt="SEO" 
          className="w-20 h-20 mb-4 mx-auto" 
        />
        <p className="text-gray-700">SEO</p>
      </div>

      {/* Google Analytics Tool Icon */}
      <div className="text-center">
        <img 
          src="https://cdn-icons-png.freepik.com/256/14857/14857368.png?uid=R184367681&ga=GA1.1.2056715411.1734277242&semt=ais_hybrid" 
          alt="Google Analytics" 
          className="w-20 h-20 mb-4 mx-auto" 
        />
        <p className="text-gray-700">Google Analytics</p>
      </div>

      {/* Social Media Tool Icon */}
      <div className="text-center">
        <img 
          src="https://img.icons8.com/ios-filled/50/000000/facebook.png" 
          alt="Social Media" 
          className="w-20 h-20 mb-4 mx-auto" 
        />
        <p className="text-gray-700">Social Media</p>
      </div>

      {/* Content Writing Tool Icon */}
      <div className="text-center">
        <img 
          src="https://cdn-icons-png.freepik.com/256/4798/4798479.png?uid=R184367681&ga=GA1.1.2056715411.1734277242&semt=ais_hybrid" 
          alt="Content Writing" 
          className="w-20 h-20 mb-4 mx-auto" 
        />
        <p className="text-gray-700">Content Writing</p>
      </div>
    </div>
  </div>
</section>


        {/* How This Service Can Grow Your Business */}
        <section className="mb-16 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <img src="https://img.freepik.com/free-vector/mobile-marketing-isometric-style_23-2148896785.jpg?uid=R184367681&ga=GA1.1.2056715411.1734277242&semt=ais_hybrid" alt="Business Growth" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-bold text-blue-600 mb-8">
              How Our Digital Marketing Services Can Transform Your Business
            </h3>
            <p className="text-lg mb-8 leading-relaxed text-gray-600">
              Our digital marketing services are designed to help you drive tangible results. Whether it’s improving brand visibility, increasing sales, or building lasting customer relationships, our strategies are tailored to meet your business goals and grow your online presence.
            </p>
          </div>
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
        {/* Blog */}
<div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
  <div
    className="bg-cover bg-center text-center overflow-hidden"
    style={{
      minHeight: '500px',
      backgroundImage: "url('https://img.freepik.com/free-photo/hands-holding-smartphone-social-media-concept_23-2150208239.jpg?uid=R184367681&ga=GA1.1.2056715411.1734277242&semt=ais_hybrid')"
    }}
    title="Digital Marketing Services"
  >
  </div>
  <div className="max-w-3xl mx-auto">
    <div className="mt-3 bg-black rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
      <div className="bg-white relative top-0 -mt-10 p-5 sm:p-10">
        <h1 className="text-gray-900 font-bold text-3xl mb-2">
          The Future of Digital Marketing
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
            Digital Marketing
          </a>
        </p>

        <p className="text-base leading-8 my-5">
          Digital marketing is the practice of promoting products or services using digital technologies, primarily on the internet, but also including mobile phones, display advertising, and other digital platforms. As technology evolves, digital marketing strategies become more sophisticated, leveraging data analytics, social media, and online campaigns to engage audiences and drive sales.
        </p>

        <h3 className="text-2xl font-bold my-5">#1. The Power of Social Media Marketing</h3>

        <p className="text-base leading-8 my-5">
          Social media marketing is one of the most impactful and cost-effective ways to reach a vast audience. Platforms like Facebook, Instagram, Twitter, and LinkedIn provide businesses with the opportunity to engage with customers in real time. By creating valuable content and running targeted ads, companies can enhance their visibility and customer engagement.
        </p>

        <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-indigo-600">
          "Social media is not just a marketing tool, it's a connection to your audience."
        </blockquote>

        <p className="text-base leading-8 my-5">
          By utilizing platforms' advanced targeting options, businesses can reach their ideal customers, build brand awareness, and increase conversion rates. The goal is to establish a meaningful connection with your audience and keep them engaged with relevant, high-quality content.
        </p>

        <h3 className="text-2xl font-bold my-5">#2. SEO: Enhancing Visibility and Organic Reach</h3>

        <p className="text-base leading-8 my-5">
          Search engine optimization (SEO) is a crucial aspect of digital marketing. It ensures that your website ranks high in search engine results, making it easier for potential customers to find your business. SEO involves optimizing your website’s structure, content, and backlinks to ensure maximum visibility on search engines like Google.
        </p>

        <p className="text-base leading-8 my-5">
          A successful SEO strategy increases organic traffic, improves your website's credibility, and helps you stay ahead of the competition. This involves conducting keyword research, optimizing on-page elements, and building high-quality backlinks from reputable sources.
        </p>

        <h3 className="text-2xl font-bold my-5">#3. Paid Advertising: Maximizing Reach and Conversions</h3>

        <p className="text-base leading-8 my-5">
          Paid advertising is another powerful tool in digital marketing. By using platforms like Google Ads or Facebook Ads, businesses can place their brand in front of the right audience, ensuring that every dollar spent on advertising is optimized for results.
        </p>

        <p className="text-base leading-8 my-5">
          Paid ads offer businesses the ability to scale quickly and target specific demographics. Whether through search ads, display ads, or social media ads, paid advertising offers an immediate way to drive traffic, generate leads, and increase sales.
        </p>

        <a
          href="#"
          className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
        >
          #DigitalMarketing
        </a>
        ,
        <a
          href="#"
          className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
        >
          #SEO
        </a>
        ,
        <a
          href="#"
          className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
        >
          #SocialMediaMarketing
        </a>
        ,
        <a
          href="#"
          className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
        >
          #PaidAdvertising
        </a>
      </div>
    </div>
  </div>
</div>

      </div>

      <Footer />
    </div>
  );
};

export default DigitalMarketingBlog;
