import review from "../../asset/reviews/reviews.png"



function Reviews() {
    return (
        <div className="bg-blue-100 lg:p-8">
            <div className=" lg:flex  gap-[40%] lg:mx-36">

                <div className="lg:w-80">
                    <h2 className="lg:w-[150vh] text-blue-800 pt-4 lg:pt-0 flex flex-col pl-5 lg:pl-0 justify-center ">Hear from Our Students</h2>
                    <p className="lg:pl-0 pl-2 ">Livewire students talk about their enjoyable learning experiences that included practical training,
                        best practises, job prospects, and exposure to reputable businesses and organisations.</p>
                            <a href="https://youtube.com/shorts/yff1Vbg_FZ8?feature=shared">
                        <div className="flex  gap-3">

                    <p className="font-semibold text-black">See More Testimonial</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                        </div>
                    </a>

                </div>
                <div className="pl-8 lg:pl-0">
                    <a href="https://youtube.com/shorts/yff1Vbg_FZ8?feature=shared">
                        <img className="h-[35vh]  rounded-2xl " src={review} />
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Reviews;