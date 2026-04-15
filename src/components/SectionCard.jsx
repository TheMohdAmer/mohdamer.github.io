// components/SectionCard.jsx
import { motion } from "framer-motion";

export default function SectionCard({ id, title, children, skills }) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="p-12 pb-16 rounded-2xl border border-zinc-200 dark:border-zinc-800 
      bg-[#DCD6f7] dark:bg-[#000021] 
      hover:shadow-lg hover:scale-[1.04] 
      transition duration-300"
    >
      <h3 className="text-2xl font-semibold mb-6">
        {title}
      </h3>

      <div className="text-md text-zinc-800 dark:text-zinc-300 leading-relaxed">
        {children}
      </div>

      {/* 🔥 SKILLS TAGS */}
      <div className="flex flex-wrap gap-2 mt-6 ">
        {skills?.map((skill) => (
          <span
            key={skill}
            className="text-xs px-4 py-2 rounded bg-purple-500/10 text-purple-600  dark:text-yellow-500"
          >
            {skill}
          </span>
          
        ))}
      </div>
    </motion.div>
  );
}