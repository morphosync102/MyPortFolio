export type ThemeMode = 'light' | 'dark';

const prefersDarkQuery = '(prefers-color-scheme: dark)';

export function getInitialMode(): ThemeMode {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return 'light';
  }

  try {
    return window.matchMedia(prefersDarkQuery).matches ? 'dark' : 'light';
  } catch {
    return 'light';
  }
}

export function getNextMode(currentMode: ThemeMode): ThemeMode {
  return currentMode === 'dark' ? 'light' : 'dark';
}

export function applyThemeMode(mode: ThemeMode): void {
  if (typeof document === 'undefined') {
    return;
  }

  document.documentElement.classList.toggle('dark', mode === 'dark');
}
