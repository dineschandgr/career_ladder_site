import { Footer } from "../../Footer/Footer"

// import pic from "../../asset/image.png"


import pic1 from "../../../asset/cours/Programming.png"
import pic2 from "../../../asset/cours/accretide.png"
import pic3 from "../../../asset/cours/fexible.png"
import pic4 from "../../../asset/cours/learn.png"
import pic5 from "../../../asset/cours/practical.png"
import pic6 from "../../../asset/cours/hack.png"


export const Cyber = () => {


    const Coures = [
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
            title: "Fexible Learning",
            hours: "In-center and online",
            apply: "Apply Now"
        },
        {
            image: pic5,
            title: "Learn from",
            hours: "Industry Experts",
            apply: "Apply Now"
        }
    ]



    return (
        <div className="">
            <div>
                <div className="hidden lg:flex">

                    <div className=" bg-[url('https://web.archive.org/web/20240416125644im_/https://livewirecoimbatore.com/wp-content/uploads/2020/06/inner3.jpg')] bg-no-repeat h-[70vh]">

                        <div className=" hidden  lg:flex justify-center">

                            <h1 className="pt-36  text-center text-white font-bold text-[45px] w-[60%] m-0 leading-tight ">Cyber securityBridge the Cybersecurity Skills Gap as an Ethical HackerCyber security</h1>
                        </div>
                        {/* <h1 className="text-center text-white font-bold text-[40px]">Skills Gap as an Ethical HackerCyber</h1> */}
                        <div className=" hidden lg:flex gap-5 justify-center">
                            <span className="text-white">Become a Blockchain Expert with NASSCOM Accredited Training </span>
                            <a href="" className="text-white">/</a>
                            <span className="text-white">Cyber securityBridge the Cybersecurity Skills Gap as an Ethical HackerCyber security</span>
                        </div>


                    </div>
                </div>


                <h1 className=" hidden lg:flex text-3xl font-bold pt-10 pl-14">Course - Key highlights</h1>


                <div className=" hidden  lg:flex gap-6 justify-center pt-9 ">
                    {Coures.map((Coures, index) => (
                        <div className="bg-[#F1F6FC] w-52 h-[40vh] rounded" key={index}>
                            <img src={Coures.image} alt="" className="h-16 mt-9 px-16" />
                            <h1 className="text-center text-[20px] pt-5 font-medium">{Coures.title}</h1>
                            <p className="text-center text-sm pt-3">{Coures.hours}</p>
                            <div className="flex text-blue-500 justify-center pt-5 hover:text-black cursor-pointer">
                                <h4 className="font-medium">{Coures.apply}</h4>
                                <div className="pt-1.5 pl-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>

                                </div>

                            </div>

                        </div>
                    ))}
                </div>
                <div>

                    <div className="flex">
                        <div className="">

                            <h2 className="hidden lg:flex  pl-14 text-3xl font-bold pt-10">Ethical Hacking – Course Training </h2>
                            <p className="hidden lg:flex w-[55vw] pl-44 text-slate-500 text-md  pt-10 font-serif ">According to a Gartner study, nearly 68% of global business leaders believe cybersecurity risks are increasing. As cybersecurity threats continue to increase, ethical hackers play a critical role in safeguarding digital assets and protecting against cyber-attacks. Ethical hackers are in high demand by organizations seeking to identify vulnerabilities and implement robust security measures, making it a lucrative career option in the cybersecurity field.</p>
                        </div>
                        <div className="rounded hidden lg:flex">
                            <img src={pic6} alt="" className="h-[40vh] pl-40 pt-10 " />
                        </div>

                    </div>
                    <h1 className=" hidden lg:flex text-3xl font-bold pl-14 m-0">Course objective</h1>

                    <h6 className="hidden lg:flex w-[45vw] text-slate-500 text-md pl-44 pt-5 font-serif">Designed to provide learners with the knowledge and practical skills required to defend systems and networks against cyber threats. Ethical hacking certification will provide learners with a thorough understanding of ethical hacking, allowing them to identify and mitigate cyber threats, secure networks, and safeguard sensitive data.</h6>
                </div>

                <h1 className=" hidden lg:flex pl-14 text-3xl font-bold pt-10">Key Topics Covered</h1>
                <div className="text-[#7A7A7A] pl-44 pt-5  font-serif  hidden lg:flex flex-col ">

                    <li className="" >Cloud computing</li>
                    <li >Cryptography </li>
                    <li >Foot printing & reconnaissance</li>
                    <li >Hacking web servers</li>
                    <li >Social engineering</li>
                    <li >SQL injection</li>
                    <li >System hacking</li>
                </div>



                <h2 className="hidden lg:flex pl-14 text-2xl font-bold pt-10" >Who is this Course suitable for?</h2>
                <div className=" text-[#7A7A7A] pl-44 pt-5 font-serif hidden lg:flex flex-col">

                    <li >Cybersecurity enthusiasts</li>
                    <li >IT professionals</li>
                    <li >Students pursuing a career in cybersecurity</li>
                </div>

                <h3 className="text-[#7A7A7A] pl-36 pt-9 font-medium hidden lg:flex">Scope & Career Opportunities</h3>

                <p className="text-[#7A7A7A] font-serif w-[70vw] pl-44 pb-5 pt-6 hidden lg:flex  ">The course covers a broad range of topics, including penetration testing, vulnerability assessment,
                    network security, web application security, and ethical hacking tools and techniques.</p>

            </div>

             


            {/* mobile screen */}

            <div className=" flex lg:hidden ">
                <div className="  bg-[url('https://web.archive.org/web/20240416125644im_/https://livewirecoimbatore.com/wp-content/uploads/2020/06/inner3.jpg')]  h-96 w-full ">
                    <h1 className="text-2xl text-white font-bold text-center pt-32 ">  Cyber securityBridge the Cybersecurity Skills Gap as an Ethical HackerCyber security</h1>
                    <div className=" text-center text-sm pt-4 px-3">
                        <span className="text-white">Become a Blockchain Expert with NASSCOM Accredited Training </span>
                        <a href="" className="text-white px-5">/</a>
                        <span className="text-white">Cyber securityBridge the Cybersecurity Skills Gap as an Ethical HackerCyber security</span>
                    </div>
                </div>
            </div>
            <h1 className="flex lg:hidden text-2xl font-bold pl-3 pt-5">Course - Key highlights</h1>


            <div className=" lg:hidden pt-3 px-7">
                {Coures.map((Coures, index) => (
                    <div className="bg-[#F1F6FC] h-[35vh] mb-5 rounded-xl" key={index}>
                        <div className="pt-6">
                            <img src={Coures.image} alt="" className="h-14 pl-[42%]" />
                            <h1 className="text-center text-[20px] pt-5 font-medium">{Coures.title}</h1>
                            <p className="text-center text-sm pt-3">{Coures.hours}</p>
                            <div className="flex text-white justify-center mt-2 rounded-2xl  pl-4 hover:text-black cursor-pointer bg-blue-500 py-1 mx-24">
                                <h4 className="font-medium">{Coures.apply}</h4>
                                <div className="pt-1.5 pl-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>

                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="lg:hidden">
                <h2 className="text-3xl px-2 font-bold" >Ethical Hacking – Course Training</h2>
                <p className=" text-[16px] pl-2 font-sans text-[#7A7A7A] pt-2">According to a Gartner study, nearly 68% of global business leaders believe cybersecurity risks are increasing.
                    As cybersecurity threats continue to increase, ethical hackers play a critical role in safeguarding digital assets and protecting against cyber-attacks.
                    Ethical hackers are in high demand by organizations seeking to identify vulnerabilities and implement robust security measures,
                    making it a lucrative career option in the cybersecurity field.</p>
            </div>

            <div className="lg:hidden ">
                <h1 className="text-3xl px-2 font-bold pt-3">Course objective</h1>
                <p className="text-1xl text-[#7A7A7A] font-sans px-3 pt-2">Designed to provide learners with the knowledge and practical skills required to defend systems and networks against cyber threats.
                    Ethical hacking certification will provide learners with a thorough understanding of ethical hacking, allowing them to identify and mitigate cyber threats,
                    secure networks, and safeguard sensitive data.</p>

            </div>
            <img src={pic6} alt="" className="lg:hidden  px-6 pt-4 pb-" />
            <div className="lg:hidden">
                <h1 className="pt-3 text-3xl px-2 font-bold">Key Topics Covered</h1>

                <div className="text-[#7A7A7A] font-serif pl-8">

                    <li className=" ">Cloud computing</li>
                    <li >Cryptography </li>
                    <li >Foot printing & reconnaissance</li>
                    <li >Hacking web servers</li>
                    <li >Social engineering</li>
                    <li >SQL injection</li>
                    <li >System hacking</li>
                </div>
            </div>
            <div className="lg:hidden">
                <h1 className="pt-3 text-2xl px-2 font-bold">Who is this Course suitable for?</h1>

                <div className="text-[#7A7A7A] font-serif pl-8">

                    <li className=" ">Cybersecurity enthusiasts</li>
                    <li >IT professionals </li>
                    <li >Students pursuing a career in cybersecurity</li>
                   
                </div>
            </div>
            <Footer/>
        </div>
    )
}