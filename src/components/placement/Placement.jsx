import React, { useRef, useEffect } from "react";
import Nav from "../nav/nav";
import Nav2 from '../nav2/nav2';
import { Footer } from "../Footer/Footer";
import WhatsAppButton from "../whatsapp/whatsapp";

import headerImg from "../../asset/palcement/header.webp";
import placement1 from "../../asset/palcement/placement1.webp";
import placement2 from "../../asset/palcement/placement2.webp"; 
import placement3 from "../../asset/palcement/placement3.webp"; 
import placement29 from "../../asset/palcement/placement29.webp"; 
import placement4 from "../../asset/palcement/placement4.jpeg";
import placement6 from "../../asset/palcement/placement6.jpeg";
import placement7 from "../../asset/palcement/placement7.jpeg";
import placement8 from "../../asset/palcement/placement8.jpeg";
import placement9 from "../../asset/palcement/placement9.jpeg";
import placement10 from "../../asset/palcement/placement10.jpeg";
import placement11 from "../../asset/palcement/placement11.jpeg";
import placement12 from "../../asset/palcement/placement12.jpeg";
import placement13 from "../../asset/palcement/placement13.jpeg";
import placement14 from "../../asset/palcement/placement14.jpeg";
import placement15 from "../../asset/palcement/placement15.jpeg";
import placement16 from "../../asset/palcement/placement16.jpeg";
import placement17 from "../../asset/palcement/placement17.jpeg";
import placement18 from "../../asset/palcement/placement18.jpeg";
import placement19 from "../../asset/palcement/placement19.jpeg";
import placement20 from "../../asset/palcement/placement20.jpeg";
import placement21 from "../../asset/palcement/placement21.jpeg";
import placement22 from "../../asset/palcement/placement22.jpeg";
import placement23 from "../../asset/palcement/placement23.jpeg";
import placement24 from "../../asset/palcement/placement24.jpeg";
import placement25 from "../../asset/palcement/placement25.jpeg";
import placement26 from "../../asset/palcement/placement26.jpeg";
import placement27 from "../../asset/palcement/placement27.jpeg";
import placement28 from "../../asset/palcement/placement28.jpeg";
import placed1 from "../../asset/palcement/placed1.webp";
import placed2 from "../../asset/palcement/placed2.webp";
import placed3 from "../../asset/palcement/placed3.webp";
import placed4 from "../../asset/palcement/placed4.webp";

import company1 from "../../asset/companies/onedate.png";
import company2 from "../../asset/companies/ibots.png";
import company3 from "../../asset/companies/knowillence.jpg";
import company4 from "../../asset/companies/tekhosl.png";
import ScrollToTopOnArrowPress from "../scrollup/scrollup.jsx";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

// New images for the 8-photo section
import newImage1 from "../../asset/palcement/drive1.jpg";
import newImage2 from "../../asset/palcement/drive2.jpg";
import newImage3 from "../../asset/palcement/drive3.jpg";
import newImage4 from "../../asset/palcement/drive4.jpg";
import newImage5 from "../../asset/palcement/drive5.jpg";
import newImage6 from "../../asset/palcement/drive6.jpg";
import newImage7 from "../../asset/palcement/drive7.jpg";
import newImage8 from "../../asset/palcement/drive8.jpg";
import newImage9 from "../../asset/palcement/drive9.png";
import newImage10 from "../../asset/palcement/drive10.jpg";
import newImage11 from "../../asset/palcement/drive9.jpg";

const itemData = [
  { img: placement4 },
  { img: placement16 },
  { img: placement6 },
  { img: placement7 },
  { img: placement8 },
  { img: placement9 },
  { img: placement10 },
  { img: placement11 },
  { img: placement12 },
  { img: placement13 },
  { img: placement14 },
  { img: placement15 },
  { img: placement17 },
  { img: placement20 },
  { img: placement18 },
  { img: placement19 },
  { img: placement21 },
  { img: placement22 },
  { img: placement23 },
  { img: placement24 },
  { img: placement25 },
  { img: placement26 },
  { img: placement27 },
  { img: placement28 },
];

const newImageData = [
  { img: newImage1 },
  { img: newImage2 },
  { img: newImage3 },
  { img: newImage4 },
  { img: newImage5 },
  { img: newImage6 },
  { img: newImage7 },
  { img: newImage8 },
  { img: newImage9 },
  { img: newImage10 },
  { img: newImage11 },
  { img: newImage1 },
  { img: newImage2 },
  { img: newImage3 },
  { img: newImage4 },
  { img: newImage5 },
  { img: newImage6 },
  { img: newImage7 },
  { img: newImage8 },
  { img: newImage9 },
  { img: newImage10 },
  { img: newImage11 },
];

