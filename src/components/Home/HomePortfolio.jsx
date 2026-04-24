import React from "react";
import HomeHeading from "../../common/HomeHeading";
import PortfolioCard from "../../common/PortfolioCard";

// GitHub raw image URLs (DutyFlex style)
const site1 =
  "https://raw.githubusercontent.com/intelligic/Project-Assets/main/Intelligic/Images/amengineers.png";

const site3 =
  "https://raw.githubusercontent.com/intelligic/Project-Assets/main/Intelligic/Images/orienteeringfederationofindia.png";

const site4 =
  "https://raw.githubusercontent.com/intelligic/Project-Assets/main/Intelligic/Images/riseonelevators.png";

const site6 =
  "https://raw.githubusercontent.com/intelligic/Project-Assets/main/Intelligic/Images/technokraftsol.png";

const HomePortfolio = () => {
  return (
    <section className="topmain">
      <div className="w-full main">
        <div className="flex flex-col items-center justify-center w-full gap-14">
          {/* Heading Section */}
          <HomeHeading
            mainHeading="Our Portfolio"
            subHeading="These are our portfolio and still adding"
          />
          {/* Portfolio Cards */}
          <div className="flex flex-wrap items-center justify-center w-full gap-6 lg:gap-8">
            <div className="w-full md:w-[calc(50%-16px)] lg:w-[calc(30%-20px)] max-w-[350px]">
              <PortfolioCard title="AM Engineers" image={site1} />
            </div>
            <div className="w-full md:w-[calc(50%-16px)] lg:w-[calc(30%-20px)] max-w-[350px]">
              <PortfolioCard title="Orienteering Federation Of India" image={site3} />
            </div>
            <div className="w-full md:w-[calc(50%-16px)] lg:w-[calc(30%-20px)] max-w-[350px]">
              <PortfolioCard title="Riseon Elevators" image={site4} />
            </div>
            <div className="w-full md:w-[calc(50%-16px)] lg:w-[calc(30%-20px)] max-w-[350px]">
              <PortfolioCard title="Technokraft Solution" image={site6} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePortfolio;
