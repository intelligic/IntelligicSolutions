                            import React from "react";
// import AccordionSec from "../../common/AccordionSec";
import { useEffect, useRef } from "react";
import AccordionBlock from "../../common/AccordionBlock";
import { ServiceData } from "../../Data/AccordionData";
import { HiSparkles } from "react-icons/hi2";

const ServicesAnalyzer = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // 👈 slow (0.5 – 0.8 best)
    }
  }, []);

  return (
    <section className="topmain">
      <div className="main flex flex-col lg:flex-row justify-between items-center  w-full">
        {/* left Side Bar */}
        <div className=" w-full lg:w-1/2 flex flex-col justify-center items-start gap-8">
          {/* Heading */}
          <div className="w-full flex flex-col justify-center items-center lg:items-start gap-6 ">
            <div className="subheadingbg w-fit flex justify-center items-center gap-3">
              <HiSparkles className="iconHeading" />
              <h1 className="subHeading">Big Data Analyzer</h1>
            </div>
            {/* <h1 className="mainHeading text-black">Big Data Analyzer</h1> */}
            <p className="mainParagraph text-[#7A7A7A]">
              The{" "}
              <span className="text-black font-bold">Big Data Analyzer</span> is
              a robust tool that provides actionable insights by efficiently
              processing and interpreting vast, complex datasets, empowering
              smart business decisions.
            </p>
          </div>
          {/* Video   */}
          <div className="w-full flex flex-col justify-center items-center overflow-hidden">
            <video
              ref={videoRef}
              className="object-cover h-75 w-75"
              autoPlay
              muted
              loop
              playsInline
            >
              <source
                src="https://attilav.s3.eu-west-2.amazonaws.com/Quarter+Digital/layers-240.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>

        {/* Right Side SECTION */}
        <div className=" w-full lg:w-1/2 flex justify-center items-center">
          <AccordionBlock
            data={ServiceData}
            className="w-full xl:max-w-[600px]"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesAnalyzer;
