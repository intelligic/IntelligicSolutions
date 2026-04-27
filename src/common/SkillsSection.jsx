import { useEffect, useRef, useState } from "react";
import CircularProgress from "./CircularProgress";
import { Skills } from "../Data/AboutData";

const SkillsSection = () => {
  const sectionRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect(); //
        }
      },
      { threshold: 0.4 } // 40% visible hone par trigger
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="flex justify-start items-center w-full ">
      <div className="flex justify-start items-center w-full">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-8 sm:gap-15 valBox-Shadow  rounded-lg w-fit items-center justify-start">
          {Skills.map((skill, i) => (
            <CircularProgress
              key={i}
              title={skill.title}
              percentage={skill.value}
              start={start}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
