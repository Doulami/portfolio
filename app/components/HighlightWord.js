"use client";

import React, { useState, useRef } from "react";
import "@/styles/hoverWords.css";
import HoverPortal from "./HoverPortal";

export default function HighlightWord({ children, image, linkText, href }) {
  const containerRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });

  const onMouseMove = (e) => {
    setHoverPos({ x: e.clientX + 12, y: e.clientY + 12 }); // soft offset
  };

  const onMouseEnter = () => {
    setHovered(true);
    console.log("Hover start on:", children);
  };

  const onMouseLeave = () => {
    setHovered(false);
    console.log("Hover end on:", children);
  };

  const shouldShow = hovered && (image || linkText);

  return (
    <span
      ref={containerRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseMove={(e) => {
        if (image || linkText) onMouseMove(e);
      }}
      className={`relative inline-block group font-bold cursor-pointer ${
        linkText || image ? "text-neon text-opacity-75" : "text-white"
      }`}
    >
      {children}

      {shouldShow && (
        <HoverPortal x={hoverPos.x} y={hoverPos.y}>
          <div
            className="w-64 h-64 rounded-full shadow-lg flex items-center justify-center font-semibold transform scale-75 opacity-0 transition-all duration-300 pointer-events-none animate-fade-in"
            style={{
              backgroundColor: "white",
            }}
          >
            {image ? (
              <div
                className="w-full h-full rounded-full"
                style={{
                  backgroundColor: "white", // for transparency fallback
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            ) : (
              <span className="text-green-900">Visit</span>
            )}
          </div>
        </HoverPortal>
      )}

      {linkText && !image && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="sr-only"
        >
          {linkText}
        </a>
      )}
    </span>
  );
}
