"use client";

import React,  {useEffect, useRef, useState}  from "react";
import { Progress } from "../components/ui/progress";
import { progressData } from "../Data/ServiceData";

const ServicesValue = () => {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [counts, setCounts] = useState(progressData.map(() => 0));

  // Detect section in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Number animation
  useEffect(() => {
    if (!animate) return;

    progressData.forEach((item, index) => {
      let start = 0;
      const end = item.value;
      const duration = 900;
      const startTime = performance.now();

      const update = (time) => {
        const progress = Math.min((time - startTime) / duration, 1);
        const value = Math.floor(progress * end);

        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = value;
          return updated;
        });

        if (progress < 1) {
          requestAnimationFrame(update);
        }
      };

      requestAnimationFrame(update);
    });
  }, [animate]);

  return (
    <div ref={sectionRef} className="w-full flex flex-col gap-6">
      {progressData.map((item, index) => (
        <div key={index} className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h4 className="font-semibold">{item.title}</h4>
            <span className="font-semibold">{counts[index]}%</span>
          </div>

          <Progress value={animate ? item.value : 0} />
        </div>
      ))}
    </div>
  );
};

export default ServicesValue;
