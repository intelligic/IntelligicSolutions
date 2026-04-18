import React from "react";
import { ChooseUs } from "../../Data/AboutData";
import { HiSparkles } from "react-icons/hi2";

const AboutChoose = () => {
  return (
    <section className="topmain">
      <div className="main flex flex-col lg:flex-row justify-between items-center w-full">
        <div className="w-full flex flex-col justify-center items-center gap-14">
          {/* Heading Section */}
          <div className="w-full flex flex-col justify-center items-center md:items-start gap-4 ">
            {/* heading */}
            <div className="subheadingbg w-fit flex justify-center items-start lg:items-center  gap-3">
              <HiSparkles className="iconHeading" />
              <h1 className="subHeading">Why Choose Us</h1>
            </div>
            {/* subHeading */}
            <div className="flex justify-between items-start flex-col lg:flex-row gap-4">
              <h2 className="mainHeading w-full lg:w-1/2 text-center lg:text-start  ">
                The Ultimate Source of Software
              </h2>
              <p className="mainParagraph w-full lg:w-1/2 text-black text-center lg:text-start   ">
                Delivering innovative, reliable, and customized software
                solutions that empower businesses, enhance efficiency, and drive
                growth in today’s competitive digital landscape.
              </p>
            </div>
          </div>

          {/* Maine Section */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6">
            {ChooseUs.map((item, index) => {
              const Icon = item.icons;
              return (
                <div
                  key={index}
                  className="normal-shadow hover:scale-1.020 transition-transform duration-3000 ease-linear bg-[#e0f6ff] border border-slate-500 flex flex-col justify-center items-start gap-6 rounded-lg p-[30px]"
                >
                  <Icon className="icon" />
                  <div className="flex flex-col gap-4 justify-center items-start">
                    <h3 className="subHeading">{item.title}</h3>
                    <p className="mainParagraph sm:tracking-tighter text-start ">{item.description}</p>
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

export default AboutChoose;
