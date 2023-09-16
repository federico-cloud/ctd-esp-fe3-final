import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import '../css/Notfound.css'

export const Notfound = () => {

  // Damos contexto del tema
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`notfound ${theme}`}>
      <img src="src/assets/error.gif" alt="Gif de error"/>
      <p>ERROR: The page doesn't exists</p>
    </div>
  )
}
