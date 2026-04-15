// components/ProjectModal.jsx
export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white dark:bg-zinc-900 max-w-lg w-full p-6 rounded-2xl relative">

        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold">{project.title}</h2>

        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-1 text-sm bg-purple-500/10 text-purple-500 rounded"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-4">
          <button className="px-4 py-2 bg-purple-600 text-white rounded">
            Live Demo
          </button>
          <button className="px-4 py-2 border rounded">
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
}