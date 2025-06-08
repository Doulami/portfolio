"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function IntroOverlay({ onFinish }) {
  const [showOverlay, setShowOverlay] = useState(true);
  const [startStripes, setStartStripes] = useState(false);
  const [startTextExit, setStartTextExit] = useState(false);
  const [startOverlayExit, setStartOverlayExit] = useState(false);

  useEffect(() => {
    const delayStart = setTimeout(() => setStartStripes(true), 1000);
    const delayTextExit = setTimeout(() => setStartTextExit(true), 5000);
    const delayOverlayExit = setTimeout(() => setStartOverlayExit(true), 5800);
    const end = setTimeout(() => {
      setShowOverlay(false);
      if (onFinish) onFinish();
    }, 6800);

    return () => {
      clearTimeout(delayStart);
      clearTimeout(delayTextExit);
      clearTimeout(delayOverlayExit);
      clearTimeout(end);
    };
  }, [onFinish]);

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
    <AnimatePresence>
      {showOverlay && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
          style={{ backgroundColor: "rgb(24,40,37)" }}
          initial={{ y: "0%" }}
          animate={{ y: "0%" }}
          exit={{
            y: "100%",
            transition: { duration: 0.6, ease: "easeInOut" },
          }}
        >
          {/* Curtain stripes */}
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
              exit={startTextExit ? "exit" : ""}
            >
              Khaled
            </motion.h1>
            <motion.h1
              className="text-[76px] md:text-[82px] font-extrabold leading-none"
              style={{ color: "rgb(180,180,0)" }}
              variants={nameVariants(3.8, 0.0)}
              initial="initial"
              animate={startStripes ? "animate" : "initial"}
              exit={startTextExit ? "exit" : ""}
            >
              Doulami
            </motion.h1>
          </div>

          {/* Trigger the exit of the whole overlay once text is gone */}
          {startOverlayExit && (
            <motion.div
              className="absolute inset-0"
              initial={{ y: 0 }}
              animate={{ y: "100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
