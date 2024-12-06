import { Footer } from "../../Footer/Footer"
import pic1 from "../../../asset/cours/Programming.png"
import pic2 from "../../../asset/cours/accretide.png"
import pic3 from "../../../asset/cours/fexible.png"
import pic4 from "../../../asset/cours/learn.png"
import pic5 from "../../../asset/cours/practical.png"
import pic6 from "../../../asset/cours/hack.png"

export const Cyber = () => {
    const Courses = [
        {
            image: pic1,
            title: "Program Duration",
            hours: "68 Hours",
            apply: "Apply Now"
        },
        {
            image: pic2,
            title: "Accredited by",
            hours: "NSDC",
            apply: "Apply Now"
        },
        {
            image: pic3,
            title: "Practical Learning",
            hours: "Hands-on experience",
            apply: "Apply Now"
        },
        {
            image: pic4,
            title: "Flexible Learning",
            hours: "In-center and online",
            apply: "Apply Now"
        },
        {
            image: pic5,
            title: "Learn from",
            hours: "Industry Experts",
            apply: "Apply Now"
        }
    ];

    return (
        <div>
            {/* Desktop View */}
            <div className="hidden lg:flex">
                <div className="bg-[url('https://web.archive.org/web/20240416125644im_/https://livewirecoimbatore.com/wp-content/uploads/2020/06/inner3.jpg')] bg-no-repeat h-[70vh]">
                    <div className="flex justify-center items-center h-full text-center px-8">
                        <h1 className="text-white font-bold text-[45px] leading-tight animate__animated animate__fadeIn animate__delay-1s">
                            Cybersecurity: Bridge the Skills Gap as an Ethical Hacker
                        </h1>
                    </div>
                </div>
            </div>

            {/* Mobile View */}
            <div className="lg:hidden flex flex-col items-center">
                <div className="bg-[url('https://web.archive.org/web/20240416125644im_/https://livewirecoimbatore.com/wp-content/uploads/2020/06/inner3.jpg')] bg-no-repeat h-96 w-full">
                    <h1 className="text-2xl text-white font-bold text-center pt-32 animate__animated animate__fadeIn">
                        Cybersecurity: Bridge the Skills Gap as an Ethical Hacker
                    </h1>
                    <div className="text-center text-sm pt-4 px-3">
                        <span className="text-white">Become a Blockchain Expert with NASSCOM Accredited Training </span>
                        <a href="" className="text-white px-5">/</a>
                        <span className="text-white">Cybersecurity Skills Gap as an Ethical Hacker</span>
                    </div>
                </div>
            </div>

            {/* Key Highlights Section */}
            <h1 className="hidden lg:flex text-3xl font-bold pt-10 pl-14">Course - Key Highlights</h1>
            <div className="hidden lg:flex gap-6 justify-center pt-9">
                {Courses.map((course, index) => (
                    <div className="bg-[#F1F6FC] w-52 h-[40vh] rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105" key={index}>
                        <img src={course.image} alt={course.title} className="h-16 mt-9 mx-auto" />
                        <h1 className="text-center text-[20px] pt-5 font-medium">{course.title}</h1>
                        <p className="text-center text-sm pt-3">{course.hours}</p>
                        <div className="flex justify-center items-center pt-5 text-blue-500 hover:text-black cursor-pointer">
                            <h4 className="font-medium">{course.apply}</h4>
                            <div className="pl-3 pt-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Course Overview Section */}
            <div className="flex flex-col lg:flex-row pt-10 lg:pt-20 px-5 lg:px-16">
                <div className="lg:w-[60%]">
                    <h2 className="text-3xl font-bold">Ethical Hacking – Course Training</h2>
                    <p className="text-slate-500 text-md pt-5 font-serif">
                        According to a Gartner study, nearly 68% of global business leaders believe cybersecurity risks are increasing. As cybersecurity threats continue to rise, ethical hackers play a critical role in safeguarding digital assets and protecting against cyber-attacks.
                    </p>
                </div>
                <div className="lg:w-[40%] mt-8 lg:mt-0 flex justify-center">
                    <img src={pic6} alt="Ethical Hacking" className="w-full lg:w-[80%] h-[40vh] object-cover rounded-lg shadow-md transform hover:scale-105 transition duration-300" />
                </div>
            </div>

            {/* Course Objectives */}
            <h1 className="text-3xl font-bold pt-10 pl-14">Course Objectives</h1>
            <p className="text-slate-500 text-md pl-14 w-[55vw] pt-5 font-serif">
                Designed to provide learners with the knowledge and practical skills required to defend systems and networks against cyber threats, this certification will prepare you to identify vulnerabilities and mitigate risks.
            </p>

            {/* Key Topics Covered */}
            <h1 className="text-3xl font-bold pt-10 pl-14">Key Topics Covered</h1>
            <ul className="text-[#7A7A7A] pl-14 pt-5 font-serif">
                <li>Cloud Computing</li>
                <li>Cryptography</li>
                <li>Footprinting & Reconnaissance</li>
                <li>Hacking Web Servers</li>
                <li>Social Engineering</li>
                <li>SQL Injection</li>
                <li>System Hacking</li>
            </ul>

            {/* Suitable Audience */}
            <h2 className="text-2xl font-bold pt-10 pl-14">Who is this Course Suitable for?</h2>
            <ul className="text-[#7A7A7A] pl-14 pt-5 font-serif">
                <li>Cybersecurity Enthusiasts</li>
                <li>IT Professionals</li>
                <li>Students Pursuing a Career in Cybersecurity</li>
            </ul>

            {/* Scope & Career Opportunities */}
            <h3 className="text-[#7A7A7A] pl-14 pt-10 text-xl font-medium">Scope & Career Opportunities</h3>
            <p className="text-[#7A7A7A] font-serif w-[70vw] pl-14 pb-5 pt-6">
                The course covers penetration testing, vulnerability assessment, network security, web application security, and ethical hacking tools, making it an ideal choice for building a career in cybersecurity.
            </p>

            <Footer />
        </div>
    );
}