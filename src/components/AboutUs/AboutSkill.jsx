import React, { useState } from "react";
import SkillsSection from "../../common/SkillsSection";
import { HiSparkles } from "react-icons/hi2";
import { PiGameControllerFill, PiArrowBendDoubleUpRightBold } from "react-icons/pi";
import GamePopup from "../Game/GamePopup";

const AboutSkill = () => {
  const [isGameOpen, setIsGameOpen] = useState(false);

  return (
    <section className="topmain">
      <div className="main flex flex-col xl:flex-row justify-between items-center w-full gap-12 sm:gap-16">
        {/* left Side Bar */}
        <div className="w-full xl:w-1/2 flex flex-col justify-center items-center gap-8">
          {/* Heading */}
          <div className="w-full flex flex-col justify-center items-center lg:items-start gap-4">
            <div className="w-fit subheadingbg flex justify-center items-start gap-3">
              <HiSparkles className="iconHeading" />
              <h1 className="subHeading">Our Skills</h1>
            </div>
            <h2 className="mainHeading text-center lg:text-start">
              The Software of Your Thoughts
            </h2>
            <p className="mainParagraph text-center lg:text-start">
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

        {/* Right Side Section - Premium Discount Box */}
        <div className="relative group bg-linear-to-br from-[#00AEEF] to-[#0096ce] w-full xl:w-1/3 flex flex-col justify-center items-center p-8 overflow-hidden rounded-[2.5rem] shadow-2xl transition-all duration-500 hover:scale-[1.02]">
          {/* Decorative gaming elements */}
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <PiGameControllerFill className="text-9xl text-white -rotate-12" />
          </div>
          
          <div className="relative z-10 flex flex-col items-center text-center gap-6">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-2">
              <HiSparkles className="text-white text-3xl animate-pulse" />
            </div>
            
            <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter leading-tight">
              Play Smart.<br />Save Instantly.
            </h3>
            
            <p className="text-white/80 text-base md:text-lg font-medium leading-relaxed max-w-xs">
              Turn a quick game into real value. Play now and unlock an exclusive 5% to 10% instant discount.
            </p>

            <div className="flex flex-col items-center gap-4 mt-4 w-full">
               <button 
                 onClick={() => setIsGameOpen(true)}
                 className="w-full bg-white text-[#00AEEF] font-black px-8 py-4 rounded-2xl text-lg shadow-xl hover:bg-gray-50 transition-all active:scale-95 flex items-center justify-center gap-2 group/btn"
               >
                 Start the Game
                 <PiArrowBendDoubleUpRightBold className="text-2xl transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
               </button>
               <span className="text-white/60 text-[10px] font-black uppercase tracking-[0.2em]">
                 Your performance decides your reward
               </span>
            </div>
          </div>
        </div>
      </div>

      <GamePopup 
        isOpen={isGameOpen} 
        onClose={() => setIsGameOpen(false)} 
      />
    </section>
  );
};

export default AboutSkill;

// <img
//   className="cart w-140 h-auto rounded-2xl"
//   src="Assets/All Images/AboutSkill.png"
//   alt="OurSkill Section Image"
// />
