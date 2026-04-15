import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="Contact" className="py-16 md:py-40 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center py-6 text-zinc-900 dark:text-zinc-400">
            Let's Connect
          </h2>

          <div>
            <div className="flex flex items-center gap-8 text-2xl text-zinc-400 justify-center py-10">
              {/* Email */}
              <a
                href="mailto:mohdamer2957@gmail.com"
                target="_blank"
                className="p-4 rounded-full bg-[#DCD6F7] hover:bg-[#DCD6F7] dark:bg-[#000030] dark:hover:bg-[#000040] 
          text-black dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-white transition duration-300 
           hover:-translate-y-1"
              >
                <HiOutlineMail />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/TheMohdAmer"
                target="_blank"
                rel="Error 404"
                className="p-4 rounded-full bg-[#DCD6F7] hover:bg-[#DCD6F7] dark:bg-[#000030] dark:hover:bg-[#000040] 
          text-black dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-white transition duration-300 
           hover:-translate-y-1"
              >
                <FaGithub />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/mohdamer2957"
                target="_blank"
                rel="Error 404"
                className="p-4 rounded-full bg-[#DCD6F9] hover:bg-[#DCD6F7] dark:bg-[#000030] dark:hover:bg-[#000040] 
          text-black dark:text-zinc-400 dark:hover:text-white transition duration-300 
           hover:-translate-y-1"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
