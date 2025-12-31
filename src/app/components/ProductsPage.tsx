export function ProductsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="reveal-up flex flex-col gap-4">
        <span className="text-xs uppercase tracking-[0.4em] text-amber-600">Products</span>
        <h1 className="text-4xl font-semibold text-amber-950">Prototype archive</h1>
        <p className="max-w-2xl text-base text-amber-800">
          A look at past products and experiments, reimagined for the new visual language.
        </p>
      </div>

      <section className="mt-12 grid gap-4 stagger">
        {['Immersive portfolio', 'Realtime dashboard', 'Story-driven blog'].map((title) => (
          <article
            key={title}
            className="rounded-2xl border border-amber-200/80 bg-amber-50/90 p-6 shadow-[0_20px_40px_rgba(216,165,110,0.18)] backdrop-blur-sm"
          >
            <h2 className="text-lg font-semibold text-amber-950">{title}</h2>
            <p className="mt-2 text-sm text-amber-800">
              Detailed case studies and iteration notes are coming soon.
            </p>
          </article>
        ))}
      </section>
    </div>
  );
}
