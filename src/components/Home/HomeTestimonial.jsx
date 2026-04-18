import React from "react";
import HomeHeading from "../../common/HomeHeading";
import Testiminoal from "@/common/Testiminoal";


const HomeTestimonial = () => {
  return (
    <section className="topmain">
      <div className="main w-full">
        <div className=" w-full flex flex-col justify-center items-center gap-14">
          {/* Heading Section */}
          <HomeHeading
            mainHeading="Testimonial"
            subHeading="Positive Review From Our Users"
          />
          {/* Maine Section */}
            <Testiminoal />
        </div>
      </div>
    </section>
  )
}

export default HomeTestimonial


