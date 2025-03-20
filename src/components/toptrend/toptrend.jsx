import React from "react";
import master from "../../asset/toptrend/master.webp";
import java from "../../asset/toptrend/java.webp";
import python from "../../asset/toptrend/python.webp";
import data from "../../asset/toptrend/dataa.webp";
import { Link } from "react-router-dom";
import hack from "../../asset/toptrend/hack.webp";
import Digital from "../../asset/toptrend/Digital.webp";

function Top() {
  const top = [
    {
      img: master,
      title: "Master Certificate in Data Science",
      content: "In-Centre | Online | Hybrid",
      path: "/DS",
    },
    {
      img: java,
      title: "Master Program in Full Stack Development Using Java",
      content: "In-Centre | Online | Hybrid",
      path: "/FSD",
    },
    {
      img: data,
      title: "Master Program in Data Analytics",
      content: "In-Centre | Online | Hybrid",
      path: "/DA",
    },
    {
      img: python,
      title: "Master Program Full Stack Development Using Python",
      content: "In-Centre | Online | Hybrid",
      path: "/FSD",
    },
    {
      img: hack,
      title: "Master Program Data Science",
      content: "In-Centre | Online | Hybrid",
      path: "/DS",
    },
    {
      img: Digital,
      title: "Master Program Digital Marketing",
      content: "In-Centre | Online | Hybrid",
      path: "/DM",
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      {/* Heading Section */}
      <h1 className="text-4xl font-sans text-center text-gray-800 mb-12">
        <span className="text-gray-800">Explore Our Courses</span>
      </h1>

      {/* Grid Layout for Courses with Card Styles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 justify-center items-center mx-auto max-w-screen-xl">
        {top.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 duration-300 ease-in-out"
          >
            {/* Image Section */}
            <div className="w-full h-56 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={course.img}
                alt={course.title}
              />
            </div>

            {/* Card Content Section */}
            <div className="p-6">
              <h2 className="text-lg font-sans text-gray-800 mb-3">
                {course.title}
              </h2>
              <p className="text-sm text-gray-600 mb-4">{course.content}</p>

              {/* Button Section */}
              <div className="mt-4 text-center">
                <Link to={course.path}>
                  <button className="px-6 py-2 bg-gray-800 text-white text-sm font-sans rounded-md shadow-md hover:bg-gray-900 transition-colors duration-300">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Top;
