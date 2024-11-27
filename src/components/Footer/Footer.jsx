import pic from "../../asset/Footer/facebook-removebg-preview.png"
import pic1 from "../../asset/Footer/tw-removebg-preview.png"
import pic2 from "../../asset/Footer/pinterset.png"
import pic3 from "../../asset/Footer/image.png"
import pic4 from "../../asset/Footer/youtub.png"
import instagram from "../../asset/icon/insta2.png"
import facebook from "../../asset/icon/facebook2.png"
import linkedin from "../../asset/icon/icon-removebg-preview.png"
import youtube from "../../asset/icon/youtube.png"
import live from "../../asset/Footer/lw.png"




export const Footer = () => {


    const Footericon = [
        {
            image: pic,
        },
        {
            image: pic1,
        },
        {
            image: pic2,
        },
        {
            image: pic3,
        },
        {
            image: pic4,
        },
    ]


    return (
        <div className="bg-gradient-to-r from-pink-600  to-blue-950">


            <div className="  lg:flex justify-center gap-20 pt-2  border-t-red-500  ">
                <div className=" lg:pt-1 pl-6">
                <img className=" h-[10vh] bg-white rounded-2xl mb-3" src={live} />
                    <p className="text-white font-semibold lg:w-[33vw] lg:text-sm  ">Livewire students talk about their enjoyable learning experiences that included practical training, best practises,
                        job prospects, and exposure to reputable businesses and organisations.</p>
                    {/* <div className=""> */}

                    <button className=" text-white bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 ... h-10 rounded w-32 ml-3 mt-3">Discover Mode</button>
                    <div>
                        <div className="flex pr-24  text-white mt-5">
                        <p className="pt-1 font-semibold pr-2 text-lg">Follow Us: </p>

                        <a href="https://www.instagram.com/livewire_hopes_sundarapuram/"> <img className="h-9 w-9 text-white mt-1 p-1" src={instagram}/></a>
                        <a href="https://www.facebook.com/people/Livewire-Hopes-Coimbatore/pfbid0rghW3yHGQsWhXeKnMeDnNhzG4ENsQYSNqsYbKKhMfkeSeg1JcdLNharq7Jo3PQVHl/"> <img className="h-9 w-10 text-white  mt-1" src={facebook}/></a>
                        <a href="https://www.linkedin.com/company/livewire-coimbatore-hope-college-sundarapuram?originalSubdomain=in"> <img className="h-9 w-9 text-white mt-1 p-1 " src={linkedin}/></a>
                        <a href="https://www.youtube.com/@LivewireHopeCollege"> <img className="h-11 w-9 text-white p-1  " src={youtube}/></a>


                            

                        </div>
                    </div>
                    {/* </div> */}
                </div>
                <div className="pb-2">
                    <h1 className=" lg:text-2xl font-serif text-2xl md:pt-2 lg:p-0 pl-2 font-medium text-white">Contact person : Gayathri Kandasamy</h1>


                    <div className=" flex gap-2  pt-3">
                        <div className=" pt-1 ">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                        </div>
                        <div>

                        <h4  className="text-white font-serif">Livewire Hope College</h4>
                        <h3 className="text-sm text-white lg:w-[25vw]">Door No. 207, Avinasi Road, Opp GRG Ladies Hostel, B.R Puram, Coimbatore - 641004</h3>
                        </div>
                    </div>
                    <div className=" flex gap-2  pt-3">
                        <div className=" pt-1">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                        </div>
                        <div>
                        <h4 className="text-white font-serif">Livewire Sundarapuram </h4>
                        <h3 className="text-sm text-white lg:w-[25vw]">5, Bank of Baroda Upstairs, Madukkarai Main Road,Opp, Abirami Hospital, Sundarapuram, Coimbatore - 641024</h3>
                        </div>
                    </div>
                    <div className=" flex gap-2 mt-3">
                        <div className=" ">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                        </div>

                        <h3 className="text-sm text-white lg:w-[25vw]">+91 8807148869 / 8807028071</h3>
                    </div>
                    <div className=" flex gap-2  mt-3 ">
                        <div className="pt-2">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                        </div>

                        <h3 className="text-sm text-white lg:w-[25vw]">tn.cbehopecollege@livewireindia.com , gayathri.it.tce@gmail.com</h3>
                    </div>
                </div>
            </div>


            <div className="lg:flex justify-between lg:px-[17%] lg:pt-2 bg-black md:flex">
                <p className="text-sm text-white">© Copyright 2023 Livewire Coimbatore. All Rights Reserved.</p>
                <div className="flex cursor-pointer">
                    {Footericon.map((Footericon, index) => (
                        <div className="" key={index}>
                            <img src={Footericon.image} alt="" className="h-6" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}