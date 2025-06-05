"use client";

import { motion } from "framer-motion";

export function ContactCTASection() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-50 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold mb-6"
      >
        Let’s Work Together
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg text-gray-600 mb-10 max-w-xl mx-auto"
      >
        I’m open to remote developer roles, CTO consulting, and creative tech projects.
        Let’s connect and build something meaningful.
      </motion.p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          href="mailto:contact@wappdev.co.uk"
          className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition"
        >
          Email Me
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          href="/Khaled-Doulami-CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-black px-6 py-2 rounded-full text-sm font-medium hover:bg-black hover:text-white transition"
        >
          View CV
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          href="https://linkedin.com/in/khaleddoulami"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 underline"
        >
          Connect on LinkedIn
        </motion.a>
      </div>
    </section>
  );
}
