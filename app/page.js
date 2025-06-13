"use client";

import { useState } from "react";
import CardLeft from "./components/CardLeft";
import CardRight from "./components/CardRight";
import IntroOverlay from "./components/IntroOverlay";


export default function HomePage() {
  const [showContent, setShowContent] = useState(false);
  const [flipGPT, setFlipGPT] = useState(false);
  

  return (
    <main className="relative w-full h-screen overflow-hidden bg-slate-900 text-white font-sans">
  {/* 🔵 Overlay - Z-Index + Fullscreen */}
  { !showContent && (
    <div className="absolute inset-0 z-50">
      <IntroOverlay onFinish={() => setShowContent(true)} />
    </div>
  )}

  { showContent && (
    <>
      <div className="flex flex-col lg:flex-row w-full h-full z-0">
        <div className="w-full lg:w-[60%] h-full">
          <CardLeft flipOverride={flipGPT} resetFlip={() => setFlipGPT(false)} />
        </div>
        <div className="w-full lg:w-[40%] h-full">
          <CardRight flipOverride={flipGPT} resetFlip={() => setFlipGPT(false)} />
        </div>
      </div>

      {/* 🟢 Floating Flip Button */}
      <button
        onClick={() => setFlipGPT(prev => !prev)}
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-56 h-156 rounded-full bg-white-500 hover:bg-blue-600 text-white glow-button glow-pulse flex items-center justify-center z-40 shadow-xl"
        aria-label="Flip Assistant"
      >
        {/* Assistant icon or chat */}
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v12a2 2 0 01-2 2z" />
        </svg>
      </button>
    </>
  )}
</main>

  );
}
