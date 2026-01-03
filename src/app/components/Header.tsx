import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { cn } from './ui/utils';
import { contentConfig } from '../content/contentConfig.js';
import { isNavActive } from './headerUtils.js';
import { getHeaderClassName } from './layoutUtils.js';
import { ThemeToggle } from './ThemeToggle.js';

export function Header() {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const githubLink = contentConfig.socialLinks.find((link) => link.id === 'github');
  const linkedinLink = contentConfig.socialLinks.find((link) => link.id === 'linkedin');
  const navItems = contentConfig.navItems.filter((item) => item.id !== 'home');

  return (
    <header className={getHeaderClassName()}>
      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center justify-between px-6 reveal-down">
        <Link
          to="/"
          className="inline-flex min-h-[44px] items-center p-4 text-xs font-semibold uppercase tracking-[0.35em] text-amber-950 dark:text-slate-100"
        >
          {contentConfig.siteName}
        </Link>
        <nav className="hidden items-center gap-2 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.href}
              className={cn(
                'inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition-colors active:bg-amber-200/80 active:text-amber-950 dark:active:bg-slate-700/80 dark:active:text-slate-100',
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
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-amber-200/80 bg-amber-50/90 p-2 text-amber-700 transition-colors hover:bg-amber-200/80 hover:text-amber-950 active:bg-amber-200/80 active:text-amber-950 dark:border-slate-700 dark:bg-slate-800/90 dark:text-slate-400 dark:hover:bg-slate-700/80 dark:hover:text-slate-200 dark:active:bg-slate-700/80 dark:active:text-slate-200"
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
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-amber-200/80 bg-amber-50/90 p-2 text-amber-700 transition-colors hover:bg-amber-200/80 hover:text-amber-950 active:bg-amber-200/80 active:text-amber-950 dark:border-slate-700 dark:bg-slate-800/90 dark:text-slate-400 dark:hover:bg-slate-700/80 dark:hover:text-slate-200 dark:active:bg-slate-700/80 dark:active:text-slate-200"
              aria-label={linkedinLink.label}
            >
              <Linkedin className="h-5 w-5" />
            </a>
          ) : null}
          <button
            type="button"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-amber-200/80 bg-amber-50/90 p-2 text-amber-700 transition-colors hover:bg-amber-200/80 hover:text-amber-950 active:bg-amber-200/80 active:text-amber-950 dark:border-slate-700 dark:bg-slate-800/90 dark:text-slate-400 dark:hover:bg-slate-700/80 dark:hover:text-slate-200 dark:active:bg-slate-700/80 dark:active:text-slate-200 lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
        className={cn(
          'absolute left-0 right-0 top-full z-[60] overflow-hidden border-b border-amber-200/80 bg-amber-50/95 px-6 py-4 backdrop-blur-xl transition-all duration-300 ease-out dark:border-amber-100/20 dark:bg-amber-950/80 lg:hidden',
          isMenuOpen
            ? 'max-h-[320px] opacity-100'
            : 'max-h-0 opacity-0 pointer-events-none'
        )}
      >
        <div className="flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                'inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition-colors active:bg-amber-200/80 active:text-amber-950 dark:active:bg-slate-700/80 dark:active:text-slate-100',
                isNavActive(pathname, item.href)
                  ? 'bg-amber-200/80 text-amber-950 dark:bg-slate-700/80 dark:text-slate-100'
                  : 'text-amber-700 hover:bg-amber-100/80 hover:text-amber-950 dark:text-slate-400 dark:hover:bg-slate-800/80 dark:hover:text-slate-200'
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
