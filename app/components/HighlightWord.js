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

  return (return (
  <span
    onMouseEnter={() => console.log("🟢 HOVER ENTER")}
    onMouseLeave={() => console.log("🔴 HOVER LEAVE")}
    className="cursor-pointer bg-red-500 text-white px-2 py-1 inline-block"
  >
    Test Hover
  </span>
););
}
