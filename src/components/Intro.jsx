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
          className="p-12 pb-16 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-[#DCD6F7] 
            dark:bg-[#000020] hover:shadow-lg hover:scale-[1.01] transition duration-300"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-10">About Me</h2>
          <div
            className="p-6 rounded-2xl bg-[#DCD6f7] dark:bg-[#000018] border border-zinc-200 dark:border-zinc-800 pb-10 
      hover:shadow-lg hover:scale-[1.04] 
      transition duration-300"
          >
            <h3 className="mt-4 text-md text-zinc-600 dark:text-zinc-400">
              I am a full-stack developer who enjoys building complete web
              applications from frontend to backend. I focus on writing clean
              and structured code, ensuring that applications are easy to
              maintain and scale.
              <br />I like working on real-world problems and designing systems
              step by step, from user interface to backend logic and data
              handling. <br />I prefer a practical approach to development,
              learning by building and improving through hands-on experience.
            </h3>
          </div>

          {/* GRID */}
          <div className="mt-6 grid md:grid-cols-2 gap-8 ">
            {/* ABOUT */}

            {/* JOURNEY */}
            <div
              className="p-6 rounded-2xl bg-[#DCD6f7] dark:bg-[#000018] border border-zinc-200 dark:border-zinc-800 pb-10 
      hover:shadow-lg hover:scale-[1.04] 
      transition duration-300"
            >
              <h3 className="font-semibold mb-4">My Journey</h3>

              <ul className="grid  gap-3 text-zinc-600 dark:text-zinc-400 text-md">
                <li>
                  • Started with HTML, CSS, and JavaScript, building basic web
                  interfaces
                </li>
                <li>
                  • Built dynamic applications using React and component-based
                  architecture
                </li>
                <li>
                  • Implemented state management using Redux Toolkit and handled
                  server state with TanStack Query
                </li>
                <li>
                  • Developed backend systems using Java, Spring, and Spring
                  Boot
                </li>
                <li>• Built REST APIs using Spring Boot and Node.js</li>
                <li>
                  • Worked with MySQL and MongoDB for data storage and
                  management
                </li>
                <li>
                  • Explored scalable system design using microservices
                  architecture
                </li>
              </ul>
            </div>

            {/* CURRENT FOCUS */}
            <div
              className="p-6 rounded-2xl bg-[#DCD6f7] dark:bg-[#000018] border border-zinc-200 dark:border-zinc-800 pb-10 
      hover:shadow-lg hover:scale-[1.04] 
      transition duration-300"
            >
              <h3 className="font-semibold mb-4">Current Focus</h3>

              <ul className="grid  gap-3 text-zinc-600 dark:text-zinc-400 text-md">
                <li>• Building full-stack applications</li>
                <li>• Improving performance and API efficiency</li>
                <li>• Writing clean, maintainable code</li>
                <li>• Strengthening system design understanding</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
