import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../theme/ThemeProvider';

export function ThemeToggle() {
  const { mode, toggle } = useTheme();
  const isDark = mode === 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="fixed right-6 top-20 z-[60] rounded-full border border-amber-200/80 bg-amber-50/95 p-4 text-amber-700 shadow-[0_18px_32px_rgba(80,50,30,0.24)] transition-colors hover:bg-amber-200/80 hover:text-amber-950 dark:border-amber-100/20 dark:bg-amber-950/60 dark:text-amber-100 dark:hover:bg-amber-900/70"
    >
      {isDark ? <Moon className="h-7 w-7" /> : <Sun className="h-7 w-7" />}
    </button>
  );
}
