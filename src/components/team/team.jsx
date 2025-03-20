import React from "react";
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

  return (
    <div className="team-container">
      <Nav />
      <Nav2 />
      <WhatsAppButton />

      {/* Heading Section */}
      <div className="relative overflow-hidden">
        <div className="flex justify-center font-medium text-3xl pt-24 text-blue-700 h-auto py-12 sm:py-12">
          <p className="font-sans w-full sm:w-[80%] text-center text-black text-4xl sm:text-5xl font-bold">
            Distance Doesn’t Matter For OUR <span className="text-red-500">TEAM MEMBERS</span>
          </p>
        </div>
      </div>

      {/* Team Members Display */}
      <div className="flex justify-center font-extrabold text-3xl pt-16 pb-8 text-black">
        <h1>OUR <span className="text-red-500 font-extrabold">TEAM</span></h1>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 py-8">
        {data.map((teamMember, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-4 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <img
              className="w-48 h-48 object-cover rounded-full border-4 border-gray-100 shadow-md"
              src={teamMember.img}
              alt={`${teamMember.name} - ${teamMember.position}`}
              loading="lazy"
            />
            <div className="p-4 text-center">
              <h6 className="text-xl font-semibold text-gray-800">{teamMember.name}</h6>
              <p className="text-sm text-gray-600 mt-2">{teamMember.position}</p>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Team;
