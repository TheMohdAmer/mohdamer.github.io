// components/Intro.jsx
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section id="About" className="py-16 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >

          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            About Me
          </h2>

          <div className="p-6 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">

            <p className="leading-relaxed">
              I am a full-stack developer specializing in building scalable
              web applications using React, Java, and Spring Boot.
            </p>

            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              I enjoy working across the entire development pipeline — from designing
              clean user interfaces to building efficient backend systems and APIs.
            </p>

            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              My focus is on writing maintainable code, optimizing performance,
              and delivering real-world solutions that scale.
            </p>

          </div>

        </motion.div>
      </div>
    </section>
  );
}