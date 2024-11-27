import React from "react";
import Nav from "../nav/nav";
import { Footer } from "../Footer/Footer";
import { ContactForm } from "../Contact/Contact";

import headerImg from "../../asset/palcement/header.jpg";
import placement1 from "../../asset/palcement/placement1.jpeg";
import placement2 from "../../asset/palcement/placement2.jpeg";
import placement3 from "../../asset/palcement/placement3.jpeg";
import placement29 from "../../asset/palcement/placement29.jpeg";

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

import company1 from "../../asset/companies/onedate.png";
import company2 from "../../asset/companies/ibots.png";
import company3 from "../../asset/companies/knowillence.jpg";
import company4 from "../../asset/companies/tekhosl.png";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const itemData = [
  {
    img: placement4,
    rows: 3,
    cols: 2,
  },
  {
    img: placement16,
    rows: 2,
  },
  {
    img: placement6,
    rows: 2,
  },
  {
    img: placement7,
    rows: 4,
    cols: 2,
  },
  {
    img: placement8,
    cols: 2,
    rows: 5,
  },
  {
    img: placement9,
    rows: 5,
    cols: 2,
  },
  {
    img: placement10,
    rows: 3,
  },
  {
    img: placement11,
    rows: 3,
  },
  {
    img: placement12,
    rows: 4,
    cols: 2,
  },
  {
    img: placement13,
    rows: 3,
  },
  {
    img: placement14,
    rows: 3,
  },
  {
    img: placement15,
    rows: 5,
    cols: 2,
  },
  {
    img: placement17,
    rows: 3,
    cols: 1,
  },
  {
    img: placement20,
    rows: 3,
    cols: 1,
  },
  {
    img: placement18,
    rows: 5,
    cols: 2,
  },
  {
    img: placement19,
    rows: 3,
    cols: 1,
  },

  {
    img: placement21,
    rows: 3,
    cols: 1,
  },
  {
    img: placement22,
    rows: 5,
    cols: 2,
  },
  {
    img: placement23,
    rows: 3,
    cols: 1,
  },
  {
    img: placement24,
    rows: 3,
    cols: 1,
  },
  {
    img: placement25,
    rows: 4,
    cols: 2,
  },
  {
    img: placement26,
    rows: 3,
    cols: 1,
  },
  {
    img: placement27,
    rows: 3,
    cols: 1,
  },
  {
    img: placement28,
    rows: 5,
    cols: 2,
  },
];

const Placement = () => {
  //   function srcset(image, size, rows = 1, cols = 1) {
  //     return {
  //       src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
  //       srcSet: `${image}?w=${size * cols}&h=${
  //         size * rows
  //       }&fit=crop&auto=format&dpr=2 2x`,
  //     };
  //   }

  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }
  return (
    <div id="Placement">
      <Nav />
      <h1 className="text-center m-5">Internships & Placements</h1>
      <header
        style={{ backgroundColor: "rgba(250,250,250,255)" }}
        className="md:flex md:h[500px]"
      >
        <img src={headerImg} alt="" className="md:w-1/2" />

        <div
          className=" "
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <p
            style={{
              alignItems: "center",
              width: "80%",
              textAlign: "center",
              fontSize: "1.5vw",
            }}
          >
            We bridge education and industry, empowering students with essential
            skills through a robust placement program to meet job market
            demands.
          </p>
        </div>
      </header>

      <div>
        <h2 style={{ textAlign: "center", margin: "50px 0" }}>
          Developers have cracked careers.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-4 gap-4 p-3">
          <div className="md:w-full p-1 border-1 border-black rounded-lg">
            <img
              src={placement1}
              alt=""
              className="w-full h-full object-center rounded-lg"
            />
          </div>

          <div className="md:w-full  p-1 border-1 border-black rounded-lg">
            <img
              src={placement2}
              alt=""
              className="w-full h-full object-center rounded-lg"
            />
          </div>

          <div className="md:w-full  p-1 border-1 border-black rounded-lg">
            <img
              src={placement3}
              alt=""
              className="w-full h-full object-center rounded-lg"
            />
          </div>

          <div className="md:w-full  p-1 border-1 border-black rounded-lg">
            <img
              src={placement29}
              alt=""
              className="w-full h-full object-center rounded-lg"
            />
          </div>
        </div>
      </div>

      <div>
        <h2
          style={{ textAlign: "center", margin: "50px 0", fontSize: "2.5vw" }}
        >
          Placement Drive
        </h2>
        <div className="flex justify-center">
          <ImageList
            sx={{ width: "90vw" }}
            variant="quilted"
            cols={4}
            rowHeight={121}
          >
            {itemData.map((item) => (
              <ImageListItem
                key={item.img}
                cols={item.cols || 1}
                rows={item.rows || 1}
                className="grid grid-cols-1"
              >
                <img
                  {...srcset(item.img, 121, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                  className="object-full w-full h-full"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </div>

      <div className="mt-10 mb-10 p-10 border-t-1 border-gray-300">
        <h2 style={{ textAlign: "center", margin: "50px 0" }}>
          Associated Companies
        </h2>

        <div className="flex justify-evenly items-center">
          <img src={company1} alt="" className="h-10" />
          <img src={company2} alt="" className="h-10" />
          <div className="flex justify-center flex-col">
            <img src={company3} alt="" className="h-20" />
            <p
              className="p-0"
              style={{ fontWeight: "bold", fontSize: "1.5rem" }}
            >
              Knowillence
            </p>
          </div>
          <div className="flex justify-center flex-col">
            <img src={company4} alt="" className="h-10 w-10" />
            <p
              className="p-0"
              style={{ fontWeight: "bold", fontSize: "1.5rem" }}
            >
              TEKHOSL
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Placement;
