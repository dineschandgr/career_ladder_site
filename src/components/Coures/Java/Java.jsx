import pic from "../../../asset/cours/fullstack/time.png";
import pic1 from "../../../asset/cours/fullstack/world.png";
import pic2 from "../../../asset/cours/fullstack/like.png";
import pic3 from "../../../asset/cours/fullstack/setting.png";
import pic4 from "../../../asset/cours/fullstack/time.png";
import Nav from "../../nav/nav";
import { Footer } from "../../Footer/Footer";

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
            title: "Flexible Learning",
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
    ];

    return (
        <div className="font-sans bg-white min-h-screen">
            <Nav />

            {/* Hero Section */}
            <div className="relative flex items-center justify-center min-h-[60vh] bg-[#F3F4F6] px-6 py-16 mb-12">
                <div className="text-center text-black z-10 animate__animated animate__fadeIn animate__delay-1s">
                    <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">Java Full Stack Development</h1>
                    <h6 className="text-lg lg:text-xl font-medium">Learn to Debug Java Code like A Pro. Master Advanced Java Programming!</h6>
                </div>
            </div>

            {/* Key Highlights Section */}
            <div className="px-6 py-16 mb-12">
                <h1 className="text-3xl font-extrabold text-left mb-10 animate__animated animate__fadeIn animate__delay-2s">Course Key Highlights</h1>
                <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-10">
                    {key.map((Key, index) => (
                        <div 
                            key={index} 
                            className="bg-white shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 rounded-lg text-center p-6 transform hover:translate-y-[-5px] animate__animated animate__fadeIn animate__delay-3s"
                        >
                            <p className="text-xl font-semibold">{Key.title}</p>
                            <h1 className="text-xl font-bold text-blue-700">{Key.text}</h1>
                        </div>
                    ))}
                </div>
            </div>

            {/* Course Overview Section */}
            <div className="lg:px-20 px-6 py-16 mb-12 text-left animate__animated animate__fadeIn animate__delay-4s">
                <h1 className="text-3xl font-extrabold mb-6">Java and Advanced Java - Certification Training Course</h1>
                <p className="text-lg mb-6">Java is a widely-used, versatile programming language with a vast ecosystem of libraries and frameworks. Proficiency in Java, along with advanced Java concepts such as multithreading, JDBC, and JSP/Servlets, can lead to career opportunities as a Java developer, software engineer, or application developer in various industries.</p>

                <h2 className="text-2xl font-extrabold mb-4">Course Objective</h2>
                <p className="text-lg mb-6">This course teaches the fundamental and advanced concepts of the Java programming language. Through hands-on programming experience, the course focuses on developing scalable and robust applications using advanced Java programming techniques and frameworks. It is intended for experienced Java programmers who want to expand their knowledge and skills.</p>
            </div>

            {/* Key Topics Section */}
            <div className="lg:px-20 px-6 py-16 mb-12 text-left animate__animated animate__fadeIn animate__delay-5s">
                <h1 className="text-3xl font-extrabold mb-8">Key Topics Covered</h1>
             

                <div className="text-lg font-semibold">
                    <ul className="list-disc pl-8 space-y-3">
                        <li>Decision Constructs</li>
                        <li>Event Handling & Multi-threading</li>
                        <li>Interfaces & Abstract Classes</li>
                        <li>JAVA Packages and Collections</li>
                        <li>Object-Oriented Programming Concepts (OOP)</li>
                    </ul>
                </div>
            </div>

            {/* Career Opportunities Section */}
            <div className="lg:px-20 px-6 py-16 bg-[#F8F9FA] mb-12 text-left animate__animated animate__fadeIn animate__delay-7s">
                <h1 className="text-3xl font-extrabold mb-8">Scope & Career Opportunities</h1>
                <p className="text-lg text-left mx-auto max-w-3xl">The Full Stack Development course using Java offers a wide range of career opportunities. With the growing demand for Java developers, learners can expect to work as Full Stack Developers, Software Engineers, Web Developers, and more. This course will enable learners to build dynamic and responsive web applications that can meet the demands of businesses and users.</p>
            </div>

            <Footer />
        </div>
    );
};
