import { useEffect, useState } from "react";

const CircularProgress = ({ percentage, title, start }) => {
  const radius = 60;
  const stroke = 10;
  const normalizedRadius = radius - stroke;
  const circumference = normalizedRadius * 2 * Math.PI;

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (start) {
      setProgress(percentage);
    }
  }, [start, percentage]);

  const strokeDashoffset = circumference - (progress / 100) * circumference;

  // SAFE gradient id (no spaces)
  const gradientId = `grad-${title.replace(/\s+/g, "")}`;

  return (
    <div className="flex flex-col items-center gap-4 transition-all duration-1200 hover:scale-110">
      <svg width={140} height={140} className="cart-shadow rounded-full">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>

        {/* background */}
        <circle
          cx="70"
          cy="70"
          r={normalizedRadius}
          stroke="#e5e7eb"
          strokeWidth={stroke}
          fill="none"
        />

        {/* progress */}
        <circle
          cx="70"
          cy="70"
          r={normalizedRadius}
          stroke={`url(#${gradientId})`}
          strokeWidth={stroke}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{
            transition: "stroke-dashoffset 1.5s ease-in-out",
            transform: "rotate(270deg) scaleX(1)",
            transformOrigin: "50% 50%",
          }}
        />

        {/* text */}
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="fill-black text-2xl font-bold text-center"
        >
          {progress}%
        </text>
      </svg>

      <p className="subHeading">{title}</p>
    </div>
  );
};

export default CircularProgress;
