import React, { useRef, useState } from "react";
import mam from "../../asset/team/mam.png";
import sir from "../../asset/team/sir.png";
import vicky from "../../asset/team/vicky.png";
import Nirmalkumar from "../../asset/team/nirumal.png";
import ashik from "../../asset/team/ashik.png";
import samaja from "../../asset/team/samaja.png";
import madhi from "../../asset/team/madhi.png";
import teams from "../../asset/team/teams.png";
import teams2 from "../../asset/team/teams2.png";
import nith from "../../asset/team/nithiish.png";
import feroz from "../../asset/team/feroz.png";
import { Footer } from "../Footer/Footer";
import Nav from "../nav/nav";

function Team() {
    const [isMouseDown, setIsMouseDown] = useState(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
    const scrollContainer = useRef(null);

    const handleMouseDown = (e) => {
        setIsMouseDown(true);
        startX.current = e.pageX - scrollContainer.current.offsetLeft;
        scrollLeft.current = scrollContainer.current.scrollLeft;
        scrollContainer.current.style.cursor = "url('https://www.example.com/hand-cursor.png'), auto";
    };

    const handleMouseUp = () => {
        setIsMouseDown(false);
        scrollContainer.current.style.cursor = "pointer";
    };

    const handleMouseMove = (e) => {
        if (!isMouseDown) return;
        e.preventDefault();
        const x = e.pageX - scrollContainer.current.offsetLeft;
        const walk = (x - startX.current) * 0.10;
        scrollContainer.current.scrollLeft = scrollLeft.current - walk;
    };

    // Team data
    const data = [
        { img: mam, name: "GAYATHRI KANDASAMY", position: "Managing Director and CENTER HEAD\nB.Tech, M.S(NUS, Singapore)" },
        { img: sir, name: "DineshChand G.R", position: "Chief Technical Architect and Lead Instructor\nB.Tech, M.S(NUS, Singapore)" },
        { img: samaja, name: "Samaja R V", position: "Career Counselor" },
        { img: vicky, name: "Vignesh Kumar", position: "Technical Trainer" },
        { img: Nirmalkumar, name: "Nirmalkumar.D", position: "Technical Trainer" },
        { img: madhi, name: "Mathivaanan. A", position: "Technical Trainer" },
        { img: ashik, name: "Ashik K", position: "Technical Trainer" },
        { img: nith, name: "Nithish Kumar", position: "Technical Trainer" },
        { img: feroz, name: "Feroz S", position: "Technical Trainer" },
    ];

    return (
        <div className="pb-0 m-0">
            <Nav />

            {/* Heading section with a colored background */}
            <div className="flex justify-center font-medium text-3xl pt-24 text-blue-700 bg-gradient-to-b from-violet-400 to-white h-auto py-16 sm:py-12">
                <p className="font-sans w-full sm:w-[80%] text-center text-white text-4xl sm:text-5xl font-bold">
                    Distance Doesn’t Matter For OUR <span className="text-red-500">TEAM MEMBERS</span>
                </p>
            </div>

            {/* Team Title */}
            <div className="flex justify-center font-extrabold text-3xl pt-16 pb-8 text-black">
                <h1>OUR <span className="text-red-500 font-extrabold">TEAM</span></h1>
            </div>

            {/* Horizontal Drag Container with mouse drag scroll and smooth scrolling */}
            <div
                ref={scrollContainer}
                className="overflow-x-auto py-4 cursor-pointer snap-x snap-mandatory scroll-smooth mb-20"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseUp}
                style={{
                    scrollbarWidth: "none", // Hides the default scrollbar
                    overflowX: "scroll",
                    scrollbarColor: "#1d4ed8 #e5e7eb", // Custom scrollbar color
                }}
            >
                <div className="flex items-center justify-start space-x-16 sm:space-x-8 px-8 sm:px-4">
                    {data.map((teamMember, index) => (
                        <div key={index} className="flex flex-col items-center snap-center space-y-6 sm:space-y-4 hover:scale-105 transition-all duration-300">
                            {/* Rectangle background behind the photo */}
                            <div className="relative h-[300px] w-[300px] sm:h-[250px] sm:w-[250px] mb-6 p-2 bg-gray-100 rounded-lg hover:bg-blue-100 transition-all duration-300">
                                <img className="h-full w-full rounded-lg object-cover" src={teamMember.img} alt={teamMember.name} />
                            </div>
                            <h6 className="text-center font-sans font-bold text-2xl sm:text-xl">{teamMember.name}</h6>
                            <p className="text-center text-lg sm:text-md font-sans">{teamMember.position}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Full-width and height images with good spacing between them */}
            <div className="flex justify-center mb-10 sm:mb-8">
                {/* First Image */}
                <img className="h-auto w-full object-cover" src={teams} alt="team image 1" />
            </div>
            <div className="flex justify-center mt-10 sm:mt-8">
                {/* Second Image */}
                <img className="h-auto w-full object-cover" src={teams2} alt="team image 2" />
            </div>

            <Footer />
        </div>
    );
}

export default Team;
