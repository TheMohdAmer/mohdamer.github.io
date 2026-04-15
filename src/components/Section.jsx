import { motion } from "framer-motion";

export default function Section({ id, title, children }) {
  return (
    <section id={id} className="py-16 md:py-12 px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto w-full"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6">{title}</h2>

        <div>
          {children}
        </div>
      </motion.div>
    </section>
  );
}
