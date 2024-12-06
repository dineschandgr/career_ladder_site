import review from "../../asset/reviews/reviews.png";

function Reviews() {
  return (
    <div className="bg-blue-100 lg:p-8">
      <div className="lg:flex lg:justify-center lg:items-center gap-16 lg:mx-36 flex-col lg:flex-row">

        {/* Left Column: Text */}
        <div className="text-center lg:text-left lg:w-1/2">
          <h2 className="text-3xl font-sans font-bold text-blue-800 pt-4 lg:pt-0">
            Hear from Our Students
          </h2>
          <p className="text-lg font-sans text-gray-700 mt-4">
            CareerLadder students talk about their enjoyable learning experiences that included practical training,
            best practices, job prospects, and exposure to reputable businesses and organizations.
          </p>
          
          {/* Centered See More Testimonial */}
          <a href="https://youtube.com/shorts/yff1Vbg_FZ8?feature=shared" className="flex justify-center mt-4">
            <div className="flex items-center gap-2">
              <p className="font-semibold text-black text-center">See More Testimonial</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
          </a>
        </div>

        {/* Right Column: Image */}
        <div className="text-center lg:text-left lg:w-1/2 mt-8 lg:mt-0">
          <a href="https://youtube.com/shorts/yff1Vbg_FZ8?feature=shared">
            <img className="h-[35vh] w-auto rounded-2xl mx-auto" src={review} alt="Review" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Reviews;