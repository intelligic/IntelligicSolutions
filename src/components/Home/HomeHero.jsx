import React from "react";
import { NavLink } from "react-router-dom";
import { GiSplitCross } from "react-icons/gi";
import Threads from "../../common/Animations/Threads";

const HomeHero = () => {
  return (
    <section className="relative overflow-hidden pt-35 pb-15 bg-gradient-brand-200-100-50">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="w-full h-[600px] relative">
          <Threads amplitude={1.5} distance={0.5} enableMouseInteraction />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-10 px-4 ">
        {/* Text Content */}
        <div className=" w-full lg:w-4xl flex flex-col items-center gap-8 text-center">
          <div className="group flex items-center justify-center gap-5 rounded-2xl px-5 py-2 lg:w-150">
            <GiSplitCross className="text-2xl lg:text-3xl transition-transform group-hover:rotate-45 duration-700 ease-in-out" />
            <h1 className="subHeading text-2xl sm:text-3xl font-semibold">
              Welcome to Intelligic Solutions
            </h1>
          </div>

          <h2 className="mainHeading text-black text-3xl sm:text-4xl xl:text-5xl w-full md:w-150 lg:w-220 font-bold">
            Your ideas, our code — websites that work the way you want.
          </h2>

          <p className="mainParagraph text-black leading-8 sm:text-lg text-center tracking-wide w-full md:w-150 lg:w-200">
            Why carry visiting cards when you can have your own website that
            follows modern web standards and helps grow your business globally —
            at reasonable rates.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-8 justify-center items-center">
          <NavLink
            to="/service_enquiry"
            className="relative group overflow-hidden button bg-white border-black border inline-flex items-center justify-center px-3 py-2  lg:px-6 lg:py-3"
          >
            <span className="absolute inset-0 bg-[#8be0ff5b] rounded-lg -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />
            <span className="relative z-10">Get Started</span>
          </NavLink>

          <NavLink
            to="/contact"
            className="relative group overflow-hidden button border inline-flex items-center justify-center px-3 py-2  lg:px-6 lg:py-3"
          >
            <span className="absolute inset-0 bg-[#8be0ff5b] rounded-lg -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />
            <span className="relative z-10">Contact Us</span>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
