"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function IntroOverlay({ onFinish }) {
  const [startStripes, setStartStripes] = useState(false);
  const [startTextExit, setStartTextExit] = useState(false);
  const [hideOverlay, setHideOverlay] = useState(false);
  const [isGone, setIsGone] = useState(false);

  useEffect(() => {
    const delayStart = setTimeout(() => setStartStripes(true), 1000);
    const textExit = setTimeout(() => setStartTextExit(true), 5000);
    const fadeOut = setTimeout(() => setHideOverlay(true), 5800);
    const finish = setTimeout(() => {
      setIsGone(true);
      if (onFinish) onFinish();
    }, 6500);

    return () => {
      clearTimeout(delayStart);
      clearTimeout(textExit);
      clearTimeout(fadeOut);
      clearTimeout(finish);
    };
  }, [onFinish]);

  if (isGone) return null;

  const stripeVariants = {
    initial: { y: "-100%", opacity: 0 },
    animate: (i) => ({
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: i * 0.5 + 1,
        ease: "easeOut",
      },
    }),
  };

  const nameVariants = (entryDelay = 0, exitDelay = 0) => ({
    initial: { opacity: 0, y: -80 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { delay: entryDelay, duration: 0.6, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: 80,
      transition: { delay: exitDelay, duration: 0.5, ease: "easeIn" },
    },
  });

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{ backgroundColor: "rgb(24,40,37)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      style={{
        backgroundColor: "rgb(24,40,37)",
        opacity: hideOverlay ? 0 : 1,
        transition: "opacity 0.6s ease-in-out",
      }}
    >
      {/* Stripes */}
      <div className="absolute w-full h-full overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-1/5 overflow-hidden"
            style={{
              top: `${i * 20}%`,
              left: 0,
              backgroundColor: "rgb(255,255,0)",
              visibility: startStripes ? "visible" : "hidden",
            }}
            variants={stripeVariants}
            initial="initial"
            animate={startStripes ? "animate" : "initial"}
            custom={i}
          />
        ))}
      </div>

      {/* Name */}
      <div className="z-50 text-center mt-[-5vh]">
        <motion.h1
          className="text-[76px] md:text-[82px] font-extrabold leading-none"
          style={{ color: "rgb(180,180,0)" }}
          variants={nameVariants(3.4, 0.4)}
          initial="initial"
          animate={startStripes ? "animate" : "initial"}
          animate={startStripes ? "animate" : "initial"}
          animate={startTextExit ? "exit" : "animate"}
        >
          Khaled
        </motion.h1>
        <motion.h1
          className="text-[76px] md:text-[82px] font-extrabold leading-none"
          style={{ color: "rgb(180,180,0)" }}
          variants={nameVariants(3.8, 0.0)}
          initial="initial"
          animate={startStripes ? "animate" : "initial"}
          animate={startTextExit ? "exit" : "animate"}
        >
          Doulami
        </motion.h1>
      </div>
    </motion.div>
  );
}
