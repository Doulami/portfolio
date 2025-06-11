"use client";

import { useState } from "react";
import FakeGPTChatBox from "./FakeGPTChatBox";
import PortfolioContent from "./PortfolioContent";

export default function GPTCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 text-neon">
      <div className="w-full max-w-3xl space-y-6">
        {/* Flip Container */}
        <div className="relative w-full aspect-[4/3] perspective">
          <div
            className={`w-full h-full transition-transform duration-700 transform-style preserve-3d ${flipped ? "rotate-y-180" : ""}`}
          >
            <div className="absolute top-0 left-0 w-full h-full backface-hidden">
              <FakeGPTChatBox />
            </div>
            <div className="absolute top-0 left-0 w-full h-full rotate-y-180 backface-hidden overflow-y-auto">
              <PortfolioContent />
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => setFlipped(!flipped)}
            className="bg-green-700 text-white px-5 py-2 rounded hover:bg-green-600"
          >
            {flipped ? "Back to Chat" : "Read My CV"}
          </button>
        </div>
      </div>
    </div>
  );
}
