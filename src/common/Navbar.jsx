import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full bg-gradient-brand-500-300-200 h-18 border-b z-40 border">
      <div className="flex items-center justify-between xl:px-35 px-5 sm:px-10 md:px-15 lg:px-20 h-16">

        {/* Logo */}
        <NavLink to="/" className="inline-flex items-center">
          <img
            src="https://raw.githubusercontent.com/vikrampal038/Project-Assets/main/Intelligic/Images/intelligic.png"
            alt="Intelligic – Technology & Digital Solutions"
            className="w-28 sm:w-30 md:w-35 lg:w-42 xl:w-48 h-auto object-contain"
          />
        </NavLink>

        {/* Desktop Nav (ONLY xl and above) */}
        <div className="hidden xl:flex gap-8 text-lg tracking-wider font-bold">
          {navLinks.map((item) => (
            <NavLink key={item.name} to={item.path}>
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA (ONLY xl and above) */}
        <div className="hidden xl:block cart-shadow relative group p-2.5 overflow-hidden rounded w-56 text-center border border-[#00AEEF] hover:scale-110 transition-all duration-700">
          <span className="absolute inset-0 bg-[#4fd3ff3f] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 z-0" />
          <a
            href="https://wa.me/919029965109?text=Hello,%20I’m%20interested%20in%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 subHeading xl:text-[18px]"
          >
            Start a Conversation
          </a>
        </div>

        {/* Menu Button (Tablet + Mobile) */}
        <button
          onClick={() => setMenuOpen(true)}
          className="xl:hidden text-3xl"
        >
          <HiMenuAlt3 />
        </button>
      </div>

      {/* Mobile / Tablet Menu */}
      <div
        className={`fixed top-0 right-0 w-50 sm:w-70 h-95 rounded-bl-md bg-gradient-brand-500-300-200 z-50 transform transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-5">
          <button onClick={() => setMenuOpen(false)} className="text-3xl">
            <HiX />
          </button>
        </div>

        <div className="flex flex-col items-center gap-4 text-xl font-bold">
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}

          {/* CTA inside menu */}
          <a
            href="https://wa.me/919029965109?text=Hello,%20I’m%20interested%20in%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className=" px-6 py-1 border border-[#00AEEF] rounded cart-shadow"
          >
            let's Talk
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


























