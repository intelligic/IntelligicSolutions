import React from "react";
import HomeHeading from "../../common/HomeHeading";
import { HomeServicesData } from "../../Data/HomeData";

const HomeServices = () => {
  return (
    <section className="topmain">
      <div className="main w-full">
        <div className=" w-full flex flex-col justify-center items-center gap-14">
          {/* Heading Section */}
          <HomeHeading  
            mainHeading="Our Services"
            subHeading="From Concept to Reality: Building Tomorrow's Solutions Today"
          />

          {/* Maine Section */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-6 ">
            {HomeServicesData.map((item, index) => {
              const Icon = item.icons;
              return (
                // bg-[#FAF7EF]
                <div
                  key={index}
                  className="relative overflow-hidden group cart-shadow flex bg-[#f7f7f7]  flex-col justify-center items-center gap-6 border border-black rounded-lg p-[30px] transition-transform duration-700 ease-in-out">
                  {/* Square overlay */}
                  <span className="absolute inset-0 bg-[#8be0ff42] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out z-0"></span>
                  <Icon className="icon z-10" />
                  <div className="flex flex-col gap-4 justify-center items-center relative z-10">
                    <h3 className="subHeading">{item.title}</h3>
                    <p className="mainParagraph">{item.description}</p>
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
export default HomeServices;
