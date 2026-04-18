import React from "react";
import { ContactSocialData } from "../../Data/ContatcData";
import { HiSparkles } from "react-icons/hi2";

const ContactSocial = () => {
  return (
    // bg-[#F6EEE3]
    <section className="topmain">
      <div className="main w-full">
        <div className="w-full flex flex-col justify-center items-center gap-10">
          {/* for Heading */}
          <div className="w-full flex flex-col justify-center items-center gap-3">
            <div className="subheadingbg w-fit flex justify-center items-center gap-3">
              <HiSparkles className="iconHeading" />
              <h1 className="subHeading font-extrabold tracking-widest">
                Community Engagement
              </h1>
            </div>
            <h2 className="mainHeading text-center">
              Join the Community
            </h2>
            <p className="mainParagraph text-center">
              Become a Part of our thriving community, where you can connect
              with like-minded Individuals, collaborate on projects, and grow
              together.
            </p>
          </div>

          {/* for Social Account  details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 justify-center items-center gap-10 xl:gap-14  3xl:w-400">
            {ContactSocialData.map((item, index) => {
              const Icon = item.icons;
              const Content = (
                <div className=" cart2 cart border relative overflow-hidden group transition-transform duration-700 ease-in-out flex flex-col justify-center items-center gap-5 bg-white p-[30px] rounded-lg ">
                  {/* Square overlay */}

                  <Icon className="icon transition-all duration-700 hover:scale-110 hover:text-blue-500" />
                  <div className="flex flex-col justify-center items-center gap-2">
                    <h3 className="subHeading">{item.title}</h3>
                    <h3 className="mainParagraph text-center">{item.tag}</h3>
                  </div>
                  <div className="flex flex-col group relative h-[22px] w-150 overflow-hidden items-center justify-center">
                    <span className="text text-center text-[#00AEEF] hover:text-[#085d7c] transition-all duration-700 ease-in-out">
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

export default ContactSocial;
