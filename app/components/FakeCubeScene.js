"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

const faces = [
  {
    id: "face1",
    label: "CTO / Developer",
    bg: "#182825",
    content: (
      <div className="text-center space-y-4">
        <p className="text-xl text-neon text-opacity-75">
          Experienced in AWS, WordPress, React & server ops.
        </p>
        <a
          href="/#projects"
          className="inline-block mt-2 px-6 py-3 bg-neon text-black font-semibold rounded hover:opacity-90"
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
        <p className="text-xl text-neon text-opacity-75">
          Built and sold multiple digital products and plugins.
        </p>
        <a
          href="/#plugins"
          className="inline-block mt-2 px-6 py-3 bg-neon text-black font-semibold rounded hover:opacity-90"
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
        <p className="text-xl text-neon text-opacity-75">
          Concepts across AI, travel, merch, SaaS, and tools.
        </p>
        <a
          href="/#ideas"
          className="inline-block mt-2 px-6 py-3 bg-neon text-black font-semibold rounded hover:opacity-90"
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
        <p className="text-xl text-neon text-opacity-75">
          Want to collaborate or hire me? Let’s connect.
        </p>
        <a
          href="/#contact"
          className="inline-block mt-2 px-6 py-3 bg-neon text-black font-semibold rounded hover:opacity-90"
        >
          Contact Me
        </a>
      </div>
    ),
  },
];

export default function FakeCubeScene() {
  const cubeRef = useRef();
  const containerRef = useRef();
  const [angle, setAngle] = useState(0);

  const rotateCube = (dir = 1) => {
    const newAngle = angle + dir * -90;
    gsap.to(cubeRef.current, {
      rotateY: newAngle,
      duration: 0.8,
      ease: "power2.inOut",
    });
    setAngle(newAngle);
  };

  const getIndexFromAngle = (a) => ((Math.round(a / -90) % faces.length) + faces.length) % faces.length;
  const currentFace = faces[getIndexFromAngle(angle)];

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") rotateCube(1);
      if (e.key === "ArrowLeft") rotateCube(-1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [angle]);

  // Drag/Swipe detection
  useEffect(() => {
    let startX = null;

    const onStart = (e) => {
      startX = e.touches ? e.touches[0].clientX : e.clientX;
    };

    const onEnd = (e) => {
      if (startX === null) return;
      const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
      const diff = endX - startX;

      if (diff > 50) rotateCube(-1); // Swipe right
      else if (diff < -50) rotateCube(1); // Swipe left

      startX = null;
    };

    const el = containerRef.current;
    el.addEventListener("mousedown", onStart);
    el.addEventListener("mouseup", onEnd);
    el.addEventListener("touchstart", onStart, { passive: true });
    el.addEventListener("touchend", onEnd);

    return () => {
      el.removeEventListener("mousedown", onStart);
      el.removeEventListener("mouseup", onEnd);
      el.removeEventListener("touchstart", onStart);
      el.removeEventListener("touchend", onEnd);
    };
  }, [angle]);

  return (
    <div
      ref={containerRef}
      className="relative w-screen h-screen overflow-hidden"
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
