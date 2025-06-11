"use client";

import { useState } from "react";
import HighlightWord from "../HighlightWord";
import FakeGPTChatBox from "../FakeGPTChatBox";
import PortfolioContent from "../PortfolioContent";

export default function FaceCTO() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="w-full h-full flex flex-col items-center justify-start px-4 py-10 text-neon overflow-y-auto">

      {/* ✅ Everything stays INSIDE the cube face container now */}
      <div className="w-full max-w-3xl space-y-6">

        {/* 🔹 Intro stays above chat */}
        <div className="text-center">
          <p>
            Hello, I’m <HighlightWord image="/images/khaleddoulami.jpg">Khaled Doulami</HighlightWord>, a{" "}
            <HighlightWord>hands-on CTO</HighlightWord>,{" "}
            <HighlightWord>entrepreneur</HighlightWord>, and{" "}
            <HighlightWord>creative technologist</HighlightWord>.
          </p>
          <p>
            I’ve built platforms, led teams, launched startups, and designed scalable tech.
          </p>
          <p>
            Curious about my skills? Ask below or{" "}
            <span className="underline cursor-pointer" onClick={() => setFlipped(true)}>flip to my CV</span>.
          </p>
        </div>

        {/* 🔁 Flip Box */}
        <div className="relative w-full aspect-[4/3] perspective">
          <div className={`w-full h-full transition-transform duration-700 transform-style preserve-3d ${flipped ? "rotate-y-180" : ""}`}>

            {/* Front - GPT */}
            <div className="absolute top-0 left-0 w-full h-full backface-hidden">
              <FakeGPTChatBox />
            </div>

            {/* Back - Portfolio */}
            <div className="absolute top-0 left-0 w-full h-full rotate-y-180 backface-hidden overflow-y-auto">
              <PortfolioContent />
            </div>
          </div>
        </div>

        {/* 🔘 Flip Button */}
        <div className="text-center">
          <button
            onClick={() => setFlipped(!flipped)}
            className="mt-4 bg-green-700 text-white px-5 py-2 rounded hover:bg-green-600"
          >
            {flipped ? "Back to Chat" : "Read My CV"}
          </button>
        </div>
      </div>
    </div>
  );
}
