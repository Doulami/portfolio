"use client";

import { useState, useEffect } from "react";
import FakeGPTChatBox from "./FakeGPTChatBox";
import CVSwitcher from "./CVSwitcher";

export default function GPTCard({ flipOverride = false, resetFlip = () => {} }) {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    if (flipOverride) {
        console.log("flipOverride triggered");

      setFlipped(true);
      resetFlip();
    }
  }, [flipOverride]);

  return (
    <div className="w-full flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-black/80 rounded-xl shadow-lg p-6 text-green-400 flex flex-col">

        {/* Flip Card */}
        <div className="relative w-full perspective h-[520px]">
          <div
            className={`w-full h-full transition-transform duration-700 transform-style preserve-3d ${
              flipped ? "rotate-y-180" : ""
            }`}
          >
            {/* Front – Chat */}
            <div className="absolute top-0 left-0 w-full h-full backface-hidden rounded-xl overflow-hidden">
              <FakeGPTChatBox />
            </div>

            {/* Back – CV Switcher */}
            <div className="absolute top-0 left-0 w-full h-full rotate-y-180 backface-hidden overflow-y-auto bg-white text-black p-4 rounded-xl">
              <CVSwitcher />
            </div>
          </div>
        </div>

        {/* Flip Button */}
        <button
          onClick={() => setFlipped(!flipped)}
          className="mt-6 bg-green-700 text-white px-5 py-2 rounded hover:bg-green-600"
        >
          {flipped ? "Back to Chat" : "Read My CV"}
        </button>
      </div>
    </div>
  );
}
