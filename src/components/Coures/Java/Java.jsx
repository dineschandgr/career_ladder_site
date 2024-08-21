import pic from "../../../asset/cours/fullstack/time.png"
import pic1 from "../../../asset/cours/fullstack/world.png"
import pic2 from "../../../asset/cours/fullstack/like.png"
import pic3 from "../../../asset/cours/fullstack/setting.png"
import pic4 from "../../../asset/cours/fullstack/time.png"
import Nav from "../../nav/nav"
import { Footer } from "../../Footer/Footer"




export const Java = () => {


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

    return (
        <div>
            <div>
            <Nav/>
                <div className="bg-[url('https://cdn.sanity.io/images/tlr8oxjg/production/1ca7b34a8d5308a03ae186dfe72caabce0327fe2-1456x816.png?w=3840&q=80&fit=clip&auto=format')] bg-cover  lg:h-[65vh] h-[45vh] bg-no-repeat">

                    <h1 className="text-white text-center text-[35px] font-bold lg:pt-36 pt-14 pl-8">Java Full Stack Development</h1>
                    <h6 className="text-white text-center text-sm lg:pl-70 pt-2  ">Learn to Debug Java Code like A Pro. Master Advanced Java Programming!</h6>
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
                        <h1 className="text-2xl pt-5 font-medium font-serif   lg:pl-56">Java and Advanced Java - Certification Training Course</h1>
                        <p className="text-1xl lg:w-[69vw] lg:pl-56 pt-4  font-serif px-3">Java is a widely-used, versatile programming language with a vast ecosystem of libraries and frameworks.
                            Proficiency in Java, along with advanced Java concepts such as multithreading, JDBC, and JSP/Servlets, can lead to career opportunities as a Java developer, software engineer, or application developer in various industries.</p>

                        <h1 className="pt-4 lg:text-2xl text-3xl font-serif lg:pl-56">Course objective</h1>
                        <p className="lg:text-1xl font-serif pt-3 lg:pl-56 lg:w-[69vw] px-2">This course teaches the fundamental and advanced concepts of the Java programming language.
                            Through hands-on programming experience, the course focuses on developing scalable and robust applications using advanced Java programming techniques and frameworks.
                            The course is intended for experienced Java programmers who want to expand their Java programming knowledge and skills.</p>
                    </div>
                </div>


                <div>
                    <h1 className="pt-4 text-2xl font-serif lg:pl-56">Key Topics Covered</h1>

                    <h6 className="lg:pl-60 font-medium text-1xl">Java</h6>

                    <div className="text-sm font-serif lg:pl-64">
                        <li>Decision Constructs</li>
                        <li className="" >Event handling & multi threading</li>
                        <li >Interfaces </li>
                        <li >JAVA packages and collection</li>
                        <li >OOPs Concepts</li>
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