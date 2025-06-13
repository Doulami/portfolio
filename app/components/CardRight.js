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
    <div className="w-full h-full flex flex-col justify-between bg-[#F9FAFB] text-black p-6 relative">
      {!flipped ? (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* 💬 Speech Bubble */}
          <div className="absolute top-8 right-6 bg-white border border-gray-200 rounded-lg px-4 py-2 shadow-md text-sm font-medium text-gray-700 z-20 animate-pulse">
            Ask me anything
          </div>

          {/* 🤖 Robot */}
          <RobotScene />
        </div>
      ) : (
        <FakeGPTChatBox />
      )}
    </div>
  );
}
