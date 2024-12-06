import intern from "../../asset/intern/intern.png";

function Intern() {
  return (
    <div className="mt-20">
      <div className="lg:flex gap-16 lg:mx-36 mx-4 flex-col lg:flex-row">
        {/* Left Column: Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img className="h-[50vh] w-auto rounded-lg" src={intern} alt="Internship" />
        </div>

        {/* Right Column: Text */}
        <div className="lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl lg:text-3xl text-blue-800 font-sans font-bold mb-4">
              Internships for Students
            </h2>
            <p className="text-lg text-gray-700 font-sans">
              CareerLadder has created internship courses that cater to a variety of topics, providing students with hands-on experience
              in industry projects, in response to the current demand from colleges and enterprises.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intern;