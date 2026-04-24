import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { PiArrowLeftBold, PiArrowClockwiseBold } from "react-icons/pi";
import { motion } from "framer-motion";

const TOTAL_TIME = 20;
const COUPON_CODE = "INTSERVSOL";

const getBubbleCount = () => {
  const width = window.innerWidth;
  if (width < 640) return 30; // mobile
  if (width < 768) return 40; // tablets
  if (width < 1024) return 50; // small laptops
  return 60; // desktop
};

const GameFile = ({ onExit, isPopup = false }) => {
  const [timer, setTimer] = useState(TOTAL_TIME);
  const [score, setScore] = useState(0);
  const [hitNumber, setHitNumber] = useState(0);
  const [bubbles, setBubbles] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [bubbleCount, setBubbleCount] = useState(getBubbleCount());
  const [wrongIndex, setWrongIndex] = useState(null);

  const makeBubble = () => {
    const newBubbles = Array.from({ length: bubbleCount }, () =>
      Math.floor(Math.random() * 10),
    );
    setBubbles(newBubbles);
  };

  const getNewHit = () => {
    setHitNumber(Math.floor(Math.random() * 10));
  };

  const handleBubbleClick = (num, index) => {
    if (num === hitNumber) {
      setScore((prev) => prev + 10);
      getNewHit();
      makeBubble();
      setWrongIndex(null);
    } else {
      setWrongIndex(index);
      setScore((prev) => Math.max(0, prev - 10));
      setTimeout(() => setWrongIndex(null), 400);
    }
  };

  const resetGame = () => {
    setTimer(TOTAL_TIME);
    setScore(0);
    setGameOver(false);
    setWrongIndex(null);
    getNewHit();
    makeBubble();
  };

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

  useEffect(() => {
    getNewHit();
    makeBubble();
  }, [bubbleCount]);

  useEffect(() => {
    const handleResize = () => {
      setBubbleCount(getBubbleCount());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`w-full flex flex-col bg-white overflow-hidden ${isPopup ? "h-auto max-h-[90vh]" : "min-h-screen pt-20"}`}>
      {/* Header Bar */}
      <div className="bg-[#00AEEF] p-4 sm:p-6 lg:p-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-white">
        {onExit && (
          <button 
            onClick={onExit}
            className="absolute top-4 left-4 p-2 hover:bg-white/20 transition-colors"
          >
            <PiArrowLeftBold className="text-2xl" />
          </button>
        )}
        
        <div className="flex gap-8 items-center justify-center w-full">
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Hit</span>
            <div className="text-xl md:text-2xl font-black bg-white text-[#00AEEF] w-10 h-10 md:w-14 md:h-14 rounded-2xl flex items-center justify-center shadow-lg">
              {hitNumber}
            </div>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Timer</span>
            <div className="text-xl md:text-2xl font-black bg-white text-[#00AEEF] w-10 h-10 md:w-14 md:h-14 rounded-2xl flex items-center justify-center shadow-lg">
              {timer}
            </div>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Score</span>
            <div className="text-xl md:text-2xl font-black bg-white text-[#00AEEF] w-10 h-10 md:w-14 md:h-14 rounded-2xl flex items-center justify-center shadow-lg">
              {score}
            </div>
          </div>
        </div>
      </div>

      {/* Play Area */}
      <div className="flex-1 p-6 md:p-10 flex flex-wrap gap-3 sm:gap-4 items-center justify-center min-h-[300px] max-h-[60vh] overflow-y-auto custom-scrollbar bg-gray-50/50">
        {!gameOver ? (
          bubbles.map((num, index) => (
            <motion.button
              key={index}
              whileTap={{ scale: 0.9 }}
              animate={wrongIndex === index ? { x: [-5, 5, -5, 5, 0], backgroundColor: "#ef4444", borderColor: "#dc2626" } : {}}
              className={`flex items-center justify-center cursor-pointer font-black rounded-full bg-white border-2 border-gray-100 w-12 h-12 text-lg sm:w-14 sm:h-14 sm:text-xl md:w-16 md:h-16 shadow-lg transition-all duration-300 ${wrongIndex === index ? 'text-white' : 'text-black hover:border-[#00AEEF] hover:text-[#00AEEF] hover:scale-110'}`}
              onClick={() => handleBubbleClick(num, index)}
            >
              {num}
            </motion.button>
          ))
        ) : (
          <div className="flex flex-col justify-center items-center text-center gap-6 py-10 max-w-md mx-auto w-full">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-3xl flex items-center justify-center mb-2 animate-bounce">
               <span className="text-4xl">🎉</span>
            </div>
            
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">Well Played!</h1>
              <p className="text-gray-500 mt-2 font-medium">Your final score is <span className="text-[#00AEEF] font-black text-2xl">{score}</span></p>
            </div>

            <div className="w-full bg-blue-50 p-6 rounded-3xl border border-blue-100 space-y-4 ">
               <p className="text-xs font-black text-blue-400 uppercase tracking-widest">Your Reward Unlocked</p>
               <div className="flex flex-col items-center gap-2">
                  <span className="text-3xl font-black text-[#00AEEF]">{COUPON_CODE}</span>
                  <p className="text-[10px] text-blue-400 font-bold max-w-[200px]">Screenshot this and share with our team to claim your discount.</p>
               </div>
            </div>

            <div className="flex gap-4 w-full">
              <button
                onClick={resetGame}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-900 text-white font-bold py-4 rounded-2xl hover:bg-gray-800 transition-all active:scale-95 group"
              >
                <PiArrowClockwiseBold className="text-xl group-hover:rotate-180 transition-transform duration-500" />
                Try Again
              </button>
              {onExit && (
                <button
                  onClick={onExit}
                  className="flex-1 bg-[#00AEEF] text-white font-bold py-4 rounded-2xl hover:bg-[#0096ce] transition-all active:scale-95"
                >
                  Done
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameFile;