const Placement = () => {
  const imageListRef = useRef(null);
  const newImageListRef = useRef(null);

  // Automatic scroll every 3 seconds (adjust as needed)
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (imageListRef.current) {
        const scrollWidth = imageListRef.current.scrollWidth;
        const currentScroll = imageListRef.current.scrollLeft;

        // If the scroll has reached the end, scroll back to the start
        if (currentScroll + window.innerWidth >= scrollWidth) {
          imageListRef.current.scrollLeft = 0;
        } else {
          imageListRef.current.scrollLeft = currentScroll + 1;
        }
      }
      if (newImageListRef.current) {
        const scrollWidth = newImageListRef.current.scrollWidth;
        const currentScroll = newImageListRef.current.scrollLeft;

        // If the scroll has reached the end, scroll back to the start
        if (currentScroll + window.innerWidth >= scrollWidth) {
          newImageListRef.current.scrollLeft = 0;
        } else {
          newImageListRef.current.scrollLeft = currentScroll + 1;
        }
      }
    }, 30); // adjust the scroll speed here

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div id="Placement" className="font-sans">
      <Nav />
      <Nav2 />
      <ScrollToTopOnArrowPress />

      {/* Section: Developers have cracked careers */}
      <div className="my-10">
        <WhatsAppButton />
        <h2 className="text-center text-3xl font-semibold mb-10">Developers have cracked careers.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 px-5">
          <div className="flex justify-center p-2 border rounded-lg">
            <img
              src={placed4}
              alt="Placed4"
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
          </div>
          <div className="flex justify-center p-2 border rounded-lg">
            <img
              src={placed3}
              alt="Placed3"
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
          </div>
          <div className="flex justify-center p-2 border rounded-lg">
            <img
              src={placed1}
              alt="Placed1"
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
          </div>
          <div className="flex justify-center p-2 border rounded-lg">
            <img
              src={placed2}
              alt="Placed2"
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* New Section: Header Images */}
      <div className="my-10">
        <h2 className="text-center text-3xl font-semibold mb-10">Our Recent Placements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-5">
          <div className="flex justify-center p-2 border rounded-lg">
            <img
              src={placement1}
              alt="Placement 1"
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
          </div>
          <div className="flex justify-center p-2 border rounded-lg">
            <img
              src={placement2}
              alt="Placement 2"
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
          </div>
          <div className="flex justify-center p-2 border rounded-lg">
            <img
              src={placement3}
              alt="Placement 3"
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
          </div>
          <div className="flex justify-center p-2 border rounded-lg">
            <img
              src={placement29}
              alt="Placement 29"
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* New Section: Automatically Scrolling Placement Images */}
      <div className="my-10 px-5">
        <h2 className="text-center text-3xl font-semibold mb-10">More Successful Placements</h2>
        <div className="flex justify-center overflow-x-hidden">
          <div ref={imageListRef} className="overflow-x-auto whitespace-nowrap">
            {itemData.map((item) => (
              <img
                key={item.img}
                src={item.img}
                alt={item.img}
                loading="lazy"
                className="inline-block mr-4 object-contain"
                style={{ height: '200px' }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Duplicated Section: Automatically Scrolling Placement Images */}
      <div className="my-10 px-5">
        <h2 className="text-center text-3xl font-semibold mb-10">Even More Successful Placements 14-03-2025</h2>
        <div className="flex justify-center overflow-x-hidden">
          <div ref={newImageListRef} className="overflow-x-auto whitespace-nowrap">
            {newImageData.map((item) => (
              <img
                key={item.img}
                src={item.img}
                alt={item.img}
                loading="lazy"
                className="inline-block mr-4 object-contain"
                style={{ height: '200px' }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Section: Associated Companies */}
      <div className="my-10 px-5 py-10 bg-gray-50 border-t-2 border-gray-300">
        <h2 className="text-center text-3xl font-semibold mb-10">Associated Companies</h2>
        <div className="flex flex-wrap justify-center items-center gap-14">
          <img
            src={company1}
            alt="Company 1"
            className="h-16"
            loading="lazy"
          />
          <img
            src={company2}
            alt="Company 2"
            className="h-16"
            loading="lazy"
          />
          <div className="flex flex-col justify-center items-center">
            <img
              src={company3}
              alt="Company 3"
              className="h-24"
              loading="lazy"
            />
            <p className="font-bold text-xl mt-2">Knowillence</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src={company4}
              alt="Company 4"
              className="h-16"
              loading="lazy"
            />
            <p className="font-bold text-xl mt-2">TEKHOSL</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Placement;
