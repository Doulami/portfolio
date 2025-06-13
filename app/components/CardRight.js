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
        <div className="relative w-full h-full flex items-center justify-center bg-[#0f172a] overflow-hidden">
      <RobotScene />

      {/* 💬 Speech bubble – now floats properly */}
      <div className="absolute top-6 right-6 z-50">
        <div className="bg-white text-black px-4 py-2 text-sm rounded-full shadow-md">
          Ask me anything
        </div>
      </div>
    </div>
      ) : (
        <FakeGPTChatBox />
      )}
    </div>
  );
}
