"use client";

import { useState } from "react";
import HighlightWord from "../HighlightWord";
import FakeGPTChatBox from "../FakeGPTChatBox";
import PortfolioContent from "../PortfolioContent";

export default function FaceCTO() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="w-full h-full flex flex-col items-center justify-start px-4 py-12 text-center text-neon overflow-y-auto relative z-10">

      {/* 🔹 Intro stays above chat */}
      <div className="mb-6 max-w-3xl">
        <p>
          Hello, I’m <HighlightWord image="/images/khaleddoulami.jpg">Khaled Doulami</HighlightWord>, a{" "}
          <HighlightWord>hands-on CTO</HighlightWord>,{" "}
          <HighlightWord>entrepreneur</HighlightWord>, and{" "}
          <HighlightWord>creative technologist</HighlightWord>.
        </p>
        <p>I’ve built web platforms, led dev teams, launched startups, and designed products at scale.</p>
        <p>Curious about my skills or work? Just ask below or flip to my CV.</p>
      </div>

      {/* 🔄 Flip Container – fixed height */}
      <div className="relative w-full max-w-3xl h-[400px] perspective mb-4">
        <div className={`w-full h-full transition-transform duration-700 transform-style preserve-3d ${flipped ? "rotate-y-180" : ""}`}>
          
          {/* Front - Chat */}
          <div className="absolute w-full h-full backface-hidden">
            <FakeGPTChatBox />
          </div>

          {/* Back - Portfolio */}
          <div className="absolute w-full h-full rotate-y-180 backface-hidden overflow-y-auto">
            <PortfolioContent />
          </div>
        </div>
      </div>

      {/* 🔘 Flip Button */}
      <button
        onClick={() => setFlipped(!flipped)}
        className="bg-green-700 text-white px-5 py-2 rounded hover:bg-green-600"
      >
        {flipped ? "Back to Chat" : "Read My CV"}
      </button>
    </div>
  );
}
