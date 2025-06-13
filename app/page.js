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
  className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full text-white border border-[#00CFFF] hover:shadow-[0_0_15px_#00CFFF] shadow-[0_0_8px_#00CFFF] transition-all duration-300 z-50"
  aria-label={flipGPT ? "Back to Intro" : "Visit CV"}
  title={flipGPT ? "Back to Intro" : "Visit CV"}
>
  <span className="text-xs text-center font-semibold">
    {flipGPT ? "Back to Intro" : "Visit CV"}
  </span>
</button>
    </>
  )}
</main>

  );
}
