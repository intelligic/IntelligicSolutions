import React from "react";
import HomeHeading from "../../common/HomeHeading";
import PortfolioCard from "../../common/PortfolioCard";

// GitHub raw image URLs (DutyFlex style)
const site1 =
  "https://raw.githubusercontent.com/vikrampal038/Project-Assets/main/Intelligic/Images/amengineers.png";

const site3 =
  "https://raw.githubusercontent.com/vikrampal038/Project-Assets/main/Intelligic/Images/orienteeringfederationofindia.png";

const site4 =
  "https://raw.githubusercontent.com/vikrampal038/Project-Assets/main/Intelligic/Images/riseonelevators.png";

const site6 =
  "https://raw.githubusercontent.com/vikrampal038/Project-Assets/main/Intelligic/Images/technokraftsol.png";

const HomePortfolio = () => {
  return (
    <section className="topmain">
      <div className="main w-full">
        <div className="w-full flex flex-col justify-center items-center gap-14">
          {/* Heading Section */}
          <HomeHeading
            mainHeading="Our Portfolio"
            subHeading="These are our portfolio and still adding"
          />

          {/* Portfolio Cards */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 justify-center items-center">
            <PortfolioCard title="AM Engineers" image={site1} />
            <PortfolioCard title="Orienteering Federation Of India"image={site3}/>
            <PortfolioCard title="Riseon Elevators" image={site4} />
            <PortfolioCard title="Technokraft Solution" image={site6} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePortfolio;

