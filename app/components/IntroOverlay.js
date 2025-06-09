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
        orderedStripes[3]?.querySelector("h1"), // Doulami
      ];

      const tl = gsap.timeline({
        onComplete: () => {
          setTimeout(() => {
            setIsGone(true);
            if (onFinish) onFinish();
          }, 100);
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

      // Stripe entrance (staggered)
      tl.to(orderedStripes, {
        y: "0%",
        opacity: 1,
        visibility: "visible",
        stagger: 0.25,
        delay: 0.3,
        duration: 0.3,
        ease: "power2.out",
      });

      // Name appearance
      tl.to(nameRefs[0], {
        y: 0,
        opacity: 1,
        visibility: "visible",
        duration: 0.2,
        ease: "power2.out",
      });

      tl.to(nameRefs[1], {
        y: 0,
        opacity: 1,
        visibility: "visible",
        duration: 0.2,
        ease: "power2.out",
      }, "-=0.1");

      // Name exit (Doulami first)
      tl.to(nameRefs[1], {
        y: 80,
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
      }, "+=0.5");

      tl.to(nameRefs[0], {
        y: 80,
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
      }, "+=0.1");

      // Stripe exit
      tl.to(orderedStripes, {
        y: "100%",
        opacity: 0,
        stagger: 0.2,
        duration: 0.3,
        ease: "power2.inOut",
      });
    });
  }, [onFinish]);

  if (isGone) return null;

  return createElement(
    "span",
    {
      ref: overlayRef,
      className: "fixed inset-0 z-[100] flex flex-col items-start justify-center",
      style: { backgroundColor: "#182825" },
    },
    createElement(
      "span",
      { className: "absolute w-full h-full" },
      [...Array(5)].map((_, i) =>
        createElement(
          "div",
          {
            key: i,
            ref: (el) => {
              if (el) stripesRef.current[i] = el;
            },
            className:
              "absolute w-full h-1/5 flex pl-10 " +
              (i === 2 ? "justify-start items-end" : "") +
              (i === 3 ? "justify-start items-start" : ""),
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
                  ref: (el) => (nameRefs[0] = el),
                  className: "leading-none cursor-pointer inline-block text-center",
                  style: {
                    fontFamily: '"PolySans", Arial, sans-serif',
                    fontWeight: 700,
                    fontSize: "84px", // keep growing this if needed
                    lineHeight: "84px",
                    height: "84px",
                    letterSpacing: "-0.05rem",
                    color: "rgb(24, 40, 37)",
                    boxSizing: "border-box",
                    fontStyle: "normal",
                    fontStretch: "100%",
                    fontKerning: "auto",
                    fontFeatureSettings: "normal",
                    fontOpticalSizing: "auto",
                    fontVariationSettings: "normal",
                    textRendering: "auto",
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
                  ref: (el) => (nameRefs[1] = el),
                  className: "leading-none cursor-pointer inline-block text-center",
                  style: {
                    fontFamily: '"PolySans", Arial, sans-serif',
                    fontWeight: 700,
                    fontSize: "84px",
                    lineHeight: "84px",
                    height: "84px",
                    letterSpacing: "-0.05rem",
                    color: "rgb(24, 40, 37)",
                    boxSizing: "border-box",
                    fontStyle: "normal",
                    fontStretch: "100%",
                    fontKerning: "auto",
                    fontFeatureSettings: "normal",
                    fontOpticalSizing: "auto",
                    fontVariationSettings: "normal",
                    textRendering: "auto",
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
