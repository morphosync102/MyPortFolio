import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-start px-6 py-20">
      <span className="text-xs uppercase tracking-[0.4em] text-amber-600 dark:text-slate-400">Error</span>
      <h1 className="mt-4 text-3xl font-semibold text-amber-950 dark:text-slate-100 sm:text-4xl">404</h1>
      <p className="mt-4 max-w-xl text-base text-amber-800 dark:text-slate-300">
        お探しのページは見つかりませんでした。URLをご確認のうえ、もう一度お試しください。
      </p>
      <Link
        to="/"
        className="mt-8 rounded-full border border-amber-200/80 bg-amber-50/90 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-800 transition hover:bg-amber-100/80 hover:text-amber-950 dark:border-slate-700 dark:bg-slate-800/90 dark:text-slate-200 dark:hover:bg-slate-700/80 dark:hover:text-slate-100"
      >
        Back Home
      </Link>
    </div>
  );
}
