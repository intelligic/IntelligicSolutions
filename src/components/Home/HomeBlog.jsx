import React from "react";
import HomeHeading from "../../common/HomeHeading";
const HomeBlog = () => {
  return (
    <section className="topmain border">
      <div className="main w-full">
        <div className=" w-full flex flex-col justify-center items-center gap-14">
          {/* Heading Section */}
          <HomeHeading
            mainHeading="Blog & News"
            subHeading="Blog Articles From Velixe"
          />
          {/* Maine Section */}
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;
