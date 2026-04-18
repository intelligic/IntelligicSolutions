import React from "react";
import HomeHero from "../components/Home/HomeHero.jsx";
import HomeAbout from "../components/Home/HomeAbout.jsx";
import HomeChoosUs from "../components/Home/HomeChoosUs.jsx";
import HomeServices from "../components/Home/HomeServices.jsx";
import HomePortfolio from "../components/Home/HomePortfolio.jsx";
import HomeTestimonial from "../components/Home/HomeTestimonial.jsx";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section id="hero">
        <HomeHero />
      </section>

      <div>
        <section className="bg-gradient-brand-50-100-200  py-10 md:py-14 2xl:py-10">
          <HomeAbout />
        </section>
        <section className="bg-gradient-brand-200-100-50">
          <HomeChoosUs />
        </section>
        <section className="bg-gradient-brand-50-100-200  py-10 md:py-14 2xl:py-24">
          <HomePortfolio />
        </section>
        <section className="bg-gradient-brand-200-100-50">
          <HomeServices />
        </section>
        <section className="bg-gradient-brand-50-100-200  py-10 md:py-14 2xl:py-24">
          <HomeTestimonial />
        </section>
      </div>
    </div>
  );
};

export default Home;
