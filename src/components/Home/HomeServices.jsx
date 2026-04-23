import React from "react";
import HomeHeading from "../../common/HomeHeading";
import { HomeServicesData } from "../../Data/HomeData";

const ServiceCard = ({ item, isExpanded, onToggle }) => {
  const Icon = item.icons;
  return (
    <div
      className="relative overflow-hidden group flex bg-white flex-col justify-center items-center gap-6 border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-1000 ease-in-out w-full md:w-[calc(50%-16px)] lg:w-[calc(25%-20px)] max-w-[350px]">
      {/* Decorative Background Element */}
      <span className="absolute top-0 right-0 w-32 h-32 bg-[#00AEEF]/5 rounded-bl-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-1000 ease-in-out"></span>
      
      <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-[#00AEEF] transition-colors duration-1000 relative z-10">
        <Icon className="text-4xl text-[#00AEEF] group-hover:text-white transition-colors duration-1000" />
      </div>

      <div className="flex flex-col gap-3 justify-center items-center relative z-10 text-center w-full min-h-[160px]">
        <h3 className="subHeading group-hover:text-[#00AEEF] transition-colors duration-1000 ease-in-out">
          {item.title}
        </h3>
        <p 
          onClick={onToggle}
          className={`mainParagraph text-sm text-slate-600 cursor-pointer transition-all duration-1500 ease-in-out overflow-hidden ${
            isExpanded ? "line-clamp-none max-h-[500px]" : "line-clamp-3 max-h-20"
          }`}
        >
          {item.description}
        </p>
      </div>

      {/* Bottom line animation */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#00AEEF] group-hover:w-full transition-all duration-1000 ease-in-out"></div>
    </div>
  );
};

const HomeServices = () => {
  const [expandedIndex, setExpandedIndex] = React.useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="topmain">
      <div className="main w-full">
        <div className=" w-full flex flex-col justify-center items-center gap-14">
          {/* Heading Section */}
          <HomeHeading  
            mainHeading="Our Services"
            subHeading="From Concept to Reality: Building Tomorrow's Solutions Today"
          />

          {/* Maine Section */}
          <div className="flex flex-wrap items-center justify-center w-full gap-8">
            {HomeServicesData.map((item, index) => (
              <ServiceCard
                key={index}
                item={item}
                isExpanded={expandedIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
