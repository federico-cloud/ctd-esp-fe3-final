/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';


// Creamos el contexto
export const ThemeContext = createContext();

// Proveedor del contexto
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light'); // Inicializamos con el tema "claro"

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

// Hook personalizado para acceder al contexto
export function useTheme() {
  return useContext(ThemeContext);
}