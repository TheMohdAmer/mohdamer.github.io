// components/SkillCard.jsx
export default function SkillCard({ title, children, onClick }) {
  return (
    <div
      onClick={onClick}
      className="p-5 rounded-2xl cursor-pointer 
      bg-zinc-100 dark:bg-zinc-900 
      border border-zinc-200 dark:border-zinc-800
      hover:scale-[1.02] hover:shadow-lg
      transition duration-300"
    >
      <h3 className="font-semibold text-lg">{title}</h3>

      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
        {children}
      </p>
    </div>
  );
}