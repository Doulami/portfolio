"use client";

import { useEffect, useState } from "react";
import IntroPanel from "./IntroPanel";
import PortfolioContent from "./PortfolioContent";

export default function CardLeft({ flipOverride = false, resetFlip = () => {} }) {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    if (flipOverride) {
      setFlipped(true);
      resetFlip();
    }
  }, [flipOverride]);

  return (
    <div className="w-full flex items-center justify-center p-6">
      <div className="w-full max-w-4xl shadow-lg p-6 text-white flex flex-col">
        {/* Flip Card */}
        <div className="relative w-full perspective h-[520px]">
          <div
            className={`w-full h-full transition-transform duration-700 transform-style preserve-3d ${
              flipped ? "rotate-y-180" : ""
            }`}
          >
            {/* Front – Intro */}
            <div className="absolute top-0 left-0 w-full h-full backface-hidden rounded-xl overflow-hidden bg-slate-900 text-white">
              <IntroPanel />
            </div>

            {/* Back – Portfolio */}
            <div className="absolute top-0 left-0 w-full h-full rotate-y-180 backface-hidden bg-white text-black p-4 rounded-xl overflow-y-auto">
              <PortfolioContent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
