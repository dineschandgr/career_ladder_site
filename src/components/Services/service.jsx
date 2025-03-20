import React from 'react';

const services = [
  {
    title: 'Digital Marketing',
    description:
      'We help businesses enhance their online presence with tailored digital marketing strategies, including SEO, SEM, and social media campaigns.',
    icon: '💻',
    imageUrl: 'https://img.freepik.com/free-photo/hand-holding-smartphone-social-media-concept_23-2150208245.jpg?uid=R184367681&ga=GA1.1.2056715411.1734277242&semt=ais_hybrid',
  },
  {
    title: 'Web Design & Development',
    description:
      'Crafting stunning, responsive, and user-friendly websites that align with your business goals and offer great user experience.',
    icon: '🌐',
    imageUrl: 'https://img.freepik.com/free-photo/ui-ux-representations-with-laptop_23-2150201871.jpg?uid=R184367681&ga=GA1.1.2056715411.1734277242&semt=ais_hybrid',
  },
  {
    title: 'Staffing',
    description:
      'We offer expert staffing solutions to help you find the right talent, whether it be for temporary roles or long-term positions.',
    icon: '👥',
    imageUrl: 'https://img.freepik.com/free-photo/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working_146671-13569.jpg?uid=R184367681&ga=GA1.1.2056715411.1734277242&semt=ais_hybrid',
  },
  {
    title: 'Graphic Designing',
    description:
      'Our creative graphic designers provide visually compelling logos, branding, and marketing materials that elevate your brand image.',
    icon: '🎨',
    imageUrl: 'https://img.freepik.com/free-photo/marketing-strategy-planning-strategy-concept_53876-42950.jpg?uid=R184367681&ga=GA1.1.2056715411.1734277242&semt=ais_hybrid',
  },
  {
    title: 'Content Writing',
    description:
      'Our experienced content writers craft engaging and SEO-friendly content for websites, blogs, and marketing materials.',
    icon: '✍️',
    imageUrl: 'https://img.freepik.com/free-photo/media-journalism-global-daily-news-content-concept_53876-123733.jpg?uid=R184367681&ga=GA1.1.2056715411.1734277242&semt=ais_hybrid',
  },
  {
    title: 'SEO Services',
    description:
      'Our SEO experts help optimize your website to rank higher on search engines, increasing your visibility and driving traffic.',
    icon: '🔍',
    imageUrl: 'https://img.freepik.com/free-photo/top-view-tools-marketing_1134-83.jpg?uid=R184367681&ga=GA1.1.2056715411.1734277242&semt=ais_hybrid',
  },
  {
    title: 'E-commerce Solutions',
    description:
      'Empower your business with customized e-commerce solutions, from website design to secure payment systems and integration with multiple platforms.',
    icon: '🛒',
    imageUrl: 'https://img.freepik.com/free-photo/ecommerce-website-design-marketing-strategy-concept_53876-94933.jpg?uid=R184367681&ga=GA1.1.2056715411.1734277242&semt=ais_hybrid',
  },
];

const ServiceCard = ({ title, description, imageUrl, icon }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden">
      <div
        className="h-48 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="text-4xl">{icon}</div>
          <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
       
      </div>
    </div>
  );
};

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        {/* Header Section (Centered) */}
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Our Services</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-4xl mx-auto">
            Our services are designed to help you enhance your business operations, whether it's improving your online presence, finding
            top-tier talent, or upgrading your digital assets.
          </p>
        </div>

        {/* Centered Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
