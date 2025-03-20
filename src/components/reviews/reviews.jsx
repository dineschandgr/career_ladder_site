import review from "../../asset/reviews/reviews.png"; // Example review image

function Reviews() {
  return (
    <div className="bg-gray-100 py-20 px-8">
      <div className="max-w-screen-xl mx-auto text-center">

        {/* Heading Section */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8">
          Hear From Our Students
        </h1>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Watch this video testimonial and read some of the amazing experiences from students who have transformed their careers.
        </p>

        {/* Main Testimonial Video Section */}
        <div className="mb-16">
          <a
            href="https://youtube.com/shorts/A9f1_3rfQls?si=xwMtdL64U1MzJSYr" // Your YouTube Video URL
            target="_blank"
            rel="noopener noreferrer"
          >
            <iframe
              className="mx-auto rounded-xl shadow-lg"
              width="100%" // Make the video responsive
              height="450"
              src="https://www.youtube.com/embed/A9f1_3rfQls" // Embed the YouTube video
              title="Student Testimonial"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </a>
        </div>

        {/* Review Sections (Left and Right) */}
        <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-16">
          {/* Left Review Section */}
          <div className="w-full sm:w-1/3 bg-white p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Anusiya</h3>
            <p className="text-md text-gray-600 mb-6">Data Science Program</p>
            <p className="text-gray-700">
              "I had an incredible learning experience with CareerLadder. The instructors were top-notch, and the
              practical projects helped me secure a position at a leading tech company."
            </p>
            <div className="flex justify-start mt-6">
              <img
                className="w-16 h-16 rounded-full border-4 border-gray-300"
                src={review}
                alt="Student Review"
              />
              <p className="ml-4 text-gray-600">Anusiya</p>
            </div>
          </div>

          {/* Right Review Section */}
          <div className="w-full sm:w-1/3 bg-white p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Rithika</h3>
            <p className="text-md text-gray-600 mb-6">Full Stack Development</p>
            <p className="text-gray-700">
              "The full-stack program was a game-changer for me. The curriculum was well-organized and provided me
              with the necessary skills to land my first job as a developer."
            </p>
            <div className="flex justify-start mt-6">
              <img
                className="w-16 h-16 rounded-full border-4 border-gray-300"
                src={review}
                alt="Student Review"
              />
              <p className="ml-4 text-gray-600">Rithika</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
