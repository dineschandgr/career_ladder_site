import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import intern from "../../asset/intern/intern.png";

function Intern() {
  return (
    <div className="mt-4 px-4 sm:px-8 lg:px-20 "> {/* Added bg-blue-100 for background color */}
      <div className="lg:flex gap-6 lg:gap-16 flex-col lg:flex-row">
        {/* Left Column: Image */}
        <div className="w-full lg:w-1/2 flex justify-center mb-0 lg:mb-0 py-0">
          <img className="h-[40vh] sm:h-[50vh] lg:h-[40vh] w-auto rounded-lg object-cover" src={intern} alt="Internship" />
        </div>

        {/* Right Column: Text */}
        <div className="lg:w-1/2 flex items-center justify-center mt-1 lg:mt-0">
          <div className="text-center lg:text-left">
            <h2 className="text-lg sm:text-xl lg:text-2xl text-black font-sans font-bold mb-2">
              Internships for Students
            </h2>
            <p className="text-base sm:text-lg lg:text-base text-blue-700 font-sans">
              CareerLadder has created internship courses that cater to a variety of topics, providing students with hands-on experience
              in industry projects, in response to the current demand from colleges and enterprises.
            </p>
            {/* Enroll Button */} 
            <div className="mt-4">
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intern;
