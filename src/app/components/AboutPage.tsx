import { contentConfig } from '../content/contentConfig.js';

export function AboutPage() {
  const { aboutItems, techStackItems } = contentConfig;

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="reveal-up flex flex-col gap-4">
        <span className="text-xs uppercase tracking-[0.4em] text-amber-600">About</span>
        <h1 className="text-4xl font-semibold text-amber-950">Mindset and tools</h1>
        <p className="max-w-2xl text-base text-amber-800">
          A quick snapshot of the principles that guide the work and the tools used to
          build immersive, human-centered experiences.
        </p>
      </div>

      {aboutItems.length > 0 && (
        <section className="reveal-up delay-2 mt-12">
          <h2 className="text-lg font-semibold uppercase tracking-[0.2em] text-amber-700">Mindset</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 stagger">
            {aboutItems.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-amber-200/80 bg-amber-50/90 p-6 shadow-[0_20px_40px_rgba(216,165,110,0.18)] backdrop-blur-sm"
              >
                <h3 className="text-base font-semibold text-amber-950">{item.title}</h3>
                <p className="mt-2 text-sm text-amber-800">{item.body}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {techStackItems.length > 0 && (
        <section className="reveal-up delay-3 mt-12">
          <h2 className="text-lg font-semibold uppercase tracking-[0.2em] text-amber-700">Tech Stack</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {techStackItems.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-amber-200/80 bg-amber-50/90 p-6 shadow-[0_20px_40px_rgba(216,165,110,0.18)] backdrop-blur-sm"
              >
                <div className="text-base font-semibold text-amber-950">{item.name}</div>
                {item.category && (
                  <div className="mt-1 text-sm text-amber-600">{item.category}</div>
                )}
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
