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
      <div className="flex flex-col items-center justify-center w-full bg-gradient-brand-400-300-400">
        <div className="flex flex-col items-center w-full gap-10 py-16 px-5 sm:px-10 md:px-15 lg:px-20 xl:px-35">
          {/* Logo */}
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
            <img
              src="https://raw.githubusercontent.com/intelligic/Project-Assets/main/Intelligic/Images/intelligic.png"
              alt="Footer logo"
              className="object-contain w-32 h-auto sm:w-40 md:w-48"
            />

            {/* Newsletter */}
            <div className="flex flex-col w-full gap-3 md:w-90 lg:w-120 xl:w-150">
              <span className="font-semibold footertext">
                Subscribe to our newsletter for latest updates
              </span>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 p-2 border rounded-lg lg:flex-row border-slate-500"
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
                  className="relative inline-flex items-center justify-center w-full overflow-hidden group button md:w-auto disabled:opacity-60"
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
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* For Services Link */}
            <div className="flex flex-col gap-6 ">
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
            <div className="flex flex-col gap-6 ">
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
            <div className="flex flex-col gap-6 ">
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
                    <div className="flex items-start w-full gap-4">
                      <Icon className="transition-all duration-700 footerIcon hover:scale-110 hover:text-blue-500" />
                      <span className="leading-6 tracking-wider transition-all duration-700 ease-in-out footertext hover:text-gray-800">
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
        <div className="px-5 sm:px-10 md:px-15 lg:px-20 xl:px-35 w-full bg-[#8a8a8a8e] py-6 ">
          <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
            {seoColumns.map((column, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-1">
                {column.map((item, index) => (
                  <div
                    key={index}
                    to={item.path}
                    className="text-sm transition-all ease-in-out footertext hover:text-gray-200 duration-900"
                  > 
                    {item.label}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* For Third Section */}
        <div className="grid items-center justify-between w-full grid-cols-1 gap-6 py-4 border-b px-5 sm:px-10 md:px-15 lg:px-20 xl:px-35 xl:grid-cols-2 bg-gradient-brand-400-300-400 border-[#8a8a8a8e]">
          {/* for copy write */}
          <div className="tracking-wider flex items-center justify-start gap-5 text-center transition-all footertext xl:text-start duration-1200 hover:text-gray-600">
            <span className="text-center lg:text-start">
              Checkout our other products
            </span>
            <a
              href="https://dutyflex.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <img
                src="https://raw.githubusercontent.com/intelligic/Project-Assets//main/Dutyflex/logo.png"
                alt="Intelligic – Technology & Digital Solutions"
                className="object-contain h-auto w-28"
              />
            </a>
        </div>
      </div>

      {/* For fourth Section */}
      <div className="grid items-center justify-between w-full grid-cols-1 gap-6 py-4 px-5 sm:px-10 md:px-15 lg:px-20 xl:px-35 xl:grid-cols-2 bg-gradient-brand-400-300-400">
        {/* for copy write */}
        <div className="tracking-wider text-center transition-all footertext xl:text-start duration-1200 hover:text-gray-600">
          <span className="text-center lg:text-start">
            © 2025 Intelligic Solutions. All rights reserved.
          </span>
        </div>

        {/* for legals Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:flex-nowrap xl:justify-end">
          {Legal.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-baseline justify-center text-center transition xl:justify-end"
            >
              <div className="flex flex-col justify-center items-center group relative h-[22px] w-[180px] overflow-hidden">
                <span className="text-center footertext animationtext">
                  {item.label}
                </span>
                <span className="text-center footertext animationtexthover">
                  {item.label}
                </span>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
    </div >
  );
};

export default Footer;
