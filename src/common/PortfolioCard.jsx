import React from "react";
import { PiMouseScrollThin } from "react-icons/pi";

const PortfolioCard = ({ image, title }) => {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group flex flex-col justify-center items-center bg-white border border-slate-100">
      {/* Image Container */}
      <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden cursor-pointer">
        {/* Scroll Image */}
        <img
          src={image}
          alt={title}
          className="w-full transition-transform duration-[4000ms] ease-in-out lg:group-hover:-translate-y-[65%] group-active:-translate-y-[65%]"
          loading="lazy"
        />

        {/* CENTER BOUNCING ICON */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
          <div className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-xl animate-bounce">
            <PiMouseScrollThin className="text-3xl text-[#00AEEF]" />
          </div>
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Title Section */}
      <div className="absolute bottom-0 left-0 w-full px-4 py-3 flex flex-col justify-center items-center bg-white/90 backdrop-blur-md translate-y-full group-hover:translate-y-0 transition-transform duration-900 ease-out border-t border-slate-200">
        <h3 className="text-xl font-bold text-slate-800">{title}</h3>
        {/* <p className="text-[#00AEEF] text-sm font-medium mt-1">Click to View Project</p> */}
      </div>
    </div>
  );
};

export default PortfolioCard;
