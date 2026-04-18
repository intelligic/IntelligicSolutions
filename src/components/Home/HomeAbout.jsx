import React from "react";
import { HiSparkles } from "react-icons/hi2";
// import { HomeSocial } from "../../Data/HomeData";
import HandleMouseLeave from "@/common/Animations/HandleMouseLeave";
const HomeAbout = () => {
  return (
    <section className="topmain">
      <div className="main flex flex-col  lg:flex-row  lg:justify-between items-center w-full">
        {/* Left Side Sction */}
        <div className="w-full lg:w-1/2 flex justify-center items-center ">
          <HandleMouseLeave
            src="https://raw.githubusercontent.com/vikrampal038/Project-Assets/main/Intelligic/Images/HomeAbout.webp"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-2xl p-2 normal-shadow"
            alt="OurSkill Section Image"
          />
        </div>

        {/* Right Side Bar */}
        <div className=" w-full lg:w-1/2 flex flex-col justify-start items-center lg:items-start gap-8 px-4 sm:px-6">
          {/* Heading */}
          <div className="w-full flex flex-col justify-start items-center gap-8">
            {/* heading */}
            <div className="subheadingbg w-fit flex justify-center items-center  gap-3">
              <HiSparkles className="iconHeading" />
              <h1 className="subHeading text-black">About Us</h1>
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



            {/* social icons */}
            {/* <div className=" flex flex-col gap-6">
              <div className="flex justify-center items-center gap-4">
                {HomeSocial.map((item, index) => {
                  const Icon = item.icons;
                  return (
                    <a
                      key={index}
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 transition"
                    >
                      <Icon className="footerIcon" />
                    </a>
                  );
                })}
              </div>
            </div> */}