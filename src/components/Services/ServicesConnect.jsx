import { NavLink } from "react-router-dom";
// import bgMain from '/Assets/All Images/ServiceConnect.png';
// import bgInner from "/Assets/All Images/connectblue.png";

const Section = () => {
  return (
    <section className="topmain">
      <div className="main">
        <div
          className="cart-shadow rounded-4xl flex flex-col justify-center items-center gap-8 sm:gap-10 lg:gap-14 py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-5 w-full max-w-full sm:max-w-[600px] lg:max-w-[1280px]"
          // style={{
          //   backgroundImage: `url(${bgInner})`,
          //   backgroundPosition: "center",
          //   backgroundRepeat: "no-repeat",
          //   backgroundSize: "cover",
          // }}
        >
          <div className="flex flex-col justify-center items-center gap-6 sm:gap-8 w-full max-w-full sm:max-w-[600px] lg:max-w-[1280px]">
            <h1 className="mainHeading text-center text-black text-[22px] sm:text-[28px] lg:text-[36px]">
              Let's Build Something Amazing Together! Connect with Us Today!
            </h1>
            <p className="mainParagraph text-black text-center text-[14px] sm:text-[16px] lg:text-[18px] leading-relaxed xl:font-bold xl:tracking-widest">
              We are passionate about bringing great ideas to life. Let’s
              combine our expertise with your unique vision to build something
              truly amazing together.
            </p>

            {/* <NavLink to="/contact" className="button">
              <span className="absolute inset-0 bg-[#8be0ff1a] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out z-0"></span>
              Get Started
            </NavLink> */}

            <NavLink
              to="/contact"
              className="relative group overflow-hidden button inline-flex items-center justify-center px-3 py-2  lg:px-6 lg:py-3"
            >
              {/* Hover background */}
              <span className="absolute inset-0 bg-[#8be0ff5b] border rounded-lg -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out z-0"></span>

              {/* Button text */}
              <span className="relative z-10">Get Started</span>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;

// style={{
//   backgroundImage: `url(${bgMain})`,
//   backgroundAttachment: "fixed",
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover",
// }}
