import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;

    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <div
      onClick={() => setDark(!dark)}
      className="
        w-10 h-5 md:w-12 md:h-6
        flex items-center
        bg-zinc-100/90 dark:bg-zinc-800/90
        backdrop-blur-md
        rounded-full p-1
        cursor-pointer
        transition-all duration-1000
        active:scale-95
      "
    >
      <div
        className={`
          w-4 h-4 md:w-5 md:h-5
          flex items-center justify-center
          bg-white dark:bg-black
          rounded-full shadow-md
          transform transition-all duration-300 ease-in-out
          ${dark ? "translate-x-4 md:translate-x-5" : "translate-x-0"}
        `}
      >
        <span className="text-xs md:text-sm">
          {dark ? "🌙" : "🔆"}
        </span>
      </div>
    </div>
  );
}