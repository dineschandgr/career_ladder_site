import React from "react";
import { motion } from "framer-motion";
import master from "../../asset/toptrend/master.webp";
import java from "../../asset/toptrend/java.webp";
import python from "../../asset/toptrend/python.webp";
import data from "../../asset/toptrend/dataa.webp";
import { Link } from "react-router-dom";
import hack from "../../asset/toptrend/hack.webp";

function Top() {
  const top = [
    {
      img: master,
      title: "Master Certificate in Data Science",
      content: "In-Centre | Online | Hybrid",
      path: "/DS"
    },
    {
      img: java,
      title: "Master Program in Full Stack Development Using Java",
      content: "In-Centre | Online | Hybrid",
      path: "/FSD"
    },
    {
      img: data,
      title: "Master Program in Data Analytics",
      content: "In-Centre | Online | Hybrid",
      path: "/DA"
    },
    {
      img: python,
      title: "Master Program Full Stack Development Using Python",
      content: "In-Centre | Online | Hybrid",
      path: "/FSD"
    },
    {
      img: hack,
      title: "Master Program Data Science",
      content: "In-Centre | Online | Hybrid",
      path: "/DS"
    },
  ];

  return (
    <div className="p-5 mt-24 mb-16">
      {/* Heading Section with Bold and Centered Text */}
      <h1 className="text-4xl lg:text-5xl font-serif text-center text-blue-800 mb-10">
        Top Trending <span className="text-blue-800">Courses</span>
      </h1>

      {/* Course Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {top.map((course, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-lg transform transition-all  "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.3, duration: 1 }}
          >
            <div className="flex flex-col lg:flex-row h-full">
              {/* Image Section */}
              <div className="w-full lg:w-1/3 h-full rounded-t-2xl lg:rounded-l-2xl overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={course.img}
                  alt={course.title}
                />
              </div>

              {/* Text Section */}
              <div className="w-full lg:w-2/3 p-4 flex flex-col justify-between">
                <h2 className="font-sans font-bold text-lg lg:text-xl mb-2 text-blue-800">{course.title}</h2>
                <p className="font-sans text-sm lg:text-base text-gray-700 mb-4">{course.content}</p>

                {/* Button Section */}
                <div className="mt-auto flex justify-end">
                  <Link to={course.path}>
                    <button className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-200">
                      Know More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Top;
