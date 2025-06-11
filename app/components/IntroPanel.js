"use client";

import { useState } from "react";
import FakeGPTChatBox from "./FakeGPTChatBox";
//import PortfolioContent from "./PortfolioContent"; // Will be replaced by CVSwitcher
import CVSwitcher from "./CVSwitcher"; // Placeholder for now

export default function GPTCard({ flipOverride = false, resetFlip = () => {} }) {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    if (flipOverride) {
      setFlipped(true);
      resetFlip();
    }
  }, [flipOverride]);
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6">
      <div className="relative w-full max-w-3xl aspect-[4/3] perspective">
        <div
          className={`w-full h-full transition-transform duration-700 transform-style preserve-3d ${
            flipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Front – GPT Chat */}
          <div className="absolute w-full h-full backface-hidden">
            <FakeGPTChatBox />
          </div>

          {/* Back – CV Switcher */}
          <div className="absolute w-full h-full rotate-y-180 backface-hidden overflow-y-auto bg-white text-black p-4 rounded-xl">
            <CVSwitcher />
          </div>
        </div>
      </div>

      {/* Flip Button */}
      <button
        onClick={() => setFlipped(!flipped)}
        className="mt-4 bg-green-700 text-white px-5 py-2 rounded hover:bg-green-600"
      >
        {flipped ? "Back to Chat" : "Read My CV"}
      </button>
    </div>
  );
}
