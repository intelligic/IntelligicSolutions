import React from "react";
import ServicePopup from "../common/ServicePopup";
import { ServiceDetails } from "../Data/ServiceDetails";

const ServiceSection = ({ data }) => {
  return (
    <div
      id={data.id}
      className="w-full flex flex-col justify-center items-center gap-6 scroll-mt-10"
    >
      {/* Section Heading */}
      <div className="w-full flex flex-col justify-center items-start gap-3">
        <h3 className="subHeading text-start">{data.sectionTitle}</h3>
        <p className="mainParagraph text-start">{data.sectionPara}</p>
      </div>

      {/* Service Cards */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {data.cards.map((card, index) => {
          const Icon = card.icons;

          // match card with details by id
          const serviceDetail = ServiceDetails.find(
            (item) => item.id === card.id
          );

          return (
            <div
              key={index}
              className="cart flex bg-[#b9ecff] flex-col justify-center items-start gap-3 md:gap-4 2xl:gap-6 rounded-lg p-[10px] md:p-[20px] 2xl:p-[30px]"
            >
              <Icon className="icon" />

              <div className="flex flex-col justify-center items-start gap-3">
                <h3 className="subHeading text-start">{card.title}</h3>
                <p className="mainParagraph text-start">
                  {card.description}
                </p>

                {serviceDetail && (
                  <ServicePopup service={serviceDetail} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceSection;




// import { NavLink } from "react-router-dom";
// import { PiArrowBendDoubleUpRightBold } from "react-icons/pi";

{
  /* <NavLink
      to="/contact"
      className="group bg-transparent text-[#54B4CD] text-[30px] border-2 rounded-lg border-black px-3 py-2 font-bold inline-flex items-center justify-center">
      <PiArrowBendDoubleUpRightBold className="transition-transform duration-300 ease-in-out group-hover:rotate-45" />
    </NavLink> */
}
