"use client";

import { useState, useEffect } from "react";
import FakeGPTChatBox from "./FakeGPTChatBox";
import CVSwitcher from "./CVSwitcher";
import RobotScene from "./RobotScene";


export default function GPTCard({ flipOverride = false, resetFlip = () => {} }) {
  const [flipped, setFlipped] = useState(false);

useEffect(() => {
  console.log("flipOverride:", flipOverride);
  if (flipOverride) {
    console.log("✅ Flipping now!");
    setFlipped(true);
    resetFlip();
  }
}, [flipOverride]);

  return (
    <div className="w-full flex items-center justify-center p-6">
      <div className="w-full max-w-3xl shadow-lg p-6 text-white flex flex-col">

        {/* Flip Card */}
        <div className="relative w-full perspective h-[520px]">
          <div
            className={`w-full h-full transition-transform duration-700 transform-style preserve-3d ${
              flipped ? "rotate-y-180" : ""
            }`}
          >
            {/* Front – Chat */}
            <div className="absolute top-0 left-0 w-full  h-screen  backface-hidden rounded-xl overflow-hidden">
                <div className="relative w-full h-screen flex items-center justify-center bg-[#0B0F1A]">
                
                {/* 🔵 Glowing Background Image */}
                <img
                    src="/images/robotbg.png"
                    alt="glow"
                    className="absolute bottom-[8%] w-[40vw] max-w-[300px] z-0 pointer-events-none select-none glow-pulse"
                    
                />

                {/* 🤖 Robot Canvas */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <RobotScene />
                </div>

                        </div>   
            </div>

            {/* Back – CV Switcher */}
            <div className="absolute top-0 left-0 w-full h-full rotate-y-180 backface-hidden overflow-y-auto bg-white text-black p-4 rounded-xl">
               <FakeGPTChatBox />
            </div>
          </div>
        </div>

        {/* Flip Button */}
        <button
          onClick={() => setFlipped(!flipped)}
          className="mt-6 bg-green-700 text-gray-200 px-5 py-2 rounded hover:bg-green-600"
        >
          {flipped ? "Read My CV" : "Talk to Me"}
        </button>
      </div>
    </div>
  );
}
