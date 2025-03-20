import React, { useState, useEffect } from 'react';

function Stats() {
  const [studentsPlaced, setStudentsPlaced] = useState(0);
  const [studentsTrained, setStudentsTrained] = useState(0);
  const [studentsTrainedInIndustry, setStudentsTrainedInIndustry] = useState(0);

  useEffect(() => {
    const timer1 = setInterval(() => {
      setStudentsPlaced(prev => (prev < 100) ? prev + 1 : prev);
    }, 10);

    const timer2 = setInterval(() => {
      setStudentsTrained(prev => (prev < 500) ? prev + 1 : prev);
    }, 5);

    const timer3 = setInterval(() => {
      setStudentsTrainedInIndustry(prev => (prev < 1000) ? prev + 1 : prev);
    }, 3);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
    };
  }, []);

  return (
    <div className="mt-16 px-6 py-12 bg-gray-50">
      <h2 className="text-4xl sm:text-5xl text-center font-bold text-gray-800 mb-12">
        Our Achievements
      </h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* First Stats Card */}
        <div className="bg-white text-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 p-8 text-center border border-gray-200">
          <div className="flex justify-center mb-4">
            <span className="text-4xl font-bold text-blue-600">
              {studentsPlaced}+ {/* Dynamic Counter */}
            </span>
          </div>
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">
            Students Got Placed
          </h3>
          <p className="text-lg font-medium text-gray-600">
            Our placement rate continues to grow with more students finding career success each year.
          </p>
        </div>

        {/* Second Stats Card */}
        <div className="bg-white text-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 p-8 text-center border border-gray-200">
          <div className="flex justify-center mb-4">
            <span className="text-4xl font-bold text-green-600">
              {studentsTrained}+ {/* Dynamic Counter */}
            </span>
          </div>
          <h3 className="text-2xl font-semibold text-green-600 mb-4">
            Students Trained
          </h3>
          <p className="text-lg font-medium text-gray-600">
            We have trained hundreds of students in industry-relevant skills that are in high demand.
          </p>
        </div>

        {/* Third Stats Card */}
        <div className="bg-white text-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 p-8 text-center border border-gray-200">
          <div className="flex justify-center mb-4">
            <span className="text-4xl font-bold text-purple-600">
              {studentsTrainedInIndustry}+ {/* Dynamic Counter */}
            </span>
          </div>
          <h3 className="text-2xl font-semibold text-purple-600 mb-4">
            Industrial Training for Students
          </h3>
          <p className="text-lg font-medium text-gray-600">
            We provide hands-on experience with industrial training programs, preparing students for real-world challenges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
