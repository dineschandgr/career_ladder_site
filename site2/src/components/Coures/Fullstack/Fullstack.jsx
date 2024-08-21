import pic from "../../../asset/cours/fullstack/time.png"
import pic1 from "../../../asset/cours/fullstack/world.png"
import pic2 from "../../../asset/cours/fullstack/like.png"
import pic3 from "../../../asset/cours/fullstack/setting.png"
import pic4 from "../../../asset/cours/fullstack/time.png"


// front-end

import pic5 from "../../../asset/cours/fullstack/angular.png";
import pic6 from "../../../asset/cours/fullstack/bootstrap.png";
import pic7 from "../../../asset/cours/fullstack/database1.png";
import pic8 from "../../../asset/cours/fullstack/react-removebg-preview.png";
import pic9 from "../../../asset/cours/fullstack/json.png";
import pic10 from "../../../asset/cours/fullstack/jQuery.png";
import pic11 from "../../../asset/cours/fullstack/html.png";
import pic12 from "../../../asset/cours/fullstack/css3.png";
import pic13 from "../../../asset/cours/fullstack/js.png";
import pic14 from "../../../asset/cours/fullstack/mongodb.png";

// Backend 

import pic15 from "../../../asset/cours/fullstack/expreess.png"
import pic16 from "../../../asset/cours/fullstack/github.png"

import pic17 from "../../../asset/cours/fullstack/node.png"

import pic18 from "../../../asset/cours/fullstack/restapi.png"

import Nav from "../../nav/nav"


import { Footer } from "../../Footer/Footer"


export const Fullstack = () => {

    const key = [
        {
            image: pic,
            title: "Program Duration",
            text: "160 Hours"
        },
        {
            image: pic1,
            title: "Accredited by",
            text: "NSDC"
        },
        {
            image: pic2,
            title: "Fexible Learning",
            text: "In-center and online"
        },
        {
            image: pic3,
            title: "Practical Learning",
            text: "Hands-on experience"
        },
        {
            image: pic4,
            title: "Learn from",
            text: "Industry Experts"
        },
    ]

    const Frontend = [
        {
            image: pic5,
            title: "Angular",
        },
        {
            image: pic6,
            title: "Bootstrap",
        },
        {
            image: pic7,
            title: "Database",
        },
        {
            image: pic8,
            title: "React",
        },
        {
            image: pic9,
            title: "Json",
        },
        {
            image: pic10,
            title: "J.query",
        },
        {
            image: pic11,
            title: "Html",
        },
        {
            image: pic12,
            title: "Css3",
        },
        {
            image: pic13,
            title: "Javascript",
        },
        {
            image: pic14,
            title: "Mongodb",
        },

    ]

    const Backend = [
        {
            image: pic15,
            title: "Express.js",
        },
        {
            image: pic16,
            title: "GitHub",
        },
        {
            image: pic17,
            title: "Node.js",
        },
        {
            image: pic18,
            title: "Restful API",
        },
    ]


    return (
        <div>
            <Nav/>
            <div>

                <div className="bg-[url('https://web.archive.org/web/20240416125644im_/https://livewirecoimbatore.com/wp-content/uploads/2020/06/inner3.jpg')] bg-no-repeat lg:h-[62vh] ">
                    <h1 className="text-white font-serif text-[30px] text-center pt-44">Master full stack development with MEAN/MERN stack</h1>
                </div>

                <div className="bg-[#E6F1FF]  lg:mx-[15%] ">
                    <h1 className="text-2xl font-bold font-serif pl-5">Course - Key highlights</h1>

                    <div className="lg:flex justify-center lg:gap-14 lg:pt-10 pb-7 ">
                        {key.map((Key, index) => (
                            <div className="text-center lg:mt-0" key={index}>
                                <img src={Key.image} alt="" className="lg:pl-5 pl-[41%]" />
                                <p className="text-sm  pt-2 ">{Key.title}</p>
                                <h1 className="text-1xl font-bold font-serif pt-1 ">{Key.text}</h1>
                            </div>

                        ))}
                    </div>

                </div>

                <div className="">
                    <div className="">
                        <h1 className="text-2xl pt-5 font-medium font-serif   lg:pl-56">Full Stack Development - MEAN / MERN stack - Course</h1>
                        <p className="text-1xl lg:w-[69vw] lg:pl-56 pt-4  font-serif px-3">MEAN / MERN stack: Full-stack development using MEAN (MongoDB, Express, Angular, Node.js) or MERN (MongoDB, Express, React, Node.js) stack allows developers to build end-to-end web applications.
                            This skillset is highly valued in the software industry,
                            providing career opportunities as a full-stack developer capable of developing both the front-end and back-end of web applications.</p>

                        <h1 className="pt-4 lg:text-2xl text-3xl font-serif lg:pl-56">Course objective</h1>
                        <p className="lg:text-1xl font-serif pt-3 lg:pl-56 lg:w-[69vw] px-2">Learners will be equipped with the knowledge and skills needed to design and develop modern web applications using the MEAN or MERN stack.
                            Learners will be able to build and deploy end-to-end applications,
                            from front-end user interfaces to back-end APIs and databases, by the end of this course.
                            They will also gain a solid foundation in best practises for web development and industry-standard tools.</p>
                    </div>
                </div>

                <div>
                    <div>
                        <h1 className="pt-4 text-2xl font-serif lg:pl-56">Key Topics Covered</h1>
                        <h2 className="pt-6 text-1xl font-medium lg:pl-60">Front-End</h2>

                        <div className=" pt-4 grid grid-cols-5 items-center lg:pl-[20%] lg:w-[75vw] ">
                            {Frontend.map((Frontend, index) => (
                                <div className=" pt-2" key={index}>
                                    <img src={Frontend.image} alt="" className="h-14 lg:pl-14 px-2 " />
                                    <h5 className="text-sm font-medium lg:text-center font-serif pt-2 pb-3 px-2">{Frontend.title}</h5>
                                </div>
                            ))}


                        </div>

                    </div>
                    <div>

                        <h2 className="pt-6 text-1xl font-medium lg:pl-60">Back-End</h2>
                        <div className=" flex lg:pl-[20%] lg:gap-24 lg:w-[75vw] ">

                            {Backend.map((Backend, index) => (
                                <div className="pt-2 " key={index}>
                                    <img src={Backend.image} alt="" className="h-14" />
                                    <h5 className="pt-2 pb-4 text-sm font-serif text-center">{Backend.title}</h5>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className="text-2xl font-serif lg:pl-60 pt-5">Scope & Career Opportunities</h1>

                    <p className="text-1xl lg:pl-64 pt-3 lg:w-[70vw] font-serif pb-3 px-2">The Full Stack Development course using MEAN/MERN stack has a wide range of career opportunities.
                        With the growing demand for web development skills, learners can expect to work as Full Stack Developers, Web Developers, Software Engineers, and more.
                        This course will enable learners to build dynamic and responsive web applications that can be easily scaled to meet the demands of businesses and users.</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
