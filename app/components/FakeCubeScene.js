"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

import FaceCTO from "./faces/FaceCTO";
import FaceEntrepreneur from "./faces/FaceEntrepreneur";
import FaceIdeas from "./faces/FaceIdeas";
import FaceOther from "./faces/FaceOther";

const faces = [
  { id: "face1", label: "CTO / Developer", bg: "#182825", ContentComponent: FaceCTO },
  { id: "face2", label: "Entrepreneur", bg: "#11303d", ContentComponent: FaceEntrepreneur },
  { id: "face3", label: "Multiskill / Ideas", bg: "#1b103f", ContentComponent: FaceIdeas },
  { id: "face4", label: "Other", bg: "#251b2e", ContentComponent: FaceOther },
];
export default function FakeCubeScene() {
  const cubeRef = useRef();
  const containerRef = useRef();
  const [angle, setAngle] = useState(0);

  const rotateCubeTo = (targetAngle) => {
    gsap.to(cubeRef.current, {
      rotateY: targetAngle,
      duration: 0.8,
      ease: "power2.inOut",
      force3D: false,
    });
    setAngle(targetAngle);
  };

  const rotateStep = (dir = 1) => {
    rotateCubeTo(angle + dir * -90);
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") rotateStep(1);
      if (e.key === "ArrowLeft") rotateStep(-1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [angle]);

  const getIndexFromAngle = (a) =>
    ((Math.round(a / -90) % faces.length) + faces.length) % faces.length;

  const currentFace = faces[getIndexFromAngle(angle)];

  return (
    <div
      ref={containerRef}
      className="relative w-screen h-screen overflow-hidden select-none"
      style={{ perspective: "2000px", backgroundColor: currentFace.bg }}
    >
      <div
        ref={cubeRef}
        className="w-full h-full absolute transition-transform"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateY(${angle}deg)`,
          transformOrigin: "center center",
        }}
      >
        {faces.map((face, i) => (
          <div
            key={face.id}
            className="absolute w-full h-full flex flex-col items-center justify-center px-4 text-center text-neon"
            style={{
              backgroundColor: face.bg,
              transform: `rotateY(${i * 90}deg) translateZ(50vw)`,
              backfaceVisibility: "hidden",
              willChange: "transform",
              transformStyle: "preserve-3d",
              WebkitFontSmoothing: "antialiased",
              textRendering: "optimizeLegibility",
            }}
          >
            <h2
              className="text-4xl font-bold mb-4"
              style={{
                textRendering: "optimizeLegibility",
                WebkitFontSmoothing: "antialiased",
                willChange: "transform",
                backfaceVisibility: "hidden",
              }}
            >
              {face.label}
            </h2>
            {face.content}
          </div>
        ))}
      </div>

      {/* Next button */}
      <div className="absolute top-4 right-4 z-20">
        <button
          onClick={() => rotateStep(1)}
          className="bg-neon text-black font-bold px-4 py-2 rounded"
        >
          ➤ Next
        </button>
      </div>
    </div>
  );
}
