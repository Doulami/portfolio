"use client";

import { useState } from "react";
import FakeGPTChatBox from "./FakeGPTChatBox";
import PortfolioContent from "./PortfolioContent";
import HighlightWord from "./HighlightWord";

export default function GPTCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-4 py-12 text-neon">

      {/* 🔹 Visible Intro Text */}
      <div className="w-full max-w-3xl text-center mb-8 space-y-2">
        <p>
          Hello, I’m <HighlightWord image="/images/khaleddoulami.jpg">Khaled Doulami</HighlightWord>, a{" "}
          <HighlightWord>hands-on CTO</HighlightWord>,{" "}
          <HighlightWord>entrepreneur</HighlightWord>, and{" "}
          <HighlightWord>creative technologist</HighlightWord>.
        </p>
        <p>
          I’ve built platforms, led dev teams, launched products, and designed scalable solutions.
        </p>
        <p>
          Ask me anything below — or{" "}
          <span className="underline cursor-pointer" onClick={() => setFlipped(true)}>flip to my CV</span>.
        </p>
      </div>

      {/* 🔁 Flip Box */}
      <div className="relative w-full max-w-3xl aspect-[4/3] perspective mb-4">
        <div className={`w-full h-full transition-transform duration-700 transform-style preserve-3d ${flipped ? "rotate-y-180" : ""}`}>
          {/* Front – Chat */}
          <div className="absolute top-0 left-0 w-full h-full backface-hidden">
            <FakeGPTChatBox />
          </div>

          {/* Back – Portfolio */}
          <div className="absolute top-0 left-0 w-full h-full rotate-y-180 backface-hidden overflow-y-auto">
            <PortfolioContent />
          </div>
        </div>
      </div>

      {/* 🔘 Flip Button */}
      <button
        onClick={() => setFlipped(!flipped)}
        className="mt-2 bg-green-700 text-white px-5 py-2 rounded hover:bg-green-600"
      >
        {flipped ? "Back to Chat" : "Read My CV"}
      </button>
    </div>
  );
}
