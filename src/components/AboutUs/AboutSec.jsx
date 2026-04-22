import React from "react";
import { AboutSecData } from "../../Data/AboutData";
import { BiSolidCheckShield } from "react-icons/bi";
import { HiSparkles } from "react-icons/hi2";
// import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
// import HandleMouseLeave from "@/common/HandleMouseLeave";

const AboutSec = () => {
  return (
    // bg-[#F6EEE3]
    <section className="topmain">
      <div className="flex flex-col items-center justify-between w-full main xl:flex-row">
        {/* Left Side Sction */}
        <div className="flex items-center justify-center w-full  xl:w-1/2">
          <img
            className="h-auto cart w-140 rounded-2xl"
            src="https://raw.githubusercontent.com/intelligic/Project-Assets/main/Intelligic/Images/AboutSec2.png"
            alt="OurSkill Section Image"
          />
        </div>

        {/* Right Side Bar */}
        <div className="flex flex-col items-start justify-center w-full gap-12  xl:w-1/2">
          {/* Heading */}
          <div className="flex flex-col items-center justify-center w-full gap-5 ">
            {/* this Div is for heading  */}
            <div className="flex flex-col items-center justify-center w-full gap-3">
              <div className="flex items-center justify-center gap-3 subheadingbg w-fit">
                <HiSparkles className="iconHeading" />
                <h1 className="subHeading">About Us</h1>
              </div>
              <h2 className="text-center mainHeading">
                Building Softwares, Building Trust
              </h2>
            </div>
            {/* this is for paragraph */}
            <div className="flex flex-col gap-4">
              <p className="text-center mainParagraph">
                Our goal is not just to create cutting-edge software, but to
                forge a relationship built on a foundation of trust and mutual
                understanding. We view your goals as our own.
              </p>
              <p className="text-center mainParagraph">
                On the strength of technology and the foundation of trust, we
                help take your business to new heights.
              </p>
            </div>
          </div>

          {/* LIst  */}
          <div className="flex flex-col items-center justify-center w-full gap-8 ">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {AboutSecData.map((item, index) => (
                <div
                  key={index}
                  to={item.path}
                  className="flex items-center w-full gap-4 transition"
                >
                  <BiSolidCheckShield className="icon text-[20px]" />
                  <div className="flex flex-col group relative h-[22px] w-[250px] overflow-hidden">
                    <span className="listText animationtext">{item.title}</span>
                    <span className="listText animationtexthover">
                      {item.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSec;
