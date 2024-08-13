import future from "../../asset/partner/future.png"
import ec from "../../asset/partner/ec.png"
import skil from "../../asset/partner/skil.png"
import nsdc from "../../asset/partner/nsdc.png"



function Partner(){
    return(
        <div>
            <div className="font-bold flex justify-center ">

            <h2 className="p-4 text-3xl mb-5 text-black ">Strategic <span className="text-blue-800">Partners</span> </h2>
            </div>
            <div className="lg:flex justify-center grid sm:grid-cols-2 ml-10 mr-10 gap-10">
                <img src={future}></img>
                <img src={ec}></img>
                <img src={skil}></img>
                <img className="" src={nsdc}></img>

            </div>
        </div>
    )
}

export default Partner;