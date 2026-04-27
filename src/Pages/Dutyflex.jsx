import React from "react";
import Overview from "../components/Dutyflex/Overview";
import Approach from "../components/Dutyflex/Approach";
import Choosedutyflex from "../components/Dutyflex/Choosedutyflex";
import SEO from "../common/SEO";

const Dutyflex = () => {
  return (
    <div className="w-full">
      <SEO
        title="DutyFlex by Intelligic Solutions – Security Workforce Management Platform"
        description="DutyFlex by Intelligic Solutions is a cloud-based security guard management platform that streamlines scheduling, attendance tracking, payroll, and reporting. Manage your security workforce efficiently with real-time monitoring and automated operations."
        url="/dutyflex"
      />
      <section
        id="hero"
        className="bg-gradient-brand-50-100-200 py-10 md:py-14 2xl:py-18"
      >
        <Overview />
      </section>
      <section className="bg-gradient-brand-200-100-50 py-10 md:py-14 2xl:py-18 ">
        <Approach />
      </section>
      <section>
        <Choosedutyflex />
      </section>
    </div>
  );
};

export default Dutyflex;
