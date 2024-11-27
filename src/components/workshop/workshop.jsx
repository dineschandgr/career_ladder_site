import work1 from "../../asset/workshop/workshop1.png"
import work2 from "../../asset/workshop/workshop2.png"
import work3 from "../../asset/workshop/workshop3.png"

function Workshop() {



    return (
        <div>

            <div className="flex justify-center lg:mb-5 text-black  lg:mt-8 mt-9 ">
                <h1>Our <span className="text-blue-800">Workshop</span> </h1>
            </div>
            <div className=" ">
                <div className="lg:mx-16 flex lg:p-0 p-3">
                    <div >
                        {/* <img className="h-[60vh]" src={work1} /> */}
                    </div>
                    <div className="ml-36">
                        <div className="lg:flex mb-5 border p-3 rounded-2xl shadow-lg ">
                            <img className="h-[20vh] rounded-lg mr-3" src={work2} />
                            <p className="mt-5 font-serif">A Seminar on Cloud Native Microservices using Spring Boot at Nehru Institute of Engineering and Technology.</p>
                        </div>
                        <div className="lg:flex mb-5 border p-3 rounded-2xl shadow-lg gap-52"> 
                        <p className="mt-5 font-serif">1 day workshop on Embedded Systems at Tamil Nadu College of Engineering.</p>
                            <img className="h-[20vh] w-[40vh] rounded-lg ml-3" src={work3} />
                        </div>
                        <div className="lg:flex mb-5 border p-3 rounded-2xl shadow-lg ">
                            <img className="h-[20vh] rounded-lg mr-3" src={work1} />
                            <p className="mt-5 font-serif">Karunya University students attending Artificial Intelligence and Machine Learning Internship.</p>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default Workshop;