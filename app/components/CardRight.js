"use client";

import { useEffect, useState } from "react";
import RobotScene from "./RobotScene";
import FakeGPTChatBox from "./FakeGPTChatBox";

export default function CardRight({ flipOverride = false, resetFlip = () => {} }) {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    setFlipped(flipOverride);
  }, [flipOverride]);

  return (
    <div className="w-full h-full flex flex-col justify-between bg-[#0f172a] text-white">
      {!flipped ? (
        <div
          className="relative w-full h-full flex items-center justify-center bg-[url('/images/robotbg.png')] bg-no-repeat bg-bottom bg-contain"
        >
          {/* 💬 Bubble */}
          <div className="absolute top-6 right-6 bg-white text-black px-4 py-2 text-sm rounded-full shadow-md z-20">
            Ask me anything
          </div>

          {/* 🔆 Glow platform */}
          <div className="absolute bottom-[6%] w-[160px] h-[30px] bg-cyan-400 opacity-20 blur-2xl rounded-full z-10" />

          {/* 🤖 Robot */}
          <div className="relative z-20 w-full h-full flex items-center justify-center">
            <RobotScene />
          </div>
        </div>
      ) : (
        <FakeGPTChatBox />
      )}
    </div>
  );
}
