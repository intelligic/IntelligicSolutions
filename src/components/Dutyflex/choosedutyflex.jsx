import React from "react";
import { motion } from "framer-motion";
import { HiCheckCircle } from "react-icons/hi";

const features = [
  "Centralized control of security operations",
  "Accurate and automated attendance tracking",
  "Seamless payroll and billing management",
  "Mobile-enabled workforce with real-time updates",
  "Detailed reports for compliance and transparency"
];

const Choosedutyflex = () => {
  return (
    <div className="main py-10 md:py-20 w-full">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-[#111827] rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row items-center"
      >
        {/* Left Content */}
        <div className="w-full lg:w-3/5 p-8 md:p-16 flex flex-col gap-8">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Why Choose DutyFlex?
          </h2>
          
          <ul className="flex flex-col gap-6">
            {features.map((feature, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 text-slate-300"
              >
                <div className="bg-[#00AEEF] rounded-full p-0.5 flex-shrink-0">
                  <HiCheckCircle className="text-white text-xl" />
                </div>
                <span className="text-lg md:text-xl font-medium">{feature}</span>
              </motion.li>
            ))}
          </ul>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6"
          >
            <a 
              href="https://dutyflex.com/" 
              className="bg-white text-[#00AEEF] font-bold py-4 px-10 rounded-xl shadow-lg hover:bg-slate-50 transition-colors inline-block text-lg"
            >
              Explore DutyFlex Platform
            </a>
          </motion.div>
        </div>

        {/* Right Image Container */}
        <div className="w-full lg:w-2/5 p-8 lg:p-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10"
          >
            <img
              src="https://raw.githubusercontent.com/intelligic/Project-Assets/main/Dutyflex/BookDemoImgs.png"
              alt="Security Managers Meeting"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Choosedutyflex;
