"use client";

import { useState } from "react";
import IntroOverlay from "./components/IntroOverlay";
import CardLeft from "./components/CardLeft";
import CardRight from "./components/CardRight";

export default function HomePage() {
  const [showContent, setShowContent] = useState(false);
  const [flipGPT, setFlipGPT] = useState(false);
  

  return (
    <main className="w-full h-screen overflow-hidden bg-slate-900 text-white font-sans">
      {!showContent && (
<CardLeft flipOverride={flipGPT} resetFlip={() => setFlipGPT(false)} />
      )}

      {showContent && (
        <div className="flex flex-col lg:flex-row w-full h-full">
          {/* 🟩 Left Panel: Intro */}
          <div className="w-full lg:w-[60%] flex items-center justify-center p-6">
            <IntroPanel flipped={flipGPT} />
          </div>

          {/* 🟦 Right Panel: GPT & CV */}
          <div className="w-full lg:w-[40%] flex items-center justify-center p-6">
            <CardRight
  key="gpt"
  flipOverride={flipGPT}
  resetFlip={() => setFlipGPT(false)}
/>
          </div>
        </div>
        
      )}
      {showContent && (
<button
  onClick={() => setFlipGPT(prev => !prev)}
  className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 text-white glow-button glow-pulse flex items-center justify-center z-50 shadow-xl"
  aria-label="Flip Assistant"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 4h10M5 11h14M8 15v4m8-4v4m-9-4h10" />
  </svg>
</button>
)}
    </main>
  );
}
