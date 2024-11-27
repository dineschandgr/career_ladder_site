// import mern from "../../asset/toptrend/mern.png"
import master from "../../asset/toptrend/master.png"
import java from "../../asset/toptrend/java.png"
import python from "../../asset/toptrend/python.png"
import data from "../../asset/toptrend/dataa.png"
import { Link } from "react-router-dom";

// import java1 from "../Coures/Java/Java"


function Top() {

    const top = [
        {
            img: master,
            title: "Master Certificate in Data Science",
            content: "In-Centre| Online | Hybrid "


        },
        {
            img: java,
            title: "Master Program in Full Stack Development Using Java",
            content: "In-Centre| Online | Hybrid ",
            path: "/java"

        },
        {
            img: data,
            title: "Master Program in Data Analytics",
            content: "In-Centre| Online | Hybrid "

        },
        {
            img: python,
            title: "Master Program Full Stack Development Using Python",
            content: "In-Centre| Online | Hybrid "

        }
    ]
    return (
        <div>
            <div className="flex justify-center lg:mb-5 text-black ">
                <h1>Top Trending <span className="text-blue-800"> Courses</span> </h1>
            </div>

            <div className="lg:flex lg:mx-20 p-3      lg:gap-4 rounded-s-2xl lg:h-72  ">
                {top.map((top, index) => (
                    <div className="shadow  shadow-neutral-800 w-[90%] h-72 flex flex-col justify-between" key={index}>
                        <div>
                            <img className="h-36 w-[100%] rounded-t-2xl" src={top.img} />
                            <h6 className="ml-1">{top.title} </h6>
                            <p className="ml-1">{top.content}</p>
                        </div>
                        <Link to={top.path}>

                            <button className="flex p-2 bg-blue-500 justify-center w-36 text-white rounded-lg mb-3 ml-3 ">know more <span className="pt-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                            </span></button>
                        </Link>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Top;