import React from "react";
import { Values } from "../../Data/AboutData";
import { HiSparkles } from "react-icons/hi2";

const AboutValues = () => {
  return (
    <section className="topmain py-10 md:py-14 2xl:py-18 bg-[#0A1A2F] ">
      <div className="main w-full">
        <div className=" w-full flex flex-col justify-center items-center gap-14">
          {/* Heading Section */}
          <div className="w-full flex flex-col justify-center items-center lg:items-start gap-4 ">
            {/* heading */}
            <div  className="w-fit subheadingbg flex justify-center items-center gap-3">
              <HiSparkles className="iconHeading" />
              <h1 className="subHeading ">Our Values</h1>
            </div>
            {/* subHeading */}
            <h2  className="mainHeading w-full text-center lg:text-start  text-[#CCCCCC] ">
              Advanced Software Made Simple
            </h2>
          </div>

          {/* Maine Section */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-6 ">
            {Values.map((item, index) => {
              const Icon = item.icons;
              return (
                // bg-[#FAF7EF]
                <div
                  key={index}
                  className="relative overflow-hidden group cart-shadow flex bg-[#f7f7f7]  flex-col justify-center items-start gap-6 border border-black rounded-lg p-[30px] transition-transform duration-700 ease-in-out"
                >
                  {/* Square overlay */}
                  <span className="absolute inset-0 bg-[#8be0ff42] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out z-0"></span>

                  <Icon className="icon z-10" />
                  <div className="flex flex-col gap-4 justify-center items-start relative z-10">
                    <h3 className="subHeading">{item.title}</h3>
                    <p className="mainParagraph text-start">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
