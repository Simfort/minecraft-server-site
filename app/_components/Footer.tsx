"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Footer() {
  return (
    <footer
      className="
      relative p-8 col-span-full rounded-t-2xl
      bg-[url('/bedrock.jpg')] bg-center bg-no-repeat bg-cover
      bg-black/95 
      border-t-8 border-[#4a4a4a]
      shadow-[inset_0_0_20px_rgba(0,0,0,0.4)]
      overflow-hidden
    ">
      <div
        className="
        absolute inset-0
        bg-gradient-to-b from-black/70 to-black/90
      "
      />

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="flex flex-col items-center text-center space-y-8 relative z-10 px-4">
        <motion.h3
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7 }}
          className="
            text-4xl font-black text-white tracking-wide
            drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]
            uppercase
            relative
          ">
          BEDROCK CORE
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="
            max-w-lg text-lg text-[#a0a0a0] italic
            drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]
          ">
          Unbreakable. Unyielding. Eternal.
        </motion.p>

        <motion.div
          animate={{
            scaleX: [1, 1.05, 1],
            rotate: [0, 0.5, -0.5, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut",
          }}
          className="
            w-24 h-0.5 bg-gradient-to-r
            from-transparent via-[#555555] to-transparent
            rounded-full
            shadow-[0_0_8px_rgba(85,85,85,0.4)]
          "
        />

        <div className="flex flex-col space-y-5 mt-6 text-base">
          <motion.span
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="
              text-white font-medium text-xl
              drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]
            ">
            The Foundation of Worlds
          </motion.span>

          <motion.span
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="
              text-[#d0d0d0] text-sm
              font-mono tracking-wide
              drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]
            ">
            © 2026 Created by David Lemonjava
          </motion.span>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="
            flex flex-wrap justify-center gap-6 mt-8
            text-xs text-[#888888] font-mono uppercase
          ">
          {["Protocol: TCP/IP", "Latency: <150ms", "Uptime: 99.9%"].map(
            (text) => (
              <motion.span
                key={text}
                variants={{
                  hidden: { y: 10, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                className="
                px-3 py-1 bg-black/30 rounded
                border border-[#555555] shadow-sm
              ">
                {text}
              </motion.span>
            )
          )}
        </motion.div>
      </motion.div>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none">
          <path
            d="M10,10 L90,90 M90,10 L10,90"
            stroke="#555555"
            strokeWidth="0.3"
            strokeOpacity="0.4"
            fill="none"
          />
        </svg>
      </div>
    </footer>
  );
}
