"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[#1A1A1A] flex items-center justify-center">
      <div className="flex space-x-2">
        {[0, 1, 2, 3, 4].map((index) => (
          <motion.div
            key={index}
            className="w-6 h-6 bg-[#7CFC00] border-[3px] border-[#006400] rounded-sm"
            initial={{ y: 50, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
