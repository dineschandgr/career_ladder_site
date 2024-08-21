import about1 from "../../asset/aboutus/about1.png"
import about2 from "../../asset/aboutus/about2.png"
import about3 from "../../asset/aboutus/about3.png"



function About() {
    return (
        <div className="lg:flex p-10 gap-4 mt-10">
            <div className="  " >

                <h1 className="mb-5 text-3xl font-bold text-blue-900 ">About Us</h1>
                <div className="flex gap-4 ">
                <div className="font-serif">
                    <img className="w-[100vh] h-[80vh] rounded-2xl" src={about3}></img>
                    <h2 className="">Develop In-Demand Skills Best Software Training Institute In Coimbatore</h2>
                    <p>Livewire's on-demand courses in emerging technologies give you the knowledge you need to stay ahead of the curve and succeed in today's fast-paced world</p>
                </div>
                <div className=" hidden lg:flex flex-col gap-16 mt-5 ">
                <img className="w-[65vh]  rounded-2xl " src={about2}></img>
                <img className="w-[65vh] rounded-2xl" src={about1}></img>

                </div>

                </div>
                
           
           
            </div>
           
            
            <div className="flex flex-col w-[100%] lg:w-[40%] p-3 mt-16">
          
            <div className="mb-5 font-serif mt-3">
                <h1 className=" text-3xl mb-2 ">Comprehensive Learning Experience</h1>
                <p className="">Livewire is the best software Training Institute In Coimbatore, Future Skills Prime Certified courses are intended to provide practical and affordable training, as well as flexible study options and personalised attention from experienced professionals with real-world experience.</p>

            </div>
            <div className="font-serif">
                <h1 className=" text-3xl mt-6 mb-2">Assured Job Placement</h1>
                <p className="">You can be confident in your skills and job readiness with our placement assistance, and you will have the support you need to land your dream job in your desired field.</p>

            </div>

            </div>
            
        </div>
    )
}

export default About;