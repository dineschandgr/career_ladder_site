// src/components/Services.js

import React from 'react';
import Nav2 from '../nav2/nav2';
import Nav from "../nav/nav";

const services = [
  {
    title: 'Digital Marketing',
    description:
      'We help businesses enhance their online presence with tailored digital marketing strategies, including SEO, SEM, and social media campaigns.',
    icon: '💻',
    imageUrl: 'https://img.freepik.com/free-photo/hand-holding-smartphone-social-media-concept_23-2150208245.jpg?uid=R184367681&ga=GA1.1.2056715411.1734277242&semt=ais_hybrid',
    whatWeDo: "We’ll create personalized campaigns to help you increase online traffic, attract new customers, and boost sales.",
    realExample: "For example, we helped a local business triple their online sales through targeted Facebook and Instagram ads in just 3 months.",
  },
  {
    title: 'Web Design & Development',
    description:
      'Crafting stunning, responsive, and user-friendly websites that align with your business goals and offer great user experience.',
    icon: '🌐',
    imageUrl: 'https://img.freepik.com/free-photo/ui-ux-representations-with-laptop_23-2150201871.jpg?uid=R184367681&ga=GA1.1.2056715411.1734277242&semt=ais_hybrid',
    whatWeDo: "We’ll design and develop a custom website that not only looks great but also converts visitors into customers.",
    realExample: "We recently redesigned a client’s e-commerce site, resulting in a 40% increase in conversion rates within 6 weeks.",
  },
  {
    title: 'Staffing',
    description:
      'We offer expert staffing solutions to help you find the right talent, whether it be for temporary roles or long-term positions.',
    icon: '👥',
    imageUrl: 'https://img.freepik.com/free-photo/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working_146671-13569.jpg?uid=R184367681&ga=GA1.1.2056715411.1734277242&semt=ais_hybrid',
    whatWeDo: "We’ll connect you with the right talent that fits your company’s culture and business needs, quickly and efficiently.",
    realExample: "We recently placed a project manager at a fast-growing tech startup who led the team to launch a successful product in 4 months.",
  },
  {
    title: 'Graphic Designing',
    description:
      'Our creative graphic designers provide visually compelling logos, branding, and marketing materials that elevate your brand image.',
    icon: '🎨',
    imageUrl: 'https://img.freepik.com/free-photo/marketing-strategy-planning-strategy-concept_53876-42950.jpg?uid=R184367681&ga=GA1.1.2056715411.1734277242&semt=ais_hybrid',
    whatWeDo: "We’ll create a distinctive brand identity that stands out and resonates with your target audience.",
    realExample: "For one client, we revamped their logo and marketing materials, which led to a 25% increase in brand recognition and engagement.",
  },
  {
    title: 'Content Writing',
    description:
      'Our experienced content writers craft engaging and SEO-friendly content for websites, blogs, and marketing materials.',
    icon: '✍️',
    imageUrl: 'https://img.freepik.com/free-photo/media-journalism-global-daily-news-content-concept_53876-123733.jpg?uid=R184367681&ga=GA1.1.2056715411.1734277242&semt=ais_hybrid',
    whatWeDo: "We’ll produce high-quality, SEO-optimized content that not only drives traffic but also keeps your audience engaged.",
    realExample: "We helped a client increase their organic blog traffic by 50% within 3 months by creating relevant, keyword-rich content.",
  },
  {
    title: 'SEO Services',
    description:
      'Our SEO experts help optimize your website to rank higher on search engines, increasing your visibility and driving traffic.',
    icon: '🔍',
    imageUrl: 'https://img.freepik.com/free-photo/top-view-tools-marketing_1134-83.jpg?uid=R184367681&ga=GA1.1.2056715411.1734277242&semt=ais_hybrid',
    whatWeDo: "We’ll optimize your website so it ranks higher on search engines, driving more organic traffic and leads.",
    realExample: "We helped an e-commerce website improve its SEO ranking, resulting in a 70% increase in traffic and a 35% boost in revenue.",
  },
];

const Service = ({ title, description, imageUrl, whatWeDo, realExample }) => {
  return (
    <div className="flex items-center justify-between bg-white p-6 rounded-xl shadow-md mb-8 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500">
      {/* Image on the left */}
      <div className="w-1/4">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover rounded-xl" />
      </div>

      {/* Content on the right */}
      <div className="ml-6 w-2/3">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h3>
        <p className="text-lg text-gray-700 mb-4">{description}</p>
        <p className="text-lg font-semibold text-gray-800 mb-2">What We Will Do for You:</p>
        <p className="text-gray-600 mb-4">{whatWeDo}</p>
        <p className="text-lg font-semibold text-gray-800 mb-2">Real-Time Example:</p>
        <p className="text-gray-600 mb-4">{realExample}</p>
        <button 
  onClick={() => window.location.href = '/contact'} 
  className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"
>
  Get Started
</button>

      </div>
    </div>
  );
};

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Nav />
      <Nav2 /> {/* Render Nav2 component here, outside of the services array */}

      <div className="container mx-auto text-center py-16">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-8">Our Services</h2>
        <p className="text-xl text-gray-600 mb-16">
          We provide top-notch services to help your business grow and succeed in the digital world.
        </p>

        {/* List of services without cards */}
        <div>
          {services.map((service, index) => (
            <Service
              key={index}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              whatWeDo={service.whatWeDo}
              realExample={service.realExample}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
