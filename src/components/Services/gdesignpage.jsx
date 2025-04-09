import React from 'react';
import { Footer } from '../Footer/Footer';  // Corrected import path for Footer
import Nav2 from '../nav2/nav2';   
import { Helmet } from 'react-helmet'; // Import React Helmet

const GraphicDesignServices = () => {
  return (
    <div className="font-sans bg-white min-h-screen">
      <Nav2 />

      {/* Meta Tags for SEO */}
      <Helmet>
        <title>Graphic Design Services - Custom Designs for Your Business</title>
        <meta
          name="description"
          content="Looking for professional graphic design services? We help create visually appealing, unique designs for your business that leave a lasting impression."
        />
        <meta
          name="keywords"
          content="graphic design, logo design, branding, print design, marketing materials, business graphics, visual identity"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:description"
          content="Looking for professional graphic design services? We help create visually appealing, unique designs for your business that leave a lasting impression."
        />
        <meta property="og:image" content="path-to-your-image.jpg" />
        <meta property="og:url" content="your-site-url" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-[#F3F4F6] px-6 lg:px-16 py-16 mb-16">
        <div className="text-center text-black z-10">
          <h1 className="text-2xl lg:text-4xl font-extrabold mb-4 text-blue-600">
            Professional Graphic Design Services to Elevate Your Brand
          </h1>
          <h6 className="text-xl lg:text-2xl font-medium text-gray-700">
            Enhance your brand's visual identity with creative and impactful graphic designs.
          </h6>
        </div>
      </div>

      {/* Blog Content Section */}
      <div className="px-6 lg:px-16 py-16 max-w-full mx-auto"> {/* Updated to make content full width */}

        {/* Introduction with Image on the Left */}
        <section className="flex flex-col lg:flex-row mb-16">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <img 
              src="https://img.freepik.com/free-photo/back-view-male-engineer-drawing-mechanical-prototype-using-cad-software-living-room-girlfriend-background_482257-31247.jpg?uid=R184367681&ga=GA1.1.2056715411.1734277242&semt=ais_hybrid" 
              alt="Graphic Design Example" 
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl font-extrabold text-blue-600 mb-8">
              Why Graphic Design Services Are Crucial for Your Business?
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Graphic design is not just about making things look good. It is a powerful tool to communicate your brand's identity, message, and values visually. Professional graphic design services are essential for creating a cohesive, memorable, and impactful visual presence for your business.
            </p>
            <p className="text-lg mb-8 leading-relaxed text-gray-600">
              Whether you need a new logo, branding materials, print designs, or digital marketing assets, our graphic design services are tailored to your business needs. We focus on creating designs that are both aesthetically appealing and strategically aligned with your business goals.
            </p>
          </div>
        </section>

        {/* Why Choose Our Graphic Design Services with Image on the Right */}
        <section className="flex flex-col lg:flex-row-reverse mb-16">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <img 
              src="https://img.freepik.com/free-photo/woman-with-editor-occupation-wearing-headphones_482257-10564.jpg?uid=R184367681&ga=GA1.1.2056715411.1734277242&semt=ais_hybrid" 
              alt="Creative Design" 
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <h3 className="text-3xl font-bold text-blue-600 mb-8">
              Why Choose Our Graphic Design Services?
            </h3>
            <p className="text-lg mb-8 leading-relaxed text-gray-600">
              Here are the key reasons to choose our graphic design services:
            </p>
            <ul className="list-disc list-inside text-xl mb-8">
              <li><strong>Custom Designs:</strong> We offer tailor-made design solutions that match your unique brand vision and business needs.</li>
              <li><strong>Creative Expertise:</strong> Our team of experienced designers brings creativity and innovation to every project to make your brand stand out.</li>
              <li><strong>Consistent Branding:</strong> We ensure consistency across all your marketing materials, creating a unified and professional brand image.</li>
              <li><strong>Quick Turnaround:</strong> We deliver high-quality designs on time, helping you meet deadlines and stay on track with your business goals.</li>
              <li><strong>Affordable Pricing:</strong> Our graphic design services are competitively priced to ensure you get great value without compromising quality.</li>
            </ul>
          </div>
        </section>

        {/* What Will You Gain from Our Graphic Design Services with Image on the Left */}
        <section className="flex flex-col lg:flex-row mb-16">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <img 
              src="https://img.freepik.com/free-photo/digital-art-style-illustration-graphic-designer_23-2151536948.jpg?uid=R184367681&ga=GA1.1.2056715411.1734277242&semt=ais_hybrid" 
              alt="Results of Graphic Design" 
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <h3 className="text-3xl font-bold text-blue-600 mb-8">
              What Will You Gain from Our Graphic Design Services?
            </h3>
            <p className="text-lg mb-8 leading-relaxed text-gray-600">
              Our graphic design services are designed to deliver tangible results for your business. Here’s what you can expect:
            </p>
            <ul className="list-disc list-inside text-xl mb-8">
              <li><strong>Strong Visual Identity:</strong> We craft compelling and memorable designs that effectively communicate your brand’s essence.</li>
              <li><strong>Improved Engagement:</strong> Our designs are created to attract attention, engage your audience, and drive conversions.</li>
              <li><strong>Enhanced Professionalism:</strong> Our designs help your business appear polished and trustworthy, making a positive impact on potential clients.</li>
              <li><strong>Market Differentiation:</strong> We help you stand out from competitors with unique, creative designs that reflect your business’s personality.</li>
            </ul>
          </div>
        </section>
         {/* Tools for Efficient Graphic Design */}
         <section className="mb-16">
          <h3 className="text-3xl font-bold text-blue-600 mb-8">
            Tools for Efficient Graphic Design
          </h3>
          <p className="text-lg mb-8 leading-relaxed text-gray-600">
            We use the latest design tools and technologies to ensure that your designs are created efficiently and with the highest standards of quality:
          </p>
          <ul className="list-disc list-inside text-xl mb-8">
            <li><strong>Adobe Photoshop & Illustrator:</strong> For creating detailed, high-quality graphics and illustrations.</li>
            <li><strong>Canva:</strong> For creating beautiful social media graphics and marketing materials quickly and efficiently.</li>
            <li><strong>CorelDRAW:</strong> For vector graphics and detailed design work.</li>
            <li><strong>InDesign:</strong> For designing professional layouts, including brochures, magazines, and other printed materials.</li>
            <li><strong>Sketch:</strong> For designing web and mobile interfaces with a user-friendly design system.</li>
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
        </div>
        {/* Graphic Design Services */}
<div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
  <div
    className="bg-cover bg-center text-center overflow-hidden"
    style={{
      minHeight: '500px',
      backgroundImage: "url('https://img.freepik.com/free-photo/woman-with-editor-occupation-wearing-headphones_482257-10564.jpg?uid=R184367681&ga=GA1.1.2056715411.1734277242&semt=ais_hybrid')"
    }}
    title="Graphic Design Services"
  >
  </div>
  <div className="max-w-3xl mx-auto">
    <div className="mt-3 bg-black rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
      <div className="bg-white relative top-0 -mt-10 p-5 sm:p-10">
        <h1 className="text-gray-900 font-bold text-3xl mb-2">
          Elevate Your Brand with Professional Graphic Design
        </h1>
        <p className="text-gray-700 text-xs mt-2">
          Written By:
          <a
            href="#"
            className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
          >
            Sarah Johnson
          </a>{' '}
          In{' '}
          <a
            href="#"
            className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
          >
            Graphic Design
          </a>
        </p>

        <p className="text-base leading-8 my-5">
          At [Your Company], we understand the importance of visual storytelling. Our graphic design services are tailored to help your brand stand out and communicate its message effectively. Whether you need a logo, website design, or marketing materials, we have the expertise to bring your vision to life.
        </p>

        <h3 className="text-2xl font-bold my-5">#1. Custom Logo Design</h3>

        <p className="text-base leading-8 my-5">
          A logo is the face of your brand, and it’s essential to make a lasting impression. Our team of graphic designers will work with you to create a unique, memorable logo that represents your brand identity. From concept to execution, we ensure that your logo communicates your values and stands out in your industry.
        </p>

        <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-indigo-600">
          "Your logo is the cornerstone of your brand’s visual identity."
        </blockquote>

        <p className="text-base leading-8 my-5">
          We focus on crafting clean, professional designs that are both modern and timeless. A great logo not only defines your brand but also resonates with your target audience and builds brand loyalty.
        </p>

        <h3 className="text-2xl font-bold my-5">#2. Website & User Interface Design</h3>

        <p className="text-base leading-8 my-5">
          First impressions matter, and your website’s design is often the first point of contact with potential customers. Our graphic design services ensure your website is visually appealing, user-friendly, and aligned with your brand’s identity. We focus on creating seamless experiences that engage your visitors and keep them coming back.
        </p>

        <p className="text-base leading-8 my-5">
          With a strong emphasis on UI/UX principles, we ensure your website is intuitive and easy to navigate. Whether it’s a business website, an eCommerce platform, or a portfolio, our designs will enhance your online presence and drive results.
        </p>

        <h3 className="text-2xl font-bold my-5">#3. Marketing Materials & Print Design</h3>

        <p className="text-base leading-8 my-5">
          Consistency across all of your marketing materials is key to reinforcing your brand message. We create compelling and visually striking brochures, business cards, flyers, and other print materials that align with your digital branding. Whether you need a brochure for a trade show or business cards for networking, our designs will make sure your brand stands out.
        </p>

        <a
          href="#"
          className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
        >
          #GraphicDesign
        </a>
        ,
        <a
          href="#"
          className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
        >
          #LogoDesign
        </a>
        ,
        <a
          href="#"
          className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
        >
          #UIUXDesign
        </a>
        ,
        <a
          href="#"
          className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
        >
          #Branding
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

export default GraphicDesignServices;
