import React, { useEffect, useState, useRef } from "react";
import { FaUsers } from "react-icons/fa";
import { testimonial } from "../Data/HomeData";
import Autoplay from "embla-carousel-autoplay";
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
      delay: 4000,
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
    <section className="w-full">
      <div className="md:w-2xl lg:w-4xl xl:w-6xl mx-auto px-4 relative">
        <Carousel
          setApi={setApi}
          opts={{ align: "center", loop: true }}
          plugins={[autoplay.current]}
          className="embla"
        >
          <CarouselContent className="items-center">
            {testimonial.map((item, index) => (
              <CarouselItem
                key={index}
                className={`md:basis-1/3 basis-full flex justify-center ${
                  selectedIndex === index ? "is-selected" : ""
                }`}
              >
                <div className="cart-shadow  w-[330px] h-[280px] md:h-[320px]  lg:h-[310px] bg-[#f7f7f7] text-center rounded-xl p-6 shadow-lg transition-all duration-500 flex flex-col gap-4">
                  <div className="flex justify-center">
                    <FaUsers className="text-black text-6xl" />
                  </div>

                  <div className=" flex flex-col justify-center items-center gap-2">
                    <h3 className="subHeading">{item.name}</h3>

                    <p className="label">{item.title}</p>

                    <p className="text-[12px] lg:text-[14px] text-black font-normal  tracking-wide text-center leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="-left-3 sm:-left-6 md:-left-10 lg:-left-14 opacity-0 pointer-events-none xl:opacity-100 xl:pointer-events-auto" />
          <CarouselNext className="-right-3 sm:-right-6 md:-right-10 lg:-right-14 opacity-0 pointer-events-none xl:opacity-100 xl:pointer-events-auto" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testiminoal;
