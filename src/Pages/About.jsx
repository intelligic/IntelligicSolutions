import React from "react";
import AboutSec from "../components/AboutUs/AboutSec";
import AboutChoose from "../components/AboutUs/AboutChoose";
import AboutSkill from "../components/AboutUs/AboutSkill";
import AboutValues from "../components/AboutUs/AboutValues";
import AboutCounter from "../components/AboutUs/AboutCounter";
import SEO from "../common/SEO";

const About = () => {
  return (
    <div className="w-full">
      <SEO 
        title="About Us" 
        description="Learn more about Intelligic Solutions, our values, and how we transform business ideas into digital reality." 
        url="/about"
      />
      <section id="hero" className="bg-gradient-brand-50-100-200 py-10 md:py-14 2xl:py-18">
          <AboutSec />
        </section>
        <section className="bg-gradient-brand-200-100-50 py-10 md:py-14 2xl:py-18 ">
          <AboutCounter />
        </section>
        <section>
          <AboutValues />
        </section>
        <section className="bg-gradient-brand-50-100-200 py-10 md:py-14 2xl:py-18">
          <AboutSkill />
        </section>
        <section className="bg-gradient-brand-200-100-50  pb-10 md:pb-14 2xl:pb-18">
          <AboutChoose />
        </section>
    </div>
  );
};

export default About;
