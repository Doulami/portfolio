"use client";

import { useLayoutEffect, useRef, useState, createElement } from "react";
import gsap from "gsap";

export default function IntroOverlay({ onFinish }) {
  const overlayRef = useRef(null);
  const stripesRef = useRef([]);
  const nameRef = useRef([]);
  const [isGone, setIsGone] = useState(false);

  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      const orderedStripes = [...stripesRef.current];
      const tl = gsap.timeline({
        onComplete: () => {
          setTimeout(() => {
            setIsGone(true);
            if (onFinish) onFinish();
          }, 100); // tiny buffer
        },
      });

      gsap.set(orderedStripes, {
        y: "-100%",
        opacity: 0,
        visibility: "hidden",
      });

      gsap.set(nameRef.current, {
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

      // Name appears right after stripes
      tl.to(nameRef.current[0], {
        y: 0,
        opacity: 1,
        visibility: "visible",
        duration: 0.2,
        ease: "power2.out",
      });

      tl.to(nameRef.current[1], {
        y: 0,
        opacity: 1,
        visibility: "visible",
        duration: 0.2,
        ease: "power2.out",
      }, "-=0.1");

      // Name exits (surname first)
      tl.to(nameRef.current[1], {
        y: 80,
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
      }, "+=0.5");

      tl.to(nameRef.current[0], {
        y: 80,
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
      }, "+=0.1");

      // Stripe exit (staggered)
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
      style: { backgroundColor: "#182825" }
    },
    // Stripes
    createElement(
      "span",
      { className: "absolute w-full h-full" },
      [...Array(5)].map((_, i) =>
        createElement(
          "div",
          {
            key: i,
            ref: el => {
              if (el) stripesRef.current[i] = el;
            },
            className:
              "absolute w-full h-1/5" +
              (i === 2 ? " flex items-center pl-10" : "") +
              (i === 3 ? " pl-10 pt-2" : ""),
            style: {
              top: `${i * 20}%`,
              backgroundColor: "rgb(255,255,0)",
              transform: "translateY(-100%)",
              transformOrigin: "top",
              opacity: 0,
              visibility: "hidden",
            }
          },
          i === 2
            ? createElement(
                "h1",
                {
                  ref: el => (nameRef.current[0] = el),
                  className: "leading-none",
                  style: {
                    fontFamily: '"PolySans", sans-serif',
                    fontWeight: 700,
                    fontSize: "5.25rem",
                    letterSpacing: "-0.05rem",
                    lineHeight: 1.2,
                    color: "#182825",
                    WebkitFontSmoothing: "antialiased",
                    MozOsxFontSmoothing: "grayscale",
                  }
                },
                "Khaled"
              )
            : i === 3
            ? createElement(
                "h1",
                {
                  ref: el => (nameRef.current[1] = el),
                  className: "leading-none",
                  style: {
                    fontFamily: '"PolySans", sans-serif',
                    fontWeight: 700,
                    fontSize: "5.25rem",
                    letterSpacing: "-0.05rem",
                    lineHeight: 1.2,
                    color: "#182825",
                    WebkitFontSmoothing: "antialiased",
                    MozOsxFontSmoothing: "grayscale",
                  }
                },
                "Doulami"
              )
            : null
        )
      )
    )
  );
}
