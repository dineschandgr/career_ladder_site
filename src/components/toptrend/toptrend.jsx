import master from "../../asset/toptrend/master.png";
import java from "../../asset/toptrend/java.png";
import python from "../../asset/toptrend/python.png";
import data from "../../asset/toptrend/dataa.png";
import { Link } from "react-router-dom";

function Top() {
  const top = [
    {
      img: master,
      title: "Master Certificate in Data Science",
      content: "In-Centre | Online | Hybrid"
    },
    {
      img: java,
      title: "Master Program in Full Stack Development Using Java",
      content: "In-Centre | Online | Hybrid",
      path: "/java"
    },
    {
      img: data,
      title: "Master Program in Data Analytics",
      content: "In-Centre | Online | Hybrid"
    },
    {
      img: python,
      title: "Master Program Full Stack Development Using Python",
      content: "In-Centre | Online | Hybrid"
    },
  ];

  return (
    <div className="p-5 mt-24 mb-16">
      {/* Heading Section with Bold and Centered Text */}
      <div className="flex justify-center text-black mb-8">
        <h1 className="text-4xl lg:text-5xl font-bold text-center text-blue-800">
          Top Trending <span className="text-blue-800">Courses</span>
        </h1>
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {top.map((course, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md flex flex-col h-full">
            <div className="flex flex-col lg:flex-row h-full">
              {/* Image Section */}
              <div className="w-full lg:w-1/3 h-full">
                <img className="w-full h-full object-cover rounded-t-2xl lg:rounded-l-2xl" src={course.img} alt={course.title} />
              </div>

              {/* Text Section */}
              <div className="w-full lg:w-2/3 p-4 flex flex-col justify-between">
                <h2 className="font-sans font-bold text-lg lg:text-xl mb-2">{course.title}</h2>
                <p className="font-sans text-sm lg:text-base text-gray-700 mb-4">{course.content}</p>

                {/* Button Section */}
                <div className="mt-auto flex justify-end">
                  <Link to={course.path || "#"}>
                    <button className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg shadow-md">
                      Know More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Top;
