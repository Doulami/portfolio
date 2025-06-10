import React, { useState, useRef } from "react";
import "../../styles/hoverWords.css";

export default function HighlightWord({ children, image, linkText, href }) {
    console.log("HighlightWord rendered:", children);

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
    onMouseMove={onMouseMove}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    style={{
      background: "rgba(0,255,0,0.05)",
      padding: "4px",
      display: "inline-block",
    }}
    className="font-bold text-white"
  >
    {children}
  </span>
);

}
