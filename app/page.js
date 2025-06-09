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

    // Stripe cascade in (with visibility fix)
    tl.to(stripesRef.current, {
      y: "0%",
      opacity: 1,
      visibility: "visible",
      stagger: 0.3,
      duration: 0.4,
      ease: "power2.out",
    });

    // Text appears immediately after
    tl.from(nameRef.current[0], {
      y: -80,
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
    }, "0");

    tl.from(nameRef.current[1], {
      y: -80,
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
    }, "-=0.2");

    // Text exits top-to-bottom
    tl.to(nameRef.current[0], {
      y: 80,
      opacity: 0,
      duration: 0.4,
      ease: "power2.in",
    }, "+=1");

    tl.to(nameRef.current[1], {
      y: 80,
      opacity: 0,
      duration: 0.4,
      ease: "power2.in",
    }, "+=0.2");

    // Stripes slide down individually
    tl.to(stripesRef.current, {
      y: "100%",
      opacity: 0,
      stagger: 0.3,
      duration: 0.4,
      ease: "power2.inOut",
    });

    return () => tl.kill();
  }, [onFinish]);

  if (isGone) return null;

  return createElement(
    'div',
    {
      ref: overlayRef,
      className: "fixed inset-0 z-[100] flex flex-col items-start justify-center",
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
            backgroundColor: "rgb(255,255,0)",
            transform: "translateY(-100%)",
            opacity: 0,
            visibility: "hidden",
          }
        })
      )
    ),
    // Name
    createElement(
      'div',
      { className: "z-50 mt-[-5vh] ml-10" },
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
