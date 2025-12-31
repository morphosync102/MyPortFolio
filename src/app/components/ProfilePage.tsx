export function ProfilePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="reveal-up flex flex-col gap-4">
        <span className="text-xs uppercase tracking-[0.4em] text-amber-600">Profile</span>
        <h1 className="text-4xl font-semibold text-amber-950">Experience snapshot</h1>
        <p className="max-w-2xl text-base text-amber-800">
          A compact view of background, skills, and the path that shapes the work.
        </p>
      </div>

      <section className="mt-12 grid gap-6 stagger stagger lg:grid-cols-2">
        <article className="rounded-2xl border border-amber-200/80 bg-amber-50/90 p-6 backdrop-blur-sm">
          <h2 className="text-lg font-semibold text-amber-950">Profile</h2>
          <p className="mt-2 text-sm text-amber-800">Web developer focused on spatial interfaces.</p>
          <p className="mt-4 text-sm text-amber-600">
            Building calm, expressive experiences with modern web technology.
          </p>
        </article>
        <article className="rounded-2xl border border-amber-200/80 bg-amber-50/90 p-6 backdrop-blur-sm">
          <h2 className="text-lg font-semibold text-amber-950">Skills</h2>
          <ul className="mt-3 space-y-2 text-sm text-amber-800">
            <li>React / TypeScript / Vite</li>
            <li>Three.js / React Three Fiber</li>
            <li>UI systems / Motion / Interaction</li>
          </ul>
        </article>
      </section>
    </div>
  );
}
