"use client";
import HighlightWord from "./HighlightWord";

export default function IntroPanel() {
  return (
    <div className="w-full h-full flex flex-col justify-center px-6 lg:px-20 text-left text-white">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
        Hi, I’m <HighlightWord image="/images/khaleddoulami.jpg">Khaled Doulami</HighlightWord>.
      </h1>

      <h2 className="text-xl sm:text-2xl text-gray-300 mb-4">
        CTO · Developer · Nomad
      </h2>

      <p className="text-base sm:text-lg text-gray-400 mb-8 max-w-xl">
        I build scalable tools and products for the web.
      </p>

      <a
        href="#cv"
        className="inline-block px-6 py-3 rounded-full bg-sky-500 hover:bg-sky-600 text-white font-medium shadow glow-button transition"
      >
        Visit CV
      </a>
    </div>
  );
}