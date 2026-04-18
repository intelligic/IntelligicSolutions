import React from "react";
import { PiMouseScrollThin } from "react-icons/pi";

const PortfolioCard = ({ image, title }) => {
  return (
    <div className=" relative w-full 3xl:w-[600px] rounded-xl overflow-hidden shadow-lg flex flex-col justify-center items-center">
      {/* Image Container */}
      <div className="relative h-[450px] overflow-hidden group cursor-pointer">
        {/* Scroll Image */}
        <img
          src={image}
          alt={title}
          className="w-full transition-transform duration-3000 ease-linear lg:group-hover:-translate-y-[65%] group-active:-translate-y-[65%] group-focus-within:-translate-y-[65%]"
        />

        {/* CENTER BOUNCING ICON */}
        <div
          className="
          absolute
          top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          z-10
        "
        >
          <div
            className="
            bg-transparent
            flex items-center justify-center
            shadow-lg
            animate-bounce
          "
          >
            <PiMouseScrollThin className="text-5xl font-bold text-black" />
          </div>
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" />
      </div>

      {/* Title */}
      <div className="  absolute bottom-8 lg:bottom-10 left-0 w-contain-fit p-2 flex justify-center items-center bg-[#8be0ff] rounded-tr-xl backdrop-blur border-t  translate-y-full group-hover:translate-y-0 transition-transform duration-500">
        <h3 className="subHeading">{title}</h3>
      </div>
    </div>
  );
};

export default PortfolioCard;
