"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="relative col-span-full min-h-[70vh]  ">
      {/* Фоновое изображение с эффектом параллакса */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0">
        <Image
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
          src="/minecraftbg2.jpg"
          alt="Minecraft background"
          priority
        />
      </motion.div>
      {/* Полупрозрачный оверлей для улучшения читаемости */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10"></div>
      {/* Верхняя панель навигации */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-20 px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}>
            <Image
              src="/minelogo.png"
              width={180}
              height={180}
              alt="Minecraft logo"
              className="drop-shadow-lg"
            />
          </motion.div>
        </div>

        <nav className="flex gap-8 text-white/90 text-lg font-medium">
          <motion.a
            whileHover={{ y: -2, color: "#60A5FA" }}
            transition={{ duration: 0.3 }}
            href="#servers">
            Servers
          </motion.a>
          <motion.a
            whileHover={{ y: -2, color: "#60A5FA" }}
            transition={{ duration: 0.3 }}
            href="#about">
            About
          </motion.a>
        </nav>
      </motion.div>
      {/* Основной контент заголовка */}
      <div className="relative z-30 container mx-auto px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Текстовый блок */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}>
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Minecraft
              </span>
              <span className="block mt-2 text-blue-950 drop-shadow-md">
                Server
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-xl lg:text-2xl text-white/80 mb-8 leading-relaxed">
              Discover the best Minecraft servers and communities. Join us
              today!
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.1 }}
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl text-xl font-bold transition-all duration-300">
              Let`s Go →
            </motion.button>
          </motion.div>

          {/* Изображение персонажа */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.7, ease: "backOut" }}
            className="relative">
            <Image
              src="/steve.png"
              width={600}
              height={600}
              alt="Steve character"
              className="w-full max-w-md lg:max-w-lg drop-shadow-2xl"
            />

            {/* Декоративные элементы */}
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                y: [0, -5, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-8 -right-8 w-16 h-16 bg-yellow-400 rounded-full border-4 border-white shadow-lg"></motion.div>
          </motion.div>
        </div>
      </div>
      {/* Нижний декоративный элемент */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-0 left-0 right-0 h-24  to-transparent z-20"
      />{" "}
      <div className="col-span-full h-[150px] translate-y-[20px] z-10  relative bg-[lab(0.1542_15.7545_-51.5504)] blur-2xl"></div>
    </header>
  );
}
