import React from "react";
import { HiSparkles } from "react-icons/hi2";
// import { HomeSocial } from "../../Data/HomeData";
import HandleMouseLeave from "@/common/Animations/HandleMouseLeave";
const HomeAbout = () => {
  return (
    <section className="topmain">
      <div className="flex flex-col items-center w-full main lg:flex-row lg:justify-between">
        {/* Left Side Sction */}
        <div className="flex items-center justify-center w-full lg:w-1/2 ">
          <HandleMouseLeave
            src="https://raw.githubusercontent.com/intelligic/Project-Assets/main/Intelligic/Images/HomeAbout.webp"
            className="w-full max-w-sm p-2 sm:max-w-md lg:max-w-lg rounded-2xl normal-shadow"
            alt="OurSkill Section Image"
          />
        </div>
        {/* Right Side Bar */}
        <div className="flex flex-col items-center justify-start w-full gap-8 px-4  lg:w-1/2 lg:items-start sm:px-6">
          {/* Heading */}
          <div className="flex flex-col items-center justify-start w-full gap-8">
            {/* heading */}
            <div className="flex items-center justify-center gap-3 subheadingbg w-fit">
              <HiSparkles className="iconHeading" />
              <h1 className="text-black subHeading">About Us</h1>
            </div>
            {/* details */}
            <div className="flex flex-col gap-4">
              <p className="mainParagraph">
                At Intelligic Solution, we believe technology should make life
                easier and business smarter. Our team of skilled developers,
                designers, and strategists works closely with clients to craft
                innovative IT solutions tailored to their unique goals.
              </p>
              <p className="mainParagraph">
                We specialize in scalable web applications, custom software, and
                enterprise systems built for performance, security, and growth.
                Every project is guided by our commitment to quality,
                transparency, and lasting value. From idea to implementation, we
                transform visions into powerful, future-ready solutions that
                help businesses thrive in an ever-evolving digital world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;