import React from "react";
import HomeHeading from "../../common/HomeHeading";
import { HomeChooseUs } from "../../Data/HomeData";

const ChooseUsCard = ({ item, isExpanded, onToggle }) => {
  return (
    <div className="flex bg-[#ffffff] flex-col justify-start items-start gap-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-1000 ease-in-out w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-20px)] max-w-[350px] overflow-hidden group">
      <div className="relative w-full overflow-hidden h-60">
        <img
          src={item.image}
          alt={item.title}
          className="object-cover w-full h-full transition-transform duration-2000 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out"></div>
      </div>

      <div className="flex flex-col items-center justify-start gap-3 px-6 py-5 min-h-[160px] text-center w-full">
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
    </div>
  );
};

const HomeChoosUs = () => {
  const [expandedIndex, setExpandedIndex] = React.useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="w-full topmain">
      <div className="w-full main">
        <div className="flex flex-col items-center justify-center w-full gap-14">
          {/* Heading Section */}
          <HomeHeading
            mainHeading="Why Choose Us"
            subHeading="Amazing Software, Built For You"
          />

          {/* Maine Section */}
          <div className="flex flex-wrap items-center justify-center w-full gap-6 lg:gap-8">
            {HomeChooseUs.map((item, index) => (
              <ChooseUsCard
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

export default HomeChoosUs;
