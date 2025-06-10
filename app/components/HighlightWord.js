// app/components/HighlightWord.js
"use client";

import React, { useState, useRef } from "react";
import "@/styles/hoverWords.css";
import HoverPortal from "./HoverPortal";

export default function HighlightWord({ children, image, linkText, href }) {
  const containerRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });

  const onMouseMove = (e) => {
    setHoverPos({ x: e.clientX + 24, y: e.clientY - 24 });
  };

  const onMouseEnter = () => {
    setHovered(true);
    console.log("Hover start on:", children);
  };

  const onMouseLeave = () => {
    setHovered(false);
    console.log("Hover end on:", children);
  };

  return (
    <span
      ref={containerRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseMove={(e) => {
        if (image) onMouseMove(e);
      }}
      className={`relative inline-block group font-bold cursor-pointer ${
        linkText || image ? "text-neon text-opacity-75" : "text-white"
      }`}
    >
      {children}

      {/* Hover Image via Portal */}
      {image && hovered && (
        <HoverPortal x={hoverPos.x} y={hoverPos.y}>
          <div
            className="w-32 h-32 rounded-full opacity-90 scale-100 transition-all duration-500 z-50 shadow-xl"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </HoverPortal>
      )}

      {/* Link Circle (stays in DOM, not in portal) */}
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
  );
}
