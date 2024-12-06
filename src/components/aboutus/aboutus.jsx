import about1 from "../../asset/aboutus/about1.png";
import about2 from "../../asset/aboutus/about2.png";
import about3 from "../../asset/aboutus/about3.png";

function About() {
  return (
    <div className="p-5 mt-10 flex justify-center items-center bg-gradient-to-r from-violet-500 to-white">
      <div className="lg:w-4/5 w-full">
        {/* Centered Heading */}
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-8 font-sans">About Us</h1>

        <div className="lg:flex lg:flex-row gap-8 flex-col">
          {/* Left Column */}
          <div className="lg:w-2/3 w-full">
            <div className="font-sans">
              {/* Main Image and Text */}
              <div className="w-full mb-6">
                <img className="w-full h-auto rounded-2xl" src={about3} alt="About Us" />
                <h2 className="text-2xl font-bold mt-4 mb-4 text-blue-900">Develop In-Demand Skills at the Best Software Training Institute in Coimbatore</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  CareerLadder's on-demand courses in emerging technologies provide you with the knowledge needed to stay ahead of the curve and succeed in today’s fast-paced world.
                </p>
              </div>
            </div>

            {/* Images on two lines with the second line centered */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-8 mt-6">
              {/* First image in second line */}
              <div className="w-full lg:w-1/2 mb-6">
                <img className="w-full h-72 object-cover rounded-2xl" src={about2} alt="Hands-on experience" />
                <p className="text-center mt-4 text-lg text-gray-700 font-medium">Hands-on experience with latest tools</p>
              </div>

              {/* Second image in second line, centered */}
              <div className="w-full lg:w-1/2 mb-6 flex justify-center">
                <div className="text-center w-full">
                  <img className="w-full h-72 object-cover rounded-2xl" src={about1} alt="Real-world applications" />
                  <p className="mt-4 text-lg text-gray-700 font-medium">Real-world applications of skills</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/3 w-full p-3 mt-10 lg:mt-0">
            <div className="mb-6 font-sans">
              <h2 className="text-2xl font-bold mb-4 text-blue-900">Comprehensive Learning Experience</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                CareerLadder is a leading software training institute located in Coimbatore. With one year of expertise in the training industry, we are committed to providing high-quality, industry-relevant courses that equip students with the skills they need to succeed in the ever-evolving tech landscape.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We offer a range of comprehensive and Future Skills Prime Certified courses that focus on practical, hands-on learning. Our courses are designed to be affordable and flexible, ensuring that every student has access to top-tier education without compromising on quality. At CareerLadder, we believe in personalized attention, with experienced professionals guiding you through real-world scenarios to ensure you gain the expertise needed to excel in the software industry.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Join CareerLadder today and take the first step towards building a successful career in software development!
              </p>
            </div>

            <div className="font-sans">
              <h2 className="text-2xl font-bold mb-4 text-blue-900">Assured Job Placement</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At CareerLadder, we go beyond just providing excellent training—we are dedicated to ensuring that you are job-ready and confident in your skills. With our comprehensive placement assistance, we offer the support and guidance you need to secure your dream job in your chosen field.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our placement team works closely with you to refine your resume, improve your interview skills, and connect you with top companies in the industry. We partner with leading organizations to help you access the best career opportunities available.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With CareerLadder's placement assistance, you can be assured that you have the right tools, confidence, and resources to land the job you deserve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
