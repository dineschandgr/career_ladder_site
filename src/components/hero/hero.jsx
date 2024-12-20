import { Carousel } from "react-bootstrap";
import data from "../../asset/hero/data.png"; // First image
import { Link } from "react-router-dom"; // Import Link from React Router

function Hero() {
  return (
    <div>
      {/* Desktop View (lg:block) */}
      <div className="lg:block hidden">
        <Carousel>
          <Carousel.Item>
            <div className="relative h-[70vh] w-full rounded-3xl flex items-center justify-center p-0 m-0 mt-4 group">
              <img
                src={data}
                alt="Slide 1"
                className="h-full w-full object-cover rounded-3xl group-hover:scale-105 transition-all duration-500 ease-in-out"
                loading="lazy" // Lazy loading for desktop image
              />
              {/* Text and Button centered */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-0 m-0">
                <h2 className="font-serif text-white font-extrabold text-6xl mb-6 group-hover:text-blue-300 transition-all duration-300 ease-in-out">
                  Unlock Your Flexible Learning with Career Ladder
                </h2>
                <h4 className="font-sans text-white font-semibold text-3xl mb-8 group-hover:text-blue-300 transition-all duration-300 ease-in-out">
                  Offline and online classes. Learn at your place, from anywhere. Start your learning journey today
                </h4>
                <Link to="/contact">
                  <button className="bg-blue-500 text-white px-5 py-8 rounded-full text-3xl font-sans transform group-hover:scale-110 transition-all duration-300 ease-in-out">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Mobile View (lg:hidden) */}
      <div className="lg:hidden block mt-3">
        <Carousel>
          <Carousel.Item>
            <div className="relative h-[40vh] w-full rounded-3xl flex items-center justify-center p-0 m-0 group">
              <img
                src={data}
                alt="Slide 1"
                className="h-full w-full object-cover rounded-3xl group-hover:scale-105 transition-all duration-500 ease-in-out"
                loading="lazy" // Lazy loading for mobile image
              />
              {/* Text and Button centered */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-0 m-0 mt-1 mb-5">
                <h2 className="font-serif text-white font-extrabold text-2xl sm:text-3xl mb-2 mt-1 group-hover:text-blue-300 transition-all duration-300 ease-in-out">
                  Unlock Your Learning Flexibility
                </h2>
                <h4 className="font-sans text-white font-light text-xl sm:text-2xl mb-3 group-hover:text-blue-300 transition-all duration-300 ease-in-out">
                  Learn at your place, from anywhere. Start your learning journey today
                </h4>
                <Link to="/contact">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-lg sm:text-xl font-sans transform group-hover:scale-110 transition-all duration-300 ease-in-out">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Hero;
