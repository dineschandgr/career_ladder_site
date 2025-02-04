import React from 'react';

function Stats() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-12">
      {/* First Rectangle Box */}
      <div className="bg-blue-600 text-white px-8 py-6 rounded-xl shadow-2xl transform transition-transform hover:scale-105 hover:rotate-3 hover:shadow-3xl hover:bg-indigo-500 hover:transition duration-500 ease-in-out w-full sm:w-80 lg:w-96">
        <h3 className="text-2xl sm:text-3xl font-semibold text-center animate__animated animate__fadeInUp animate__delay-1s">
          100+ Students Got Placed
        </h3>
      </div>

      {/* Second Rectangle Box */}
      <div className="bg-blue-600 text-white px-8 py-6 rounded-xl shadow-2xl transform transition-transform hover:scale-105 hover:rotate-3 hover:shadow-3xl hover:bg-indigo-500 hover:transition duration-500 ease-in-out w-full sm:w-80 lg:w-96">
        <h3 className="text-2xl sm:text-3xl font-semibold text-center animate__animated animate__fadeInUp animate__delay-1s">
          500+ Students Trained
        </h3>
      </div>

      {/* Third Rectangle Box */}
      <div className="bg-blue-600 text-white px-8 py-6 rounded-xl shadow-2xl transform transition-transform hover:scale-105 hover:rotate-3 hover:shadow-3xl hover:bg-indigo-500 hover:transition duration-500 ease-in-out w-full sm:w-80 lg:w-96">
        <h3 className="text-2xl sm:text-3xl font-semibold text-center animate__animated animate__fadeInUp animate__delay-1s">
          Industrial Training for 1000+ Students
        </h3>
      </div>
    </div>
  );
}

export default Stats;
