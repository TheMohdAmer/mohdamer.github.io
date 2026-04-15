import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [active, setActive] = useState("Frontend");
  const [open, setOpen] = useState(false);

  const links = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Contact"
  ];

  useEffect(() => {
    const handleScroll = () => {
      links.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#DCD6F7] dark:bg-[#000016] backdrop-blur border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center h-18">

        <h1 className="font-bold text-2xl">Mohd Amer</h1>

        {/* Desktop */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className={`text-md ${
                active === link
                  ? "text-purple-500 font-semibold"
                  : "hover:text-purple-500"
              }`}
            >
              {link}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)}>☰</button>
        </div>
      </div>

      {open && (
        <div className="md:hidden absolute right-0 mt-2 w-1/3 bg-zinc-800/90 backdrop-blur-md p-6 rounded-lg shadow-lg text-right flex flex-col gap-6">
          
          {links.map((link) => (
            <a key={link} href={`#${link}`} onClick={() => setOpen(false)} className="hover:text-zinc-400">
              {link}
            </a>
          ))}
        </div>
        
      )}
    </nav>
  );
}