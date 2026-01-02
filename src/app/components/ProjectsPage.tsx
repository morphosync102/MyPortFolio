import { contentConfig } from '../content/contentConfig.js';

export function ProjectsPage() {
  const { projectItems } = contentConfig;

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="reveal-up flex flex-col gap-4">
        <span className="text-xs uppercase tracking-[0.4em] text-amber-600 dark:text-slate-400">Projects</span>
        <h1 className="text-4xl font-semibold text-amber-950 dark:text-slate-100">制作したプロダクト</h1>
        <p className="max-w-2xl text-base text-amber-800 dark:text-slate-300">
          これまでに作成した制作物をまとめています。
        </p>
      </div>

      {projectItems.length > 0 && (
        <section className="reveal-up delay-2 mt-12">
          <div className="grid gap-4 stagger">
            {projectItems.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-amber-200/80 bg-amber-50/90 p-6 shadow-[0_20px_40px_rgba(216,165,110,0.18)] backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/90 dark:shadow-none"
              >
                <h2 className="text-lg font-semibold text-amber-950 dark:text-slate-200">{item.name}</h2>
                <p className="mt-2 text-sm text-amber-800 dark:text-slate-400">{item.summary}</p>
                {item.href && (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex text-xs font-semibold uppercase tracking-[0.2em] text-amber-800 transition hover:text-amber-950 dark:text-slate-400 dark:hover:text-slate-200"
                  >
                    View project →
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
