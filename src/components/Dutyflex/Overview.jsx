import React from "react";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";

const Overview = () => {
  return (
    <div className="main flex-col lg:flex-row items-center justify-between gap-12 w-full 2xl:px-50">
      {/* Left Content */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-[48%] flex flex-col gap-8"
      >
        <div className="flex flex-col gap-4">
          <span className="text-slate-500 font-bold tracking-widest text-xs uppercase">
            Overview
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1E293B] leading-tight">
            About DutyFlex
          </h1>
        </div>
        
        <div className="flex flex-col gap-6">
          <p className="mainParagraph text-slate-600 leading-relaxed text-left text-lg">
            DutyFlex is a cloud-based security workforce management platform
            designed to simplify and optimize guard operations across
            organizations. It brings together scheduling, attendance tracking,
            payroll processing, and reporting into one unified system.
          </p>
          <p className="mainParagraph text-slate-600 leading-relaxed text-left text-lg">
            Built for modern security teams, DutyFlex enables real-time visibility
            into field activities, reduces manual processes, and ensures accurate,
            data-driven decision-making. From managing daily shifts to generating
            compliance-ready reports, everything is streamlined for efficiency
            and control.
          </p>
        </div>
        
        <a 
          href="https://dutyflex.com/" 
          className="flex items-center gap-2 text-[#00AEEF] font-bold hover:underline group w-fit text-lg transition-all"
        >
          Explore DutyFlex Platform 
          <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>

      {/* Right Image Container */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-[52%]"
      >
        <div className="relative group w-full rounded-[2.5rem] overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.2)] bg-white">
          <img
            src="https://raw.githubusercontent.com/intelligic/Project-Assets/main/Intelligic/Images/dutyflexhero.png"
            alt="DutyFlex Dashboard on iPad"
            className="w-full h-[380px] object-cover transition-transform duration-1000 group-hover:scale-105"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Overview;
