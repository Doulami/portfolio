"use client";

import HighlightWord from "./HighlightWord";

export default function IntroPanel() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-start gap-6 text-left p-6 lg:p-12">
      <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-white">
        Hi, I’m <span className="text-[#00CFFF]">Khaled Doulami</span>.
      </h1>

      <h2 className="text-xl lg:text-2xl text-gray-300">
        CTO · Developer · Nomad
      </h2>

      <p className="text-base lg:text-lg text-gray-400 max-w-xl">
        I build scalable tools, products, and websites with modern tech. You can explore my portfolio or{" "}
        <HighlightWord linkText="talk to my assistant" href="#">
          ask me anything.
        </HighlightWord>
      </p>
    </div>
  );
}
