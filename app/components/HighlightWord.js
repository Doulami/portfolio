// app/components/HighlightWord.js
"use client";

import React, { useState, useRef } from "react";
import "@/styles/hoverWords.css";

export default function HighlightWord({ children, image, linkText, href }) {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const containerRef = useRef();

  const onMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    const percX = offsetX / rect.width;
    const percY = offsetY / rect.height;
    setPos({ x: (1 - percX) * 100, y: (1 - percY) * 100 });
  };
    const onMouseEnter = () => console.log("Hover start on:", children);
  const onMouseLeave = () => console.log("Hover end on:", children);


   return (
    <>
    <span
  style={{
    position: "absolute",
    top: "2rem",
    left: "100%",
    background: "red",
    color: "white",
    padding: "10px",
    zIndex: 99999,
  }}
>
  TOOLTIP TEST
</span>
  <span
    ref={containerRef}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onMouseMove={image ? onMouseMove : undefined}
    className={`relative inline-block group font-bold cursor-pointer ${
      linkText || image ? "text-neon text-opacity-75" : "text-white"
    }`}
  >
    {children} {/* <-- Keep child directly here, not inside inner span */}

    {/* Floating image on hover */}
    {image && (
      <span
        className="z-[9999] highlight-image absolute top-0 left-0 translate-x-full ml-4 w-32 h-32 rounded-full opacity-0 scale-75 group-hover:opacity-90 group-hover:scale-100 transition-all duration-500 "
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: `${pos.x}% ${pos.y}%`,
        }}
      />
    )}

    {/* Link bubble on hover */}
    {linkText && (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="z-[9999] absolute top-0 left-0 translate-x-full ml-4 flex items-center justify-center w-24 h-24 rounded-full bg-white text-green-900 font-semibold opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500"
      >
        {linkText === "GitHub" ? (
          <img
            src="/images/git_hub.png"
            alt="GitHub"
            className="w-12 h-12"
            draggable={false}
          />
        ) : (
          linkText
        )}
      </a>
    )}
  </span>
  
</>
);

}
