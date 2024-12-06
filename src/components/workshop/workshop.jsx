import work1 from "../../asset/workshop/workshop1.png";
import work2 from "../../asset/workshop/workshop2.png";
import work3 from "../../asset/workshop/workshop3.png";

function Workshop() {
  return (
    <div className="font-sans bg-gradient-to-r from-violet-500 to-white p-5">
      {/* Heading Section */}
      <div className="flex justify-center lg:mb-5 text-black lg:mt-8 mt-9">
        <h1 className="text-3xl lg:text-4xl font-bold">
          Our <span className="text-blue-800">Workshop</span>
        </h1>
      </div>

      {/* Workshop Content */}
      <div className="mx-auto p-3 lg:p-0 lg:w-[80%] w-full mt-5">
        <div className="flex justify-between gap-8">

          {/* First Workshop */}
          <div className="border p-3 rounded-2xl shadow-lg flex flex-col items-center w-[30%]">
            <img className="h-[30vh] w-full rounded-lg mb-3 object-cover" src={work2} alt="workshop 1" />
            <p className="font-bold text-sm lg:text-base mt-3 text-center">
              A Seminar on Cloud Native Microservices using Spring Boot at Nehru Institute of Engineering and Technology.
            </p>
          </div>

          {/* Second Workshop (Image on Top, Text on Bottom) */}
          <div className="border p-3 rounded-2xl shadow-lg flex flex-col items-center w-[30%]">
            <img className="h-[30vh] w-full rounded-lg mb-3 object-cover" src={work3} alt="workshop 2" />
            <p className="font-bold text-sm lg:text-base mt-3 text-center">
              1-day workshop on Embedded Systems at Tamil Nadu College of Engineering.
            </p>
          </div>

          {/* Third Workshop */}
          <div className="border p-3 rounded-2xl shadow-lg flex flex-col items-center w-[30%]">
            <img className="h-[30vh] w-full rounded-lg mb-3 object-cover" src={work1} alt="workshop 3" />
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
