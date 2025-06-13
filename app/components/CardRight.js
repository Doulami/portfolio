"use client";

import { useState, useEffect } from "react";
import FakeGPTChatBox from "./FakeGPTChatBox";
import RobotScene from "./RobotScene";

export default function CardRight({ flipOverride = false, resetFlip = () => {} }) {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    if (flipOverride) {
      setFlipped(true);
      resetFlip();
    }
  }, [flipOverride]);

  return (
    <div className="w-full h-full flex items-center justify-center p-6">
      <div className="w-full h-full max-w-3xl shadow-lg p-6 text-white flex flex-col">
        {/* Flip Card Container */}
        <div className="relative w-full h-full perspective">
          <div
            className={`relative w-full h-full transition-transform duration-700 transform-style preserve-3d ${
              flipped ? "rotate-y-180" : ""
            }`}
          >
            {/* Front – Robot */}
            <div className="absolute top-0 left-0 w-full h-full backface-hidden rounded-xl overflow-hidden bg-[#0B0F1A]">
              {/* Glowing BG Image */}
              <img
                src="/images/robotbg.png"
                alt="glow"
                className="absolute bottom-[8%] w-[40vw] max-w-[300px] z-0 pointer-events-none select-none glow-pulse"
              />
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <RobotScene />
              </div>
            </div>

            {/* Back – GPT Chat */}
            <div className="absolute top-0 left-0 w-full h-full rotate-y-180 backface-hidden bg-white text-black p-4 rounded-xl overflow-y-auto">
              <FakeGPTChatBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
