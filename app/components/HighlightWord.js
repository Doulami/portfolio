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
  
  
</>
);

}
