'use client';

import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Vérifier la préférence système
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Vérifier le localStorage
    const stored = localStorage.getItem('darkMode');
    
    if (stored !== null) {
      setIsDark(stored === 'true');
      if (stored === 'true') {
        document.documentElement.classList.add('dark');
      }
    } else if (mediaQuery.matches) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }

    // Écouter les changements de préférence système
    const handler = (e: MediaQueryListEvent) => {
      if (localStorage.getItem('darkMode') === null) {
        setIsDark(e.matches);
        if (e.matches) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const toggle = () => {
    const newValue = !isDark;
    setIsDark(newValue);
    localStorage.setItem('darkMode', String(newValue));
    
    if (newValue) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return { isDark, toggle, mounted };
};
