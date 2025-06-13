"use client";

import HighlightWord from "./HighlightWord";

export default function IntroPanel({ flipped }) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-full max-w-4xl perspective h-[520px]">
        <div
          className={`w-full h-full transition-transform duration-700 transform-style preserve-3d ${
            flipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Front Side */}
          <div className="absolute top-0 left-0 w-full h-full backface-hidden text-left p-6">
            <p className="lg:text-[50px] text-[25px] leading-tight">
              Hello, I’m <HighlightWord image="/images/khaleddoulami.jpg">Khaled Doulami</HighlightWord>, an experienced{" "}
              <HighlightWord>full-stack developer</HighlightWord> and{" "}
              <HighlightWord>hands-on CTO</HighlightWord>.
            </p>

            <p className="mt-4">
              Based in <HighlightWord image="/images/london.jpg">London</HighlightWord>, I build scalable tools, launch products, and keep clients happy.
            </p>

            <p className="mt-4">
              Explore my <HighlightWord>portfolio</HighlightWord> or ask me anything on the right.
            </p>

            <p className="mt-4">
              Contact? <HighlightWord>doulami.khaled@gmail.com</HighlightWord>
            </p>
          </div>

          {/* Back Side */}
          <div className="absolute top-0 left-0 w-full h-full rotate-y-180 backface-hidden text-center p-6">
            <p className="lg:text-[40px] text-[22px] mt-10">
              This is my <span className="font-bold text-green-400">CV in motion</span>.
            </p>
            <p className="mt-4 text-lg">
              Ask my assistant anything — or flip back to meet me!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
