import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { BsChatRightTextFill } from "react-icons/bs";
const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  // { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
  // { name: "Dutyflex", path: "/dutyflex" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 z-40 w-full border border-b bg-gradient-brand-500-300-200 h-18">
      <div className="flex items-center justify-between h-16 px-5 xl:px-35 sm:px-10 md:px-15 lg:px-20">
        {/* Logo */}
        <NavLink to="/" className="inline-flex items-center">
          <img
            src="https://raw.githubusercontent.com/intelligic/Project-Assets/main/Intelligic/Images/intelligic.png"
            alt="Intelligic – Technology & Digital Solutions"
            className="object-contain h-auto w-28 sm:w-30 md:w-35 lg:w-42 xl:w-48"
          />
        </NavLink>

        {/* Desktop Nav (ONLY xl and above) */}
        <div className="hidden gap-8 text-lg font-bold tracking-wider xl:flex">
          {navLinks.map((item) => (
            <NavLink key={item.name} to={item.path}>
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="flex justify-center items-center gap-8">
          {/* Unique & Attractive Dutyflex Button */}
          <div className="hidden xl:block relative group">
            {/* Pulsing Glow Background */}
            <span className="absolute inset-0 bg-cyan-400 rounded-full blur-md opacity-20 group-hover:opacity-50 animate-pulse transition-opacity" />

            <NavLink
              to="/dutyflex"
              className="relative z-10 flex items-center gap-2 bg-slate-900 text-white px-6 py-2 rounded-full font-bold hover:bg-slate-800 transition-all border border-slate-700 hover:border-cyan-400/50 shadow-lg"
            >
              Dutyflex
              <span className="bg-cyan-500 text-[10px] text-white px-1.5 py-0.5 rounded-md leading-none animate-bounce uppercase tracking-tighter">
                New
              </span>
            </NavLink>
          </div>
          <a
            href="https://wa.me/919029965109?text=Hello,%20I’m%20interested%20in%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 subHeading xl:text-[18px] hidden xl:block"
          >
            <BsChatRightTextFill className="text-3xl text-blue-400" />
          </a>
        </div>

        {/* Desktop CTA (ONLY xl and above) */}

        {/* Menu Button (Tablet + Mobile) */}
        <button
          onClick={() => setMenuOpen(true)}
          className="text-3xl xl:hidden"
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
          <NavLink
            to="/dutyflex"
            className="relative z-10 flex items-center gap-2 bg-slate-900 text-white px-6 py-2 rounded font-bold hover:bg-slate-800 transition-all border border-slate-700 hover:border-cyan-400/50 shadow-lg"
            onClick={() => setMenuOpen(false)}
          >
            Dutyflex{" "}
            <span className="bg-cyan-500 text-[10px] text-white px-1 py-0.5 rounded animate-pulse">
              NEW
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// {/* <div className="hidden xl:block cart-shadow relative group py-1.5 overflow-hidden rounded-full w-fit px-6 text-center border border-[#00AEEF] hover:scale-110 transition-all duration-700">
//   <span className="absolute inset-0 bg-[#4fd3ff3f] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 z-0" />
//   <a
//     href="https://wa.me/919029965109?text=Hello,%20I’m%20interested%20in%20your%20services."
//     target="_blank"
//     rel="noopener noreferrer"
//     className="relative z-10 subHeading xl:text-[18px]"
//   >
//     let's Talk
//     {/* Start a Conversation */}
//   </a>
// </div> */}
