import React, { useEffect, useState, useRef } from "react";
import { FaUsers, FaQuoteRight } from "react-icons/fa";
import { testimonial } from "../Data/HomeData";
import Autoplay from "embla-carousel-autoplay";
import { motion, AnimatePresence } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testiminoal = () => {
  const [api, setApi] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const autoplay = useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    onSelect();
    api.on("select", onSelect);

    return () => api.off("select", onSelect);
  }, [api]);

  return (
    <section className="w-full py-10 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 -z-10" />

      <div className="max-w-7xl mx-auto px-4 relative">
        <Carousel
          setApi={setApi}
          opts={{ align: "center", loop: true }}
          plugins={[autoplay.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonial.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/2 lg:basis-1/3 flex justify-center py-8"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative group h-full w-full max-w-[400px] transition-all duration-500 ${
                    selectedIndex === index 
                    ? "scale-105 z-10" 
                    : "scale-95 opacity-60 grayscale-[0.5]"
                  }`}
                >
                  {/* Card Main Container */}
                  <div className="bg-white rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,174,239,0.1)] border border-blue-50/50 flex flex-col h-full relative overflow-hidden group-hover:shadow-[0_20px_60px_rgba(0,174,239,0.15)] transition-shadow">
                    
                    {/* Quote Icon Background */}
                    <FaQuoteRight className="absolute top-6 right-8 text-blue-50 text-6xl opacity-40 group-hover:text-blue-100 group-hover:scale-110 transition-all duration-500" />

                    {/* Content Section */}
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Description/Quote */}
                      <div className="grow mb-8">
                        <p className="text-gray-600 italic leading-relaxed text-[15px] lg:text-[16px]">
                          "{item.description}"
                        </p>
                      </div>

                      {/* Footer: Avatar & Info */}
                      <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                        <div className="w-14 h-14 rounded-full bg-linear-to-tr from-[#00AEEF] to-[#4fd2ff] flex items-center justify-center text-white shadow-lg shadow-blue-200">
                          <FaUsers className="text-2xl" />
                        </div>
                        <div className="flex flex-col">
                          <h3 className="font-bold text-gray-900 text-lg leading-tight">
                            {item.name}
                          </h3>
                          <p className="text-[#00AEEF] font-medium text-sm tracking-wide">
                            {item.title}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Subtle bottom accent line */}
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#00AEEF] group-hover:w-full transition-all duration-700" />
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Controls */}
          <div className="hidden xl:block">
            <CarouselPrevious className="left-[-50px] bg-white border-blue-100 text-[#00AEEF] hover:bg-[#00AEEF] hover:text-white transition-all shadow-md" />
            <CarouselNext className="right-[-50px] bg-white border-blue-100 text-[#00AEEF] hover:bg-[#00AEEF] hover:text-white transition-all shadow-md" />
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonial.map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  selectedIndex === i 
                  ? "w-8 bg-[#00AEEF]" 
                  : "w-2.5 bg-blue-100 hover:bg-blue-200"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testiminoal;

