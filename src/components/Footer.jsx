import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import '../css/Footer.css'

export const Footer = () => {

  const { theme } = useContext(ThemeContext)

  return (
    <footer className={`${theme}`}>
      Footer
    </footer>
  )
}
