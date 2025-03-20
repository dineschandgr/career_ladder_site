import work1 from "../../asset/workshop/workshop1.jpg";
import work2 from "../../asset/workshop/workshop2.jpg";
import work3 from "../../asset/workshop/workshop3.jpg";

function Workshop() {
  return (
    <div className="font-sans bg-white py-10">
      {/* Heading Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Explore Our <span className="text-indigo-600">Workshops</span>
        </h1>
        <p className="text-lg text-gray-600 mt-2">Engage with cutting-edge technologies and expand your knowledge.</p>
      </div>

      {/* Workshop Content */}
      <div className="container mx-auto px-5">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-12">

          {/* First Workshop */}
          <div className="group relative overflow-hidden rounded-xl shadow-2xl bg-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-indigo-50">
            <div className="relative w-full h-60">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                src={work2}
                alt="Cloud Native Microservices"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40"></div>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-indigo-700">Cloud Native Microservices</h3>
              <p className="mt-3 text-sm text-gray-600">
                A Seminar on Cloud Native Microservices using Spring Boot at Nehru Institute of Engineering and Technology.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-indigo-600 text-white text-center transform translate-y-full group-hover:translate-y-0 transition-all duration-300">
              <span className="font-bold text-sm">Learn More</span>
            </div>
          </div>

          {/* Second Workshop */}
          <div className="group relative overflow-hidden rounded-xl shadow-2xl bg-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-indigo-50">
            <div className="relative w-full h-60">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                src={work3}
                alt="Cyber Security Workshop"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40"></div>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-indigo-700">Cyber Security Workshop</h3>
              <p className="mt-3 text-sm text-gray-600">
                1-day workshop on Cyber security at Tamil Nadu College of Engineering.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-indigo-600 text-white text-center transform translate-y-full group-hover:translate-y-0 transition-all duration-300">
              <span className="font-bold text-sm">Learn More</span>
            </div>
          </div>

          {/* Third Workshop */}
          <div className="group relative overflow-hidden rounded-xl shadow-2xl bg-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-indigo-50">
            <div className="relative w-full h-60">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                src={work1}
                alt="AI and ML Internship"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40"></div>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-indigo-700">AI and ML Internship</h3>
              <p className="mt-3 text-sm text-gray-600">
                Karunya University students attending Artificial Intelligence and Machine Learning Internship.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-indigo-600 text-white text-center transform translate-y-full group-hover:translate-y-0 transition-all duration-300">
              <span className="font-bold text-sm">Learn More</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Spacing */}
      <div className="mt-16"></div>
    </div>
  );
}

export default Workshop;
