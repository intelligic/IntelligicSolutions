import React from "react";
import SkillsSection from "../../common/SkillsSection";
import { HiSparkles } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

const AboutSkill = () => {
  return (
    // bg-[#F6EEE3]
    <section className="topmain">
      <div className="main flex flex-col xl:flex-row justify-between items-center  w-full">
        {/* left Side Bar */}
        <div className=" w-full xl:w-1/2 flex flex-col justify-center items-center gap-8">
          {/* Heading */}
          <div className="w-full flex flex-col justify-center items-center lg:items-start  gap-4 ">
            <div className="w-fit subheadingbg flex justify-center items-start gap-3">
              <HiSparkles className="iconHeading" />
              <h1 className="subHeading ">Our Skills</h1>
            </div>
            <h2 className="mainHeading text-center lg:text-start  ">
              The Software of Your Thoughts
            </h2>
            <p className="mainParagraph text-center lg:text-start ">
              We transform your ideas into powerful, user-friendly software
              solutions, combining creativity and technology to turn visions
              into impactful digital realities.
            </p>
          </div>
          {/* Progress Bar  */}
          <div className="w-full flex flex-col justify-center items-center">
            <SkillsSection />
          </div>
        </div>

        {/* Right Side sECTION */}
        <div className=" cart-shadow bg-white w-full xl:w-1/3 flex justify-center items-center px-5 py-10 relative overflow-hidden group  rounded-lg  transition-transform duration-700 ease-in-out">
          {/* Square overlay */}
          <span className="absolute inset-0 bg-[#8be0ff42] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out z-0"></span>
          <div className="flex flex-col justify-center items-center gap-5">
            <h3 className="mainHeading">Play Smart. Save Instantly.</h3>
            <p className="mainParagraph">
              Turn a quick game into real value. Play now and unlock an
              exclusive 5% to 10% instant discount on our services. No sign-ups.
              No delays. Just play and earn.
            </p>
            <span className="text">Your performance decides your reward.</span>
            <NavLink
              to="/game"
              className="relative group overflow-hidden button inline-flex items-center justify-center px-3 py-2  lg:px-5 lg:py-2"
            >
              {/* Hover background */}
              <span className="absolute inset-0 bg-[#8be0ff5b] border rounded-lg -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out z-0"></span>

              {/* Button text */}
              <span className="relative z-10">Start the Game</span>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSkill;

// <img
//   className="cart w-140 h-auto rounded-2xl"
//   src="Assets/All Images/AboutSkill.png"
//   alt="OurSkill Section Image"
// />
