"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

const faces = [
  { id: "face1", label: "CTO / Developer", bg: "#0f1e17" },
  { id: "face2", label: "Entrepreneur", bg: "#11303d" },
  { id: "face3", label: "Multiskill / Ideas", bg: "#1b103f" },
  { id: "face4", label: "Other", bg: "#251b2e" },
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
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      <div
        ref={cubeRef}
        className="w-full h-full absolute transition-transform"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateY(${index * -90}deg)`,
        }}
      >
        {faces.map((face, i) => (
          <div
            key={face.id}
            className="absolute w-screen h-screen flex items-center justify-center text-4xl font-bold text-neon"
            style={{
              backgroundColor: face.bg,
              transform: `rotateY(${i * 90}deg) translateZ(100vw)`,
              transformOrigin: "center center",
              backfaceVisibility: "hidden",
            }}
          >
            {face.label}
          </div>
        ))}
      </div>

      {/* Top-right "Next" button */}
      <div className="absolute top-4 right-4 z-20">
        <button
          onClick={() => rotateCube(1)}
          className="bg-[#00ff88] text-black font-bold px-4 py-2 rounded"
        >
          ➤ Next
        </button>
      </div>
    </div>
  );
}
