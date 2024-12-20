import pic from "../../../asset/cours/fullstack/time.png"
import pic1 from "../../../asset/cours/fullstack/world.png"
import pic2 from "../../../asset/cours/fullstack/like.png"
import pic3 from "../../../asset/cours/fullstack/setting.png"
import pic4 from "../../../asset/cours/fullstack/time.png"

// Frontend Images
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

// Backend Images
import pic15 from "../../../asset/cours/fullstack/expreess.png"
import pic16 from "../../../asset/cours/fullstack/github.png"
import pic17 from "../../../asset/cours/fullstack/node.png"
import pic18 from "../../../asset/cours/fullstack/restapi.png"

import Nav from "../../nav/nav"
import { Footer } from "../../Footer/Footer"

export const Fullstack = () => {

    const key = [
        { image: pic, title: "Program Duration", text: "160 Hours" },
        { image: pic1, title: "Accredited by", text: "NSDC" },
        { image: pic2, title: "Flexible Learning", text: "In-center and online" },
        { image: pic3, title: "Practical Learning", text: "Hands-on experience" },
        { image: pic4, title: "Learn from", text: "Industry Experts" }
    ]

    const Frontend = [
        { image: pic5, title: "Angular" },
        { image: pic6, title: "Bootstrap" },
        { image: pic7, title: "Database" },
        { image: pic8, title: "React" },
        { image: pic9, title: "Json" },
        { image: pic10, title: "Jquery" },
        { image: pic11, title: "HTML" },
        { image: pic12, title: "CSS3" },
        { image: pic13, title: "JavaScript" },
        { image: pic14, title: "MongoDB" },
    ]

    const Backend = [
        { image: pic15, title: "Express.js" },
        { image: pic16, title: "GitHub" },
        { image: pic17, title: "Node.js" },
        { image: pic18, title: "Restful API" },
    ]

    return (
        <div className="font-sans">
            <Nav />
            <div>
                {/* Hero Section */}
                <div className="bg-[url('https://web.archive.org/web/20240416125644im_/https://livewirecoimbatore.com/wp-content/uploads/2020/06/inner3.jpg')] bg-no-repeat bg-cover lg:h-[62vh] flex items-center justify-center">
                    <h1 className="text-white text-3xl lg:text-5xl font-extrabold text-center px-4 hover:scale-105 transition-transform duration-300 ease-in-out">Master Full Stack Development with MEAN/MERN Stack</h1>
                </div>

                {/* Key Highlights Section */}
                <div className="bg-[#E6F1FF] lg:mx-[15%] py-10">
                    <h1 className="text-2xl font-extrabold text-center mb-6">Course - Key Highlights</h1>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
                        {key.map((item, index) => (
                            <div key={index} className="text-center hover:bg-[#d1eaff] rounded-lg p-4 transition-all duration-300">
                                <img src={item.image} alt={item.title} className="mx-auto mb-4 hover:scale-105 transition-transform duration-300 ease-in-out" loading="lazy" />
                                <p className="text-lg font-semibold">{item.title}</p>
                                <h1 className="text-xl font-bold">{item.text}</h1>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Course Description */}
                <div className="lg:px-20 px-4 py-10">
                    <h1 className="text-3xl font-extrabold text-center">Full Stack Development - MEAN / MERN Stack - Course</h1>
                    <p className="text-lg pt-4 text-center">MEAN / MERN stack: Full-stack development using MEAN (MongoDB, Express, Angular, Node.js) or MERN (MongoDB, Express, React, Node.js) stack allows developers to build end-to-end web applications. This skillset is highly valued in the software industry, providing career opportunities as a full-stack developer capable of developing both the front-end and back-end of web applications.</p>
                    
                    <h1 className="pt-8 text-3xl font-extrabold text-center">Course Objective</h1>
                    <p className="text-lg pt-4 text-center">Learners will be equipped with the knowledge and skills needed to design and develop modern web applications using the MEAN or MERN stack. Learners will be able to build and deploy end-to-end applications, from front-end user interfaces to back-end APIs and databases, by the end of this course. They will also gain a solid foundation in best practices for web development and industry-standard tools.</p>
                </div>

                {/* Key Topics Covered */}
                <div className="lg:px-20 px-4 py-10">
                    <h1 className="text-2xl font-extrabold text-center">Key Topics Covered</h1>

                    {/* Front-End Section */}
                    <h2 className="pt-6 text-xl font-medium text-center">Front-End</h2>
                    <div className="grid lg:grid-cols-5 grid-cols-2 gap-6 pt-4">
                        {Frontend.map((item, index) => (
                            <div key={index} className="text-center hover:scale-110 transition-transform duration-300">
                                <img src={item.image} alt={item.title} className="h-14 mx-auto mb-2 hover:scale-125 transition-transform duration-300" loading="lazy" />
                                <h5 className="text-sm font-medium">{item.title}</h5>
                            </div>
                        ))}
                    </div>

                    {/* Back-End Section */}
                    <h2 className="pt-6 text-xl font-medium text-center">Back-End</h2>
                    <div className="grid lg:grid-cols-4 grid-cols-2 gap-6 pt-4">
                        {Backend.map((item, index) => (
                            <div key={index} className="text-center hover:scale-110 transition-transform duration-300">
                                <img src={item.image} alt={item.title} className="h-14 mx-auto mb-2 hover:scale-125 transition-transform duration-300" loading="lazy" />
                                <h5 className="text-sm font-medium">{item.title}</h5>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scope & Career Opportunities */}
                <div className="lg:px-20 px-4 py-10">
                    <h1 className="text-2xl font-extrabold text-center">Scope & Career Opportunities</h1>
                    <p className="text-lg pt-4 text-center">The Full Stack Development course using MEAN/MERN stack has a wide range of career opportunities. With the growing demand for web development skills, learners can expect to work as Full Stack Developers, Web Developers, Software Engineers, and more. This course will enable learners to build dynamic and responsive web applications that can be easily scaled to meet the demands of businesses and users.</p>
                </div>

            </div>

            <Footer />
        </div>
    )
}
