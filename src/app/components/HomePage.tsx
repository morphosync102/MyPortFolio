import { Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { contentConfig } from '../content/contentConfig.js';
import { getVisibleSocialLinks } from './socialLinkUtils.js';

export function HomePage() {
  const visibleSocialLinks = getVisibleSocialLinks(contentConfig.socialLinks);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="glow-pulse absolute -left-10 top-6 h-40 w-40 rounded-full bg-amber-200/60 blur-3xl dark:bg-slate-700/20" />
        <div className="glow-pulse absolute right-8 top-24 h-32 w-32 rounded-full bg-orange-200/60 blur-3xl dark:bg-slate-600/20" />
        <div className="absolute bottom-16 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-amber-100/70 blur-[90px] dark:bg-slate-500/10" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24">
        <div className="flex flex-col items-start gap-12">
          <div className="max-w-2xl">
            <div className="reveal-up inline-flex flex-wrap items-center gap-3 rounded-full border border-amber-200/80 bg-amber-50/90 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-amber-700 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/90 dark:text-slate-300">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              Updated {contentConfig.lastUpdated}
            </div>
            <h1 className="reveal-up delay-1 mt-6 text-4xl font-semibold leading-tight text-amber-950 sm:text-6xl dark:text-slate-100">
              Hi, I'm Yudai Ishigaki
            </h1>
            <p className="reveal-up delay-2 mt-6 text-base text-amber-800 sm:text-lg dark:text-slate-300">
              システムエンジニア 石垣雄大のポートフォリオサイトです。日々の開発記録や趣味の活動を発信しています。
            </p>
            <div className="reveal-up delay-3 mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/profile"
                className="rounded-full border border-amber-200/80 bg-amber-50/90 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-800 transition hover:bg-amber-100/80 hover:text-amber-950 dark:border-slate-700 dark:bg-slate-800/90 dark:text-slate-200 dark:hover:bg-slate-700/80 dark:hover:text-slate-100"
              >
                Profile
              </Link>
              <Link
                to="/blog"
                className="rounded-full border border-amber-200/80 bg-amber-50/90 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-800 transition hover:bg-amber-100/80 hover:text-amber-950 dark:border-slate-700 dark:bg-slate-800/90 dark:text-slate-200 dark:hover:bg-slate-700/80 dark:hover:text-slate-100"
              >
                Blog
              </Link>
              <Link
                to="/projects"
                className="rounded-full border border-amber-200/80 bg-amber-50/90 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-800 transition hover:bg-amber-100/80 hover:text-amber-950 dark:border-slate-700 dark:bg-slate-800/90 dark:text-slate-200 dark:hover:bg-slate-700/80 dark:hover:text-slate-100"
              >
                Projects
              </Link>
              {visibleSocialLinks.length > 0 && (
                <div className="flex items-center gap-2 pl-2">
                  {visibleSocialLinks.map((link) => {
                    const Icon = link.icon === 'linkedin' ? Linkedin : Github;
                    return (
                      <a
                        key={link.id}
                        href={link.href}
                        target={link.openInNewTab ? '_blank' : undefined}
                        rel={link.openInNewTab ? 'noopener noreferrer' : undefined}
                        className="rounded-full border border-amber-200/80 bg-amber-50/90 p-2 text-amber-700 transition hover:bg-amber-100 hover:text-amber-950 dark:border-slate-700 dark:bg-slate-800/90 dark:text-slate-400 dark:hover:bg-slate-700/80 dark:hover:text-slate-200"
                        aria-label={link.label}
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
