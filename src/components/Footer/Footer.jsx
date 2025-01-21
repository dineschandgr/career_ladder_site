import { Link } from "react-router-dom"; // Import the Link component for routing
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
        <div className="bg-gradient-to-r from-black to-black text-white font-sans mb-0">
            {/* Main Footer Section */}
            <div className="lg:flex justify-between px-8 py-8 lg:px-[10%] border-t-2 border-white">
                {/* Left Section */}
                <div className="lg:w-[50%] px-4  mb-8 lg:mb-0">
                    <img className="h-[10vh] bg-white rounded-2xl mb-4" src={live} alt="CareerLadder Logo" />
                    <p className="text-sm lg:text-base font-medium leading-relaxed mb-4">
                        CareerLadder students talk about their enjoyable learning experiences that included practical training, best practices, job prospects, and exposure to reputable businesses and organisations.
                    </p>

                    {/* Wrap the Discover Mode button with a Link to redirect to the /blog page */}
                    <Link to="/blog">
                        <button className="text-white bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 rounded-full w-40 h-10 mt-3">
                            Discover Mode
                        </button>
                    </Link>

                    {/* Follow Us Section */}
                    <div className="mt-8">
                        <p className="font-semibold text-lg mb-3">Follow Us:</p>
                        <div className="flex gap-6 mt-3">
                            <a href="https://www.instagram.com/careerladder_coimbatore/">
                                <img className="h-9 w-9" src={instagram} alt="Instagram" />
                            </a>
                            <a href="https://www.facebook.com/people/CareerLadder-Hopescollege-Coimbatore/61552807079875/">
                                <img className="h-9 w-9" src={facebook} alt="Facebook" />
                            </a>
                            <a href="https://www.linkedin.com/company/careerladder-coimbatore-hope-college-sundarapuram">
                                <img className="h-9 w-9" src={linkedin} alt="LinkedIn" />
                            </a>
                            <a href="https://www.youtube.com/@CareerLadder-CL">
                                <img className="h-9 w-9" src={youtube} alt="YouTube" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="lg:w-[50%] mt-6 lg:mt-0">
                    <h1 className="text-2xl font-semibold mb-4">Contact person : Gayathri Kandasamy</h1>

                    {/* Address and Contact Info */}
                    <div className="space-y-6">
                        <div className="flex gap-4 items-center">
                            <img
                                src="https://cdn-icons-png.freepik.com/256/14034/14034534.png?ga=GA1.1.2056715411.1734277242&semt=ais_hybrid"
                                alt="Address Icon"
                                className="h-8 w-8"
                            />
                            <div>
                                <h4 className="font-medium">CareerLadder</h4>
                                <p className="text-sm">Door No. 207, Avinasi Road, Opp GRG Ladies Hostel, B.R Puram, Coimbatore - 641004</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-center">
                            <img
                                src="https://cdn-icons-png.freepik.com/256/14034/14034534.png?ga=GA1.1.2056715411.1734277242&semt=ais_hybrid"
                                alt="Address Icon"
                                className="h-8 w-8"
                            />
                            <div>
                                <h4 className="font-medium">CareerLadder Sundarapuram</h4>
                                <p className="text-sm">5, Bank of Baroda Upstairs, Madukkarai Main Road, Opp Abirami Hospital, Sundarapuram, Coimbatore - 641024</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-center">
                            <img
                                src="https://cdn-icons-png.freepik.com/256/724/724664.png?uid=R180935438&ga=GA1.1.732733584.1735381439&semt=ais_hybrid"
                                alt="Phone Icon"
                                className="h-8 w-8 mb-2"
                            />
                            <h3 className="text-lg">+91 8807148869 / 8807028071</h3>
                        </div>

                        <div className="flex gap-4 items-center">
                            <img
                                src="https://cdn-icons-png.freepik.com/256/873/873388.png?uid=R180935438&ga=GA1.1.732733584.1735381439&semt=ais_hybrid"
                                alt="Email Icon"
                                className="h-8 w-8 mt-1 mb-2"
                            />
                            <h3 className="text-lg">info@careerladderedu.com</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="bg-white text-black py-1">
                <p className="text-md text-center">© Copyright 2023 CareerLadder Coimbatore. All Rights Reserved.</p>
            </div>
        </div>
    );
};
