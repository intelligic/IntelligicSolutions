import React from "react";
import ServiceSec from "../components/Services/ServiceSec";
import ServicesAnalyzer from "../components/Services/ServicesAnalyzer";
import ServicesConnect from "../components/Services/ServicesConnect";
import ServiceValue from "../components/Services/ServicesValue";
import DotGrid from "../common/Animations/throttle";
// import DotGrid from './DotGrid';

function Services() {
  return (
    <div className="relative overflow-hidden">
      <section id="hero" className="bg-gradient-brand-50-100-200 py-10 md:py-14 2xl:py-18">
        <ServiceSec />
      </section>

      <div className="relative overflow-hidden">
        {/* Background for all three sections */}
        <div className="fixed inset-0 -z-10">
          <DotGrid
            dotSize={5}
            gap={15}
            baseColor="#D3D3D3"
            activeColor="#00AEEF"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>

        {/* Sections wrapper */}
        <div className="relative z-10">
          <section className="py-10 md:py-14 2xl:py-18">
            <ServiceValue />
          </section>

          <section className="bg-white py-10 md:py-14 2xl:py-18">
            <ServicesAnalyzer />
          </section>

          <section className="py-10 md:py-14 2xl:py-18">
            <ServicesConnect />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Services;

//  import Prism from "@/common/Prism";
//  import GlobalHero from "../common/GlobalHero";
//  import { HeroData } from "../Data/HeroData";

//  const heroItem = HeroData.find((item) => item.page === "services");

// {
//    Hero Section
// }
// {
//    <GlobalHero item={heroItem} />
// }
// {
//    Page Contain
// }
// {
//    <Prism />
// }

{
  /* <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)),
        url(${servicebg})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <section className=" py-10 md:py-14 2xl:py-18">
          <ServiceValue />
        </section>

        <section className="bg-white  py-10 md:py-14 2xl:py-18">
          <ServicesAnalyzer />
        </section>
        <section className=" py-10 md:py-14 2xl:py-18">
          <ServicesConnect />
        </section>
      </div> */
}
