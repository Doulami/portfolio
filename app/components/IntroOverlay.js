// app/components/IntroOverlay.js
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function IntroOverlay() {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 5500);
    return () => clearTimeout(timer);
  }, []);

  const stripeVariants = {
    initial: { y: "-100%" },
    animate: { y: "0%" },
    exit: { y: "100%" },
  };

  const nameVariants = (delay = 0) => ({
    initial: { opacity: 0, y: -80 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.6, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: 80,
      transition: { duration: 0.5, ease: "easeIn" },
    },
  });

  return (
    <AnimatePresence>
      {showOverlay && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center"
          style={{ backgroundColor: "rgb(24,40,37)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute w-full h-full">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-full h-1/5"
                style={{ backgroundColor: "rgb(255,255,0)", top: `${i * 20}%`, left: 0 }}

                variants={stripeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4, delay: i * 0.15 }}
              />
            ))}
          </div>

          <div className="z-50 text-center mt-[-5vh]">
            <motion.h1
              className="text-yellow-900 text-[76px] md:text-[82px] font-extrabold leading-none"
              variants={nameVariants(1.2)}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              Khaled
            </motion.h1>
            <motion.h1
              className="text-yellow-900 text-[76px] md:text-[82px] font-extrabold leading-none"
              variants={nameVariants(1.5)}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              Doulami
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
