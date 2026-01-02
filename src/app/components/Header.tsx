import { Link, useLocation } from 'react-router-dom';
import { Github, Linkedin } from 'lucide-react';
import { cn } from './ui/utils';
import { contentConfig } from '../content/contentConfig.js';
import { isNavActive } from './headerUtils.js';
import { getHeaderClassName } from './layoutUtils.js';
import { ThemeToggle } from './ThemeToggle.js';

export function Header() {
  const { pathname } = useLocation();
  const githubLink = contentConfig.socialLinks.find((link) => link.id === 'github');
  const linkedinLink = contentConfig.socialLinks.find((link) => link.id === 'linkedin');

  return (
    <header className={getHeaderClassName()}>
      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center justify-between px-6 reveal-down">
        <Link
          to="/"
          className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-950 dark:text-slate-100"
        >
          {contentConfig.siteName}
        </Link>
        <nav className="flex items-center gap-2">
          {contentConfig.navItems
            .filter((item) => item.id !== 'home')
            .map((item) => (
              <Link
                key={item.id}
                to={item.href}
                className={cn(
                  'rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition-colors',
                  isNavActive(pathname, item.href)
                    ? 'bg-amber-200/80 text-amber-950 dark:bg-slate-700/80 dark:text-slate-100'
                    : 'text-amber-700 hover:bg-amber-100/80 hover:text-amber-950 dark:text-slate-400 dark:hover:bg-slate-800/80 dark:hover:text-slate-200'
                )}
              >
                {item.label}
              </Link>
            ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          {githubLink ? (
            <a
              href={githubLink.href}
              target={githubLink.openInNewTab ? '_blank' : undefined}
              rel={githubLink.openInNewTab ? 'noopener noreferrer' : undefined}
              className="rounded-full border border-amber-200/80 bg-amber-50/90 p-2 text-amber-700 transition-colors hover:bg-amber-200/80 hover:text-amber-950 dark:border-slate-700 dark:bg-slate-800/90 dark:text-slate-400 dark:hover:bg-slate-700/80 dark:hover:text-slate-200"
              aria-label={githubLink.label}
            >
              <Github className="h-5 w-5" />
            </a>
          ) : null}
          {linkedinLink ? (
            <a
              href={linkedinLink.href}
              target={linkedinLink.openInNewTab ? '_blank' : undefined}
              rel={linkedinLink.openInNewTab ? 'noopener noreferrer' : undefined}
              className="rounded-full border border-amber-200/80 bg-amber-50/90 p-2 text-amber-700 transition-colors hover:bg-amber-200/80 hover:text-amber-950 dark:border-slate-700 dark:bg-slate-800/90 dark:text-slate-400 dark:hover:bg-slate-700/80 dark:hover:text-slate-200"
              aria-label={linkedinLink.label}
            >
              <Linkedin className="h-5 w-5" />
            </a>
          ) : null}
        </div>
      </div>
    </header>
  );
}
