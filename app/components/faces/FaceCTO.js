"use client";

import { useState } from "react";
import HighlightWord from "../HighlightWord";
import FakeGPTChatBox from "../FakeGPTChatBox";
import PortfolioContent from "../PortfolioContent";

export default function FaceCTO() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="absolute w-full h-full flex flex-col items-center justify-start px-4 py-12 text-center text-neon overflow-y-auto"
      style={{ position: "relative", zIndex: 10 }}
    >
      {/* 👋 Intro stays on top */}
      <div className="mb-8 max-w-3xl">
        <p>
          Hello, I’m <HighlightWord image="/images/khaleddoulami.jpg">Khaled Doulami</HighlightWord>, a{" "}
          <HighlightWord>hands-on CTO</HighlightWord>,{" "}
          <HighlightWord>entrepreneur</HighlightWord>, and{" "}
          <HighlightWord>creative technologist</HighlightWord>.
        </p>
        <p>
          I’ve built web platforms, led dev teams, launched startups, and designed products at scale.
        </p>
        <p>
          Curious about my skills or work? Just ask below or{" "}
          <span className="underline cursor-pointer" onClick={() => setFlipped(true)}>flip to my CV</span>.
        </p>
      </div>

      {/* 🔁 Flip Container */}
      <div className="relative w-full max-w-3xl mx-auto perspective">
        <div className={`transition-transform duration-700 transform-style preserve-3d ${flipped ? "rotate-y-180" : ""}`}>
          {/* Front – GPT */}
          <div className="absolute w-full backface-hidden">
            <FakeGPTChatBox />
          </div>

          {/* Back – CV */}
          <div className="absolute w-full rotate-y-180 backface-hidden">
            <PortfolioContent />
          </div>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setFlipped(!flipped)}
          className="mt-4 bg-green-700 text-white px-4 py-1 rounded"
        >
          {flipped ? "Back to Chat" : "Read My CV"}
        </button>
      </div>
    </div>
  );
}
