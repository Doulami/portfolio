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
  className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 text-white glow-button glow-pulse flex items-center justify-center z-40 shadow-xl"
  aria-label={flipGPT ? "Back to Intro" : "Visit CV"}
  title={flipGPT ? "Back to Intro" : "Visit CV"} // Optional tooltip
>
 <span className="text-xs text-center leading-tight font-semibold">
  {flipGPT ? "Back to Intro" : "Visit CV"}
</span>
</button>
    </>
  )}
</main>

  );
}
