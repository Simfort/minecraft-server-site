"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="relative col-span-full min-h-[70vh] overflow-hidden">
      {/* Фоновое изображение (адаптивно) */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0">
        <Image
          src="/minecraftbg2.jpg"
          alt="Minecraft background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Оверлей для читаемости */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10" />

      {/* Верхняя панель навигации */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-20 px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Логотип */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="flex justify-center">
            <Image
              src="/minelogo.png"
              width={120}
              height={120}
              alt="Minecraft logo"
              className="drop-shadow-lg"
            />
          </motion.div>

          {/* Меню (свёрнуто на мобильных) */}
          <nav className="flex flex-wrap  justify-center gap-6 text-white/90 text-base sm:text-lg font-medium">
            <motion.a
              whileHover={{ y: -2, color: "#60A5FA" }}
              transition={{ duration: 0.3 }}
              href="#servers"
              className="whitespace-nowrap">
              Servers
            </motion.a>
            <motion.a
              whileHover={{ y: -2, color: "#60A5FA" }}
              transition={{ duration: 0.3 }}
              href="#about"
              className="whitespace-nowrap">
              About
            </motion.a>
          </nav>
        </div>
      </motion.div>

      {/* Основной контент */}
      <div className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Текстовый блок */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight">
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
              className="text-lg sm:text-xl lg:text-2xl text-white/80 mb-6 sm:mb-8 leading-relaxed">
              Discover the best Minecraft servers and communities. Join us
              today!
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.1 }}
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl text-lg sm:text-xl font-bold transition-all duration-300 w-full sm:w-auto">
              Let's Go →
            </motion.button>
          </motion.div>

          {/* Изображение персонажа */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.7, ease: "backOut" }}
            className="relative max-w-full">
            <Image
              src="/steve.png"
              width={400}
              height={400}
              alt="Steve character"
              className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[400px] drop-shadow-2xl mx-auto"
              sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 400px"
            />

            {/* Декоративный элемент */}
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
              className="absolute -bottom-6 -right-6 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-yellow-400 rounded-full border-4 border-white shadow-lg"
            />
          </motion.div>
        </div>
      </div>

      {/* Нижний декоративный элемент */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 lg:h-24 z-20"
      />
      <div className="col-span-full h-[50px] z-10 relative bg-[lab(0.1542_15.7545_-51.5504)] blur-2xl" />
    </header>
  );
}
