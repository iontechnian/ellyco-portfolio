import { useState, useEffect, ReactNode } from 'react';
import { useThemeContext, Theme } from './themeUtils';

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Check for saved theme or prefer-color-scheme
  const getInitialTheme = (): Theme => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as Theme;
      if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
      
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? 'dark' : 'light';
    }
    return 'dark'; // Default theme for SSR
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    // Update localStorage and document class when theme changes
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme: Theme) => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <useThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </useThemeContext.Provider>
  );
} 