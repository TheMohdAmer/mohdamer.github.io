import { useState } from "react";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Inventory Dashboard",
      desc: "Developed an inventory dashboard for managing products, tracking stock levels, and visualizing data through interactive charts and reports. Implemented admin and user authentication, built dynamic tables using Ant Design and AG Grid, and integrated ECharts with backend APIs for real-time, scalable performance.",
      link:"https://github.com/TheMohdAmer/Projects/tree/main/inventory-dashboard",
      tech: ["React", "Redux Toolkit", "Ant Design"],
      category: "Frontend",
      image: "../inventory_dashboard_bg.png",
    },
    {
      id: 2,
      title: "Chat Application",
      desc: "Developed a real-time chat application for seamless one-to-one messaging with instant updates and a responsive UI built using React and Redux Toolkit. Integrated Node.js APIs with MySQL database to handle user data and messages efficiently, ensuring scalable and smooth performance.",
      link:"https://github.com/TheMohdAmer/Projects/tree/main/ChatApp",
      tech: [
        "React",
        "Ant Design",
        "Redux Toolkit",
        "WebSockets",
        "Node Js [ APIs ]",
        "Java [ Logic ]",
        "MySQL",
      ],
      category: "FullStack",
      image: "../Chat_Application_bg_Image.png",
    },
  ];

  const categories = ["All", "Frontend", "Backend", "FullStack"];

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <div>
        <section id="Projects" className="min-h-screen py-20 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Recent Projects</h2>

            {/* GRID */}
            <div className="mt-14 grid md:grid-cols-2 gap-6">
              {filtered.map((p) => (
                <div
                  key={p.id}
                  onClick={() => onSelect(p)}
                  className="p-12 pb-10 rounded-2xl border border-zinc-200 dark:border-zinc-800 
      bg-[#DCD6f7] dark:bg-[#000022] 
      hover:shadow-lg hover:scale-[1.04] 
      transition duration-300"
                >
                  {/* CONTENT */}
                  <h3 className="text-2xl font-semibold mb-6 ">{p.title}</h3>

                  <p className="mt-6 text-md text-justify">
                    {p.desc}
                  </p>
                  <span className="flex justify-end">
                    <a
                      target="_blank"
                      href={p.link}
                      className="mt-6 mb-2 hover:text-purple-500"
                    >
                      View Code →
                    </a>
                  </span>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-4 py-2 rounded bg-purple-500/10 text-purple-600  dark:text-yellow-500"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
