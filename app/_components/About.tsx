"use client";

import TEXTS_ABOUT from "@/lib/texts_about";
import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

export default function About() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  // Плавное преобразование для текста и вращения
  const textPhase = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [0, 0.5, 1.5, 2]
  );
  const rotatePhase = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["0deg", "180deg", "360deg"]
  );

  const [phase, setPhase] = useState(0);

  // Более плавное отслеживание изменений фазы
  useMotionValueEvent(textPhase, "change", (value) => {
    const newPhase = Math.round(value);
    if (newPhase !== phase && newPhase >= 0 && newPhase <= 2) {
      setPhase(newPhase);
    }
  });

  return (
    <div ref={containerRef} className="h-[220vh] mt-[100px] relative">
      <div className="sticky top-[15%] px-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-4xl font-black text-white mb-12 drop-shadow-md">
          About
        </motion.h2>

        <motion.div
          layout
          className="flex flex-col items-center justify-center gap-8"
          transition={{
            duration: 1,
            ease: "easeOut",
            stiffness: 100,
            damping: 20,
          }}>
          {/* Вращающиеся планеты */}
          <div className="flex justify-center gap-16">
            <motion.div
              style={{ rotate: rotatePhase }}
              className="relative"
              transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
              }}>
              <Image
                src="/planet.png"
                width={180}
                height={180}
                alt="Planet"
                className="drop-shadow-2xl"
              />
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-2 bg-blue-400/20 rounded-full blur-xl"
              />
            </motion.div>

            <motion.div
              style={{ rotate: rotatePhase }}
              className="relative"
              transition={{
                duration: 4,
                ease: "linear",
                repeat: Infinity,
              }}>
              <Image
                src="/moon.jpg"
                width={140}
                height={140}
                alt="Moon"
                className="drop-shadow-2xl"
              />
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-1 bg-gray-300/30 rounded-full blur-lg"
              />
            </motion.div>
          </div>
          {/* Основной блок контента */}
          <motion.div
            layout
            className={`
              p-10 w-full max-w-4xl bg-gradient-to-b from-gray-900 to-gray-800
              rounded-2xl mx-auto relative overflow-hidden border-4 border-gray-700
              shadow-2xl
            `}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}>
            {/* Декоративная рамка */}
            <div className="absolute inset-0 border-8 border-gray-600/80 pointer-events-none rounded-2xl"></div>

            {/* Верхний градиентный блик */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-cyan-400/20 via-blue-500/40 to-purple-600/20"></div>

            <h2
              className="
                text-5xl font-black text-transparent bg-clip-text
                bg-gradient-to-r from-yellow-400 to-amber-300
                mb-10 text-center drop-shadow-md
              ">
              APP INFO
            </h2>

            {/* Динамический заголовок */}
            <motion.p
              key={phase}
              className="text-3xl text-white text-center mb-8 font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}>
              {TEXTS_ABOUT[phase].title}
            </motion.p>

            {/* Основной текст */}
            <motion.div
              key={`text-${phase}`}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-white/90 px-4">
              <p className="text-xl leading-relaxed">{TEXTS_ABOUT[phase].p}</p>

              <ul className="list-disc pl-8 space-y-4 text-yellow-200/90">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}>
                  Next.js 14 + App Router
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}>
                  Tailwind CSS for styling
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}>
                  Responsive design (mobile & desktop)
                </motion.li>
              </ul>
            </motion.div>

            {/* Интерактивные кнопки-рычаги */}
            <motion.div
              className="mt-12 flex flex-wrap justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}>
              {[0, 1, 2].map((index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className={`
                    w-14 h-14 rounded-md border-2
                    ${
                      phase === index
                        ? "bg-[#FF5555] border-[#FF3333] drop-shadow-[0_0_8px_rgba(255,85,85,0.6)]"
                        : "bg-gray-300 border-gray-400"
                    }
            flex items-center justify-center text-white font-bold text-sm
            transition-all duration-200
          `}
                  aria-label={`Phase ${index + 1} selector`}>
                  {phase === index ? (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="text-lg">
                      ✓
                    </motion.span>
                  ) : (
                    <span className="text-lg opacity-70">{index + 1}</span>
                  )}
                </motion.button>
              ))}
            </motion.div>

            {/* Нижний декоративный элемент */}
            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-2 bg-gradient-to-r from-cyan-400/30 via-blue-500/50 to-purple-600/30 rounded-full blur-md"
            />
          </motion.div>{" "}
        </motion.div>
      </div>
    </div>
  );
}
