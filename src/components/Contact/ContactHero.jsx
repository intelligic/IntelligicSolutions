import React from "react";
import { ContactData } from "../../Data/ContatcData";
import { GiSplitCross } from "react-icons/gi";

const ContactHero = () => {
  return (
    // h-142
    <section
      className="topmain"
    >
      <div className="main w-full">
        <div className="w-full flex flex-col justify-center items-center gap-10">
          {/* for Heading */}
          <div className="w-full flex flex-col justify-center items-center gap-3">
            <div className=" group  flex justify-center items-center gap-3">
              <h1 className="subHeading  font-extrabold tracking-widest">
                Contact Us
              </h1>
              <GiSplitCross className="icon lg:text-[30px] transition-transform duration-300 ease-in-out group-hover:rotate-45" />
            </div>
            <h2 className="mainHeading text-center">
              Get In Touch With Us For More Informaiton
            </h2>
            <p className="mainParagraph text-center ">
              Get in touch with our expert team to discuss your ideas,
              challenges, and how we can create impactful solutions together.
            </p>
          </div>

          {/* for contact details */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-5 lg:gap-14 w-full xl:w-[1000px] 2xl:w-[1200px]">
            {ContactData.map((item, index) => {
              const Icon = item.icons;
              const Content = (
                <div className="normal-shadow relative overflow-hidden group transition-transform duration-700 ease-in-out flex flex-col justify-center items-start border gap-4 bg-white p-[20px] rounded-lg">
                  {/* Square overlay */}
                  <span className=" absolute inset-0  bg-[#8be0ff42] -translate-x-full group-hover:translate-x-0 transition-transform duration-1200 ease-in-out z-0"></span>
                  <Icon className="footerIcon transition-all duration-700 hover:scale-110 hover:text-blue-500" />
                  <div className="flex flex-col justify-center items-start gap-2">
                    <h3 className="text">{item.title}</h3>
                    <h3 className="text">{item.tag}</h3>
                  </div>

                  <div className="flex flex-col justify-center items-start group relative h-[22px] w-[265px] overflow-hidden">
                    <span className="text text-[#00AEEF]">
                      {item.contain}
                    </span>
                  </div>
                </div>
              );
              return item.to ? (
                <a
                  key={index}
                  href={item.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:opacity-80"
                >
                  {Content}
                </a>
              ) : (
                <div key={index}>{Content}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
