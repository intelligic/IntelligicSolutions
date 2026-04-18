import React from "react";
import HomeHeading from "../../common/HomeHeading";
  import { HomeChooseUs } from "../../Data/HomeData";

const HomeChoosUs = () => {
  return (
    <section className="topmain w-full">
      <div className="main w-full">
        <div className=" w-full flex flex-col justify-center items-center gap-14">
          {/* Heading Section */}
          <HomeHeading
            mainHeading="Why Choose Us"
            subHeading="Amazing Software, Built For You"
          />

          {/* Maine Section */}
          <div
            className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
            {HomeChooseUs.map((item, index) => (
              <div
                key={index}
                className=" flex bg-[#f7f7f7] flex-col justify-center items-center gap-6  rounded-lg border border-slate-500">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full sm:w-120 h-60 object-center rounded-xl rounded-b-none"/>

                <div className="flex flex-col gap-4 justify-center items-center py-2 px-3">
                  <h3 className="subHeading">{item.title}</h3>
                  <p className="mainParagraph">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeChoosUs;
