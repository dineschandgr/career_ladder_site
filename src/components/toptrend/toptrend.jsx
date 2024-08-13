// import mern from "../../asset/toptrend/mern.png"
import master from "../../asset/toptrend/master.png"
import java from "../../asset/toptrend/java.png"
import python from "../../asset/toptrend/python.png"
import data from "../../asset/toptrend/dataa.png"


function Top(){

    const top = [
        {
            img:master,
            title:"Master Certificate in Data Science",
            content:"In-Centre| Online | Hybrid "
            
        },
        {
            img:java,
            title:"Master Program in Full Stack Development Using Java",
            content:"In-Centre| Online | Hybrid "
            
        },
        {
            img:data,
            title:"Master Program in Data Analytics",
            content:"In-Centre| Online | Hybrid "
            
        },
        {
            img:python,
            title:"Master Program Full Stack Development Using Python",
            content:"In-Centre| Online | Hybrid "
            
        }
    ]
    return(
        <div>
            <div className="flex justify-center lg:mb-5 text-black ">
                <h1>Top Trending <span className="text-blue-800"> Courses</span> </h1>
            </div>

            <div className="lg:flex lg:mx-28 p-3       lg:gap-4 rounded-s-2xl lg:h-72  ">
                {top.map((top, index)=>(
                    <div>
                        <div  className="shadow  shadow-neutral-800 w-[90%] h-64" key={index}>

                            <img  className="h-36 w-80 rounded-t-2xl" src={top.img} />
                            <h6 className="ml-1">{top.title} </h6>
                            <p className="ml-1">{ top.content}</p>
                        </div>
                            
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Top;