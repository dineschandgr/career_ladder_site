import skil from "../../asset/partner/skil.png";
import nsdc from "../../asset/partner/nsdc.png";

function Partner() {
  return (
    <div className="mt-12 mb-4 py-10 px-0 relative shadow-md"> {/* Decreased bottom margin from mb-12 to mb-6 */}
      {/* Background Rectangle - Set to Blue */}
      <div className="absolute inset-0 bg-blue-100 z-0 rounded-lg"></div> {/* Blue background rectangle behind everything */}

      {/* Content Section */}
      <div className="relative z-10"> {/* Set z-index to ensure it's on top of the background */}
        <div className="font-bold flex justify-center">
          <h2 className="p-1 text-3xl mb-1 text-black font-bold">
            Strategic <span className="text-blue-800">Partners</span>
          </h2>
        </div>
        
        {/* Horizontal Layout with Spacing */}
        <div className="flex justify-center gap-12">
          {/* NSDC Image and Rectangles */}
          <div className="relative">
            {/* Back Rectangle (Light Blue) */}
            <div className="absolute inset-0 bg-light-blue-300 z-10 rounded-lg"></div>
           

            <img src={nsdc} alt="NSDC" className="max-w-[80%] md:max-w-[400px] mx-auto z-30 relative" /> 
          </div>

          {/* SKIL Image and Rectangles */}
          <div className="relative">
            {/* Back Rectangle (Light Blue) */}
            <div className="absolute inset-0 bg-light-blue-300 z-10 rounded-lg"></div>
           

            <img src={skil} alt="SKIL" className="max-w-[80%] md:max-w-[400px] mx-auto z-30 relative" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partner;
