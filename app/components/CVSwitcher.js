"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = ["Developer", "CTO", "Startup Founder", "Freelancer"];

export default function CVSwitcher() {
  const [selected, setSelected] = useState(null);

  const handleSelect = (role) => {
    setSelected(role);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center space-y-6">

      {/* Title or role buttons */}
      {!selected ? (
        <div className="grid grid-cols-2 gap-4">
          {roles.map((role) => (
            <motion.button
              key={role}
              onClick={() => handleSelect(role)}
              className="bg-zinc-800 text-white px-6 py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-zinc-700"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileTap={{ scale: 0.95 }}
            >
              {role}
            </motion.button>
          ))}
        </div>
      ) : (
        <motion.div
          className="text-2xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {selected} CV
        </motion.div>
      )}

      {/* Dynamic CV Content */}
      <AnimatePresence mode="wait">
        {selected && (
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="w-full max-w-2xl space-y-4 text-left text-sm text-black"
          >
            <p>This is the placeholder for the <strong>{selected}</strong> version of your CV.</p>
            <p>We’ll populate this based on your real content, refined per role.</p>
            <button
              onClick={() => setSelected(null)}
              className="mt-4 underline text-green-800"
            >
              Choose another profile
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
