import React from 'react';
import { Footer } from '../Footer/Footer';  // Corrected import path for Footer
import Nav2 from '../nav2/nav2';   
import { Helmet } from 'react-helmet'; // Import React Helmet

const SEOServices = () => {
  return (
    <div className="font-sans bg-white min-h-screen">
      <Nav2 />

      {/* Meta Tags for SEO */}
      <Helmet>
        <title>SEO Services - Boost Your Online Presence with Professional SEO</title>
        <meta
          name="description"
          content="Looking for professional SEO services? We help optimize your website to improve visibility, drive organic traffic, and increase conversions."
        />
        <meta
          name="keywords"
          content="SEO services, search engine optimization, digital marketing, SEO experts, local SEO, on-page SEO, off-page SEO"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:description"
          content="Looking for professional SEO services? We help optimize your website to improve visibility, drive organic traffic, and increase conversions."
        />
        <meta property="og:image" content="path-to-your-image.jpg" />
        <meta property="og:url" content="your-site-url" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-[#F3F4F6] px-6 lg:px-16 py-16 mb-16">
        <div className="text-center text-black z-10">
          <h1 className="text-2xl lg:text-4xl font-extrabold mb-4 text-blue-600">
            Professional SEO Services to Boost Your Online Presence
          </h1>
          <h6 className="text-xl lg:text-2xl font-medium text-gray-700">
            Optimize your website, drive more organic traffic, and increase conversions with our expert SEO services.
          </h6>
        </div>
      </div>

      {/* Blog Content Section */}
      <div className="px-6 lg:px-16 py-16 max-w-full mx-auto"> {/* Updated to make content full width */}

        {/* Introduction */}
        <section className="flex items-center mb-16">
          <div className="flex-1">
            <h2 className="text-4xl font-extrabold text-blue-600 mb-8">
              Why SEO Services Are Crucial for Your Business?
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              In today’s digital-first world, being visible on search engines is essential for any business. SEO (Search Engine Optimization) is the process of optimizing your website to rank higher on search engine results pages (SERPs). With effective SEO, you can increase your online visibility, drive organic traffic to your website, and convert visitors into customers.
            </p>
            <p className="text-lg mb-8 leading-relaxed text-gray-600">
              Whether you are a small local business or a large enterprise, SEO is the key to expanding your online presence and staying ahead of competitors. Our professional SEO services ensure that your website ranks higher, reaches more people, and drives valuable traffic to help your business grow.
            </p>
          </div>
          <div className="flex-1">
            <img src="https://img.freepik.com/free-photo/employee-working-marketing-setting_23-2151871171.jpg?uid=R184367681&ga=GA1.1.2056715411.1734277242&semt=ais_hybrid" alt="SEO services" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </section>

        {/* Why Choose Our SEO Services? */}
        <section className="flex items-center mb-16 flex-row-reverse">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-blue-600 mb-8">
              Why Choose Our SEO Services?
            </h3>
            <p className="text-lg mb-8 leading-relaxed text-gray-600">
              Here are the key reasons to choose our SEO services:
            </p>
            <ul className="list-disc list-inside text-xl mb-8">
              <li><strong>Comprehensive SEO Strategies:</strong> We offer end-to-end SEO services, from keyword research to on-page and off-page SEO, ensuring your website is fully optimized.</li>
              <li><strong>Expert Team:</strong> Our team consists of experienced SEO specialists who stay updated with the latest SEO trends and algorithm changes to keep your website ranking high.</li>
              <li><strong>Transparent Reporting:</strong> We provide detailed reports and insights to track your website’s SEO performance and growth over time.</li>
              <li><strong>Tailored Solutions:</strong> Our SEO services are customized to meet the unique needs of your business, industry, and target audience.</li>
              <li><strong>Proven Results:</strong> We have a track record of delivering tangible results, from improved rankings to increased organic traffic and conversions.</li>
            </ul>
          </div>
          <div className="flex-1">
            <img src="https://img.freepik.com/free-photo/homepage-concept-with-search-bar_23-2150040204.jpg?uid=R184367681&ga=GA1.1.2056715411.1734277242&semt=ais_hybrid" alt="SEO benefits" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </section>

        {/* What Will You Gain from Our SEO Services? */}
        <section className="flex items-center mb-16">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-blue-600 mb-8">
              What Will You Gain from Our SEO Services?
            </h3>
            <p className="text-lg mb-8 leading-relaxed text-gray-600">
              Our SEO services focus on delivering measurable results that directly impact your business. Here’s what you can expect:
            </p>
            <ul className="list-disc list-inside text-xl mb-8">
              <li><strong>Higher Search Engine Rankings:</strong> We work on improving your website’s position on major search engines like Google, helping you stand out in search results.</li>
              <li><strong>Increased Organic Traffic:</strong> Our SEO strategies help drive more qualified organic traffic to your website, which is more likely to convert into paying customers.</li>
              <li><strong>Better User Experience:</strong> SEO isn’t just about ranking; we focus on improving the overall user experience, which also contributes to higher engagement and conversions.</li>
              <li><strong>Long-Term Results:</strong> SEO is an ongoing process. Our strategies are designed to bring lasting results, keeping your website ahead of the competition in the long run.</li>
              <li><strong>Cost-Effective Marketing:</strong> Compared to paid advertising, SEO offers a higher return on investment (ROI) by generating free organic traffic.</li>
            </ul>
          </div>
          <div className="flex-1">
            <img src="https://img.freepik.com/free-photo/laptop-ejecting-graphics-arrows_1232-286.jpg?uid=R184367681&ga=GA1.1.2056715411.1734277242&semt=ais_hybrid" alt="SEO results" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </section>

        {/* SEO Services Across Industries */}
        <section className="flex items-center mb-16 flex-row-reverse">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-blue-600 mb-8">
              SEO Services for Different Industries
            </h3>
            <p className="text-lg mb-8 leading-relaxed text-gray-600">
              Our SEO services are designed to cater to businesses in various industries. Whether you're a local service provider or a global eCommerce brand, we can help you rank higher and grow your online presence.
            </p>
          </div>
          <div className="flex-1">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="text-center">
                <h4 className="text-xl font-semibold text-blue-600 mb-4">Local SEO</h4>
                <p className="text-lg text-gray-600">
                  We specialize in local SEO strategies to help your business rank higher in local search results and attract nearby customers.
                </p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-semibold text-blue-600 mb-4">eCommerce SEO</h4>
                <p className="text-lg text-gray-600">
                  We optimize eCommerce websites to improve product visibility, increase sales, and drive organic traffic to your online store.
                </p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-semibold text-blue-600 mb-4">Enterprise SEO</h4>
                <p className="text-lg text-gray-600">
                  We help large-scale businesses scale their SEO efforts and implement effective strategies to enhance their online visibility.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How Our SEO Services Can Help Your Business */}
        <section className="flex items-center mb-16">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-blue-600 mb-8">
              How Our SEO Services Can Help Your Business
            </h3>
            <p className="text-lg mb-8 leading-relaxed text-gray-600">
              With a well-optimized website, your business can benefit from improved online visibility, more traffic, and a higher conversion rate. Our team of SEO experts uses proven techniques and best practices to help you achieve your business goals and stay ahead of your competitors in search engine rankings.
            </p>
          </div>
          <div className="flex-1">
            <img src="https://img.freepik.com/free-photo/people-office-analyzing-checking-finance-graphs_23-2150377132.jpg?uid=R184367681&ga=GA1.1.2056715411.1734277242&semt=ais_hybrid" alt="SEO impact" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </section>

      {/* Tools for Efficient SEO */}
<section className="flex items-center mb-16 flex-row-reverse space-x-10">
  <div className="flex-1">
    <h3 className="text-3xl font-bold text-blue-600 mb-8">
      Tools for Efficient SEO
    </h3>
    <p className="text-lg mb-8 leading-relaxed text-gray-600">
      We use the latest SEO tools and technologies to ensure that your website is optimized efficiently and stays ahead in the search rankings:
    </p>
    <ul className="list-none space-y-6">
      <li className="flex items-start space-x-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12h3m0 0l-3-3m3 3l-3 3M6 12h3m0 0l-3-3m3 3l-3 3M3 5h18M3 19h18" />
        </svg>
        <div className="text-lg text-gray-700">
          <strong>Google Analytics:</strong> For tracking website performance and gathering valuable insights about your audience.
        </div>
      </li>
      <li className="flex items-start space-x-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.71 10.29a1 1 0 011.42 0l2.58 2.58c.35.35.35.92 0 1.27l-2.58 2.58a1 1 0 01-1.42-1.42L13.17 13H8a1 1 0 010-2h5.17l-1.46-1.46a1 1 0 010-1.42z" />
        </svg>
        <div className="text-lg text-gray-700">
          <strong>SEMrush:</strong> A powerful tool for keyword research, competitor analysis, and backlink tracking.
        </div>
      </li>
      <li className="flex items-start space-x-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6h3m0 0l-3-3m3 3l-3 3M6 19h3m0 0l-3-3m3 3l-3 3M12 9h3m0 0l-3-3m3 3l-3 3M12 14h3m0 0l-3-3m3 3l-3 3" />
        </svg>
        <div className="text-lg text-gray-700">
          <strong>Ahrefs:</strong> For comprehensive SEO audits, backlink analysis, and competitor benchmarking.
        </div>
      </li>
      <li className="flex items-start space-x-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h18M3 19h18M6 19l6-6 6 6" />
        </svg>
        <div className="text-lg text-gray-700">
          <strong>Yoast SEO:</strong> A plugin to optimize on-page SEO for WordPress sites, ensuring content is fully optimized for search engines.
        </div>
      </li>
      <li className="flex items-start space-x-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 2v5a3 3 0 003 3h9a3 3 0 003-3V2M6 22v-5a3 3 0 013-3h9a3 3 0 013 3v5" />
        </svg>
        <div className="text-lg text-gray-700">
          <strong>Google Search Console:</strong> For tracking and improving website performance on Google search results.
        </div>
      </li>
    </ul>
  </div>
  <div className="flex-1">
    <img src="https://img.freepik.com/free-photo/person-working-html-computer_23-2150038845.jpg?uid=R184367681&ga=GA1.1.2056715411.1734277242&semt=ais_hybrid" alt="SEO tools" className="w-full h-auto rounded-lg shadow-lg" />
  </div>
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
{/* SEO Services */}
<div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
  <div
    className="bg-cover bg-center text-center overflow-hidden"
    style={{
      minHeight: '500px',
      backgroundImage: "url('https://img.freepik.com/free-photo/high-angle-women-working-together-office_23-2150062338.jpg?uid=R184367681&ga=GA1.1.2056715411.1734277242&semt=ais_hybrid')"
    }}
    title="SEO Services"
  >
  </div>
  <div className="max-w-3xl mx-auto">
    <div className="mt-3 bg-black rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
      <div className="bg-white relative top-0 -mt-10 p-5 sm:p-10">
        <h1 className="text-gray-900 font-bold text-3xl mb-2">
          Drive Traffic & Boost Rankings with Expert SEO Services
        </h1>
        <p className="text-gray-700 text-xs mt-2">
          Written By:
          <a
            href="#"
            className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
          >
            Sarah Williams
          </a>{' '}
          In{' '}
          <a
            href="#"
            className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
          >
            SEO Services
          </a>
        </p>

        <p className="text-base leading-8 my-5">
          At [Your Company], we specialize in search engine optimization (SEO) services that help businesses improve their online visibility and drive organic traffic. Whether you're looking to optimize your website, build backlinks, or enhance your content, our SEO strategies are designed to increase your rankings and grow your business.
        </p>

        <h3 className="text-2xl font-bold my-5">#1. Comprehensive Website SEO Audits</h3>

        <p className="text-base leading-8 my-5">
          A thorough SEO audit is the foundation of any successful SEO strategy. We perform in-depth audits to identify areas for improvement on your website, such as broken links, slow loading speeds, and on-page SEO elements. Our audits help us develop a tailored plan to enhance your website's performance and search engine rankings.
        </p>

        <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-indigo-600">
          "An SEO audit is the first step to understanding how well your website performs and how it can be improved."
        </blockquote>

        <p className="text-base leading-8 my-5">
          After conducting the audit, we provide actionable insights and recommendations, which we’ll implement to improve the technical, on-page, and off-page aspects of your site.
        </p>

        <h3 className="text-2xl font-bold my-5">#2. On-Page SEO Optimization</h3>

        <p className="text-base leading-8 my-5">
          On-page SEO is essential for improving your website's visibility on search engines. Our team optimizes various elements on your website, including titles, meta descriptions, headers, and images, to ensure they align with SEO best practices. We also focus on creating high-quality content that is keyword-rich and relevant to your audience.
        </p>

        <p className="text-base leading-8 my-5">
          By optimizing your content and structure, we improve both your user experience and search engine rankings.
        </p>

        <h3 className="text-2xl font-bold my-5">#3. Link Building & Backlink Strategy</h3>

        <p className="text-base leading-8 my-5">
          Backlinks play a crucial role in SEO success. Our link-building strategies focus on acquiring high-quality backlinks from reputable sources, helping to establish your website's authority and trustworthiness in your industry.
        </p>

        <p className="text-base leading-8 my-5">
          We use white-hat SEO techniques to build natural, authoritative backlinks that improve your search engine rankings while adhering to best practices.
        </p>

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
          #DigitalMarketing
        </a>
        ,
        <a
          href="#"
          className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
        >
          #LinkBuilding
        </a>
        ,
        <a
          href="#"
          className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
        >
          #ContentMarketing
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

export default SEOServices;
