import React, { useState, useRef } from "react";
import "../../styles/hoverWords.css";

export default function HighlightWord({ children, image, linkText, href }) {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const containerRef = useRef();

  const onMouseMove = (e) => {
    console.log("MouseMove inside highlight:", e.clientX, e.clientY);
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    const percX = offsetX / rect.width;
    const percY = offsetY / rect.height;

    setPos({
      x: (1 - percX) * 100,
      y: (1 - percY) * 100,
    });
  };

  const onMouseEnter = () => {
    console.log("Hover start on:", children);
  };

  const onMouseLeave = () => {
    console.log("Hover end on:", children);
  };

  return (
    <span
      ref={containerRef}
      className={`relative inline-block group font-bold ${
        linkText ? "text-neon text-opacity-75 cursor-pointer" : "text-white"
      }`}
      onMouseMove={image ? onMouseMove : undefined}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span className="relative z-10">{children}</span>

      {/* Image circle for city/name */}
      {image && (
        <span
          className="highlight-image absolute top-0 left-full ml-4 w-32 h-32 rounded-full opacity-0 scale-75 group-hover:opacity-90 group-hover:scale-100 transition-all duration-500 pointer-events-none z-0"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: `${pos.x}% ${pos.y}%`,
          }}
        />
      )}

      {/* Link circle */}
      {linkText && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-0 left-full ml-4 flex items-center justify-center w-24 h-24 rounded-full bg-white text-green-900 font-semibold opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 pointer-events-auto z-10"
        >
          {linkText === "GitHub" ? (
            <img
              src="/images/github.png"
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
