"use client";

import { useEffect, useRef, useState, createElement } from "react";
import gsap from "gsap";

export default function IntroOverlay({ onFinish }) {
  const overlayRef = useRef(null);
  const stripesRef = useRef([]);
  const nameRef = useRef([]);
  const [isGone, setIsGone] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          setIsGone(true);
          if (onFinish) onFinish();
        }, 500);
      },
    });

    tl.from(stripesRef.current, {
      y: "-100%",
      opacity: 0,
      stagger: 0.2,
      duration: 0.4,
      ease: "power2.out",
    });

    tl.from(nameRef.current[0], {
      y: -80,
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
    }, "+=0.5");

    tl.from(nameRef.current[1], {
      y: -80,
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
    }, "-=0.2");

    tl.to(nameRef.current[1], {
      y: 80,
      opacity: 0,
      duration: 0.4,
      ease: "power2.in",
    }, "+=2");

    tl.to(nameRef.current[0], {
      y: 80,
      opacity: 0,
      duration: 0.4,
      ease: "power2.in",
    }, "+=0.2");

    tl.to(overlayRef.current, {
      scaleY: 0,
      transformOrigin: "top",
      duration: 0.6,
      ease: "power2.inOut",
    });

    return () => tl.kill();
  }, [onFinish]);

  if (isGone) return null;

  return createElement(
    'div',
    {
      ref: overlayRef,
      className: "fixed inset-0 z-[100] flex flex-col items-center justify-center",
      style: { backgroundColor: "rgb(24,40,37)" }
    },
    // Stripes
    createElement(
      'div',
      { className: "absolute w-full h-full" },
      [...Array(5)].map((_, i) =>
        createElement('div', {
          key: i,
          ref: el => stripesRef.current[i] = el,
          className: "absolute w-full h-1/5",
          style: {
            top: `${i * 20}%`,
            backgroundColor: "rgb(255,255,0)"
          }
        })
      )
    ),
    // Name Block
    createElement(
      'div',
      { className: "z-50 text-center mt-[-5vh]" },
      createElement(
        'h1',
        {
          ref: el => nameRef.current[0] = el,
          className: "text-[76px] md:text-[82px] font-extrabold leading-none",
          style: { color: "rgb(180,180,0)" }
        },
        "Khaled"
      ),
      createElement(
        'h1',
        {
          ref: el => nameRef.current[1] = el,
          className: "text-[76px] md:text-[82px] font-extrabold leading-none",
          style: { color: "rgb(180,180,0)" }
        },
        "Doulami"
      )
    )
  );
}
