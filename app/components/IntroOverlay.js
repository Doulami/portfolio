"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function IntroOverlay({ onFinish }) {
  const [startStripes, setStartStripes] = useState(false);
  const [startTextExit, setStartTextExit] = useState(false);
  const [hideOverlay, setHideOverlay] = useState(false);
  const [isGone, setIsGone] = useState(false);

  useEffect(() => {
    const delayStart = setTimeout(() => setStartStripes(true), 500);
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

  const nameVariants = (entryDelay = 0, exitDelay = 0) => ({
    initial: { opacity: 0, y: -80 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { delay: entryDelay, duration: 0.4, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: 80,
      transition: { delay: exitDelay, duration: 0.4, ease: "easeIn" },
    },
  });

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, delay: 0.6 } }}
      style={{ backgroundColor: "rgb(24,40,37)" }}
    >
      {/* Stripes */}
      <motion.div
        className="absolute w-full h-full origin-top"
        initial={{ scaleY: 1 }}
        animate={hideOverlay ? { scaleY: 0 } : { scaleY: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-1/5"
            style={{
              top: `${i * 20}%`,
              left: 0,
              backgroundColor: "rgb(255,255,0)",
            }}
          />
        ))}
      </motion.div>

      {/* Name */}
      <div className="z-50 text-center mt-[-5vh]">
        <motion.h1
          className="text-[76px] md:text-[82px] font-extrabold leading-none"
          style={{ color: "rgb(180,180,0)" }}
          variants={nameVariants(2.2, 5.4)}
          initial="initial"
          animate={startStripes ? "animate" : "initial"}
          exit={startTextExit ? "exit" : ""}
        >
          Khaled
        </motion.h1>
        <motion.h1
          className="text-[76px] md:text-[82px] font-extrabold leading-none"
          style={{ color: "rgb(180,180,0)" }}
          variants={nameVariants(2.4, 5.0)}
          initial="initial"
          animate={startStripes ? "animate" : "initial"}
          exit={startTextExit ? "exit" : ""}
        >
          Doulami
        </motion.h1>
      </div>
    </motion.div>
  );
}
