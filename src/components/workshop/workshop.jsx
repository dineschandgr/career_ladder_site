import work1 from "../../asset/workshop/workshop1.jpg";
import work2 from "../../asset/workshop/workshop2.jpg";
import work3 from "../../asset/workshop/workshop3.jpg";

function Workshop() {
  return (
    <div className="font-sans bg-gradient-to-r to-white p-5">
      {/* Heading Section */}
      <div className="flex justify-center lg:mb-5 text-black lg:mt-8 mt-9">
        <h1 className="text-3xl lg:text-4xl font-serif font-bold">
          Our <span className="text-blue-800">Workshop</span>
        </h1>
      </div>

      {/* Workshop Content */}
      <div className="mx-auto p-3 lg:p-0 lg:w-[80%] w-full mt-5">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          
          {/* First Workshop */}
          <div className="border p-3 rounded-2xl shadow-lg flex flex-col items-center w-full lg:w-[30%] transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-blue-500">
            <h2 className="text-lg font-semibold text-blue-600">Cloud Native Microservices</h2>
            <img
              className="h-[30vh] w-full rounded-lg mb-3 object-cover transform transition-all duration-300 hover:scale-110"
              src={work2}
              alt="Cloud Native Microservices seminar"
            />
            <p className="font-bold text-sm lg:text-base mt-3 text-center">
              A Seminar on Cloud Native Microservices using Spring Boot at Nehru Institute of Engineering and Technology.
            </p>
          </div>

          {/* Second Workshop */}
          <div className="border p-3 rounded-2xl shadow-lg flex flex-col items-center w-full lg:w-[30%] transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-blue-500">
            <h2 className="text-lg font-semibold text-blue-600">Cyber Security Workshop</h2>
            <img
              className="h-[30vh] w-full rounded-lg mb-3 object-cover transform transition-all duration-300 hover:scale-110"
              src={work3}
              alt="Cyber security workshop"
            />
            <p className="font-bold text-sm lg:text-base mt-3 text-center">
              1-day workshop on Cyber security at Tamil Nadu College of Engineering.
            </p>
          </div>

          {/* Third Workshop */}
          <div className="border p-3 rounded-2xl shadow-lg flex flex-col items-center w-full lg:w-[30%] transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-blue-500">
            <h2 className="text-lg font-semibold text-blue-600 ">AI and ML Internship</h2>
            <img
              className="h-[30vh] w-full rounded-lg mb-3 object-cover transform transition-all duration-300 hover:scale-110"
              src={work1}
              alt="AI and ML Internship"
            />
            <p className="font-bold text-sm lg:text-base mt-3 text-center">
              Karunya University students attending Artificial Intelligence and Machine Learning Internship.
            </p>
          </div>

        </div>
      </div>

      {/* Add more bottom spacing here */}
      <div className="mb-16"></div> {/* This will add more space at the bottom */}
    </div>
  );
}

export default Workshop;
