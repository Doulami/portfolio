"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gray-50 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold mb-6"
      >
        A Bit About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="max-w-2xl mx-auto text-gray-700 text-lg"
      >
        I’m Khaled — a hands-on CTO, entrepreneur, and full-stack developer with over 10 years of experience.
        I’ve led product teams, built 30+ websites, launched successful platforms, and love turning vision into
        robust, elegant systems.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4"
      >
        <a
          href="/Khaled-Doulami-CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white rounded-full px-6 py-2 text-sm hover:bg-gray-800 transition"
        >
          Download CV
        </a>
        <a
          href="https://linkedin.com/in/khaleddoulami"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 hover:underline"
        >
          Visit my LinkedIn
        </a>
      </motion.div>
    </section>
  );
}
