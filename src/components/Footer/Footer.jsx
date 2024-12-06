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
        <div className="bg-gradient-to-r from-pink-600 to-blue-950 text-white font-sans">
            {/* Main Footer Section */}
            <div className="lg:flex justify-between px-8 py-8 lg:px-[10%] border-t-2 border-white">
                {/* Left Section */}
                <div className="lg:w-[50%] px-4 mb-8 lg:mb-0">
                    <img className="h-[10vh] bg-white rounded-2xl mb-4" src={live} alt="CareerLadder Logo" />
                    <p className="text-sm lg:text-base font-medium leading-relaxed mb-4">
                        CareerLadder students talk about their enjoyable learning experiences that included practical training, best practices, job prospects, and exposure to reputable businesses and organisations.
                    </p>
                    <button className="text-white bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 rounded-full w-40 h-10 mt-3">
                        Discover Mode
                    </button>

                    {/* Follow Us Section */}
                    <div className="mt-8">
                        <p className="font-semibold text-lg mb-3">Follow Us:</p>
                        <div className="flex gap-6 mt-3">
                            <a href="https://www.instagram.com/livewire_hopes_sundarapuram/">
                                <img className="h-9 w-9" src={instagram} alt="Instagram" />
                            </a>
                            <a href="https://www.facebook.com/people/Livewire-Hopes-Coimbatore/pfbid0rghW3yHGQsWhXeKnMeDnNhzG4ENsQYSNqsYbKKhMfkeSeg1JcdLNharq7Jo3PQVHl/">
                                <img className="h-9 w-9" src={facebook} alt="Facebook" />
                            </a>
                            <a href="https://www.linkedin.com/company/livewire-coimbatore-hope-college-sundarapuram?originalSubdomain=in">
                                <img className="h-9 w-9" src={linkedin} alt="LinkedIn" />
                            </a>
                            <a href="https://www.youtube.com/@LivewireHopeCollege">
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
                        <div className="flex gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                            <div>
                                <h4 className="font-medium">CareerLadder</h4>
                                <p className="text-sm">Door No. 207, Avinasi Road, Opp GRG Ladies Hostel, B.R Puram, Coimbatore - 641004</p>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                            <div>
                                <h4 className="font-medium">CareerLadder Sundarapuram</h4>
                                <p className="text-sm">5, Bank of Baroda Upstairs, Madukkarai Main Road, Opp Abirami Hospital, Sundarapuram, Coimbatore - 641024</p>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                            <h3 className="text-sm">+91 8807148869 / 8807028071</h3>
                        </div>
                        <div className="flex gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <h3 className="text-sm">gayathri.it.tce@gmail.com</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="bg-black text-white py-4">
                <p className="text-sm text-center">© Copyright 2023 CareerLadder Coimbatore. All Rights Reserved.</p>
            </div>
        </div>
    );
};
