"use client";

import React, { useState, useRef } from "react";
import "@/styles/hoverWords.css";
import HoverPortal from "./HoverPortal";

export default function HighlightWord({ children, image, linkText, href }) {
  const containerRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });

  const bubbleSize = 128; // match w-32 h-32

  const onMouseMove = (e) => {
    setHoverPos({
      x: e.clientX - bubbleSize / 2,
      y: e.clientY - bubbleSize / 2,
    });
  };

  const onMouseEnter = () => {
    setHovered(true);
  };

  const onMouseLeave = () => {
    setHovered(false);
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
        linkText || image ? "text-[#00CFFF] text-shadow-glow" : "text-white"
      }`}
    >
      {children}

      {shouldShow && (
        <HoverPortal x={hoverPos.x} y={hoverPos.y}>
          <div
            className="w-32 h-32 rounded-full shadow-lg flex items-center justify-center font-semibold transform scale-75 opacity-0 transition-all duration-300 pointer-events-none animate-fade-in"
            style={{ backgroundColor: "white" }}
          >
            {image ? (
              <div
                className="w-full h-full rounded-full"
                style={{
                  backgroundColor: "white",
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
