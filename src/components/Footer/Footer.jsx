import React from 'react';
import { Link } from "react-router-dom"; // Import the Link component for routing
import { Helmet } from 'react-helmet'; // Import Helmet for SEO
import pic from "../../asset/Footer/facebook-removebg-preview.png";
import pic1 from "../../asset/Footer/tw-removebg-preview.png";
import pic2 from "../../asset/Footer/pinterset.png";
import pic3 from "../../asset/Footer/image.png";
import pic4 from "../../asset/Footer/youtub.png";
import instagram from "../../asset/icon/insta2.png";
import facebook from "../../asset/icon/facebook2.png";
import linkedin from "../../asset/icon/icon-removebg-preview.png";
import youtube from "../../asset/icon/youtube.png";
import live from "../../asset/Footer/lw.png";

export const Footer = () => {
    const Footericon = [
        { image: pic },
        { image: pic1 },
        { image: pic2 },
        { image: pic3 },
        { image: pic4 },
    ];

    return (
        <>
            {/* SEO Meta Tags using react-helmet */}
            <Helmet>
                <title>CareerLadder - Coimbatore | Best Tech Courses</title>
                <meta name="description" content="CareerLadder offers training in Data Science, Full Stack Development, Cyber Security, Digital Marketing & more with career assistance in Coimbatore." />
                <meta name="keywords" content="Data Science course, Data Analytics course, Full Stack Development course, Digital Marketing course, Cyber Security course, Automation Testing course, Job Assistance, Interview Support, Tech Career, Coimbatore, Best Data Science course, Top Data Analytics course, Full Stack Developer course, Digital Marketing certification, Job Ready Courses, Career Development, Data Science Certification, Full Stack Web Development, Learn Python, Cyber Security, Online Tech Courses, Career Coaching, Career Guidance, IT Training, Coimbatore training, Hands-on learning, Job-oriented courses, Top Tech Certifications, Industry-relevant courses" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="CareerLadder - Coimbatore | Best Tech Courses" />
                <meta property="og:description" content="CareerLadder helps students advance their careers with hands-on training in Data Science, Full Stack Development, and more." />
                <meta property="og:image" content="URL_of_the_image.jpg" /> {/* Replace with actual image URL */}
                <meta property="og:url" content="https://www.careerladderedu.com" />
            </Helmet>

            {/* Main Footer Section */}
            <div className="bg-gradient-to-r from-black to-black text-white font-sans">

                {/* Top Section with Logo and Follow Us */}
                <div className="lg:flex justify-between items-center px-8 py-8 lg:px-[10%] border-white">
                    {/* Left Section - Logo */}
                    <div className="px-4 mb-8 lg:mb-0">
                        <img className="h-[10vh] bg-white rounded-2xl mb-4" src={live} alt="CareerLadder Logo" />
                    </div>

                    {/* Right Section - Follow Us */}
                    <div className="mt-8 flex items-center gap-6">
                        <h2 className="font-semibold text-lg mr-4">Social Media :</h2>
                        <div className="flex gap-6 mt-3">
                            <a href="https://www.instagram.com/careerladder_coimbatore/">
                                <img className="h-9 w-9 hover:opacity-80 transition-opacity duration-300 mb-4" src={instagram} alt="Instagram" />
                            </a>
                            <a href="https://www.facebook.com/people/CareerLadder-Hopescollege-Coimbatore/61552807079875/">
                                <img className="h-9 w-9 hover:opacity-80 transition-opacity duration-300" src={facebook} alt="Facebook" />
                            </a>
                            <a href="https://www.linkedin.com/company/careerladder-coimbatore-hope-college-sundarapuram">
                                <img className="h-9 w-9 hover:opacity-80 transition-opacity duration-300" src={linkedin} alt="LinkedIn" />
                            </a>
                            <a href="https://www.youtube.com/@CareerLadder-CL">
                                <img className="h-9 w-9 hover:opacity-80 transition-opacity duration-300" src={youtube} alt="YouTube" />
                            </a>
                        </div>
                    </div>
                </div>


               

                {/* Contact Information */}
                <div className="mt-2 font-sans text-left font-bold px-8 lg:px-[11%]">
                    <h2 className="font-semibold text-2xl mb-6 text-blue-300">Contact Us:</h2>

                    {/* Contact 1 - Phone and Address */}
                    <div className="mb-6">
                        <h3 className="font-semibold text-xl">CareerLadder (Main Office)</h3>
                        <h4 className="text-lg">
                            <strong>Phone :</strong> +91 88071 48869
                        </h4>
                        <h4 className="text-lg">
                            <strong>Address :</strong> CareerLadder <br /> Door No. 207, Avinasi Road, Opp GRG Ladies Hostel, B.R Puram, Coimbatore - 641004
                        </h4>
                    </div>

                    {/* Contact 2 - Phone and Address */}
                    <div>
                        <h3 className="font-semibold text-xl">CareerLadder (Sundarapuram Office)</h3>
                        <h4 className="text-lg">
                            <strong>Phone :</strong> +91 88070 28071
                        </h4>
                        <h4 className="text-lg">
                            <strong>Address :</strong> CareerLadder Sundarapuram <br /> 5, Bank of Baroda Upstairs, Madukkarai Main Road, Opp Abirami Hospital, Sundarapuram, Coimbatore - 641024
                        </h4>
                    </div>
                </div>

                {/* Main content (Description) */}
                <div className="lg:flex justify-normal px-8 py-7 lg:px-[9.5%] border-white">
                    <div className="px-4 mb-8 lg:mb-0">
                        <p className="text-sm lg:text-base font-medium leading-relaxed mb-4">
                            CareerLadder is a leading training institute in Coimbatore offering comprehensive courses in
                            <strong>Data Science</strong>, <strong>Full Stack Development</strong>, <strong>Cyber Security</strong>,
                            <strong>Digital Marketing</strong>, <strong>Automation Testing</strong>, and more. Our programs are designed
                            to provide students with practical, hands-on experience and real-world industry insights. We specialize in
                            job-oriented tech training, ensuring that you gain the skills needed to start a successful career in fields like
                            <strong>Data Analytics</strong>, <strong>Software Development</strong>, <strong>Cybersecurity Certification</strong>,
                            <strong>Digital Marketing Strategies</strong>, and more. At CareerLadder, we are committed to helping you launch
                            your <strong>tech career</strong> in Coimbatore by offering specialized <strong>IT courses</strong>, internship
                            opportunities, job assistance, and expert career coaching. Our <strong>internship programs</strong> provide real-world
                            experience and connect students with top tech companies, making you job-ready. We also offer <strong>100% placement
                            assistance</strong>, ensuring that every student has the support they need to secure their ideal role in the tech industry.
                            Whether you're looking to become a <strong>Full Stack Developer</strong> or a <strong>Digital Marketing Specialist</strong>,
                            we provide top-tier training and placement support that prepares you for the challenges of the tech industry.
                        </p>

                    </div>
                </div>

                {/* Navigation Links Section */}
             {/* Navigation Links Section */}
<div className="flex flex-wrap justify-center px-8 py-8 lg:px-[6%] border-t border-white">
    {/* Navigation Links */}
    <div className="flex justify-center gap-8">
        <Link to="/" className="text-sm hover:text-teal-400 transition-colors duration-300">Home</Link>
        <Link to="/courses" className="text-sm hover:text-teal-400 transition-colors duration-300">Courses</Link>
        <Link to="/team" className="text-sm hover:text-teal-400 transition-colors duration-300">Team</Link>
        <Link to="/placement" className="text-sm hover:text-teal-400 transition-colors duration-300">Placement</Link>
        <Link to="/contact-us" className="text-sm hover:text-teal-400 transition-colors duration-300">Contact Us</Link>
    </div>
</div>


                {/* Keywords Section */}
                <div className="bg-gray-800 py-4">
                    <h2 className="text-center text-lg font-semibold text-white mb-4">Explore More</h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        <div className="flex flex-wrap justify-center gap-6">
                        <span className="text-sm hover:text-teal-400 transition-colors duration-300">Data Science course</span>
                        <span className="text-sm hover:text-teal-400 transition-colors duration-300">Data Analytics course</span>
                        <span className="text-sm hover:text-teal-400 transition-colors duration-300">Full Stack Development course</span>
                        <span className="text-sm hover:text-teal-400 transition-colors duration-300">Digital Marketing course</span>
                        <span className="text-sm hover:text-teal-400 transition-colors duration-300">Cyber Security course</span>
                        <span className="text-sm hover:text-teal-400 transition-colors duration-300">Automation Testing course</span>
                        <span className="text-sm hover:text-teal-400 transition-colors duration-300">Job Assistance</span>
                        <span className="text-sm hover:text-teal-400 transition-colors duration-300">Interview Support</span>
                        <span className="text-sm hover:text-teal-400 transition-colors duration-300">Tech Career</span>
                        <span className="text-sm hover:text-teal-400 transition-colors duration-300">Coimbatore</span>
                        <span className="text-sm hover:text-teal-400 transition-colors duration-300">Top Data Analytics course</span>
                        <span className="text-sm hover:text-teal-400 transition-colors duration-300">Full Stack Developer course</span>
                        <span className="text-sm hover:text-teal-400 transition-colors duration-300">Digital Marketing certification</span>
                        <span className="text-sm hover:text-teal-400 transition-colors duration-300">Job Ready Courses</span>
                        <span className="text-sm hover:text-teal-400 transition-colors duration-300">Career Development</span>
                        <span className="text-sm hover:text-teal-400 transition-colors duration-300">Data Science Certification</span>
                        <span className="text-sm hover:text-teal-400 transition-colors duration-300">Full Stack Web Development</span>
                        <span className="text-sm hover:text-teal-400 transition-colors duration-300">Learn Python</span>
                        <span className="text-sm hover:text-teal-400 transition-colors duration-300">Cyber Security</span>
                        <span className="text-sm hover:text-teal-400 transition-colors duration-300">Online Tech Courses</span>
                        <span className="text-sm hover:text-teal-400 transition-colors duration-300">Career Coaching</span>
                        <span className="text-sm hover:text-teal-400 transition-colors duration-300">Career Guidance</span>
                        <span className="text-sm hover:text-teal-400 transition-colors duration-300">IT Training</span>
                        <span className="text-sm hover:text-teal-400 transition-colors duration-300">Coimbatore training</span>
                    </div>
                        {/* Add your keywords here */}
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="bg-gray-900 text-white py-2 mt-8">
                    <p className="text-center text-sm">© 2023 CareerLadder Coimbatore. All Rights Reserved.</p>
                </div>
            </div>
        </>
    );
};
