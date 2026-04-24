import React from "react";
import { ChooseUs } from "../../Data/AboutData";
import { HiSparkles } from "react-icons/hi2";

const AboutChoose = () => {
  return (
    <section className="topmain">
      <div className="flex flex-col items-center justify-between w-full main lg:flex-row">
        <div className="flex flex-col items-center justify-center w-full gap-14">
          {/* Heading Section */}
          <div className="flex flex-col items-center justify-center w-full gap-4 md:items-start ">
            {/* heading */}
            <div className="flex items-start justify-center gap-3 subheadingbg w-fit lg:items-center">
              <HiSparkles className="iconHeading" />
              <h1 className="subHeading">Why Choose Us</h1>
            </div>
            {/* subHeading */}
            <div className="flex flex-col items-start justify-between gap-4 lg:flex-row">
              <h2 className="w-full text-center mainHeading lg:w-1/2 lg:text-start ">
                The Ultimate Source of Software
              </h2>
              <p className="w-full text-center text-black mainParagraph lg:w-1/2 lg:text-start ">
                Delivering innovative, reliable, and customized software
                solutions that empower businesses, enhance efficiency, and drive
                growth in today’s competitive digital landscape.
              </p>
            </div>
          </div>

          {/* Maine Section */}
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {ChooseUs.map((item, index) => {
              const Icon = item.icons;
              return (
                <div
                  key={index}
                  className="normal-shadow hover:scale-1.020 transition-transform duration-3000 ease-linear bg-[#e0f6ff] border border-slate-500 flex flex-col justify-center items-start gap-6 rounded-lg p-[30px]"
                >
                  <Icon className="icon" />
                  <div className="flex flex-col items-start justify-center gap-4">
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
