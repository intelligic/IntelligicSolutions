import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PiArrowBendDoubleUpRightBold } from "react-icons/pi";
import { motion, AnimatePresence } from "framer-motion";
import EnquiryFormContent from "./EnquiryFormContent";

const ServicePopup = ({ service }) => {
  const [showEnquiry, setShowEnquiry] = useState(false);

  return (
    <Dialog onOpenChange={(open) => !open && setShowEnquiry(false)}>
      <DialogTrigger asChild>
        <button className="group bg-white hover:bg-gray-50 text-gray-800 text-2xl border-2 rounded-xl border-gray-100 p-2 lg:p-3 font-bold flex items-center justify-center transition-all duration-500 hover:scale-110 hover:border-[#00AEEF] hover:text-[#00AEEF] hover:shadow-2xl cursor-pointer">
          <PiArrowBendDoubleUpRightBold className="transition-transform duration-500 group-hover:rotate-45" />
        </button>
      </DialogTrigger>

      <DialogContent className="w-[95vw] sm:max-w-[500px] md:max-w-[750px] p-0 overflow-hidden border-none rounded-[1.5rem] sm:rounded-[2.5rem] bg-white shadow-[0_25px_80px_-20px_rgba(0,0,0,0.3)] ring-1 ring-black/5 outline-none transition-all duration-500">
        <AnimatePresence mode="wait">
          {!showEnquiry ? (
            <motion.div
              key="info"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {/* Banner Image Section */}
              <div className="relative h-44 sm:h-56 md:h-64 w-full overflow-hidden bg-gray-100">
                <motion.img
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="p-6 sm:p-8">
                <DialogHeader className="text-left">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 tracking-tight capitalize">
                      {service.title}
                    </DialogTitle>
                    <div className="h-1.5 w-24 bg-[#00AEEF] rounded-full mt-3" />
                  </motion.div>
                  
                  <DialogDescription className="sr-only">
                    Details about {service.title}
                  </DialogDescription>
                </DialogHeader>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className=" mt-6 mb-4"
                >
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-medium">
                    {service.description}
                  </p>
                </motion.div>

                {/* Footer Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col sm:flex-row items-center pt-3 justify-between gap-6 border-t border-gray-100"
                >
                  <div className="hidden sm:flex items-center gap-3">
                     <div className="w-2.5 h-2.5 rounded-full bg-[#00AEEF] animate-pulse" />
                     <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">Premium Solutions</span>
                  </div>
                  
                  <button
                    onClick={() => setShowEnquiry(true)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#00AEEF] text-white font-black px-8 py-3 rounded-2xl text-base sm:text-lg hover:bg-[#0096ce] shadow-xl shadow-blue-100 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 group"
                  >
                    Enquire Now
                    <PiArrowBendDoubleUpRightBold className="text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="enquiry"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <EnquiryFormContent 
                initialService={service.title} 
                onBack={() => setShowEnquiry(false)} 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};

export default ServicePopup;

