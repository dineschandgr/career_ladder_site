import { Carousel } from "react-bootstrap";
import data from "../../asset/hero/data.png";
import data2 from "../../asset/hero/data2.png";
import data3 from "../../asset/hero/data3.png";

function Hero() {
  return (
    <div>
      {/* Desktop View (lg:block) */}
      <div className="lg:block hidden">
        <Carousel>
          <Carousel.Item>
            <div className="relative h-[70vh] w-full rounded-3xl flex items-center justify-center">
              <img
                src={data}
                alt="Slide 1"
                className="h-full w-full object-cover rounded-3xl"
              />
              <h6 className="absolute bottom-5 left-1/2 transform -translate-x-1/2 font-sans text-blue-900 font-bold text-4xl text-center">
                {/* Add any text here */}
              </h6>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="relative h-[70vh] w-full rounded-3xl flex items-center justify-center">
              <img
                src={data2}
                alt="Slide 2"
                className="h-full w-full object-cover rounded-3xl"
              />
              <h6 className="absolute bottom-5 left-1/2 transform -translate-x-1/2 font-sans text-blue-900 font-bold text-4xl text-center">
                {/* Add any text here */}
              </h6>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="relative h-[70vh] w-full rounded-3xl flex items-center justify-center">
              <img
                src={data3}
                alt="Slide 3"
                className="h-full w-full object-cover rounded-3xl"
              />
              <h6 className="absolute bottom-5 left-1/2 transform -translate-x-1/2 font-sans text-blue-900 font-bold text-4xl text-center">
                {/* Add any text here */}
              </h6>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Mobile View (lg:hidden) */}
      <div className="lg:hidden block">
        <Carousel>
          <Carousel.Item>
            <div className="relative h-[25vh] w-full rounded-3xl flex items-stretch justify-center">
              <img
                src={data}
                alt="Slide 1"
                className="h-full w-full object-cover rounded-3xl"
              />
              <h6 className="absolute left-1/2 transform -translate-x-1/2 font-sans text-blue-900 font-bold text-3xl text-center">
                {/* Add any text here */}
              </h6>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="relative h-[25vh] w-full rounded-3xl flex items-stretch justify-center">
              <img
                src={data2}
                alt="Slide 2"
                className="h-full w-full object-cover rounded-3xl"
              />
              <h6 className="absolute left-1/2 transform -translate-x-1/2 font-sans text-blue-900 font-bold text-3xl text-center">
                {/* Add any text here */}
              </h6>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="relative h-[25vh] w-full rounded-3xl flex items-stretch justify-center">
              <img
                src={data3}
                alt="Slide 3"
                className="h-full w-full object-cover rounded-3xl"
              />
              <h6 className="absolute left-1/2 transform -translate-x-1/2 font-sans text-blue-900 font-bold text-3xl text-center">
                {/* Add any text here */}
              </h6>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Hero;
