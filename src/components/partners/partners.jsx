import future from "../../asset/partner/future.png";
import ec from "../../asset/partner/ec.png";
import skil from "../../asset/partner/skil.png";
import nsdc from "../../asset/partner/nsdc.png";

function Partner() {
  return (
    <div className="mt-12 mb-24 bg-gradient-to-r from-red-500 to-white py-12 px-6 lg:px-20"> {/* Decreased top margin from mt-24 to mt-12 */}
      <div className="font-bold flex justify-center">
        <h2 className="p-4 text-3xl mb-5 text-black font-bold">
          Strategic <span className="text-blue-800">Partners</span>
        </h2>
      </div>
      
      {/* Grid with center alignment */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 justify-items-center">
        <img src={nsdc} alt="NSDC" className="max-w-[150px] mx-auto" />
        <img src={skil} alt="SKIL" className="max-w-[150px] mx-auto" />
        <img src={skil} alt="SKIL" className="max-w-[150px] mx-auto" />
        <img src={nsdc} alt="NSDC" className="max-w-[150px] mx-auto" />
      </div>
    </div>
  );
}

export default Partner;
