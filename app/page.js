"use client";

import { useState } from "react";
import IntroOverlay from "./components/IntroOverlay";
import IntroPanel from "./components/IntroPanel";
import GPTCard from "./components/GPTCard";

export default function HomePage() {
  const [showContent, setShowContent] = useState(false);
  const [flipGPT, setFlipGPT] = useState(false);

  return (
    <main className="w-full h-screen overflow-hidden bg-zinc-900 text-white font-sans">
      {!showContent && (
        <IntroOverlay onFinish={() => setShowContent(true)} />
      )}

      {showContent && (
        <div className="flex flex-col lg:flex-row w-full h-full">
          {/* 🟩 Left Panel: Intro */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
            <IntroPanel onFlip={() => setFlipGPT(true)} />
          </div>

          {/* 🟦 Right Panel: GPT & CV */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
            <GPTCard flipOverride={flipGPT} resetFlip={() => setFlipGPT(false)} />
          </div>
        </div>
      )}
    </main>
  );
}
