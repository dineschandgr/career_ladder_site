import mam from "../../asset/team/mam.png"
import sir from "../../asset/team/sir.png"
import vicky from "../../asset/team/vicky.png"
import vishnu from "../../asset/team/vishnu.png"
import Sountharya from "../../asset/team/sound2_magicstudio_87kkaexiwo.png"
import Nirmalkumar from "../../asset/team/nirumal.png"
import ashik from "../../asset/team/ashik.png"
import naveen from "../../asset/team/naveen.png"
import samaja from "../../asset/team/samaja.png"
import madhi from "../../asset/team/madhi.png"
import jo from "../../asset/team/jo.png"
import oij from "../../asset/team/oij.png"
import Kailas  from "../../asset/team/kailas.png"
import teams from "../../asset/team/teams.png"
import teams2 from "../../asset/team/teams2.png"
import nith from "../../asset/team/nithiish.png"


import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Nav from "../nav/nav"
import { Footer } from "../Footer/Footer"

function Team() {

    const data = [
        {
            img: mam,
            name: "GAYATHRI KANDASAMY",
            position:"Managing Director and CENTER HEAD \n B.Tech, M.S(NUS, Singapore)",
            desc: ""
        },
        {
            img: sir,
            name: "DineshChand G.R",
            position:"Chief Technical Architect and Lead Instructor \n B.Tech, M.S(NUS, Singapore)",
            desc: ""
        },
        {
            img: vishnu,
            name: "Sri Vishnoo",
            position:"Placement Manager",
            desc: ""
        },
        {
            img: jo,
            name: "Joie. M",
            position:"Business Development Manager - Sales and Operations",
            desc: ""
        },
        {
            img: samaja,
            name: "Samaja R V ",
            position:"Career Counselor",
            desc: ""
        },
        {
            img: vicky,
            name: "Vignesh Kumar",
            position:"Technical trainer",
            desc: ""
        },
        {
            img: Nirmalkumar,
            name: "Nirmalkumar.D",
            position:"Technical trainer",
            desc: ""
        },
        {
            img: Sountharya,
            name: "Sountharya R",
            position:"Technical trainer",
            desc: ""
        },
        {
            img: naveen,
            name: "Naveen Dhanasekaran ",
            position:"Technical trainer",
            desc: ""
        },
        {
            img: oij,
            name: "Trilochan Ojha",
            position:"Technical Trainer",
            desc: ""
        },
        {
            img: madhi,
            name: "Mathivaanan. A",
            position:"Technical Trainer",
            desc: ""
        },
        {
            img: ashik,
            name: "Ashik K",
            position:"Technical trainer",
            desc: ""
        },
        {
            img: Kailas,
            name: "Kailas M",
            position:"Technical trainer",
            desc: ""
        },
        {
            img: nith,
            name: "Nithish Kumar",
            position:"Technical trainer",
            desc: ""
        },
        {
            img: feroz,
            name: "Feroz",
            position:"Technical trainer",
            desc: ""
        }
        
       
        
    ]
   
    return (
        
        <div className="bg-white     pb-4  ">
            <Nav/>
            <div className="flex  justify-center font-medium text-3xl pt-11 text-blue-700 bg-[url('https://img.freepik.com/free-photo/hands-holding-letters-with-sky-background_1134-315.jpg')] h-[59vh] ">
            <p className="pt-10 font-serif w-[70vh] text-center">Distance Doesn’t Matters For OUR <span className="text-red-500">TEAM MEMBERS</span></p>
            {/* <div className=" bg-[url('https://img.freepik.com/free-photo/hands-holding-letters-with-sky-background_1134-315.jpg')] h-[75vh]  bg-no-repeat"></div> */}
                </div>
            <div className="flex  justify-center font-bold text-2xl pt-7     pb-3 text-black">
                <h1 className="" >OUR <span className="text-red-500 font-bold ">TEAM</span></h1>
            </div>
            {/* <div className="sm:flex justify-center mt-10 gap-1  ">
                <div className="mt-24">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-9">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                </div>

              
                

                <div className=" ">
                    <div className="flex flex-col  justify-center overflow-hidden rounded-2xl p-3">
                        <img className=" zoom  rounded-2xl " src={mam}></img>
                    </div>
                    <h2 className="font-medium text-center">GAYATHRI KANDASAMY</h2>
                    <p className="text-center">CENTER HEAD</p>
                </div>
                <div>
                    <div className="flex flex-col  justify-center overflow-hidden rounded-2xl p-3">

                        <img className="zoom  rounded-2xl" src={sir}></img>
                    </div>
                    <h2 className="font-medium text-center">DineshChand G.R</h2>
                    <p className="text-center">Leed Head</p>
                </div>
                <div>
                    <div className="flex flex-col  justify-center overflow-hidden rounded-2xl p-3">

                        <img className="zoom  rounded-2xl h-60 " src={vishnu}></img>
                    </div>
                    <h2 className="font-medium text-center">vishnu</h2>
                    <p className="text-center">Placement Manger</p>
                </div>
                <div>
                    <div className="flex flex-col  justify-center overflow-hidden rounded-2xl p-3">

                        <img className="zoom  rounded-2xl h-60" src={vicky}></img>
                    </div>
                    <h2 className="font-medium text-center">Vignesh</h2>
                    <p className="text-center">INSTRUCTOR</p>
                </div>
                
                <div>
                    <div className="flex flex-col  justify-center overflow-hidden rounded-2xl p-3">

                        <img className="zoom  rounded-2xl h-60 w-52" src={akka}></img>
                    </div>
                    <h2 className="font-medium text-center">akka</h2>
                    <p className="text-center">INSTRUCTOR</p>
                </div>
                <div>
                    <div className="flex flex-col  justify-center overflow-hidden rounded-2xl p-3">

                        <img className="zoom  rounded-2xl h-60" src={nirumal}></img>
                    </div>
                    <h2 className="font-medium text-center">Nirumal</h2>
                    <p className="text-center">INSTRUCTOR</p>
                </div>

                <div className="mt-24">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-9">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                </div> */}
            {/* </div> */}
            <div className="h-[60vh] ">
            <Swiper
            slidesPerView={5   }
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            // modules={[Navigation, Pagination]}
            // className=""
            // navigation
            // breakpoints={{
            //     320:{
            //         slidesPerView: 1,
            //         spaceBetween: 5,
            //     },
            //     640: {
            //         slidesPerView: 3,
            //         spaceBetween: 10,
            //     },
            //     1024: {
            //         slidesPerView: 5,
            //         spaceBetween: 20,
            //     },
            //     1280: {
            //         slidesPerView: ,
            //         spaceBetween: 30,
            //     },
            // }}
            style={{
                width: '100%', // This ensures the Swiper takes the full width of its container
            }}
                    
                    >

                        {
                            data.map((data, index) => (
                               
                                <SwiperSlide key={index} className=' p-4   rounded-2xl border '>

                                    {/* <img className=" " src={data.img} alt="" />
                                    <h3 className=''>{data.name}</h3>
                                    <h3>{data.position}</h3>
                                    <p className=' '>{data.desc}</p> */}
                                    <img className="h-56 w-56 rounded-lg ml-1 " src={data.img}></img>
                                    <h6 className=" text-center pt-1 font-bold ">{data.name}</h6>
                                    <p className="text-center ">{data.position}</p>
                                    <p className="text-center ">{data.desc}</p>


                                
</SwiperSlide>
                            ))
                        }
                      
                        
                    </Swiper>
                    
            </div>
            <div className="mx-24 mb-5 flex gap-16 mt-10  ">
                        <img className="h-[50vh] w-[90vh] rounded-lg" src={teams}></img>
                        <img className="h-[50vh] rounded-lg" src={teams2}></img>
                        {/* <p>ssdsa</p> */}
                    </div>

                        <Footer/>
        </div>
    )
}

export default Team;
