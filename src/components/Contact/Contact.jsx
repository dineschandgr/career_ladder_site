import pic from "../../asset/Contact/@.png"
import pic1 from "../../asset/Contact/email.png"
import pic2 from "../../asset/Contact/Address-removebg-preview.png"

import pic3 from "../../asset/Contact/contact.png"
import img from "../../asset/Contact/img.png"
import Nav from "../nav/nav"

import { Footer } from "../Footer/Footer"

export const Contact = () => {


    const address1 = [
        {
            image: pic2,
            tittle: "ADDRESS 1",
            text: "Door No. 207, Avinasi Road, Opp GRG Ladies Hostel, B.R Puram, Coimbatore - 641004",
        }




    ]
    const address2 = [
        {
            image: pic2,
            tittle: "ADDRESS 2",
            text: "5, Bank of Baroda Upstairs, Madukkarai Main Road,Opp, Abirami Hospital, Sundarapuram, Coimbatore - 641024",
        }


    ]
    const Contact = [
        {
            image: pic,
            tittle: "PHONE NUMBER",
            text: "+91 8807148869",
        },
        {
            image: pic1,
            tittle: "EMAIL ",
            text: "tn.cbehopecollege@livewireindia.com , gayathri.it.tce@gmail.com"
        }


    ]

    return (
        <div>
            <Nav />

            <div className="">
                <div className=" bg-[url('https://www.dudhwanationalpark.in/image/contact-us.jpg')] h-[75vh] w-[full] mx-2 rounded-2xl  bg-no-repeat bg-cover ">


                    <h1 className="flex justify-center pt-28 font-serif text-amber-700 ">Contact</h1>
                    <div>
                        <p className="flex justify-center w-[80vh] text-center ml-[70vh] text-white font-normal">We are always here for you- whether it’s feedback, assistance or you just want to know more about us. Please feel free to reach out to us! </p>

                    </div>

                </div>
{/* 
                <div className=" ">

                        <img className="h-60" src={img}/>

                </div>

                <div>
                <h1 className="flex justify-center  font-serif">Contact</h1>
                    <p className="flex justify-center ">Become a Blockchain Expert with NASSCOM Accredited Training <span className=" px-3 text-black">/</span>  Contact </p>

                </div> */}
            </div>



            <div className=" ml-28 gap-5 justify-center lg:pb-3 pb-3  px-2 pt-10">
                {address1.map((address1, index) => (
                    <div className="flex">
                        <div className="bg-gray-200  hover:bg-slate-300  lg:w-[25vw] h-[40vh] rounded px-2">

                            <img src={address1.image} alt="" className="h-20  lg:mt-9 lg:px-32 px-32 mt-4 " />
                            <h3 className="text-center text-2xl pt-3 font-bold">{address1.tittle}</h3>
                            <p className="text-center font-normal pt-2  ">{address1.text}</p>


                        </div>
                        <div>
                            <iframe className="mt-3 ml-2 bg-gray-200 hover:bg-slate-300   p-3 rounded-2xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.17492993831!2d77.01394977452014!3d11.025498654551193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857b737df98c7%3A0xd927745afbd71500!2sLiveWire%20Coimbatore%20-%20Hope%20College%20-%20Data%20Science%2CData%20Analytics%2CAI%2CML%2CFull%20Stack%20Java%2CPython%2CWeb%2CEmbedded%2CCloud%2CPower%20BI%2CIOT!5e0!3m2!1sen!2sin!4v1723468157516!5m2!1sen!2sin" width="700" height="250" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>




                ))}
            </div>
            <div className="ml-28 gap-5 justify-center lg:pb-3 pb-3  px-2 pt-10">
                {address2.map((address2, index) => (
                    <div className="flex">
                        <div className="bg-gray-200 hover:bg-slate-300   lg:w-[25vw] h-[40vh] rounded px-2 ">

                            <img src={address2.image} alt="" className="h-20  lg:mt-9 lg:px-32 px-32 mt-4 " />
                            <h3 className="text-center text-2xl pt-3 font-bold">{address2.tittle}</h3>
                            <p className="text-center font-normal pt-2 ">{address2.text}</p>


                        </div>
                        <div className="">

                            <iframe className="mt-3 ml-2 bg-gray-200 hover:bg-slate-300  p-3 rounded-2xl" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15668.528994178068!2d76.9726205!3d10.9533814!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85b0aecb1b883%3A0x35e06c84f5093156!2sLivewire%20Coimbatore%20-%20Sundarapuram%20-!5e0!3m2!1sen!2sin!4v1723468411177!5m2!1sen!2sin" width="700" height="250" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>


                ))}
            </div>
            <div className="  lg:flex gap-5 justify-center lg:pb-3 pb-3  px-2 pt-10 ">
                <div>

                </div>
                {Contact.map((Contact, index) => (
                    <div className="flex">
                        <div className="bg-gray-200 hover:bg-slate-300    lg:w-[25vw] h-[40vh] rounded-2xl px-2">

                            <img src={Contact.image} alt="" className="h-20  lg:mt-9 lg:px-32 px-32 mt-4 " />
                            <h3 className="text-center text-2xl pt-3 font-bold">{Contact.tittle}</h3>
                            <p className="text-center font-normal pt-2 ">{Contact.text}</p>


                        </div>


                    </div>



                ))}

            </div>

            <div className="flex justify-center pb-2 px-2 pt-14 mb-7 rounded-2xl">
                <div className="hidden lg:flex">
                    <img src={pic3} alt="" className="h-[70vh] " />
                </div>
                <div className="bg-gradient-to-r from-blue-600  to-pink-600 lg:w-[36vw] ">
                    <p className="text-1xl pl-14 pt-4 font-bold text-white font-serif">Let's Talk</p>
                    <h2 className="text-white pl-14 pt-4 font-bold text-3xl font-serif">Get In Touch</h2>

                    <div className="pl-6">

                        <div className="">

                            <input className="lg:w-[26vw] w-full  mt-3 placeholder:text-white pl-2 bg-gradient-to-r from-blue-800  to-pink-800 rounded h-7 font-serif" type="text" placeholder="Name" />
                        </div>
                        <div className="lg:flex gap-8  mt-3">
                            <input className="rounded bg-gradient-to-r from-blue-800  to-pink-800  placeholder:text-white font-serif pl-2 h-7 w-full lg:w-[170px] " span type="text " placeholder="Email" />
                            <input className="rounded bg-gradient-to-r from-blue-800  to-pink-800 placeholder:text-white font-serif pl-2 h-7 w-full lg:w-[170px] " type="text" placeholder="Password" />
                        </div>

                        <textarea className="lg:w-[26vw] mt-4 bg-gradient-to-r from-blue-800  to-pink-800 placeholder:text-white font-serif pl-2 " name="" id="" placeholder="Your Message Here" >

                        </textarea>

                    </div>
                    <button className="text-white bg-gradient-to-r from-blue-800  to-pink-800 h-14 lg:w-[10vw] rounded ml-32 mt-10">SUBMIT NOW</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}