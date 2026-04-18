import React from "react";
import AccordionBlock from "../../common/AccordionBlock";
import { ContactData, FeaturesData } from "../../Data/AccordionData";
import { FaQuora } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";

const ContactFaq = () => {
  return (
    // bg-[#FEFEFF]
    // bg-[#E4E1E3]
    <section className="topmain">
      <div className="main w-full">
        <div className="w-full flex flex-col justify-center items-center gap-8">
          {/* SectionHeading Section */}
          <div className="w-full flex flex-col justify-center items-center gap-5">
            <div className="subheadingbg w-fit flex justify-center items-center gap-3">
              <HiSparkles className="iconHeading" />
              <h1 className="subHeading">FAQS</h1>
            </div>
            <h2 className="mainHeading text-black">Frequently Asked Questions</h2>
          </div>

          {/* Faq Section  */}
          <div className="w-full flex flex-col xl:flex-row justify-center items-center gap-10 xl:gap-14">
            {/* About Company */}
            <div className="w-full flex flex-col justify-center items-center gap-6">
              <div className="flex  justify-center items-center gap-4">
                <FaQuora className="icon transition-all duration-700 hover:scale-110 hover:text-blue-500" />
                <h3 className="subHeading">About Company</h3>
              </div>
              <AccordionBlock
                className="w-full xl:max-w-[700px]"
                data={ContactData}
              />
            </div>

            {/* About Features */}
            <div className="w-full flex flex-col justify-center items-center gap-6">
              <div className="flex  justify-center items-center gap-4">
                <FaQuora className="icon transition-all duration-700 hover:scale-110 hover:text-blue-500" />
                <h3 className="subHeading">About Features</h3>
              </div>
              <AccordionBlock
                className="w-full xl:max-w-[700px]"
                data={FeaturesData}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFaq;
