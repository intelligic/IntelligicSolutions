import React from "react";
import { HiSparkles } from "react-icons/hi2";

const HomeHeading = ({ mainHeading, subHeading }) => {
  return (
    <div className="w-full flex flex-col gap-4 justify-center items-center text-center">

      {/* Small Heading / Badge */}
      <div className="w-fit subheadingbg flex justify-center items-center gap-3">
        <HiSparkles className="iconHeading" />
        <h1 className="subHeading">
          {mainHeading}
        </h1>
      </div>

      {/* Main Heading */}
      <div className="flex justify-center items-center">
        <h2 className="mainHeading">
          {subHeading}
        </h2>
      </div>

    </div>
  );
};

export default HomeHeading;