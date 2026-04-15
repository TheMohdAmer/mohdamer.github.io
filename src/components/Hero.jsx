// components/Hero.jsx
import { motion } from "framer-motion";


export default function Hero() {
  return (
    <section id="Home" className="min-h-screen flex items-center px-4 md:px-6 ">
      <div className="max-w-7xl mx-auto w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* NAME */}
          <h1 className="text-3xl md:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Mohd Amer
            </span>
          </h1>

          {/* ROLE */}
          <h2 className="mt-8 text-xl md:text-3xl text-zinc-600 dark:text-zinc-400">
            Full Stack Developer  |  React • Java • Spring Boot
          </h2>

          {/* SHORT INTRO */}
          <h3 className="mt-8 max-w-2xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-semibold">
            I build scalable web applications from frontend to backend, focusing
            on performance, clean architecture, and real-world problem solving.
          </h3>

          {/* CTA BUTTONS */}
          <div className="mt-16 flex flex-wrap gap-4">
            <a
              href="#Projects"
              className="px-6 py-2 rounded-lg bg-purple-600 dark:border-zinc-100 dark:bg-[#000050] hover:bg-purple-500 dark:hover:bg-[#000030] text-white hover:opacity-90 transition"
            >
              View Projects
            </a>

            <a
              href="#Contact"
              className="px-6 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 hover:bg-[#DCD6F7] dark:hover:bg-[#000050] transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
