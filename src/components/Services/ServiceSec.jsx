import React from "react";
import { ServicesSections } from "../../Data/ServiceData";
import ServiceSection from "../../common/ServiceSection";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HiSparkles } from "react-icons/hi2";

const ServiceSec = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [location]);
// bg-[#F6EEE3]
  return (
    <section className="topmain">
      <div className="main w-full">
        <div className="  w-full flex flex-col justify-center items-center gap-8">
          {/* SectionHeading Section */}
          <div className="w-full flex flex-col justify-center items-center gap-4">
            <div className="subheadingbg w-fit flex justify-center items-center gap-3">
              <HiSparkles className="iconHeading" />
              <h1 className="subHeading">Our Services</h1>
            </div>
            <h2 className="mainHeading ">Website Design And Development</h2>
          </div>

          {/* Maine Section */}
          {ServicesSections.map((section, index) => (
            <ServiceSection key={index} data={section} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSec;
