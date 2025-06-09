"use client";

import { useLayoutEffect, useRef, useState, createElement } from "react";
import gsap from "gsap";

export default function IntroOverlay({ onFinish }) {
  const overlayRef = useRef(null);
  const stripesRef = useRef([]);
  const [isGone, setIsGone] = useState(false);

  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      const orderedStripes = [...stripesRef.current];
      const nameRefs = [
        orderedStripes[2]?.querySelector("h1"), // Khaled
        orderedStripes[3]?.querySelector("h1")  // Doulami
      ];

      const tl = gsap.timeline({
        onComplete: () => {
          setTimeout(() => {
            setIsGone(true);
            if (onFinish) onFinish();
          }, 100); // 0.1s buffer
        },
      });

      gsap.set(orderedStripes, {
        y: "-100%",
        opacity: 0,
        visibility: "hidden",
      });

      gsap.set(nameRefs, {
        y: -80,
        opacity: 0,
        visibility: "hidden",
      });

      // Stripe entrance (together)
      tl.to(orderedStripes, {
        y: "0%",
        opacity: 1,
        visibility: "visible",
        delay: 0.3,
        duration: 0.4,
        ease: "power2.out",
      });

      // Name entrance
      tl.to(nameRefs[0], {
        y: 0,
        opacity: 1,
        visibility: "visible",
        duration: 0.15,
        ease: "power2.out",
      });

      tl.to(nameRefs[1], {
        y: 0,
        opacity: 1,
        visibility: "visible",
        duration: 0.15,
        ease: "power2.out",
      }, "-=0.1");

      // Name exit (Doulami first, then Khaled)
      tl.to(nameRefs[1], {
        y: 80,
        opacity: 0,
        duration: 0.15,
        ease: "power2.in",
      }, "+=0.5");

      tl.to(nameRefs[0], {
        y: 80,
        opacity: 0,
        duration: 0.15,
        ease: "power2.in",
      }, "+=0.1");

      // Stripe exit (cascading)
      tl.to(orderedStripes, {
        y: "100%",
        opacity: 0,
        stagger: 0.05,
        duration: 0.25,
        ease: "power2.inOut",
      });
    });
  }, [onFinish]);

  if (isGone) return null;

  return createElement(
    "div",
    {
      ref: overlayRef,
      className: "fixed inset-0 z-[100] flex flex-col items-start justify-center",
      style: { backgroundColor: "#182825" },
    },
    // Stripes with embedded text
    createElement(
      "div",
      { className: "absolute w-full h-full" },
      [...Array(5)].map((_, i) =>
        createElement(
          "div",
          {
            key: i,
            ref: (el) => {
              if (el) stripesRef.current[i] = el;
            },
            className: "absolute w-full h-1/5 flex items-center pl-10",
            style: {
              top: `${i * 20}%`,
              backgroundColor: "rgb(255,255,0)",
              transform: "translateY(-100%)",
              transformOrigin: "top",
              opacity: 0,
              visibility: "hidden",
            },
          },
          i === 2
            ? createElement(
                "h1",
                {
                  className: "leading-none",
                  style: {
                    fontFamily: '"PolySans", sans-serif',
                    fontWeight: 700,
                    fontSize: "5.25rem",
                    letterSpacing: "-0.05rem",
                    lineHeight: 1.2,
                    color: "rgb(24, 40, 37)",
                    WebkitFontSmoothing: "antialiased",
                    MozOsxFontSmoothing: "grayscale",
                  },
                },
                "Khaled"
              )
            : i === 3
            ? createElement(
                "h1",
                {
                  className: "leading-none",
                  style: {
                    fontFamily: '"PolySans", sans-serif',
                    fontWeight: 700,
                    fontSize: "5.25rem",
                    letterSpacing: "-0.05rem",
                    lineHeight: 1.2,
                    color: "rgb(24, 40, 37)",
                    WebkitFontSmoothing: "antialiased",
                    MozOsxFontSmoothing: "grayscale",
                  },
                },
                "Doulami"
              )
            : null
        )
      )
    )
  );
}
