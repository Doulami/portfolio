// app/components/IntroOverlay.js
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function IntroOverlay() {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const stripeVariants = {
    initial: { y: "-100%" },
    animate: { y: "0%" },
    exit: { y: "100%" },
  };

  const textVariants = {
    initial: { opacity: 0, y: -50, x: 40, scale: 1.4 },
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: { delay: 1, duration: 0.6 },
    },
    exit: {
      opacity: 0,
      y: 100,
      transition: { delay: 0.2, duration: 0.5 },
    },
  };

  return (
    <AnimatePresence>
      {showOverlay && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "rgb(24,40,37)" }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute w-full h-full">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-full h-1/5 bg-yellow-400"
                style={{ top: `${i * 20}%`, left: 0 }}
                variants={stripeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4, delay: i * 0.1 }}
              />
            ))}
          </div>

          <motion.h1
            className="text-yellow-900 text-5xl md:text-7xl font-extrabold z-50"
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            Khaled Doulami
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
