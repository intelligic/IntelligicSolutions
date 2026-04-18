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
      <div className="main flex flex-col xl:flex-row justify-between items-center  w-full">
        {/* Left Side Sction */}
        <div className=" w-full xl:w-1/2 flex justify-center items-center">
          <img
            className="cart w-140 h-auto rounded-2xl"
            src="https://raw.githubusercontent.com/vikrampal038/Project-Assets/main/Intelligic/Images/AboutSec2.png"
            alt="OurSkill Section Image"
          />
        </div>

        {/* Right Side Bar */}
        <div className=" w-full xl:w-1/2 flex flex-col justify-center items-start gap-12">
          {/* Heading */}
          <div className="w-full flex flex-col justify-center items-center gap-5 ">
            {/* this Div is for heading  */}
            <div className="w-full flex flex-col justify-center items-center gap-3">
              <div className="subheadingbg w-fit flex justify-center items-center gap-3">
                <HiSparkles className="iconHeading" />
                <h1 className="subHeading">About Us</h1>
              </div>
              <h2 className="mainHeading text-center">
                Building Softwares, Building Trust
              </h2>
            </div>
            {/* this is for paragraph */}
            <div className="flex flex-col gap-4">
              <p className="mainParagraph text-center">
                Our goal is not just to create cutting-edge software, but to
                forge a relationship built on a foundation of trust and mutual
                understanding. We view your goals as our own.
              </p>
              <p className="mainParagraph text-center">
                On the strength of technology and the foundation of trust, we
                help take your business to new heights.
              </p>
            </div>
          </div>

          {/* LIst  */}
          <div className="w-full flex flex-col justify-center items-center gap-8 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {AboutSecData.map((item, index) => (
                <div
                  key={index}
                  to={item.path}
                  className="flex items-center gap-4 transition w-full"
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
