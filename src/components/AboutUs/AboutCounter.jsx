import { useEffect, useRef, useState } from "react";
import { countersData } from "../../Data/AboutData";
import { TbPlus } from "react-icons/tb";


function Counter() {
  const sectionRef = useRef(null);
  const hasStarted = useRef(false);

  const [counts, setCounts] = useState(countersData.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          startCounting();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const startCounting = () => {
    countersData.forEach((counter, index) => {
      let start = 0;
      const end = counter.value;
      const duration = 500;
      const stepTime = Math.floor(duration / end);

      const timer = setInterval(() => {
        start += 1;

        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = start;
          return newCounts;
        });

        if (start === end) {
          clearInterval(timer);
        }
      }, stepTime);
    });
  };

  return (
    // bg-[#F6EEE3]
    <section className=" topmain">
      <div className="main  border-blue-900">
        <div
          ref={sectionRef}
          className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-10 justify-center items-center"
        >
          {countersData.map((item, index) => (
            <div
              key={item.id}
              className="cart-shadow  rounded-lg w-full h-35 flex flex-col justify-center items-center gap-2  p-[30px]  transition-all duration-1500 hover:scale-110 hover:bg-[#f0eeeb]"
            >
              <div className="flex justify-center items-center gap-1">
                <h2 className="mainHeading text-shadow-pro text-black">{counts[index]}</h2>
                <TbPlus className="icon text-black text-[25px]" />
              </div>
              <p className="mainParagraph text-center">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Counter;
