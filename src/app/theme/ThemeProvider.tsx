import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { applyThemeMode, getInitialMode, getNextMode, type ThemeMode } from './themeState';

type ThemeContextValue = {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  toggle: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

type ThemeProviderProps = {
  children: React.ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [mode, setMode] = useState<ThemeMode>(() => {
    const initialMode = getInitialMode();
    applyThemeMode(initialMode);
    return initialMode;
  });

  useEffect(() => {
    applyThemeMode(mode);
  }, [mode]);

  const toggle = useCallback(() => {
    setMode((currentMode) => getNextMode(currentMode));
  }, []);

  const value = useMemo(() => ({ mode, setMode, toggle }), [mode, toggle]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('ThemeProvider is missing in the component tree.');
  }

  return context;
}
