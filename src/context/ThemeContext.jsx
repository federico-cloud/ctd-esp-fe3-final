import { createContext, useState, useMemo, useEffect } from 'react';

export const ThemeContext = createContext();

// eslint-disable-next-line react/prop-types
export function ThemeProvider({ children }) {
  // Intenta obtener el tema del localStorage al cargar el componente
  const localStorageTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(localStorageTheme || 'light');

  // Usamos useMemo para memorizar el valor de theme
  const memorizedTheme = useMemo(() => theme, [theme]);

  // Cuando el tema cambia, actualizamos el localStorage
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme: memorizedTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}