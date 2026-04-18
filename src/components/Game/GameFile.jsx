import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const TOTAL_TIME = 20;
const COUPON_CODE = "INTSERVSOL";

// ✅ Responsive bubble count
const getBubbleCount = () => {
  const width = window.innerWidth;
  if (width < 640) return 30; // mobile
  if (width < 768) return 40; // tablets
  if (width < 1024) return 50; // small laptops
  return 60; // desktop
};

const GameFile = () => {
  const navigate = useNavigate();

  const [timer, setTimer] = useState(TOTAL_TIME);
  const [score, setScore] = useState(0);
  const [hitNumber, setHitNumber] = useState(0);
  const [bubbles, setBubbles] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [bubbleCount, setBubbleCount] = useState(getBubbleCount());

  // ✅ Generate bubbles
  const makeBubble = () => {
    const newBubbles = Array.from({ length: bubbleCount }, () =>
      Math.floor(Math.random() * 10),
    );
    setBubbles(newBubbles);
  };

  // ✅ New hit number
  const getNewHit = () => {
    setHitNumber(Math.floor(Math.random() * 10));
  };

  // ✅ Bubble click handler
  const handleBubbleClick = (num) => {
    if (num === hitNumber) {
      setScore((prev) => prev + 10);
      getNewHit();
      makeBubble();
    } else {
      setScore((prev) => Math.max(0, prev - 10));
    }
  };

  // ✅ Timer logic
  useEffect(() => {
    if (gameOver) return;

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setGameOver(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [gameOver]);

  // ✅ Init game
  useEffect(() => {
    getNewHit();
    makeBubble();
  }, [bubbleCount]);

  // ✅ Responsive resize handling
  useEffect(() => {
    const handleResize = () => {
      setBubbleCount(getBubbleCount());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="min-h-screen px-4 flex justify-center items-center md:pl-18">
      <div className="w-full max-w-6xl h-[80vh] border border-black rounded-xl overflow-hidden">
        {/* Top Bar */}
        <div className="bg-[#00AEEF] h-[50px] md:h-[60px] lg:h-[80px] flex justify-around items-center text-white px-3 sm:px-[11%]">
          <div className="flex gap-3 items-center justify-center">
            <h2 className="text text-lg md:text-xl lg:text-2xl">Hit</h2>
            <div className="text text-lg md:text-xl lg:text-2xl bg-white  w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12  rounded-full flex items-center justify-center">
              {hitNumber}
            </div>
          </div>

          <div className="flex gap-3 items-center justify-center">
            <h2 className="text text-lg md:text-xl lg:text-2xl">Timer</h2>
            <div className="text text-lg md:text-xl lg:text-2xl bg-white  w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12  rounded-full flex items-center justify-center">
              {timer}
            </div>
          </div>

          <div className="flex gap-3 items-center justify-center">
            <h2 className="text text-lg md:text-xl lg:text-2xl">Score</h2>
            <div className="text text-lg md:text-xl lg:text-2xl bg-white  w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12  rounded-full flex items-center justify-center">
              {score}
            </div>
          </div>
        </div>

        {/* Bottom Area */}
        <div className="w-full h-[calc(100%-100px)]  border p-2 md:p-3 lg:p-4 flex flex-wrap gap-4 items-center justify-center overflow-hidden">
          {!gameOver &&
            bubbles.map((num, index) => (
              <div
                key={index}
                className="flex items-center justify-center cursor-pointer font-bold text-black rounded-full bg-[#0591bc] hover:bg-[#4fd2ff] w-12 h-12 text-lg sm:w-14 sm:h-14 sm:text-xl md:w-16 md:h-16 lg:w-[4.5rem] lg:h-[4.5rem] shadow-[rgba(50,50,93,0.25)_0px_50px_100px_-20px, rgba(0,0,0,0.3)_0px_30px_60px_-30px, rgba(10,37,64,0.35)_0px_-2px_6px_0px_inset]"
                onClick={() => handleBubbleClick(num, index)}
              >
                {num}
              </div>
            ))}

          {gameOver && (
            <div className="flex  flex-col justify-center items-center gap-4">
              <h1 className="mainHeading">Well Played 🎉</h1>
              <h2 className="subHeading flex justify-center items-center gap-3">
                Your Score:{" "}
                <span className="mainHeading text-[#0591bc]">{score}</span>
              </h2>

              <p className="text">
                Based on your performance, you’ve unlocked an instant discount
                on our services.
              </p>

              <h3 className="subHeading flex justify-center items-center gap-3">
                Coupon Code:{" "}
                <span className="text-[#0591bc] border px-2 py-1 border-blue-500 rounded-sm">
                  {COUPON_CODE}
                </span>
              </h3>
              <p className="text">
                Please take a screenshot of this screen and share it during the
                discussion to claim your discount.
              </p>
              <NavLink
                to="/about"
                className="relative group overflow-hidden button inline-flex bg-green-600 text-white items-center justify-center px-3 py-2  lg:px-5 lg:py-2"
              >
                {/* Hover background */}
                <span className="absolute inset-0 bg-[#8be0ff5b] border rounded-lg -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out z-0"></span>

                {/* Button text */}
                <span className="relative z-10">Start the Game</span>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GameFile;
