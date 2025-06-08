
// app/components/IntroOverlay.js
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function IntroOverlay() {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 4000); // Total time before unmount (bars in + hold + bars out)
    return () => clearTimeout(timer);
  }, []);

  const barVariants = {
    initial: { y: "100%" },
    animate: { y: 0 },
    exit: { y: "-100%" },
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { delay: 1.2 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  };

  return (
    <AnimatePresence>
      {showOverlay && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center"
          style={{ backgroundColor: "rgb(24,40,37)" }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="w-full h-full flex flex-col justify-center items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-full h-[20%] bg-yellow-400"
                variants={barVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5, delay: i * 0.1 }}
              />
            ))}
          </div>

          <motion.h1
            className="absolute text-white text-4xl md:text-6xl font-bold"
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
