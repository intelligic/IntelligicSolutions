import React from "react";
import { motion } from "framer-motion";
import EnquiryFormContent from "../../common/EnquiryFormContent";

const Enquirysec = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-linear-to-br from-blue-50 via-white to-cyan-50">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-[800px] bg-white rounded-[2rem] sm:rounded-[3rem] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.15)] border border-white/50 overflow-hidden"
      >
        <EnquiryFormContent 
          onBack={() => window.history.back()} 
        />
      </motion.div>
    </div>
  );
};

export default Enquirysec;

