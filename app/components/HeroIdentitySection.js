"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const identities = [
  { icon: "💼", label: "Entrepreneur", desc: "Building solutions & businesses", href: "/entrepreneur" },
  { icon: "🧠", label: "CTO", desc: "Tech strategy & systems", href: "/cto" },
  { icon: "💻", label: "Developer", desc: "Frontend & backend builder", href: "/developer" },
  { icon: "🛠️", label: "DIY Maker", desc: "Repairs & hands-on work", href: "/diy" },
  { icon: "🚙", label: "Overlander", desc: "Off-road & travel life", href: "/overlander" },
];

export default function HeroIdentitySection() {
  return (
    <section className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl sm:text-5xl font-semibold mb-4"
      >
        Who is Khaled Doulami?
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-lg text-gray-600 mb-10"
      >
        Explore my journey as a...
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
        {identities.map((item) => (
          <motion.div
            key={item.href}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all bg-white cursor-pointer"
          >
            <Link href={item.href}>
              <div className="text-3xl mb-3">{item.icon}</div>
              <div className="text-xl font-medium">{item.label}</div>
              <div className="text-sm text-gray-500 mt-1">{item.desc}</div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
