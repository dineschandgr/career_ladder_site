import React, { useState, useEffect, useRef } from "react";
import mam from "../../asset/team/mam.png";
import sir from "../../asset/team/sir.png";
import vicky from "../../asset/team/vicky.png";
import Nirmalkumar from "../../asset/team/nirumal.png";
import ashik from "../../asset/team/ashik.png";
import samaja from "../../asset/team/samaja.png";
import nith from "../../asset/team/nithiish.png";
import feroz from "../../asset/team/feroz.png";
import karthick from "../../asset/team/karthick.jpg";
import dhanuprasadh from "../../asset/team/dhanuprasadh.jpg";
import kailas from "../../asset/team/kailas.png";
import Anisto from "../../asset/team/anisto.jpg";
import Prasanth from "../../asset/team/prasanth.jpg";
import mouli from "../../asset/team/mouli.png";
import divya from "../../asset/team/divya.jpg";
import Pooja from "../../asset/team/pooja.jpg";
import { Footer } from "../Footer/Footer";
import Nav from "../nav/nav";
import Nav2 from '../nav2/nav2';
import WhatsAppButton from "../whatsapp/whatsapp";
import './team.css';

function Team() {
  const [reverseScroll, setReverseScroll] = useState(false);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const scrollContainer1 = useRef(null);
  const scrollContainer2 = useRef(null);

  const data = [
    { img: mam, name: "GAYATHRI KANDASAMY", position: "Managing Director and CENTER HEAD\nB.Tech, M.S(NUS, Singapore)" },
    { img: sir, name: "DineshChand G.R", position: "Chief Technical Architect and Lead Instructor\nB.Tech, M.S(NUS, Singapore)" },
    { img: samaja, name: "Samaja R V", position: "Career Counselor" },
    { img: vicky, name: "Vignesh Kumar", position: "Technical Trainer" },
    { img: Nirmalkumar, name: "Nirmalkumar.D", position: "Technical Trainer" },
    { img: ashik, name: "Ashik K", position: "Technical Trainer" },
    { img: nith, name: "Nithish Kumar", position: "Technical Trainer" },
    { img: feroz, name: "Feroz S", position: "Technical Trainer" },
    { img: karthick, name: "Karthick", position: "Technical Trainer" },
    { img: Anisto, name: "Anisto", position: "Technical Trainer" },
    { img: kailas, name: "Kailas", position: "Technical Trainer" },
    { img: dhanuprasadh, name: "Dhanuprasadh", position: "Technical Trainer" },
    { img: Prasanth, name: "Prasanth", position: "UIUX Designer" },
    { img: mouli, name: "Moulitharan", position: "Technical Trainer" },
    { img: divya, name: "Divya", position: "Technical Trainer" },
    { img: Pooja, name: "Pooja", position: "Technical Trainer" },
  ];

  // Auto-scrolling logic
  useEffect(() => {
    if (isAutoScrolling) {
      const interval = setInterval(() => {
        if (scrollContainer1.current) {
          scrollContainer1.current.scrollLeft += reverseScroll ? -1 : 2;
        }
        if (scrollContainer2.current) {
          scrollContainer2.current.scrollLeft += reverseScroll ? -1 : 2;
        }
      }, 100); // Adjust the speed by changing the value here
      return () => clearInterval(interval); // Cleanup interval on unmount or when auto-scrolling is disabled
    }
  }, [isAutoScrolling, reverseScroll]);

  // Toggle reverse scroll direction
  const toggleReverseScroll = () => {
    setReverseScroll((prev) => !prev);
  };

  // Split data into two parts
  const firstHalf = data.slice(0, Math.ceil(data.length / 2));
  const secondHalf = data.slice(Math.ceil(data.length / 2));

  return (
    <div className="team-container">
      <Nav />
      <Nav2 />
      <WhatsAppButton />

      {/* Heading Section */}
      <div className="relative overflow-hidden">
        <div className="flex justify-center font-medium text-3xl pt-24 text-blue-700 h-auto py-12 sm:py-12">
          <p className="font-sans w-full sm:w-[80%] text-center text-black text-4xl sm:text-5xl font-bold animate__animated animate__fadeIn animate__delay-1s">
            Distance Doesn’t Matter For OUR <span className="text-red-500">TEAM MEMBERS</span>
          </p>
        </div>
      </div>

      {/* Team Members Display */}
      <div className="flex justify-center font-extrabold text-3xl pt-16 pb-8 text-black">
        <h1 className="animate__animated animate__fadeIn">OUR <span className="text-red-500 font-extrabold">TEAM</span></h1>
      </div>

      {/* First Scrolling Container */}
      <div
        className="flex justify-center relative py-6 overflow-hidden"
        ref={scrollContainer1}
        style={{ overflowX: 'hidden', scrollBehavior: 'smooth' }} // Hide the scroll bar
      >
        <div className="flex space-x-6">
          {firstHalf.map((teamMember, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-6 sm:space-y-4 hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] mb-6 p-2 bg-gray-100 rounded-lg hover:bg-blue-100 transition-all duration-300">
                <img className="h-full w-full rounded-lg object-cover shadow-lg transition-all duration-300" src={teamMember.img} alt={teamMember.name} loading="lazy" />
              </div>
              <h6 className="text-center font-sans font-bold text-2xl sm:text-xl">{teamMember.name}</h6>
              <p className="text-center text-lg sm:text-md font-sans">{teamMember.position}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Second Scrolling Container */}
      <div
        className="flex justify-center relative py-6 overflow-hidden"
        ref={scrollContainer2}
        style={{ overflowX: 'hidden', scrollBehavior: 'smooth' }} // Hide the scroll bar
      >
        <div className="flex space-x-6">
          {secondHalf.map((teamMember, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-6 sm:space-y-4 hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] mb-6 p-2 bg-gray-100 rounded-lg hover:bg-blue-100 transition-all duration-300">
                <img className="h-full w-full rounded-lg object-cover shadow-lg transition-all duration-300" src={teamMember.img} alt={teamMember.name} loading="lazy" />
              </div>
              <h6 className="text-center font-sans font-bold text-2xl sm:text-xl">{teamMember.name}</h6>
              <p className="text-center text-lg sm:text-md font-sans">{teamMember.position}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Reverse Scroll Button */}
      <div className="flex justify-center py-4">
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 transition-all"
          onClick={toggleReverseScroll}
        >
          Toggle Reverse Scroll
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default Team;
