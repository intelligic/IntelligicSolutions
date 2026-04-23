import React from "react";
import { motion } from "framer-motion";
import { 
  MdOutlineTrackChanges, 
  MdOutlineVisibility, 
  MdOutlinePeopleOutline, 
  MdOutlineShield 
} from "react-icons/md";

const approachData = [
  {
    icon: MdOutlineTrackChanges,
    title: "Operational Efficiency",
    description: "Automate routine processes like attendance tracking, shift scheduling, and payroll to minimize manual effort and reduce errors.",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: MdOutlineVisibility,
    title: "Real-Time Visibility",
    description: "Monitor guard activities, checkpoints, and attendance in real time with a centralized dashboard and mobile integration.",
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    icon: MdOutlinePeopleOutline,
    title: "Smart Workforce Management",
    description: "Digitally manage your entire security team with structured workflows, ensuring accountability and smooth operations.",
    color: "bg-cyan-50 text-cyan-600"
  },
  {
    icon: MdOutlineShield,
    title: "Reliability & Control",
    description: "Maintain complete control over your operations with accurate data, audit logs, and transparent reporting systems.",
    color: "bg-sky-50 text-sky-600"
  }
];

const Approach = () => {
  return (
    <div className="main flex flex-col items-center gap-16">
      {/* Heading */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center flex flex-col gap-4"
      >
        <span className="text-slate-500 font-bold tracking-widest text-xs uppercase">
          Our Approach
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          How DutyFlex Works
        </h2>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {approachData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-5 hover:shadow-xl transition-all"
          >
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${item.color}`}>
              <item.icon className="text-3xl" />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="mainParagraph text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Approach;
