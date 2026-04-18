import { useState } from "react";
import { validateForm } from "../utils/formValidation";
import { submitWithToast } from "../hooks/useFormSubmit";
import EmailInputField from "../components/Form/EmailInputField";

import { NavLink } from "react-router-dom";
import { SeoData, Service, Social, Contact, Legal } from "../Data/FooterData";
import { FaAngleDoubleRight } from "react-icons/fa";

const Footer = () => {
  const [data, setData] = useState({ email: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const rules = {
    email: "email",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("email", data.email);
      formData.append("_subject", "Newsletter Subscription");

      const res = await fetch("https://formspree.io/f/mkovnrvw", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      console.log("Formspree response:", result);

      if (result.ok) {
        setData({ email: "" });
      }
    } catch (err) {
      console.error("Form error", err);
    } finally {
      setLoading(false);
    }
  };

  const columns = 4;
  const itemsPerColumn = Math.ceil(SeoData.length / columns);
  const seoColumns = Array.from({ length: columns }, (_, i) =>
    SeoData.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn),
  );

  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center w-full bg-gradient-brand-400-300-400">
        <div className="px-5 sm:px-10 md:px-25 lg:px-30 w-full py-16 flex flex-col items-center gap-10">
          {/* Logo */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
            <img
              src="https://raw.githubusercontent.com/vikrampal038/Project-Assets/main/Intelligic/Images/intelligic.png"
              alt="Footer logo"
              className="w-32 sm:w-40 md:w-48 h-auto object-contain"
            />

            {/* Newsletter */}
            <div className="flex flex-col gap-3 w-full md:w-90 lg:w-120 xl:w-150">
              <span className="footertext font-semibold">
                Subscribe to our newsletter for latest updates
              </span>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col lg:flex-row gap-4 border border-slate-500 rounded-lg p-2"
              >
                <EmailInputField
                  label={false}
                  name="email"
                  value={data.email}
                  onChange={(value) =>
                    setData((prev) => ({ ...prev, email: value }))
                  }
                  error={errors?.email}
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="relative group overflow-hidden button w-full md:w-auto inline-flex items-center justify-center disabled:opacity-60"
                >
                  <span className="absolute inset-0 bg-[#8be0ff5b] border rounded-lg -translate-x-full group-hover:translate-x-0 transition-transform duration-700 z-0"></span>
                  <span className="relative z-10">
                    {loading ? "Subscribing..." : "Subscribe"}
                  </span>
                </button>
              </form>
            </div>
          </div>
          {/* For Links And Contacts */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* For Services Link */}
            <div className=" flex flex-col gap-6">
              <h1 className="footerHeading">Services</h1>
              <div className="flex flex-col gap-3">
                {Service.map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.path}
                    className="flex items-center gap-3 transition"
                  >
                    <FaAngleDoubleRight className="footerIcon" />
                    <div className="flex flex-col group relative h-[22px] w-[180px] overflow-hidden">
                      <span className="footertext animationtext">
                        {item.label}
                      </span>
                      <span className="footertext animationtexthover">
                        {item.label}
                      </span>
                    </div>
                  </NavLink>
                ))}
              </div>
            </div>

            {/* For Explore Link */}
            <div className=" flex flex-col gap-6">
              <h1 className="footerHeading">Explore</h1>
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/blog", label: "Blog" },
                { to: "/contact", label: "Contact" },
              ].map((item, index) => (
                <NavLink
                  key={index}
                  to={item.to}
                  className="flex items-center gap-3 transition"
                >
                  <FaAngleDoubleRight className="footerIcon" />
                  <div className="flex flex-col group relative h-[22px] w-[180px] overflow-hidden">
                    <span className="footertext animationtext">
                      {item.label}
                    </span>
                    <span className="footertext animationtexthover">
                      {item.label}
                    </span>
                  </div>
                </NavLink>
              ))}
            </div>

            {/* For Follow Link */}
            <div className=" flex flex-col gap-6">
              <h1 className="footerHeading">Follow Us</h1>
              <div className="flex flex-col gap-4">
                {Social.map((item, index) => {
                  const Icon = item.icons;
                  return (
                    <a
                      key={index}
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 transition"
                    >
                      <Icon className="footerIcon" />
                      <div className="flex flex-col group relative h-[22px] w-[180px] overflow-hidden">
                        <span className="footertext animationtext">
                          {item.label}
                        </span>
                        <span className="footertext animationtexthover">
                          {item.label}
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* For Contacts Link */}
            <div className="flex flex-col gap-6 lg:w-75">
              <h1 className="footerHeading">Contact</h1>
              <div className="flex flex-col gap-4">
                {Contact.map((item, index) => {
                  const Icon = item.icons;

                  const Content = (
                    <div className="flex items-start gap-4 w-full">
                      <Icon className="footerIcon transition-all duration-700 hover:scale-110 hover:text-blue-500" />
                      <span className="footertext tracking-wider leading-6 hover:text-gray-800 transition-all duration-700 ease-in-out">
                        {item.label}
                      </span>
                    </div>
                  );

                  return item.to ? (
                    <a
                      key={index}
                      href={item.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:opacity-80"
                    >
                      {Content}
                    </a>
                  ) : (
                    <div key={index}>{Content}</div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* For Second Section  */}
        <div className="px-5 sm:px-15 md:px-25 lg:px-30 w-full bg-[#8a8a8a8e] py-6 ">
          <div className="w-full  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {seoColumns.map((column, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-1">
                {column.map((item, index) => (
                  <div
                    key={index}
                    to={item.path}
                    className="footertext text-sm hover:text-gray-200 transition-all duration-900 ease-in-out"
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* For Third Section */}
        <div className=" px-5 sm:px-15 md:px-25 lg:px-30 w-full py-4 grid grid-cols-1 xl:grid-cols-2 justify-between items-center gap-6 bg-gradient-brand-400-300-400">
          {/* for copy write */}
          <div className="footertext tracking-wider text-center xl:text-start  transition-all duration-1200  hover:text-gray-600">
            <span className="text-center lg:text-start">
              © 2025 Intelligic Solutions. All rights reserved.
            </span>
          </div>

          {/* for legals Links */}
          <div className="flex flex-wrap sm:flex-nowrap  justify-center xl:justify-end items-center gap-6">
            {Legal.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-baseline justify-center xl:justify-end transition text-center"
              >
                <div className="flex flex-col justify-center items-center group relative h-[22px] w-[180px] overflow-hidden">
                  <span className="footertext animationtext text-center">
                    {item.label}
                  </span>
                  <span className="footertext animationtexthover text-center">
                    {item.label}
                  </span>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
