/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';


// Creamos el contexto
export const ThemeContext = createContext();

// Proveedor del contexto
export function ThemeProvider({ children }) {
  // Intenta obtener el tema del localStorage
  let localStorageTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(localStorageTheme || 'light'); // Usa el tema del localStorage si está disponible, de lo contrario, usa 'light'
  // Guardamos el tema actual en el storage
  localStorage.setItem("theme", theme)

  // Función para cambiar el tema
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}