import React from "react";
import ContacForm from "../components/Contact/ContactForm";
import ContactFaq from "../components/Contact/ContactFaq";
import ContactHero from "../components/Contact/ContactHero";
import ContactSocial from "../components/Contact/ContactSocial";
import SEO from "../common/SEO";

const Contact = () => {
  return (
    <div>
      <SEO 
        title="Contact Us" 
        description="Get in touch with Intelligic Solutions for your next big tech project. We're here to help you build something amazing." 
        url="/contact"
      />
      <section id="hero" className="bg-gradient-brand-50-100-200  py-10 md:py-14 2xl:py-18 ">
        <ContactHero />
      </section>

      {/* Form */}
      <section className="bg-gradient-brand-200-100-50">
        <ContacForm />
      </section>

      {/* Social */}
      <section className="bg-gradient-brand-50-100-200  py-10 md:py-14 2xl:py-18 ">
        <ContactSocial />
      </section>

      {/* FAQ */}
      <section className="bg-gradient-brand-200-100-50  pb-10 md:pb-14 2xl:pb-18 ">
        <ContactFaq />
      </section>
    </div>
  );
};

export default Contact;