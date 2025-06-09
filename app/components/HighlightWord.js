import React from "react";
import "./../styles/hoverWords.css";

export default function HighlightWord({ children, image }) {
  return (
    <span className="relative group inline-block font-bold text-[#d9ff00]">
      <span className="z-10 relative">{children}</span>
      {image && (
        <img
          src={image}
          alt=""
          className="highlight-image absolute top-1/2 left-1/2 w-32 h-32 object-cover rounded-full opacity-0 scale-50 group-hover:opacity-60 group-hover:scale-100 transition-all duration-500 pointer-events-none"
          style={{ transform: "translate(-50%, -50%)", zIndex: 0 }}
        />
      )}
    </span>
  );
}
