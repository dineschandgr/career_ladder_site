import intern from "../../asset/intern/intern.png"


function Intern(){
    return(
        <div className="mt-20">
            <div className="lg:flex gap-40  lg:mx-36">
                <div>
                <img className="h-[50vh] " src={intern}/>
                </div>
                <div className="lg:w-80 mt-28">
                <h2 className="lg:w-96 text-blue-800">Internships for Students</h2>
                <p className="w-[70vh]">Livewire has created internship courses that cater to a variety of topics, providing students with hands-on experience
                     in industry projects, in response to the current demand from colleges and enterprises.</p>

                </div>
            </div>
        </div>
    )
}

export default Intern;