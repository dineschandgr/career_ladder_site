import live from "../../asset/img/new.png"
import { Link } from "react-router-dom";

import instagram from "../../asset/icon/insta2.png"
import facebook from "../../asset/icon/facebook2.png"
import linkedin from "../../asset/icon/icon-removebg-preview.png"
import youtube from "../../asset/icon/youtube.png"
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import React, { useState, useEffect, useRef } from 'react';
// import { Dropdown } from "../next/next"


function DropRight({ menuList }) {
    const [list, setList] = useState(menuList)
    const handleBlock = (index) => {
        
        for(let x of list){
            x["isActive"] = false
        }
        list[index].isActive = true
        console.log(list[index].isActive,list[index].topic );
        setList([...list])
    }
    return (
        <div className="absolute bg-slate-50 top-44  w-[76%] left-[22%] z-20 flex   pl-2 gap-1 cursor-pointer rounded-xl p-2">
            <div>
                {menuList.map((data, index) => (
                    <h6 key={index} className="text-base font-medium  " onClick={() => handleBlock(index)}>{data["topic"]}</h6>
                ))}
            </div>
            {list.map((data, index) => (
                <div><Link to={data.path} className="flex">
                    {
                        data.isActive ? <li className="flex gap-4">{data["subTopics"].map((sub, index1) => (

                           <Link to={sub["path"]}>
                           
                           <p className=" bg-white p-2 mt-2 rounded-xl w-[25vh] text-sm  h-20 font-bold  ml-5  shadow-md " >{sub["name"]}</p>
                           </Link>
                        ))}</li> : <></>
                    }
                </Link>
                </div>
            ))}
        </div>
    )
}

function Nav() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    useEffect(() => {

        const handleResize = () => {
            if (window.innerWidth === 1024) {
                onClose()
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const menuList = [
        {


            "topic": "Software Development",
            subTopics: [
                // "java", "python", "Full Stack Development-MEAN/MERN stack", "Django",
                {name:"Java",path:"/java",},{name:"Full Stack Development-MEAN/MERN stack",path:"/fullstack"},{name:"Python",path:""},{name:"Django",path:""}

            ],
            isActive: true


        },
        {
            "topic": "Industrial Automation",
            path: "/java",
            subTopics: [
                // "PLC & SCADA", "Electrical Power System Analysis"
                {name:"PLC & SCADA",path:""}, {name:"Electrical Power System Analysis",path:""}
            ]
            ,
            isActive: false

        },
        {
            "topic": "Electronic Design Automation",
            subTopics: [
                // "MATLAB", "Microcontroller", "Advanced Microcontroller"
                {name:"MATLAB",path:""}, {name:"Microcontroller",path:""},{name:"Advanced Microcontroller",path:""}

            ]

            ,
            isActive: false
        },
        {
            "topic": "ITIM",
            subTopics: [
                // "Network Engineering - Routing and Switching", "Network Security", "Ethical Hacking"
                {name:"Network Engineering - Routing and Switching",path:""},{name:"Network Security",path:""},{name:"Ethical Hacking",path:""}
            ],
            isActive: false
        },
        {
            "topic": "Special Programs",
            subTopics: [
                // "Data Science", "Data Science & Data Engineering using Python", "Data Science using R"
                {name:"Data Science",path:""},  {name:"Data Science & Data Engineering using Python",path:""},  {name:"Data Science using R",path:""},
                {name:"Data Analytics using Power BI",path:""}
            ],
            isActive: false
        }



    ]

    const [menuDrop, setMenuDrop] = useState(false);
    const handleDropDown = () => {
        setMenuDrop(!menuDrop)
    }
    const [dropdown, setDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setDropdown(!dropdown);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdown(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div >
            <div className="">
                <div className="bg-sky-950 flex justify-between   p-2 ">

                    <div className="flex gap-3 pl-9">
                        <div className="flex pt-2">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                            <h3 className="text-base text-white ">+91 8807148869</h3>
                        </div>
                        <div className="flex gap-1 pt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <h3 className="text-base text-white ">tn.cbehopecollege@livewireindia.com, gayathri.it.tce@gmail.com</h3>

                        </div>

                    </div>
                    <div>
                        <div className="flex pr-24  text-white">
                            <p className="pt-1 font-semibold pr-2 text-lg">Follow Us: </p>

                            <a href="https://www.instagram.com/livewire_hopes_sundarapuram/"> <img className="h-9 w-9 text-white mt-1 p-1" src={instagram} /></a>
                            <a href="https://www.facebook.com/people/Livewire-Hopes-Coimbatore/pfbid0rghW3yHGQsWhXeKnMeDnNhzG4ENsQYSNqsYbKKhMfkeSeg1JcdLNharq7Jo3PQVHl/"> <img className="h-9 w-10 text-white  mt-1" src={facebook} /></a>
                            <a href="https://www.linkedin.com/company/livewire-coimbatore-hope-college-sundarapuram?originalSubdomain=in"> <img className="h-9 w-9 text-white mt-1 p-1 " src={linkedin} /></a>
                            <a href="https://www.youtube.com/@LivewireHopeCollege"> <img className="h-11 w-9 text-white p-1  " src={youtube} /></a>




                        </div>
                    </div>



                </div>


                <div className=" hidden lg:flex justify-between pt-4 pb-1  mr-40  ">
                    <div>
                        <Link to={"/"}>

                            <img className="ml-20 h-[15vh]" src={live} />
                        </Link>
                    </div>
                    <div>
                        <nav className="flex gap-5 mt-10 ">
                            <ul className="flex text-black gap-7 font-medium " >
                                <Link to={"/"}>

                                    <li><a href="#">HOME</a></li>
                                </Link>
                                <li><a href="# " onClick={handleDropDown}>COURSES</a></li>
                                {menuDrop && (<DropRight className="" menuList={menuList} onClick={menuDrop} />)}
                                <Link to={"/team"}>

                                    <li ><a href="#">TEAM</a></li>
                                </Link>
                                <Link to={"/contact"}>

                                    <li><a href="#">CONTACT</a></li>
                                </Link>
                            </ul>
                        </nav>


                    </div>




                </div>

                <div className="sm:block lg:hidden">
                    <div className=" flex justify-between pt-16 ">
                        <img className="" src={live} />
                        <p className="mr-10 mt-5 pr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-8">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg></p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Nav;