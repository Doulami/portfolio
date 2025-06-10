"use client";
import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

export default function HoverPortal({ children, x, y }) {
  const [mounted, setMounted] = useState(false);
  const portalRef = useRef(null);

  useEffect(() => {
    portalRef.current = document.getElementById("hover-root");
    setMounted(true);
  }, []);

  if (!mounted || !portalRef.current) return null;

  return ReactDOM.createPortal(
    <div
      style={{
        position: "fixed",
        top: y,
        left: x,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    >
      {children}
    </div>,
    portalRef.current
  );
}
