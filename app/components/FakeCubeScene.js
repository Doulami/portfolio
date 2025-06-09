"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

const faces = [
  {
    id: "face1",
    label: "CTO / Developer",
    bg: "#0f1e17",
    content: (
      <div className="text-center space-y-4">
        <p className="text-xl text-[#aaffee]">Experienced in AWS, WordPress, React & server ops.</p>
        <a
          href="/#projects"
          className="inline-block mt-2 px-6 py-3 bg-neon       text-black font-semibold rounded hover:bg-neon      "
        >
          See My Projects
        </a>
      </div>
    ),
  },
  {
    id: "face2",
    label: "Entrepreneur",
    bg: "#11303d",
    content: (
      <div className="text-center space-y-4">
        <p className="text-xl text-[#aaffee]">Built and sold multiple digital products and plugins.</p>
        <a
          href="/#plugins"
          className="inline-block mt-2 px-6 py-3 bg-neon       text-black font-semibold rounded hover:bg-neon"
        >
          Explore Plugins
        </a>
      </div>
    ),
  },
  {
    id: "face3",
    label: "Multiskill / Ideas",
    bg: "#1b103f",
    content: (
      <div className="text-center space-y-4">
        <p className="text-xl text-[#aaffee]">Concepts across AI, travel, merch, SaaS, and tools.</p>
        <a
          href="/#ideas"
          className="inline-block mt-2 px-6 py-3 bg-neon text-black font-semibold rounded hover:bg-neon"
        >
          Browse Concepts
        </a>
      </div>
    ),
  },
  {
    id: "face4",
    label: "Other",
    bg: "#251b2e",
    content: (
      <div className="text-center space-y-4">
        <p className="text-xl text-[#aaffee]">Want to collaborate or hire me? Let’s connect.</p>
        <a
          href="/#contact"
          className="inline-block mt-2 px-6 py-3 bg-neon text-black font-semibold rounded hover:bg-neon"
        >
          Contact Me
        </a>
      </div>
    ),
  },
];

export default function FakeCubeScene() {
  const cubeRef = useRef();
  const [index, setIndex] = useState(0);

  const rotateCube = (dir = 1) => {
    setIndex((prev) => {
      const newIndex = (prev + dir + faces.length) % faces.length;
      const angle = newIndex * -90;
      gsap.to(cubeRef.current, {
        rotateY: angle,
        duration: 1,
        ease: "power2.inOut",
      });
      return newIndex;
    });
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") rotateCube(1);
      if (e.key === "ArrowLeft") rotateCube(-1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div
      className="relative w-screen h-screen overflow-hidden bg-black"
      style={{ perspective: "2000px" }}
    >
      <div
        ref={cubeRef}
        className="w-full h-full absolute transition-transform"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateY(${index * -90}deg)`,
          transformOrigin: "center center",
        }}
      >
        {faces.map((face, i) => (
          <div
            key={face.id}
            className="absolute w-full h-full flex flex-col items-center justify-center px-4 text-center text-[#00ffcc]"
            style={{
              backgroundColor: face.bg,
              transform: `rotateY(${i * 90}deg) translateZ(50vw)`,
              backfaceVisibility: "hidden",
            }}
          >
            <h2 className="text-4xl font-bold mb-4">{face.label}</h2>
            {face.content}
          </div>
        ))}
      </div>

      {/* Next button */}
      <div className="absolute top-4 right-4 z-20">
        <button
          onClick={() => rotateCube(1)}
          className="bg-neon text-black font-bold px-4 py-2 rounded"
        >
          ➤ Next
        </button>
      </div>
    </div>
  );
}
